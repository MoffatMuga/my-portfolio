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
        </div>
    </div>
    </header>



  )
}

export default Header