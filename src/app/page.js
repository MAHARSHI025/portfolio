import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Getin from "@/components/Getin";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Starter from "@/components/Starter";


export default function Home() {
  return (
    <div className="home mb-16">
      <div className="innerhome">
        <Starter></Starter>
        <Education></Education>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
        <Getin></Getin>
      </div>
    </div>
  );
}
