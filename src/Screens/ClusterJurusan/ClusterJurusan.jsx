import React from "react";
import { Link } from "react-router-dom";
import "../screenStyle.css";
import IlmuAlam from "./imageCluster/alam.png";
import EkonomiBisnis from "./imageCluster/bisnisekonomi.png";
import HukumSosialPolitik from "./imageCluster/hukumpolitiksosial.png";
import IlmuMurni from "./imageCluster/murni.png";
import Informatika from "./imageCluster/informatika.png";
import Keagamaan from "./imageCluster/keagamaan.png";
import Kedinasan from "./imageCluster/kedinasan.png";
import Kesehatan from "./imageCluster/kesehatan.png";
import Pendidikan from "./imageCluster/pendidikan.png";
import SastraBudaya from "./imageCluster/sastra.png";
import Teknik from "./imageCluster/teknikk.png";
import Header from "../../homeComponent/header";
import Footer from "../../homeComponent/footer";

const dataCluster = [
  {
    to: "/IlmuAlam",
    img: IlmuAlam,
    nama: " Ilmu Alam ",
  },
  {
    to: "/Kesehatan",
    img: Kesehatan,
    nama: " Kesehatan",
  },
  {
    to: "/SastraBudaya",
    img: SastraBudaya,
    nama: " Sastra & Ilmu Budaya ",
  },
  {
    to: "/Agama",
    img: Keagamaan,
    nama: "Keagamaan",
  },
  {
    to: "/Teknik",
    img: Teknik,
    nama: "Teknik",
  },
  {
    to: "/IlmuKomputer",
    img: Informatika,
    nama: "Informatika, Komputer & Media",
  },
  {
    to: "/IlmuMurni",
    img: IlmuMurni,
    nama: " Ilmu Murni",
  },
  {
    to: "/Pendidikan",
    img: Pendidikan,
    nama: "Pendidikan",
  },
  {
    to: "/EkonomiBisnis",
    img: EkonomiBisnis,
    nama: " Ekonomi & Bisnis",
  },
  {
    to: "/Kedinasan",
    img: Kedinasan,
    nama: " Kedinasan",
  },
  {
    to: "/SosialPolitikHukum",
    img: HukumSosialPolitik,
    nama: " Sosial, Politik, & Hukum",
  },
];
export default function ClusterJurusan() {
  return (
    <>
      <Header />

      <div className="appCluster">
        <div
          className="tittlePageCluster"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          Cluster Jurusan
        </div>
        <div className="listClusters">
          {dataCluster.map((data) => (
            <Link
              to={data.to}
              className="cluster"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={data.img} alt={data.nama} />
              <div className="clusterName">{data.nama}</div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
