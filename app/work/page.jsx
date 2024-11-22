"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Fullstack",
    title: "Pancake Paradise",
    description: "Beautiful landing page for a pancake shop startup.",
    stack: [
      { name: "Next.Js" },
      { name: "Html 5" },
      { name: "Tailwind Css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/panpar.png",
    live: "https://pancake-world.vercel.app",
    github: "https://github.com/Mohammad-AlBaker-Zaytoun/pancake-world",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "Todos",
    description:
      "A todo list management web app that will make your life easier.",
    stack: [
      { name: "Next.Js" },
      { name: "Html 5" },
      { name: "Tailwind Css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/todos.png",
    live: "https://todos-three-sage.vercel.app",
    github: "https://github.com/Mohammad-AlBaker-Zaytoun/Todo-next-WebApp",
  },
  {
    num: "03",
    category: "frontend",
    title: "Youtube playlist calculator",
    description: "Calculate your playlists time easily.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/ytc.png",
    live: "https://youtube-length-calculator.netlify.app",
    github:
      "https://github.com/Mohammad-AlBaker-Zaytoun/YouTube-Playlist-Calculator",
  },
  {
    num: "04",
    category: "frontend",
    title: "Arabic Arabic Converter for Adobe",
    description:
      "Converts Arabic text to Adobe like format for designers, video editors and animators.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/eaw.png",
    live: "https://arabic-typer.netlify.app",
    github:
      "https://github.com/Mohammad-AlBaker-Zaytoun/arabic-arabic-converter",
  },
  {
    num: "05",
    category: "frontend",
    title: "Finite State Machine Designer",
    description: "Design your finite state machines here.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/fsma.png",
    live: "https://madebyzaytoun-fsm.netlify.app",
    github:
      "https://github.com/Mohammad-AlBaker-Zaytoun/Finite-State-Machine-Designer",
  },
  {
    num: "06",
    category: "Backend",
    title: "Muslim Prayers API",
    description:
      "API that will serve every muslim his prayer times, calender, hijri dates, etc.",
    stack: [{ name: "Node.Js" }],
    image: "/assets/work/mapi.jpg",
    live: "https://github.com/Mohammad-AlBaker-Zaytoun/Prayers-API",
    github: "https://github.com/Mohammad-AlBaker-Zaytoun/Prayers-API",
  },
  {
    num: "07",
    category: "Backend",
    title: "Flyesim",
    description: "Esim services provider.",
    stack: [{ name: "Node.Js" }, { name: "MongoDB" }],
    image: "/assets/work/fe.png",
    live: "https://flyesim.net",
    github: "https://flyesim.net",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div
            className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
          xl:justify-between order-2 xl:order-none"
          >
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title}
              </h2>
              <h3 className="capitalize leading-none text-white group-hover:text-accent transition-all duration-500 -mt-3 mb-2">
                {project.category} Project
              </h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px]
            mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-gull">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50-20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
