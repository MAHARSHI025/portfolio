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
    "vercel",
    "postman",
    "git",
    "github",
    "visualstudiocode",
    "androidstudio",
    "bootstrap",
    "tailwindcss",
    "mongodb",
    "python",
    "figma",
    "mysql",
    "typescript",
    
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
