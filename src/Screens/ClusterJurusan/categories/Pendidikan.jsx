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
        <div className="tittleCluster">PENDIDIKAN</div>

        <div className="listContent">
          <div className="content" onClick={() => setOverview(true)}>
            <img src={Overview} alt="Overview" />
            <div className="tittleContent">Overview</div>
            <div className="expContent">
              <div className="summary">
                <div> PENDIDIKAN </div>
                <p>
                  Rumpun ilmu pendidikan adalah salah satu rumpun jurusan yang
                  mempelajari tentang proses belajar-mengajar, sistem
                  pendidikan, dan perkembangan anak. Mahasiswa yang memilih
                  jurusan ilmu pendidikan akan mempelajari tentang teori-teori
                  belajar, metode-metode pembelajaran, serta strategi-strategi
                  mengajar yang efektif.
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
                  Mahasiswa yang lulus dari rumpun ilmu pendidikan memiliki
                  prospek kerja yang luas di bidang pendidikan. Mereka dapat
                  menjadi guru di sekolah-sekolah atau madrasah, atau terlibat
                  dalam bidang perencanaan dan pengembangan sistem pendidikan.
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
                  Rumpun ilmu pendidikan adalah salah satu rumpun jurusan yang
                  mempelajari tentang proses belajar-mengajar, sistem
                  pendidikan, dan perkembangan anak. Serta juga tentang
                  teori-teori belajar, metode-metode pembelajaran, serta
                  strategi-strategi mengajar yang efektif.
                </p>
              </div>
            </div>
          </div>
          <Link to="/Pendidikan" className="linkScreen">
            <div className="content">
              <img src={Alumnis} alt="Overview" />
              <div className="tittleContent"> Alumni </div>
              <div className="expContent">
                <div className="summary">
                  <div> Alumni </div>
                  <p>
                    Alumni MAN Insan Cendekia Pekalongan sangat banyak yang
                    sudah menjadi bagian rumpun ini dan tersebar luas di
                    Indonesia. Kalian yang tertarik dengan rumpun Pendidikan
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
              Rumpun ilmu pendidikan adalah rumpun yang mempelajari tentang
              proses belajar dan proses pengajaran, serta tentang faktor-faktor
              yang mempengaruhi proses tersebut. Rumpun ini cocok bagi mereka
              yang ingin menjadi guru atau pengajar, atau yang ingin terlibat
              dalam bidang perencanaan dan pengembangan sistem pendidikan.
              <div>
                Mereka yang masuk ke rumpun ini harus memiliki kemampuan untuk
                menyampaikan ide-ide dengan jelas dan efektif, serta memiliki
                kemampuan untuk beradaptasi dengan kebutuhan-kebutuhan individu
                yang berbeda dalam proses pembelajaran. Rumpun ilmu pendidikan
                sangat penting karena proses pembelajaran merupakan salah satu
                faktor yang mempengaruhi keberhasilan seseorang dalam hidup.
              </div>
              Pendidikan yang baik dapat memberikan landasan yang kuat bagi
              seseorang untuk mengembangkan kemampuannya dan meraih kesuksesan
              dalam hidup. Selain itu, rumpun ilmu pendidikan juga membantu
              dalam mengembangkan sistem pendidikan yang efektif dan
              berkualitas, yang dapat menjadi fondasi bagi kemajuan suatu
              bangsa.
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
              Mahasiswa yang lulus dari rumpun ilmu pendidikan memiliki prospek
              kerja yang luas di bidang pendidikan.
              <ul>
                <li>
                  Mereka dapat menjadi guru di sekolah-sekolah atau madrasah,
                  atau terlibat dalam bidang perencanaan dan pengembangan sistem
                  pendidikan.
                </li>
                <li>
                  Selain itu, mahasiswa juga dapat bekerja di lembaga-lembaga
                  pendidikan seperti perpustakaan, laboratorium, atau
                  lembaga-lembaga yang bergerak dalam bidang konsultasi
                  pendidikan. Mahasiswa juga dapat membangun karirnya di dunia
                  akademis dengan mengajar di perguruan tinggi atau melakukan
                  penelitian dalam bidang pendidikan.
                </li>
                <li>
                  Selain itu, mahasiswa juga dapat terlibat dalam
                  kegiatan-kegiatan yang berkaitan dengan pendidikan non-formal,
                  seperti kegiatan-kegiatan yang diselenggarakan oleh
                  lembaga-lembaga yayasan atau kegiatan-kegiatan komunitas.
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
            <div className="textContent">
              Rumpun ilmu pendidikan adalah salah satu rumpun jurusan yang
              mempelajari tentang proses belajar-mengajar, sistem pendidikan,
              dan perkembangan anak. Mahasiswa yang memilih jurusan ilmu
              pendidikan akan mempelajari tentang teori-teori belajar,
              metode-metode pembelajaran, serta strategi-strategi mengajar yang
              efektif.
              <div>
                Selain itu, mahasiswa juga akan mempelajari tentang perkembangan
                anak sesuai dengan usia, serta cara-cara menangani
                masalah-masalah yang mungkin terjadi saat proses
                belajar-mengajar. Di rumpun ilmu pendidikan, mahasiswa juga akan
                mempelajari tentang sistem pendidikan di Indonesia, termasuk
                struktur, tujuan, dan program-program yang ada.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
