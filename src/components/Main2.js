// Main2.js
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import {
  faUser,
  faCake,
  faPhone,
  faHouse,
  faEnvelope,
  faBuildingColumns,
} from "@fortawesome/free-solid-svg-icons";

function Main2() {
  useEffect(() => {
    const stars = () => {
      const starElement = document.createElement("div");
      starElement.setAttribute("class", "star");
      document.getElementById("page2_bg").appendChild(starElement);
      starElement.style.left = Math.random() * window.innerWidth + "px";

      starElement.style.fontSize = 5 + Math.random() * 20 + "px";
      starElement.style.animationDuration = 5 + Math.random() * 5 + "s";
      setTimeout(function () {
        document.getElementById("page2_bg").removeChild(starElement);
      }, 10000);
    };

    const intervalId = setInterval(() => {
      stars();
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleMouseMove = (e) => {
    const container = document.querySelector(".page2_card");
    const overlay = document.querySelector(".overlay");
    const overlay2 = document.querySelector(".overlay2");
    const overlay3 = document.querySelector(".overlay3");

    var x = e.nativeEvent.offsetX;
    var y = e.nativeEvent.offsetY;
    var rotateY = -((40 / 400) * x - 20);
    var rotateX = (40 / 500) * y - 20;

    container.style.transform = `perspective(500px) rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    overlay.style.backgroundPosition = `${x / 1 + y / 5}%`;
    overlay2.style.backgroundPosition = `${x / 3 - y / 4}%`;
    overlay3.style.backgroundPosition = `${x / 10 + y / 3}%`;
    overlay.style.filter = "opacity(1)";
    overlay2.style.filter = "opacity(1)";
    overlay3.style.filter = "opacity(1)";
  };
  const handleMouseOut = () => {
    const container = document.querySelector(".page2_card");
    container.style.transform =
      "perspective(500px) rotateY(0deg) rotateX(0deg)";
  };

  return (
    <div className="main page2">
      <div className="page2_bg" id="page2_bg">
        <div className="page_bulr">
          <div className="page_bulr_left">
            <div className="page_bulr_left_box">
              <div className="page_bulr_left_box_top">About Me</div>
              <ul>
                <li>
                  <div className="page_bulr_left_box_item">
                    <FontAwesomeIcon icon={faUser} />
                    <div className="page_bulr_left_box_text">홍연승</div>
                  </div>
                </li>
                <li>
                  <div className="page_bulr_left_box_item">
                    <FontAwesomeIcon icon={faCake} /> 
                    <div className="page_bulr_left_box_text">1997년 12월 2일</div>
                  </div>
                </li>
                <li>
                  <div className="page_bulr_left_box_item">
                    <FontAwesomeIcon icon={faPhone} />
                    <div className="page_bulr_left_box_text">010.3543.2529</div>
                  </div>
                </li>
                <li>
                  <div className="page_bulr_left_box_item">
                    <FontAwesomeIcon icon={faHouse} /> 
                    <div className="page_bulr_left_box_text">경기도 수원시</div>
                  </div>
                </li>
                <li>
                  <div className="page_bulr_left_box_item">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <div className="page_bulr_left_box_text">
                      yshong2332@gmail.com
                    </div>
                  </div>
                </li>
                <li>
                  <div className="page_bulr_left_box_item">
                    <FontAwesomeIcon icon={faBuildingColumns} />
                    <div className="page_bulr_left_box_text">
                      연성대학교 컴퓨터소프트웨어과 졸업
                    </div>
                  </div>
                </li>
              </ul>

              <div className="page_bulr_left_box_footer">
                "Front-den Developer"
              </div>
            </div>
          </div>
          <div className="page_bulr_right">
            <div className="page_bulr_right_box">
              <div
                className="page2_card"
                onMouseMove={handleMouseMove}
                onMouseOut={handleMouseOut}
              >
                <div className="overlay"></div>
                <div className="overlay2"></div>
                <div className="overlay3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main2;
