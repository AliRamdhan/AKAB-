import React from 'react';
import { useState } from 'react';
import Header from '../../homeComponent/header';
import Footer from '../../homeComponent/footer';
const dataFAQ=[
  {
    question:"Masih bingung, Kak, mau kuliah di jurusan apa",
    answer:"Wah, pas banget nih, soalnya nanti di AKAB jilid V kamu bisa explore banyak rumpun jurusan yang harapannya bisa ngebantu kamu mencari dan atau lebih yakin buat nentuin pilihan jurusan yang akan kamu tuju Tapii kalau kamu mau explore sendiri juga bisa kok. Kamu bisa memikirkan hal seperti:Pertama, kamu harus diskusikan dengan orang yang kamu percaya: Bicarakan dengan orang yang kamu percaya tentang pilihan studi yang kamu pertimbangkan. Mereka dapat memberikan saran yang berguna dan dapat membantu kamu melihat pilihan studi dari sudut pandang yang berbeda.dan jika tidak ada pilihan yang salah: Jangan merasa tertekan untuk memilih program studi yang terbaik. Setiap program studi memiliki kelebihan dan kekurangan masing-masing, jadi pilihlah program studi yang sesuai dengan kebutuhan, akademik, dan juga minat & bakatmu. Kamu dapat pelajari lebih banyak tentang program studi yang kamu minati: Banyak universitas menyediakan informasi tentang program studi yang tersedia, termasuk deskripsi umum program studi, syarat-syarat pendaftaran, dan kurikulum. Kamu juga bisa mencari informasi tentang prospek kerja dari program studi tersebut lalu coba tanya ke diri kamu sendiri, apakah itu yang ingin kamu lakukan di masa depan dan kamu dapat explore diri kamu: Coba cari tahu apa minat & passionmu dan apa pekerjaan yang ingin kamu lakukan di masa depan. Dari situ kamu jadi lebih bisa mempersempit opsi jurusan yang nantinya akan kamu pilih."
  },
  {
    question:"Kak, aku takut banget gak keterima dan takut mengecewakan banyak orang",
    answer:"Kayaknya ini universal experience deh, aku yakin semua juga khawatir tentang ini, even kakak kelasmu ya dulu juga pasti takut & khawatir, tapi liat deh hasilnya :D lumayan kan (#flexing). Jadi, its oke, wajar, yang penting maksimalin aja usaha kalian, jangan nyerah duluan. Masalah nanti hasilnya gimana dan takut bikin kecewa banyak orang, dah itu nanti, fokus aja ke yang sekarang. Semangat !!!"
  },
  {
    question:"Bingung nih, Kak, linjur atau nggak ya,….",
    answer:"Liat risk and advantage nya dulu si, antara linjur atau ngga itu gimana, semisal masih bingung mau linjur atau ngga coba dulu baca baca atau ngerjain soal jurusan sebelah. enakan mana, ngerasa cocok yang mana. Misal ni udah cocok linjur, liat ke materi yang harus di kejar kira kira bisa ga, resiko yang harus diterima ngejar materi juga berat, tapi banyak kok yang bisa linjur, bahkan ga sedikit juga yang akhirnya enjoy sama pilihannya. Itu kalau tahun lalu, yah. Kalau tahun sekarang kan linjur pun soal tetap sama, jadi mungkin soal SNBT nggak perlu jadi perhitungan. Mungkin yang perlu dipikirin lebih ke apakah nanti kamu bisa adaptasi sama materi linjur di kampus dan apakah kamu siap ngeluarin effort lebih banyak buat matkul-matkul linjur nanti, yang dimana kamu nggak puny basic-basicnya.                          Intinya pikirin mateng - mateng, coba konsul ke BK, ortu, atau guru yang deket deh"
  },
  {
    question:"Buat nentuin jurusan kuliah itu harus idealis atau realistis sih, Kak ?",
    answer:"Hmmm, keduanya pilihan yang berbeda-beda ya untuk tiap orang, tergantung preferensi dan keadaan. Berikut beberapa pertimbangan yang dapat membantu kamu menentukan apakah harus idealis atau realistis: Pertama sesuaikan dengan Minat dan bakat, Apakah Kamu memiliki minat dan bakat yang kuat dalam bidang tertentu?  lalu lihat Prospek kerja-nya Apakah jurusan yang kamu minati memiliki prospek kerja yang baik di masa depan? serta mempelajari keterampilan yang diperlukan, Apakah kamu sudah memiliki keterampilan yang diperlukan untuk sukses dalam jurusan yang kamu minati? kamu dapat melihat berdasarkan tujuan hidup kamu, Apakah kamu ingin mengejar karier yang berkaitan dengan passion atau lebih memprioritaskan keamanan finansial? serta lihat juga secara finansial kamu, Apakah kamu memiliki kemampuan finansial yang cukup untuk menyelesaikan kuliah di jurusan yang kamu minati? Pada akhirnya, penting untuk mempertimbangkan semua faktor ini dan membuat keputusan yang tepat. Jangan ragu untuk berkonsultasi dengan orang-orang terdekat, BK, atau guru untuk saran dan dukungan. Ingat! tidak ada yang salah di kedua piliihan ini, semua ada plus minusnya, yang terpenting adalah jangan sampai kamu menyesal nantinya."
  },
  {
    question:"Kak, gimana sih cara survive dan tetap pada pendirian selama berada di lingkungan yang mungkin gak sebaik dan selurus di IC ?",
    answer:"Hal pertama dan yang paling utama adalah niat, karena dari situ kita bisa menjaga diri biar tetep di jalan yang baik dan benar. Setelah keluar dari IC kalian pasti nemu banyak banget hal yang nggak biasa di IC, entah itu orang yang Islam tapi cuma di KTP-nya aja, kegiatan yang kadang waktu sholatnya bentar banget, dlsb. Hal semacam itu harus tetep kalian anggep sebagai sesuatu yang salah, jangan sampai menormalisasikan dosa apalagi sampai menyepelekan ibadah wajib. Syukur kalau ibadah sunnah juga masih istiqomah. Tapi menurutku yang paling penting tuh menjaga ibadah wajib sih, terutama sholat. Kalau sholat udah terjaga dengan baik, harusnya hati juga ikut terjaga dari maksiat. Selain itu sebenernya tergantung diri masing-masing, karena di IC pun banyak yang nggak suka sama lingkungan yang terlalu ‘lurus’ dan lebih suka lingkungan yang agak bebas kayak di luar IC. Ketika kita udah biasa dan nyaman berada di lingkungan yang ‘lurus’, insyaAllah di dunia luar yang godaannya banyak pun bisa survive. Dan yang nggak kalah penting, cari temen yang baik, yang sefrekuensi, dan bisa saling mengingatkan. Berteman memang sama siapa aja nggak dilarang, tapi khusus buat orang-orang yang mungkin membawa dampak buruk ke kita, berteman secukupnya aja walaupun mungkin kita udah yakin banget bisa jaga diri. Misal temen ada yang melakukan sesuatu yang jelas salah kayak clubbing, mabuk, atau nginep bareng pacarnya, ya jangan penasaran dan jangan sampai nyoba meskipun itu udah dianggep hal biasa sama mereka."
  },
  {
    question:"Tugas kuliah lebih banyak daripada di IC gak sih, Kak",
    answer:"Banyak sedikitnya tergantung jurusan sih, ada yg tiap hari sambat tapi ada juga yang tiap hari kerjaanya jalan jalan. Tapi ya, apapun jurusannya, intinya pinter pinter membagi waktu aja, waktu buat tugas dan juga buat healing(ini butuh banget sih). Jadi jangan lupa istirahat walaupun tugas banyak! Karna hidup anak kos beda sama anak ic yg masih ada yg ngurusi. Kalo lu sakit di kos, beuh, rasanya menyiksa pake bgt."
  },
  {
    question:"Khawatir banget sama biaya kuliah",
    answer:"Sebelumnya, kamu perlu tahu kalau kebanyakan PTN menggunakan sistem UKT yang menerapkan subsidi silang, dimana biaya yang kamu bayarkan akan bergantung dari beberapa variabel seperti penghasilan orang tua, pajak, tanggungan, dll. Akan tetapi, memang banyak orang yang mengeluhkan biaya UKT walaupun sudah diterapkannya sistem subsidi silang. Untuk mengurangi kekhawatiran tentang biaya kuliah, ada beberapa cara yang dapat dilakukan, seperti mencari tahu tentang bantuan keuangan yang tersedia, seperti beasiswa, pinjaman, atau grant. Beberapa universitas atau lembaga pendidikan juga menawarkan bantuan keuangan bagi mahasiswa yang memenuhi syarat. Tenang, saat kamu masuk kampus nanti, pasti akan banyak sekali informasi mengenai beasiswa baik dari kampus, negeri, maupun perusahaan swasta. Kamu juga bisa mencoba part-time job atau pekerjaan sambilan selama kuliah untuk membantu menutupi biaya seperti jualan online, freelancing, tutoring, asisten dosen atau laboratorium, dll."
  },
  {
    question:"Takut banget, Kak. Gimana kalau nanti harus gapyear ?",
    answer:"Wah, semoga sih angkatan kalian 100% diterima dan nggak harus gapyear ya. Tapi tahu gak sih kalau sebenernya banyak loh hal-hal yang bisa kalian lakukan saat gapyear. Berikut adalah beberapa hal positif yang dapat kamu lakukan saat gap year. Kamu bisa meningkatkan keterampilan kamu selama gapyear dengan kamu bisa mencari kesempatan untuk meningkatkan keterampilan yang mungkin berguna untuk studi di masa depan. Kamu juga bisa mengunjungi tempat-tempat baru dan menikmati pengalaman yang berbeda.Gapyear juga dapat memberikan kesempatan bagi kamu untuk belajar mandiri dan mengelola waktu dengan baik. Kamu juga bisa menata ulang dan atau memperbaiki rencana-rencana masa depanmu dengan lebih detail.Untuk kamu yang suka melakukan kegiatan sosial, gapyear merupakan kesempatan yang baik untuk melakukan sesuatu yang berguna bagi masyarakat.  "
  },
  {
    question:"Apa aja sih, Kak, realita yang ternyata nggak sesuai sama ekspektasi di masa perkuliahan ?",
    answer:"pertama pasti ekspetasi-nya kamu punya banyak teman baru di kampus, tapi realitany memang nanti kamu akan bertemu dengan banyak orang di kampus. Namun, bukan berarti kamu akan otomatis mendapatkan banyak teman juga. Jadwal mata kuliah tiap orang bisanya berbeda dan tidak semuanya sama dan tiap orang punya kesibukan yang berbeda-beda, jadi akan jarang ketemuan dan mungkin kamu hanya akan punya sedikit teman dekat saja., ekspetasi yang kedua yakni jadwal kuliah yang fleksible, fleksibel memang, tapi jangan mengeluh kalau nanti dosen tiba-tiba meng-cancel kuliah saat kalian sudah di kelas dan diganti saat waktu weekend. Oh ya, jadwal fleksibel bukan berarti tidak ada kuliah pagi ya. Jangan kaget, bisa saja kalian dapat kuliah pagi dari senin sampai jumat. ekspetasi yang ketiga Wah, matkulnya gampang, tugas dan ujian oke juga, pasti dapet A, ingat jangan mengharapkan apapun dari penilaian dosen, yang penting usaha saja semaksimal mungkin. ekspetasi yang suka hangout pasti punya banyak waktu hangout sama temen, liat dulu deadline tugas, laprak, paper, quiz, zoom atau kelas di weekend. Tapi tenang, pasti ada juga kok waktu untuk senang-senang, dengan menggerjakan tugas mepet deadline misalnya. Ini hanya beberapa contoh ekspektasi dan realita di kampus. Setiap orang akan mengalami kampus dengan cara yang berbeda. Kuliah nanti, kalian pasti akan banyak menemui realita yang berbeda dengan ekpektasi kalian. Jadi, terbuka sajalah pada pengalaman yang berbeda dan bersiaplah untuk menghadapi tantangan."
  },
  {
    question:"Kak, aku beda pendapat sama ortu tentang jurusan kuliah. Gimana ya kira-kira baiknya?",
    answer:" Pertama, kamu bisa mencoba untuk meminta alasan-alasan yang mendasari pendapat orang tuamu. Pahamin alasan-alasan itu, kalau memang alasan mereka kontradiksi sama apa yang kamu inginkan,  coba jelasin ke mereka alasan-alasan mengapa kamu memilih jurusan yang berbeda, kamu bisa kaitin dengan passion dan minatmu atau bisa juga tentang prospek karier di masa depan. Kalau misalnya orang tuamu masih tetap kukuh ,mungkin kamu bisa minta bantuan ke BK, guru, atau keluarga dekat lain (om/tante misalnya) yang lebih ngerti tentang passion dan minatmu buat ngasih pendapat atau masukan ke orang tuamu biar mereka lebih terbuka pikirannya. Memang, orang tua pasti punya alasan sendiri atas pendapat mereka, tetapi memilih jurusan itu hal yang sangat vital dan akan sangat berdampak ke perjalanan kehidupanmu kedepannya. Percayakan ke orang tuamu kalau kamu sudah beranjak dewasa dan punya kebebasan untuk memilih dan juga kamu akan bertanggung jawab atas pilihanmu."
  },
]
export default function Faq() {
  const [faq,setFaq] = useState()

  function setActiveFaq(i){
    if(faq === i){
      setFaq('')
    }
    else{
      setFaq(i)
    }
  }
    return (
      <>
      <Header/>
      <div className='appQnA' >
        <div className='tittlePageQnA' data-aos="fade-up" data-aos-duration="1000">Your Frequently Asked Question</div>
        <div className='listFaq' data-aos="fade-up" data-aos-duration="2000">
          {dataFAQ.map((data,i)=>(
            <div onClick={()=>{setActiveFaq(i)}}>
              <div key={i} className={faq === i? 'faq active' : 'faq'} >
                <div className='question'>{data.question}</div>
                <div className='answer'>{data.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
      </>
    );
  }
  //bikin pop up