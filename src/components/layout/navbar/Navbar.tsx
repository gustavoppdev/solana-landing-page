// Next-Intl & Next.js
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";

// Components
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import NavbarMobile from "./NavbarMobile";

// Assets & Lucide Icons
import { solanaLogo } from "@/assets";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const t = useTranslations();

  const navigationLinks = t.raw("Layout.Navbar") as string[];

  return (
    <header>
      <nav className="bg-black container-section py-4">
        <div className="hidden lg:flex justify-between items-center">
          <Link href={"/"}>
            <Image
              src={solanaLogo}
              alt="Solana"
              width={125}
              height={19}
              priority
              className="object-contain"
            />
          </Link>

          <ul className="text-white flex items-center gap-4">
            {navigationLinks.map((link) => (
              <li key={link}>
                <Button variant={"navBtn"} className="bg-black group">
                  {link}
                  <ChevronDown className="size-4 text-white group-hover:rotate-180 transition-all duration-300" />
                </Button>
              </li>
            ))}
            <li>
              <LanguageSwitcher />
            </li>
          </ul>
        </div>
        <NavbarMobile />
      </nav>
    </header>
  );
};

export default Navbar;
