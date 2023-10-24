import React from "react";
import "../screenStyle.css";
import Header from "../../homeComponent/header";
import Footer from "../../homeComponent/footer";

import BPH1 from "./FotoCommitte/BPH/1.png";
import BPH2 from "./FotoCommitte/BPH/2.png";
import BPH3 from "./FotoCommitte/BPH/3.png";
import BPH4 from "./FotoCommitte/BPH/4.png";
import BPH5 from "./FotoCommitte/BPH/5.png";
import BPH6 from "./FotoCommitte/BPH/6.png";

import Humas1 from "./FotoCommitte/Humas/1.png";
import Humas2 from "./FotoCommitte/Humas/2.png";
import Humas3 from "./FotoCommitte/Humas/3.png";
import Humas4 from "./FotoCommitte/Humas/4.png";
import Humas5 from "./FotoCommitte/Humas/5.png";

import Opr1 from "./FotoCommitte/Operasional/1.png";
import Opr2 from "./FotoCommitte/Operasional/2.png";
import Opr3 from "./FotoCommitte/Operasional/3.png";
import Opr4 from "./FotoCommitte/Operasional/4.png";
import Opr5 from "./FotoCommitte/Operasional/5.png";

import Eo1 from "./FotoCommitte/Acara/1.png";
import Eo2 from "./FotoCommitte/Acara/2.png";
import Eo3 from "./FotoCommitte/Acara/3.png";
import Eo4 from "./FotoCommitte/Acara/4.png";
import Eo5 from "./FotoCommitte/Acara/5.png";

import CD1 from "./FotoCommitte/Dekdok/1.png";
import CD2 from "./FotoCommitte/Dekdok/2.png";
import CD3 from "./FotoCommitte/Dekdok/3.png";
import CD4 from "./FotoCommitte/Dekdok/4.png";
import CD5 from "./FotoCommitte/Dekdok/5.png";
import CD6 from "./FotoCommitte/Dekdok/6.png";
import CD7 from "./FotoCommitte/Dekdok/7.png";
import CD8 from "./FotoCommitte/Dekdok/8.png";
import CD9 from "./FotoCommitte/Dekdok/9.png";
import CD10 from "./FotoCommitte/Dekdok/10.png";
import CD11 from "./FotoCommitte/Dekdok/11.png";
import CD12 from "./FotoCommitte/Dekdok/12.png";

import WD1 from "./FotoCommitte/WebDeveloper/2.png";
import WD2 from "./FotoCommitte/WebDeveloper/3.png";

