"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
import {
  about,
  experience,
  education,
  certifications,
} from "@/lib/resume";
import { skills } from "@/lib/skills";

const skillsSection = {
  title: "My skills",
  description:
    "The languages, frameworks and platforms I use to build and run products.",
};

// On phones the lists flow with the page; from xl they scroll inside the panel.
const scrollBox = "xl:h-[440px]";

const Card = ({ children }) => (
  <li className="bg-[#232329] py-6 px-8 rounded-xl flex flex-col items-center lg:items-start text-center lg:text-left gap-2">
    {children}
  </li>
);

const Bullet = ({ children }) => (
  <div className="flex items-center gap-3">
    <span className="w-[6px] h-[6px] rounded-full bg-accent shrink-0"></span>
    <p className="text-white/60">{children}</p>
  </div>
);

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[350px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className={scrollBox}>
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] xl:pr-4">
                    {experience.items.map((item, index) => (
                      <Card key={index}>
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl">{item.position}</h3>
                        <Bullet>{item.company}</Bullet>
                        {item.summary && (
                          <p className="text-sm leading-relaxed text-white/50">
                            {item.summary}
                          </p>
                        )}
                      </Card>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className={scrollBox}>
                  <div className="flex flex-col gap-[30px] xl:pr-4">
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {education.items.map((item, index) => (
                        <Card key={index}>
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl">{item.degree}</h3>
                          <p className="text-white/80">{item.details}</p>
                          <Bullet>{item.institution}</Bullet>
                        </Card>
                      ))}
                      {education.honors.map((item, index) => (
                        <Card key={`h${index}`}>
                          <span className="text-accent">{item.year}</span>
                          <h3 className="text-xl">{item.title}</h3>
                          <Bullet>Honors & awards</Bullet>
                        </Card>
                      ))}
                    </ul>

                    <h4 className="text-2xl font-bold text-accent">
                      Certifications
                    </h4>
                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                      {certifications.map((item, index) => (
                        <Card key={index}>
                          <h3 className="text-lg">{item.certificate}</h3>
                          <Bullet>{item.institution}</Bullet>
                        </Card>
                      ))}
                    </ul>
                  </div>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skillsSection.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skillsSection.description}
                  </p>
                </div>
                <ScrollArea className={scrollBox}>
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-4 xl:gap-[20px] xl:pr-4">
                    {skills.map(({ Icon, name }) => (
                      <li
                        key={name}
                        className="h-[130px] bg-[#232329] rounded-xl flex flex-col justify-center items-center gap-3 px-2 group"
                      >
                        <Icon className="text-5xl group-hover:text-accent transition-all duration-300" />
                        <span className="text-sm text-white/70 text-center">
                          {name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[700px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 gap-x-8 max-w-[680px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => (
                    <li
                      className="flex items-center justify-center xl:justify-start gap-4"
                      key={index}
                    >
                      <span className="text-white/60">{item.fieldName}</span>
                      <span className="text-xl">{item.fieldValue}</span>
                    </li>
                  ))}
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
