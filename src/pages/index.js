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

const projectData = [
  {
    "name": "Seoul Population By Time",
    "link": "https://seoul-population-by-time.netlify.com/"
  },
  {
    "name": "Seoul Building Explorer",
    "link": "https://hanbyul-here.github.io/seoul-building-explorer"
  },
  {
    "name": "Mapping the Candles",
    "link": "https://hanbyul-here.github.io/seoul-metro-turnstile-data/map/#lat=37.5601&lng=126.9794&z=14.3000"
  },
  {
    "name": "OBJ Map Tile Exporter",
    "link": "https://hanbyul-here.github.io/tile-exporter/"
  },
  {
    "name": "SVG Map Tile Exporter",
    "link": "http://svg-exporter.netlify.com/"
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
              <LinkCollection linkData={projectData} />
              <h2 className="has-text-weight-bold is-size-4">Doodles and words</h2>
            </div>
            {posts.map(({ node: post }) => (
              <div key={`post-${post.frontmatter.title}`}>
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
