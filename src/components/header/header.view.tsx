'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MobileTabs } from '@/components/mobile-tabs/mobile-tabs';
import { CartDetailView } from '../cart-detail/cart-detailt.view';
import Link from 'next/link';

export const HeaderView = () => {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto">
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
                <span className="font-bold text-lg text-foreground">
                  iventou
                </span>
              </a>
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
                  href="/status"
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
              <Button variant="outline">Entrar</Button>
            </div>
          </nav>
        </div>
      </header>
      <MobileTabs />
    </>
  );
};
