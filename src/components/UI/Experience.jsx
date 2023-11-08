import React from 'react'

const Experience = () => {
  return (
    <section id='experience'>
        <div className='container lg:pt-5'> 
            <div className="text-center">
                <h2 className='text-headingColor font-[500] text-[2.4rem] mb-5'>
                        What I Do
                </h2>
                <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-7'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam veniam officia odit vel adipisci, perspiciatis, non dolorem ipsa quia mollitia saepe nam? Blanditiis sequi nisi similique rerum eum placeat quasi.
                </p>
            </div>
            <div className="flex justify-center items-center mt-6">
                <div className="w-1/2">
                    <div
                    data-aos="fade-right"
                    data-aos-duration="1200"
                    className="bg-white p-4 rounded shadow ease-in duration-150"
                    >
                    <h3 className="text-primaryColor text-2xl font-[700] group-hover:text-white group-hover:font-[600] text-center">
                        Front End Development
                    </h3>
                    <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum consequuntur saepe
                        laborum, beatae aspernatur totam facilis nesciunt labore dicta eveniet aliquid natus
                        explicabo assumenda ipsam autem vitae tenetur harum quis.
                    </p>
                    </div>
                </div>
                
                <div className="w-1/2">
                    <div
                    data-aos="fade-left"
                    data-aos-duration="1200"
                    className="bg-white p-4 rounded shadow ease-in duration-150"
                    >
                    <h3 className="text-primaryColor text-2xl font-[700] text-center">
                        Back End Development
                    </h3>
                    <p className="text-[15px] text-smallTextColor group-hover:text-white group-hover:font-[500] text-center">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum consequuntur saepe
                        laborum, beatae aspernatur totam facilis nesciunt labore dicta eveniet aliquid natus
                        explicabo assumenda ipsam autem vitae tenetur harum quis.
                    </p>
                    </div>
                </div>
            </div>
            <div>
                    <h3 className="text-[1.8rem] text-headingColor  text-center font-[600] mb-5 mt-5">My Technologies</h3>
            </div>
            
            <div className="flex justify-center space-x-4 sm:space-x-2 cursor-pointer hover:scale-110 transform transition-transform">
                <img src="/atom.png" alt="react" className="w-20 h-20 rounded-lg hover:scale-110 transform transition-transform" />
                <img src="js.png" alt="JS" className="w-20 h-20 rounded-lg hover:scale-110 transform transition-transform" />
                <img src="html.png" alt="html" className="w-20 h-20 rounded-lg hover:scale-110 transform transition-transform" />
                <img src="css.png" alt="css" className="w-20 h-20 rounded-lg hover:scale-110 transform transition-transform" />
                <img src="/python.png" alt="python" className="w-20 h-20 rounded-lg hover:scale-110 transform transition-transform" />
                <img src="/Tailwind-CSS1.png" alt="Tailwind" className="w-20 h-20 rounded-lg hover:scale-110 transform transition-transform" />
                <img src="/mysql.png" alt="mysql" className="w-20 h-20 rounded-lg hover:scale-110 transform transition-transform" />
                <img src="/postgres.png" alt="postgres" className="w-20 h-20 rounded-lg hover:scale-110 transform transition-transform" />
            </div>         
        
        </div>
    </section>
  )
}

export default Experience