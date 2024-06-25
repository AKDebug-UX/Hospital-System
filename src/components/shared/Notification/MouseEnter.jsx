import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { Img, Button, List, Text } from "components";

const MouseEnter = ({text_center, text_left}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const navigate = useNavigate();
  
  return (
    <>
      <div className="relative">
        <Button
          onMouseEnter={() => {setIsOpen(true);}} onMouseLeave={() => {setIsOpen(false);}}
          className="items-center justify-center cursor-pointer font-medium px-[30px] py-[8px] rounded-[16px]">
          
        <Img
          src="/images/img_question.svg"
          className="h-6 w-6"
          alt="question"
        />
        </Button>
        {isOpen && (
          <div className="absolute top-10 right-0 bg-white w-[245px] py-[15px] border border-gray-300 rounded-md shadow-lg">
          <p className="text-center items-center justify-center text-[11px]">{text_center}</p>
            <p className="text-left items-center mx-2 justify-center text-[11px]">{text_left}</p>
          </div>
        )}
      </div>
    </>
  );
};

export default MouseEnter;
