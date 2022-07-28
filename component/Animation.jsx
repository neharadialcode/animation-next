import React, { useLayoutEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import TextOne from "./TextOne";
import TextTwo from "./TextTwo";

const Animation = () => {
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".target",
        start: "top top",
        end: "+=300%",
        markers: true,
        pin: true,
        pinSpacer: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((instance) => {
        instance.kill();
      });
      gsap.killTweensOf(window);
    };
  }, []);
  return (
    <div className="overflow-hidden">
      <div className="bg-danger vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white fw-bold">one</h1>
      </div>
      <div className="position-relative">
        <div className="container ">
          <div className="row justify-content-between">
            <div className="col-6">
              <TextOne />
            </div>
            <div className="col-5 d-flex flex-column justify-content-center target py-4 overflow-hidden">
              <div className="image_conatiner mx-auto overflow-hidden ">
                <img className="w-100" src="/img/one.png" alt="one" />
                <img className="w-100" src="/img/two.png" alt="one" />
                <img className="w-100" src="/img/three.png" alt="one" />
                <img className="w-100" src="/img/four.png" alt="one" />
                <img className="w-100" src="/img/five.png" alt="one" />
              </div>
            </div>
          </div>
          <div className="row section_2">
            <div className="col-6">
              <TextOne />
            </div>
            <div className="col-6 d-flex flex-column justify-content-center"></div>
          </div>
          <div className="row section_3">
            <div className="col-6">
              <TextOne />
            </div>
            <div className="col-6 d-flex flex-column justify-content-center"></div>
          </div>
          <div className="row section_4">
            <div className="col-6">
              <TextOne />
            </div>
            <div className="col-6 d-flex flex-column justify-content-center"></div>
          </div>
        </div>
      </div>
      <div className="bg-success vh-100 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white fw-bold">one</h1>
      </div>
    </div>
  );
};

export default Animation;
