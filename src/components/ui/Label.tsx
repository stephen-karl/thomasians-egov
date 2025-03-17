import clsx from 'clsx'
import { ReactNode } from 'react'


type LabelProps = {
  children: ReactNode
  className?: string
}

const Label = ({
  children,
  className
}: LabelProps ) => {

  const baseStyle = "text-gray-900 text-base font-light"
  
  return (
    <label
      className={clsx(baseStyle, className)}
    >
      {children}
    </label>
  )
}

export default Label