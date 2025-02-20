/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src//*.{js,ts,jsx,tsx}"],

  safelist: [
    "bg-gradient-to-r from-blue-200 to-blue-400 bg-blue-200 flex flex-col md:flex-row justify-between  bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] text-black rounded-t-3xl mt-8 md:mt-0 p-8 md:px-32 px-5 md:w-1/4 font-semibold text-xl pb-4 text-sm font-medium text-xl pb-4 pt-5 md:pt-0 gap-2 hover:text-blue-950 transition-all cursor-pointer ml-16 text-backgroundColor  text-brightColor lg:w-2/6 lg:px-32 px-5 lg:mt-14 mt-24 py-4 my-8 lg:w-2/6 bg-white p-3 rounded-lg gap-5 lg:justify-start gap-12 text-3xl p-4 space-y-3 lg:mt-14 mt-24 mb-8 flex-wrap pb-8 border-black mt-5 mt-3 rounded-xl bg-backgroundColor bottom-0 left-0 lg:w-1/4 p-3 rounded-lg text-4xl mt-24 mb-8 lg:px-32 px-5 bg-white px-8 py-2 top-5",
    "text-blue-400 right-0 rounded-full shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]",
    "text-5xl lg:text-start leading-tight lg:justify-between gap-6 lg:w-2/4 space-y-4 mt-14 lg:mt-0",
    " min-h-screen justify-center lg:flex-row lg:justify-center items-center lg:px-32 px-5 gap-10 fixed w-full z-10 hidden lg:flex",
    "lg:hidden flex flex-col absolute bg-black text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300",
    "translate-x-0",
    "-translate-x-full md:hidden flex items-center absolute inset-x-0 bottom-0 h-0.5 bg-black transform scale-x-0",
    "origin-left transition-transform group-hover:scale-x-100 group relative inline-block  ",
    "hidden md:flex flex-row items-center text-lg font-medium gap-8 text-xl font-semibold",
    "justify-between p-5 lg:px-32 px-5 bg-gradient-to-r from-backgroundColor to-brightColor shadow-[0_3px_10px_rgb(0,0,0)]",
    "flex flex-row items-center cursor-pointer gap-2",
    "px-3 text-sm px-6 py-1 border-2 border-white  transition-all rounded-full",
  ],
  theme: {
    extend: {
      colors: {
        brightColor: "#AB6B2E",
        backgroundColor: "#FDE9CC",
      },
    },
  },
  plugins: [],
};
