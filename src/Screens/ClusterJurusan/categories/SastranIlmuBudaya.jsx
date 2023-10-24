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
        <div className="tittleCluster">SASTRA & ILMU BUDAYA</div>

        <div className="listContent">
          <div className="content" onClick={() => setOverview(true)}>
            <img src={Overview} alt="Overview" />
            <div className="tittleContent">Overview</div>
            <div className="expContent">
              <div className="summary">
                <div> SASTRA & ILMU BUDAYA </div>
                <p>
                  Sastra dan ilmu budaya seringkali disepelekan oleh masyarakat,
                  padahal studi ini merupakan salah satu yang paling penting.
                  Studi sastra dan ilmu budaya sangat penting karena membantu
                  kita untuk memahami dan menghargai kebudayaan orang lain.
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
                  Prospek kerja untuk lulusan rumpun sastra dan ilmu budaya
                  sangat terbuka luas dan dengan kemampuan dalam bidang bahasa,
                  sastra, dan budaya, lulusan rumpun sastra dan ilmu budaya
                  dapat masuk ke dalam perusahaan-perusahaan yang bergerak dalam
                  bidang bahasa ataupun cetak
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
                  Rumpun Sastra dan Ilmu Budaya akan mempelajari berbagai bidang
                  yang terkait dengan sastra dan budaya. Hal-hal yang akan
                  dipelajari antara lain seperti sejarah, filsafat, sastra,
                  antropologi, dan bahasa, serta yang berkaitan dengan istiadat,
                  tradisi, dan kebiasaan suatu masyarakat
                </p>
              </div>
            </div>
          </div>
          <Link to="/AlumniSastraBudaya" className="linkScreen">
            <div className="content">
              <img src={Alumnis} alt="Overview" />
              <div className="tittleContent"> Alumni </div>
              <div className="expContent">
                <div className="summary">
                  <div> Alumni </div>
                  <p>
                    Alumni MAN Insan Cendekia Pekalongan sangat banyak yang
                    sudah menjadi bagian rumpun ini dan tersebar luas di
                    Indonesia. Kalian yang tertarik dengan rumpun sastra dan
                    budaya ini bisa banget jadi keluarga alumni rumpun ini
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
              Sastra dan ilmu budaya seringkali disepelekan oleh masyarakat,
              padahal studi ini merupakan salah satu yang paling penting dalam
              kehidupan manusia. Hal ini mungkin terjadi karena sastra dan ilmu
              budaya dianggap tidak memberikan manfaat yang sesuai dengan
              harapan masyarakat, seperti tidak menghasilkan penghasilan yang
              tinggi atau tidak memiliki peluang kerja yang banyak.
              <div>
                {" "}
                Namun, sebenarnya studi sastra dan ilmu budaya sangat penting
                karena membantu kita untuk memahami dan menghargai kebudayaan
                orang lain, serta juga membantu kita untuk lebih memahami diri
                kita sendiri. Selain itu, sastra dan ilmu budaya juga merupakan
                salah satu bentuk ekspresi yang bisa kita gunakan untuk
                menyampaikan pendapat, pemikiran, dan perasaan kita kepada orang
                lain. Oleh karena itu, meskipun seringkali disepelekan, sastra
                dan ilmu budaya merupakan studi yang sangat penting dan
                bermanfaat bagi kehidupan manusia.
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
                {" "}
                X{" "}
              </div>
            </div>
            <div>
              Prospek kerja untuk lulusan rumpun sastra dan ilmu budaya sangat
              terbuka luas.{" "}
              <ul>
                <li>
                  Bekerja di laboratorium bahasa atau pusat pengembangan bahasa
                  di kampus, menjadi translator baik lisan maupun tulis, menjadi
                  dosen di kampus, guru, atau bekerja di kedutaan.
                </li>{" "}
                <li>
                  Mereka juga dapat bekerja di perusahaan-perusahaan yang
                  bergerak dalam bidang terjemahan, penyuntingan, atau
                  percetakan, atau di lembaga-lembaga yang bergerak dalam bidang
                  kajian bahasa, sastra, dan budaya.
                </li>{" "}
                <li>
                  Lulusan rumpun sastra dan ilmu budaya juga dapat membuka usaha
                  sendiri, misalnya dengan menjadi penyedia jasa terjemahan atau
                  mengelola perpustakaan atau toko buku, dan juga bekerja di
                  media massa sebagai jurnalis atau pemerhati budaya.
                </li>
              </ul>{" "}
              Dengan kemampuan dalam bidang bahasa, sastra, dan budaya, lulusan
              rumpun sastra dan ilmu budaya juga dapat menjadi konsultan bahasa
              atau budaya untuk perusahaan atau lembaga yang membutuhkan layanan
              tersebut.
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
              Rumpun Sastra dan Ilmu Budaya akan mempelajari berbagai bidang
              yang terkait dengan sastra dan budaya. Hal-hal yang akan
              dipelajari antara lain seperti sejarah, filsafat, sastra,
              antropologi, dan bahasa. Selain itu, mahasiswa sastra & budaya
              juga akan mempelajari tentang adat istiadat, tradisi, dan
              kebiasaan suatu masyarakat.
              <div>
                {" "}
                Juga akan mempelajari tentang bagaimana memahami sastra yang
                merupakan salah satu bentuk ekspresi kebudayaan suatu
                masyarakat. Selain itu, mahasiswa juga akan memiliki kesempatan
                untuk belajar bahasa asing di lab bahasa yang tersedia di
                fakultas, bahkan tidak jarang juga ada kelas yang diajar oleh
                orang asing asli.
              </div>{" "}
              Dengan demikian, mahasiswa jurusan Sastra dan Ilmu Budaya akan
              memperoleh wawasan yang luas tentang sastra, budaya, dan bahasa,
              yang tentunya akan sangat bermanfaat bagi masa depan
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
