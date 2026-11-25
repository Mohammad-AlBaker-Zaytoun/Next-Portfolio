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
    title: "Zaytoun Solutions",
    description:
      "Business platform for Zaytoun Solutions: company website, e-commerce store, academy and admin back office.",
    stack: [
      { name: "Next.Js" },
      { name: "TypeScript" },
      { name: "Firebase" },
      { name: "Supabase" },
    ],
    image: "/assets/work/zaytoun-solutions.jpg",
    live: "https://zaytounsolutions.com",
    github: "",
  },
  {
    num: "02",
    category: "Fullstack",
    title: "CPaaS Platform",
    description:
      "Communications platform at Protel for business messaging over WhatsApp, Messenger and Instagram, with flows, ticketing and reseller accounts. Full-stack development plus the networking and Ubuntu server engineering behind it.",
    stack: [
      { name: "PHP" },
      { name: "SQL Server" },
      { name: "Node.Js" },
      { name: "Ubuntu" },
    ],
    image: "/assets/work/cpaas-platform.jpg",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Backend",
    title: "SMS & WhatsApp OTP Service",
    description:
      "One-time password service at Protel that sends verification codes over SMS and WhatsApp, integrated with banks for secure customer verification.",
    stack: [{ name: "Node.Js" }, { name: "PHP" }, { name: "SQL Server" }],
    image: "/assets/work/otp-service.jpg",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Fullstack",
    title: "Ticketing System",
    description:
      "Ticketing system at Protel for issues between telecom carriers, with live email monitoring over SMTP, AI classification of incoming tickets and a live dashboard.",
    stack: [
      { name: "PHPRunner" },
      { name: "PHP" },
      { name: "SQL Server" },
      { name: "AI" },
    ],
    image: "/assets/work/ticketing-system.jpg",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Fullstack",
    title: "Voucher Platform",
    description:
      "Voucher and wallet platform built at Protel for Syriatel, similar to the Whish Money app.",
    stack: [{ name: "PHP" }, { name: "SQL Server" }],
    image: "/assets/work/voucher-platform.jpg",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "Fullstack",
    title: "HR System",
    description: "Full-stack human resources system built at Protel.",
    stack: [
      { name: "PHP" },
      { name: "PHPRunner" },
      { name: "SQL Server" },
      { name: "Node.Js" },
    ],
    image: "/assets/work/hr-system.jpg",
    live: "",
    github: "",
  },
  {
    num: "07",
    category: "Fullstack",
    title: "FlashCalls Prevention",
    description:
      "Call firewall at Protel that automatically checks calls for spam, fraud and flash calls and blocks them, with SMTP, SMS and VoIP integration.",
    stack: [
      { name: "PHP" },
      { name: "SQL Server" },
      { name: "Ubuntu" },
      { name: "VoIP" },
    ],
    image: "/assets/work/flashcalls-prevention.jpg",
    live: "",
    github: "",
  },
  {
    num: "08",
    category: "Fullstack",
    title: "Soléna",
    description:
      "Skincare e-commerce store with subscriptions, Whish payments, newsletters and a full admin dashboard.",
    stack: [{ name: "Next.Js" }, { name: "Firebase" }, { name: "Supabase" }],
    image: "/assets/work/solena-store.jpg",
    live: "https://www.mysolena.com",
    github: "",
  },
  {
    num: "09",
    category: "Fullstack",
    title: "Pro Tuning",
    description:
      "Car performance tuning store with a product catalog, cart, quote requests, order tracking and an admin dashboard.",
    stack: [
      { name: "Next.Js" },
      { name: "TypeScript" },
      { name: "Tailwind Css" },
    ],
    image: "/assets/work/pro-tuning-shop.jpg",
    live: "https://protuningshop.com",
    github: "",
  },
  {
    num: "10",
    category: "Mobile",
    title: "Zaytoun Store App",
    description:
      "Flutter shopping app for Zaytoun Store on Android and iOS: catalog, search, favorites and a saved cart.",
    stack: [{ name: "Flutter" }, { name: "Dart" }],
    image: "/assets/work/zaytoun-store-app.jpg",
    live: "",
    github: "",
  },
  {
    num: "11",
    category: "Open source",
    title: "whish-pay",
    description:
      "Type-safe Node.js SDK for Whish Money payments, published on npm. Zero dependencies, works with any framework.",
    stack: [{ name: "TypeScript" }, { name: "Node.Js" }],
    image: "/assets/work/whish-pay.jpg",
    live: "https://www.npmjs.com/package/whish-pay",
    github: "https://github.com/Mohammad-AlBaker-Zaytoun/whish-pay",
  },
  {
    num: "12",
    category: "Open source",
    title: "icarry-sdk",
    description:
      "Type-safe client for the iCarry shipping API, published on npm: rates, shipments, tracking and payments.",
    stack: [{ name: "TypeScript" }, { name: "Node.Js" }],
    image: "/assets/work/icarry-sdk.jpg",
    live: "https://www.npmjs.com/package/icarry-sdk",
    github: "https://github.com/Mohammad-AlBaker-Zaytoun/icarry-sdk",
  },
  {
    num: "13",
    category: "Open source",
    title: "olx-lebanon-sdk",
    description:
      "SDK, CLI and REST service for posting and managing your own OLX Lebanon ads from Node.js, published on npm.",
    stack: [{ name: "TypeScript" }, { name: "Node.Js" }],
    image: "/assets/work/olx-lebanon-sdk.jpg",
    live: "https://www.npmjs.com/package/olx-lebanon-sdk",
    github: "https://github.com/Mohammad-AlBaker-Zaytoun/olx-lebanon-sdk",
  },
  {
    num: "14",
    category: "Backend",
    title: "Flyesim",
    description: "Esim services provider.",
    stack: [
      { name: "Node.Js" },
      { name: "MongoDB" },
      { name: "Firebase" },
      { name: "Supabase" },
    ],
    image: "/assets/work/flyesim.jpg",
    live: "https://flyesim.net",
    github: "",
  },
  {
    num: "15",
    category: "Fullstack",
    title: "QR Menu",
    description: "QR Menu SAAS system for rest-caffe with admin area",
    stack: [
      { name: "Next.Js" },
      { name: "Firebase" },
      { name: "Supabase" },
      { name: "Tailwind Css" },
    ],
    image: "/assets/work/qr-menu.jpg",
    live: "https://qr-menu-bay.vercel.app",
    github: "",
  },
  {
    num: "16",
    category: "Fullstack",
    title: "Pancake Paradise",
    description: "Beautiful landing page for a pancake shop startup.",
    stack: [
      { name: "Next.Js" },
      { name: "Html 5" },
      { name: "Tailwind Css" },
      { name: "Javascript" },
    ],
    image: "/assets/work/pancake-paradise.jpg",
    live: "https://pancake-world.vercel.app",
    github: "https://github.com/Mohammad-AlBaker-Zaytoun/pancake-world",
  },
  {
    num: "17",
    category: "Fullstack",
    title: "VivaPain",
    description:
      "Android application that will help you in your fitness road from food routine to workout routines with professional trainers and great system flow.",
    stack: [{ name: "Node.Js" }, { name: "Java" }, { name: "MongoDB" }],
    image: "/assets/work/vivapain.jpg",
    live: "",
    github: "https://github.com/Mohammad-AlBaker-Zaytoun/VIVAPAINNoPainNoGain",
  },
  {
    num: "18",
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
    image: "/assets/work/todo-app.jpg",
    live: "https://todos-three-sage.vercel.app",
    github: "https://github.com/Mohammad-AlBaker-Zaytoun/Todo-next-WebApp",
  },
  {
    num: "19",
    category: "frontend",
    title: "YouTube Playlist Calculator",
    description: "Calculate your playlists time easily.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/youtube-playlist-calculator.jpg",
    live: "https://youtube-length-calculator.netlify.app",
    github:
      "https://github.com/Mohammad-AlBaker-Zaytoun/YouTube-Playlist-Calculator",
  },
  {
    num: "20",
    category: "frontend",
    title: "Arabic Arabic Converter for Adobe",
    description:
      "Converts Arabic text to Adobe like format for designers, video editors and animators.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/arabic-converter.jpg",
    live: "https://arabic-typer.netlify.app",
    github:
      "https://github.com/Mohammad-AlBaker-Zaytoun/arabic-arabic-converter",
  },
  {
    num: "21",
    category: "frontend",
    title: "Finite State Machine Designer",
    description: "Design your finite state machines here.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/fsm-designer.jpg",
    live: "https://madebyzaytoun-fsm.netlify.app",
    github:
      "https://github.com/Mohammad-AlBaker-Zaytoun/Finite-State-Machine-Designer",
  },
  {
    num: "22",
    category: "Backend",
    title: "Muslim Prayers API",
    description:
      "API that will serve every Muslim his prayer times, calendar, Hijri dates, etc.",
    stack: [{ name: "Node.Js" }],
    image: "/assets/work/prayers-api.jpg",
    live: "",
    github: "https://github.com/Mohammad-AlBaker-Zaytoun/Prayers-API",
  },
  {
    num: "23",
    category: "Fullstack",
    title: "Zaytoun CRS",
    description: "Frontpage for the computer repair service zaytoun crs",
    stack: [{ name: "Weebly" }],
    image: "/assets/work/zaytoun-crs.jpg",
    live: "https://zaitouncrs.weebly.com/",
    github: "",
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
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {project.title}
              </h2>
              <h3 className="capitalize leading-none text-white group-hover:text-accent transition-all duration-500 -mt-3 mb-2">
                {project.category} Project
              </h3>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
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
                {project.live && (
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                )}
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
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
                )}
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
                    <div className="aspect-[1200/944] xl:aspect-auto xl:h-[460px] relative group flex justify-center items-center">
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
