import React from 'react'
import ProductCard from '../layout/ProductCard'; 
import img1 from '../assets/image/product1.jpg';
import img2 from '../assets/image/product2.jpg';
import img3 from '../assets/image/product3.jpg';


const Product = () => {
  return (
    <div className=' min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-blue-200'>
        <h2 className=' font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8'>Our Product</h2>

        <div className=' flex flex-col lg:flex-row gap-12 justify-center'>
            <ProductCard img={img1} title="Nespresso"/>
            <ProductCard img={img2} title="AeroPress"/>
            <ProductCard img={img3} title="Chemex"/>
        </div>
    </div>
  )
}

export default Product;