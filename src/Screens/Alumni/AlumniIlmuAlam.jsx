import React from "react";
import dataIlmuAlam from "../Alumni/clusterFile/Kluster Ilmu Alam.json";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
export default function Alumni() {
  return (
    <div className="appAlumni">
      <div className="tittlePageAlumni"> Alumni Cluster ILMU ALAM</div>

      <div className="back">
        <Link to="/IlmuAlam">
          <div className="backBtn">
            <FontAwesomeIcon icon={faArrowLeftLong} />
          </div>
        </Link>
      </div>

      <div className="listAlumni">
        {dataIlmuAlam.reverse().map((data, i) => (
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
