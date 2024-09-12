import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Starter from "@/components/Starter";


export default function Home() {
  return (
    <div className="home">
      <div className="innerhome">
        <Starter></Starter>
        <Education></Education>
        <Skills></Skills>
        <Project></Project>
        <Contact></Contact>
      </div>
    </div>
  );
}
