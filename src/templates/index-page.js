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
                <div className="hero-body" style={{minHeight: '700px'}}>
                    <BackgroundSlider query={{backgrounds}}/>
                    <div className="columns center">
                        <div className="column is-half is-offset-one-quarter">
                            <div className="field">
                                <div className="control">
                                    <input className="input is-large" type="text" placeholder="Enter location"/>
                                </div>
                            </div>
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
                        <h2 className="is-size-1">Who we are</h2>
                        <hr/>
                        <h4 className="is-size-4">We are a network of nursery centers providing learning and childcare
                            to 100+ children and support for their families.</h4>
                        <Link className="button button-default" to="/products">Read more</Link>
                    </div>
                </div>
            </section>
            <section className="novi-section">
                <div className="bg-aside bg-aside-right center">
                    <div className="img">
                        <PreviewCompatibleImage imageInfo={main.image2}/>
                    </div>
                    <div className="cnt-block well-1 novi-background">
                        <h2 className="is-size-1">Our values</h2>
                        <hr/>
                        <h4 className="is-size-4">Beauty, growth, development, and happiness are the foundation we use
                            to guide our daily interactions and decision-making.</h4>
                        <Link className="button button-default" to="/products">Read more</Link>
                    </div>
                </div>
            </section>
            <section className="novi-section">
                <div className="bg-aside bg-aside-left center">
                    <div className="img">
                        <PreviewCompatibleImage imageInfo={main.image3}/>
                    </div>
                    <div className="cnt-block well-1 novi-background is-uppercase">
                        <h2 className="is-size-1 ">Why us?</h2>
                        <hr/>
                        <h4 className="is-size-4">Discover why hundreds of families all over the USA pick our nursery
                            center for their children.</h4>
                        <Link className="button button-default" to="/products">Read more</Link>
                    </div>
                </div>
            </section>
            <section className="well-2 center bg-vide novi-vide is-gapless">
                <div
                    style={{
                        position: 'absolute',
                        zIndex: 0,
                        top: '0px',
                        left: '0px',
                        bottom: '0px',
                        right: '0px',
                        overflow: 'hidden',
                        backgroundSize: 'cover',
                        backgroundColor: 'transparent',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '50% 50%',
                        backgroundImage: 'none'
                    }}
                >
                    <video
                        className="video-player"
                        loop
                        muted
                        autoPlay
                        style={{
                            margin: 'auto',
                            position: 'absolute',
                            zIndex: '-1',
                            top: '45%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            visibility: 'visible',
                            opacity: 1,
                            width: 'auto',
                            height: '1274px',
                        }}
                    >
                        <source
                            src={video}
                            type="video/mp4"
                        />
                    </video>
                </div>
                <div className="vide_cnt is-uppercase">
                    <h2 className="is-size-1">{heading}</h2>
                    <hr/>
                    <h3 className="is-size-5">{subheading}</h3>
                </div>
            </section>
            <section className="well-4 bg-default novi-background bg-cover">
                <div className="container center">
                    <h2 className="is-size-1 is-uppercase">Our Blog</h2>
                    <hr/>
                    <h4 className="is-size-6 is-uppercase">Read the latest news and updates from Day nursery centre.</h4>
                    <div className="columns is-multiline">
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
