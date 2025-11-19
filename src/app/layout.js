import { DockDemo, FloatingDockDemo } from "@/components/Navbar";
import "./globals.css";
import BlurFade from "@/components/magicui/blur-fade";


export const metadata = {
  title: "Maharshi portfolio",
  description: "This is maharshi developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,-25" />


        <section id="header" className=" mb-20">
          <BlurFade delay={0.25} inView>
            {children}
          </BlurFade>
        </section>

        <FloatingDockDemo />
      </body>
    </html>
  );
}
