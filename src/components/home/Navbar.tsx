import { useNavigate } from "react-router-dom"
import MaxWidthWrapper from "@components/wrapper/MaxWidthWrapper"
import Button from "@components/ui/Button"
import Link from "@components/ui/Link"

const Navbar = () => {

  const navigate = useNavigate()
  
  return (
    <nav className="w-full h-20 flex-shrink-0 sticky top-0 bg-white">
      <MaxWidthWrapper className="flex items-center justify-between w-full h-full px-4 2xl:px-0">
        <section className="w-fit h-full flex items-center">
          <Link to="/" className="text-xl uppercase font-semibold tracking-tight text-gray-900">
            Thomasians{" "}E-
            <span className="text-green-500">
              Gov
            </span>
          </Link>
        </section>
        <section className="flex-1 flex items-center justify-end gap-4">
          <Button variant="tertiary" onClick={() => navigate("/login")}>
            Login
          </Button>
          <Button variant="secondary" onClick={() => navigate("/register")}>
            Sign Up
          </Button>
        </section>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar