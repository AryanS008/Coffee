/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx}",
  ],

  safelist:[
    "bottom-0 left-0",
    " bg-white px-8 py-2 top-5 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]",
    "text-5xl lg:text-start leading-tight lg:justify-between gap-6",
    " lg:w-2/4 space-y-4 mt-14 lg:mt-0",
    " min-h-screen justify-center lg:flex-row lg:justify-center items-center lg:px-32 px-5 gap-10",
    "fixed w-full z-10",
    "hidden lg:flex",
   "lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300",
    "translate-x-0" , "-translate-x-full",
    "md:hidden flex items-center",
    "absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0 origin-left transition-transform group-hover:scale-x-100",
    "group relative inline-block  hover:text-blue-400",
    "hidden md:flex flex-row items-center text-lg font-medium gap-8",
    "text-xl font-semibold",
    'justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0)]',
    "flex flex-row items-center cursor-pointer gap-2",
    'px-6 py-1 border-white bg-[#FFDCAB]  hover:text-brightColor transition-all rounded-full'
     ],
  theme: {
    extend: {
      colors:{
        brightColor:'#AB6B2E',
        backgroundColor:'#FDE9CC',
      },

    },
  },
  plugins:[],
 
}