import { ArrowRightCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";

type Props = {
  card: {
    image: StaticImageData;
    descriptionKey: string;
  };

  layout?: "otherCases" | "highlightCase";
};

const CasesCards = ({ card, layout = "otherCases" }: Props) => {
  const t = useTranslations("Pages.Home.CaseStudies");
  return (
    <div
      className={`bg-[#26262B] rounded-xl ${
        layout === "highlightCase" && "grid grid-cols-1 lg:grid-cols-2 "
      }`}
    >
      <div
        className={`relative ${
          layout === "highlightCase" ? "aspect-[551/310]" : "aspect-[341/193]"
        }`}
      >
        <Image
          src={card.image}
          alt={t(card.descriptionKey)}
          placeholder="blur"
          blurDataURL={card.image.src}
          fill
          sizes={`${
            layout === "highlightCase"
              ? "(max-width:1024px) 512px, 668px"
              : "(max-width:1024px) 512px, 414px"
          }`}
          className="object-contain"
        />
      </div>

      <p
        className={`font-bold text-white lg:text-start relative grid place-content-center   ${
          layout === "highlightCase"
            ? "py-12 px-6 text-2xl lg:text-3xl text-center"
            : "p-4 text-xl xl:text-2xl h-[200px] lg:place-content-start "
        }`}
      >
        {layout === "otherCases" && (
          <span className="absolute bottom-4 right-4">
            <ArrowRightCircle className="size-5" strokeWidth={1.5} />
          </span>
        )}
        {t(card.descriptionKey)}
      </p>
    </div>
  );
};

export default CasesCards;
