import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

import "../App.css";
import "../style/globals.css";
import { ReactComponent as DownArrow } from "../assets/Arrow 1.svg";

const Hero = () => {
  const titleRef = useRef();
  const secondTitle = useRef();

  const blob = useRef();
  const fancyword = useRef();
  const fancySecond = useRef();
  const logoText = useRef();

  const enhance = (elemRef, str) => {
    const letters = str.split("");
    letters.forEach((item) => {
      const span = document.createElement("span");
      span.className = "letter";
      span.innerText = item;
      elemRef.appendChild(span);
    });
  };

  const blobMove = (e) => {
    const { clientX, clientY } = e;
    const myElem = blob.current;
    if (myElem) {
      myElem.animate(
        {
          left: `${clientX / 2}px`,
          top: `${clientY / 2}px`,
        },
        { duration: 3000, fill: "forwards" }
      );
    }
  };

  useLayoutEffect(() => {
    document.addEventListener("mousemove", blobMove);
    enhance(fancyword.current, "Fullstack");
    enhance(fancySecond.current, "Developer");

    return () => {
      document.removeEventListener("mousemove", blobMove);
      // enhance(fancyword.current, "FULLSTACK");
      // enhance(fancySecond.current, "DEVELOPER");
    };
  }, []);


  useLayoutEffect(() => {
   const timeLine = gsap.timeline({ defaults: { duration: 0.3 } });
   timeLine.set(titleRef.current, { opacity: 0, y: -100, duration: 0.02 });
   timeLine.set(secondTitle.current, { opacity: 0, x: 0 });

   timeLine
     .to(titleRef.current, {
       y: 0,
       opacity: 0.2,
       ease: "power3.in",
     })
     .to(titleRef.current, { y: -35, opacity: 0.4 })
     .to(titleRef.current, { y: 0, opacity: 1, ease: "power3.in" })
     .to(titleRef.current, { y: -20, opacity: 1 })
     .to(titleRef.current, { y: 0, opacity: 1, ease: "power3.in" })
     .to(secondTitle.current, { opacity: 1, x: 100, ease: "power3.in" });

   timeLine.play();
  },[])


  return (
    <div className='bg-[#000000] w-full sm:min-h-screen text-mainText overflow-x-hidden z-0 '>
      <div className='blob ' ref={blob}></div>

      <nav className=' flex justify-between mt-5'>
        <div className='headerFont  text-4xl'>
          <h1 ref={logoText} data-logo='MANSAB MIR'>
            {" "}
            {`MANSAB MIR`}
          </h1>
        </div>
        <div>
          <button className='bg-transparent px-4 py-3 border-mainText border mr-3 rounded hover:bg-mainText hover:text-black transition-all duration-700 hover:px-7'>
            mansabmirsde@gmail.com
          </button>
        </div>
      </nav>
      <div className='w-full'>
        <div className=' mt-20 w-10/12 mx-auto  text-[16px] sm:flex justify-between   text-[#ff4500] '>
          <h1 ref={titleRef}>
            Available for exciting <br />
            collaborations and projects
          </h1>
          <p className='float-right'>
            Solving digital <br />
            problems since 2k19
          </p>
        </div>
      </div>

      <section className='flex flex-col items-center justify-start h-[70vh] lg:text-[120px] md:text-[80px] text-[60px]  cursor-pointer headerFont'>
        <div ref={fancyword} className='flex letterParent'></div>
        <div ref={fancySecond} className='letterParent'></div>
      </section>
      <div className='downArrow fixed ml-28 flex'>
        <h1>Scroll</h1>
        <DownArrow />
        <h1>Down</h1>
      </div>
    </div>
  );
};

export default Hero;
