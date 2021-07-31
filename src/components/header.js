  import React, { useState } from "react"
  import Logo from "./logo"
  import { Link } from "gatsby"
  import styled from 'styled-components'


  const Header = () => {

    return (

        <header className= "header"
          style={{
            background: `#ffffff`,
            paddingTop: `1rem`
          }}
        >
          <div
            style={{
              margin: `0 auto 1rem auto`,
              maxWidth: 1200,
              textAlign: "center"
            }}
          > 
            {/* Link back to home screen */}
            <Link
              to="/"
              style={{
                color: `#2dc492`,
                textDecoration: `none`,
              }}
              class="navbar-brand"
            >
              <Logo> </Logo>
            </Link>
              
          </div>
        </header>
      
    )
  }

  export default Header
