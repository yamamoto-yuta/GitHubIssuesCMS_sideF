import { NextPage, InferGetStaticPropsType } from 'next'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getAllTags, getProfileJson, ProfileJson, Tag } from '../lib/api'
import { CustomContainer } from '../components/Container'
import { CustomAppBarWithTitle } from '../components/AppBar'
import Head from 'next/head'
import { TagButtons } from '../components/TagButton'
import { PageTitle } from '../components/Title'
import Copyright from '../src/Copyright'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Works: NextPage<Props> = ({ profile }: { profile: ProfileJson }) => {
  return (
    <div>
      <Head>
        <title>{`Works | ${profile.blog_title}`}</title>
        <meta name="description" content={`${profile.blog_title} my works.`} />
        <link rel="icon" href={`${profile.root_url}/static/favicon.ico`} />
      </Head>
      <CustomAppBarWithTitle profile={profile} />
      <CustomContainer>
        <div>
          <main>
            <PageTitle title={'作品'} />
          </main>
          <footer>
            <Copyright profile={profile} />
          </footer>
        </div>
      </CustomContainer>
    </div>
  )
}

export default Works

export const getStaticProps = async () => {
  const profile: ProfileJson = getProfileJson()
  return {
    props: {
      profile,
    },
  }
}
