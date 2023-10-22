import Navbar from "@/components/Navigation/Navbar";
import Generate from "@/components/Pages/Generate/Generate";
import HomeArea from "@/components/Pages/HomeArea/HomeArea";
export default function Home() {
  return (
    <div className="bg-space bg-no-repeat bg-cover bg-opacity-30 h-screen w-screen font-main">
      <Navbar />
      <div className="h-screen w-screen flex items-center justify-center">
        <HomeArea />
      </div>
      <div className="bg-space2 bg-no-repeat bg-cover bg-opacity-30 h-screen w-screen flex items-center justify-center">
        <Generate />
      </div>
    </div>
  );
}
