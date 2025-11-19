import React from 'react'
import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
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
    "androidstudio",
    "bootstrap",
    "tailwindcss",
    "mongodb",
    "python",
    "figma",
    "mysql",
    "typescript",
    "redux",
    "npm",
    "nodemon"
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
