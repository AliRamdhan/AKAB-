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
        <div className="tittleCluster"> EKONOMI & BISNIS </div>

        <div className="listContent">
          <div className="content" onClick={() => setOverview(true)}>
            <img src={Overview} alt="Overview" />
            <div className="tittleContent">Overview</div>
            <div className="expContent">
              <div className="summary">
                <div> EKONOMI & BISNIS </div>
                <p>
                  Rumpun ekonomi & bisnis mempelajari cara mengatur dan
                  mengelola resource yang langka (Scarce) untuk memenuhi needs
                  and wants manusia. FEB merupakan cabang sosial humaniora
                  dengan penggunaan analisis kuantitatif yang tinggi
                  dibandingkan fakultas soshum lainnya.
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
                  Ada banyak prospek kerja yang tersedia bagi orang yang
                  memiliki latar belakang atau keahlian di rumpun ekonomi &
                  bisnis.Misalnya Ekonom Bank Indonesia, Asuransi-Perbankan,
                  Industri swasta, Start-Up, dan lainnya
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
                  Rumpun ekonomi & bisnis adalah bidang yang mempelajari
                  bagaimana individu, kelompok, dan organisasi mengambil
                  keputusan ekonomi dan bagaimana mereka berinteraksi dalam
                  pasar.
                </p>
              </div>
            </div>
          </div>
          <Link to="/AlumniEkonomiBisnis" className="linkScreen">
            <div className="content">
              <img src={Alumnis} alt="Overview" />
              <div className="tittleContent"> Alumni </div>
              <div className="expContent">
                <div className="summary">
                  <div> Alumni </div>
                  <p>
                    Alumni MAN Insan Cendekia Pekalongan sangat banyak yang
                    sudah menjadi bagian rumpun ini dan tersebar luas di
                    Indonesia. Kalian yang tertarik dengan rumpun Ekonomi &
                    Bisnis bisa banget jadi keluarga alumni rumpun ini
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
              Rumpun ekonomi & bisnis merupakan bidang yang mempelajari cara
              mengatur dan mengelola resource yang langka (Scarce) untuk
              memenuhi kebutuhan dan keinginan manusia. Bidang-bidang Fakultas
              Ekonomi dan Bisnis seperti ekonomi, akuntansi, manajemen, hingga
              ekonomi syariah. Orang-orang yang cocok untuk masuk di dalam
              rumpun ini adalah individu-individu yang memiliki minat dan
              passion terhadap penyelesaian masalah pengambilan keputusan yang
              berdasarkan analisis kuantitatif.
              <div>
                
                Jurusan ini juga dapat membantu individu memahami isu-isu
                ekonomi yang terkait dengan masyarakat dan pemerintahan, serta
                membantu mengembangkan keterampilan yang dibutuhkan untuk
                bekerja di bidang keuangan dan bisnis.
              </div>
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
              Ada banyak prospek kerja yang tersedia bagi orang yang memiliki
              latar belakang atau keahlian di rumpun ekonomi & bisnis.
              <div>Berikut ini adalah beberapa contoh:</div>
              <ul>
                
                <li>
                  Ekonom: Bank Indonesia, Asuransi-Perbankan, Industri swasta,
                  Start-Up, atau di Kementerian.
                </li>
                <li>
                  
                  Analis keuangan: Perusahaan investasi dan bursa efek, bank,
                  atau di perusahaan swasta.
                </li>
                <li>
                  
                  Manajer: Dapat bekerja di berbagai jenis perusahaan,
                  tergantung pada bidang yang dipilih.
                </li>
                <li>
                  Akuntan: Dapat bekerja di perusahaan swasta atau di kantor
                  akuntan sendiri hingga kantor pajak.
                </li>
                <li>
                  
                  Bisnis internasional: Dapat bekerja di perusahaan
                  multinasional atau di konsultan bisnis internasional.
                </li>
                <li>
                  
                  Ekonomi Syariah: Lembaga Amal dan Wakaf, Industri halal,
                  Perbankan Syariah hingga pemerintahan.
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
                
                X
              </div>
            </div>
            <div>
              Rumpun ekonomi & bisnis adalah bidang yang mempelajari bagaimana
              individu, kelompok, dan organisasi mengambil keputusan ekonomi dan
              bagaimana mereka berinteraksi dalam pasar.
              <div>
                
                Di bawah ini adalah beberapa topik yang biasanya dipelajari
                dalam rumpun ekonomi & bisnis:
              </div>
              <ul>
                <li>
                  
                  Mikroekonomi: Mikroekonomi adalah cabang ekonomi yang
                  mempelajari bagaimana individu dan kelompok mengambil
                  keputusan ekonomi dan bagaimana mereka berinteraksi dalam
                  pasar. Topik-topik yang dibahas dalam mikroekonomi termasuk
                  keputusan konsumen dan produsen, struktur pasar, dan interaksi
                  antar pasar.
                </li>
                <li>
                  
                  Makroekonomi: Makroekonomi adalah cabang ekonomi yang
                  mempelajari bagaimana ekonomi secara keseluruhan berfungsi,
                  termasuk pertumbuhan ekonomi, inflasi, dan tingkat
                  pengangguran.
                </li>
                <li>
                  
                  Ekonometrika: Ekonometrika adalah cabang ekonomi yang
                  menggunakan metode matematika dan statistik untuk memahami
                  fenomena ekonomi. Ekonometrika sering disebut sebagai
                  pnedahulu dari data science.
                </li>
                <li>
                  Manajemen: Manajemen adalah bidang yang mempelajari bagaimana
                  individu atau kelompok dapat mengelola sumber daya untuk
                  mencapai tujuan organisasi. Topik-topik yang dibahas dalam
                  manajemen termasuk perencanaan, pengorganisasian, pengarahan,
                  dan pengendalian.
                </li>
                <li>
                  
                  Akuntansi: Akuntansi adalah bidang yang mempelajari bagaimana
                  mencatat, mengolah, dan menyajikan informasi keuangan dari
                  suatu organisasi.
                </li>
                <li>
                  
                  Bisnis internasional: Bisnis internasional adalah bidang yang
                  mempelajari bagaimana perusahaan bersaing di pasar global dan
                  bagaimana faktor-faktor seperti perbedaan ekonomi, politik,
                  dan budaya mempengaruhi kegiatan bisnis.
                </li>
                Ekonomi Syariah: Mempelajari perekonomian dan dunia bisnis
                berdasarkan aspek maslahah (kesejahteraan bersama), tentunya
                agar sesuai dengan syariat agama Islam.
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
