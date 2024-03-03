import type { FC } from 'react'

// Remix
import { Form } from '@remix-run/react'

// Common
import CustomButton from '~/components/common/common-button'
import TextField from '~/components/common/text-field'

// UI
import { MdTwoColXsOneCol } from '~/ui'

const ShortenURLFormSection: FC = () => {
  return (
    <div>
      <p className="pb-5 text-xl font-extrabold text-[#2a2e30] md:text-3xl">Make URL Small &amp; Unique</p>

      <Form method="post">
        <TextField
          disabled={false}
          idName="long-url"
          inputType="url"
          label="Give your URL"
          placeholderText="Example: https://it-the-biggest-ur-here.com/it-can-be-anything"
          required
          extraClass="h-12"
        />

        <div className={`${MdTwoColXsOneCol} my-4`}>
          <div>
            <TextField
              disabled
              idName="default-domain"
              inputType="url"
              label="Domain"
              placeholderText="shortify.vercel.app/"
              required={false}
              extraClass="bg-[#f5f6f7] border border-[#e6e6e6] text-ellipsis cursor-not-allowed"
            />
          </div>
          <div>
            <TextField disabled={false} idName="back-half" inputType="text" label="Short URL Text?" placeholderText="example: your-fav-unique-word" required={false} />
          </div>
        </div>

        <CustomButton btnLabel="Register &amp; Get your unique link" btnType="submit" disabledBtn={false} extraClass="w-full md:w-fit mt-2" />
      </Form>
    </div>
  )
}

export default ShortenURLFormSection
