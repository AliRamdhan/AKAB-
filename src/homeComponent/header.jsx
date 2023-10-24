import React from "react";
import Logo from "../image/AKAB.png";
import "./srtyleHomeComponent.css";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="appHeader">
      <div className="subHeader">
        <Link to="/" className="moveScreen">
          <div className="home">
            <img src={Logo} alt="logo AKAB" /> AKAB 2023{" "}
          </div>
        </Link>
        <div className="navigation">
          <Link to="/QnA" className="moveScreen">
            <div> Q&A </div>
          </Link>
          <Link to="/ClusterJurusan" className="moveScreen">
            <div> Cluster Jurusan </div>
          </Link>
          <Link to="/Committe" className="moveScreen">
            <div> Committe </div>
          </Link>
        </div>
        <div
          className="humberger"
          onClick={() => {
            setNavbar(true);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={navbar ? "navigationBar active" : "navigationBar"}>
          <div
            className="cancel"
            onClick={() => {
              setNavbar(false);
            }}
          >
            <span></span>
          </div>
          <Link to="/QnA" className="moveScreen">
            <div> Q&A </div>
          </Link>
          <Link to="/ClusterJurusan" className="moveScreen">
            <div> Cluster Jurusan </div>
          </Link>
          <Link to="/Committe" className="moveScreen">
            <div> Committe </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
