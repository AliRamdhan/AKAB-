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
        <div className="tittleCluster">KEDINASAN</div>

        <div className="listContent">
          <div className="content" onClick={() => setOverview(true)}>
            <img src={Overview} alt="Overview" />
            <div className="tittleContent">Overview</div>
            <div className="expContent">
              <div className="summary">
                <div> KEDINASAN </div>
                <p>
                Sekolah kedinasan adalah perguruan tinggi yang bernaung di bawah lembaga pemerintahan. Memilih sekolah kedinasan cocok bagi kamu yang ingin mendapatkan kepastian kerja saat lulus nanti. Namun, kamu harus mempelajari materi tes masuk dan juga siap dengan ketetatan yang tinggi.
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
                Sekloah kedinasan ini pilihan yang safe untuk kamu yang tidak
                ingin susah susah memikirkan melamar kerja di perusahaan karena ekolah kedinasan merupakan sekolah dengan jaminan ikatan dinas, dimana peserta didik dapat diangkat langsung menjadi pegawai negeri sipil (PNS) setelah lulus.
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
                Hal yang dipelajari tergantung sekolah kedinasan apa dan juga dari jurusan yang diambil.
                </p>
              </div>
            </div>
          </div>
          <Link to="/AlumniKedinasan" className="linkScreen">
            <div className="content">
              <img src={Alumnis} alt="Overview" />
              <div className="tittleContent"> Alumni </div>
              <div className="expContent">
                <div className="summary">
                  <div> Alumni </div>
                  <p>
                  Alumni MAN Insan Cendekia Pekalongan sangat banyak yang sudah menjadi bagian rumpun ini dan tersebar luas di Indonesia. Kalian yang tertarik dengan rumpun Kedinasan bisa banget jadi keluarga alumni rumpun ini
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
              Sekolah Kedinasan atau perguruan tinggi kedinasan adalah perguruan
              tinggi yang bernaung di bawah lembaga pemerintahan (kementerian)
              sebagai penyelenggara pendidikan dengan pola ikatan dinas atau
              pembibitan.<div> Lembaga pemerintahan tersebut meliputi Kementerian
              Keuangan, Kementerian Dalam Negeri, Kementerian Hukum dan HAM,
              Kementerian Perhubungan, Badan Pusat Statistik, Badan Meteorologi,
              Klimatologi dan Geofisika, Badan Intelijen Negara, Badan Siber dan
              Sandi Negara.</div> Selama kuliah, mahasiswa akan mempelajari
              bidang-bidang spesifik sesuai lembaga pemerintahan dimana
              perguruan tinggi tersebut berada. Dalam penerimaan mahasiswa baru,
              terdapat seleksi yang harus diikut, dengan rangkaian tes yang
              panjang dan ketat untuk mendapatkan mahasiswa dengan kualifikasi
              yang sesuai dan kemampuan yang mumpuni.<div> Adapun tahapannya
              meliputi:<ul> <li>pendaftaran</li><li> seleksi administrasi</li><li> seleksi kompetensi
              dasar</li><li> seleksi lanjutan</li> <li> pengumuman akhir</li></ul> Pada Seleksi
              Kompetensi Dasar, peserta akan mengerjakan soal yang mencakup
              materi Tes Karakteristik Pribadi, Tes Intelegensi Umum, dan Tes
              Wawasan Kebangsaan. Beberapa perguruan tinggi yang berstatus
              kedinasan adalah Institut Pemerintahan Dalam Negeri (IPDN),
              Politeknik Keuangan Negara STAN (PKN STAN), dan Politeknik
              Statistika STIS.</div>
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
              Sekolah kedinasan ini pilihan yang safe untuk kamu yang tidak
              ingin susah susah memikirkan melamar kerja di perusahaan karena
              ekolah kedinasan merupakan sekolah dengan jaminan ikatan dinas,
              dimana peserta didik dapat diangkat langsung menjadi pegawai
              negeri sipil (PNS) setelah lulus.
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
              Hal yang dipelajari tergantung sekolah kedinasan apa dan juga dari
              jurusan yang diambil.Misal jika di STAN maka mahasiswa akan cenderung mempelajari tentang keuangan negara, pajak serta lainnya, jika di IPDN maka mahasiswa akan mempelajari lebih dalam tentang kementerian dalam negeri
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
