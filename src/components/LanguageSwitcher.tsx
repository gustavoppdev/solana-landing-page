"use client";

// Next-Intl & Next.js
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";

// Components
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

// Lucide Icons
import { ChevronDown, Languages } from "lucide-react";

type Props = {
  layout?: "iconOnly" | "icon&Language";
  styles?: string;
};

export default function LanguageSwitcher({
  styles,
  layout = "iconOnly",
}: Props) {
  const t = useTranslations("AriaLabel");
  const locale = useLocale() === "pt" ? "pt" : "en";
  const router = useRouter();
  const pathname = usePathname();

  const handleLocaleChange = (locale: "pt" | "en") => {
    const newLocale = locale;

    const newPath = `/${newLocale}${pathname.substring(3)}`;

    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-transparent" asChild>
        <Button
          variant="ghost"
          size="sm"
          aria-label={t("languageSwitcher")}
          className={`cursor-pointer w-fit ${styles}`}
        >
          <Languages className="size-5" strokeWidth={"1.5"} />
          {layout === "icon&Language" && (
            <span className="flex items-center gap-2">
              {locale === "pt" ? (
                <>
                  Português
                  <ChevronDown className="size-4" />
                </>
              ) : (
                <>
                  Inglês
                  <ChevronDown className="size-4" />
                </>
              )}
            </span>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLocaleChange("pt")}>
          Português
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLocaleChange("en")}>
          Inglês
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
