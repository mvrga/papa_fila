"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="fixed top-4 left-4 z-50 block lg:hidden w-12 h-12 bg-white rounded-full shadow-lg border border-gray-300 hover:bg-gray-50 transition-colors"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      aria-label="Voltar"
    >
      <ArrowLeft className="w-6 h-6 text-gray-800" />
    </button>
  );
};