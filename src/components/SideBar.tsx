import * as React from 'react'
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
  IconButton,
  Avatar,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import HomeIcon from '@mui/icons-material/Home'
import GitHubIcon from '@mui/icons-material/GitHub'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import YouTubeIcon from '@mui/icons-material/YouTube'
import TagIcon from '@mui/icons-material/Tag'
import EditIcon from '@mui/icons-material/Edit'
import LocalOfferIcon from '@mui/icons-material/LocalOffer'
import ArticleIcon from '@mui/icons-material/Article'
import InterestsIcon from '@mui/icons-material/Interests'
import { Profile } from './Profile'
import { ProfileJson } from '../lib/api'

type Anchor = 'top' | 'left' | 'bottom' | 'right'
const anchor: Anchor = 'left'

export default function SideBar({
  profile,
  slug,
}: {
  profile: ProfileJson
  slug?: string
}) {
  let edit_page_url = ''
  if (slug === undefined) {
    edit_page_url = 'https://github.com/ShotaroKataoka/githubio-blog-dev/issues'
  } else {
    edit_page_url = `https://github.com/ShotaroKataoka/githubio-blog-dev/issues/${slug}`
  }
  const author_name: string = profile.author_name
  const author_description: string = profile.author_description
  const sns_list: { name: string; url: string }[] = profile.sns
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, [anchor]: open })
    }

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <Profile
            author_name={author_name}
            author_description={author_description}
          />
        </ListItem>
        <Divider />
        <ListItemButton text="Home" href='/'>
          <HomeIcon />
        </ListItemButton>
        <ListItemButton text="Articles" href='/GitHubIssuesCMS_sideF/article/list'>
          <ArticleIcon />
        </ListItemButton>
        <ListItemButton text="Tags" href='/article/tags'>
          <LocalOfferIcon />
        </ListItemButton>
        <ListItemButton text="Works" href='/works'>
          <InterestsIcon />
        </ListItemButton>
        <ListItemButton text="Edit page" href={edit_page_url}>
          <EditIcon />
        </ListItemButton>
      </List>
      <Divider />
      <SnsList sns_list={sns_list} />
    </Box>
  )

  return (
    <div>
      <React.Fragment key={anchor}>
        <IconButton
          onClick={toggleDrawer(anchor, true)}
          sx={{ margin: 0, padding: 0 }}
          aria-label="Open Sidebar"
        >
          <MenuIcon />
        </IconButton>
        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  )
}

const ListItemButton = ({
  children,
  text,
  href,
}: {
  children: React.ReactElement
  text: string
  href: string
}) => {
  if (href === '' || text === '') {
    return <div />
  }
  if (
    href?.startsWith('#') ||
    href?.startsWith('/') ||
    href?.includes('shotarokataoka.github.io')
  ) {
    return (
      <ListItem button component="a" key={text} href={href}>
        <ListItemIcon>{children}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    )
  }
  return (
    <ListItem
      button
      component="a"
      key={text}
      href={href}
      target="_blank"
      rel="noopener"
    >
      <ListItemIcon>{children}</ListItemIcon>
      <ListItemText primary={text} />
    </ListItem>
  )
}

const SnsList = ({
  sns_list,
}: {
  sns_list: { name: string; url: string }[]
}) => {
  const SnsIcon = (name: string) => {
    if (name === 'GitHub') {
      return <GitHubIcon />
    }
    if (name === 'Twitter') {
      return <TwitterIcon />
    }
    if (name === 'Facebook') {
      return <FacebookIcon />
    }
    if (name === 'LinkedIn') {
      return <LinkedInIcon />
    }
    if (name === 'Instagram') {
      return <InstagramIcon />
    }
    if (name === 'YouTube') {
      return <YouTubeIcon />
    }
    return <TagIcon />
  }
  const snslist: React.ReactElement = (
    <List>
      {sns_list.map((sns: { name: string; url: string }) => {
        return (
          <ListItemButton key={sns.name} text={sns.name} href={sns.url}>
            {SnsIcon(sns.name)}
          </ListItemButton>
        )
      })}
    </List>
  )
  return snslist
}
