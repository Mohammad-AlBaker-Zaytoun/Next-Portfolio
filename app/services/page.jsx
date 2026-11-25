"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { Fragment } from "react";
import { services, contactHref } from "@/lib/services";
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
                className="flex-1 flex flex-col justify-start gap-6 group"
              >
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={contactHref(service.title)}
                    aria-label={`Contact me about ${service.title}`}
                    className="w-[70px] h-[70px] rounded-full
                  bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                <h2 className="text-[36px] sm:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
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
