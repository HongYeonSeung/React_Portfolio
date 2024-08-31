import React, { useEffect, useState } from "react";
import { SectionsContainer, Section } from "react-fullpage";
import AnimatedCursor from "react-animated-cursor";
import "./App.css";
import Main1 from "./components/Main1.js";
import Main2 from "./components/Main2.js";
import Main3 from "./components/Main3.js";
import Main4 from "./components/Main4.js";
import Main5 from "./components/Main5.js";
import confetti from "canvas-confetti";
function App() {
  const [pageNumber, setPageNumber] = useState("1");

  useEffect(() => {
    const updatePageNumber = () => {
      const hash = window.location.hash;
      const number = hash ? hash.substring(1) : "1";
      console.log( number);
      setPageNumber(number);
      if (number === '5') {
        console.log("Current page number:", number);
        setTimeout(() => Boom(), 1000);
      }
    };

    updatePageNumber(); // 컴포넌트가 마운트될 때 호출
    window.addEventListener("hashchange", updatePageNumber); // 해시 변경 이벤트 리스너 추가

    return () => {
      window.removeEventListener("hashchange", updatePageNumber); // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    };
  }, []);

  let options = {
    anchors: ["1", "2", "3", "4", "5"],
    delay: 900, // the scroll animation speed
    navigation: false, // use dots navigatio
    scrollBar: false, // use the browser default scrollbar
  };

  const Boom = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      angle: 45,
      origin: { y: 0.4, x: 0 },
      colors: ["#bb0000", "#ffffff"],
      delay: 9000,
    });
    confetti({
      particleCount: 100,
      spread: 70,
      angle: 135,
      origin: { y: 0.4, x: 1 },
      colors: ["#bb0000", "#ffffff"],
    });

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        angle: 45,
        origin: { y: 0.6, x: 0 },
        colors: ["#bb0000", "#ffffff"],
      });
    }, 1000);
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        angle: 135,
        origin: { y: 0.6, x: 1 },
        colors: ["#bb0000", "#ffffff"],
      });
    }, 1000);

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        angle: 45,
        origin: { y: 0.8, x: 0 },
        colors: ["#bb0000", "#ffffff"],
      });
    }, 2000);
    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        angle: 135,
        origin: { y: 0.8, x: 1 },
        colors: ["#bb0000", "#ffffff"],
      });
    }, 2000);
  };
  return (
    <div>
      <div className="container">
        <div className="page1_top">
          <ul>
            <li>
              <a href="#1">home</a>
            </li>
            <li>
              <a href="#2">About Me</a>
            </li>
            <li>
              <a href="#3">Skill</a>
            </li>
            <li>
              <a href="#4">Project</a>
            </li>
            <li>
              <a href="#5">Finish</a>
            </li>
            <li>
              <a href="https://github.com/HongYeonSeung">
                <img
                  className="git_svg"
                  src="assets/git.svg"
                  alt="깃허브링크"
                  style={{ height: "2.5rem" }}
                />
              </a>
            </li>
          </ul>
        </div>
        <AnimatedCursor
          innerSize={20}
          outerSize={30}
          outerScale={2}
          color="255,255,255"
        />
        <SectionsContainer {...options}>
          <Section>
            <Main1></Main1>
            {/* <Main5></Main5> */}
          </Section>
          <Section>
            <Main2></Main2>
          </Section>
          <Section>
            <Main3></Main3>
          </Section>
          <Section>
            <Main4></Main4>
          </Section>
          <Section>
            <Main5 pageNumber={pageNumber}></Main5>
          </Section>
        </SectionsContainer>
      </div>
    </div>
  );
}

export default App;
