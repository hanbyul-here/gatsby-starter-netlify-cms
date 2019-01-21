import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import LinkCollection from '../components/LinkCollections'
const linkData = [
  {
    name: 'GitHub',
    link: 'https://github.com/hanbyul-here'
  },
  {
    name: 'Medium',
    link: 'https://medium.com/@hanbyul'
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/hanbyul_here'
  },
  {
    name: '트위터',
    link: 'https://twitter.com/boonpeel'
  }
]

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content">
              <h2 className="is-size-4 has-text-weight-bold"> Links</h2>
              <LinkCollection linkData={linkData} />
              <h2 className="is-size-4 has-text-weight-bold"> Projects</h2>
              <LinkCollection linkData={linkData} />
              <h2 className="has-text-weight-bold is-size-4">Doodles and words</h2>
            </div>
            {posts.map(({ node: post }) => (
              <div>
                <Link to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </div>
            ))}
          </div>
        </section>
      </Layout>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
