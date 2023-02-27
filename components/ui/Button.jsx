import React from "react";

const Button = ({ text, style }) => {
  return (
    <div>
      <div className="border px-[31px] py-[10px] rounded-full hover:bg-yellow hover:border-none">
        <button className={`text-base leading-[18px]${style} sm:hidden`}>
          {text}
        </button>
      </div>
    </div>
  );
};

export default Button;
