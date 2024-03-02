import React, { useEffect, useRef } from "react";

export const Contact = () => {
  const cursor = useRef(null)


  useEffect(() => {
    const elem = cursor.current

    document.addEventListener('mousemove', (e) => {
      elem.style.position = "absolute"
      elem.style.left= e.clientX +'px'
    })
  },[])

  return (
    <div className=''>
      <div className='grid grid-cols-1 sm:grid-cols-2 min-h-screen text-mainText  '>
        <div className='col-span-1 flex flex-col justify-end sm:justify-start lg:text-[200px] md:text-[100px] text-[80px] text-justify text-mainText headerFont items-center'>
          <h1>Get In</h1>

          <h1>Touch</h1>
        </div>

        <div className='col-span-1 flex justify-center items-center relative'>
          <ul className='lg:text-[120px] md:text-[100px] text-[80px] relative'>
            <li className='navLinks'>GITHUB</li>
            <li className='navLinks'>LINKED IN</li>
            <li className='navLinks'>MAIL</li>
            <div className='cursor' ref={cursor}></div>
          </ul>
        </div>
      </div>
    </div>
  );
};
