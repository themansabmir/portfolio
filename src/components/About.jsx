import React, { useEffect, useLayoutEffect, useRef } from "react";
import "../style/globals.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(useGSAP, ScrollTrigger);

const phrase = `
So, you stumbled upon my digital hideout, did you? Well, brace yourself for a riveting tale. I'm that elusive full-stack developer you've been warned about – part magician, part code wrangler.
Every glitch is a chance to showcase my problem-solving prowess, turning chaos into order with a flick of my keyboard.
In the wild world of freelancing, I'm not just another developer; I'm the Gandalf of your digital Middle-earth. Need a website that doesn't induce eye-rolls? Or an app that doesn't crash on the first tap? Consider it done – with a sprinkle of my digital magic, of course.
`;
export const About = () => {
  const main = useRef(null);

  useLayoutEffect(() => {
    const characters = gsap.utils.toArray(".char");

    characters.forEach((character) => {
      gsap.fromTo(
        characters,
        { opacity: 0.1 },
        {
          opacity: 1,

          scrollTrigger: {
            trigger: characters[0],
            start: "top 80%",
            end: "bottom 30%",
            scrub: 1,
          },
          stagger: 0.5,

          duration: 1,
        }
      );
    });
  }, []);

  // useGSAP(() => {
  //   const characters = gsap.utils.toArray(".char");

  //   characters.forEach((character) => {
  //     gsap.fromTo(
  //       characters,
  //       { opacity: 0.1 },
  //       {
  //         opacity: 1,

  //         scrollTrigger: {
  //           trigger: characters[0],
  //           start: "top 80%",
  //           end: "bottom 30%",
  //           scrub: 1,
  //         },
  //         stagger: 0.5,

  //         duration: 1,
  //       }
  //     );
  //   });
  // }, []);
  return (
    <div className=' bg- min-h-screen   mx-20'>
      <h1 className='float-right text-[70px] sm:text-[80px]  font-[900]  text-mainText  relative  z-10 aboutMe'>
        <span className='aboutMe'></span>
        ABOUT ME
      </h1>

      <div className='char text-justify text-[30px] max-w-3xl paraFont' ref={main}>
        {phrase.split(" ").map((char, i) => {
          return (
            <span className='char text-mainText' key={i}>
              {char+" "}
            </span>
          );
        })}
      </div>
      <div className='min-h-screen'>n</div>
    </div>
  );
};
