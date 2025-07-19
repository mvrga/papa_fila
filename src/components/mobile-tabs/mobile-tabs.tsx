"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ShoppingCart, QrCode } from "lucide-react";
import { CartDetailView } from "../cart-detail/cart-detailt.view";
import { QrCodeDialog } from "../qr-code-dialog/qr-code-dialog";

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
    id: "membro",
    label: "Membro",
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
          d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
        />
      </svg>
    ),
    href: "/plans",
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
    href: "/status",
  },
];

export const MobileTabs = () => {
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState("home");
  const [showQrDialog, setShowQrDialog] = useState(false);

  useEffect(() => {
    const currentTab = tabs.find(tab => tab.href === pathname);
    if (currentTab) {
      setActiveTab(currentTab.id);
    } else if (pathname === "/carrinho") {
      setActiveTab("cart");
    }
  }, [pathname]);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-border lg:hidden z-50">
        <div className="flex w-full">
          {/* Tab Início */}
          <Link
            href="/"
            className={
              `flex-1 flex flex-col items-center justify-center py-2 px-1 ` +
              (activeTab === "home"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground")
            }
            onClick={() => setActiveTab("home")}
          >
            <div className="mb-1">
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
            </div>
            <span className="text-xs font-medium">Início</span>
          </Link>

          {/* Tab Membro */}
          <Link
            href="/plans"
            className={
              `flex-1 flex flex-col items-center justify-center py-2 px-1 ` +
              (activeTab === "membro"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground")
            }
            onClick={() => setActiveTab("membro")}
          >
            <div className="mb-1">
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
                  d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                />
              </svg>
            </div>
            <span className="text-xs font-medium">Membro</span>
          </Link>

          {/* Tab Carrinho */}
          <div
            className={
              `flex-1 flex flex-col items-center justify-center py-2 px-1 ` +
              (activeTab === "cart"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground")
            }
          >
            <CartDetailView onlyIcon />
            <span className="text-xs font-medium mt-1">Carrinho</span>
          </div>

          {/* Tab QR Code */}
          <button
            className={
              `flex-1 flex flex-col items-center justify-center py-2 px-1 ` +
              (activeTab === "qrcode"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground")
            }
            onClick={() => {
              setActiveTab("qrcode");
              setShowQrDialog(true);
            }}
          >
            <div className="mb-1">
              <QrCode className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium">QR Code</span>
          </button>

          {/* Tab Acompanhar */}
          <Link
            href="/status"
            className={
              `flex-1 flex flex-col items-center justify-center py-2 px-1 ` +
              (activeTab === "acompanhar"
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground")
            }
            onClick={() => setActiveTab("acompanhar")}
          >
            <div className="mb-1">
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
            </div>
            <span className="text-xs font-medium">Acompanhar</span>
          </Link>
        </div>
      </div>

      {/* QR Code Dialog */}
      <QrCodeDialog 
        isOpen={showQrDialog} 
        onClose={() => {
          setShowQrDialog(false);
          setActiveTab(pathname === "/" ? "home" : pathname.includes("plans") ? "membro" : pathname.includes("status") ? "acompanhar" : "home");
        }} 
      />
    </>
  );
};
