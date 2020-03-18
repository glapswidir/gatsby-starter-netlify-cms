import React             from 'react'
import PropTypes         from 'prop-types'
import { graphql, Link } from 'gatsby'

import Layout                 from '../components/Layout'
import BackgroundSlider       from 'gatsby-image-background-slider'
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import video                  from '../img/video.mp4';

export const IndexPageTemplate = ({
  subheading,
  heading,
  main,
  backgrounds,
  posts,
}) => {
    return (
        <div className="has-navbar-fixed-top">
            <div className="hero">
                <div className="hero-body">
                    <BackgroundSlider query={{backgrounds}}/>
                    <div className="columns find-babysitter">
                        <div className="column is-half is-offset-one-quarter">
                            <form action="/products" >
                                <div className="field has-addons">
                                    <div className="control is-expanded">
                                        <input
                                            name="location"
                                            className="input is-medium"
                                            type="text"
                                            placeholder="Enter suburb to search for babysitters in your area"
                                        />
                                    </div>
                                    <div className="control">
                                        <input
                                            className="button is-medium"
                                            type="submit"
                                            value="Find a babysitter"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <section className="novi-section">
                <div className="bg-aside bg-aside-left center">
                    <div className="img">
                        <PreviewCompatibleImage imageInfo={main.image1}/>
                    </div>
                    <div className="cnt-block well-1 novi-background">
                        <h2 className="is-size-2">Who we are</h2>
                        <hr/>
                        <h4 className="is-size-6">We are a network of nursery centers providing learning and childcare
                            to 100+ children and support for their families.</h4>
                        <Link className="button button-default" to="/about">Read more</Link>
                    </div>
                </div>
            </section>
            <section className="novi-section">
                <div className="bg-aside bg-aside-right center">
                    <div className="img">
                        <PreviewCompatibleImage imageInfo={main.image2}/>
                    </div>
                    <div className="cnt-block well-1 novi-background">
                        <h2 className="is-size-2">Our values</h2>
                        <hr/>
                        <h4 className="is-size-6">Beauty, growth, development, and happiness are the foundation we use
                            to guide our daily interactions and decision-making.</h4>
                        <Link className="button button-default" to="/about">Read more</Link>
                    </div>
                </div>
            </section>
            <section className="novi-section">
                <div className="bg-aside bg-aside-left center">
                    <div className="img">
                        <PreviewCompatibleImage imageInfo={main.image3}/>
                    </div>
                    <div className="cnt-block well-1 novi-background is-uppercase">
                        <h2 className="is-size-2">Why us?</h2>
                        <hr/>
                        <h4 className="is-size-6">Discover why hundreds of families all over the USA pick our nursery
                            center for their children.</h4>
                        <Link className="button button-default" to="/about">Read more</Link>
                    </div>
                </div>
            </section>
            <section className="well-2 center bg-vide novi-vide is-gapless">
                <div className="video-container">
                    <video className="video-player" loop muted autoPlay >
                        <source
                            src={video}
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="vide_cnt is-uppercase">
                    <h2 className="is-size-2">{heading}</h2>
                    <hr/>
                    <h3 className="is-size-6">{subheading}</h3>
                </div>
            </section>
            <section className="well-4 bg-default novi-background bg-cover is-uppercase">
                <div className="container center">
                    <h2 className="is-size-2">Our Blog</h2>
                    <hr/>
                    <h4 className="is-size-6">Read the latest news and updates from Day nursery centre.</h4>
                    <div className="columns is-multiline offset-custom-2">
                        {posts && posts.map(({node: post}) => (
                            <article className="is-parent column is-4" key={post.id}>
                                <Link className="post" to={post.fields.slug}>
                                    {post.frontmatter.featuredimage ? (
                                        <PreviewCompatibleImage
                                            imageInfo={{
                                                image: post.frontmatter.featuredimage,
                                                alt: `featured image thumbnail for post ${post.frontmatter.title}`,
                                            }}
                                            style={{
                                                width: '100%'
                                            }}
                                        />
                                    ) : null}
                                    <div className="post_cnt">
                                        <h3>{post.frontmatter.title}</h3>
                                        <time dateTime={post.frontmatter.date}>{post.frontmatter.date}</time>
                                    </div>
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
  main: PropTypes.shape({
    image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
  const { edges: posts } =  data.allMarkdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        backgrounds={frontmatter.backgrounds}
        main={frontmatter.main}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        posts={posts}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
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
            featuredpost
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 120, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        backgrounds {
          nodes {
            childImageSharp {
              fluid(maxWidth: 4000, quality: 100){
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
            heading
          }
          heading
          description
        }
        main {
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1020, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 640, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
