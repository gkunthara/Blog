import Typography from 'typography'
import Wordpress2016 from 'typography-theme-wordpress-2016'

Wordpress2016.overrideThemeStyles = () => ({
  a: {
    boxShadow: 'none',
    textDecoration: 'none',
  },
  'p,h1,h2,h3,h4,h4,li,ul,ol':{
    fontFamily: 'Avenir Next, sans-serif'
  },
  'ul,ol': {
    marginLeft: 1,
  },
  h4: {
    letterSpacing: 'none',
    textTransform: 'none',
  }
})

delete Wordpress2016.googleFonts

const typography = new Typography(Wordpress2016)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
