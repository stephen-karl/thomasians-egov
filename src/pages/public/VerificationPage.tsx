import { ArrowIcon } from "@icons/index"
import { useState } from "react"
import Button from "@components/ui/Button"
import Label from "@components/ui/Label"
import Link from "@components/ui/Link"
import OtpInput from "@components/ui/OtpInput"

const VerificationPage = () => {

  const [ _, setOtp ] = useState<string>("");

  return (
    <article className="flex flex-col justify-center items-center h-screen w-screen">
      <h1 className="text-2xl text-gray-900">Check your Email</h1>
      <p className="text-base text-gray-900 font-light text-center mt-4">
        Please enter the 6 digit code that was sent to <br />
        <span className="font-medium">
          juandelacruz@mail.com
        </span>
      </p>

      <OtpInput
        className="mt-8"
        onChange={(value) => setOtp(value)}
      />
      <Button
        variant="primary"
        className="mt-8 max-w-[20rem] w-full"
      >
        Verify
      </Button>

      <div className="w-full flex items-center justify-center mt-4">
        <Label className="text-gray-900">
          Didn't receive the email?
          <Label className="ml-1 font-medium">
            Resend
          </Label>
        </Label>
      </div>

      <div className="w-full flex items-center justify-center mt-12 ">
        <Link to="/login" className="text-gray-500 inline-flex items-center gap-1 " color="gray">
          <ArrowIcon className="w-5 h-5 stroke-2 stroke-gray-500 rotate-180" />
          Go back
        </Link>
      </div>
    </article>
  )
}

export default VerificationPage