import React from 'react';

const currentYear = new Date().getFullYear();

function Footer() {
    return (
      <div className="container">
        <div className="mt-0 flex flex-col bg-smallTextColor w-full justify-around h-auto p-6 md:flex-row md:h-[250px]">
          <div className="flex flex-col md:w-[220px] gap-4 md:mb-0 mb-6">
            <ContactInfo icon="ri-phone-fill" text="0715662604" />
            <ContactInfo icon="ri-mail-fill" text="moffat.muga@gmail.com" />
            <ContactInfo icon="ri-map-pin-fill" text="Rongo" />
          </div>
  
          <div className="flex flex-col items-center text-center md:w-1/2 md:pr-6">
            <p className="text-white font-bold text-base md:text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero possimus tenetur dolorem, provident in delectus, ad quam ipsum ea pariatur iure facere harum saepe veniam cumque, eum vitae! Fugiat, distinctio.
            </p>
  
            <div className="flex items-center gap-4 flex-wrap mt-5">
              <span className="text-white">Interested?</span>
              <a href="#contact">
                <button className="bg-primaryColor text-white font-semibold hover:bg-gray-400 rounded-full py-2 px-4 text-sm">
                  <i className="ri-send-plane-line"></i> Hire me
                </button>
              </a>
            </div>
  
            <div className="flex items-center mt-5 gap-4">
              <SocialIcon link="https://twitter.com" icon="ri-twitter-x-line" />
              <SocialIcon link="https://linkedin.com" icon="ri-linkedin-box-fill" />
              <SocialIcon link="https://github.com" icon="ri-github-fill" />
            </div>
          </div>
  
          <div className="flex flex-col mt-6 md:mt-0">
            <div className="flex flex-col gap-3">
              <h3 className="text-white font-bold text-base md:text-lg border border-primaryColor p-0.5 rounded-md">Quick links</h3>
              <ul className="text-white cursor-pointer">
                <FooterLink href="#about">About</FooterLink>
                <FooterLink href="#Experience">Experience</FooterLink>
                <FooterLink href="#projects">Projects</FooterLink>
                <FooterLink href="#contact">Contact</FooterLink>
              </ul>
            </div>
  
            <div className="flex items-center gap-2 mt-2">
              <span className="w-[45px] h-[35px] bg-primaryColor text-white text-[18px] font-500 rounded-full flex items-center justify-center">Dev</span>
              <div className="flex flex-col">
                <h2 className="text-base md:text-xl text-gray-400 font-bold">Moffat</h2>
                <p className="text-gray-400 text-sm md:text-base font-[500]">personal</p>
              </div>
            </div>
          </div>
        </div>
  
        <div>
          <p className="text-white font-light text-base md:text-lg mt-5 flex items-center justify-center">&copy; {currentYear}</p>
        </div>
      </div>
    );
  }
const ContactInfo = ({ icon, text }) => (
  <div className="flex flex-row items-center gap-3">
    <i className={`${icon} text-white rounded-full bg-primaryColor p-3 w-10 h-10 flex items-center cursor-pointer`} style={{ zIndex: 1 }}></i>
    <span className="font-bold text-white text-[1.0rem] w-20">{text}</span>
  </div>
);

const SocialIcon = ({ link, icon }) => (
  <span className="text-gray-600 bg-white font-bold rounded-full cursor-pointer p-3 w-8 h-8 flex items-center justify-center hover:text-primaryColor">
    <a href={link}>
      <i className={icon}></i>
    </a>
  </span>
);

const FooterLink = ({ href, children }) => (
  <li className="transition-transform transform hover:scale-110">
    <a href={href}>{children}</a>
  </li>
);

export default Footer;
