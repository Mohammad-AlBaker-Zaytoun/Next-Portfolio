"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Fragment } from "react";

const services = [
  {
    num: "01",
    title: "Full-Stack Web Development",
    description:
      "Next.js and React front ends with Node.js or PHP back ends, from landing pages to complete e-commerce platforms.",
    href: "/contact",
  },
  {
    num: "02",
    title: "Mobile App Development",
    description:
      "Flutter apps for Android and iOS, plus native Android development in Java.",
    href: "/contact",
  },
  {
    num: "03",
    title: "Backend, APIs & Databases",
    description:
      "Fast, reliable APIs, system integrations and SQL Server databases, including stored procedures, triggers and performance tuning.",
    href: "/contact",
  },
  {
    num: "04",
    title: "Messaging & CPaaS Integrations",
    description:
      "WhatsApp Cloud API, Messenger and Instagram, SMS and OTP, and VoIP, built for businesses and banks.",
    href: "/contact",
  },
  {
    num: "05",
    title: "Linux Servers & Networking",
    description:
      "Ubuntu servers, deployments and networking, set up and kept running smoothly.",
    href: "/contact",
  },
  {
    num: "06",
    title: "Payments & E-commerce Integrations",
    description:
      "Payment, shipping and marketplace integrations such as Whish, iCarry and OLX, backed by my own open-source SDKs.",
    href: "/contact",
  },
  {
    num: "07",
    title: "AI & Machine Learning",
    description:
      "AI features inside real products, such as automatic ticket classification and smart assistants, plus data analysis.",
    href: "/contact",
  },
  {
    num: "08",
    title: "Technical Consulting",
    description:
      "Architecture reviews, performance fixes and technical guidance for development teams.",
    href: "/contact",
  },
];

import { motion } from "framer-motion";

// keep hyphenated words (e.g. "E-commerce", "Full-Stack") on one line
const keepHyphenatedWords = (title) =>
  title.split(" ").map((word, i, words) => (
    <Fragment key={i}>
      {word.includes("-") ? (
        <span className="whitespace-nowrap">{word}</span>
      ) : (
        word
      )}
      {i < words.length - 1 ? " " : ""}
    </Fragment>
  ));

const Services = () => {
  return (
    <section className="min-h-[88vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    aria-label={`Contact me about ${service.title}`}
                    className="w-[70px] h-[70px] rounded-full
                  bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {keepHyphenatedWords(service.title)}
                </h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
