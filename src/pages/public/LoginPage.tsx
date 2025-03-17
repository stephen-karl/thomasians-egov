import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AUTH_HERO_IMAGE } from '@constants/images'
import Button from '@components/ui/Button'
import Input from '@components/ui/Input'
import PasswordInput from '@components/ui/PasswordInput'
import Link from '@components/ui/Link'
import Image from '@components/ui/Image'
import Label from '@components/ui/Label'

const LoginPage = () => {

  const navigate = useNavigate()
  const [ toggle , setToggle ] = useState(false)
  const [ password, setPassword ] = useState('')


  return (
    <article className="flex items-center justify-between py-12 ">
      <section className="w-full flex items-center justify-center 2xl:justify-start p-4 ">
        <div className="flex flex-col items-center justify-center max-w-[32rem] px-20 w-full">
          <h1 className="text-2xl text-gray-900">Hi. Welcome back.</h1>
          <p className="text-base text-gray-900 font-light text-center">
            Login to continue to your account.
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
          </div>
          <div className="w-full flex items-center justify-end mt-4">
            <Link to="/recovery" size="sm">
              Forgot password?
            </Link>            
          </div>
          <Button 
            variant="primary" 
            className="w-full mt-4"
            onClick={() => navigate('/verify')}
          >
            Login
          </Button>
          <div className="w-full flex items-center justify-center mt-4">
            <Label className="text-gray-900">
              Don't have an account? 
              <Link to="/register" className="ml-1">
                Sign up
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

export default LoginPage