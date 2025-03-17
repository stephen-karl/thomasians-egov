

export const getColorForInitial = (initial: string) => {
  const letterToColor: { [key: string]: string } = {
    A: 'bg-teal-500',
    B: 'bg-yellow-500',
    C: 'bg-red-500',
    D: 'bg-green-500',
    E: 'bg-blue-500',
    F: 'bg-indigo-500',
    G: 'bg-orange-500',
    H: 'bg-pink-500',
    I: 'bg-purple-500',
    J: 'bg-blue-500',
    K: 'bg-red-500',
    L: 'bg-teal-500',
    M: 'bg-green-500',
    N: 'bg-yellow-500',
    O: 'bg-indigo-500',
    P: 'bg-purple-500',
    Q: 'bg-pink-500',
    R: 'bg-orange-500',
    S: 'bg-red-500',
    T: 'bg-green-500',
    U: 'bg-blue-500',
    V: 'bg-yellow-500',
    W: 'bg-purple-500',
    X: 'bg-pink-500',
    Y: 'bg-indigo-500',
    Z: 'bg-teal-500',
    1: 'bg-red-500',
    2: 'bg-green-500',
    3: 'bg-blue-500',
    4: 'bg-yellow-500',
    5: 'bg-purple-500',
    6: 'bg-pink-500',
    7: 'bg-orange-500',
    8: 'bg-red-500',
    9: 'bg-teal-500',
    0: 'bg-indigo-500',
  };
  return letterToColor[initial.charAt(0).toUpperCase()]
};


type AvatarProps = {
  className?: string;
  firstName: string;
  lastName: string;
  src: string | null | undefined
  size?: "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl"
}

const Avatar = ({
  className,
  firstName,
  lastName,
  src,
  size = "sm"
}:AvatarProps) => {

  const initials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase()
  const bgColor = getColorForInitial(initials)

  const getAvatarSize = (size: string) => {
    switch(size){
      case "xxs":
        return "w-6 h-6"
      case "xs":
        return "w-8 h-8"
      case "sm":
        return "w-9 h-9"
      case "md":
        return "w-10 h-10"
      case "lg":
        return "w-12 h-12"
      case "xl":
        return "w-14 h-14"
      case "2xl":
        return "w-16 h-16"
      case "3xl":
        return "w-20 h-20"
      default:
        return "w-9 h-9"
    }
  }

  const getTextSize = (size: string) => {
    switch(size){
      case "sm":
        return "text-sm"
      case "md":
        return "text-base"
      case "lg":
        return "text-lg"
      case "xl":
        return "text-xl"
      case "2xl":
        return "text-2xl"
      case "3xl":
        return "text-3xl"
      default:
        return "text-xs"
    }
  }

  const AvatarSize = getAvatarSize(size)
  const textSize = getTextSize(size)

  return (
    src ? (
      <img src={src} alt={`${name} avatar`} className={`${AvatarSize} rounded-full ring-1 ring-gray-200 flex-shrink-0 ${className}`} />
    ) : (
      <div className={`${bgColor} ${AvatarSize} rounded-full flex items-center justify-center flex-shrink-0 ${className}`}>
        <p className={`text-white  ${textSize} `}>
          {initials}
        </p>
      </div>
    )
  )
}

export default Avatar