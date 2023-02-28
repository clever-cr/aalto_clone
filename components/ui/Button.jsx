import React from "react";

const Button = ({ text, style, styleButton }) => {
  return (
    <div>
      <div
        className={`border px-[31px] py-[10px] rounded-full hover:bg-yellow hover:border-none  ${styleButton}`}
      >
        <button className={`text-base leading-[18px]${style} `}>{text}</button>
      </div>
    </div>
  );
};

export default Button;
