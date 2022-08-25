import React, { useLayoutEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TextOne from "./TextOne";
import TextTwo from "./TextTwo";

const Animation = () => {
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "none", duration: 2 });
  useLayoutEffect(() => {
    const tl = gsap.timeline();
    // tl.fromTo(
    //   ".onee",
    //   {
    //     xPercent: 0,
    //   },
    //   {
    //     xPercent: 0,
    //   }
    // )
    //   .fromTo(
    //     ".twoo",
    //     {
    //       xPercent: 100,
    //       zIndex: 1,
    //     },
    //     {
    //       xPercent: 0,
    //     }
    //   )
    //   .fromTo(
    //     ".threee",
    //     {
    //       yPercent: -100,
    //       zIndex: 2,
    //     },
    //     {
    //       yPercent: 0,
    //     }
    //   )
    //   .fromTo(
    //     ".fourr",
    //     {
    //       yPercent: 100,
    //       zIndex: 3,
    //     },
    //     {
    //       yPercent: 0,
    //     }
    //   );

    let six = gsap.timeline({
      scrollTrigger: {
        trigger: ".onee",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        markers: true,
      },
    });
    six.from(".onee", {
      xPercent: -100,
    });
    let twoo = gsap.timeline({
      scrollTrigger: {
        trigger: ".twoo",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    twoo.from(".twoo", { xPercent: -100, zIndex: 1 });
    let threee = gsap.timeline({
      scrollTrigger: {
        trigger: ".threee",
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });
    threee.from(".threee", { xPercent: -100, zIndex: 2 });
    let fourr = gsap.timeline({
      scrollTrigger: {
        trigger: ".fourr",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });
    fourr.from(".fourr", { xPercent: -100, zIndex: 3 });
  }, []);

  return (
    <div className="  position-relative main_parent ">
      <div className="vh-100"></div>
      <div className="bg-success vh-100 d-flex onee flex-column justify-content-center align-items-center position-absolute w-100">
        <h1 className="text-white fw-bold">one</h1>
      </div>
      <div className="bg-warning vh-100 twoo d-flex flex-column justify-content-center align-items-center position-absolute w-100">
        <h1 className="text-white fw-bold">two</h1>
      </div>
      <div className="bg-primary vh-100 threee d-flex flex-column justify-content-center align-items-center position-absolute w-100">
        <h1 className="text-white fw-bold">three</h1>
      </div>
      <div className="bg-danger fourr vh-100 d-flex flex-column justify-content-center align-items-center position-absolute w-100">
        <h1 className="text-white fw-bold">four</h1>
      </div>
      {/* <div className="bg-dark vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white fw-bold">five</h1>
      </div> */}
    </div>
  );
};

export default Animation;
