"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HandMetal } from "lucide-react";

import { MobileTabs } from "@/components/mobile-tabs/mobile-tabs";
import { CartDetailView } from "../cart-detail/cart-detailt.view";
import Link from "next/link";

export const HeaderView = () => {
  return (
    <>
      <header className="hidden lg:fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto">
          <nav className="flex items-center justify-between p-4">
            <div className="flex items-center gap-2">
              <Link href="/" className="flex items-center gap-2">
                <span className="h-8 w-8 flex items-center justify-center">
                  <HandMetal className="h-8 w-8 text-black" />
                </span>
                <span className="font-bold text-lg text-foreground">
                  Rock in Rio Food
                </span>
              </Link>
            </div>
            <div className="flex gap-4 items-center">
              <nav className="flex gap-4">
                <Link
                  href="/planos"
                  className="text-base text-foreground hover:underline"
                >
                  Virar membro
                </Link>
                <Link
                  href="/acompanhar"
                  className="text-base text-foreground hover:underline"
                >
                  Acompanhar pedido
                </Link>
              </nav>
              <span
                className="h-6 w-px bg-border mx-2 block"
                aria-hidden="true"
              />
              <CartDetailView />
              <Link href="/planos">
                <Avatar className="cursor-pointer border border-border">
                  <AvatarImage src="/avatar.svg" alt="Entrar" />
                  <AvatarFallback>EN</AvatarFallback>
                </Avatar>
              </Link>
            </div>
          </nav>
        </div>
      </header>
      <MobileTabs />
    </>
  );
};
