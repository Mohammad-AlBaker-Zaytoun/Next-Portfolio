"use client";

import { FaHtml5, FaCss3, FaJs, FaNodeJs, FaJava, FaPhp } from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiMicrosoftsqlserver,
  SiMysql,
  SiSqlite,
  SiMongodb,
  SiJupyter,
  SiInternetcomputer,
  SiGooglechrome,
  SiPython,
} from "react-icons/si";

//about data
const about = {
  title: "About me",
  decsription:
    "Adaptable software engineer with a strong foundation in NodeJS environments (Express - NextJS - HapiJS). Proven ability to quickly learn new technologies and lead development teams. Committed to delivering high-quality, scalable, and maintainable web and android applications. Additionally to experience and skills in Machine Learning and AI.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Mohammad Zaytoun",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+961) 71 480 594",
    },
    {
      fieldName: "Experience",
      fieldValue: "5+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Mohammad Zaytoun",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Lebanese",
    },
    {
      fieldName: "Email",
      fieldValue: "mabzaytoun@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Langauges",
      fieldValue: "English, Arabic",
    },
  ],
};

const certifications = {
  items: [
    {
      institution: "Cisco Networking Academy",
      certificate:
        "NDG Linux Unhatched course in the Cisco  Working in group  Public Speaking  Networking Academy",
    },
    {
      institution: "Forward Mena",
      certificate: "Advanced Full Stack Development with AI",
    },
    {
      institution: "Cisco Networking Academy",
      certificate:
        "PCAP: Programming Essentials in Python provided  by Cisco Networking Academy",
    },
    {
      institution: "Cisco Networking Academy",
      certificate: "Introduction to Cybersecurity by Cisco Networking Academy",
    },
    {
      institution: "Cisco Networking Academy",
      certificate: "Introduction to IoT by Cisco Networking Academy",
    },
    {
      institution: "IEEE",
      certificate:
        "IEEE Lebanon Entrepreneurship Summit: Smart  Sustainable Cities",
    },
    {
      institution: "Udemy",
      certificate: "Master in Microsoft Power BI Desktop and Service",
    },
    {
      institution: "Udemy",
      certificate: "MySQL Database Development Mastery",
    },
    {
      institution: "Udemy",
      certificate: "SQL Programming and MySQL",
    },
    {
      institution: "Udemy",
      certificate: "The Complete SQL Course 2021: Become a MYSQL Master",
    },
    {
      institution: "Udemy",
      certificate: "Comprehensive SQL Bootcamp : Beginner to Advanced",
    },
    {
      institution: "Udemy",
      certificate:
        "Git from Basics to Advanced: Practical Guide for Developers",
    },
    {
      institution: "Udemy",
      certificate: "Deep Web- The complete Introduction to the hidden web",
    },
    {
      institution: "Udemy",
      certificate: "Reverse Engineering and Memory Hacking with Cheat Engine",
    },
    {
      institution: "Udemy",
      certificate: "Learn Ethical Hacking From A-Z: Beginner To Expert Course",
    },
    {
      institution: "Udemy",
      certificate: "Microsoft Power BI DAX from Scratch",
    },
    {
      institution: "Udemy",
      certificate: "Object Oriented Programming Basics to Advance  (Java OOP)",
    },
  ],
};

//education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  decsription:
    "Discover the academic milestones and certifications that have built a solid foundation for my career.",
  items: [
    {
      //1
      institution: "Al Maaref University",
      degree: "Computer Science",
      duration: "2019 - 2022",
      gpa: "3.5/4",
    },
  ],
};

//experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  decsription:
    "Explore the journey of my professional growth, highlighting impactful roles and achievements that have shaped my expertise.",
  items: [
    {
      //1
      company: "Protel S.A.L Offshore",
      position: "Senior Softwar Engineer",
      duration: "March 2023 - Present",
    },
    {
      //2
      company: "Flyesim",
      position: "Backend Development Team Lead",
      duration: "January 2024 - Present",
    },
    {
      //3
      company: "Zaytoun Solutions",
      position: "Founder & CEO",
      duration: "January 2025 - Present",
    },
    {
      //4
      company: "Computer Repair Service",
      position: "Founder",
      duration: "April 2018 - 2025",
    },
    {
      //5
      company: "Lancaster Tamar Hotel",
      position: "Head of IT Department",
      duration: "December 2022 - March 2023",
    },
    {
      //6
      company: "Mining Tech",
      position: "Engineering Technician",
      duration: "July 2021 - September 2022",
    },
    {
      //7
      company: "LouLoua TV",
      position: "Senior IT Assistant",
      duration: "July 2022 - August 2022",
    },
    {
      //8
      company: "Al Maaref University",
      position: "Teacher Assistant",
      duration: "February 2020 - April 2022",
    },
    {
      //9
      company: "Zaytoun Edits",
      position: "Graphic Designer - Freelance",
      duration: "July 2015 - September 2021",
    },
    {
      //10
      company: "Al Bachaer Radio Station",
      position: "Installation & Maintenance Assistant",
      duration: "June 2018 - December 2019",
    },
  ],
};

//skills data
const skills = {
  title: "My skills",
  decsription:
    "Uncover a diverse set of technical and creative skills that showcase my ability to deliver exceptional results.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <SiMicrosoftsqlserver />,
      name: "mssql",
    },
    {
      icon: <SiMysql />,
      name: "mysql",
    },
    {
      icon: <SiSqlite />,
      name: "sqlite",
    },
    {
      icon: <SiMongodb />,
      name: "nosql",
    },
    {
      icon: <SiJupyter />,
      name: "data analysis - analytics",
    },
    {
      icon: <SiInternetcomputer />,
      name: "IT operations, consulting, manager",
    },
    {
      icon: <SiGooglechrome />,
      name: "fix computers - laptops",
    },
    {
      icon: <SiPython />,
      name: "Machine Learning",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center
      justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList
            className="flex flex-col w-full max-w-[350px]
          mx-auto xl:mx-0 gap-6"
          >
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.decsription}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6
                        px-10 rounded-xl flex flex-col justify-center  items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] min-h-[60px]
                          text-center lg:text-left"
                          >
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left ">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.decsription}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] ">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6
                        px-10 rounded-xl flex flex-col justify-center  items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3
                            className="text-xl max-w-[260px] 
                          text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>
                          <h2 className="min-h-[60px]">GPA: {item.gpa}</h2>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                    <span></span>
                    <span className="text-accent content-start font-black">
                      Certifications:
                    </span>
                    <li></li>
                    {certifications.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6
                        px-10 rounded-xl flex flex-col justify-center  items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">
                            {item.certificate}
                          </span>
                          <h3
                            className="text-xl max-w-[260px] 
                          text-center lg:text-left"
                          >
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.decsription}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-[25px] ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.decsription}
                </p>
                <ul
                  className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]
                mx-auto xl:mx-0"
                >
                  {about.info.map((item, index) => {
                    return (
                      <li
                        className="flex items-center justify-center xl:justify-start gap-4"
                        key={index}
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
