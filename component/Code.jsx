import React from "react";

const Code = () => {
  ScrollTrigger.matchMedia({
    "(min-width:992px)": function () {
      let hero = gsap.timeline({
        scrollTrigger: {
          trigger: ".image_conatiner",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          immediateRender: false,
        },
      });
      hero.from(".image_conatiner", {
        yPercent: 100,
      });
      let second = gsap.timeline({
        scrollTrigger: {
          trigger: ".section_1",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacer: true,
          immediateRender: false,
        },
      });
      second.fromTo(
        ".img_one",
        {
          position: "absolute",
          bottom: "-40vh",
          left: "50%",
          translateX: "-50%",
          opacity: 0,
          scale: 2,
        },
        {
          position: "absolute",
          bottom: "20vh",
          right: 0,
          opacity: 1,
          scale: 0.8,
        }
      );

      let third = gsap.timeline({
        scrollTrigger: {
          trigger: ".section_2",
          start: "top top",
          end: "bottom top",
          scrub: 1,
          pin: true,
          pinSpacer: true,
          immediateRender: false,
        },
      });
      third
        .fromTo(
          ".img_one",
          {
            scale: 0.8,
          },
          {
            scale: 0,
          }
        )
        .fromTo(
          ".img_two",
          {
            position: "absolute",
            bottom: "-40vh",
            left: "50%",
            translateX: "-50%",
            opacity: 0,
            scale: 2,
          },
          {
            position: "absolute",
            bottom: "20vh",
            right: 0,
            opacity: 1,
            scale: 0.8,
          }
        );
    },
  });
  return <div>Code</div>;
};

export default Code;
