"use client";

import {
  HeroView,
  FilterKeywordView,
  BaseSearchSelectView,
  Options,
  ListRestaurantsCardView,
  HomeTestimonialsSection,
} from "@/components";
import BaseFooter from "@/components/base-footer";
import { HeaderView } from "@/components/header/header.view";
import { useState } from "react";

export default function Home() {
  const [palavraChave, setPalavraChave] = useState<string | null>(null);
  const [ordenacao, setOrdenacao] = useState<Options | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const ordenacaoOptions: Options[] = [
    { value: "prep-asc", label: "Menor tempo de preparo" },
    { value: "prep-desc", label: "Maior tempo de preparo" },
    { value: "price", label: "Preço" },
    { value: "rating", label: "Avaliação" },
    { value: "most-orders", label: "Mais pedidos" },
  ];

  return (
    <main>
      <HeaderView />
      <HeroView 
        palavraChave={palavraChave}
        setPalavraChave={setPalavraChave}
      />

      <section className="my-20 container mx-auto w-full px-4 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Barracas do Rock in Rio</h1>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
          <div className="flex flex-col items-start gap-1 w-full md:max-w-xl">
            <div className="flex flex-col gap-2 w-full sm:flex-row">
              <FilterKeywordView
                palavraChave={palavraChave}
                setPalavraChave={(value) => {
                  setPalavraChave(value);
                  setCurrentPage(1); // Reset page when searching
                }}
                className="flex-1"
                placeholder="Digite o nome da barraca ou um prato"
              />
              <BaseSearchSelectView
                label="Ordenar por"
                placeholder="Ordenar por"
                options={ordenacaoOptions}
                value={ordenacao}
                onChange={(value) => {
                  setOrdenacao(value);
                  setCurrentPage(1); // Reset page when changing sort
                }}
                className="w-full lg:w-56"
              />
            </div>
          </div>
        </div>

        <ListRestaurantsCardView 
          palavraChave={palavraChave}
          ordenacao={ordenacao}
          page={currentPage}
          onPageChange={setCurrentPage}
        />
      </section>

      <HomeTestimonialsSection />
      <BaseFooter />
    </main>
  );
}
