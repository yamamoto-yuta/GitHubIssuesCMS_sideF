import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { TagButtons } from './TagButton'
import { Post, Tag } from '../lib/api'
import { getNow } from '../lib/datetime'
import { PostsContext, RootUrlContext } from '../pages/_app'
import { useContext } from 'react'
import Link from 'next/link'

export const PostCard = ({
  slug,
  title,
  tags,
  posted_at,
}: {
  slug: string
  title: string
  tags: Tag[]
  posted_at: string
}) => {
  const { rootUrl, setRootUrl } = useContext(RootUrlContext)
  const now: string = getNow()
  if (posted_at > now) {
    return <div />
  }
  return (
    <Card variant="outlined" sx={{ width: '98%', mt: '0.8rem', mb: '0.8rem', p: 0 }}>
      <Link href={`/article/${slug}`} passHref>
      <Button
        sx={{ width: '100%', textTransform: 'none', pt: 0, pb: 0, pl: 0, pr: 0 }}
      >
        <Box sx={{pt: 0, pb: 0, pr: 0, width: '100%', pl: 0}}>
          <CardMedia component='img' image={`${rootUrl.url_subpath}/static/images/thumbnail/${slug}.jpg`} alt="thumbnail"/>
          <Box sx={{pr: '1.4rem', pl: '1.4rem'}}>
          <Typography
            gutterBottom
            variant="body2"
            color="text.secondary"
            component="div"
            sx={{ m: 0, pt: 1, pb: 0.5 }}
          >
            {posted_at}
          </Typography>
          <Typography
            variant="h3"
            color="text.primary"
            component="div"
            sx={{ fontWeight: 'bold', pt: 0, pl: 0, pr: 0, pb: 1 }}
          >
            {title}
          </Typography>
          </Box>
          </Box>
      </Button>
      </Link>
      <Container>
        <TagButtons tags={tags} sx={{ m: 0, pb: 0.5, pt: 0.5 }} />
      </Container>
    </Card>
  )
}

export const PostCardBySlug = ({ slug }: { slug: string }) => {
  const { posts, setPosts } = useContext(PostsContext)
  const post = posts[slug]
  if (post === null || post === undefined) {
    return <div />
  }
  return <PostCard {...post} />
}

export const PostCards = ({
  posts,
  page,
  postNumPerPage,
  year='all',
}: {
  posts: Post[]
  page: number
  postNumPerPage: number
  year?: string
}) => {
  const pageStartPost: number = (page - 1) * postNumPerPage
  const pageEndPost: number = (page - 1) * postNumPerPage + postNumPerPage
  return (
    <Grid container>
      {posts
        .slice(pageStartPost, pageEndPost)
        .map((post: Post) => {
          return (
            <Grid key={post.slug} item xs={12} sm={6}>
              <PostCard {...post} />
            </Grid>
          )
        })}
    </Grid>
  )
}
