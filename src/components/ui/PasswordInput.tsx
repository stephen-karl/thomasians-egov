import { EyeIcon, EyeOffIcon } from '@icons/index';
import { useState, ChangeEvent } from 'react'
import clsx from 'clsx'

interface PasswordInputProps {
  className?: string;
  value: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  error?: Boolean;
  maxLength?: number;
  toggle: boolean
  setToggle: (toggle: boolean ) => void;
  label?: string;
}

const PasswordInput = ({ 
  className, 
  value, 
  placeholder, 
  onChange, 
  onBlur,
  isDisabled, 
  error, 
  maxLength, 
  toggle, 
  setToggle,
  label
  }: PasswordInputProps
) => {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={clsx(className + " flex flex-col gap-2")}>
      {label && <label className="text-sm text-gray-900 ">{label}</label>}
      <span 
        className={clsx({
          "ring-1 ring-rose-500 outline outline-offset-1 outline-rose-100": error,
          "ring-1 ring-gray-200 cursor-not-allowed text-sm": isDisabled,
          "ring-1 ring-gray-200": !error && !isDisabled,
          "flex px-4 h-12 items-center justify-center rounded-xl": true,
          "ring-1 outline-offset-3 outline-2": isFocused && !error,
        })}
      >
        <input 
          value={value}
          className={clsx({
            "placeholder:text-rose-500 text-sm text-rose-500": error,
            "placeholder:text-gray-400 cursor-not-allowed text-gray-400 bg-white": isDisabled,
            "placeholder:text-gray-500 font-normal text-gray-700 text-sm placeholder:font-normal placeholder:text-sm ": !error && !isDisabled,
            "outline-none w-full h-full": true
          })}
          placeholder={placeholder} 
          type={!toggle ? "password" : "text"}
          onChange={onChange} 
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlur) onBlur(e);
          }}
          onFocus={() => setIsFocused(true)}
          disabled={isDisabled} 
          maxLength={maxLength}
        />
        { value &&       
          <button type="button" className="w-7 h-7 p-1 " onClick={()=>setToggle(!toggle)}>
            {
              !toggle ? (
                <EyeIcon className={`w-full h-full ${error ? " stroke-rose-500 " : " stroke-gray-500 "} `} />
              ) : (
                <EyeOffIcon className={`w-full h-full ${error ? " stroke-rose-500 " : " stroke-gray-500 "}`} />
              )
            }
          </button>
        }
      </span>
    </div>
  )
}

export default PasswordInput
