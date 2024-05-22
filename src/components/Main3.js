import React, { useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
function Main3() {
  const skills = [
    {
      skill: "C",
      image: "../assets/c-icon.svg",
      info: "구조체, 배열, 2차원 배열, 파일 입출력, 포인터를 사용하여 시스템 프로그래밍이나 임베디드 시스템 등의 저수준 프로그래밍에 활용 가능합니다.",
      rank: "",
    },
    {
      skill: "JAVA",
      image: "../assets/java-icon.svg",
      info: "",
      rank: "자바의 기본 클래스와 상속,패키지의 개념과 제네릭 컬렉션 GUI등을 사용해 학습하였습니다.",
    },
    {
      skill: "Python",
      image: "../assets/Python-icon.svg",
      info: "기본 문법 및 데이터 구조를 이해하고, 머신러닝 알고리즘을 사용한 선형회귀 알고리즘 등을 사용해 보았습니다 ",
      rank: "",
    },
    {
      skill: "HTML5",
      image: "../assets/w3_html5-icon.svg",
      info: "웹 페이지 구조를 만들기 위한 기본 마크업 언어를 숙지, 각 태그의 사용 방법을 이해하고있습니다.",
      rank: "",
    },
    {
      skill: "CSS3",
      image: "../assets/w3_css-icon.svg",
      info: "기본 문법과 선택자, 애니메이션 등을 사용하여 웹 페이지의 스타일링을 할 수 있습니다.",
      rank: "",
    },
    {
      skill: "JAVASCRIPT",
      image: "../assets/javascript-icon.svg",
      info: "DOM 조작을 통해 웹 페이지 요소들을 동적으로 조정하고, React와 같은 라이브러리를 사용할 수 있습니다.",
      rank: "",
    },
    {
      skill: "React",
      image: "../assets/reactjs-icon.svg",
      info: "Axios를 통한 API 통신, 비동기 처리(await/async 등) 등을 사용하여 SPA(Single Page Application)를 개발할 수 있습니다.",
      rank: "",
    },
    {
      skill: "Spring Boot",
      image: "../assets/springboot-icon.svg",
      info: "Axios를 이용한 프론트 엔드와의 API 통신, CRUD 작업, 페이징 처리, JWT를 이용한 사용자 인증 등을 구현할 수 있습니다.",
      rank: "",
    },
    {
      skill: "MySQL",
      image: "../assets/mysql-icon.svg",
      info: "기본적인 CRUD 쿼리문과 기본키/참조키를 사용하여 데이터베이스 작업이 가능합니다.",
      rank: "",
    },
    {
      skill: "Android",
      image: "../assets/android-icon.svg",
      info: "안드로이드 스튜디오를 이용하여 기본적인 UI 레이아웃 및 태그들을 이해하고, 비디오 및 오디오 파일 처리, DB 사용 등을 할 수 있습니다.",
      rank: "",
    },
    {
      skill: "ngrok",
      image: "../assets/ngrok-blue.svg",
      info: "로컬 개발 환경을 외부에 공개하여 웹 서비스나 API 개발 및 테스트 웹 사이트의 배포를 진행할 수 있습니다",
      rank: "",
    },
    {
      skill: "axios",
      image: "../assets/axios-icon.svg",
      info: "Axios를 이용하여 프론트엔드와 백엔드간의 api 통신을 사용해보았으며 비동기 데이터 처리등을 공부할수 있었습니다",
      rank: "",
    },
  ];

  const [skillinfo, setSkillinfo] = useState("Skills Click!!");

  function skillHandler(index) {
    setSkillinfo(skills[index].skill + " : " + skills[index].info);
  }

  return (
    <div className="main page3">
      <div className="page3_box">
        <motion.div
          className="page3_skill_info"
          initial={{ opacity: 0, x: 0 }} // 초기상태
          whileInView={{ opacity: 1, x: 0 }} // 화면에 들어올때 애니메이션
          viewport={{ once: true }}
          transition={{
            ease: "easeIn",
            duration: 1,
          }}
        >
          <Typewriter
            options={{
              strings: skillinfo,
              autoStart: true,
              delay: 30,
            }}
          ></Typewriter>
        </motion.div>
      </div>
      <div className="page3_box_semi">
        <div className="page3_box2">
          <div className="page3_box2_life">
            <motion.div
              className="page3_box_title"
              initial={{ opacity: 0, x: -200 }} // 초기상태
              whileInView={{ opacity: 1, x: 0 }} // 화면에 들어올때 애니메이션
              viewport={{ once: true }} // 한 번만 애니메이션을 실행하지 않도록 설정
              transition={{
                duration: 0.5,
                delay: 0,
                type: "spring",
                stiffness: 200,
              }}
            >
              Skills
            </motion.div>
            <motion.div
              className="page3_box_title"
              initial={{ opacity: 0, x: -200 }} // 초기상태
              whileInView={{ opacity: 1, x: 0 }} // 화면에 들어올때 애니메이션
              viewport={{ once: true }} // 한 번만 애니메이션을 실행하지 않도록 설정
              transition={{
                duration: 0.5,
                delay: 0.4,
                type: "spring",
                stiffness: 200,
              }}
            >
              and
            </motion.div>
            <motion.div
              className="page3_box_title"
              initial={{ opacity: 0, x: -200 }} // 초기상태
              whileInView={{ opacity: 1, x: 0 }} // 화면에 들어올때 애니메이션
              viewport={{ once: true }} // 한 번만 애니메이션을 실행하지 않도록 설정
              transition={{
                duration: 0.5,
                delay: 0.8,
                type: "spring",
                stiffness: 200,
              }}
            >
              Attributes
            </motion.div>
          </div>

          <div className="page3_box_skill_box">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="page3_box_skill_minibox"
                onClick={() => {
                  skillHandler(index);
                }}
                initial={{ opacity: 0, x: 200 }} // 초기상태
                whileInView={{ opacity: 1, x: 0 }} // 화면에 들어올때 애니메이션
                viewport={{ once: true }} // 애니메이션 여러번 실행
                transition={{
                  ease: "easeIn",
                  duration: 0.4,
                  delay: index * 0.05, // 인덱스에 따라 약간의 딜레이를 줍니다.
                }}
              >
                <img
                  className="page3_box_skill_minibox_img"
                  src={skill.image}
                  alt="skill"
                  style={{ width: "64px", height: "64px" }}
                ></img>
                <div className="page3_box_skill_skillname">{skill.skill}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main3;
