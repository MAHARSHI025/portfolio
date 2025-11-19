'use client'
import React from "react";
import {
    IconBook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconBrandX,
  IconExchange,
  IconHome,
  IconNewSection,
  IconTerminal2,
} from "@tabler/icons-react";
import { FloatingDock } from "./ui/floating-dock";

export function FloatingDockDemo() {
  const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full  dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Github",
      icon: <IconBrandGithub className="h-full w-full    dark:text-neutral-300" />,
      href: "https://github.com/MAHARSHI025",
    },
    {
      title: "Linkedin",
      icon: <IconBrandLinkedin className="h-full w-full  dark:text-neutral-300" />,
      href: "https://www.linkedin.com/in/maharshi-patel-9a9a29261/",
    },
    {
      title: "instagram",
      icon: <IconBrandInstagram className="h-full w-full  dark:text-neutral-300" />,
      href: "https://www.instagram.com/_maharshi_025/#",
    },
    {
      title: "WhatsApp",
      icon: <IconBrandWhatsapp className="h-full w-full      dark:text-neutral-300" />,
      href: "https://wa.me/+918849649081",
    },
    {
      title: "Blog",
      icon: <IconBook className="h-full w-full  dark:text-neutral-300" />,
      href: "/blogs",
    },
  ];

  return (
    <div className="flex items-center justify-center  w-full fixed bottom-1">
      <FloatingDock mobileClassName="translate-y-20" items={links} />
    </div>
  );
}
