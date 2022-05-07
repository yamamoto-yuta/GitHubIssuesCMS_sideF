import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type Post = {
  slug: string
  content: string
  title: string
  posted_at: string
  updated_at: string
  tags: Tag[]
  description: string
}

export type Tag = { name: string; color: string; description: string }

const postsDirectory = path.join(process.cwd(), 'contents')

/**
 * postsDirectory 以下のディレクトリ名を取得する
 */
export function getPostSlugs() {
  const allDirents = fs.readdirSync(postsDirectory, { withFileTypes: true })
  return allDirents
    .filter((dirent) => dirent.isDirectory())
    .map(({ name }) => name)
}

/**
 * 指定したフィールド名から、記事のフィールドの値を取得する
 */
export function getPostBySlug(slug: string, fields: string[] = []) {
  const fullPath = path.join(postsDirectory, slug, 'index.md')
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items: Post = {
    slug: '',
    content: '',
    title: '',
    posted_at: '',
    updated_at: '',
    tags: [{ name: '', color: '', description: '' }],
    description: '',
  }

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = slug
    }
    if (field === 'content') {
      items[field] = content
    }
    if (field === 'tags') {
      const tag_ids = data['tag_ids']
      const jsonPath = path.join(process.cwd(), 'consts', 'tags.json')
      const jsonText = fs.readFileSync(jsonPath, 'utf-8')
      const tagsDict = JSON.parse(jsonText)
      items[field] = tag_ids.map((tag_id: string) => {
        return tagsDict[tag_id]
      })
    }
    if (field === 'title' || field === 'posted_at' || field === 'updated_at' || field === 'description' ) {
      if (data[field] === undefined) {
        items[field] = ''
      } else {
        items[field] = data[field]
      }
    }
  })
  return items
}

/**
 * すべての記事について、指定したフィールドの値を取得して返す
 * @param fields 取得するフィールド
 */
export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .sort((a, b) => (a.posted_at > b.posted_at ? -1 : 1))
  return posts
}

export type PostsMap = {
  [slug: string]: {
    slug: string
    title: string
    tags: Tag[]
    posted_at: string
  }
}

export function postsToMap(posts: Post[]) {
  const postsMap: PostsMap = Object.create(null)
  posts.forEach((post, i) => {
    postsMap[post.slug] = {
      slug: post.slug,
      title: post.title,
      tags: post.tags,
      posted_at: post.posted_at,
    }
  })
  return postsMap
}

/**
 * すべてのタグを取得して返す
 */
export function getAllTags() {
  // 全記事を取得する
  const slugs: string[] = getPostSlugs()
  const allPost: Post[] = Array.from(
    slugs.map((slug: string) => getPostBySlug(slug, ['tags'])),
  )
  // 全記事のタグを配列にする
  let tags: Tag[] = []
  allPost.forEach((post) => {
    tags = [...tags, ...post.tags]
  })
  // 重複するタグを消す
  tags = tags.filter(
    (element, index, self) =>
      self.findIndex(
        (e) =>
          e.name === element.name &&
          e.color === element.color &&
          e.description === element.description,
      ) === index,
  )
  return tags
}

/**
 * 指定したタグがついている記事を全て取得する
 * @param tag_name 取得するタグ名
 */
export function getTagedPosts(tag_name: string) {
  const allPosts = getAllPosts(['slug', 'title', 'posted_at', 'tags'])

  const tagedPosts = allPosts.filter((post) =>
    post.tags.some((tag) => tag.name === tag_name),
  )
  return tagedPosts
}

export type ProfileJson = {
  blog_title: string
  copylight_name: string
  copylight_url: string
  author_name: string
  author_description: string
  sns: { name: string; url: string }[]
  root_url: string
  url_scheme: string
  url_domain: string
  url_subpath: string
}

export function getProfileJson() {
  const jsonPath = path.join(process.cwd(), 'consts', 'profile.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  let profile = JSON.parse(jsonText) as ProfileJson
  return profile
}

export type ExternalMetadata = {
  [url: string]: {
    title: string;
    url_domain: string;
    url_domain_link: string;
    description: string;
    image_url: string;
  }
}

export function getResourcesJson() {
  const jsonPath = path.join(process.cwd(), 'consts', 'external_metadata.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const metadata = JSON.parse(jsonText) as ExternalMetadata
  return metadata
}

export type RelatedSlugs = {
  [slug: string]: string[]
}

export function getRelatedJson(){
  const jsonPath = path.join(process.cwd(), 'consts', 'related.json')
  const jsonText = fs.readFileSync(jsonPath, 'utf-8')
  const relatedSlugs = JSON.parse(jsonText) as RelatedSlugs
  return relatedSlugs

}
