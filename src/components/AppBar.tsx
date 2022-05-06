import * as React from 'react'
import { Container, Toolbar, AppBar, Slide, Grid } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import SideBar from './SideBar'
import { TopTitle } from './Title'
import { ProfileJson } from '../lib/api'

interface Props {
  children: React.ReactElement
}

function HideOnScroll(props: Props) {
  const { children } = props
  const trigger = useScrollTrigger({
    target: undefined,
  })

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  )
}

export default function CustomAppBar(props: Props) {
  const { children } = props
  return (
    <React.Fragment>
      <HideOnScroll>
        <AppBar color='inherit' elevation={0}>
          <Container maxWidth="sm">{children}</Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  )
}

export const CustomAppBarWithTitle = ({
  profile,
  slug,
}: {
  profile: ProfileJson
  slug?: string
}) => {
  return (
    <CustomAppBar>
      <Toolbar>
        <Grid container>
          <Grid item xs={2}>
            <SideBar profile={profile} slug={slug} />
          </Grid>
          <Grid item xs={10}>
            <TopTitle profile={profile} />
          </Grid>
        </Grid>
      </Toolbar>
    </CustomAppBar>
  )
}
