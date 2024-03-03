import type { FC } from 'react'

// Remix
import { Link } from '@remix-run/react'

// Helpers
import { tailwindClassMerger } from '~/helpers'

type LinkButtonProps = {
  linkHref: string
  linkLabel: string
  linkClass?: string
  btnClass?: string
}

const LinkButton: FC<LinkButtonProps> = props => {
  const { linkHref, linkLabel, btnClass = '', linkClass = '' } = props

  return (
    <Link to={linkHref} role="link" aria-label={`${linkLabel} - Shortify`} className={tailwindClassMerger('', linkClass)}>
      <button
        type="button"
        className={tailwindClassMerger(
          'bg-primaryBgDarkBlue box-border inline-block rounded-md px-[30px] py-5 text-center align-middle text-base leading-[1.11] text-white outline-none disabled:border-none disabled:bg-[#cccccc] disabled:text-[#666666]',
          btnClass,
        )}
      >
        {linkLabel}
      </button>
    </Link>
  )
}

export default LinkButton
