import React from 'react';
import './Hero.css';
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section className='pt-0' id='about'>
      <div className='container pt-14'>
        <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
          <div className='w-full md:basis-1/2 mb-8 md:mb-0'>
            <h5
              data-aos='fade-right'
              data-aos-duration='1500'
              className='text-headigColor font-[600] text-[16px]'
            >
              Hello & welcome
            </h5>

            <h1
              data-aos='fade-up'
              data-aos-duration='1500'
              className='text-headigColor font-[800] text-[1.8rem] sm:text-[40px]'
            >
              I'm Moffat Muga,<br /> A Software Developer
            </h1>
            <div
              data-aos='fade-up'
              data-aos-duration='1800'
              data-aos-delay='200'
              className="flex flex-col sm:flex-row items-center gap-6 mt-7"
            >
              <a href="#contact">
                <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 rounded-[8px] py-2 px-4 text-[12px]'>
                  <i className="ri-send-plane-line"></i>Hire me
                </button>
              </a>
              <a
                className='text-smallTextColor font-[600] border-b border-solid border-smallTextColor'
                href="#projects"
              >
                See projects <i className="ri-arrow-right-circle-line"></i>
              </a>
            </div>

            <p
              data-aos='fade-left'
              data-aos-duration='1800'
              className='flex gap-2 text-headingColor font-[500] text-[15px] mt-2'
            >
              <span><i className="ri-apps-2-line"></i></span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium
              deserunt aliquam necessitatibus alias dolorem officiis, autem ipsam voluptas enim
              dolor. Magni, harum dolor aliquam pariatur tenetur nemo eaque aperiam!
            </p>

            <div className='flex items-center mt-14 gap-4 text-[20px] '>
              <span className=' text-smallTextColor font-[600] rounded-full p-3 w-10 h-10 flex items-center justify-center shadow-lg shadow-[#193256]'>
                <a href=""><i className="ri-twitter-x-line"></i></a>
              </span>
              <span className=' text-smallTextColor font-[600] rounded-full p-3 w-10 h-10 flex items-center justify-center shadow-lg shadow-[#193256]'>
                <a href=""><i className="ri-linkedin-box-fill"></i></a>
              </span>
              <span className=' text-smallTextColor font-[600] rounded-full p-3 w-10 h-10 flex items-center justify-center shadow-lg shadow-[#193256]'>
                <a href=""><i className="ri-github-fill"></i></a>
              </span>
            </div>
          </div>
          <div className='basis-1/3 mt-10 sm:mt-0'>
            <figure className="flex items-center justify-center">
                <div className="w-60 h-60 sm:w-60 sm:h-60 lg:w-80 lg:h-80 border-t-4 sm:border-t-6 lg:border-t-8 border-r-1 sm:border-r-2 lg:border-r-4 border-b-4 sm:border-b-4 lg:border-b-4 border-primaryColor absolute rounded-full"></div>
                <img src="muga.png" alt="moffat" className="rounded-full w-60 sm:w-60 lg:w-80 glow-object" />
            </figure>

          </div>
          <div className='md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end'>
            <div className="mb-10">
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={2} duration={1} suffix='+' />
              </h2>
              <h4 className='text-headingColor font-[500] text-[15px]'>years of experience</h4>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={7} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingColor font-[500] text-[15px]'>built projects</h4>
              <h2 className='text-headingColor font-[700] text-[32px]'>
                <CountUp start={0} end={8} duration={2} suffix='+' />
              </h2>
              <h4 className='text-headingColor font-[500] text-[15px]'>programming languages</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
