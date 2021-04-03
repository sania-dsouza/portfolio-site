/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
// import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>

      <div className="site"
        style={{
          margin: `0 auto`,
          backgroundColor: `#2dc492`,
        }}
      >
      <Header></Header>

      <main style= {{ overflow: `auto`, height: `auto` }} className="site-content">{children}</main>

      <Footer></Footer>
      
      </div>
      
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
