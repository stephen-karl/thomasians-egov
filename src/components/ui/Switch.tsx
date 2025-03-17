import { useState } from 'react';
import { motion } from 'framer-motion';

type SwitchProps = {
  checked: boolean;
  onChange?: (value: boolean) => void;
};

const Switch = ({ checked, onChange }: SwitchProps) => {
  const [isOn, setIsOn] = useState(checked);

  const toggleSwitch = () => {
    const newState = !isOn;
    setIsOn(newState);
    onChange?.(newState);
  };

  return (
    <button
      className={`relative w-10 h-5 px-[2px] rounded-full flex items-center 
        transition-colors duration-150 ease-in
        ${isOn ? 'bg-sunset' : 'bg-gray-200'}`}
      onClick={toggleSwitch}
      type="button"
    >
      <motion.div
        className="absolute w-4 h-4 rounded-full bg-white shadow-md"
        initial={false}
        animate={{ x: isOn ? 19 : 1 }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default Switch;
