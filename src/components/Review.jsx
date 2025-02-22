import React from 'react'
import ReviewCard from '../layout/ReviewCard';
import img1 from '../assets/image/pic1.png';
import img2 from '../assets/image/pic2.png';
import img3 from '../assets/image/pic3.png';

const Review = () => {
  return (
    <div className='min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-blue-200'>
      <h1 className=' font-semibold text-center text-4xl lg:mt-14 mt-24'>Customer's Reviews</h1>

      <div className=' flex felx-col lg:flex-row gap-5 justify-center py-4 my-8'>
        <ReviewCard img={img1} title="Olivia Ava"/>
        <ReviewCard img={img2} title="John Deo"/>
        <ReviewCard img={img3} title="Sofia Zoe"/>
      </div>
    </div>
  )
}

export default Review;