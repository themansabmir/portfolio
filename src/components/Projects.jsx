import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import React, { useEffect, useLayoutEffect } from "react";
import { projectsData } from "./projectsData";
import "../style/globals.css";
gsap.registerPlugin(ScrollTrigger);
export const Projects = () => {
  useLayoutEffect(() => {
    const projects = gsap.utils.toArray(".projects");
    const projectSection = gsap.utils.toArray(".projectSection");
    projectSection.forEach((item) => {
      gsap.fromTo(
        item,
        { background: "black", width: "100%", padding: "50px 50px" },
        {
          background: "#f2f0e4",
          color: "#1a1a1a",
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
          color: "#1a1a1a",

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
  }, []);
  useLayoutEffect(() => {
    const layers = gsap.utils.toArray(".layer");

    const fadeinArr = gsap.utils.toArray(".fadein");
    fadeinArr.forEach((item) => {
      gsap.fromTo(
        item,
        { x: -500 },
        {
          x: 0,
          scrollTrigger: {
            trigger: item,
            start: "top 40%",
            end: "top 30%",
          },
        }
      );
    });

    layers.forEach((layer) => {
      gsap.to(layer, {
        width: 0,
        scrollTrigger: {
          trigger: layer,
          start: "top 90%",
          end: "top 40%",

          scrub: true,
        },
        ease: "power4.in",
        stagger: 1,
        lazy: false,
      });
    });
  }, []);

  // useGSAP(() => {
  //   const projects = gsap.utils.toArray(".projects");
  //   const layers = gsap.utils.toArray(".layer");
  //   const projectSection = gsap.utils.toArray(".projectSection");
  //   const fadeinArr = gsap.utils.toArray(".fadein");
  //   fadeinArr.forEach((item) => {
  //     gsap.fromTo(
  //       item,
  //       { y: 50 },
  //       {
  //         y: 0,
  //       }
  //     );
  //   });

  //   projectSection.forEach((item) => {
  //     gsap.fromTo(
  //       item,
  //       { background: "black", width: "100%", padding: "50px 50px" },
  //       {
  //         background: "#423e3e",
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "top 0%",
  //           end: "bottom 80%",

  //           scrub: true,
  //         },
  //         stagger: 1,
  //       }
  //     );
  //   });
  //   projects.forEach((project) => {
  //     gsap.fromTo(
  //       project,
  //       {
  //         opacity: 0.4,
  //         y: 30,
  //         width: "100%",
  //       },
  //       {
  //         opacity: 1,

  //         y: -100,
  //         ease: "power3",
  //         scrollTrigger: {
  //           trigger: project,
  //           start: "top 80%",
  //           end: "top 40%",

  //           scrub: true,
  //         },
  //         stagger: 1,
  //       }
  //     );
  //   });

  //   layers.forEach((layer) => {
  //     gsap.to(layer, {
  //       width: 0,
  //       scrollTrigger: {
  //         trigger: layer,
  //         start: "top 90%",
  //         end: "top 40%",

  //         scrub: true,
  //       },
  //       ease: "power4.in",
  //       stagger: 1,
  //       lazy: false,
  //     });
  //   });
  // }, []);

  return (
    <section className='overflow-x-hidden projectSection '>
      <div className=' text-[60px] sm:text-[80px] md:text-[250px]  font-serif font-[900] headerFont text-mainText'>
        <h1>
          Select <br /> ed{" "}
        </h1>
        <h1>Work </h1>
        <p className="text-lg text-black font-sans font-medium">
          Where Dreams Become Code, and Code Becomes Reality (mmm most of the time).
        </p>
      </div>

      <div className='min-h-screen w-full '>
        {/*   First container */}
        <div className={`flex   mb-20 relative w-full  justify-between`}>
          <div className='w-full fadein'>
            <h4 className='text-mainText  bold projectTitle'>
              <span>01</span> <br /> <span>Alcanes</span>
            </h4>
          </div>
          <div className='ml-auto relative flex justify-end  projects h-[450px] w-[700px]'>
            <div className='absolute overflow-hidden flex  top-0 right-0 w-[700px] layer bg-black bg-opacity-80 h-full'></div>
            <a href={projectsData[0].liveLink} target='_blank'>
              <img
                src={projectsData[0].img}
                alt=''
                className='h-[450px] w-[700px] rounded-md bg-no-repeat'
              />
            </a>
          </div>
        </div>

        {/*  second project */}
        <div className={`flex   mb-20 relative w-full  justify-between`}>
          <div className='relative  projects h-[450px] w-[700px]  '>
            <div className='absolute top-0 left-0 w-[700px] layer overflow-hidden bg-black bg-opacity-80 h-full'></div>
            <a href={projectsData[1].liveLink} target='_blank'>
              <img
                src={projectsData[1].img}
                alt=''
                className='h-[450px] w-[700px] rounded-md'
              />
            </a>
          </div>
          <h4 className='w-full projectTitle'>
            <div className='w-full'></div>
            <span>02</span> <br /> <span>Azilure</span>
          </h4>
        </div>
        <div className={`flex   mb-20 relative w-full  justify-between`}>
          <div className='w-full fadein'>
            <h4 className='text-mainText projectTitle'>
              <span>03</span> <br /> <span>Picartjoy</span>
            </h4>
          </div>
          <div className='ml-auto relative flex justify-end  projects h-[450px] w-[700px]'>
            <div className='absolute overflow-hidden flex  top-0 right-0 w-[700px] layer bg-black bg-opacity-80 h-full'></div>
            <a href={projectsData[2].liveLink} target='_blank'>
              <img
                src={projectsData[2].img}
                alt=''
                className='h-[450px] w-[700px] rounded-md bg-no-repeat'
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
