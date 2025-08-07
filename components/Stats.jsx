"use client";

import CountUp from "react-countup";
import { Plus } from "lucide-react";

const stats = [
  {
    num: 5,
    text: "Years of experience",
  },
  {
    num: 31,
    text: "Projects Completed",
  },
  {
    num: 4,
    text: "Technologies mastered",
  },
  {
    num: 600,
    text: "Code commits",
    showPlus: true, // Add this flag to show plus icon
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div
          className="flex flex-wrap gap-6 max-w-[80vw]
        mx-auto xl:max-w-none"
        >
          {stats.map((item, index) => {
            return (
              <div
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
                key={index}
              >
                <div className="flex items-center">
                  <CountUp
                    end={item.num}
                    duration={5}
                    delay={2}
                    className="text-4xl xl:text-6xl font-extrabold"
                  />
                  {item.showPlus && (
                    <Plus
                      className="w-5 h-5 xl:w-7 xl:h-7 text-white ml-1"
                      strokeWidth={3.5}
                    />
                  )}
                </div>
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } loading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
