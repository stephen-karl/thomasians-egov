import { ReactNode } from 'react'

type MaxWidthWrapperProps = {
  children: ReactNode
  className?: string
}

const MaxWidthWrapper = ({ children, className } : MaxWidthWrapperProps ) => {

  const baseStyle = "max-w-[1366px] mx-auto"

  return (
    <article className={`${baseStyle} ${className}`}>
      {children}
    </article>
  )
}

export default MaxWidthWrapper