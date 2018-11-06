import React from 'react'
import Link from 'gatsby-link'

import { rhythm, scale } from '../utils/typography'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header
    let headerStyle = {
      fontFamily: 'Avenir Next, sans-serif',
      fontSize: 20,
      marginBottom: rhythm(1.5),
      marginTop: 0,
      fontWeight: 300,
      lineHeight: 1.5
}

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    if (location.pathname === rootPath) {

      header = (
        <div>
          <h1
            style={headerStyle}
          >
          Hi, I'm George Kunthara.
          I just graduated from Gonzaga University with a degree in Computer Science and a business minor in Entrepreneurial Leadership.
          Currently, I work as a consultant at West Monroe Partners in Seattle. 

          </h1>
            <h1
            style={headerStyle}
          >
          I'm into stock & crypto trading, front end development, startups, and sports. 
          You can find my thoughts and insights on these areas below!
          </h1>

          <h1
            style={headerStyle}
          >
          
          </h1>
        </div>
        

      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: 'Avenir Next, sans-serif',
            marginTop: 0,
            marginBottom: rhythm(-1),
            textDecoration: "underline"
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            ← Back
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(30),
          padding: `${rhythm(2.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {header}
        {children()}
      </div>
    )
  }
}

export default Template
