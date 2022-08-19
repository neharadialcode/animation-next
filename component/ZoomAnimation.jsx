import React from "react";
import { useState } from "react";

const ZoomAnimation = () => {
  const [isActive1, setIsActive1] = useState(false);
  const [isActive2, setIsActive2] = useState(false);
  const [isActive3, setIsActive3] = useState(false);
  const [isActive4, setIsActive4] = useState(false);

  // console.log(isActive1, "isActive1");
  // console.log(isActive2, "isActive2");
  // console.log(isActive3, "isActive3");
  // console.log(isActive, "isActive");
  return (
    <div className="overflow-hidden">
      <button
        className="btn_one"
        onClick={() => {
          setIsActive1(!isActive1);
          setIsActive2(false);
          setIsActive3(false);
          setIsActive4(false);
        }}
      >
        one
      </button>
      <button
        className="btn_two"
        onClick={() => {
          setIsActive1(false);
          setIsActive2(true);
          setIsActive3(false);
          setIsActive4(false);
        }}
      >
        two
      </button>
      <button
        className="btn_three"
        onClick={() => {
          setIsActive1(false);
          setIsActive2(false);
          setIsActive3(true);
          setIsActive4(false);
        }}
      >
        Three
      </button>
      <button
        className="btn_four"
        onClick={() => {
          setIsActive1(false);
          setIsActive2(false);
          setIsActive3(false);
          setIsActive4(true);
        }}
      >
        four
      </button>
      <div className="position-relative">
        <div className="container ">
          <div className="row justify-content-center  section_1 vh-100">
            <div className="col-12 d-flex flex-column justify-content-center target py-4 ">
              <div className={`${isActive1 ? "text_1_visible" : "text_1"}`}>
                <div className="row">
                  <div className="col-4">
                    <h1 className="text-white">hello</h1>
                  </div>
                  <div className="col-8">
                    <h2 className="text-white">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus expedita perferendis ad eos et eveniet
                      provident voluptas, libero ullam quo nisi vitae fugit fuga
                      sit eum architecto iusto voluptatibus quisquam.
                    </h2>
                  </div>
                </div>
              </div>
              <div className={` ${isActive2 ? "text_2_visible" : "text_2"}`}>
                <div className="row">
                  <div className="col-4">
                    <h1 className="text-white">This is second</h1>
                  </div>
                  <div className="col-8">
                    <h2 className="text-white">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus expedita perferendis ad eos et eveniet
                      provident voluptas, libero ullam quo nisi vitae fugit fuga
                      sit eum architecto iusto voluptatibus quisquam.
                    </h2>
                  </div>
                </div>
              </div>
              <div className={` ${isActive3 ? "text_3_visible" : "text_3"}`}>
                <div className="row">
                  <div className="col-4">
                    <h1 className="text-white">This is third</h1>
                  </div>
                  <div className="col-8">
                    <h2 className="text-white">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus expedita perferendis ad eos et eveniet
                      provident voluptas, libero ullam quo nisi vitae fugit fuga
                      sit eum architecto iusto voluptatibus quisquam.
                    </h2>
                  </div>
                </div>
              </div>
              <div className={` ${isActive4 ? "text_4_visible" : "text_4"}`}>
                <div className="row">
                  <div className="col-4">
                    <h1 className="text-white">This is forth</h1>
                  </div>
                  <div className="col-8">
                    <h2 className="text-white">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Temporibus expedita perferendis ad eos et eveniet
                      provident voluptas, libero ullam quo nisi vitae fugit fuga
                      sit eum architecto iusto voluptatibus quisquam.
                    </h2>
                  </div>
                </div>
              </div>
              <div
                className={`image_conatinerr mx-auto transition ${
                  isActive1
                    ? "scale_img_one"
                    : isActive2
                    ? "scale_img_two"
                    : isActive3
                    ? "scale_img_three"
                    : isActive4
                    ? "scale_img_four"
                    : ""
                }`}
              >
                <img
                  className="w-100  positoin-absolute img_five"
                  src="/img/Blueprint.png"
                  alt="team"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZoomAnimation;
