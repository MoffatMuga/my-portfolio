import data from "../../assets/data/portfolioData";
import React from 'react'

function Project() {
  return (
    <section id='projects'>
        <div className='container'>
            <div className='flex items-center justify-between flex-wrap'>
                <div className='mb-7 mt-0 sm:mb-0 mx-auto'>
                    <h3 className='text-headingColor text-[2.4rem] font-[500] text-center'>Successful  Projects</h3>
                </div>
            </div>

            <div className='flex items-center gap-4 flex-wrap mt-12'> 
                    {
                        data?.map((portfolio,index) =>(
                            <div className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                <figure>
                                    <img className='rounded-[8px] 'src={portfolio.imgUrl} alt="" />
                                </figure>
                            </div>
                        ))
                    }
            </div>

        </div>
    </section>
  )
}

export default Project