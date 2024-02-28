import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect } from "react";
import { projectsData } from "./projectsData";
import "../style/globals.css";
gsap.registerPlugin(ScrollTrigger);
export const Projects = () => {
  useEffect(() => {}, []);

  useGSAP(() => {
    const projects = gsap.utils.toArray(".projects");
    const layers = gsap.utils.toArray(".layer");
    const projectSection = gsap.utils.toArray(".projectSection");
    projectSection.forEach((item) => {
      gsap.fromTo(
        item,
        { background: "black", width: "100%", padding: "50px 50px" },
        {
          background: "white",
          scrollTrigger: {
            trigger: item,
            start: "top 0%",
            end: "bottom 80%",

            scrub: true,
          },
          stagger: 1,
        }
      );
    });
    projects.forEach((project) => {
      gsap.fromTo(
        project,
        {
          opacity: 0.4,
          y: 30,
          width: "100%",
        },
        {
          opacity: 1,

          y: -100,
          ease: "power3",
          scrollTrigger: {
            trigger: project,
            start: "top 80%",
            end: "top 40%",

            scrub: true,
          },
          stagger: 1,
        }
      );
    });

    layers.forEach((layer) => {
      gsap.to(layer, {
        width: 0,
        scrollTrigger: {
          trigger: layer,
          start: "top 90%",
          end: "top 60%",

          scrub: true,
        },
        ease: "power4.in",
        stagger: 1,
        lazy: false,
      });
    });
  });

  return (
    <section className='overflow-x-hidden projectSection'>
      <div className=' text-[60px] sm:text-[80px] md:text-[250px] uppercase font-serif font-[900] text-mainText'>
        <h1>
          Select <br /> ed{" "}
        </h1>
        <h1>Work </h1>
      </div>

      <div className='min-h-screen w-full '>
        {/*  one container */}

        <div
          className={`flex  justify-between projects relative ml-auto  mb-20 h-[450px] w-[700px]`}
        >
          <h4 className=' text-[50px] sm:text-[60px] md:text-[80px]'>{``}</h4>

          <div className='relative cardParent  h-[450px] w-[700px]'>
            <a href={projectsData[0].liveLink} target='_blank'>
              <img
                src={projectsData[0].img}
                alt=''
                className=' rounded-lg hover:scale-90 transition-all duration-700'
              />
            </a>
          </div>
        </div>

        {/*   second container */}
        <div className={`flex   mb-20 relative w-full  justify-between`}>
          <h4 className="w-full">{`Azilure`}</h4>
          <div className='ml-auto relative flex justify-end  projects h-[450px] w-[700px]'>
            <div className='absolute overflow-hidden flex  top-0 right-0 w-[700px] layer bg-black bg-opacity-80 h-full'></div>
            <a href={projectsData[1].liveLink} target='_blank'>
              <img
                src={projectsData[1].img}
                alt=''
                className='h-[450px] w-[700px]'
              />
            </a>
          </div>
        </div>
        <div className={`flex   mb-20 relative w-full  justify-between`}>
          <div className='relative  projects h-[450px] w-[700px] w-full '>
            <div className='absolute top-0 left-0 w-[700px] layer overflow-hidden bg-black bg-opacity-80 h-full'></div>
            <a href={projectsData[1].liveLink} target='_blank'>
              <img
                src={projectsData[1].img}
                alt=''
                className='h-[450px] w-[700px]'
              />
            </a>
          </div>
          <h4 className='w-full'>{`Azilure`}</h4>
        </div>
      </div>
    </section>
  );
};
