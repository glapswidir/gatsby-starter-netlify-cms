import React           from 'react'
import { Helmet }      from 'react-helmet'
import { withPrefix }  from 'gatsby'
import Footer          from '../components/Footer'
import Navbar          from '../components/Navbar'
import './all.sass'
import useSiteMetadata from './SiteMetadata'

const TemplateWrapper = ({ children }) => {
  const { title, description, siteURL } = useSiteMetadata()
  const pathname                        = typeof window !== 'undefined' ? window.location.pathname : '/';

  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />

        <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Roboto:400,300%7CRoboto+Condensed:400,700,300"
        />

        <link
            rel="icon"
            href={`${withPrefix('/')}img/favicon.ico`}
            type="image/x-icon"
        />

        <meta name="theme-color" content="#fff" />

        <meta property="og:type"  content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url"   content={`${siteURL}${pathname}`} />
        <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} />
      </Helmet>
      <Navbar pathname={pathname} />
      {children}
      <Footer />
    </div>
  )
}

export default TemplateWrapper
