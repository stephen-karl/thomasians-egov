import { HOME_HERO_IMAGE } from "@constants/images"
import { qualityPromises } from "@constants/list"
import { ArrowIcon } from "@icons/index"
import Button from "@components/ui/Button"
import Badge from "@components/ui/Badge"
import Link from "@components/ui/Link"
import Image from "@components/ui/Image"

const HomePage = () => {



  return (
    <article className="flex items-center justify-between py-12 ">
      <section className="w-full hidden 2xl:flex items-center justify-start">
        <Image src={HOME_HERO_IMAGE} alt="hero" className="w-10/12 object-cover aspect-square rounded-3xl" />
      </section>
      <section className="w-full flex items-center justify-center 2xl:justify-end p-4 ">
        <div className="flex flex-col items-center 2xl:items-start justify-center w-fit">
          <Badge color="green">
            Web Application is Live!
          </Badge>
          <h1 className="text-5xl text-center 2xl:text-start font-medium text-gray-800 leading-tight mt-4">
            New Generation of <br />
            Managing Documents <br />
            in Santo Tomas Pampanga <br />
          </h1>
          <p className="text-base font-light text-gray-900 my-4 text-center 2xl:text-start ">
            Effortless and fast document requests with secure digital access—saving <br />
            you time anytime, anywhere.
          </p>
          <div className="hidden 2xl:flex flex-col  gap-2 my-4">
            {qualityPromises.map((promise, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img src={promise.icon} alt="icon" className="aspect-square" />
                </div>
                <p className="text-base text-gray-900 font-light">{promise.text}</p>
              </div>
            ))}
          </div>
          
          <div className="w-full flex items-center justify-center 2xl:justify-start gap-4 mt-4">
            <Button variant="primary">
              Get Started
              <ArrowIcon className="w-4 h-4 ml-1 stroke-white stroke-3" />
            </Button>
            <Link to="/about" className="px-4">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </article>
  )
}

export default HomePage