import data from "../../assets/data/portfolioData";
import React, {useState} from 'react'
import Modal from "./Modal";
function Project() {

    const [nextItems, setNextItems] = useState(6)
    const [portfolios, setPortfolios] = useState(data)
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(null)


    const seeMoreHandler = () =>{
        setNextItems(prev => prev + 3)
    }
    // 
    
    // const showModalHandler = (id) => {
    //     const clickedPortfolio = portfolios.find(portfolio => portfolio.id === id);
    //             console.log('Clicked Portfolio:', clickedPortfolio);
      
    //     if (clickedPortfolio) {
    //       setShowModal(true);
    //       setActiveID(id);
    //     }
    //   };

      const showModalHandler = id => {
        setShowModal(true)
        setActiveID(id)
    }

    // const showModalHandler = (portfolio) => {
    //     console.log("Clicked Portfolio:", portfolio);
    //     setShowModal(true);
    //     setActiveID(portfolio.id);
    //   };
      
      
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
                        portfolios.slice(0, nextItems)?.map((portfolio,index) =>(
                            <div key={index}
                            data-aos='zoom-in' data-aos-delay='50' data-aos-duration='1000'className='group max-w-full sm:w-[48.5%] md:w-[31.8%] lg:w-[32.2%] relative z-[1]'>
                                <figure>
                                    <img className='rounded-[8px] 'src={portfolio.imgUrl} alt="" />
                                </figure>

                                <div className="w-full h-full bg-primaryColor bg-opacity-40 absolute top-0 left-0 z-5 hidden group-hover:block ">
                                    <div className="flex items-center justify-center w-full h-full">
                                        <button onClick={()=>showModalHandler(portfolio.id)} className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-2 rounded-[8px] font-[500] ease-in duration-200 ">
                                            Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
            </div>

            <div className="text-center mt-6">

                    {
                        nextItems < portfolios.length && data.length > 6 && <button  onClick={seeMoreHandler} className="text-white bg-headingColor hover:bg-smallTextColor py-2 px-2 rounded-[8px] font-[500] ease-in duration-200 ">
                        see more
                    </button>
                    }

                {/* <div onClick={seeMoreHandler}
                className="flex items-center justify-center w-full h-full">
                    
                </div> */}
            </div>

        </div>

        {
            showModal && <Modal setShowModal={setShowModal} activeID={activeID}/>
        }

            {/* {
            showModal && (
                <Modal
                setShowModal={setShowModal}
                portfolio={activeID}
                />
            )
            } */}

            {/* {showModal && activeID !== null && (
            <Modal setShowModal={setShowModal} activeID={activeID} />
            )} */}


    </section>
  )
}

export default Project