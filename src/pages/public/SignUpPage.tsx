import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { AUTH_HERO_IMAGE } from "@constants/images"
import Button from "@components/ui/Button"
import Image from "@components/ui/Image"
import Input from "@components/ui/Input"
import Label from "@components/ui/Label"
import Link from "@components/ui/Link"
import PasswordInput from "@components/ui/PasswordInput"

const SignUpPage = () => {

  const navigate = useNavigate()
  const [ toggle, setToggle ] = useState(false)
  const [ password, setPassword ] = useState("")

  return (
    <article className="flex items-center justify-between py-12 ">
      <section className="w-full flex items-center justify-center 2xl:justify-start p-4 ">
        <div className="flex flex-col items-center justify-center max-w-[32rem] px-20 w-full">
          <h1 className="text-2xl text-gray-900">
            Let's get started.
          </h1>
          <p className="text-base text-gray-900 font-light text-center">
            Create an account to continue.
          </p>
          <div className="w-full flex items-start flex-col mt-8">              
            <Input
              label="Email Address"
              type="email"
              placeholder="juandelacruz@mail.com"
              className=" w-full"
            />
            <PasswordInput
              label="Password"
              placeholder=""
              className="mt-4 w-full"
              toggle={toggle}
              setToggle={setToggle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordInput
              label="Confirm password"
              placeholder=""
              className="mt-4 w-full"
              toggle={toggle}
              setToggle={setToggle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* <div className="w-full flex items-center justify-end mt-4">
            Terms and Condition 
          </div>*/}
          <Button variant="primary" className="w-full mt-8" onClick={() => navigate("/verify")}>
            Create Account
          </Button>
          <div className="w-full flex items-center justify-center mt-4">
            <Label className="text-gray-900">
              Already have an account?
              <Link to="/login" className="ml-1">
                Login
              </Link>
            </Label>
          </div>
        </div>
      </section>
      <section className="w-full hidden 2xl:flex items-center justify-end">
        <Image src={AUTH_HERO_IMAGE} alt="hero" className="w-10/12 object-cover aspect-square rounded-3xl" />
      </section>
    </article>
  )
}

export default SignUpPage