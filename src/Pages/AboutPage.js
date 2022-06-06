import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
import ServicesSection from "../Components/ServicesSection";
import design from "../img/design.svg";
import intelligence from "../img/intelligence.svg";

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} span={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} span={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"HTML5"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"CSS3"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"Bootstrap"} progress={"95%"} width={"95%"} />
        <SkillsSection skill={"Javascript"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"React Js"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"React-Native"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Python"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"Node Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Firebase"} progress={"75%"} width={"75%"} />
        <SkillsSection skill={"Mongodb"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"SqlLite3"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"PostgreSQL"} progress={"70%"} width={"70%"} />
        <SkillsSection skill={"MySQL"} progress={"75%"} width={"75%"} />
        <SkillsSection skill={"GitHUB"} progress={"75%"} width={"75%"} />
      </div>

      <Tittle title={"Services"} span={"Services"} />
      <div className="servives-container">
        <ServicesSection
          image={design}
          title={"Front-End Development"}
          text={
            "I will create responsive web design using HTML, CSS, Bootstrap, Material-UI, Javascript, ReactJS, Redux & PhotoShop. I can design any kind of responsive web site."
          }
        />
        <ServicesSection
          image={intelligence}
          title={"Full Stack Development"}
          text={
            "I will create responsive web site and development using HTML, CSS, Bootstrap, Material-UI, JavaScript, ReactJS, Redux on the front end and ExpressJS, NodeJS, MongoDB, SQLite, PostgreSQL, Firebase on the back end. My goal is to build or develop your website with my best effort. And feel free to get in touch with any questions."
          }
        />
      </div>
    </div>
  );
}

export default AboutPage;
