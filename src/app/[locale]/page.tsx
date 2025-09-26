import { background } from "@/assets";
import Hero from "@/components/sections/Hero";
import TokenExtensions from "@/components/sections/TokenExtensions";
import JoinACommunity from "@/components/sections/JoinACommunity";
import MassAdoption from "@/components/sections/MassAdoption";
import CaseStudies from "@/components/sections/CaseStudies";
import BuildForGrowth from "@/components/sections/BuildForGrowth";
import JoinAThrivingCommunity from "@/components/sections/JoinAThrivingCommunity";

const Home = () => {
  return (
    <main>
      <Hero />
      <TokenExtensions />
      <div
        className="relative bg-cover bg-right md:bg-center"
        style={{
          backgroundImage: `url(${background.src})`,
        }}
      >
        <JoinACommunity />
        <MassAdoption />
      </div>

      <CaseStudies />
      <BuildForGrowth />
      <JoinAThrivingCommunity />
    </main>
  );
};

export default Home;
