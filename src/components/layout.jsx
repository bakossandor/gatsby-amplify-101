import React from 'react'

import Footer from '../components/footer'
import Header from '../components/header'

import "./layout.css"

const Layout = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="wrapper">
        {props.children}
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Layout