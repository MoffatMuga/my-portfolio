import React from 'react'

function Header() {
  return (
    <header className='w-full h-[80px] flex items-center justify-center'>
    <div className="container">
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-[10px]'>
                <span className='w-[45px] h-[35px] bg-primaryColor text-white text-[18px] font-500 rounded-full flex items-center justify-center'>Dev</span>
                <div className='flex flex-col'>
                    <h2 className='text-xl text-smallTextColor font-[700]'>Moffat</h2>
                    <p className='text-smallTextColor text-[12px] font-[500]'>personal</p>
                </div>
            </div>

            <div className="menu">
                <ul className='flex items-center gap-[10px]'>
                    <li>
                        <a className= 'text-smallTextColor font-[600]'href="#about">About</a>
                    </li>
                    <li>
                        <a className= 'text-smallTextColor font-[600]' href="#experience">Experience</a>
                    </li>
                    <li>
                        <a className= 'text-smallTextColor font-[600]' href="#projects">Projects</a>
                    </li>
                    <li>
                        <a className= 'text-smallTextColor font-[600]' href="#contact">contact</a>
                    </li>
                </ul>
            </div>
            <div className='flex items-center gap-4'>
                <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] '>
                <i class="ri-mail-send-line"></i>chat me
                </button>
                <span className='md:hidden text-smallTextColor text-2xl cursor-pointer'><i class="ri-menu-4-fill"></i></span>
            </div>
        </div>
    </div>
    </header>



  ) 
}

export default Header