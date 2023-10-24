import React from "react";
import Logo from "../image/IAICP.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <div className="appFooter">
      <div className="subFooter">
        <div className="event">
          <div className="director">
            <div>
              <img src={Logo} alt="IAICP LOGO" />
            </div>
            <div> AKAB 2023 </div>
            <div> IAICP </div>
          </div>
          <div className="sosmed">
            <FontAwesomeIcon icon={faInstagram} />
            <a
              href="https://www.instagram.com/akab.iaicp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @akab.iaicp
            </a>
          </div>
        </div>
        <div className="credit">
          <div>MAN Insan Cendekia Pekalongan</div>
          <div> © 2022 AKAB | IAICP. All rights reserved. </div>
        </div>
      </div>
    </div>
  );
}
