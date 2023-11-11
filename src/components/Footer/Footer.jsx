import React from 'react'

const currentYear = new Date().getFullYear();

function Footer() {

  return (
    <div className="container">
        
        
        <div className='mt-0 flex flex-row  bg-smallTextColor w-full h-[250px] flex-wrap  '>
        <div className='flex  justify-around px-6 py-6 gap-4'>
            <div className='flex items-start justify-between w-[340px] flex-col gap-2 flex-wrap' >
            <div className='flex flex-row items-center gap-3'>
            <i className='ri-phone-fill text-white rounded-full bg-primaryColor p-3 w-10 h-10 flex items-center' style={{ zIndex: 1 }}></i><span className='font-[700] text-white text-[1.0rem] w-20'>0715662604</span>
            </div>
            <div className='flex flex-row items-center gap-3'>
            <i className='ri-mail-fill text-white rounded-full bg-primaryColor p-3 w-10 h-10 flex items-center' style={{ zIndex: 1 }}></i><span className='font-[700]  text-white text-[1.0rem] w-20'>moffat.muga@gmail.com</span>
            </div>
            <div className='flex flex-row items-center gap-3'>
            <i className='ri-map-pin-fill text-white rounded-full bg-primaryColor p-3 w-10 h-10 flex items-center' style={{ zIndex: 1 }}></i><span className='font-[700] text-white text-[1.0rem] w-20'>Rongo</span>
            </div>
            </div>

            
                <div className=''>
                    <p className='text-white font-[600] text-[16px] w-[560px] text-center items-center'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero possimus tenetur dolorem, provident in delectus, ad quam ipsum ea pariatur iure facere harum saepe veniam cumque, eum vitae! Fugiat, distinctio.
                    </p>

                    <div  className="flex items-center gap-6  text-center">
                    <span className='text-white mt-5 items-center'> Interested?</span>
                     <a href="#contact">
                        <button className='bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-gray-400 ease-in duration-300 rounded-[8px] py-2 px-4 text-[12px]'>
                        <i class="ri-send-plane-line"></i>Hire me
                        </button>
                     </a>
                     </div>

                    <div className='flex items-center mt-10 gap-4 text-[20px] relative'>
                        <span className='text-gray-600  bg-white font-[600] rounded-full p-3 w-8 h-8 flex items-center justify-center z-10  hover:text-primaryColor'>
                            <a href="https://twitter.com">
                                <i className="ri-twitter-x-line"></i>
                            </a>
                        </span>
                        <span className='text-gray-600 font-[600] bg-white rounded-full p-3 w-8 h-8 flex items-center justify-center z-10 hover:text-primaryColor'>
                            <a href="https://linkedin.com">
                                <i className="ri-linkedin-box-fill"></i>
                            </a>
                        </span>
                        <span className='text-gray-600 font-[600] bg-white rounded-full p-3 w-8 h-8 flex items-center justify-center z-10 hover:text-primaryColor'>
                            <a href="https://github.com">
                                <i className="ri-github-fill"></i>
                            </a>
                        </span>
                    </div>

            </div>

                <div className='w-[130px]'>
                    <div className='flex flex-col gap-2 flex-wrap items-end'>
                        <h3 className='text-white text-[1.0rem] border border-primaryColor p-0.5 rounded-md'>Quick links</h3>
                        <ul className='text-white cursor-pointer '>
                            <li className='transition-transform transform hover:scale-110 '><a href='#about'>About</a></li>
                            <li className='transition-transform transform hover:scale-110'><a href='#Experience'>Experience</a></li>
                            <li className='transition-transform transform hover:scale-110'><a href='#projects'>Projects</a></li>
                            <li className='transition-transform transform hover:scale-110'><a href='#contact'>Contact</a></li>
                        </ul>

                    </div>
                    <div className='flex items-center gap-[10px] mt-2'>
                        <span className='w-[45px] h-[35px] bg-primaryColor text-white text-[18px] font-500 rounded-full flex items-center justify-center '>Dev</span>
                        <div className='flex flex-col'>
                            <h2 className='text-xl text-gray-400 font-[700]'>Moffat</h2>
                            <p className='text-gray-400 text-[12px] font-[500]'>personal</p>
                        </div>
                    </div>

                </div>
                
        </div>

        </div>
        <div> 
        
        </div>

        
                        <p className='text-white font-[300] text-[1.0rem] mt-0 flex items-center text-center z-10'>&copy; {currentYear}</p>
                    
        
        
    </div>
  ) 
}

export default Footer