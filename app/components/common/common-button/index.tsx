import type { FC } from 'react'

// Helpers
import { tailwindClassMerger } from '~/helpers'

type CustomButtonProps = {
  btnLabel: string
  disabledBtn: boolean
  extraClass?: string
  onClick?: () => void
  btnType: 'submit' | 'button'
}

const CustomButton: FC<CustomButtonProps> = props => {
  const { btnLabel, btnType, disabledBtn, extraClass = '', onClick } = props

  return (
    <button
      type={btnType === 'button' ? 'button' : 'submit'}
      onClick={onClick}
      disabled={disabledBtn}
      className={tailwindClassMerger(
        'bg-primaryBgDarkBlue box-border inline-block rounded-md px-[30px] py-5 text-center align-middle text-base leading-[1.11] text-white outline-none disabled:border-none disabled:bg-[#cccccc] disabled:text-[#666666]',
        extraClass,
      )}
    >
      {btnLabel}
    </button>
  )
}

export default CustomButton
