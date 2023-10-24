import React from 'react';
import Header from '../../homeComponent/header';
import LandingPage from '../../homeComponent/landingPage/landingPage';
import JourneyIntro from '../../homeComponent/journey/JourneyIntro';
import Timeline from '../../homeComponent/timeline/timeline';
import Asking from '../../homeComponent/asking/asking';
import Footer from '../../homeComponent/footer';
import OpenLoader from '../OpenLoader';
import '../screenStyle.css'
import { useState,useEffect } from 'react';
export default function Home(){
    const [screen, setScreen] = useState(false)

    useEffect(()=>{
        setScreen(true)
        setTimeout(()=>{
            setScreen(false)
        },3000)
    },[])
    return(
        <>
        {
            screen?(
                <OpenLoader/>
            ) : (
            <div className='appHome'>
                <Header/>
                <LandingPage/>
                <JourneyIntro/>
                <Timeline/>
                <Asking/>
                <Footer/>
            </div>
            )
        }
        </>
    )
    
}