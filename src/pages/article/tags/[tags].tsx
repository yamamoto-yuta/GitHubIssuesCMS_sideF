import { Box, Grid, SelectChangeEvent } from '@mui/material'
import Head from 'next/head'
import { useContext, useState } from 'react'
import { PostCards } from '../../../components/PostCard'
import { PageTitle } from '../../../components/Title'
import {
  getTagedPosts,
  getAllTags,
  Post,
  getProfileJson,
  ProfileJson,
  Tag,
} from '../../../lib/api'
import { CustomPagination } from '../../../components/Pagination'
import { CustomAppBarWithTitle } from '../../../components/AppBar'
import { CustomContainer } from '../../../components/Container'
import Copyright from '../../../src/Copyright'
import { YearSelector } from '../../../components/YearSelector'
import { getNow } from '../../../lib/datetime'
import { RootUrl, RootUrlContext } from '../../_app'

const postNumPerPage = 14 // １ページあたりの記事数

export default function TagsPosts({
  posts,
  tag_name,
  profile,
  years,
}: {
  posts: Post[]
  tag_name: string
  profile: ProfileJson
  years: string[]
}) {
  const title: string = `tag="${tag_name}"`

  // Pagenation
  const [page, setPage] = useState(1)
  
  const [year, setYear] = useState('all');
  const handleChange = (event: SelectChangeEvent) => {
    setYear(event.target.value as string);
  };
  const now: string = getNow()
  posts = posts
  .filter((post) => post.posted_at <= now)
  .filter((post) => post.posted_at.slice(0,4) === year || year === 'all')
  const postNum: number = posts.length // 全記事数
  const pageNum: number = Math.floor((postNum - 1) / postNumPerPage) + 1 // 全ページ数

  return (
    <div>
      <Head>
        <title>{`記事一覧: ${title} | ${profile.blog_title}`}</title>
        <meta
          name="description"
          content={`${profile.blog_title} taged article list`}
        />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <CustomAppBarWithTitle profile={profile} />
      <CustomContainer>
        <div>
          <main>
            <article>
              <div id="paginationAnchor" />
              <PageTitle title={title} />
              <div>
                <Box sx={{ m: 2 }} />
                <Grid container>
                  <Grid item xs={10}></Grid>
                  <Grid item xs={2}>
                    <YearSelector year={year} years={years} handleChange={handleChange}/>
                  </Grid>
                </Grid>
                <Box sx={{ m: 1 }} />
                <CustomPagination
                  pageNum={pageNum}
                  page={page}
                  setPage={setPage}
                />
                <Box sx={{ m: 4 }} />
                <PostCards
                  posts={posts}
                  page={page}
                  postNumPerPage={postNumPerPage}
                  url_subpath={profile.url_subpath}
                />
                <CustomPagination
                  pageNum={pageNum}
                  page={page}
                  setPage={setPage}
                />
              </div>
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

export async function getStaticPaths() {
  const paths = getAllTags().map((tag) => {
    return `/article/tags/${tag.name}`
  })
  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: any) {
  const tag_name: string = params.tags
  const posts: Post[] = getTagedPosts(tag_name)
  const profile: ProfileJson = getProfileJson()
  const years: string[] = Array.from(new Set(posts.map((post)=> {return post.posted_at.slice(0,4)})).values()).sort()
  return {
    props: {
      posts,
      tag_name,
      profile,
      years,
    },
  }
}
