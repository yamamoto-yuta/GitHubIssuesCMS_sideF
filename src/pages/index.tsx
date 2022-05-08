import type { InferGetStaticPropsType, NextPage } from 'next'
import Copyright from '../src/Copyright'
import Head from 'next/head'
import { CustomAppBarWithTitle } from '../components/AppBar'
import { CustomContainer } from '../components/Container'
import { PageTitle } from '../components/Title'
import { getProfileJson, ProfileJson } from '../lib/api'

type Props = InferGetStaticPropsType<typeof getStaticProps>

const Home: NextPage<Props> = ({ profile }: { profile: ProfileJson }) => {
  return (
    <div>
      <Head>
        <title>{`Tags | ${profile.blog_title}`}</title>
        <meta name="description" content={`${profile.blog_title} tag list`} />
        <link rel="icon" href={`${profile.root_url}/static/favicon.ico`} />
      </Head>
      <CustomAppBarWithTitle profile={profile} />
      <CustomContainer>
        <div>
          <main>
            <PageTitle title={'Top'} />
          </main>
          <footer>
            <Copyright profile={profile} />
          </footer>
        </div>
      </CustomContainer>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const profile: ProfileJson = getProfileJson()
  return {
    props: { profile },
  }
}
