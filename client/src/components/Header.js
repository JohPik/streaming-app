import React from 'react'
import { Link } from 'react-router-dom'

import GoogleAuth from './GoogleAuth.js'

const Header = () => {
  return (
    <div className="ui secondary pointing menu">

      <Link to="/" className="item">StreamMe</Link>

      <div className="right menu">
        <Link to="/" className="item">AllStreams</Link>
      </div>
      <GoogleAuth />
    </div>
  )
}

export default Header
