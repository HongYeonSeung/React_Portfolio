import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

function Main1() {
  const [timer, setTimer] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTimer(true);
    }, 1400);
  });

  return (
    <div className="main page1">
      <div className="page1_box">
        <div className="page1_box_img">
          <div className="main1_img_box">
            <img
              className="myimage3"
              src="./assets/myimage1.jpg"
              alt="흑백증명사진"
            ></img>

            <img
              className="myimage3_back"
              src="./assets/main1_back.png"
              alt="흑백증명사진"
            ></img>

            <div className="marquee">
              <div className="marquee-text"></div>
              <div className="marquee-text"></div>
              <div className="marquee-text"></div>
            </div>
          </div>

          <div className="page1_box_textbox">
            <div className="page1_box_text0">
              <Typewriter
                options={{
                  cursor: "",
                }}
                onInit={(typewriter) => {
                  typewriter.pauseFor(0).typeString("Hello").start();
                }}
              />
            </div>
            <div className="page1_box_text1">
              {timer ? (
                <Typewriter
                  options={{
                    strings: ["Front-end", "Developer"],
                    autoStart: true,
                    loop: true,
                  }}
                ></Typewriter>
              ) : (
                <div className="main1_gap"></div>
              )}

              {/* <Typewriter
                options={{
                  cursor: "",
                  loop: true
                }}
                onInit={(typewriter) => {
                  typewriter.pauseFor(1000)
                  .typeString('Developer')
                  .pauseFor(2000)
                  .deleteAll()
                  .typeString('Hong YeonSeung')
                  .pauseFor(1000)
                  .deleteAll()
                  .start();
                }} */}
            </div>
            <div className="page1_box_text2">
              <Typewriter
                options={{
                  cursor: "",
                }}
                onInit={(typewriter) => {
                  typewriter.pauseFor(2800).typeString("Portfolio").start();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main1;
