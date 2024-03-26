"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import SkillImage from "./SkillImage";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
        <div className="flex flex-wrap justify-center items-center gap-6">
        <SkillImage src="/images/html.png" height={65} width={65} alt="HTML" name="HTML" />
        <SkillImage src="/images/css.png" height={80} width={80} alt="CSS" name="CSS" />
        <SkillImage src="/images/js.png" height={60} width={60} alt="JavaScript" name="JavaScript" />
        <SkillImage src="/images/react.png" height={70} width={65} alt="React" name="React" />
        <SkillImage src="/images/python.png" height={65} width={65} alt="Python" name="Python" />
        <SkillImage src="/images/java.png" height={80} width={80} alt="Java" name="Java" />
        <SkillImage src="/images/angular.png" height={80} width={80} alt="Angular" name="Angular" />
        <SkillImage src="/images/next.png" height={65} width={65} alt="Next.js" name="Next.js" />
        <SkillImage src="/images/ts.png" height={60} width={65} alt="TypeScript" name="TypeScript" />
        <SkillImage src="/images/ReactNative .png" height={65} width={65} alt="React-native" name="React-native" />
        <SkillImage src="/images/expo.png" height={60} width={65} alt="Expo" name="Expo" />
        <SkillImage src="/images/node-js.png" height={65} width={65} alt="Node.js" name="Node.js" />
        <SkillImage src="/images/aws.png" height={90} width={90} alt="AWS" name="AWS" />
        <SkillImage src="/images/github.png" height={65} width={65} alt="Git" name="Git" />
        <SkillImage src="/images/mysql.png" height={65} width={65} alt="MYSQL" name="MYSQL" />
        <SkillImage src="/images/postger.png" height={65} width={65} alt="PostgreSQL" name="PostgreSQL" />
        <SkillImage src="/images/flask.png" height={65} width={65} alt="Flask" name="Flask" />
        
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
        <section className="text-transparent bg-clip-text text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Bachelor of Science</h2>
        <div className="bg-clip-text bg-gradient-to-br from-blue-800 via-green-300 to-green-700">        
        <p className="text-lg font-semibold mb-2 italic">Concordia University of Edmonton</p>
        <p className="text-lg font-semibold mb-2 italic">Alberta, Canada</p>
        <p className="text-lg mb-2"> Major: Information Technology (IT)</p>
        <p className="text-lg mb-2">Minor: Mathematics</p>
        <p className="text-lg mb-2">January 2020 – December 2023</p>
        <p className="text-lg mb-2">GPA: 3.48 / 4</p>
        </div>

      </section>
      
    ),
  },
  
];

const Aboutme = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/aboutme.png" width={500} height={500} className="rounded-lg" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8 ">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="p-8 justify-center items-center bg-opacity-20 bg-gray-100  text-black rounded-lg">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Aboutme;