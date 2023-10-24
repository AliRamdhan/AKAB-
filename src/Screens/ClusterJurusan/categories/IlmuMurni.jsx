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
        <div className="tittleCluster">ILMU MURNI</div>
        <div className="listContent">
          <div className="content" onClick={() => setOverview(true)}>
            <img src={Overview} alt="Overview" />
            <div className="tittleContent">Overview</div>
            <div className="expContent">
              <div className="summary">
                <div> ILMU MURNI </div>
                <p>
                  Rumpun ilmu murni merupakan bidang studi yang berkaitan dengan
                  pemahaman dan aplikasi dasar prinsip-prinsip alam semesta. Ini
                  sangat penting dipelajari untuk lebih memahami bagaimana
                  semesta bekerja, yang nantinya menjadi dasar teori dari
                  teknologi.
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
                  Prospek kerja untuk lulusan rumpun ilmu murni tergantung pada
                  bidang studi yang dipilih. Lulusan matematika, fisika, kimia,
                  biologi, dan bioteknologi dapat bekerja di berbagai macam
                  bidang, baik di sektor publik maupun swasta.
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
                  Mahasiswa yang memilih untuk masuk ke rumpun ilmu murni akan
                  mempelajari berbagai konsep dan prinsip dasar dari
                  masing-masing bidang studi tersebut, seperti Matematika,
                  fisika, kimia dan lain-lain.
                </p>
              </div>
            </div>
          </div>
          <Link to="/AlumniIlmuMurni" className="linkScreen">
            <div className="content">
              <img src={Alumnis} alt="Overview" />
              <div className="tittleContent"> Alumni </div>
              <div className="expContent">
                <div className="summary">
                  <div> Alumni </div>
                  <p>
                    Alumni MAN Insan Cendekia Pekalongan sangat banyak yang
                    sudah menjadi bagian rumpun ini dan tersebar luas di
                    Indonesia. Kalian yang tertarik dengan rumpun Ilmu Murni
                    bisa banget jadi keluarga alumni rumpun ini
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
                
                X
              </div>
            </div>
            <div className="textContent">
              Rumpun ilmu murni termasuk matematika, fisika, kimia, biologi,
              bioteknologi, dan lainnya merupakan bidang studi yang berkaitan
              dengan pemahaman dan aplikasi dasar prinsip-prinsip alam.
              Seseorang yang memiliki kemampuan logis, rasional, dan terbiasa
              dengan konsep-konsep abstrak akan lebih cocok untuk memasuki
              rumpun ini.
              <div>
                Selain itu, seseorang yang memiliki minat terhadap fenomena alam
                dan ingin menemukan jawaban atas pertanyaan-pertanyaan ilmiah
                juga dapat berkembang di rumpun ini. Rumpun ilmu murni sangat
                penting dalam kehidupan kita sehari-hari. Ilmu-ilmu murni
                memberikan dasar teoretis bagi teknologi dan aplikasi praktis
                yang kita gunakan sehari-hari, seperti telepon, komputer, dan
                obat-obatan.
              </div>
              Selain itu, ilmu-ilmu murni juga membantu kita memahami dan
              menjelaskan fenomena alam yang terjadi di sekitar kita, seperti
              gerak benda, reaksi kimia, dan reproduksi sel. Ilmu-ilmu murni
              juga memainkan peran penting dalam penemuan-penemuan ilmiah yang
              membawa kemajuan bagi umat manusia.
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
                
                X
              </div>
            </div>
            <div className="textContent">
              Prospek kerja untuk lulusan rumpun ilmu murni tergantung pada
              bidang studi yang dipilih. Lulusan matematika, fisika, kimia,
              biologi, dan bioteknologi dapat bekerja di berbagai macam bidang,
              baik di sektor publik maupun swasta.
              <div>
                Beberapa contoh pekerjaan yang mungkin tersedia bagi lulusan
                tersebut adalah:
              </div>
              <ul>
                
                <li>
                  Matematika: Analis data, pengembang sistem, peneliti, dosen,
                  dan lain-lain.
                </li>
                <li>
                  Fisika: Tenaga listrik, mekanik, peneliti, dosen, dan
                  lain-lain.
                </li>
                <li>
                  Kimia: Analis laboratorium, peneliti, pengembang produk,
                  dosen, dan lain-lain. Biologi: Analis laboratorium, peneliti,
                  konservator alam, dosen, dan lain-lain.
                </li>
                <li>
                  
                  Bioteknologi: Peneliti, analis laboratorium, pengembang
                  produk, dosen, dan lain-lain.
                </li>
              </ul>
              Selain itu, lulusan rumpun ilmu murni juga dapat memperluas
              wawasan dan kemampuannya dengan melanjutkan studi ke jenjang yang
              lebih tinggi, seperti magister atau doktor.
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
                
                X
              </div>
            </div>
            <div className="textContent">
              Mahasiswa yang memilih untuk masuk ke rumpun ilmu murni akan
              mempelajari berbagai konsep dan prinsip dasar dari masing-masing
              bidang studi tersebut.
              <div>
                
                Berikut ini adalah beberapa contoh materi yang mungkin
                dipelajari oleh mahasiswa rumpun ilmu murni:
              </div>
              <ul>
                
                <li>
                  Matematika: Aljabar, geometri, trigonometri, analisis
                  matematis, teori bilangan, dan lain-lain.
                </li>
                <li>
                  
                  Fisika: Dinamika, mekanika kuantum, termodinamika,
                  elektromagnetisme, optik, dan lain-lain.
                </li>
                <li>
                  {" "}
                  Kimia: Struktur atom, reaksi kimia, termokimia, kimia organik,
                  kimia anorganik, dan lain-lain.
                </li>
                <li>
                  {" "}
                  Biologi: Anatomi, fisiologi, evolusi, genetika, ekologi, dan
                  lain-lain.{" "}
                </li>
                <li>
                  Bioteknologi: Genetika molekuler, teknik kultur sel, teknik
                  pengenalan protein, teknik pembuatan obat, dan lain-lain.
                </li>
              </ul>
              Materi yang dipelajari oleh mahasiswa rumpun ilmu murni akan terus
              bertambah dan berkembang seiring dengan perkembangan ilmu
              pengetahuan dan teknologi.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
