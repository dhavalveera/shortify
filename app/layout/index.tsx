import type { FC, PropsWithChildren } from 'react'

// Navbar
import Navbar from './navbar'

// Footer
import Footer from './footer'

const Layout: FC<PropsWithChildren> = props => {
  return (
    <div>
      <Navbar />

      <div>{props.children}</div>

      <Footer />
    </div>
  )
}

export default Layout
