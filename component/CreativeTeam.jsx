import React, { useEffect } from "react";
import Creative from "./Creative";
import ProfessionalCard from "./ProfessionalCard";
import LaunchWeeks from "./LaunchWeeks";
import Card2 from "./Card2";
import SuccessFullProjects from "./SuccessFullProjects";
import Card3 from "./Card3";
import Image from "next/image";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const CreativeTeam = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    ScrollTrigger.matchMedia({
      "(min-width:1200px)": function () {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".target",
            start: "top top",
            end: "+=500%",
            pin: true,
          },
        });
        tl.set(
          ".gradient_box",
          {
            background: " linear-gradient( #50FFD5 29.17%, #9643FF 100%)",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          },
          ".-1"
        );
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
          .to(".team-img", {
            top: "-200px",
            opacity: 0,
          })
          .fromTo(
            ".img_one",
            {
              position: "absolute",
              top: "200vh",
              left: "50%",
              translateY: "-50%",
              translateX: "-50%",
              scale: 1.5,
            },
            {
              position: "absolute",
              top: "50%",
              scale: 0.8,
            },
            "-.2"
          )
          .to(".icon_container", {
            opacity: 0.3,
          })

          .to(
            ".gradient_box",
            {
              background: "linear-gradient( #083445 0%, #B0EEBF 100%)",
              backgroundRepeat: "no-repeat",
              opacity: 0.9,
            },
            "-.2"
          )
          .to(".img33", {
            top: "-280px",
            duration: 2,
          })
          .to(".img22", {
            top: "-280px",
            duration: 2,
          });

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
            ".img_two",
            {
              position: "absolute",
              top: "200vh",
              left: "50%",
              translateY: "-50%",
              translateX: "-50%",
              scale: 1.5,
            },
            {
              position: "absolute",
              top: "50%",
              scale: 0.8,
            }
          )

          .to(".gradient_box", {
            background: "linear-gradient( #1D51FE 0%, #01040C 100%)",
            backgroundRepeat: "no-repeat",
            opacity: 0.5,
          })

          .to(".img11", {
            top: "-280px",
            duration: 2,
          });

        let four = gsap.timeline({
          scrollTrigger: {
            trigger: ".section_3",
            start: "top top",
            end: "bottom top",
            scrub: 1,

            immediateRender: false,
          },
        });
        four
          .fromTo(
            ".img_three",
            {
              position: "absolute",
              top: "200vh",
              left: "50%",
              translateY: "-50%",
              translateX: "-50%",
              scale: 1.5,
            },
            {
              position: "absolute",
              top: "50%",
              scale: 0.8,
            }
          )
          .to(
            ".img_one",
            {
              opacity: 0,
            },
            "-.2"
          )
          .to(".gradient_box", {
            background: "linear-gradient( #FFCAE3 0%, #FF85BF 100%)",
            backgroundRepeat: "no-repeat",
            opacity: 0.9,
          })
          .to(
            ".img_two",
            {
              opacity: 0,
            },
            "+.5"
          )
          .to(".img99", {
            top: "-280px",
            duration: 2,
          })
          .to(".img66", {
            top: "-280px",
            duration: 2,
          })
          .to(".img77", {
            top: "-280px",
            duration: 2,
          })
          .to(".img88", {
            top: "-280px",
            duration: 2,
          });

        let five = gsap.timeline({
          scrollTrigger: {
            trigger: ".section_4",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            immediateRender: false,
          },
        });
        five
          .fromTo(
            ".img_four",
            {
              position: "absolute",
              top: "200vh",
              left: "50%",
              translateY: "-50%",
              translateX: "-50%",
              scale: 1.5,
            },
            {
              position: "absolute",
              top: "50%",
              scale: 0.8,
            }
          )
          .to(".gradient_box", {
            background: "linear-gradient( #C05303 0%, #A48A04 100%)",
            backgroundRepeat: "no-repeat",
            opacity: 0.7,
          })
          .to(
            ".img_three",
            {
              opacity: 0,
            },
            "+.2"
          )
          .to(".img44", {
            top: "-280px",
            duration: 2,
          })
          .to(".img55", {
            top: "-280px",
            duration: 2,
          });

        let six = gsap.timeline({
          scrollTrigger: {
            trigger: ".section_5",
            start: "top top",
            end: "bottom top",
            scrub: 1,
            immediateRender: false,
          },
        });
        six
          .fromTo(
            ".img_five",
            {
              position: "absolute",
              top: "200vh",
              left: "50%",
              translateY: "-50%",
              translateX: "-50%",
              scale: 1.5,
            },
            {
              position: "absolute",
              top: "50%",
              scale: 0.8,
            }
          )
          .to(".gradient_box", {
            background: " linear-gradient( #234CDD 0%, #000000 100%)",
            backgroundRepeat: "no-repeat",
            opacity: 0.7,
          })
          .to(
            ".img_four",
            {
              opacity: 0,
            },
            "+.2"
          )
          .to(".img10", {
            top: "-280px",
            duration: 2,
          })
          .to(".img111", {
            top: "-280px",
            duration: 2,
          })
          .to(".img12", {
            top: "-280px",
            duration: 2,
          });

        return () => {
          ScrollTrigger.getAll().forEach((instance) => {
            instance.kill();
          });
          gsap.killTweensOf(window);
        };
      },
    });
  }, []);

  return (
    <div className="overflow-hidden target-main" id="team">
      <div className="position-relative mt-5 pt-4 pt-xl-0">
        <div className="container container-modified">
          <div className="row justify-content-center justify-content-xl-between section_1 mb-5 mb-xl-0">
            <div className="col-sm-10 col-lg-9 col-xl-6 mt-5 mt-xl-0 order-2 order-xl-0">
              <Creative />
            </div>
            <div className="col-sm-10 col-lg-9 col-xl-6 position-relative d-flex d-xl-none flex-column justify-content-center overflow-hidden">
              <div className="team-first team">
                <div className="position-absolute team-img team-first-img ">
                  <Image
                    width={96}
                    height={96}
                    src="/assets/images/team/Pooja-jangra.png"
                    alt="one"
                  />
                </div>
                <div className="position-absolute team-img team-second-img  ">
                  <Image
                    width={96}
                    height={96}
                    src="/assets/images/team/Joginder-saini.png"
                    alt="two"
                  />
                </div>
                <div className="position-absolute team-img team-third-img ">
                  <Image
                    width={96}
                    height={96}
                    src="/assets/images/team/Muskan-saini.png"
                    alt="three"
                  />
                </div>
                <div className="position-absolute team-img team-fourth-img  ">
                  <Image
                    width={96}
                    height={96}
                    src="/assets/images/team/Ravi-sirswa.png"
                    alt="four"
                  />
                </div>
                <div className="position-absolute team-img team-fifth-img ">
                  <Image
                    width={96}
                    height={96}
                    src="/assets/images/team/Palvi-tiwari.png"
                    alt="five"
                  />
                </div>
                <div className="position-absolute team-img team-sixth-img  ">
                  <Image
                    width={96}
                    height={96}
                    src="/assets/images/team/Sharukh-khan.png"
                    alt="six"
                  />
                </div>
                <div className="position-absolute team-img team-seven-img  ">
                  <Image
                    width={96}
                    height={96}
                    src="/assets/images/team/Surekha-Swami.png"
                    alt="six"
                  />
                </div>
                <div className="position-absolute team-img team-eight-img  ">
                  <Image
                    width={96}
                    height={96}
                    src="/assets/images/team/Vikas-swami.png"
                    alt="six"
                  />
                </div>
                <div className="position-absolute team-img team-nine-img  ">
                  <Image
                    width={96}
                    height={96}
                    src="/assets/images/team/Sahil-rara.png"
                    alt="six"
                  />
                </div>
                <div className="position-absolute team-img team-ten-img  ">
                  <Image
                    width={96}
                    height={96}
                    src="/assets/images/team/Manish-sharma.png"
                    alt="six"
                  />
                </div>
                <div className="position-absolute team-img team-eleven-img  ">
                  <Image
                    width={96}
                    height={96}
                    src="/assets/images/team/Ashu-sirswa.png"
                    alt="six"
                  />
                </div>
              </div>
            </div>
            <div className="col-xl-6 d-none d-xl-flex flex-column justify-content-center target py-4 text-center">
              <div className="image_conatiner d-flex flex-column justify-content-center w-100 mx-auto overflow-hidden position-relative">
                <div className="gradient_box w-100 h-100"></div>
                <div className="icon_container w-100 h-100 position-absolute">
                  <div className="icon1">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/icon1.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon2">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/react.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon3">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/node.png"
                      alt="nodejs"
                    />
                  </div>
                  <div className="icon4">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/next.png"
                      alt="nextjs"
                    />
                  </div>
                  <div className="icon5">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/angular.png"
                      alt="angular"
                    />
                  </div>
                  <div className="icon6">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/aws.png"
                      alt="aws"
                    />
                  </div>
                  <div className="icon7">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/bootstrap.png"
                      alt="bootstrap"
                    />
                  </div>
                  <div className="icon8">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/gsap.png"
                      alt="gsap"
                    />
                  </div>
                  <div className="icon9">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/figma.png"
                      alt="figma"
                    />
                  </div>
                </div>
                {/* Team of Creatives Images */}
                <div className="team-first team">
                  <div className="position-absolute team-img team-first-img ">
                    <Image
                      width={96}
                      height={96}
                      src="/assets/images/team/Pooja-jangra.png"
                      alt="one"
                    />
                  </div>
                  <div className="position-absolute team-img team-second-img  ">
                    <Image
                      width={96}
                      height={96}
                      src="/assets/images/team/Joginder-saini.png"
                      alt="two"
                    />
                  </div>
                  <div className="position-absolute team-img team-third-img ">
                    <Image
                      width={96}
                      height={96}
                      src="/assets/images/team/Muskan-saini.png"
                      alt="three"
                    />
                  </div>
                  <div className="position-absolute team-img team-fourth-img  ">
                    <Image
                      width={96}
                      height={96}
                      src="/assets/images/team/Ravi-sirswa.png"
                      alt="four"
                    />
                  </div>
                  <div className="position-absolute team-img team-fifth-img ">
                    <Image
                      width={96}
                      height={96}
                      src="/assets/images/team/Palvi-tiwari.png"
                      alt="five"
                    />
                  </div>
                  <div className="position-absolute team-img team-sixth-img  ">
                    <Image
                      width={96}
                      height={96}
                      src="/assets/images/team/Sharukh-khan.png"
                      alt="six"
                    />
                  </div>
                  <div className="position-absolute team-img team-seven-img  ">
                    <Image
                      width={96}
                      height={96}
                      src="/assets/images/team/Surekha-Swami.png"
                      alt="six"
                    />
                  </div>
                  <div className="position-absolute team-img team-eight-img  ">
                    <Image
                      width={96}
                      height={96}
                      src="/assets/images/team/Vikas-swami.png"
                      alt="six"
                    />
                  </div>
                  <div className="position-absolute team-img team-nine-img  ">
                    <Image
                      width={96}
                      height={96}
                      src="/assets/images/team/Sahil-rara.png"
                      alt="six"
                    />
                  </div>
                  <div className="position-absolute team-img team-ten-img  ">
                    <Image
                      width={96}
                      height={96}
                      src="/assets/images/team/Manish-sharma.png"
                      alt="six"
                    />
                  </div>
                  <div className="position-absolute team-img team-eleven-img  ">
                    <Image
                      width={96}
                      height={96}
                      src="/assets/images/team/Ashu-sirswa.png"
                      alt="six"
                    />
                  </div>
                </div>
                {/* Above and beyond service Image */}
                <div className="w-100 p-4 position_absolute img_one scale_hover_effect">
                  <div className="figma_img img22 imgg">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/figma.png"
                      alt="figma"
                    />
                  </div>
                  <Image
                    width={600}
                    height={410}
                    src="/assets/images/homepageAnimation/img2.png"
                    alt="one"
                  />
                  <div className="react_img imgg img33">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/react.png"
                      alt="react"
                    />
                  </div>
                </div>
                {/* launch within weeks Image*/}
                <div className="w-100 p-4 position_absolute img_two scale_hover_effect">
                  <div className="figma_img img11 imgg">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/figma.png"
                      alt="figma"
                    />
                  </div>
                  <Image
                    width={600}
                    height={420}
                    src="/assets/images/homepageAnimation/img1.png"
                    alt="one"
                  />
                </div>
                {/* Successful Image*/}
                <div className="w-100 p-4 position_absolute img_three  scale_hover_effect">
                  <div className="node_img imgg img66 position-absolute start-0">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/node.png"
                      alt="one"
                    />
                  </div>
                  <div className="aws_img imgg img77 position-absolute start-0">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/aws.png"
                      alt="aws"
                    />
                  </div>
                  <div className="figma2_img imgg img88 position-absolute end-0">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/figma.png"
                      alt="figma"
                    />
                  </div>
                  <div className="figma_img imgg img99">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/react.png"
                      alt="react"
                    />
                  </div>
                  <Image
                    width={600}
                    height={420}
                    src="/assets/images/homepageAnimation/img4.png"
                    alt="one"
                  />
                </div>
                {/* Illfact Image*/}
                <div className="w-100  p-4 position_absolute img_four scale_hover_effect">
                  <div className="figma_img imgg img44">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/firebase.png"
                      alt="one"
                    />
                  </div>
                  <Image
                    width={600}
                    height={400}
                    src="/assets/images/homepageAnimation/img3.png"
                    alt="one"
                  />
                  <div className="react_img imgg img55">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/tech.png"
                      alt="one"
                    />
                  </div>
                </div>
                {/* BeyondRocket Image*/}
                <div className="w-100 p-4 position_absolute img_five scale_hover_effect">
                  <Image
                    width={600}
                    height={420}
                    src="/assets/images/homepageAnimation/img6.png"
                    alt="one"
                  />
                  <div className="figma_img2 imgg img10 position-absolute end-0">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/figma.png"
                      alt="one"
                    />
                  </div>
                  <div className="gsap_img2 imgg img111 position-absolute start-0">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/gsap.png"
                      alt="one"
                    />
                  </div>
                  <div className="next_img imgg img12 position-absolute end-0">
                    <Image
                      width={80}
                      height={80}
                      src="/assets/images/homepageAnimation/next.png"
                      alt="one"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center justify-content-xl-between section_2 mb-5 mb-xl-0">
            <div className="col-sm-10 col-lg-9 col-xl-6 mt-5 mt-xl-0 order-2 order-xl-0">
              <ProfessionalCard />
            </div>
            <div className="col-sm-10 col-lg-9 col-xl-6 d-flex d-xl-none flex-column justify-content-center">
              <div className="team_img_parent_2 position-relative zoom_img_hover">
                <div className="icon_container_small w-100 h-100 position-absolute top-0 start-0">
                  <div className="icon1">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/icon1.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon2">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/react.png"
                      alt="react"
                    />
                  </div>
                  <div className="icon3">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/node.png"
                      alt="node"
                    />
                  </div>
                  <div className="icon4">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/next.png"
                      alt="next"
                    />
                  </div>
                  <div className="icon5">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/angular.png"
                      alt="angular"
                    />
                  </div>
                  <div className="icon6">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/aws.png"
                      alt="aws"
                    />
                  </div>
                  <div className="icon7">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/bootstrap.png"
                      alt="bootstrap"
                    />
                  </div>
                  <div className="icon8">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/gsap.png"
                      alt="gsap"
                    />
                  </div>
                  <div className="icon9">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/figma.png"
                      alt="figma"
                    />
                  </div>
                </div>
                <div className="position-absolute figma z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/figma.png"
                    alt="figma"
                  />
                </div>
                <div className="position-absolute react z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/react.png"
                    alt="react"
                  />
                </div>
                <Image
                  className="img_one br-8 team_img"
                  src="/assets/images/creativeTeam/one.png"
                  alt="one"
                  height={387}
                  width={576}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center justify-content-xl-between section_3 mb-5 mb-xl-0">
            <div className="col-sm-10 col-lg-9 col-xl-5 mt-5 mt-xl-0 order-2 order-xl-0">
              <LaunchWeeks />
            </div>
            <div className="col-sm-10 col-lg-9 col-xl-6 d-flex d-xl-none flex-column justify-content-center">
              <div className="team_img_parent_3 position-relative zoom_img_hover">
                <div className="icon_container_small w-100 h-100 position-absolute top-0 start-0">
                  <div className="icon1">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/icon1.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon2">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/react.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon3">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/node.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon4">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/next.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon5">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/angular.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon6">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/aws.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon7">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/bootstrap.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon8">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/gsap.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon9">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/figma.png"
                      alt="one"
                    />
                  </div>
                </div>
                <div className="position-absolute tech z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/tech.png"
                    alt="one"
                  />
                </div>
                <div className="firebase position-absolute z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/firebase.png"
                    alt="one"
                  />
                </div>
                <Image
                  className="img_two br-8 team_img"
                  src="/assets/images/creativeTeam/two.png"
                  alt="two"
                  height={387}
                  width={576}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center justify-content-xl-between section_4 mb-5 mb-xl-0">
            <div className="col-sm-10 col-lg-9 col-xl-6 mt-5 mt-xl-0 order-2 order-xl-0">
              <Card2 />
            </div>
            <div className="col-sm-10 col-lg-9 col-xl-6 d-flex d-xl-none flex-column justify-content-center">
              <div className="team_img_parent_4 position-relative zoom_img_hover">
                <div className="icon_container_small w-100 h-100 position-absolute top-0 start-0">
                  <div className="icon1">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/icon1.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon2">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/react.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon3">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/node.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon4">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/next.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon5">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/angular.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon6">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/aws.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon7">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/bootstrap.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon8">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/gsap.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon9">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/figma.png"
                      alt="one"
                    />
                  </div>
                </div>
                <div className="position-absolute aws z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/aws.png"
                    alt="one"
                  />
                </div>
                <div className="position-absolute figma z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/figma.png"
                    alt="one"
                  />
                </div>
                <div className="position-absolute node-js z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/node.png"
                    alt="one"
                  />
                </div>
                <div className="position-absolute react z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/react.png"
                    alt="one"
                  />
                </div>
                <Image
                  className="img_three br-8 team_img"
                  src="/assets/images/creativeTeam/three.png"
                  alt="three"
                  height={387}
                  width={576}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center justify-content-xl-between section_5 mb-5 mb-xl-0">
            <div className="col-sm-10 col-lg-9 col-xl-5 mt-5 mt-xl-0 order-2 order-xl-0">
              <SuccessFullProjects />
            </div>
            <div className="col-sm-10 col-lg-9 col-xl-6 d-flex d-xl-none flex-column justify-content-center">
              <div className="team_img_parent_5 zoom_img_hover position-relative">
                <div className="icon_container_small w-100 h-100 position-absolute top-0 start-0">
                  <div className="icon1">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/icon1.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon2">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/react.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon3">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/node.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon4">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/next.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon5">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/angular.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon6">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/aws.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon7">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/bootstrap.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon8">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/gsap.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon9">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/figma.png"
                      alt="one"
                    />
                  </div>
                </div>
                <div className="position-absolute figma z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/figma.png"
                    alt="one"
                  />
                </div>
                <div className="position-absolute wordpress z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/wordpress.png"
                    alt="one"
                  />
                </div>
                <Image
                  className="img_four br-8 team_img"
                  src="/assets/images/homepageAnimation/img5.png"
                  alt="four"
                  height={387}
                  width={576}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
          <div className="row justify-content-center justify-content-xl-between section_6 mb-5 mb-xl-0">
            <div className="col-sm-10 col-lg-9 col-xl-6 mt-5 mt-xl-0 order-2 order-xl-0">
              <Card3 />
            </div>
            <div className="col-sm-10 col-lg-9 col-xl-6 d-flex  d-xl-none flex-column justify-content-center">
              <div className="team_img_parent_6 zoom_img_hover position-relative">
                <div className="icon_container_small w-100 h-100 position-absolute top-0 start-0">
                  <div className="icon1">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/icon1.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon2">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/react.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon3">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/node.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon4">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/next.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon5">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/angular.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon6">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/aws.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon7">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/bootstrap.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon8">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/gsap.png"
                      alt="one"
                    />
                  </div>
                  <div className="icon9">
                    <Image
                      width={60}
                      height={60}
                      src="/assets/images/homepageAnimation/figma.png"
                      alt="one"
                    />
                  </div>
                </div>
                <div className="position-absolute man-icon z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/gsap.png"
                    alt="one"
                  />
                </div>
                <div className="position-absolute figma z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/figma.png"
                    alt="one"
                  />
                </div>
                <div className="position-absolute next-js z-5">
                  <Image
                    width={80}
                    height={80}
                    src="/assets/images/homepageAnimation/next.png"
                    alt="one"
                  />
                </div>
                <Image
                  className="img_five br-8 team_img"
                  src="/assets/images/creativeTeam/five.png"
                  alt="five"
                  height={387}
                  width={576}
                  layout="responsive"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeTeam;
