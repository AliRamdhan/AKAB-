import React from "react";
import dataIlmuKomputer from "../Alumni/clusterFile/Kluster Komputer, Informatika, dan Media.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
export default function Alumni() {
  return (
    <div className="appAlumni">
      <div className="tittlePageAlumni"> Alumni Cluster Ilmu KOMPUTER</div>

      <div className="back">
        <Link to="/IlmuKomputer">
          <div className="backBtn">
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </div>
        </Link>
      </div>

      <div className="listAlumni">
        {dataIlmuKomputer.reverse().map((data, i) => (
          <div className="alumni">
            <div>{data.NAMA}</div>
            <div>{data.JURUSAN}</div>

            <div>{data.PERGURUANTINGGI}</div>
            <div> Angkatan : {data.ANGKATAN}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
