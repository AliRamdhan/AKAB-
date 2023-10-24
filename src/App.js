import React from 'react';
import Home from './Screens/Home/Home';
import Cluster from './Screens/ClusterJurusan/ClusterJurusan';
import QnA from './Screens/QnA/QnA'
import Committe from './Screens/Committe/Commite';
import Journey from './Screens/Journey/Journey'

import Agama from './Screens/ClusterJurusan/categories/Agama'
import EkonomiBisnis from './Screens/ClusterJurusan/categories/EkonomiBisnis'
import IlmuAlam from './Screens/ClusterJurusan/categories/IlmuAlam'
import IlmuKomputer from './Screens/ClusterJurusan/categories/IlmuKomputer'
import IlmuMurni from './Screens/ClusterJurusan/categories/IlmuMurni'
import Kedinasan from './Screens/ClusterJurusan/categories/Kedinasan'
import Kesehatan from './Screens/ClusterJurusan/categories/Kesehatan'
import Pendidikan from './Screens/ClusterJurusan/categories/Pendidikan'
import SastraBudaya from './Screens/ClusterJurusan/categories/SastranIlmuBudaya'
import SosialPolitikHukum from './Screens/ClusterJurusan/categories/SosialPolitikHukum'
import Teknik from './Screens/ClusterJurusan/categories/Teknik'

import AlumniAgama from './Screens/Alumni/AlumniAgama'
import AlumniIlmuAlam from './Screens/Alumni/AlumniIlmuAlam';
import AlumniIlmuKomputer from './Screens/Alumni/AlumniIlmuKomputer';
import AlumniIlmuMurni from './Screens/Alumni/AlumniIlmuMurni'
import AlumniEkonomiBisnis from './Screens/Alumni/AlumniEkonomiBisnis'
import AlumniKedinasan from './Screens/Alumni/AlumniKedinasan'
import AlumniKesehatan from './Screens/Alumni/AlumniKesehatan'
import AlumniPendidikan from './Screens/Alumni/AlumniPendidikan'
import AlumniSastraBudaya from './Screens/Alumni/AlumniSastraBudaya'
import AlumniSosialPolitikHukum from './Screens/Alumni/AlumniSosialPolitikHukum'
import AlumniTeknik from './Screens/Alumni/AlumniTeknik'

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();
function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/ClusterJurusan' element={<Cluster/>}/>
          <Route path='/QnA' element={<QnA/>}/>
          <Route path='/Committe' element={<Committe/>}/> 
          <Route path='/Journey' element={<Journey/>}/> 

          <Route path="/Agama" element={<Agama/>}/>
          <Route path="/EkonomiBisnis" element={<EkonomiBisnis/>}/>
          <Route path="/IlmuAlam" element={<IlmuAlam/>}/>
          <Route path="/IlmuKomputer" element={<IlmuKomputer/>}/>
          <Route path="/IlmuMurni" element={<IlmuMurni/>}/>
          <Route path="/Kedinasan" element={<Kedinasan/>}/>
          <Route path="/Kesehatan" element={<Kesehatan/>}/>
          <Route path="/Pendidikan" element={<Pendidikan/>}/>
          <Route path="/SastraBudaya" element={<SastraBudaya/>}/>
          <Route path="/SosialPolitikHukum" element={<SosialPolitikHukum/>}/>
          <Route path="/Teknik" element={<Teknik/>}/>

          <Route path='/AlumniIlmuAlam' element={<AlumniIlmuAlam/>}/>
          <Route path='/AlumniIlmuKomputer' element={<AlumniIlmuKomputer/>}/>
          <Route path='/AlumniIlmuMurni' element={<AlumniIlmuMurni/>}/>
          <Route path='/AlumniAgama' element={<AlumniAgama/>}/>
          <Route path='/AlumniPendidikan' element={<AlumniPendidikan/>}/>
          <Route path='/AlumniKesehatan' element={<AlumniKesehatan/>}/>
          <Route path='/AlumniKedinasan' element={<AlumniKedinasan/>}/>
          <Route path='/AlumniSosialPolitikHukum' element={<AlumniSosialPolitikHukum/>}/>
          <Route path='/AlumniSastraBudaya' element={<AlumniSastraBudaya/>}/>
          <Route path='/AlumniEkonomiBisnis' element={<AlumniEkonomiBisnis/>}/>
          <Route path='/AlumniTeknik' element={<AlumniTeknik/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App;
