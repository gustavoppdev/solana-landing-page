import {
  asicsImg,
  asicsLogo,
  braveLogo,
  circleLogo,
  decafLogo,
  discordIcon,
  discordLogo,
  gainForestImg,
  githubIcon,
  googleLogo,
  gridLarge1,
  gridLarge2,
  gridSmall1,
  gridSmall2,
  gridSmall3,
  gridSmall4,
  helioLogo,
  heliumImg,
  hivemapperImg,
  jumpLogo,
  lollapalozaLogo,
  magicLogo,
  metaLogo,
  redditIcon,
  shopifyLogo,
  stripeLogo,
  telegramIcon,
  tiplinkLogo,
  xIcon,
  youtubeIcon,
} from "@/assets";

export const logosHero = [
  {
    alt: "Brave",
    image: braveLogo,
  },
  {
    alt: "Circle",
    image: circleLogo,
  },
  {
    alt: "Discord",
    image: discordLogo,
  },
  {
    alt: "Google",
    image: googleLogo,
  },
  {
    alt: "Jump_",
    image: jumpLogo,
  },
  {
    alt: "Lollapaloza",
    image: lollapalozaLogo,
  },
  {
    alt: "Magic",
    image: magicLogo,
  },
  {
    alt: "Meta",
    image: metaLogo,
  },
  {
    alt: "Shopify",
    image: shopifyLogo,
  },
  {
    alt: "Stripe",
    image: stripeLogo,
  },
];

export const allLogos = [...logosHero, ...logosHero];

export const communityStats = [
  {
    number: "11.5M+",
    labelKey: "activeAccounts",
  },
  {
    number: "21.9M",
    labelKey: "nftsMinted",
  },
  {
    number: "$0.00025",
    labelKey: "averageCost",
  },
];

export const massAdoptionBenefits = [
  {
    titleKey: "fast.title",
    descriptionKey: "fast.description",
    number: "408 ms",
    statKey: "fast.stat",
    borderColor: "border-[#1FCFF1]",
  },
  {
    titleKey: "scalable.title",
    descriptionKey: "scalable.description",
    number: "3.3k+",
    statKey: "scalable.stat",
    borderColor: "border-[#9945FF]",
  },
  {
    titleKey: "decentralized.title",
    descriptionKey: "decentralized.description",
    number: "961+",
    statKey: "decentralized.stat",
    borderColor: "border-[#FFD512]",
  },
  {
    titleKey: "energyEfficient.title",
    descriptionKey: "energyEfficient.description",
    number: "0%",
    statKey: "energyEfficient.stat",
    borderColor: "border-[#19FB9B]",
  },
];

export const cases = [
  {
    image: heliumImg,
    descriptionKey: "cases.helium",
  },
  {
    image: gainForestImg,
    descriptionKey: "cases.gainForest",
  },
  {
    image: hivemapperImg,
    descriptionKey: "cases.hivemapper",
  },
  {
    image: asicsImg,
    descriptionKey: "cases.asics",
  },
];

export const logosBuildForGrowth = [
  { src: asicsLogo, alt: "Asics" },
  { src: decafLogo, alt: "Decaf" },
  { src: helioLogo, alt: "Helio" },
  { src: tiplinkLogo, alt: "Tiplink" },
];

export const buttonsBuildForGrowth = [
  "navigation.payments",
  "navigation.gaming",
  "navigation.nfts",
  "navigation.defi",
  "navigation.daos",
];

export const imagesGrid1 = [
  { image: gridSmall1, alt: "Small 1" },
  { image: gridSmall2, alt: "Small 2" },
  {
    image: gridLarge1,
    alt: "Large 1",
    aspectRadio: "md:aspect-[10/7]",
  },
];

export const imagesGrid2 = [
  { image: gridSmall3, alt: "Small 3" },
  { image: gridSmall4, alt: "Small 4" },
  { image: gridLarge2, alt: "Large 2", aspectRadio: "md:aspect-[5/7]" },
];

export const footerIcons = [
  { src: youtubeIcon, alt: "Youtube" },
  { src: xIcon, alt: "X" },
  { src: discordIcon, alt: "Discord" },
  { src: redditIcon, alt: "Reddit" },
  { src: githubIcon, alt: "Github" },
  { src: telegramIcon, alt: "Telegram" },
];
