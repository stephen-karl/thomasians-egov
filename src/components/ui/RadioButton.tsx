import { MouseEvent} from 'react'

type RadioButtonProps = {
  value: string;
  checked: boolean;
  className: string;
  setChecked: (value: string) => void;
  didError?: boolean;
  isDisabled?: boolean;
  outline?: boolean;
}

const RadioButton = (
  {value, checked, className, setChecked, didError, isDisabled, outline = true}: RadioButtonProps
) => {

  const handleClick = (e: MouseEvent) => {
    e.preventDefault()
    setChecked(value);
  }

  return (
    <button 
      className={className + ` 
        ${outline ? " ring-1 px-4 gap-4 " : " gap-2 "}  focus:outline-gray-500 transition-colors duration-300 ease-out h-10  
        ${didError  && outline === true ? "ring-red-500 outline outline-offset-1 outline-3 outline-rose-100" : 
          (isDisabled ? "ring-gray-200 cursor-not-allowed "
        : (checked ? "ring-sunset" : "ring-gray-200"))} flex items-center justify-start rounded-md `} 
      onClick={handleClick}
      disabled={isDisabled}
      type="button"
    >
      <div 
        className={` flex-shrink-0 rounded-full w-5 h-5 ${didError ? " ring-red-500 ring-1 " : (isDisabled ? " ring-1 ring-gray-200  ": ( checked ? " border-[6px] border-sunset ring-sunset ring-1" : " ring-1 ring-gray-200"))}`}
      />
      <label 
        className={`text-sm  ${didError ? "text-rose-500 font-normal":( isDisabled ? "text-gray-400 cursor-not-allowed" : ( checked ? "  text-gray-700 font-normal" :"text-gray-500 font-normal cursor-pointer"))}`}
      >
        {value}
      </label>
    </button>
  )
}

export default RadioButton