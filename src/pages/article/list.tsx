import { NextPage, InferGetStaticPropsType } from 'next'
import { getAllPosts, Post, getProfileJson, ProfileJson } from '../../lib/api'
import { useContext, useState } from 'react'
import Head from 'next/head'
import { CustomAppBarWithTitle } from '../../components/AppBar'
import { CustomContainer } from '../../components/Container'
import { PageTitle } from '../../components/Title'
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { CustomPagination } from '../../components/Pagination'
import { PostCards } from '../../components/PostCard'
import Copyright from '../../src/Copyright'
import { PostsContext, RootUrl, RootUrlContext } from '../_app'
import { YearSelector } from '../../components/YearSelector'
import { getNow } from '../../lib/datetime'

type Props = InferGetStaticPropsType<typeof getStaticProps>
const postNumPerPage = 14 // １ページあたりの記事数

const List: NextPage<Props> = ({
  posts,
  profile,
  years,
}: {
  posts: Post[]
  profile: ProfileJson
  years: string[]
}) => {
  const [page, setPage] = useState(1)

  const { setRootUrl } = useContext(RootUrlContext)
  const rootUrl: RootUrl = {root_url: profile.root_url, url_scheme: profile.url_scheme, url_domain: profile.url_domain, url_subpath: profile.url_subpath}
  setRootUrl(rootUrl)

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
        <title>{`記事一覧 | ${profile.blog_title}`}</title>
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
              <PageTitle title={'記事一覧'} />
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
                  year={year}
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

export default List

export async function getStaticProps({ params }: any) {
  const posts: Post[] = getAllPosts(['slug', 'title', 'posted_at', 'tags'])
  const profile: ProfileJson = getProfileJson()
  const years: string[] = Array.from(new Set(posts.map((post)=> {return post.posted_at.slice(0,4)})).values()).sort()
  return {
    props: {
      posts,
      profile,
      years,
    },
  }
}
