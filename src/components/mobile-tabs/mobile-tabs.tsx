"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
}

const tabs: TabItem[] = [
  {
    id: "home",
    label: "Início",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    href: "/",
  },
  {
    id: "marketplace",
    label: "Marketplace",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
        />
      </svg>
    ),
    href: "/marketplace",
  },
  {
    id: "cart",
    label: "Carrinho",
    icon: <ShoppingCart className="w-6 h-6" />,
    href: "/carrinho",
  },
  {
    id: "acompanhar",
    label: "Acompanhar",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    href: "/acompanhar",
  },
  {
    id: "perfil",
    label: "Perfil",
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    href: "/perfil",
  },
];

export const MobileTabs = () => {
  const [activeTab, setActiveTab] = useState("home");

  const leftTabs = tabs.slice(0, 2);
  const cartTab = tabs[2];
  const rightTabs = tabs.slice(3);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border lg:hidden z-50">
      <div className="flex w-full">
        {leftTabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={
              `flex-1 flex flex-col items-center justify-center py-2 px-1 ` +
              (activeTab === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground")
            }
            onClick={() => setActiveTab(tab.id)}
            passHref
          >
            <div className="mb-1">{tab.icon}</div>
            <span className="text-xs font-medium">{tab.label}</span>
          </Link>
        ))}
        <Link
          key={cartTab.id}
          href={cartTab.href}
          className={
            `flex-1 flex flex-col items-center justify-center py-2 px-1 bg-background/80 ` +
            (activeTab === cartTab.id
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground")
          }
          onClick={() => setActiveTab(cartTab.id)}
          passHref
        >
          <div className="mb-1">{cartTab.icon}</div>
          <span className="text-xs font-medium">{cartTab.label}</span>
        </Link>
        {rightTabs.map((tab) => (
          <Link
            key={tab.id}
            href={tab.href}
            className={
              `flex-1 flex flex-col items-center justify-center py-2 px-1 ` +
              (activeTab === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground")
            }
            onClick={() => setActiveTab(tab.id)}
            passHref
          >
            <div className="mb-1">{tab.icon}</div>
            <span className="text-xs font-medium">{tab.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
