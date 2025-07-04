"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Senior Web Development",
    description: "Turning complex challenges into elegant web solutions.",
    href: "",
  },
  {
    num: "02",
    title: "Android Native Development",
    description: "Crafting seamless, native Android apps with Java.",
    href: "",
  },
  {
    num: "03",
    title: "Information Technology Administrator",
    description:
      "Experienced IT professional providing technical support and network administration services.",
    href: "",
  },
  {
    num: "04",
    title: "Senior Backend Development",
    description:
      "Expert backend engineer designing and implementing efficient, high-performance APIs, leading the development of complex backend systems.",
    href: "",
  },

  {
    num: "05",
    title: "Data Analysis & Analytics",
    description:
      "Professional responsible for collecting, interpreting, and visualizing data to help organizations make informed decisions.",
    href: "",
  },
  {
    num: "06",
    title: "Machine Learning Engineer",
    description:
      "Professional who builds, trains, and deploys machine learning models to solve real-world problems.",
    href: "",
  },
];

import { motion } from "framer-motion";

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
                    className="w-[70px] h-[70px] rounded-full
                  bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
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
