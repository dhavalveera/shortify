import type { FC, PropsWithChildren } from 'react'

// Navbar
import CustomNavbar from './navbar'

// Footer
import Footer from './footer'

const Layout: FC<PropsWithChildren> = props => {
  return (
    <div>
      <CustomNavbar />

      <div>{props.children}</div>

      <Footer />
    </div>
  )
}

export default Layout
