import React, { useRef, useEffect, useState } from 'react';

function Header() {
  const headerRef = useRef(null);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky_header');
      } else {
        headerRef.current.classList.remove('sticky_header');
      }
    });
  };

  useEffect(() => {
    stickyHeaderFunc();

    return () => window.removeEventListener('scroll', stickyHeaderFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      top: location - 80,
      left: 0,
    });

    // Close the menu on mobile when a link is clicked
    if (window.innerWidth <= 768) {
      setMenuOpen(false);
    }
  };

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header ref={headerRef} className={`w-full h-[80px] flex items-center justify-center ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-[10px]'>
            <span className='w-[45px] h-[35px] bg-primaryColor text-white text-[18px] font-500 rounded-full flex items-center justify-center'>Dev</span>
            <div className='flex flex-col'>
              <h2 className='text-xl text-smallTextColor font-[700]'>Moffat</h2>
              <p className='text-smallTextColor text-[12px] font-[500]'>personal</p>
            </div>
          </div>

          <div className={`menu ${isMenuOpen ? 'show' : ''}`}>
            <ul className='flex flex-col md:flex-row items-center gap-[10px]'>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#about">About</a>
              </li>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#experience">Experience</a>
              </li>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#projects">Projects</a>
              </li>
              <li>
                <a onClick={handleClick} className='text-smallTextColor font-[600]' href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          
          <div className='flex items-center gap-4'>
            <button className='flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] '>
            <a href="https://wa.me/254721745482" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                    <i className="ri-mail-send-line"></i>Chat me
                </a>
            </button>
            <span className='md:hidden text-smallTextColor text-2xl cursor-pointer' onClick={handleMenuToggle}>
              <i className={`ri-menu-4-fill ${isMenuOpen ? 'menu-open-icon' : ''}`}></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
