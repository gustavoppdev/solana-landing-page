// Next-Intl
import { useTranslations } from "next-intl";

// Constants
import { communityStats } from "@/data/constants";

const JoinACommunity = () => {
  const t = useTranslations("Pages.Home.JoinACommunity");
  return (
    <section className="container-section overflow-hidden my-35">
      <div className="max-w-2xl mx-auto lg:max-w-none grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center md:justify-items-start">
        <h2 className="text-white font-bold text-4xl xl:text-5xl max-md:text-center md:mt-20 max-w-md">
          {t("headline")}
        </h2>

        <div className="uppercase flex flex-col items-center mx-auto gap-8">
          {communityStats.map((stat, index) => (
            <div
              className="w-full text-center md:text-start"
              key={t(stat.labelKey)}
            >
              <span
                className={`text-5xl lg:text-7xl 2xl:text-8xl font-light text-transparent bg-clip-text bg-gradient-to-br ${
                  index === 0
                    ? "from-[#F087FF] via-[#6E1FCE] to-[#6E1FCE]/10"
                    : index === 1
                    ? "from-[#1FCFF1] via-[#234CB6] to-[#234CB6]/10"
                    : "from-[#19FB9B] via-[#199890] to-[#005F59]"
                }`}
              >
                {stat.number}
              </span>
              <p className="text-[#c4c4c4] mt-8">{t(stat.labelKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JoinACommunity;
