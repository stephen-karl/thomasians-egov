import { useState } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type ImageProps = {
  src: string;
  alt: string;
  className?: string;
}

const Image = ({ src, alt, className} : ImageProps) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  const baseStyle = ' object-cover transition-all duration-500 ';

  return (
    <div className="relative w-full h-auto">
      <motion.img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        className={clsx(baseStyle, className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        draggable={false}
        onContextMenu={(e) => e.preventDefault()}
      />
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 bg-white z-10"
        />
      )}
    </div>
  );
};

export default Image;
