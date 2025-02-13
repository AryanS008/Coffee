import React from "react";
import MenuCard from "../layout/MenuCard";
import img1 from "../assets/image/menu1.jpg";

const Menu = () => {
  return (
  <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
        <h1 className=" font-semibold text-center text-4xl mt-24 mb-8">Our Menu</h1>

       <div>
        <MenuCard img={img1} title="Espresso"/>
       </div>
   </div>
  );
};

export default Menu;
