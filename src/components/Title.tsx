import { Box, Divider, Typography } from '@mui/material'
import { ProfileJson } from '../lib/api'

export const PageTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <Typography variant="h1" align="center" sx={{ pb: 2 }}>
        {title}
      </Typography>
      <Divider />
    </div>
  )
}

export const TopTitle = ({ profile }: { profile: ProfileJson }) => {
  const title: string = profile.blog_title
  return (
    <Typography
      variant="h3"
      component="a"
      display="inline"
      color="inherit"
      href="/"
      sx={{ textDecoration: 'none', boxShadow: 'none' }}
    >
      {title}
    </Typography>
  )
}
