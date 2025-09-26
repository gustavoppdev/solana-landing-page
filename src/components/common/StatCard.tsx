import { useTranslations } from "next-intl";

type Props = {
  benefit: {
    titleKey: string;
    descriptionKey: string;
    number: string;
    statKey: string;
    borderColor: string;
  };
};

const StatCard = ({ benefit }: Props) => {
  const t = useTranslations("Pages.Home.MassAdoption.benefits");
  return (
    <div
      key={t(benefit.titleKey)}
      className="space-y-4 max-w-[340px] p-6 bg-black/30 rounded-xl"
    >
      <h3
        className={`border-l-4 text-2xl pl-4 font-bold ${benefit.borderColor}`}
      >
        {t(benefit.titleKey)}
      </h3>
      <p className="text-[#C4C4C4] text-lg">{t(benefit.descriptionKey)}</p>

      <div className="relative mt-8 pl-4 text-2xl">
        <span className="absolute top-0 left-0 h-[6px] w-[6px] rounded-full bg-[#1FCFF1]"></span>
        {benefit.number}
      </div>
      <p className="text-[#c4c4c4] uppercase">{t(benefit.statKey)}</p>
    </div>
  );
};

export default StatCard;
