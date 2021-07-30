const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const projectPost = path.resolve('./src/templates/project-post.js')

    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          
            allContentfulDataProjectPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // create blog post pages
        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach(post => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug,
            },
          })
        })

        // create project post pages
        const projects = result.data.allContentfulDataProjectPost.edges
        projects.forEach(proj => {
          createPage({
            path: `/project/${proj.node.slug}/`,
            component: projectPost,
            context: {
              slug: proj.node.slug,
            },
          })
        })
      })
    )
  })
}
