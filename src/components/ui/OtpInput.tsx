import { KeyboardEvent, useState, ChangeEvent } from "react";
import clsx from "clsx";

type OtpInputProps = {
  onChange: (otpValue: string) => void;
  error?: boolean;
  className?: string;
};

const OtpInput = ({ onChange, error, className }: OtpInputProps) => {
  const [focusedInput, setFocusedInput] = useState<number | null>(null);
  const [otp, setOtp] = useState<string[]>(new Array(6).fill(""));

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const val = e.target.value;
    if (!/^[0-9]?$/.test(val)) return; // Allow only single digit numbers

    const newOtp = [...otp];
    newOtp[index] = val;
    setOtp(newOtp);
    onChange(newOtp.join(""));

    if (val && index < 5) {
      document.getElementById(`input-${index + 1}`)?.focus();
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`input-${index - 1}`)?.focus();
    }
  };

  const baseStyle = "w-14 h-14 text-center transition-all ease-in-out duration-150 font-normal outline-none rounded-xl ring-1 ring-gray-200";
  const focusedStyle = "ring-1 ring-gray-500 border border-gray-900 outline-none z-20 text-gray-700";
  const errorStyle = "ring-1 ring-rose-200 border border-rose-500 text-rose-500";

  return (
    <div className={`flex items-center justify-center gap-4 ${className}`}>
      {otp.map((_, index) => (
        <input
          key={index}
          id={`input-${index}`}
          className={clsx(baseStyle, {
            [focusedStyle]: focusedInput === index,
            [errorStyle]: error,
          })}
          type="text"
          value={otp[index]}
          onFocus={() => setFocusedInput(index)}
          onBlur={() => setFocusedInput(null)}
          maxLength={1}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
