import type { FC } from 'react'

// Helpers
import { tailwindClassMerger } from '~/helpers'

type TextFieldProps = {
  idName: string
  label: string
  inputType: 'text' | 'email' | 'tel' | 'number' | 'url'
  required: boolean
  placeholderText: string
  disabled: boolean
  extraClass?: string
}

const TextField: FC<TextFieldProps> = props => {
  const { disabled = false, extraClass = '', idName, inputType, label, placeholderText, required = true } = props

  return (
    <div>
      <label htmlFor={idName} className={`text-darkBlack block text-sm font-medium leading-6 dark:text-white ${required ? '' : 'mb-[0.80rem]'}`}>
        {label} {required ? <span className="ml-1 text-xl text-red-800">*</span> : null}
      </label>
      <div className="mt-2">
        <input
          name={idName}
          type={inputType}
          id={idName}
          className={tailwindClassMerger('block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 sm:text-sm sm:leading-6', extraClass)}
          required={required}
          placeholder={placeholderText}
          disabled={disabled}
          readOnly={disabled}
        />
      </div>
    </div>
  )
}

export default TextField
