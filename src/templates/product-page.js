import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import {graphql} from 'gatsby'
import Layout from '../components/Layout'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Pricing from '../components/Pricing'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'

export const ProductPageTemplate = ({
                                        image,
                                        title,
                                        heading,
                                        description,
                                        intro,
                                        main,
                                        testimonials,
                                        fullImage,
                                        pricing,
                                    }) => {
    const [sitters, setSitters] = useState({results: [], info: {}})
    useEffect(() => {
        fetch(`https://randomuser.me/api/?results=20&gender=female&nat=us`)
            .then(response => response.json())
            .then(resultData => {
                setSitters(resultData)
            })
    }, []);


    return (
        <div className="content">
            {/*<div*/}
            {/*    className="full-width-image-container margin-top-0"*/}
            {/*    style={{*/}
            {/*      backgroundImage: `url(${*/}
            {/*          !!image.childImageSharp ? image.childImageSharp.fluid.src : image*/}
            {/*          })`,*/}
            {/*    }}*/}
            {/*>*/}
            {/*  <h2*/}
            {/*      className="has-text-weight-bold is-size-1"*/}
            {/*      style={{*/}
            {/*        boxShadow: '0.5rem 0 0 #f40, -0.5rem 0 0 #f40',*/}
            {/*        backgroundColor: '#f40',*/}
            {/*        color: 'white',*/}
            {/*        padding: '1rem',*/}
            {/*      }}*/}
            {/*  >*/}
            {/*    {title}*/}
            {/*  </h2>*/}
            {/*</div>*/}
            <section className="section">
                <div className="container">
                    <div className="section">
                        <div className="columns">
                            <div className="column is-full">
                                <h3 className="has-text-weight-semibold is-size-2">{heading}</h3>
                                <p>{description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="section">
                        <div className="columns is-multiline is-variable bd-klmn-columns is-5">
                            {sitters.results.map(item => (
                                <div className="column is-4" key={`${item.id.name}-${item.id.value}`}>
                                    <div className="card">
                                        <div className="card-image">
                                            <figure className="image is-4by3">
                                                <img src={item.picture.large} alt="Placeholder image"/>
                                            </figure>
                                        </div>
                                        <div className="card-content">
                                            <div className="media">
                                                <div className="media-left">
                                                    <figure className="image is-48x48">
                                                        <img src={item.picture.thumbnail} alt="Placeholder image"/>
                                                    </figure>
                                                </div>
                                                <div className="media-content">
                                                    <p className="title is-4">{item.name.title} {item.name.first} {item.name.last}</p>
                                                    <p className="subtitle is-6">{item.email}</p>
                                                </div>
                                            </div>

                                            <div className="content">
                                                Located at {item.location.city}, {item.location.state}.
                                                <br/>
                                                {item.dob.age} years old.
                                                <br/>
                                                Registered:
                                                <time dateTime="2016-1-1">{item.registered.date}</time>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

ProductPageTemplate.propTypes = {
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    title: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    intro: PropTypes.shape({
        blurbs: PropTypes.array,
    }),
    main: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        image1: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image2: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
        image3: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    }),
    testimonials: PropTypes.array,
    fullImage: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    pricing: PropTypes.shape({
        heading: PropTypes.string,
        description: PropTypes.string,
        plans: PropTypes.array,
    }),
}

const ProductPage = ({data}) => {
    const {frontmatter} = data.markdownRemark

    return (
        <Layout>
            <ProductPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                description={frontmatter.description}
                intro={frontmatter.intro}
                main={frontmatter.main}
                testimonials={frontmatter.testimonials}
                fullImage={frontmatter.full_image}
                pricing={frontmatter.pricing}
            />
        </Layout>
    )
}

ProductPage.propTypes = {
    data: PropTypes.shape({
        markdownRemark: PropTypes.shape({
            frontmatter: PropTypes.object,
        }),
    }),
}

export default ProductPage

export const productPageQuery = graphql`
  query ProductPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
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
          }
          heading
          description
        }
        main {
          heading
          description
          image1 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image2 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 526, quality: 92) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          image3 {
            alt
            image {
              childImageSharp {
                fluid(maxWidth: 1075, quality: 72) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
        testimonials {
          author
          quote
        }
        full_image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        pricing {
          heading
          description
          plans {
            description
            items
            plan
            price
          }
        }
      }
    }
  }
`
