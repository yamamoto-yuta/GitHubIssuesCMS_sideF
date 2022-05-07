import { Box, Divider } from "@mui/material"
import {DiscussionEmbed} from "disqus-react"
import { Post } from "../lib/api"

export const DisqusComments = ({post, root_url, short_name}: {post: Post, root_url: string, short_name: string}) => {
    const disqusShortname = short_name
    const disqusConfig = {
      url: `${root_url}/article/${post.slug}`,
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
