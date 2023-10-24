import React from 'react';
import { useState } from 'react';
import Ikan1 from './image/ikan1.png'
import Ikan2 from './image/ikan2.png'
const dataQuestion = [
{
    question: "Kapan acara AKAB jilid 5 dilaksanakan ?",
    answer:
    "AKAB jilid 5 dilaksanakan tanggal 28 Januari 2023 di lingkuan MAN Insan Cendekia Pekalongan. Nantikan kehadiran kami yaa!",
},
{
    question: "Siapa saja yang boleh mengikuti kegiatan AKAB ?",
    answer:
    "Yang wajib untuk mengikuti AKAB adalah siswa/i kelas 12. Namun, dianjurkan untuk siswa/i kelas 11 dan 10 untuk mengikuti acaara AKAB.",
},
{
    question:
    "Bagaimana jika siswa/i kelas 12 ada yang tidak bisa menghadiri AKAB ?",
    answer:
    "Apabila tidak bisa menghadiri acara AKAB WAJIB konfirmasi kepada panitia yang maksimal 23 Januari 2023",
},
];
export default function Asking(){
    const [ask, setAsk] = useState("");
    function toggleAsk(i) {
        if (ask === i) {
            setAsk("");
        } else {
            setAsk(i);
        }
    }
    return(
    <>
    <div className='ikans'>
        <div className='ikan1'><img src={Ikan1} alt="ikan" /></div>
        <div className='ikan2'><img src={Ikan2} alt="ikan" /></div>
    </div>
        <div className='appAsking'  >
            <div className='under'>
            </div>
            <div className='tittleAsk' data-aos="fade-up" data-aos-duration="1000"> You Might Ask' Question</div>
            <div className='listAsk' data-aos="fade-up" data-aos-duration="1000">
                {dataQuestion.map((item, i) => (
                    <div onClick={() => { toggleAsk(i) }} >
                        <div className={ask === i ? "ask active" : "ask"} >
                            <div className="question"> {item.question} </div>
                            <div className="answer"> {item.answer} </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
    )
}