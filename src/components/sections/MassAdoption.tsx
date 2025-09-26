// Next-Intl
import { useTranslations } from "next-intl";

// Constants & Components
import StatCard from "../common/StatCard";
import { massAdoptionBenefits } from "@/data/constants";

const MassAdoption = () => {
  const t = useTranslations("Pages.Home.MassAdoption");
  return (
    <section className="container-section my-35">
      <div className="max-w-2xl mx-auto lg:max-w-none grid grid-cols-1 lg:grid-cols-6 gap-20">
        <div className="lg:col-span-2 text-white text-center md:text-start flex flex-col gap-4 items-center md:items-start">
          <h2 className="font-bold text-4xl xl:text-5xl lg:text-start lg:mt-10 ">
            {t.rich("headline", {
              breakline: (chunks) => <span className="block">{chunks}</span>,
            })}
          </h2>
          <div className="relative pl-4 uppercase text-[#C4C4C4]">
            <span className="absolute top-0 left-0 h-[6px] w-[6px] rounded-full bg-[#1FCFF1]"></span>
            {t("liveData")}
          </div>
        </div>
        {/*  */}
        <div className="lg:col-span-4 grid grid-cols-1 md:grid-cols-2 gap-12 place-items-center">
          {/* 1 */}
          <div className="grid gap-12 grid-cols-1 md:mt-20 text-white">
            {massAdoptionBenefits.slice(0, 2).map((benefit) => (
              <StatCard
                benefit={benefit}
                key={t(`benefits.${benefit.titleKey}`)}
              />
            ))}
          </div>

          {/* 2 */}
          <div className="grid gap-12 grid-cols-1 text-white">
            {massAdoptionBenefits.slice(2, 4).map((benefit) => (
              <StatCard
                benefit={benefit}
                key={t(`benefits.${benefit.titleKey}`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MassAdoption;
