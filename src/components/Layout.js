import React from 'react'
import Footer from '../components/Footer'
import Navigation from '../components/Navigation'

const Layout = ({children}) => {
 return (
  <div>
    <Navigation />
    <Footer />
  </div>
 )
}
export default Layout;