import React from "react"
import PropTypes from "prop-types"

import "./styles/bootstrap.min.css"
import "./styles/styles.css"

const Layout = ({ children }) => {
  return (
    <div>
      <div className="container" id="">
        <h1>
          Number Conversion
          <span className="badge">beta Version</span>
        </h1>
        {children}
      </div>
      <div className="footer">
        <p>
          Design & Developed By
          <a href="http://facebook.com/joshimCSE"> Joshim Uddin</a>
        </p>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
