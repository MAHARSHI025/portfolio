import Education from "@/components/Education";
import Starter from "@/components/Starter";


export default function Home() {
  return (
    <div className="home">
      <div className="innerhome">
        <Starter></Starter>
        <Education></Education>
      </div>
    </div>
  );
}
