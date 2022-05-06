import { NextPage, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllTags, getProfileJson, ProfileJson, Tag } from '../../lib/api'
import { CustomContainer } from '../../components/Container'
import { CustomAppBarWithTitle } from '../../components/AppBar'
import Head from 'next/head'
import { TagButtons } from '../../components/TagButton'
import { PageTitle } from '../../components/Title'
import Copyright from '../../src/Copyright'
import { Box } from '@mui/material'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Post: NextPage<Props> = ({
  tags,
  profile,
}: {
  tags: Tag[]
  profile: ProfileJson
}) => {
  const router = useRouter()
  if (!router.isFallback && !tags) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
      <Head>
        <title>{`Tags | ${profile.blog_title}`}</title>
        <meta name="description" content={`${profile.blog_title} tag list`} />
        <link rel="icon" href="/static/favicon.ico" />
      </Head>
      <CustomAppBarWithTitle profile={profile} />
      <CustomContainer>
        <div>
          <main>
            <PageTitle title={'タグ一覧'} />
            <Box sx={{ m: 6 }} />
            <TagButtons tags={tags} sx={{ m: 1 }} />
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

export const getStaticProps = async () => {
  const tags: Tag[] = getAllTags()
  const profile: ProfileJson = getProfileJson()
  return {
    props: {
      tags,
      profile,
    },
  }
}
