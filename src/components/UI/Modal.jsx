import React from 'react'
import portfolios from '../../assets/data/portfolioData'

function Modal({activeID, setShowModal}) {
    console.log("Active ID:", activeID);

    const portfolio = portfolios.find(portfolio => portfolio.id === activeID)
  return (
    <div className='w-full h-full fixed top-0 left-0 z-10 bg-headingColor bg-opacity-40'>
        <div className='max-w-[600px] absolute top-[3%] left-[30%] z-20 bg-white rounded-[8px] transform-translate-x-1/2-translate-y-1/2 p-5'>
            <div>
                <figure>
                    <img src={portfolio.imgUrl} alt="" />
                </figure>
            </div>

            <div>
                <h2 className='text-2xl text-headingColor font-[600] my-5 mb-0'>{portfolio.title}</h2>
                <p className='text-[15px] leading-7 text-smallTextColor mt-0'>{portfolio.description}</p>

                <div className='mt-1 flex items-center gap-3 flex-wrap'>
                    <h2 className='text-headingColor font-[700] text-[14px]'>Technologies</h2>
                    {
                        portfolio.technologies.map((item, index) => (
                            <span key={index} className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'>{item}</span>
                        ))
                    }
                    <button className='rounded-[8px] leading-3 bg-smallTextColor text-white w-24 h-7 hover:bg-primaryColor hover:text-smallTextColor'>visit</button>
                </div>
            </div>
            <button onClick={() => setShowModal(false)} className='w-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leadng-[0] cursor-pointer'>&times;</button>
        </div>
    </div>
  )
}

export default Modal