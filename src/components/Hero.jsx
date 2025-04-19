import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-[#48A6A7] max-w-7xl mx-auto rounded-lg px-4 sm:px-6 md:px-10 lg:px-20 mt-4">
      {/* ------------Left Side---------------- */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4 py-6 sm:py-10 md:py-[10vw] md:mb-[-30px]">
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight md:leading-tight lg:leading-tight md:text-left">
          Start Learning <br />
          With Our Courses
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-3 text-white text-sm font-light text-center md:text-left">
          <img className="w-20 sm:w-28" src="./group.png" alt="" />
          <p>
            Simply browse through our extensive list of trusted courses,{" "}
            <br className="hidden sm:block" />
            and start your learning journey hassle-free.
          </p>
        </div>
        <a
          className="flex scroll-smooth items-center gap-2 bg-white px-6 sm:px-8 py-3 rounded-full text-gray-600 text-sm mx-auto md:mx-0 hover:scale-105 transition-all duration-300"
          href="#course"
        >
          Browse Courses
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mt-1"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
      </div>
      {/* ------------Right Side---------------- */}
      <div className="w-full md:w-1/2 relative mt-6 md:mt-0">
        <img
          className="w-full h-auto rounded-lg"
          src="./educate.png"
          alt="Header illustration"
        />
      </div>
    </div>
  );
};

export default Hero;
