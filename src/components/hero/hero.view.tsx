"use client";

import { FilterKeywordView } from "@/components/filter-keyword";

interface HeroViewProps {
  palavraChave: string | null;
  setPalavraChave: (value: string | null) => void;
}

export const HeroView = ({ palavraChave, setPalavraChave }: HeroViewProps) => {

  return (
    <section
      className="relative h-[40vh] lg:h-[70vh] bg-black bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center w-full h-full text-center space-y-6 px-4 max-w-2xl mx-auto">
        <h1 className="text-4xl lg:text-6xl font-bold text-white">
          Rock in Rio
        </h1>
        <div className="w-full max-w-lg">
          <FilterKeywordView
            variant="primary"
            palavraChave={palavraChave}
            setPalavraChave={setPalavraChave}
            placeholder="Buscar comidas do festival..."
            className="h-12"
          />
        </div>
      </div>
    </section>
  );
};
