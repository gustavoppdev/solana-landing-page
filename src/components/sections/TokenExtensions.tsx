// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";

// Components & Assets
import { tokenExtensionsImg } from "@/assets";
import { Button } from "../ui/button";

const TokenExtensions = () => {
  const t = useTranslations("Pages.Home.TokenExtensions");
  return (
    <section className="container-section my-35">
      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 bg-[#1B1622] rounded-2xl p-6 sm:p-12 max-w-2xl mx-auto lg:max-w-none items-center ">
        <div className="relative aspect-[31/20] rounded-xl overflow-hidden">
          <Image
            src={tokenExtensionsImg}
            alt={t("headline")}
            placeholder="blur"
            blurDataURL={tokenExtensionsImg.src}
            fill
            sizes="465px"
            className="object-contain"
          />
        </div>
        {/*  */}
        <div className="flex flex-col justify-center items-center text-center gap-6 text-[#CCC] max-w-2xl mx-auto">
          <Button className="bg-gradient-to-r from-[#14F195] via-[#80ECFF] to-[#64A8F2] uppercase h-[26px] text-black rounded-full">
            {t("introductionBtn")}
          </Button>

          <h2 className="text-2xl lg:text-3xl tracking-tight">
            {t("headline")}
          </h2>

          <p>{t("description")}</p>

          <Button variant={"secondaryBtn"} className="uppercase h-[42px]">
            {t("readMoreBtn")}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TokenExtensions;
