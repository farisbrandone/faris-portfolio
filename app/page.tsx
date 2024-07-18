import Image from "next/image";
import Hero from "../components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data";
import Clients from "@/components/Clients";
import Experiences from "@/components/Experiences";
import Approach from "@/components/Approach";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-slate-800 flex justify-center items-center flex-col mx-auto overflow-hidden sm:px-10 px-5 overflow-x-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experiences />
        <Approach />
        <Footer />
      </div>
    </main>
  );
}
