import React from "react";
import Icon from "./image/AKAB.png";
import Icon2 from "./image/1.png";
import Icon3 from "./image/2.png";
import Icon4 from "./image/3.png";
import Icon5 from "./image/4.png";
import { useState } from "react";
import Turtle from "./image/turtle.png";
import Ubur2 from "./image/ubur2.png";
const dataExplaineTimeline = [
  {
    icon: Icon,
    title: "Pembukaan AKAB V",
    content:
      "AKAB Jilid V akan dimulai dengan diarahkan oleh MC. Dimulai dengan pembukaan oleh MC, lalu pembacaan rundown, pembacaan ayat suci Al-Quran, dan sambutan-sambutan. Kemudian dilanjutkan dengan talkshow yang akan dipandu oleh para moderator",
  },
  {
    icon: Icon2,
    title: "Segmen 1",
    content:
      "Segmen pertama talkshow akan membicarakan tentang rasa bimbang narasumber dalam memilih jurusan, bagaimana ia mempersiapkan diri untuk ujian, biaya yang harus ia keluarkan, dan ketakutan akan hasil buruk yang mungkin didapat. Di segmen ini kita juga akan membicarakan tentang kuliah di luar negeri loh.",
  },
  {
    icon: Icon3,
    title: "Segmen 2",
    content:
      "Jika di segmen sebelumnya kita membahas tentang persiapan masuk kampus, maka di sini kita akan membicarakan tentang kehidupan masa kuliah. Mulai dari bagaimana sih kehidupan kampus, apa perbedaannya dengan saat di sekolah, organisasi-organisasi mahasiswa, pilih jadi aktivis atau mawapres, pekerjaan sampingan hingga kehidupan anak kos yang merantau.",
  },
  {
    icon: Icon4,
    title: "Segmen 3",
    content:
      "Di segmen 'Its okay to not be okay' ini narasumber akan menceritakan kisahnya tentang bagaimana ia berusaha dengan segala cara, termasuk jalur langit pun sudah ia lakukan, tapi tetap saja belum diberi oleh Tuhan dan benar-benar gagal terus meski ia sudah mencoba banyak hal hingga akhirnya ia memilih untuk berdamai dengan takdir.",
  },
  {
    icon: Icon5,
    title: "Sharing Session",
    content:
      "Expo fair yang berbentuk komunikasi langsung dua arah antara siswa/i dengan narasumber. Sharing narasumber berada pada stand jurusan dalam rumpun/klaster. Siswa/i akan berkeliling untuk mengunjungi masing-masing stand dan narasumber akan menjelaskan materi program studinya dan menjawab pertanyaan peserta.",
  },
  {
    icon: Icon,
    title: "Penutupan AKAB V",
    content:
      "AKAB JILID V akan ditutup oleh pembacaan doa yang akan dipimpin oleh petugas.Kemudian para peserta AKAB V boleh meninggalkan tempat acara",
  },
];
const dataTimeline = [
  {
    tittle: "Pembukaan AKAB V",
    time: "08:00 - 08:40",
  },
  {
    tittle: "Segmen 1",
    time: "08:40 - 09:45",
  },
  {
    tittle: "Segmen 2",
    time: "09:45 - 10:55",
  },
  {
    tittle: "Segmen 3",
    time: "10:55 - 11:50",
  },
  {
    tittle: "Sharing Session",
    time: "13:00 - 15:45",
  },
  {
    tittle: "Penutupan AKAB V",
    time: "15:45 - 16:00",
  },
];

export default function Timeline() {
  const [time, setTime] = useState(0);
  const [expTimeline, setExpTimeline] = useState(0);
  function toggleTimeline(i) {
    setTime(i);
    setExpTimeline(i);
  }
  return (
    <>
      <div className="turtle">
        <img src={Turtle} alt="icon" />
      </div>
      <div className="ubur">
        <img src={Ubur2} alt="icon" />
      </div>
      <div className="appTimeline">
        <div
          className="tittleTimeline"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {" "}
          Timeline AKAB 2023
        </div>
        <div
          className="listTimelines"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div className="listTime">
            {dataTimeline.map((item, i) => (
              <div
                onClick={() => {
                  toggleTimeline(i);
                }}
              >
                <div className={time === i ? "timeline active" : "timeline"}>
                  <div> {item.tittle} </div>
                  <div className="circle"></div>
                  <div> {item.time}</div>
                </div>
              </div>
            ))}
            <div className="line"></div>
          </div>
          <div className="contentTimeline">
            {dataExplaineTimeline.map((item, i) => (
              <div
                onClick={() => {
                  toggleTimeline(i);
                }}
              >
                <div
                  className={
                    expTimeline === i
                      ? "explaineTimeline active"
                      : "explaineTimeline"
                  }
                >
                  <img className="icon" src={item.icon} alt={item.title} />
                  <div className="contentExpTimeline">
                    <div className="content1"> {item.title} </div>
                    <div className="content2"> {item.content} </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
