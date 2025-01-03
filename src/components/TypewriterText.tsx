import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterTextProps {
  text: string;
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ text, className }) => {
  return (
    <div className={className}>
      <Typewriter
        onInit={(typewriter) => {
          typewriter
            .typeString(text)
            .start();
        }}
        options={{
          delay: 50,
          cursor: '',
          loop: false,
        }}
      />
    </div>
  );
};

export default TypewriterText;