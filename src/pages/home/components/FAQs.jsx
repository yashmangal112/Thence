import React, { useState } from 'react';

const FAQs = ({ question, answer}) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-[#D7D7D7] border-b-2">
      <div className="flex justify-between pb-4 mt-[30px]">
        <div className="max-w-[550px]">{question}</div>
        <div className="flex items-center cursor-pointer" onClick={toggleAnswer}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d={isOpen ? "M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" : "M5 11V13H19V11H5Z"}
              fill="black"
            />
          </svg>
        </div>
      </div>
      
        <div className={ isOpen ? 'font-manrope text-[15px] font-normal text-[#617275] opacity-0 max-h-0  transition-max-height ease-in duration-300'
                            :   'font-manrope text-[15px] font-normal text-[#617275] py-6 opacity-100 max-h-full transition-max-height ease-in-out duration-300'}>
                        {answer}
        </div>
      
    </div>
  );
};

export default FAQs;
