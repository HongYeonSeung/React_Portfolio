import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Typewriter from "typewriter-effect";
import { motion } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

function Main4() {
  const projects = [
    {
      title: "StarBucks",
      image: "assets/statbucks1.png",
      image2: "assets/statbucks2.png",
      image3: "assets/statbucks4.png",
      info: "FastCampus에서 '프론트엔드 개발 완전정복 패키지' Part.1 온라인 강의 수강한 후 클론 코딩을 통해  HTML, CSS 및 JavaScript 기초를 다룬 첫 웹사이트를 제작했습니다.",
      git: "https://github.com/HongYeonSeung/starbucks?tab=readme-ov-file",
      link: "https://shiny-bunny-eccbea.netlify.app/",
    },
    {
      title: "maple_newname_2024",
      image: "assets/newname.png",
      info: `메이플스토리의 닉네임 옥션이 열리면서 많은 유저들이 원하는 닉네임을 찾기 위해 검색 기능을 자주 사용하게 되었습니다. 하지만 공식 홈페이지의 검색 기능이 미흡하고 불편한 점이 많아, 유저들이 더 편리하게 사용할 수 있는 자체 검색 툴을 개발하게 되었습니다. 특히, 초성 검색 기능과 세부적인 필터링 옵션을 추가하여 유저들이 더 쉽게 닉네임을 찾을 수 있도록 했습니다.`,
      git: "https://github.com/HongYeonSeung/Maple_NewName_2024",
      link: "https://maple-newname-2024.netlify.app/",
    },
    {
      title: "CrimsonDesert",
      image: "assets/CrimsonDesert.jpg",
      image2: "assets/CrimsonDesert2.png",
      image3: "assets/CrimsonDesert3.png",
      image4: "assets/CrimsonDesert4.png",
      info: "출시예정 게임인 붉은사막의 티저를 보고 게임 웹사이트를 제작해보자라는 동기로 제작하였습니다, React를 사용하여 동영상 통합, 웹 스크롤 감지 및 React Swiper와 같은 다양한 라이브러리를 활용했습니다.",
      git: "https://github.com/HongYeonSeung/React_CrimsonDesert",
      link: "https://hongyeonseung.github.io/React_CrimsonDesert",
    },
    {
      title: "YSCoding",
      image: "assets/yscoding.png",
      image2: "assets/yscoding2.png",
      image3: "assets/yscoding3.png",
      image4: "assets/yscoding4.png",
      info: "대학교 캡스톤 디자인 과제로 제출한 첫 팀 프로젝트 결과물. React와 SpringBoot를 사용하여 경매 시스템을 개발했습니다. 프론트엔드 백엔드 API 통신, JWT를 사용한 사용자 인증 및 비동기 데이터 처리에 대해 배웠으며, 프론트엔드, 백엔드 및 데이터베이스 상호작용의 기본 작동 방식에 대한 이해를 기를 수 있었습니다",
      git: "https://github.com/HongYeonSeung/YSCoding",
    },
  ];

  const [projectsList, setProjectsList] = useState(null);

  function projectHandler(index) {
    setProjectsList(projects[index]);
    console.log(projectsList);
  }

  return (
    <div className="main page4">
      <div className="page4_mainBox">
        <div className="page4_title">
          <svg className="svg1" viewBox="0 0 1500 160">
            <text x="50%" y="50%" dy="0.3em" text-anchor="middle">
              Project
            </text>
          </svg>
        </div>
        <div className="page4_Box">
          <div className="page4_Box_left">
            <div className="page4_Box_left_top">Projects List </div>
            {projects.map((project, index) => (
              <div className="page4_Box_left_box" key={index}>
                <motion.div
                  className="page4_Box_left_title"
                  onClick={() => projectHandler(index)}
                  initial={{ opacity: 0, x: -200 }} // 초기상태
                  whileInView={{ opacity: 1, x: 0 }} // 화면에 들어올때 애니메이션
                  viewport={{ once: true }} // 애니메이션 여러번 실행
                  transition={{
                    duration: 0.25,
                    delay: index * 0.2, // 인덱스에 따라 약간의 딜레이를 줍니다.
                  }}
                >
                  {/* <div
                    className="page4_Box_left_title"
                    onClick={() => projectHandler(index)}
                  > */}
                  {project.title}
                  {/* </div> */}
                </motion.div>
              </div>
            ))}
          </div>

          <div className="page4_Box_right">
            {projectsList && (
              <div className="page4_Box_right_title">
                <p>
                  <Typewriter
                    options={{
                      strings: projectsList.title,
                      autoStart: true,
                      delay: 40,
                    }}
                  ></Typewriter>
                </p>

                <motion.div
                  key={projectsList.title} // key를 projectsList.title로 설정
                  initial={{ opacity: 0, x: 0 }} // 초기상태
                  animate={{ opacity: 1, x: 0 }} // 애니메이션 상태
                  transition={{
                    ease: "easeIn",
                    delay: 0.7,
                    duration: 0.5,
                  }}
                >
                  <Swiper
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper"
                  >
                    <SwiperSlide>
                      <img src={projectsList.image} alt={projectsList.title} />
                    </SwiperSlide>
                    {projectsList.image2 && (
                      <SwiperSlide>
                        <img
                          src={projectsList.image2}
                          alt={projectsList.title}
                        />
                      </SwiperSlide>
                    )}
                    {projectsList.image3 && (
                      <SwiperSlide>
                        <img
                          src={projectsList.image3}
                          alt={projectsList.title}
                        />
                      </SwiperSlide>
                    )}
                    {projectsList.image4 && (
                      <SwiperSlide>
                        <img
                          src={projectsList.image4}
                          alt={projectsList.title}
                        />
                      </SwiperSlide>
                    )}
                  </Swiper>
                </motion.div>

                <motion.div
                  key={`${projectsList.title}-info`} // key를 고유하게 설정
                  initial={{ opacity: 0, x: 0 }} // 초기상태
                  animate={{ opacity: 1, x: 0 }} // 애니메이션 상태
                  transition={{
                    ease: "easeIn",
                    delay: 1,
                    duration: 0.5,
                  }}
                >
                  <div className="page4_Box_right_info_box">
                    <div className="page4_Box_right_info">
                      {projectsList.info}
                    </div>
                    <div className="page4_Box_right_info_box_right">
                      <div className="page4_Box_right_git">
                        {projectsList.git && (
                          <a href={projectsList.git}>
                            <img
                              className="project_git_svg"
                              src="assets/git.svg"
                              alt="깃허브링크"
                              style={{ height: "2.5rem", width: "2.5rem" }}
                            />
                            <div>GitHub</div>
                          </a>
                        )}
                      </div>
                      <div className="page4_Box_right_link">
                        {projectsList.link && (
                          <a href={projectsList.link}>
                            <img
                              className="project_link_svg"
                              src="assets/link.svg"
                              alt="바로가기"
                              style={{ height: "2.5rem", width: "2.5rem" }}
                            />
                            <div>Link</div>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main4;
