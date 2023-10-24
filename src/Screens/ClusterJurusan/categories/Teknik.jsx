import React from "react";
import "./cluster.css";
import { useState } from "react";
import Overview from "../imageContentCluster/overview.png";
import Learn from "../imageContentCluster/learn.png";
import Prospect from "../imageContentCluster/prospect.png";
import Alumnis from "../imageContentCluster/alumni.png";
import { Link } from "react-router-dom";
import Header from "../../../homeComponent/header";
export default function IlmuAlam() {
  const [overview, setOverview] = useState(false);
  const [prospect, setProspect] = useState(false);
  const [deskripsi, setDeskripsi] = useState(false);
  return (
    <>
      <Header />

      <div className="pageCluster">
        <div className="tittleCluster">TEKNIK</div>

        <div className="listContent">
          <div className="content" onClick={() => setOverview(true)}>
            <img src={Overview} alt="Overview" />
            <div className="tittleContent">Overview</div>
            <div className="expContent">
              <div className="summary">
                <div> TEKNIK </div>
                <p>
                  Rumpun teknik cocok bagi orang yang memiliki minat dan
                  kemampuan dalam bidang teknik, seperti mekanik, elektronik,
                  atau industri. Rumpun teknik sangat penting karena hasil-hasil
                  dari penelitian yang dilakukan di dalamnya memiliki implikasi
                  yang luas bagi kemajuan teknologi dan ilmu pengetahuan.
                </p>
              </div>
            </div>
          </div>
          <div className="content" onClick={() => setProspect(true)}>
            <img src={Prospect} alt="Overview" />
            <div className="tittleContent"> Career Prospect </div>
            <div className="expContent">
              <div className="summary">
                <div> Career </div>
                <p>
                  Mahasiswa yang lulus dari rumpun teknik memiliki prospek kerja
                  yang luas di bidang teknik. Mereka dapat bekerja di
                  perusahaan-perusahaan yang bergerak dalam bidang teknik,
                  seperti perusahaan-perusahaan elektronik, mekanik, atau
                  komputer.
                </p>
              </div>
            </div>
          </div>
          <div
            className="content"
            onClick={() => {
              setDeskripsi(true);
            }}
          >
            <img src={Learn} alt="Overview" />
            <div className="tittleContent"> What would you learn</div>
            <div className="expContent">
              <div className="summary">
                <div> Learn </div>
                <p>
                  Tiap-tiap jurusan di rumpun teknik akan mempelajari hal-hal
                  yang berbeda. Namun, secara umum mahasiswa rumpun teknik akan
                  mempelajari tentang prinsip-prinsip dasar ilmu dan teknologi,
                  serta tentang cara penerapannya
                </p>
              </div>
            </div>
          </div>
          <Link to="/AlumniTeknik" className="linkScreen">
            <div className="content">
              <img src={Alumnis} alt="Overview" />
              <div className="tittleContent"> Alumni </div>
              <div className="expContent">
                <div className="summary">
                  <div> Alumni </div>
                  <p>
                    Alumni MAN Insan Cendekia Pekalongan sangat banyak yang
                    sudah menjadi bagian rumpun ini dan tersebar luas di
                    Indonesia. Kalian yang tertarik dengan rumpun teknik bisa
                    banget jadi keluarga alumni rumpun ini
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div
          className={overview ? "overviewContent active" : "overviewContent"}
        >
          <div className="contentActive">
            <div className="cancel">
              <div
                className="x"
                onClick={() => {
                  setOverview(false);
                }}
              >
                {" "}
                X{" "}
              </div>
            </div>
            <div className="textContent">
              Rumpun ini cocok bagi mereka yang memiliki minat dan kemampuan
              dalam bidang teknik, seperti mekanik, elektronik, atau perangkat
              komputer.
              <div>
                {" "}
                Mereka yang masuk ke rumpun ini harus memiliki kemampuan untuk
                memecahkan masalah secara logis dan sistematis, serta memiliki
                kemampuan yang baik dalam bidang matematika dan fisika. Rumpun
                teknik sangat penting karena hasil-hasil dari penelitian yang
                dilakukan di dalamnya memiliki implikasi yang luas bagi kemajuan
                teknologi dan ilmu pengetahuan.
              </div>{" "}
              Penemuan-penemuan dalam bidang teknik telah membantu dalam
              pengembangan teknologi, seperti teknologi komunikasi,
              transportasi, dan industri. Penemuan-penemuan tersebut juga telah
              memberikan pemahaman yang lebih mendalam tentang cara kerja
              sistem-sistem teknik, yang pada akhirnya dapat membantu kita dalam
              menjalani kehidupan sehari-hari.
            </div>
          </div>
        </div>
        <div
          className={prospect ? "prospectContent active" : "prospectContent"}
        >
          <div className="contentActive">
            <div className="cancel">
              <div
                className="x"
                onClick={() => {
                  setProspect(false);
                }}
              >
                {" "}
                X{" "}
              </div>
            </div>
            <div className="textContent">
              Mahasiswa yang lulus dari rumpun teknik memiliki prospek kerja
              yang luas di bidang teknik.
              <ul>
                <li>
                  Mereka dapat bekerja di perusahaan-perusahaan yang bergerak
                  dalam bidang teknik, seperti perusahaan-perusahaan elektronik,
                  mekanik, atau komputer.
                </li>
                <li>
                  {" "}
                  Selain itu, mahasiswa juga dapat bekerja di industri-industri
                  yang membutuhkan spesialis dalam bidang teknik, seperti
                  industri otomotif, listrik, atau telekomunikasi.
                </li>
                <li>
                  Mahasiswa juga dapat terlibat dalam kegiatan-kegiatan riset
                  dan pengembangan teknologi, baik di perusahaan-perusahaan atau
                  di lembaga-lembaga penelitian.
                </li>
                <li>
                  Selain itu, mahasiswa juga dapat membangun karirnya di dunia
                  akademis dengan mengajar di perguruan tinggi atau melakukan
                  penelitian dalam bidang teknik.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={deskripsi ? "deskripsiContent active" : "deskripsiContent"}
        >
          <div className="contentActive">
            <div className="cancel">
              <div
                className="x"
                onClick={() => {
                  setDeskripsi(false);
                }}
              >
                {" "}
                X{" "}
              </div>
            </div>
            <div className="textContent">
              Tiap-tiap jurusan di rumpun teknik akan mempelajari hal-hal yang
              berbeda. Namun, secara umum mahasiswa rumpun teknik akan
              mempelajari tentang prinsip-prinsip dasar ilmu dan teknologi,
              serta tentang cara penerapannya dalam pemecahan masalah-masalah
              praktis. Mereka akan mempelajari tentang sifat-sifat dasar dari
              bahan-bahan dan material, serta tentang cara kerja sistem-sistem
              mekanik, elektronik, dan komputer.{" "}
              <div>
                Di samping itu, mereka juga akan mempelajari tentang
                teknologi-teknologi terbaru yang sedang berkembang, serta
                tentang cara mengaplikasikannya dalam bidang-bidang yang
                berbeda. Ohya, ada juga mata kuliah wajib di semua jurusan
                rumpun teknik, seperti matematika teknik, kalkulus, aljabar, dan
                matematika dasar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
