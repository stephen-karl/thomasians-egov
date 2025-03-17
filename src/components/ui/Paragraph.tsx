import { useState } from 'react';

type ParagraphProps = {
  paragraph: string;
  className?: string;
};

const Paragraph = ({ paragraph, className }: ParagraphProps) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  const handleToggle = () => setIsToggled(!isToggled);

  // Truncate paragraph to 512 characters if not toggled
  const truncatedParagraph = paragraph.length > 512 && !isToggled 
    ? paragraph.slice(0, 512) 
    : paragraph;

  return (
    <p className={` ${className} tracking-tight whitespace-pre-line`}>
      <span>{truncatedParagraph + "... "}</span>
      {!isToggled && paragraph.length > 512 && ''}
      {paragraph.length > 512 && (
        <button
          className="text-lilac font-medium"
          onClick={handleToggle}
        >
          {isToggled ? 'Show less' : 'Read more'}
        </button>
      )}
    </p>
  );
};

export default Paragraph;
