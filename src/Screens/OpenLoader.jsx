import React from "react";
import { useState, useEffect } from "react";
import LogoAKAB from "../image/AKAB.png";
import "./screenStyle.css";
export default function OpenLoader() {
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    setLoader(true);
    setInterval(() => {
      setLoader(false);
    }, 1000);
  }, []);
  return (
    <div className="appLoader">
      {loader ? (
        <>
          <div className="logoLoader">
            <img src={LogoAKAB} alt="icon AKAB" />
          </div>
        </>
      ) : (
        <>
          <div className="AKABloader">
            <div>AKAB 2023</div>
          </div>
        </>
      )}
    </div>
  );
}
