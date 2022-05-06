import Typography from '@mui/material/Typography'
import MuiLink from '@mui/material/Link'
import { Box } from '@mui/material'
import { ProfileJson } from '../lib/api'

export default function Copyright({ profile }: { profile: ProfileJson }) {
  const name: string = profile.copylight_name
  const url: string = profile.copylight_url
  return (
    <Box sx={{ mt: '2rem' }}>
      <Typography variant="body2" color="text.secondary" align="center">
        {'Copyright © '}
        <MuiLink color="inherit" href={url} target="_blank" rel="noopener">
          {name}
        </MuiLink>{' '}
        {new Date().getFullYear()}.
      </Typography>
    </Box>
  )
}
