// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";

// Assets & Constants
import { heroLeft, heroRight } from "@/assets";
import { allLogos } from "@/data/constants";

const Hero = () => {
  const t = useTranslations("Pages.Home.Hero");
  return (
    <section className="relative overflow-hidden text-white">
      <div className="relative grid grid-cols-1 lg:grid-cols-6 -z-10">
        <div className="hidden md:block absolute top-0 left-0 min-h-[280px] lg:min-h-[495px] xl:min-h-[743px] xl:max-w-[908px] lg:col-span-4 aspect-[908/743]">
          <Image
            src={heroLeft}
            alt="Background"
            priority
            placeholder="blur"
            blurDataURL={heroLeft.src}
            fill
            sizes="(max-width: 1024px) 367px, (max-width:1280px) 605px, 908px"
            className="object-cover w-full"
          />
        </div>

        <div className="absolute top-0 -right-12 lg:col-span-2 aspect-[549/721] min-h-[500px] lg:min-h-[721px] lg:max-w-[549px]">
          <Image
            src={heroRight}
            alt="Background"
            priority
            placeholder="blur"
            blurDataURL={heroRight.src}
            fill
            sizes="(max-width: 1024px) 380px, 549px"
            className="object-contain"
          />
        </div>
      </div>
      <div className="container-section min-h-[calc(100vh-68px)] text-center flex flex-col justify-between items-center">
        <div className="flex flex-col gap-8 lg:gap-12 justify-center items-center mt-30 sm:mt-40 2xl:mt-60">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight">
            {t.rich("headline", {
              breakline: (chunks) => <span className="block">{chunks}</span>,
            })}
          </h1>

          <p className="max-w-[590px] xl:text-lg 2xl:text-xl">
            {t("description")}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button variant={"primaryBtn"} className="h-[54px]">
              {t("startBuildingBtn")}
            </Button>
            <Button variant={"secondaryBtn"} className="h-[54px]">
              {t("readDocsBtn")}
            </Button>
          </div>
        </div>

        {/* Logos animados */}
        <div className="relative z-10 mx-auto w-full space-y-4 mb-5 sm:mb-10">
          <p className="uppercase text-sm xl:text-lg text-[#618ADC] tracking-widest text-center">
            {t("logosIntroduction")}
          </p>

          <div className="flex overflow-hidden">
            <ul className="flex gap-6 animate-scroll w-max">
              {allLogos.map((logo, index) => (
                <li key={index}>
                  <Image
                    src={logo.image}
                    alt={logo.alt}
                    priority
                    width={89}
                    height={50}
                    className="min-h-[50px] min-w-[89px]"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
