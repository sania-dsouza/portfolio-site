  import React, { useState } from "react"
  import Logo from "./logo"
  import MenuIcons from "./menuIcons"
  import { Link } from "gatsby"
  import styled from 'styled-components'

  const Navigation = styled.nav`
    height: 10vh;
    display: flex;
    background-color: #2dc492;
    z-index: 2;

    @media (max-width: 740px) {
      position: sticky;
      height: 8vh;
    }`

  const Toggle = styled.div`
    display: none;
    height: 100%;
    cursor: pointer;
    padding: 6vw;

    @media (max-width: 740px) {
      display: flex;
    }`

  const Navbox = styled.div`
    display: flex;
    height: 50%;
    width: 92%;
    justify-content: flex;
    border-radius: 0 20px 20px 0 ;

    @media (max-width: 740px) {
      flex-direction: column;
      position: fixed;
      width: 25%;
      justify-content: flex-start;
      padding-top: 10vh;
      background-color: #fff;
      transition: all 0.3s ease-in;
      top: 18vh;
      border-top: 2px solid #356078;
      border-right: 2px solid #356078;
      border-bottom: 2px solid #356078;
      left: ${props => (props.open ? "-100%" : "0")};
    }`

  const Hamburger = styled.div`
  background-color: #357068;
  width: 30px;
  height: 3px;
  transition: all .3s linear;
  align-self: center;
  position: relative;
  z-index: 12000;
  color: #357068;
  transform: ${props => (props.open ? "rotate(-50deg)" : "inherit")};

  ::before,
  ::after {
    width: 30px;
    height: 3px;
    background-color: #357068;
    content: "";
    position: absolute;
    transition: all 0.3s linear;
  }

  ::before {
    transform: ${props =>
      props.open ? "rotate(-90deg) translate(-10px, -14px)" : "rotate(0deg)"};
    top: -10px;
  }

  ::after {
    opacity: ${props => (props.open ? "0" : "1")};
    transform: ${props => (props.open ? "rotate(90deg) " : "rotate(0deg)")};
    top: 10px;
  }`

  const Header = () => {

    const [navbarOpen, setNavbarOpen] = useState(false)

    return (

        <header className= "header"
          style={{
            background: `#2dc492`,
            paddingTop: `1rem`
          }}
        >
          <div
            style={{
              margin: `0 auto`,
              maxWidth: 1200,
              textAlign: "center"
            }}
          > 
            {/* Link back to home screen */}
            <Link
              to="/"
              style={{
                color: `white`,
                textDecoration: `none`,
              }}
              class="navbar-brand"
            >
              <Logo> </Logo>
            </Link>

            <Navigation>

            <Toggle
              navbarOpen={navbarOpen}
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? <Hamburger open /> : <Hamburger />}
            </Toggle>

            
            {navbarOpen ? (
              <Navbox>
                <MenuIcons/>
              </Navbox>
            ) : (
              <Navbox open>
                <MenuIcons/>
              </Navbox>
            )}
              
            
            {/* add the logos for actions  */}
            {/* <MenuIcons></MenuIcons> */}
        
          </Navigation>
          </div>
        </header>
      
    )
  }

  export default Header
