import { Avatar, Box, Grid, IconButton, Typography } from '@mui/material'

export const Profile = ({
  author_name,
  author_description,
}: {
  author_name: string
  author_description: string
}) => {
  return (
    <Box width="100%">
      <Grid container>
        <Grid item xs={4.8} />
        <Grid item xs={2.2}>
          <IconButton href="/profile">
            <Avatar
              alt={author_name}
              src="/static/images/avatar/avatar.png"
              sx={{ width: 32, height: 32 }}
            />
          </IconButton>
        </Grid>
        <Grid item xs={5} />
      </Grid>
      <Typography variant="h5" sx={{ m: 0, p: 0, textAlign: 'center' }}>
        {author_name}
      </Typography>
      <Typography variant="body2" sx={{ m: 0, p: 0, textAlign: 'center' }}>
        {author_description}
      </Typography>
    </Box>
  )
}
