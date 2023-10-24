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
        <div className="tittleCluster">ILMU ALAM</div>
        <div className="listContent">
          <div className="content" onClick={() => setOverview(true)}>
            <img src={Overview} alt="Overview" />
            <div className="tittleContent">Overview</div>
            <div className="expContent">
              <div className="summary">
                <div> ILMU ALAM </div>
                <p>
                  Kamu yang suka alam dan ingin mempelajari lebih secara
                  mendalam,sangat cocok dengan rumpun ini, karena rumpun ilmu
                  alam merupakan kategori ilmu yang mencakup berbagai cabang
                  ilmu yang berkaitan erat dengan alam seperti Hutan, lahan
                  pertanian, dan maritim.
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
                  Prospek kerja dari rumpun ini sangat luas dan dapat mencari
                  pekerjaan di berbagai bidang. Lulusan rumpun ini dapat masuk
                  ke bagian dalam pengelolaan SDA tetapi juga tetap
                  memperhatikan keseimbangan alam-nya.
                </p>
              </div>
            </div>
          </div>
          <div className="content" onClick={() => { setDeskripsi(true); }} >
            <img src={Learn} alt="Overview" />
            <div className="tittleContent"> What would you learn</div>
            <div className="expContent">
              <div className="summary">
                <div> Learn </div>
                <p>
                  Disini kalian akan mempelajari lebih mendalam yang berkaitan
                  tentang alam dan cara pengelolaan alam yang baik sehingga
                  keseimbangan alam terjaga
                </p>
              </div>
            </div>
          </div>
          <Link to="/AlumniIlmuAlam" className="linkScreen">
            <div className="content">
              <img src={Alumnis} alt="Overview" />
              <div className="tittleContent"> Alumni </div>
              <div className="expContent">
                <div className="summary">
                  <div> Alumni </div>
                  <p>
                    Alumni dari MAN Insan Cendekia Pekalongan sudah banyak dan
                    tersebar yang masuk ke dalam rumpun ini, kalian yang
                    tertarik dengan rumpun Ilmu Alam bisa banget jadi keluarga
                    alumni rumpun Ilmu Alam
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
              <div className="x" onClick={() => { setOverview(false); }} >
                {" "}
                X{" "}
              </div>
            </div>
            <div>
              Rumpun ilmu alam merupakan kategori ilmu yang mencakup berbagai
              cabang ilmu yang berkaitan dengan fenomena alam.
              <div>
                Beberapa contoh cabang ilmu dalam rumpun ini adalah kehutanan,
                pertanian, oceanografi, dan geologi. Orang yang cocok masuk ke
                rumpun ilmu alam adalah mereka yang memiliki minat dan bakat
                dalam bidang-bidang terkait sains alam, serta memiliki rasa
                ingin tahu yang tinggi terhadap fenomena alam yang terjadi di
                sekitar kita.
              </div>
              Pentingnya rumpun ilmu alam terletak pada perannya dalam memahami
              dan mengelola sumberdaya alam yang ada di lingkungan kita.
              Misalnya, kehutanan membantu dalam mengelola hutan dan sumberdaya
              kayu secara lestari, sementara pertanian membantu dalam
              menghasilkan makanan dan bahan baku industri yang dibutuhkan
              manusia. Selain itu, cabang-cabang ilmu alam juga dapat membantu
              dalam penanganan masalah lingkungan, seperti perubahan iklim dan
              degradasi habitat.
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
            <div>
              Mahasiswa yang lulus dari rumpun ilmu alam dapat mencari pekerjaan
              di berbagai bidang, seperti:
              <ul>
                <li>
                  Riset: Mahasiswa yang lulus dari rumpun ilmu alam dapat
                  bekerja sebagai peneliti di berbagai institusi, seperti
                  universitas, laboratorium, atau lembaga penelitian pemerintah.
                </li>
                <li>
                  Industri: Mahasiswa yang lulus dari rumpun ilmu alam dapat
                  bekerja di industri yang berhubungan dengan ilmu alam, seperti
                  perusahaan farmasi, perusahaan kimia, atau perusahaan
                  pertambangan.
                </li>
                <li>
                  {" "}
                  Pendidikan: Mahasiswa yang lulus dari rumpun ilmu alam dapat
                  menjadi dosen di universitas atau sekolah menengah, atau
                  bahkan menjadi guru di sekolah dasar atau menengah.
                </li>
                <li>
                  Konsultasi: Mahasiswa yang lulus dari rumpun ilmu alam dapat
                  bekerja sebagai konsultan di berbagai bidang, seperti
                  konsultasi lingkungan, konsultasi teknologi, atau konsultasi
                  kesehatan.
                </li>
                <li>
                  Pemerintahan: Mahasiswa yang lulus dari rumpun ilmu alam dapat
                  bekerja di pemerintahan, baik di tingkat nasional maupun
                  daerah, terutama di bidang yang berhubungan dengan ilmu alam,
                  seperti lingkungan, kesehatan, atau pertanian.
                </li>
              </ul>
              Selain itu, ada juga beberapa pekerjaan yang mungkin tidak
              langsung berhubungan dengan ilmu alam, tapi bisa dipekerjakan oleh
              mahasiswa yang lulus dari rumpun ilmu alam, seperti bekerja di
              perusahaan konsultasi bisnis, agensi iklan, atau bahkan presiden
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
            <div>
              Setiap cabang ilmu memiliki kurikulum yang berbeda-beda,
              tergantung pada fokus studi yang diambil oleh mahasiswa. Namun,
              secara umum, mahasiswa rumpun ini akan mempelajari bagaimana cara
              pengolahan SDA secara maksimal, tetapi juga tetap memperhatikan
              keseimbangan lingkungan.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
