import { Box, Divider } from "@mui/material"
import {DiscussionEmbed} from "disqus-react"
import { Post } from "../lib/api"

export const DisqusComments = ({post}: {post: Post}) => {
    const disqusShortname = "shotarokataoka"
    const disqusConfig = {
      url: `https://shotarokataoka.github.io/article/${post.slug}`,
      identifier: post.slug, // Single post id
      title: post.title // Single post title
    }
    return (
      <div>
        <Box sx={{ m: 6 }} />
        <Divider/>
        <DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
