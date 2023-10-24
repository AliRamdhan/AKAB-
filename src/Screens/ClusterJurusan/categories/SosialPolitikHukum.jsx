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
        <div className="tittleCluster">SOSIAL & POLITIK & HUKUM</div>

        <div className="listContent">
          <div className="content" onClick={() => setOverview(true)}>
            <img src={Overview} alt="Overview" />
            <div className="tittleContent">Overview</div>
            <div className="expContent">
              <div className="summary">
                <div> SOSIAL & POLITIK & HUKUM </div>
                <p>
                  Rumpun ini merupakan bagian penting dari kehidupan masyarakat.
                  Kamu cocok di rumpun ini jika kamu memiliki kemampuan untuk
                  berpikir kritis dan menganalisis masalah secara mendalam.
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
                  memiliki latar belakang atau keahlian di rumpun sosial,
                  politik, dan hukum. Rumpun sosial akan cenderung dengan
                  kehidupan sosial,rumpun hukum akan cenderung berhubungan
                  dengan suatu masalah, rumpun politik akan cenderung
                  berhubungan dengan dunia politik
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
                  Rumpun sosial, politik, dan hukum merupakan tiga bidang yang
                  berbeda.Rumpun sosial akan lebih mempelajari tentang kehidupan
                  sosial, rumpun politk tentang dunia politik, rumpun hukum
                  tentang masalah hukum, namun saling terkait.
                </p>
              </div>
            </div>
          </div>
          <Link to="/AlumniSosialPolitikHukum" className="linkScreen">
            <div className="content">
              <img src={Alumnis} alt="Overview" />
              <div className="tittleContent"> Alumni </div>
              <div className="expContent">
                <div className="summary">
                  <div> Alumni </div>
                  <p>
                    Alumni MAN Insan Cendekia Pekalongan sangat banyak yang
                    sudah menjadi bagian rumpun ini dan tersebar luas di
                    Indonesia. Kalian yang tertarik dengan rumpun Sosial Politik
                    dan Hukum bisa banget jadi keluarga alumni rumpun ini
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
              Rumpun sosial, politik, dan hukum merupakan bagian penting dari
              kehidupan masyarakat. Ini termasuk bidang-bidang seperti sosial,
              politik, dan hukum yang menyangkut hak asasi manusia,
              pemerintahan, keadilan, dan kemajuan sosial.
              <div>
                
                Orang-orang yang cocok untuk masuk di dalam rumpun ini adalah
                individu-individu yang memiliki minat dan passion terhadap
                bidang-bidang tersebut, serta memiliki kemampuan untuk berpikir
                kritis dan menganalisis masalah secara objektif dan mendalam.
              </div>
              Rumpun ini sangat penting dalam kehidupan sehari-hari, khususnya
              dalam kehidupan sosial dan bernegara, karena membantu menentukan
              kebijakan dan peraturan yang akan mempengaruhi masyarakat secara
              luas. Selain itu, rumpun ini juga dapat membantu individu
              mengembangkan keterampilan yang dibutuhkan untuk menjadi pemimpin
              yang efektif dan memahami isu-isu yang terkait dengan masyarakat
              dan pemerintahan.
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
              latar belakang atau keahlian di rumpun sosial, politik, dan hukum.
              <div>
                Berikut ini adalah beberapa contoh dari prospek kerja:
              </div>
              <ul>
                <li>
                  Rumpun sosial: Konsultan sosial: Seorang konsultan sosial
                  bertugas membantu individu, kelompok, atau organisasi dengan
                  masalah sosial, seperti kemiskinan, diskriminasi, atau masalah
                  keluarga. Mereka juga dapat membantu organisasi dengan membuat
                  program-program sosial yang efektif.
                </li>
                <li>
                  
                  Ahli kebijakan sosial: Seorang ahli kebijakan sosial bertugas
                  membantu pemerintah atau organisasi swasta dalam membuat
                  kebijakan sosial yang efektif. Mereka menganalisis data sosial
                  dan memberikan saran tentang bagaimana kebijakan tersebut
                  dapat membantu masyarakat.
                </li>
                <li>
                  
                  Peneliti sosial: Seorang peneliti sosial bertugas mengumpulkan
                  dan menganalisis data sosial untuk memahami pola-pola sosial
                  dan perubahan sosial. Mereka dapat bekerja di universitas,
                  lembaga penelitian, atau organisasi swasta. Pengajar sosial:
                  Seorang pengajar sosial bertugas mengajar tentang topik-topik
                  sosial, seperti kelompok sosial, struktur sosial, dan
                  perubahan sosial, kepada mahasiswa di sekolah atau
                  universitas.
                </li>
                <li>
                  Rumpun politik: Staff politik: Seorang staff politik bekerja
                  di sebuah kantor politik, baik di pemerintahan maupun di
                  partai politik, dan bertugas membantu dengan tugas-tugas
                  administratif dan kebijakan.
                </li>
                <li>
                  
                  Analis politik: Seorang analis politik bertugas menganalisis
                  kebijakan politik dan sistem politik, serta memberikan saran
                  tentang bagaimana kebijakan tersebut dapat diperbaiki. Mereka
                  dapat bekerja di universitas, lembaga penelitian, atau di
                  media.
                </li>
                <li>
                  
                  Pengajar politik: Seorang pengajar politik bertugas mengajar
                  tentang topik-topik politik, seperti sistem politik, partai
                  politik, dan pemerintahan, kepada mahasiswa di sekolah atau
                  universitas.
                </li>
                <li>
                  
                  Jurnalis politik: Seorang jurnalis politik bertugas menulis
                  tentang kebijakan politik dan peristiwa politik untuk media
                  massa, seperti surat kabar atau website berita.
                </li>
                <li>
                  
                  Rumpun hukum: Advokat: Seorang advokat bertugas membela klien
                  mereka di pengadilan dengan menggunakan hukum yang berlaku.
                  Mereka dapat bekerja di kantor hukum sendiri atau bergabung
                  dengan firma
                </li>
                <li>
                  
                  Hakim: Seorang hakim bertugas memutuskan kasus-kasus yang
                  masuk ke pengadilan dengan menggunakan hukum yang berlaku.
                  Mereka dapat bekerja di pengadilan perdata, pengadilan pidana,
                  atau pengadilan tinggi.
                </li>
                <li>
                  
                  Jaksa: Seorang jaksa bertugas membawa kasus-kasus ke
                  pengadilan dan membela pemerintah dalam kasus-kasus pidana.
                  Mereka dapat bekerja di pengadilan negeri atau pengadilan
                  federal.
                </li>
                <li>
                  
                  Notaris: Seorang notaris bertugas mengeluarkan sertifikat yang
                  menjamin bahwa dokumen-dokumen, seperti akta jual beli atau
                  surat wasiat, adalah asli dan sah.
                </li>
                <li>
                  
                  Penasehat hukum: Seorang penasehat hukum bertugas memberikan
                  saran hukum kepada klien mereka, baik individu maupun
                  organisasi, dan membantu dengan masalah hukum yang dihadapi
                  oleh klien tersebut. Mereka dapat bekerja di kantor hukum
                  sendiri atau bergabung dengan firma hukum.
                </li>
              </ul>
              Selain itu, ada juga banyak pekerjaan yang tidak langsung terkait
              dengan salah satu bidang tersebut, tetapi masih membutuhkan
              pengetahuan dan keahlian di salah satu atau lebih bidang tersebut.
              Sebagai contoh, seorang ahli kebijakan publik mungkin membutuhkan
              pengetahuan tentang sosial, politik, dan hukum untuk dapat membuat
              kebijakan yang efektif.
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
              Rumpun sosial, politik, dan hukum merupakan tiga bidang yang
              berbeda, namun saling terkait.<div> Di bawah ini adalah singkatannya:</div><ul>
              <li>Rumpun sosial meliputi studi tentang bagaimana masyarakat
              berfungsi, bagaimana orang saling terhubung satu sama lain, dan
              bagaimana orang berkomunikasi. Ini termasuk studi tentang
              kelompok-kelompok sosial, struktur sosial, dan perubahan sosial.</li>
              <li>
              Rumpun politik meliputi studi tentang bagaimana kekuasaan
              diperoleh, dipertahankan, dan digunakan dalam masyarakat. Ini
              termasuk studi tentang sistem politik, partai politik, dan
              pemerintahan.</li><li> Rumpun hukum meliputi studi tentang bagaimana hukum
              dibuat, diterapkan, dan dipertahankan dalam masyarakat. Ini
              termasuk studi tentang hukum perdata, hukum pidana, dan hukum
              internasional.</li></ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
