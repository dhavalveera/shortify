import type { FC } from 'react'

// Remix
import { Link } from '@remix-run/react'

// Flowbite React
import { DarkThemeToggle, Dropdown, Navbar, Tooltip } from 'flowbite-react'

// Common
import LinkButton from '~/components/common/link-button'

const CustomNavbar: FC = () => {
  return (
    <header>
      <Navbar fluid rounded theme={{ root: { base: 'dark:border-none dark:bg-transparent' } }}>
        <Navbar.Brand as={Link} to="/">
          {/* <img src="/Shortify.svg" srcSet="/Shortify.svg" alt="Shortify" className="h-28 w-28" /> */}
          <span className="self-center whitespace-nowrap text-xl font-semibold text-primaryDarkBlue dark:text-white">Shortify</span>
        </Navbar.Brand>
        <div className="flex items-center gap-1 md:order-2">
          <div>
            <Tooltip animation="duration-1000" content="Toggle Dark Mode">
              <DarkThemeToggle />
            </Tooltip>
          </div>
          <div className="hidden md:block">
            <LinkButton linkHref="/auth/login" linkLabel="Login" btnClass="py-2" />
          </div>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link as="div">
            <Dropdown arrowIcon inline label="Products" as="button" placement="bottom" theme={{ inlineWrapper: 'text-black dark:text-white flex items-center' }}>
              <Dropdown.Item as={Link} to="/products/url-shortner">
                URL Shortner
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link as={Link} to="/contact" className="my-2 text-black dark:text-white md:-my-0">
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
