import React from "react";
import styles from "../style";
import { quotes } from "../assets";
const FeedBack = ({ id, content, name, title, img }) => {
  return (
    <div
      className={`flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card`}
    >
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      />
      <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
        {content}
      </p>
      <div className="flex flex-row">
      <img src={img} className="w-[48px] h-[48px] rounded-full"/>
      <div className="ml-4 flex flex-col">
      <h4 className={`font-poppins font-semibold text-white text-[20px] leading-[30px]`}>{name}</h4>
      <p className="font-poppins font-normal text-dimWhite text-[16px] leading-[24px]">{title}</p>
      </div>
      </div>
    </div>
  );
};

export default FeedBack;
