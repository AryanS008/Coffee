import React from "react";
import {BsStarFill , BsStarHalf } from 'react-icons/bs';
import {FaQuoteRight} from 'react-icons/fa';

const ReviewCard = (props) => {
  return (
    <div className=" flex flex-col w-full lg:w-2/6 bg-white p-3 rounded-lg gap-5">
      <div className=" flex flex-row items-center lg:justify-start justify-center">
        <div className="w-1/4 ">
          <img className="rounded-full" src={props.img} alt="img" />
        </div>
        <div className=" mx-3">
          <h2 className=" font-semibold text-lg">{props.title}</h2>
          <div className="flex">
            <BsStarFill className=" text-blue-400" />
            <BsStarFill className=" text-blue-400" />
            <BsStarFill className=" text-blue-400" />
            <BsStarFill className=" text-blue-400" />
            <BsStarHalf className="text-blue-400" />
          </div>
        </div>
        <span className=" ml-16">
          <FaQuoteRight className=" bg-blue-200" size={42} />
        </span>
      </div>
      <p>
        {" "}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, veniam
        velit voluptates ipsa fugiat facere natus, repellat deserunt quas,
        tempora rem nobis corrupti vitae praesentium culpa? Totam architecto
        minima sint?
      </p>
    </div>
  );
};

export default ReviewCard;
