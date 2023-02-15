import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Identity Producer</title>
        <meta property="og:title" content="Internal Identity Producer" />
      </Helmet>
    </div>
  )
}

export default Home
