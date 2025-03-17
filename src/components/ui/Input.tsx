import { useState, ChangeEvent, ReactNode, MouseEvent } from 'react'
import clsx from 'clsx'

interface InputProps {
  className?: string;
  label?: string;
  value?: string | number;
  placeholder?: string;
  type?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: ChangeEvent<HTMLInputElement>) => void;
  onClick?: (event: MouseEvent<HTMLInputElement>) => void;
  isDisabled?: boolean;
  icon?: ReactNode;
  button?: ReactNode; 
  error?: Boolean;
  maxLength?: number;
  onlyNumbers?: boolean;
}

const Input = ({ 
  className, 
  value, 
  placeholder, 
  type = "text", 
  onChange, 
  onBlur, 
  onClick,
  isDisabled, 
  icon, 
  button, 
  error, 
  maxLength, 
  onlyNumbers = false,
  label 
}: InputProps
) => {

  const [isFocused, setIsFocused] = useState(false);
  const [prevValue, setPrevValue] = useState(value);

  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (onlyNumbers && e.currentTarget.value && !/^\d*$/.test(e.currentTarget.value)) {
      e.currentTarget.value = prevValue as string;
    } else {
      setPrevValue(e.currentTarget.value);
    }
  };




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
        {icon ? (
          <div className="flex-shrink-0">
            {icon}
          </div>
          ) : null
        }
        <input 
          value={value}
          className={clsx(
            {
              "placeholder:text-rose-500 text-sm text-rose-500": error,
              "placeholder:text-gray-400 cursor-not-allowed text-gray-400 bg-white": isDisabled,
              "placeholder:text-gray-500 font-normal text-gray-700 text-sm placeholder:font-normal placeholder:text-sm ": !error && !isDisabled,
              "outline-none w-full h-full": true
            }
          )}
          placeholder={placeholder} 
          type={type} 
          onChange={onChange} 
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlur) onBlur(e);
          }}
          onClick={(e) => {
            if (onClick) onClick(e);
          }}
          onFocus={() => setIsFocused(true)}
          disabled={isDisabled} 
          maxLength={maxLength}
          onKeyDown={onlyNumbers ? (e) => {
            if (!e.ctrlKey && !e.metaKey && !["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"].includes(e.key)) {
              e.preventDefault();
            }
          } : undefined}
          onInput={handleInput}
        />
        {button ? (
          <div className="flex-shrink-0">
            {button}
          </div>
          ) : null
        }
      </span>
    </div>
  )
}

export default Input