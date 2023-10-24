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
        <div className="tittleCluster">KESEHATAN</div>

        <div className="listContent">
          <div className="content" onClick={() => setOverview(true)}>
            <img src={Overview} alt="Overview" />
            <div className="tittleContent">Overview</div>
            <div className="expContent">
              <div className="summary">
                <div> KESEHATAN </div>
                <p>
                  Di kluster kesehatan ini, kamu akan mempelajari lebih detail
                  mengenai manusia, seperti struktur anatomi dan perilaku.
                  Jurusan-jurusan di kluster kesehatan sangat cocok buat kamu
                  yang memang ingin menolong manusia secara langsung.
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
                  Prospek karir di kluster ini sangat amat luas karena dimanapun
                  masyarakat membutuhkan adanya bantuan yang berhubungan dengan
                  kesehatan, mulai dari bidan, dokter dan lain sebagainya
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
                  Dirumpun kesehatan ini, kalian akan mempelajari segala hal
                  yang berkaitan tentang kesehatan mulai dari tubuh makhluk
                  hidup, obat-obatan, penyakit serta lain-nya
                </p>
              </div>
            </div>
          </div>
          <Link to="/AlumniKesehatan" className="linkScreen">
            <div className="content">
              <img src={Alumnis} alt="Overview" />
              <div className="tittleContent"> Alumni </div>
              <div className="expContent">
                <div className="summary">
                  <div> Alumni </div>
                  <p>
                    Alumni MAN Insan Cendekia Pekalongan sangat banyak yang
                    sudah menjadi bagian rumpun ini dan tersebar luas di
                    Indonesia. Kalian yang tertarik dengan rumpun kesehatan bisa
                    banget jadi keluarga alumni rumpun kesehatan
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
              Buat jurusan kedokteran pasti sudah banyak yang tahu. Walaupun
              terkenal dengan perkuliahan yang padat serta lamanya jenjang
              pendidikan, tidak membuat jurusan ini menjadi sepi peminat.
              bahkan, peminatnya dari tahun ke tahun semakin banyak! Berkuliah
              di jurusan ini akan mempelajari banyak hal lho, mulai dari ilmu
              genetik yang sangat kecil hingga ke bagian makronya. Jurusan ini
              juga mempunyai daya tarik seni tersendiri, yaitu ketika kita
              mempelajari diagnosis dan prognosis suatu penyakit! Pokoknya seru
              deh gengs.
              <div>
                Selain kedokteran, ada juga jurusan kedokteran gigi yang
                langsung berfokus mempelajari ilmu yang terkait dengan gigi dan
                mulut. Jurusan ini penting karena dokter gigi memiliki peran
                yang sangat penting dalam mencegah penyakit sistemik yang dapat
                terjadi akibat kondisi gigi yang tidak sehat. Dengan adanya
                dokter gigi yang terlatih dan profesional, maka kesehatan gigi
                dan mulut masyarakat akan lebih terjaga Di rumpun kesehatan ada
                juga jurusan farmasi.
              </div>{" "}
              Jurusan farmasi merupakan salah satu program studi yang
              mempelajari tentang ilmu kedokteran dan kefarmasian. Jurusan ini
              cocok bagi para mahasiswa yang memiliki minat dan bakat dalam
              bidang kedokteran serta memiliki rasa ingin tahu yang tinggi
              terhadap ilmu pengetahuan yang berkaitan dengan obat-obatan dan
              cara pembuatannya. Selain itu, mahasiswa jurusan farmasi juga
              harus memiliki kemampuan komunikasi yang baik serta mampu bekerja
              sama dalam tim. Jurusan farmasi sangat penting karena memiliki
              peran yang sangat besar dalam menjaga kesehatan masyarakat. Para
              lulusan jurusan farmasi akan menjadi tenaga profesional yang
              bertanggung jawab dalam menyediakan obat-obatan yang diperlukan
              oleh masyarakat serta memberikan informasi dan saran tentang
              penggunaan obat yang tepat. Selain itu, para lulusan jurusan
              farmasi juga akan terlibat dalam penelitian dan pengembangan
              obat-obatan baru yang dapat membantu dalam menyembuhkan berbagai
              penyakit.
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
              <ul>
                Berikut prospek kerja mahasiswa lulusan kedokteran:
                <li>
                  1. Dokter yang pertama tentu sudah jelas, setelah menyadang
                  gelar dokter, kamu dapat melakukan praktik di Rumah Sakit,
                  puskesmas, klinik kesehatan, atau membuka praktik pribadi
                </li>{" "}
                <li>
                  2. Dokter Perusahaan dan Instansi pemerintah wah jangan salah
                  lho, perusahaan dan instansi pemerintah membutuhkan dokter
                  juga di dalamnya. Kamu bisa bekerja di Badan Pengawas Obat dan
                  Makanan, Badan Narkotika Nasional, Badan Penyelenggara Jaminan
                  Sosial, Badan SAR Nasional, dan sebagainya
                </li>{" "}
                <li>
                  3. Dokter militer yaps, kalian ga salah denger. Dokter
                  umum/dokter gigi dapat mengikuti pendidikan militer
                  tersendiri. Selain mendapatkan pengetahuan umum militer,
                  dokter militer juga dibekali pengetahuan kedokteran militer.
                </li>
                <li>
                  {" "}
                  4. Akademisi Nah, seorang dokter juga bisa menjadi akademisi.
                  Kamu bisa menjadi seorang dosen atau pun peneliti di bidang
                  kedokteran.
                </li>{" "}
                <li>
                  5. Engineers Ha? Gasalah ni? Iya, dokter juga bisa menjadi
                  seorang engineers lho, banyak sekali dokter yang mengambil
                  pendidikan dan mempelajari tentang teknik kedokteran karena
                  memang dua ilmu ini sangat berkaitan untuk pengobatan di masa
                  sekarang.
                </li>
              </ul>
              <ul>
                Untuk lulusan kedokteran gigi dapat bekerja sebagai dokter gigi
                di klinik atau praktik swasta, di rumah sakit atau di klinik
                pemerintah, atau bahkan di industri perawatan gigi. Mereka juga
                dapat bekerja di sektor pendidikan dengan menjadi dosen di
                universitas atau sekolah tinggi kedokteran gigi. Selain itu,
                lulusan kedokteran gigi juga dapat bekerja di industri farmasi
                atau di perusahaan yang bergerak di bidang produk perawatan
                gigi.{" "}
              </ul>{" "}
              <ul>
                Lulusan Farmasi memiliki prospek kerja yang cerah. Ada banyak
                banget peluang karier yang menanti lulusan Farmasi. Selain
                sektor kesehatan, industri kosmetik, makanan dan minuman juga
                membutuhkan Sarjana Farmasi untuk memperkuat tim research and
                development mereka lho! Prospek kerja yang nggak kalah menarik
                adalah dalam bidang farmasi manajemen. Lulusan Farmasi nggak
                melulu terkait obat-obatan dan bahan kimia. Di farmasi manajemen
                kamu ditantang untuk menciptakan hubungan yang baik dengan rekan
                sejawat maupun di luar profesi, juga dengan pasien. Kalau sudah
                menempuh pendidikan profesi dan mengucap sumpah Apoteker, kamu
                bisa mulai praktik farmasi tradisional ataupun farmasi modern.
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
              Untuk jurusan kedokteran akan mempelajari tentang ilmu pengetahuan
              yang berkaitan dengan kesehatan dan penyakit. Mahasiswa yang
              mengambil jurusan kedokteran akan mempelajari tentang berbagai
              aspek yang berkaitan dengan kesehatan, mulai dari fisiologi,
              anatomi, farmakologi, psikologi, sampai dengan teknik-teknik
              diagnosis dan terapi penyakit. Selain itu, mahasiswa jurusan
              kedokteran juga akan mempelajari tentang etika kedokteran serta
              tanggung jawab yang harus diterima sebagai seorang dokter.
              Mahasiswa akan dibekali dengan pengetahuan dan keterampilan yang
              diperlukan untuk menjadi dokter yang profesional dan berkompeten
              dalam memberikan pelayanan kesehatan kepada masyarakat.
              <div>
                Di jurusan kedokteran gigi yang pasti akan mempelajari lebih
                detail mengenai kesehatan oral manusia, mulai dari daerah gigi
                dan mulut, hingga cara menangani dan mengobati berbagai
                permasalahan di area tersebut.
              </div>{" "}
              Mahasiswa yang mengambil jurusan farmasi akan mempelajari tentang
              berbagai aspek yang berkaitan dengan obat-obatan, mulai dari
              komponen obat, cara pembuatan obat, mekanisme kerja obat, sampai
              dengan cara penyimpanan dan penggunaan obat yang tepat. Selain
              itu, mahasiswa jurusan farmasi juga akan mempelajari tentang
              bagaimana cara mengidentifikasi obat-obatan yang terkontaminasi
              atau palsu serta bagaimana cara menangani obat-obatan tersebut.
              Mahasiswa jurusan farmasi juga akan mempelajari tentang etika
              kefarmasian serta tanggung jawab yang harus diterima sebagai
              seorang farmasis
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
