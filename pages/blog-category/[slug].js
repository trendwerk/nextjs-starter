import { fetchData, mainQuery, buildPostsQuery, categoriesQuery } from 'utils/api'
import Head from 'components/Head'
import Layout from 'components/Layout'
import BlogArchive from 'components/BlogArchive'

const buildCategoryQuery = (slug, cursor = '') => `
  category: blogCategory(id: "${slug}", idType: SLUG) {
    name
    slug
    ${buildPostsQuery(cursor)}
  }
`

const BlogCategory = (data) => (
  <Layout data={data}>
    <Head title={data.category.name} description="" />
    <BlogArchive title={data.category.name} posts={data.category.posts} categories={data.categories} fetchMore={async (cursor) => {
      const result = await fetchData(`
        query CategoryMorePosts {
          ${buildCategoryQuery(data.category.slug, cursor)}
        }
      `)

      return result.category
    }} />
  </Layout>
)

export default BlogCategory

export async function getStaticProps({ params }) {
  const data = await fetchData(
    `
    query BlogCategory {
      ${buildCategoryQuery(params.slug)}
      ${categoriesQuery}
      ${mainQuery}
    }
  `)

  return { props: data }
}

export async function getStaticPaths() {
  const data = await fetchData(`
    query BlogCategoriesPaths {
      blogCategories {
        nodes {
          slug
        }
      }
    }
  `)

  return {
    paths: data.blogCategories.nodes.map(({ slug }) => ({ params: { slug } })),
    fallback: false,
  }
}
