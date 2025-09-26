"use client";

// Next.js & Next-Intl
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

// Components
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

// Lucide Icons & Assets
import { Menu } from "lucide-react";
import { solanaLogo } from "@/assets";

const NavbarMobile = () => {
  const t = useTranslations();

  const navigationLinks = t.raw("Layout.Navbar") as string[];

  return (
    <div className="flex items-center justify-between lg:hidden">
      <Link href={"/"}>
        <Image
          src={solanaLogo}
          alt="Solana"
          width={125}
          height={19}
          className="object-contain"
        />
      </Link>

      <Dialog>
        <DialogTrigger asChild>
          <Button variant={"ghost"} aria-label={t("AriaLabel.menuNavigation")}>
            <Menu className="size-6 text-white" />
          </Button>
        </DialogTrigger>

        <DialogContent className="z-50 flex flex-col w-screen h-screen bg-black text-white border-none p-4 animate-in slide-in-from-right-full duration-300">
          <DialogHeader className="py-4 border-b border-zinc-700">
            <Link href={"/"}>
              <Image
                src={solanaLogo}
                alt="Solana"
                width={125}
                height={19}
                className="object-contain"
              />
            </Link>
            <DialogTitle className="sr-only">Menu</DialogTitle>
            <DialogDescription className="sr-only" />
          </DialogHeader>

          <div className="flex flex-col gap-2 mt-4 flex-1">
            {navigationLinks.map((link) => (
              <DialogClose asChild key={link}>
                <Button
                  variant="ghost"
                  className="w-full text-lg font-semibold py-6 justify-start text-left"
                >
                  {link}
                </Button>
              </DialogClose>
            ))}
            <LanguageSwitcher
              styles="text-lg font-semibold"
              layout="icon&Language"
            />
          </div>

          <DialogFooter className="py-4 border-t border-zinc-700 text-center text-zinc-400">
            <p className="text-sm">Desenvolvido com 🖤</p>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NavbarMobile;
