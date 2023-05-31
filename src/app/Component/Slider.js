import Image from "next/image";
import React from "react";
import style from "../style/banner.module.css";
const Slider = () => {
  return (
    <>
      <div className={style.banner}>
        <div className="py-5">
          <div className={style.bannercontent}>
            <div>
              <div className="display-5 fw-bold">
                Guide your child to a better future
              </div>
            </div>
            <div>
              <p className="fw-bold fs-4">Find the best school</p>
            </div>
            <div>
              <input
                type="text"
                className={style.bannerinput}
                placeholder="Start typing city, zip, address, or landmark"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Slider;
