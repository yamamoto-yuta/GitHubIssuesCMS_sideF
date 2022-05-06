import { Box, Container } from '@mui/material'

export const CustomContainer = ({
  children,
}: {
  children: React.ReactElement
}) => {
  return (
    <Box
      sx={{
        my: 7,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="sm">{children}</Container>
    </Box>
  )
}
