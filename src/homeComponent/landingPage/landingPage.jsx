import React from "react";
import "../srtyleHomeComponent.css";
import Bubble from "./image/bubble.png";
import AKAB from "./image/AKAB.png";
import IAICP from "./image/IAICP.png";
export default function landingPage() {
  return (
    <>
      <div className="appLanding">
        <div className="subApp">
          <div className="landing">
            <div className="bubble">
              <img src={Bubble} alt="buble" />
            </div>
            <div className="subLanding">
              <div className="landing2">
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-easing="linear"
                >
                  AKAB 2023
                </div>
                <div
                  data-aos="fade-right"
                  data-aos-duration="2000"
                  data-aos-easing="linear"
                >
                  <div> Sailing for Change</div>
                  <div>to the harbor of dreams</div>
                </div>
              </div>
              <div
                className="logoLanding"
                data-aos="fade-left"
                data-aos-duration="2500"
                data-aos-easing="linear"
              >
                <img src={AKAB} alt="logo AKAB" />
              </div>
            </div>
          </div>
          <div className="present" data-aos="fade-up" data-aos-duration="1000">
            <div>IAICP</div>
            <div>
              <img src={IAICP} alt="logo IAICP" />
            </div>
          </div>
          <div
            className="timeLanding"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div> - 28 JAN 2023 - </div>
          </div>
        </div>
      </div>
    </>
  );
}
