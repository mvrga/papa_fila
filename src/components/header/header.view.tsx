"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MobileTabs } from "@/components/mobile-tabs/mobile-tabs";

export const HeaderView = () => {
  return (
    <>
      <header className="hidden lg:block bg-background border-b border-border">
        <nav className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2">
            <a href="#" className="flex items-center gap-2">
              <Image
                alt="Logo"
                src="/globe.svg"
                className="h-8 w-auto"
                width={24}
                height={24}
              />
              <span className="font-bold text-lg text-foreground">iventou</span>
            </a>
          </div>
          <div className="flex gap-8 items-center">
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Marketplace
            </a>
            <a
              href="#"
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Company
            </a>
            <Button variant="outline" className="ml-4">
              Entrar
            </Button>
          </div>
        </nav>
      </header>
      <MobileTabs />
    </>
  );
};
