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
    let second = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_1",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    second
      .fromTo(
        ".img_one",
        {
          position: "absolute",
          bottom: "-100vh",
          left: "50%",
          translateX: "-50%",
          scale: 1.5,
        },
        {
          position: "absolute",
          bottom: "15vh",
          right: 0,
          scale: 1,
        }
      )
      .to(".team", {
        opacity: 0,
      })
      .fromTo(
        ".img_two",
        {
          position: "absolute",
          bottom: "-100vh",
          left: "50%",
          translateX: "-50%",
          scale: 1.5,
        },
        {
          position: "absolute",
          bottom: "15vh",
          right: 0,
          scale: 1,
        }
      );
    let third = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_2",
        start: "top top",
        end: "bottom top",
        scrub: 1,
        immediateRender: false,
      },
    });
    third
      .fromTo(
        ".img_three",
        {
          position: "absolute",
          bottom: "-100vh",
          left: "50%",
          translateX: "-50%",
          scale: 1.5,
        },
        {
          position: "absolute",
          bottom: "15vh",
          right: 0,
          scale: 1,
        }
      )
      .fromTo(
        ".img_four",
        {
          position: "absolute",
          bottom: "-100vh",
          left: "50%",
          translateX: "-50%",
          scale: 1.5,
        },
        {
          position: "absolute",
          bottom: "15vh",
          right: 0,
          scale: 1,
        }
      );
    let four = gsap.timeline({
      scrollTrigger: {
        trigger: ".section_3",
        start: "top top",
        end: "bottom top",
        scrub: 1,

        immediateRender: false,
      },
    });
    four.fromTo(
      ".img_five",
      {
        position: "absolute",
        bottom: "-100vh",
        left: "50%",
        translateX: "-50%",
        scale: 1.5,
      },
      {
        position: "absolute",
        bottom: "15vh",
        right: 0,
        scale: 1,
      }
    );

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
          <div className="row justify-content-between section_1">
            <div className="col-6">
              <TextOne />
            </div>
            <div className="col-5 d-flex flex-column justify-content-center target py-4 ">
              <div className="image_conatiner mx-auto overflow-hidden position-relative">
                <img
                  className="w-100 p-4 positoin-absolute team"
                  src="/img/team.png"
                  alt="team"
                />
                <img
                  className="w-100 p-4 img_one"
                  src="/img/one.png"
                  alt="one"
                />
                <img
                  className="w-100 p-4 img_two"
                  src="/img/two.png"
                  alt="one"
                />
                <img
                  className="w-100 img_three p-4"
                  src="/img/three.png"
                  alt="one"
                />
                <img
                  className="w-100 p-4 img_four"
                  src="/img/four.png"
                  alt="one"
                />
                <img
                  className="w-100 p-4 img_five"
                  src="/img/five.png"
                  alt="one"
                />
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
