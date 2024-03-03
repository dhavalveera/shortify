import type { FC, PropsWithChildren } from 'react'

// Navbar
import CustomNavbar from './navbar'

// Footer
import Footer from './footer'

const Layout: FC<PropsWithChildren> = props => {
  return (
    <>
      <CustomNavbar />

      <div>{props.children}</div>

      <Footer />
    </>
  )
}

export default Layout
