import React from 'react'
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    // "amazonaws",
    // "firebase",
    "vercel",
    "postman",
    // "docker",
    "git",
    "github",
    // "gitlab",
    "visualstudiocode",
    "androidstudio",
    "youtube",
    "bootstrap",
    "tailwindcss",
    "mongodb",
    "python",
    "figma",
];

function Contact() {
  return (
    <>
            <div className=' flex justify-center items-center'>
                <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg  bg-background ">
                    <IconCloud iconSlugs={slugs} />
                </div>
            </div>
    </>
  )
}

export default Contact
