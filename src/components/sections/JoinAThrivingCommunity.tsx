// Next-Intl & Next.js
import Image from "next/image";
import { useTranslations } from "next-intl";

// Components
import { Button } from "../ui/button";

// Assets & Constants
import { imagesGrid1, imagesGrid2 } from "@/data/constants";
import { background2 } from "@/assets";

const allBlocks = [imagesGrid1, imagesGrid2, imagesGrid1, imagesGrid2];

const JoinAThrivingCommunity = () => {
  const t = useTranslations("Pages.Home.JoinAThrivingCommunity");
  return (
    <section
      className="my-15 space-y-8 relative pt-15 pb-30 bg-cover bg-center"
      style={{
        backgroundImage: `url(${background2.src})`,
      }}
    >
      <h2 className="container-section text-3xl lg:text-4xl font-bold text-white">
        {t("headline")}
      </h2>

      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll w-max">
          {allBlocks.map((block, blockIndex) => (
            <div
              key={blockIndex}
              className="grid grid-cols-[300px_1fr] gap-6 min-w-[700px] px-6 items-center"
              style={{ maxHeight: "420px" }}
            >
              {/* Coluna esquerda - 2 pequenas */}
              <div className="flex flex-col gap-6 h-[420px] w-[300px]">
                <div className="relative h-[200px] w-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={block[0].image}
                    alt={block[0].alt}
                    placeholder="blur"
                    blurDataURL={block[0].image.src}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-[200px] w-[300px] rounded-xl overflow-hidden">
                  <Image
                    src={block[1].image}
                    alt={block[1].alt}
                    placeholder="blur"
                    blurDataURL={block[1].image.src}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Coluna direita - 1 grande */}
              <div
                className={`relative h-[420px] rounded-xl overflow-hidden ${block[2].aspectRadio}`}
              >
                <Image
                  src={block[2].image}
                  alt={block[2].alt}
                  placeholder="blur"
                  blurDataURL={block[2].image.src}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-40 text-white flex flex-col justify-center items-center text-center gap-8">
        <p className="font-bold text-3xl lg:text-4xl max-w-3xl">
          {t("callToActDescription")}
        </p>
        <Button variant={"primaryBtn"} className="h-[50px]">
          {t("callToActBtn")}
        </Button>
      </div>
    </section>
  );
};

export default JoinAThrivingCommunity;
