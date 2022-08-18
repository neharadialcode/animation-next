import React, { useLayoutEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const NewAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let second = gsap
      .timeline({
        scrollTrigger: {
          trigger: ".one_section",
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
          pin: true,
          immediateRender: false,
        },
      })
      .to(".one_section", {
        position: "fixed",
      });

    let third = gsap.timeline({
      scrollTrigger: {
        trigger: ".two_section",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
      },
    });
    third.to(".one_section", {
      opacity: 0,
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      gsap.killTweensOf(window);
    };
  }, []);
  return (
    <div className="main_section position-relative vh-100">
      <div className="bg-danger w-100 one_section vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white fw-bold">One</h1>
      </div>
      <div className="bg-primary two_section vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white fw-bold">Two</h1>
      </div>
      <div className="bg-success three_section vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white fw-bold">Three</h1>
      </div>
    </div>
  );
};

export default NewAnimation;
