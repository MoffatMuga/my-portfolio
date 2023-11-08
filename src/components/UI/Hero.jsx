import React from 'react'
// import heroImg from '../..assets/images/moffat.png'
// import CountUp from 'react-countup/build/CountUp'


export default function Hero() {
  return (
    <section className='pt-0' id='about'>
        <div className='container pt-14'>
            <div className='md:flex items-center justify-between sm:flex-col md:flex-row'>
                <div className='w-full md:basis-1/2'>
                    <h5 data-aos='fade-right' data-aos-duration='1500' className='text-headigColor font-[600] text-[16px]'>Hello & welcome</h5>

                    <h1 data-aos='fade-up' data-aos-duration='1500' className='text-headigColor font-[800] text-[1.8rem] sm:text-[40px]'>
                        I'm Moffat Muga,<br /> A Software Developer
                    </h1>
                    <div  data-aos='fade-up' data-aos-duration='1800' data-aos-delay='200' className="flex items-center gap-6 mt-7">
                     <a href="#contact">
                        <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 rounded-[8px] py-2 px-4 text-[12px]'>
                        <i class="ri-mail-send-line"></i>Hire me
                        </button>
                     </a>
                     <a className='text-smallTextColor font-[600] border-b brder-solid border-smallTextColor'href="#projects">See projects <i class="ri-arrow-right-circle-line"></i></a>
                     
                </div>
                    
                    <p data-aos='fade-left' data-aos-duration='1800' className='flex gap-2 text-headingColor font-[500] text-[15px] mt-2'> <span><i class="ri-apps-2-line"></i></span>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis accusantium deserunt aliquam necessitatibus alias dolorem officiis, autem ipsam voluptas enim dolor. Magni, harum dolor aliquam pariatur tenetur nemo eaque aperiam!
                     </p>

                </div>
                

            </div>

        </div>
    </section>
  )
}
