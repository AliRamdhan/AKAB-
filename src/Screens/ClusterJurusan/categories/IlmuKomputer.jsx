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
        <div className="tittleCluster">ILMU KOMPUTER</div>

        <div className="listContent">
          <div className="content" onClick={() => setOverview(true)}>
            <img src={Overview} alt="Overview" />
            <div className="tittleContent">Overview</div>
            <div className="expContent">
              <div className="summary">
                <div> ILMU KOMPUTER </div>
                <p>
                  Kamu yangg suka tekonologi cocok banget ama rumpun ini, karena
                  di rumpun IT ini, kalian bisa menggali secara mendalam
                  keahlian teknologi kalian di rumpun ini. And you know what the
                  best is?
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
                  Setelah lulus dari jurusan komputer, banyak banget peluang
                  karir yang bisa kamu pilih. Apalagi sekarang kan teknologi
                  semakin berkembang, lapangan pekerjaan di bidang IT juga
                  semakin luas.
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
                  Di rumpun ini kalian akan mempelajari segalah hal tentang yang
                  berkaitan dengan perkembangan tekonologi yang terjadi saat ini
                  mulai dari pengolahan data, bahasa pemprograman, blockchain,
                  dan banyak hal lainnya
                </p>
              </div>
            </div>
          </div>
          <Link to="/AlumniIlmuKomputer" className="linkScreen">
            <div className="content">
              <img src={Alumnis} alt="Overview" />
              <div className="tittleContent"> Alumni </div>
              <div className="expContent">
                <div className="summary">
                  <div> Alumni </div>
                  <p>
                    Alumni dari sekolah kita sudah banyak loh!! yang masuk ke
                    dalam rumpun ini, kalian yang tertarik dengan rumpun IT bisa
                    banget jadi keluarga alumni rumpun IT
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
              Bingung mau ambil jurusan apa? Kamu yang suka teknologi sama punya
              passion buat nyelesain masalah pasti cocok sama jurusan komputer
              yang satu ini. Gak cuma bisa belajar teknologi terbaru sama
              aplikasinya, tapi juga bisa ngembangin kemampuan pemecahan masalah
              sama berpikir kritis yang berguna banget. And you know what the
              best is? karir di bidang komputer bisa jadi penghasilan yang bagus
              loh! Setelah lulus dari jurusan komputer, banyak banget peluang
              karir yang bisa kamu pilih di berbagai industri.
              <div>
                
                Jadi kalo kamu suka teknologi sama pengen punya banyak pilihan
                karir yang punya potensi buat dapet duit banyak di masa depan,
                ambil jurusan komputer aja deh!
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
              Beberapa jalur karir umum untuk lulusan ilmu komputer meliputi:
              <ul>
                <li>
                  Sofware Engineer: Pengembang perangkat lunak merancang,
                  membangun, dan menjaga aplikasi perangkat lunak. Sofware
                  Engineer dapat mengerjakan berbagai proyek, termasuk membuat
                  aplikasi desktop, aplikasi mobile, dan aplikasi web.
                </li>
                <li>
                  Data Scientist: Menganalisis dan menafsirkan kumpulan data
                  besar untuk mengekstrak wawasan dan menginformasikan keputusan
                  bisnis. Mereka dapat bekerja di berbagai industri, termasuk
                  keuangan, perawatan kesehatan, dan ritel.
                </li>
                <li>
                  AI/Machine Learning engineer: Ini keren sih, kamu bisa bekerja
                  sebagai pembuat AI yang nanti bakal berguna di sebuah
                  perusahaan, atau kamu bisa bekerja di sebuah laboratorium
                  cerdas dan nanti kamu bisa meneliti dan membuat AI sendiri.
                </li>
                <li>
                  Web Developer: Ini yang paling sering sih, kamu bisa membuat
                  web dan kerja di perusahaan-perusahaan baik dalam negeri
                  maupun luar negeri loh. Bahkan, kamu bisa freelance menjadi
                  web developer saat kamu masih menempuh studi, Cuan Cuan Cuan!
                </li>
                <li>
                  Game Developer: Buat kamu yang suka main game, ini cocok sih.
                  Kamu bisa menjadi programmer yang menyusun logika dan
                  arsitektur game. Kalau kamu bisa desain dan punya suatu ide
                  game, kamu bahkan bisa membuat gamemu sendiri.
                </li>
                <li>
                  DevOps Engineer: DevOps bertanggung jawab atas pengembangan
                  dan pengoperasian sistem perangkat lunak. Mereka bekerja untuk
                  memastikan bahwa perangkat lunak dikembangkan dan digunakan
                  secara efisien dan efektif.
                </li>
                <li>
                  Tech Support: yaitu memberikan bantuan dan dukungan teknis
                  kepada pengguna sistem dan jaringan komputer. Bukan benerin
                  AC, Wi-Fi, atau TV .
                </li>
                <li>
                  Cyber Security: Analis keamanan informasi bertanggung jawab
                  untuk melindungi sistem komputer dan jaringan dari ancaman
                  dunia maya. Kamu bakalan merasakan bagaimana rasanya menjadi
                  hacker loh.
                </li>
                <li>
                  Manajer sistem komputer dan informasi: Manajer sistem komputer
                  dan informasi bertanggung jawab atas keseluruhan perencanaan
                  dan pengelolaan sistem komputer dan jaringan organisasi.
                </li>
                <li>
                  System administrator: System administrator bertanggung jawab
                  untuk menjaga dan memecahkan masalah sistem dan jaringan
                  komputer.
                </li>
                <li>
                  UI/UX designer: Nah, ini cocok buat kamu yang nanti masuk
                  jurusan komputer, tetapi ternyata zonk dan nggak suka ngoding.
                  Kamu bisa menjadi designer aplikasi mobile, website, atau
                  software. Ini lumayan dibutuhkan di banyak perusahaan. Bidang
                  ini terus berkembang, dan peluang kerja baru terus muncul
                  seiring kemajuan teknologi.
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
              Ilmu komputer adalah bidang yang mencakup studi tentang puter dan
              sistem komputasi. Ini melibatkan desain, pengembangan, dan
              analisis algoritma, serta studi tentang perangkat keras dan
              perangkat lunak komputer.
              <ul>
                
                Beberapa topik khusus yang biasa dipelajari dalam ilmu komputer
                antara lain:
                <li>
                  
                  Bahasa pemrograman: Computer Scientist belajar tentang
                  berbagai bahasa pemrograman, seperti Java, Python, dan C++,
                  dan cara menggunakannya untuk menulis program yang dapat
                  memecahkan masalah.
                </li>
                <li>
                  Struktur dan algoritme data: Computer Scientist mempelajari
                  tentang berbagai struktur data, seperti array, list, tree, dan
                  cara menggunakannya untuk menyimpan dan memanipulasi data
                  secara efisien. Mereka juga belajar tentang berbagai
                  algoritme, seperti algoritme pengurutan dan algoritme
                  pencarian, dan cara menggunakannya untuk memecahkan masalah.
                </li>
                <li>
                  Sistem dan arsitektur komputer: Computer Scientist mempelajari
                  tentang komponen perangkat keras dan perangklunak sistem
                  komputer, termasuk unit pemrosesan pusat (CPU), memori, dan
                  sistem operasi. Mereka juga belajar tentang jaringan komputer
                  dan bagaimana merancang dan mengimplementasikannya.
                </li>
                <li>
                  Teori komputasi: Computer Scientist mempelajari dasar
                  matematika komputasi, termasuk batasan dari apa yang dapat
                  dihitung dan kompleksitas algoritme.
                </li>
                <li>
                  
                  Rekayasa perangkat lunak: Computer Scientist belajar tentang
                  prinsip-prinsip desain dan pengembangan perangkat lunak,
                  termasuk bagaimana merancang dan mengimplementasikan sistem
                  perangkat lunak yang besar, program pengujian dan debug, dan
                  mengelola proyek perangkat lunak.
                </li>
                <li>
                  Interaksi manusia-komputer: Computer Scientist mempelajari
                  bagaimana orang berinteraksi dengan komputer dan bagaimana
                  merancang antarmuka pengguna yang mudah digunakan dan
                  dipahami.
                </li>
                <li>
                  Kecerdasan buatan(AI): Computer Scientist mempelajari
                  prinsip-prinsip kecerdasan buatan dan machine learning,
                  termasuk cara merancang algoritme yang dapat belajar dari data
                  dan membuat prediksi.
                </li>
                <li>
                  Sistem database: Computer Scientist belajar tentang sistem
                  manajemen database dan bagaimana merancang dan
                  mengimplementasikan database untuk menyimpan dan mengambil
                  data secara efisien.
                </li>
              </ul>
              Ini hanyalah contoh dari banyak topik yang tercakup dalam ilmu
              komputer.
              <div>
                
                Bidang ini terus berkembang dan bidang studi baru terus
                bermunculan, sehingga konten yang tepat dari program ilmu
                komputer dapat bervariasi tergantung pada institusi dan fokus
                khusus dari program tersebut.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