const dataBPH = [
  {
    foto: BPH1,
    ig: "https://www.instagram.com/akab.iaicp/",
    nama: "Rafly Wahyu Syahryan",
    member: "Leader ",
  },
  {
    foto: BPH2,
    nama: "Mikhail Arsyad Fadhila ",
    member: "Vice Leader   ",
  },
  {
    foto: BPH3,
    nama: " Baeeta Baiysa Bazlaa",
    member: "Secretary",
  },
  {
    foto: BPH4,
    nama: "Gita Safira",
    member: "Secretary",
  },
  {
    foto: BPH5,
    nama: "Hasna' Fathin Nafisah",
    member: "Treasure",
  },
  {
    foto: BPH6,
    nama: "Kamila Naura Faiza",
    member: "Treasure",
  },
];
const dataAcara = [
  {
    foto: Eo1,
    nama: " Luthfan Alghifari Rafi ",
    member: "Head of Event Organizer",
  },
  {
    foto: Eo2,
    nama: "Naila Aulia Arifahbillah ",
    member: "Event Organizer Member",
  },
  {
    foto: Eo3,
    nama: "Helmi Rafif Fauzan ",
    member: "Event Organizer Member",
  },
  {
    foto: Eo4,
    nama: "Mutia Linggarjati",
    member: "Event Organizer Member",
  },
  {
    foto: Eo5,
    nama: "Irdina Izzah Nabila",
    member: "Event Organizer Member",
  },
];
const dataHumas = [
  {
    foto: Humas1,
    nama: " Fathan Amanu Zimran ",
    member: "Head of Humas",
  },
  {
    foto: Humas2,
    nama: " Salsabila Rizka Tama  ",
    member: "Humas Member",
  },
  {
    foto: Humas3,
    nama: " M. Bintang Wahyu ",
    member: "Humas Member",
  },
  {
    foto: Humas4,
    nama: " Ghaza Rizal Hidayat ",
    member: "Humas Member",
  },
  {
    foto: Humas5,
    nama: " Aminah Farhanah",
    member: "Humas Member",
  },
];
const dataDesign = [
  {
    foto: CD1,
    nama: "M. Radja Abdiel Halim H",
    member: "Head of Creative",
  },
  {
    foto: CD2,
    nama: "M. Dhiyaul Muzzaki",
    member: "Head of Creative",
  },
  {
    foto: CD3,
    nama: "M. Ajisaka Arsyi Taj ",
    member: "Creative Member ",
  },
  {
    foto: CD4,
    nama: "Eka Putra Meravigliosi",
    member: "Creative Member",
  },
  {
    foto: CD5,
    nama: "Refah Hakam Muhammad ",
    member: "Creative Member",
  },
  {
    foto: CD6,
    nama: "M. Naufal Ramadhan",
    member: "Creative Member",
  },
  {
    foto: CD7,
    nama: "Zaki Yudhistira ",
    member: "Creative Member",
  },
  {
    foto: CD8,
    nama: "Raihan Omar",
    member: "Creative Member",
  },
  {
    foto: CD9,
    nama: "Athifatul Khusniyyati ",
    member: "Creative Member",
  },
  {
    foto: CD10,
    nama: "Amalia Izzatika ",
    member: "Creative Member ",
  },
  {
    foto: CD11,
    nama: "Rusydah Shafy Kultsum  ",
    member: "Creative Member",
  },
  {
    foto: CD12,
    nama: "Destiana Salsabila",
    member: "Creative Member",
  },
];
const dataOperasional = [
  {
    foto: Opr1,
    nama: "M. Dafa Wisnu Galih",
    member: "Head of Operational",
  },
  {
    foto: Opr2,
    nama: "Yanuar Alhisyami ",
    member: "Operational Member",
  },
  {
    foto: Opr3,
    nama: "M. Rizqi Pratama",
    member: "Operational Member",
  },
  {
    foto: Opr4,
    nama: "Farhan Ali Ramadhan ",
    member: "Operational Member",
  },
  {
    foto: Opr5,
    nama: "Faiz Shidqi Falih ",
    member: "Operational Member",
  },
];
const dataWebDeveloper = [
  {
    foto: Opr4,
    nama: "Farhan Ali Ramadhan",
    member: "Programmer",
  },
  {
    foto: WD1,
    nama: "Nailfaaz",
    member: "UI/UX Desaign",
  },
  {
    foto: WD2,
    nama: "Nafakhatul Fadliyah",
    member: "UI/UX Desaign",
  },
  {
    foto: Opr1,
    nama: "M. Dafa Wisnu Galih ",
    member: "UI/UX Desaign",
  },
];
export default function Committe() {
  return (
    <>
      <Header />
      <div className="appCommitte">
        <div className="tittlePageCommitte"> COMMITTE of AKAB 2023 </div>
        <div
          className="listCommitte"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="divisi" data-aos="fade-up" data-aos-duration="1000">
            <div className="tittleDivisi"> Daily Committe Management</div>
            <div className="listMember">
              {dataBPH.map((data, i) => (
                <div
                  className="member"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={data.foto} alt={data.nama} />
                  <div className="bio">
                    <div> {data.nama} </div>
                    <div> {data.member} </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="divisi" data-aos="fade-up" data-aos-duration="1000">
            <div className="tittleDivisi"> Event Organizer Division </div>
            <div className="listMember">
              {dataAcara.map((data, i) => (
                <div
                  className="member"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={data.foto} alt={data.nama} />
                  <div className="bio">
                    <div> {data.nama} </div>
                    <div> {data.member} </div>
                  </div>
                  {/* <div className="bio2">
                    <a href={data.ig} target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />{" "}
                    </a>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          <div className="divisi" data-aos="fade-up" data-aos-duration="1000">
            <div className="tittleDivisi"> Creative Division </div>
            <div className="listMember">
              {dataDesign.map((data, i) => (
                <div
                  className="member"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={data.foto} alt={data.nama} />
                  <div className="bio">
                    <div> {data.nama} </div>
                    <div> {data.member} </div>
                  </div>
                  {/* <div className="bio2">
                    <a href={data.ig} target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />{" "}
                    </a>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          <div className="divisi" data-aos="fade-up" data-aos-duration="1000">
            <div className="tittleDivisi"> Humas Division</div>
            <div className="listMember">
              {dataHumas.map((data, i) => (
                <div
                  className="member"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={data.foto} alt={data.nama} />
                  <div className="bio">
                    <div> {data.nama} </div>
                    <div> {data.member} </div>
                  </div>
                  {/* <div className="bio2">
                    <a href={data.ig} target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />{" "}
                    </a>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          <div className="divisi" data-aos="fade-up" data-aos-duration="1000">
            <div className="tittleDivisi"> Operational Division</div>
            <div className="listMember">
              {dataOperasional.map((data, i) => (
                <div
                  className="member"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={data.foto} alt={data.nama} />
                  <div className="bio">
                    <div> {data.nama} </div>
                    <div> {data.member} </div>
                  </div>
                  {/* <div className="bio2">
                    <a href={data.ig} target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />{" "}
                    </a>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
          <div className="divisi" data-aos="fade-up" data-aos-duration="1000">
            <div className="tittleDivisi"> Web Developer </div>
            <div className="listMember">
              {dataWebDeveloper.map((data, i) => (
                <div
                  className="member"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <img src={data.foto} alt={data.nama} />
                  <div className="bio">
                    <div> {data.nama} </div>
                    <div> {data.member} </div>
                  </div>
                  {/* <div className="bio2">
                    <a href={data.ig} target="_blank">
                      <FontAwesomeIcon icon={faInstagram} />{" "}
                    </a>
                  </div> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
