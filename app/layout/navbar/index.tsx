import type { FC } from 'react'

// Remix
import { Link } from '@remix-run/react'

// Flowbite React
import { Dropdown, Navbar } from 'flowbite-react'

// Common
import LinkButton from '~/components/common/link-button'

const CustomNavbar: FC = () => {
  return (
    <header>
      <Navbar fluid rounded>
        <Navbar.Brand as={Link} to="/">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Shortify</span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <div className="hidden md:block">
            <LinkButton linkHref="/auth/login" linkLabel="Login" />
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link>
            <Dropdown arrowIcon inline label="Products">
              <Dropdown.Item as={Link} to="/products/url-shortner">
                URL Shortner
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link as={Link} to="/contact" className="my-2 md:-my-0">
            Contact
          </Navbar.Link>
          <div className="block md:hidden">
            <LinkButton linkHref="/auth/login" linkLabel="Login" btnClass="w-full" />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default CustomNavbar
