import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <section className='py-4 pb-6 h-fit z-50 absolute w-full bg-white'>
        <div className='flex flex-col px-2 lg:px-8 items-center justify-between'>
          <div className='flex items-center justify-center text-center w-full text-gray-500 mt-4'>
            <p>Copyright &copy; 2024 <span className='text-[#007aff]'>A2Z Cleaning Service</span>. All Rights Reserved.</p>
          </div><br />
          <div className='flex flex-col sm:flex-col justify-center gap-4 items-center space-y-2'>
            
            <div className='flex items-center space-x-2 text-gray-600'>
              <FaEnvelope className='text-[#007aff]' />
              <span>atozhomerepairservice@gmail.com</span>
            </div>
            
            <div className='flex items-center space-x-2 text-gray-600'>
              <FaPhoneAlt className='text-[#007aff]' />
              <span>+977 9812107370, 9762272048</span>
            </div>
            
            <div className='flex items-center space-x-2 text-gray-600'>
              <FaMapMarkerAlt className='text-[#007aff]' />
              <span>Gothatar, Kathmandu, Nepal</span>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
