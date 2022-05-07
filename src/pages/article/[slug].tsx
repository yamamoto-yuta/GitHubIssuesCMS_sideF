import { NextPage, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import {
  ExternalMetadata,
  getAllPosts,
  getPostBySlug,
  getProfileJson,
  getRelatedJson,
  getResourcesJson,
  Post,
  PostsMap,
  postsToMap,
  ProfileJson,
} from '../../lib/api'
import { getNow } from '../../lib/datetime'
import { MarkdownRenderer } from '../../components/MarkdownRenderer'
import { Typography, Box, Divider } from '@mui/material'
import Copyright from '../../src/Copyright'
import { TagButtons } from '../../components/TagButton'
import { PageTitle } from '../../components/Title'
import { CustomAppBarWithTitle } from '../../components/AppBar'
import { CustomContainer } from '../../components/Container'
import { useContext } from 'react'
import { ExternalMetadataContext, PostsContext, RootUrl, RootUrlContext } from '../_app'
import { DisqusComments } from '../../components/Comment'
import { PostCards } from '../../components/PostCard'

type Props = InferGetStaticPropsType<typeof getStaticProps>

/**
 * 記事のパスを取得する
 */
export const getStaticPaths = async () => {
  const posts = getAllPosts(['slug'])
  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}

/**
 * 記事の内容を取得する
 */
export const getStaticProps = async ({ params }: any) => {
  const post = await getPostBySlug(params.slug, [
    'slug',
    'title',
    'posted_at',
    'updated_at',
    'content',
    'tags',
    'description',
  ])
  const profile = getProfileJson()
  const metadata = getResourcesJson()
  const allPosts = getAllPosts(['slug', 'title', 'posted_at', 'tags'])
  const posts = postsToMap(allPosts)
  const relatedSlugs = getRelatedJson()[post.slug]
  const relatedPosts = relatedSlugs.map((slug) => {return posts[slug]})
  return {
    props: { post, profile, posts, metadata, relatedPosts },
  }
}

const Post: NextPage<Props> = ({
  post,
  profile,
  posts,
  metadata,
  relatedPosts,
}: {
  post: Post
  profile: ProfileJson
  posts: PostsMap
  metadata: ExternalMetadata
  relatedPosts: any
}) => {
  const { setPosts } = useContext(PostsContext)
  setPosts(posts)
  const { setMetadata } = useContext(ExternalMetadataContext)
  setMetadata(metadata)
  const { setRootUrl } = useContext(RootUrlContext)
  const rootUrl: RootUrl = {root_url: profile.root_url, url_scheme: profile.url_scheme, url_domain: profile.url_domain, url_subpath: profile.url_subpath}
  setRootUrl(rootUrl)

  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  const now = getNow()
  if (post?.posted_at > now) {
    return <ErrorPage statusCode={404} />
  }
  if (post.description === ''){
    post.description = `${profile.author_name}の記事です。`
  }
  return (
    <div>
      <Head>
        <title>{`${post.title} | ${profile.blog_title}`}</title>
        <meta name="description" content={post.description}/>
        <meta property='og:title' content={`${post.title} | ${profile.blog_title}`}/>
        <meta property='og:description' content={post.description}/>
        <meta property="og:image" content={`${profile.root_url}/static/images/thumbnail/${post.slug}.jpg`} />
        <meta property="og:type" content="article"/>
        <meta property="og:site_name" content={profile.blog_title}/>
        <meta property="og:locale" content="ja_JP"/>
        <meta property="og:url" content={`${profile.root_url}/article/${post.slug}`}/>
        <meta name="twitter:image" content={`${profile.root_url}/static/images/thumbnail/${post.slug}.jpg`} />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <CustomAppBarWithTitle profile={profile} slug={post.slug} />
      <CustomContainer>
        <div>
          <main>
            <article>
              <PageTitle title={post.title} />
              <div>
                <Typography variant="body2" textAlign="left" sx={{ pt: 2 }}>
                  公開：{post.posted_at}
                </Typography>
                {post.updated_at && (
                  <Typography variant="body2" textAlign="left">
                    更新：{post.updated_at}
                  </Typography>
                )}
                <TagButtons tags={post.tags} sx={{ mt: 2 }} />
                <Box sx={{ m: 3 }} />
                <MarkdownRenderer>{post.content}</MarkdownRenderer>
                <Divider sx={{ pt: '3rem' }}>
                  <Typography variant="h2">
                      関連記事
                  </Typography>
                </Divider>
                <PostCards posts={relatedPosts} page={1} postNumPerPage={10} url_subpath={profile.url_subpath}/>
              </div>
              {/* <DisqusComments post={post}/> */}
            </article>
          </main>
          <footer>
            <Copyright profile={profile} />
          </footer>
        </div>
      </CustomContainer>
    </div>
  )
}

export default Post
