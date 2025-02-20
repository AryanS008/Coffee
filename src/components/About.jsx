import React from "react";
import img from "../assets/image/about.jpg";
import Button from '../layout/Button'; 

const About = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 px-5 bg-blue-200">
      <h1 className=" font-semibold text-center text-4xl lg:mt-14 mt-24 mb-8">About Us</h1>

      <div className=" flex  flex-col lg:flex-row items-center gap-6">
        <div className=" w-full lg:w-2/4">
          <img className=" rounded-lg" src={img} alt="img" />
        </div>
        <div className=" w-full lg:w-2/4 p-4 space-y-3">
          <h2 className=" font-semibold text-3xl">What Makes Our Coffee Special?</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias qui
            velit modi animi sint amet harum deleniti quasi! Maxime quis
            accusantium eos non, qui placeat <br/>doloremque similique veniam a
            architecto?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit iste
            ut quibusdam neque itaque! Soluta cumque natus fuga quos doloribus
            veniam?
          </p>

          <Button title="Learn More"/>
        </div>
      </div>
    </div>
  );
};

export default About;
