import React from 'react'

function Contact() {
  return (
    <section id="contact" className='pb-16'>
      <div className="container">
      <h2 className='font-[700] text-[1.8rem] text-headingColor text-center'>Get In Touch</h2>
        <div className="justify-between items-center md:flex">
          
          <div className='w-full md:w-[600px] h-[300px] sm:h-[450px]'>
            
          <iframe title='google-maps'src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.4693093474552!2d34.599965773897374!3d-0.7578509352746484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182b49f408bd6495%3A0xc8abf3c86e5c2151!2sLasjona%20Complex%20Hotel!5e0!3m2!1sen!2ske!4v1699674838383!5m2!1sen!2ske" className='border-o w-full h-full' allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

          </div>
          
          <div className='w-full md:w-[600px] h-[300px] sm:h-[450px] mt-0 lg:flex items-center bg-indigo-100 px-4 lg:px-8 py-8 flex flex-col' >
            
              <form className='w-full'>
                <div className='mb-5'>
                  <input type="text" placeholder='Enter your name' className='p-3 w-full focus:outline-none rounded-[5px]'/>
                </div>
              </form>

              <form className='w-full'>
                <div className='mb-5'>
                  <input type="email" placeholder='Enter your email' className='p-3 w-full focus:outline-none rounded-[5px]'/>
                </div>
              </form>

              <form className='w-full'>
                <div className='mb-5'>
                  <textarea type="email" rows={3} placeholder='Write Your Message' className='p-3 w-full focus:outline-none rounded-[5px]'/>
                </div>
              </form>
            <button className='w-full p-3 focus:outline-none rounded-[8px] bg-smallTextColor text-white hover:bg-headingColor text-center '>Send Message</button>
          </div>
        </div>
      </div>

    </section>
    
  )
}

export default Contact