import React, { useEffect, useLayoutEffect, useRef } from "react";
import { ReactComponent as RightArrow } from "../assets/Arrow 2.svg";
import test from "../assets/alcanes.png";
import test2 from "../assets/azilureReal.png";
import gsap from "gsap";
const Services = () => {
  const linkOne = useRef(null);
  const linkTwo = useRef(null);
  const linkThree = useRef(null);
  const linkFour = useRef(null);

  const mouseMove = (e, elem) => {
    elem.style.opacity = 1;
    elem.style.zIndex = 1000;
    elem.style.left = e.clientX + 250 + "px";
    elem.style.transform = `scale(1)`;

    elem.style.transform = `translateX(-50%) rotate(-10deg)`;
  };

  const mouseLeave = (e, elem) => {
    elem.style.opacity = 0;
    elem.style.transform = `translateX(0%)`;
    elem.style.transform = `scale(0.8)`;
  };
  useLayoutEffect(() => {
    const container = gsap.utils.toArray(".serviceContainer");

    container.forEach((item) => {
      gsap.fromTo(
        item,
        { backgroundColor: "#f2f0e4" },
        {
          backgroundColor: "black",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            end: "top 40%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className='min-h-screen  mx-auto  serviceContainer '>
      <h1 className='text-[250px] text-mainText headerFont'>Services</h1>

      <nav className='w-full'>
        <div
          className='link'
          onMouseOver={(e) => mouseMove(e, linkOne.current)}
          onMouseLeave={(e) => mouseLeave(e, linkOne.current)}
        >
          <span>Ui/UX</span>
          <span className='arrow'>
            <RightArrow />
          </span>
          <div className=' hover-reveal' ref={linkOne}>
            <img src={test} className='hidden-img ' alt='' />
          </div>
        </div>
        <div
          className='link'
          onMouseOver={(e) => mouseMove(e, linkTwo.current)}
          onMouseLeave={(e) => mouseLeave(e, linkTwo.current)}
        >
          <span>Web Development</span>

          <span className='arrow'>
            <RightArrow />
          </span>
          <div className='image01 hover-reveal' ref={linkTwo}>
            <img src={test2} className='hidden-img' alt='' />
          </div>
        </div>

        <div
          className='link'
          onMouseOver={(e) => mouseMove(e, linkThree.current)}
          onMouseLeave={(e) => mouseLeave(e, linkThree.current)}
        >
          <span>App Development</span>

          <span className='arrow'>
            <RightArrow />
          </span>
          <div className='image01 hover-reveal' ref={linkThree}>
            <img src={test} className='hidden-img' alt='' />
          </div>
        </div>
        <div
          className='link'
          onMouseOver={(e) => mouseMove(e, linkFour.current)}
          onMouseLeave={(e) => mouseLeave(e, linkFour.current)}
        >
          <span>SEO</span>

          <span className='arrow'>
            <RightArrow />
          </span>
          <div className='image01 hover-reveal' ref={linkFour}>
            <img src={test} className='hidden-img' alt='' />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Services;
