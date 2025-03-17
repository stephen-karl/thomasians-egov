import { Outlet } from "react-router-dom"
import Navbar from "@components/home/Navbar"
import MaxWidthWrapper from "@components/wrapper/MaxWidthWrapper"

const HomeLayout = () => {

  return (
    <main className="w-screen h-screen flex-col flex items-start justify-start overflow-y-scroll">
      <Navbar />
      <MaxWidthWrapper className="w-full h-full">
        <Outlet />
      </MaxWidthWrapper>
    </main>
  )
}

export default HomeLayout