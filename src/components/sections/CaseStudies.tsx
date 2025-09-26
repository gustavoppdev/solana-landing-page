// Next-Intl & Next.Js
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";
import CasesCards from "../common/CasesCards";

// Constants & Lucide Icons
import { cases } from "@/data/constants";

const highlightCase = cases.slice(0, 1);
const otherCases = cases.slice(1, 4);

const CaseStudies = () => {
  const t = useTranslations("Pages.Home.CaseStudies");

  return (
    <section className="container-section space-y-8 my-35">
      <div className="text-white flex flex-col lg:flex-row gap-8 justify-between items-center ">
        <h2 className="text-3xl lg:text-4xl font-bold">{t("headline")}</h2>
        <Button variant={"secondaryBtn"} className="uppercase h-[42px]">
          {t("goToCasesBtn")}
        </Button>
      </div>
      <div className="grid grid-cols-1 gap-12 max-w-lg lg:max-w-none mx-auto">
        {highlightCase.map((card, index) => (
          <CasesCards card={card} key={index} layout="highlightCase" />
        ))}

        {/*  */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {otherCases.map((card, index) => (
            <CasesCards card={card} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
