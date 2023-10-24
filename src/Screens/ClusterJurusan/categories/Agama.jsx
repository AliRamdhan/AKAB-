import React from "react";
import "./cluster.css";
import { useState } from "react";
import Overview from "../imageContentCluster/overview.png";
import Learn from "../imageContentCluster/learn.png";
import Prospect from "../imageContentCluster/prospect.png";
import Alumnis from "../imageContentCluster/alumni.png";
import { Link } from "react-router-dom";
import Header from "../../../homeComponent/header";
export default function Agama() {
  const [overview, setOverview] = useState(false);
  const [prospect, setProspect] = useState(false);
  const [deskripsi, setDeskripsi] = useState(false);
  return (
    <>
      <Header />
      <div className="pageCluster">
        <div className="tittleCluster">AGAMA </div>
        <div className="listContent">
          <div className="content" onClick={() => setOverview(true)}>
            <img src={Overview} alt="Overview" />
            <div className="tittleContent">Overview</div>
            <div className="expContent">
              <div className="summary">
                <div> AGAMA </div>
                <p>
                  Rumpun jurusan keagamaan Islam adalah pilihan yang tepat bagi
                  siswa yang ingin mempelajari agama Islam secara lebih dalam.
                  Jurusan ini mencakup berbagai materi tentang ajaran-ajaran
                  dasar agama, sejarah Islam, tafsir Al-Quran, dan hadis.
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
                  Mahasiswa yang lulus dari rumpun jurusan keagamaan Islam
                  memiliki prospek kerja yang cukup luas. Mereka dapat menjadi
                  guru agama di sekolah atau madrasah, ustad atau khatib di
                  masjid, pemimpin komunitas agama, atau bahkan menjadi da'i
                  atau pembicara agama.
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
                  Di rumpun jurusan keagamaan Islam, siswa akan mempelajari
                  berbagai aspek dari agama Islam, termasuk ajaran-ajaran dasar
                  tentang iman, ibadah, akhlak, dan sejarah Islam, serta tentang
                  alquran dan hadits
                </p>
              </div>
            </div>
          </div>
          <Link to="/AlumniAgama" className="linkScreen">
            <div className="content">
              <img src={Alumnis} alt="Overview" />
              <div className="tittleContent"> Alumni </div>
              <div className="expContent">
                <div className="summary">
                  <div> Alumni </div>
                  <p>
                    Alumni MAN Insan Cendekia Pekalongan sangat banyak yang
                    sudah menjadi bagian rumpun ini dan tersebar luas di
                    Indonesia. Kalian yang tertarik dengan rumpun agama ini bisa
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
              Rumpun jurusan keagamaan Islam adalah pilihan yang tepat bagi
              siswa yang ingin mempelajari agama Islam secara lebih dalam.
              Jurusan ini mencakup berbagai materi tentang ajaran-ajaran dasar
              agama, sejarah Islam, tafsir Al-Quran, dan hadis. Selain itu,
              jurusan ini juga mempelajari bahasa Arab sebagai bahasa asli
              Al-Quran dan hadis.
              <div>
                {" "}
                Mahasiswa yang memilih jurusan keagamaan Islam akan memperoleh
                pengetahuan yang luas tentang agama Islam dan bisa menjadi guru
                agama atau tenaga kependidikan di sekolah-sekolah Islam atau
                organisasi-organisasi keagamaan lainnya. Jurusan keagamaan Islam
                sangat penting bagi perkembangan agama Islam di Indonesia.
              </div>{" "}
              Dengan mempelajari agama secara mendalam, mahasiswa akan memahami
              ajaran-ajaran agama dengan lebih baik dan bisa menjadi pemimpin
              agama yang bisa memberikan contoh dan memberikan arahan kepada
              masyarakat. Selain itu, jurusan ini juga bisa membantu
              meningkatkan keimanan dan ketaqwaan siswa, sehingga bisa menjadi
              pribadi yang lebih baik
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
              Mahasiswa yang lulus dari rumpun jurusan keagamaan Islam memiliki
              prospek kerja yang cukup luas.
              <ul>
                <li>
                  Mereka dapat menjadi guru agama di sekolah atau madrasah,
                  ustad atau khatib di masjid, pemimpin komunitas agama, atau
                  bahkan menjadi da'i atau pembicara agama.
                </li>
                <li>
                  Selain itu, mahasiswa yang memiliki kemampuan bahasa Arab yang
                  baik juga dapat bekerja di lembaga-lembaga yang bergerak dalam
                  bidang keagamaan, seperti lembaga-lembaga pendidikan Islam,
                  perusahaan-perusahaan yang bergerak dalam bidang publishing
                  atau media, atau lembaga-lembaga yang bergerak dalam bidang
                  kemanusiaan seperti yayasan-yayasan sosial.
                </li>
                <li>
                  {" "}
                  Mahasiswa juga dapat membangun karirnya di dunia akademis
                  dengan mengajar di perguruan tinggi atau melakukan penelitian
                  dalam bidang keagamaan Islam.
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
              Di rumpun jurusan keagamaan Islam, siswa akan mempelajari berbagai
              aspek dari agama Islam, termasuk ajaran-ajaran dasar tentang iman,
              ibadah, akhlak, dan sejarah Islam. Mereka juga akan belajar
              tentang teks-teks suci dalam Islam, seperti Al-Quran dan Hadits,
              serta mengenai tafsir dan tata bahasa Arab.
              <div>
                {" "}
                Selain itu, siswa akan mempelajari tentang perkembangan dan
                sejarah peradaban Islam, termasuk tokoh-tokoh penting dalam
                sejarah Islam dan perkembangan sistem pemerintahan dalam
                masyarakat Muslim.
              </div>{" "}
              Di samping itu, siswa juga akan belajar tentang prinsip-prinsip
              dasar dakwah dan bagaimana mengaplikasikannya dalam kehidupan
              sehari-hari.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
