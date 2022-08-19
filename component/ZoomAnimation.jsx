import React from "react";
import { useState } from "react";

const ZoomAnimation = () => {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  return (
    <div className="overflow-hidden">
      <button
        className="btn_one"
        onClick={() => {
          setImg1(true);
          setImg2(false);
          setImg3(false);
        }}
      >
        one
      </button>
      <button
        className="btn_two"
        onClick={() => {
          setImg1(false);
          setImg2(true);
          setImg3(false);
        }}
      >
        two
      </button>
      <button
        className="btn_three"
        onClick={() => {
          setImg1(false);
          setImg2(false);
          setImg3(true);
        }}
      >
        Three
      </button>
      <div className="position-relative">
        <div className="container ">
          <div className="row justify-content-center  section_1 vh-100">
            <div className="col-12 d-flex flex-column justify-content-center target py-4 ">
              <div className={`${img1 ? "text_1_visible" : "text_1"}`}>
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
              <div className={` ${img2 ? "text_2_visible" : "text_2"}`}>
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
              <div className={` ${img3 ? "text_3_visible" : "text_3"}`}>
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
              <div
                className={`image_conatinerr mx-auto transition ${
                  img1
                    ? "scale_img_one"
                    : img2
                    ? "scale_img_two"
                    : img3
                    ? "scale_img_three"
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
