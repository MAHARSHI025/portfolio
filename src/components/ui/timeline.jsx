"use client";;
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

const data = [
  {
    title: "2022",
    content: (
      <div>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Started my journey in Computer Engineering at Sal institute of technology & engineering research
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF-dryIdJYB6aEV-XMR942oUvdv5_yUaV36w&s"
            alt="startup template"
            className=" w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] "
          />
        </div>

        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200 mt-10">
          Started my web development journey by learning HTML, CSS, and JavaScript.
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Working on small projects to enhance my skills. and started learning React.js and Next.js.
        </p>
        <div className="flex gap-7 flex-wrap">

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/React_Logo_SVG.svg/1200px-React_Logo_SVG.svg.png"
            alt="hero template"
            className=" rounded-lg object-cover h-10 drop-shadow-2xl "
          />

          <img
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            alt="hero template"
            className=" rounded-lg object-cover h-10 drop-shadow-2xl "
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6bebC_d4eWwJ-x9ntqDuT94TvOgumSBVWHg&s"
            alt="hero template"
            className=" rounded-lg object-cover h-10 drop-shadow-2xl "
          />
          <img
            src="https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
            alt="hero template"
            className=" rounded-lg object-cover h-10 drop-shadow-2xl "
          />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSITHn_TgjDyhdWvePNw0mveDrTUr00GLfv_Q&s"
            alt="hero template"
            className=" rounded-lg object-cover h-10 drop-shadow-2xl "
          />
          <img
            src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
            alt="hero template"
            className=" rounded-lg object-cover h-10 drop-shadow-2xl "
          />
          <img
            src="https://images.seeklogo.com/logo-png/27/1/mysql-logo-png_seeklogo-273735.png"
            alt="hero template"
            className=" rounded-lg object-cover h-10 drop-shadow-2xl "
          />

        </div>
      </div>
    ),
  },
  {
    title: "Working on Projects",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Deployed 3 new Projects on Vercel
        </p>
        <div className="mb-8">
          <ul className="list-disc list-inside text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            <li className="mb-2">
              Thoughter Web App - A Twitter Clone built with Next.js and Tailwind CSS.
            </li>
            <li className="mb-2">
              Portfolio Website - My personal portfolio website built with React.js and Tailwind CSS.
            </li>
            <li className="mb-2">
              Founder Web App - A B to B connection platform built with All learned technologies.
            </li>
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://assets.aceternity.com/pro/hero-sections.png"
            alt="hero template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/features-section.png"
            alt="feature template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/pro/bento-grids.png"
            alt="bento template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
          <img
            src="https://assets.aceternity.com/cards.png"
            alt="cards template"
            width={500}
            height={500}
            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
          />
        </div>
      </div>
    ),
  },
  {
    title: "Internship 2025",
    content: (
      <div>
        <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
         Ziance Technologies - Mern stack Intern
        </p>
        <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
          Working on real world projects and enhancing my skills. From June 2025 to November 2025
        </p>
        
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D0BAQHl0ZhpaDl-4w/company-logo_200_200/company-logo_200_200/0/1708600140990/ziance_technologies_logo?e=2147483647&v=beta&t=u_CTi6-E-91N6oUeQZoZnMqSX158rQoBGiToRNOXvnY"
            alt="hero template"
           
            className="rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />

        </div>
      </div>
    ),
  },
];

export const Timeline = ({
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans "
      ref={containerRef}>
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-black dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p
          className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          I&apos;ve been working on Aceternity for the past 2 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data?.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>
  );
};
