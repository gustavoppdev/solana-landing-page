import { solanaLogo2 } from "@/assets";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { footerIcons } from "@/data/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const t = useTranslations("Layout.Footer");

  const footerLinks = t.raw("links") as {
    title: string;
    items: string[];
  }[];
  return (
    <footer className="container-section grid grid-cols-1 lg:grid-cols-2 gap-y-16 border-t border-neutral-900 py-16">
      {/*  */}
      <div className=" flex flex-col gap-2 items-center text-center md:items-start md:text-start">
        <h3 className="text-white">{t("managedBy")}</h3>
        <Image
          src={solanaLogo2}
          alt="solana"
          width={210}
          height={56}
          className="object-contain"
        />

        <ul className="flex items-center gap-4 my-4">
          {footerIcons.map((icon) => (
            <li
              key={icon.alt}
              className="bg-[#848895] w-[26] h-[26] rounded-full grid place-content-center"
            >
              <Image
                src={icon.src}
                alt={icon.alt}
                width={20}
                height={20}
                className="object-contain"
              />
            </li>
          ))}
        </ul>

        <p className="text-[#848895]">{t("rights")}</p>
      </div>
      {/*  */}
      <div className=" grid grid-cols-1 md:grid-cols-3  max-md:justify-items-center max-md:text-center gap-y-8">
        {footerLinks.map((group) => (
          <ul key={group.title} className={`flex flex-col gap-4 `}>
            {[group.title, ...group.items].map((link) => (
              <li
                key={link}
                className="first:text-white first:uppercase text-[#848895]"
              >
                {link}
              </li>
            ))}
          </ul>
        ))}
        <p className="text-white">
          <LanguageSwitcher layout="icon&Language" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
