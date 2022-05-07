import Head from 'next/head'
import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../src/theme'
import createEmotionCache from '../src/createEmotionCache'
import React, { Dispatch, useState } from 'react'
import { ExternalMetadata, Post, PostsMap } from '../lib/api'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

export const PostsContext = React.createContext(
  {} as {
    posts: PostsMap
    setPosts: Dispatch<React.SetStateAction<PostsMap>>
  },
)

export const ExternalMetadataContext = React.createContext(
  {} as {
    metadata: ExternalMetadata
    setMetadata: Dispatch<React.SetStateAction<ExternalMetadata>>
  },
)

export type RootUrl = {
  root_url: string
  url_scheme: string
  url_domain: string
  url_subpath: string
}

export const RootUrlContext = React.createContext(
  {} as {
    rootUrl: RootUrl
    setRootUrl: Dispatch<React.SetStateAction<RootUrl>>
  },
)

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
  const initPosts: PostsMap = Object.create(null)
  const initMetadata: ExternalMetadata = Object.create(null)
  const initRootUrl: RootUrl = {root_url: '', url_scheme: '', url_domain: '', url_subpath: ''}
  const [posts, setPosts] = useState(initPosts)
  const [metadata, setMetadata] = useState(initMetadata)
  const [rootUrl, setRootUrl] = useState(initRootUrl)
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <RootUrlContext.Provider value={{ rootUrl, setRootUrl }}>
          <ExternalMetadataContext.Provider value={{ metadata, setMetadata }}>
            <PostsContext.Provider value={{ posts, setPosts }}>
              <Component {...pageProps} />
            </PostsContext.Provider>
          </ExternalMetadataContext.Provider>
        </RootUrlContext.Provider>
      </ThemeProvider>
    </CacheProvider>
  )
}
