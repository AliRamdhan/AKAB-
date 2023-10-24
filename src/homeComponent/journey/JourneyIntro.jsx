import React from "react";
import Job from "./image/job.png";
import GPA from "./image/gpa.png";
import Orgs from "./image/orgs.png";
import money from "./image/money.png";
import social from "./image/life.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import "../srtyleHomeComponent.css";
import { Link } from "react-router-dom";

const dataJourney = [
  {
    img: Job,
    tittle: "JOB",
  },
  {
    img: money,
    tittle: "MONEY MANAGEMENT",
  },
  {
    img: GPA,
    tittle: "GPA",
  },
  {
    img: Orgs,
    tittle: "ORGANISASI",
  },
  {
    img: social,
    tittle: "SOCIAL LIFE",
  },
];
export default function JourneyIntro() {
  return (
    <>
      <div className="appJourneyIntro">
        <div className="subAppJourneyIntro">
          <div
            className="subJourney"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div> Let's Make Your Journey </div>
            <>
              <div>
                Choose your journey in the university make mission to educate
                and inspire other people from yourself
              </div>
            </>
          </div>
          <div
            className="listJourney"
            data-aos="fade-up"
            data-aos-duration="2000"
          >
            <div className="listSubJourney">
              <Swiper
                modules={[EffectCoverflow]}
                slidesPerView={3}
                effect="coverflow"
                coverflowEffect={{
                  rotate: 0, //rotasi
                  stretch: -30, //jarak samping
                  depth: 150, //jarak depan belakang
                  modifier: 1,
                  slideShadows: true,
                }}
                className="myswiper"
              >
                {dataJourney.map((data) => (
                  <SwiperSlide className="swiper">
                    <div className="journey">
                      <div>
                        <img src={data.img} alt={data.tittle} />
                      </div>
                      <div className="swiperTitle"> {data.tittle}</div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
        <div className="seeMoreJourney">
          <div className="subSeeMore">
            <Link to="/Journey" className="seeMore">
              <div>See more</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
