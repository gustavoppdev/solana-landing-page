// Next-Intl & Next.js
import Image from "next/image";
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";

// Assets & Constants
import { payXShopify, shopifyLogo } from "@/assets";
import { buttonsBuildForGrowth, logosBuildForGrowth } from "@/data/constants";

const BuildForGrowth = () => {
  const t = useTranslations("Pages.Home.BuildForGrowth");
  return (
    <section className="container-section my-35 space-y-8">
      <div className="text-white flex flex-col lg:flex-row gap-8 lg:gap-0 justify-between items-center">
        <h2 className="text-3xl lg:text-4xl font-bold">{t("headline")}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {buttonsBuildForGrowth.map((btnLabelKey) => (
            <Button
              key={t(btnLabelKey)}
              className="h-[49px] border border-transparent first:border-[#A962FF] hover:border-[#A962FF] bg-[#111111] capitalize"
            >
              {t(btnLabelKey)}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 max-w-xl lg:max-w-none mx-auto bg-[#1A1A1A]  rounded-xl overflow-hidden">
        <div className="relative aspect-[11/8]">
          <Image
            src={payXShopify}
            alt="Pay X Shopify"
            placeholder="blur"
            blurDataURL={payXShopify.src}
            fill
            sizes="550px"
            className="object-contain"
          />
        </div>

        <div className="px-4 py-12 grid place-content-center justify-items-start gap-4 text-white max-w-md mx-auto ">
          <Image
            src={shopifyLogo}
            alt="shopify"
            width={200}
            height={50}
            className="object-contain"
          />

          <p className="lg:text-lg">{t("description")}</p>

          <Button
            variant={"link"}
            className="text-[#A962FF] px-0 underline lg:text-base whitespace-normal text-start"
          >
            {t("learnMoreBtn")}
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 bg-[#261F26]/30 rounded-xl overflow-hidden py-4 justify-items-center">
        {logosBuildForGrowth.map((logo) => (
          <Image
            key={logo.alt}
            src={logo.src}
            alt={logo.alt}
            width={89}
            height={50}
            className="object-contain"
          />
        ))}
      </div>
    </section>
  );
};

export default BuildForGrowth;
