'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { MobileTabs } from '@/components/mobile-tabs/mobile-tabs';

// Utils
import { navlinksAdm } from '@/utils/nav-links-adm';
import Link from 'next/link';

export const HeaderView = () => {
  const userRole: string = 'adm';
  const navItems = userRole === 'adm' ? navlinksAdm : [];

  return (
    <>
      <header className="hidden lg:block bg-background border-b border-border mx-auto container">
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
            {navItems.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <Button variant="outline">Entrar</Button>
          </div>
        </nav>
      </header>
      <MobileTabs />
    </>
  );
};
