import React from 'react';
import Button from './Button';
import {BsStarFill , BsStarHalf} from 'react-icons/bs';

const ProductCard = ( props) => {
  return (
    <div className='w-full lg:w-1/4 bg-white p-3 rounded-lg'>
      <img className="rounded-lg" src={props.img} alt='img'/>

      <div className=' flex flex-col items-center mt-5 gap-3'>
        <h2 className=' font-semibold text-xl'> {props.title}</h2>
        <div className='flex'>
          <BsStarFill className=" text-blue-400"/>
          <BsStarFill className=" text-blue-400"/>
          <BsStarFill className=" text-blue-400"/>
          <BsStarFill className=" text-blue-400"/>
          <BsStarHalf className=" text-blue-400"/>
        </div>
        <h3 className=' font-semibold text-lg'>$15.99</h3>
        <Button title='ADD TO CARD'/>
      </div>
    </div>
  )
}

export default ProductCard;