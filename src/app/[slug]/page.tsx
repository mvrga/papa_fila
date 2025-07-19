"use client";

import {
  FilterKeywordView,
  BaseSearchSelectView,
  Options,
  ListDishesCardView,
  RestaurantDiscountView,
} from "@/components";
import BaseFooter from "@/components/base-footer";
import { HeaderView } from "@/components/header/header.view";
import { useState } from "react";
import { use } from "react";
import { Star, MapPin } from "lucide-react";

interface RestaurantPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function RestaurantPage({ params }: RestaurantPageProps) {
  const resolvedParams = use(params);
  const [palavraChave, setPalavraChave] = useState<string | null>(null);
  const [ordenacao, setOrdenacao] = useState<Options | null>(null);
  const [activeTab, setActiveTab] = useState<"comida" | "bebida">("comida");

  const ordenacaoOptions: Options[] = [
    { value: "prep-asc", label: "Menor tempo de preparo" },
    { value: "prep-desc", label: "Maior tempo de preparo" },
    { value: "price", label: "Preço" },
    { value: "rating", label: "Avaliação" },
    { value: "most-orders", label: "Mais pedidos" },
  ];

  const restaurantName = resolvedParams.slug
    .replace(/-/g, " ")
    .replace(/\b\w/g, (l) => l.toUpperCase());
  const rating = 4.5;
  const totalReviews = 142;
  const location = "Rua das Flores, 123 - Centro, São Paulo - SP";

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
        {[...Array(fullStars)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
        {hasHalfStar && (
          <Star className="w-5 h-5 fill-yellow-400/50 text-yellow-400" />
        )}
        {[...Array(emptyStars)].map((_, i) => (
          <Star key={i + fullStars} className="w-5 h-5 text-gray-300" />
        ))}
      </div>
    );
  };

  return (
    <main>
      <HeaderView />

      <section
        className="relative h-[40vh] lg:h-[70vh] bg-black bg-cover bg-center bg-no-repeat flex items-center justify-center mt-[73px]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 flex flex-1 flex-col items-center justify-center w-full h-full text-center space-y-6 px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl font-bold text-white">
            {restaurantName}
          </h1>

          <div className="flex flex-col items-center gap-2">
            <div className="flex items-center gap-2">
              {renderStars(rating)}
              <span className="text-white font-medium text-lg">
                {rating} ({totalReviews} avaliações)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-white/90">
            <MapPin className="w-5 h-5" />
            <span className="text-lg">{location}</span>
          </div>
        </div>
      </section>

      <section className="w-full border-b">
        <div className="w-full flex justify-center">
          <div className="flex">
            <button
              onClick={() => setActiveTab("comida")}
              className={`px-6 py-3 text-sm font-medium transition-colors hover:bg-primary/10 ${
                activeTab === "comida"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600"
              }`}
            >
              Comida
            </button>
            r
            <button
              onClick={() => setActiveTab("bebida")}
              className={`px-6 py-3 text-sm font-medium transition-colors hover:bg-primary/10 ${
                activeTab === "bebida"
                  ? "text-primary border-b-2 border-primary"
                  : "text-gray-600"
              }`}
            >
              Bebida
            </button>
          </div>
        </div>
      </section>

      <section className="container mx-auto w-full px-4 mb-8 mt-8">
        <RestaurantDiscountView />
      </section>

      <section className="my-20 container mx-auto w-full px-4 flex flex-col gap-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
          <div className="flex flex-col items-start gap-1 w-full md:max-w-xl">
            <div className="flex flex-col gap-2 w-full sm:flex-row">
              <FilterKeywordView
                palavraChave={palavraChave}
                setPalavraChave={setPalavraChave}
                className="flex-1"
                placeholder="Digite o nome do prato"
              />
              <BaseSearchSelectView
                label="Ordenar por"
                placeholder="Ordenar por"
                options={ordenacaoOptions}
                value={ordenacao}
                onChange={setOrdenacao}
                className="w-full lg:w-56"
              />
            </div>
          </div>
        </div>

        <ListDishesCardView
          restaurantSlug={resolvedParams.slug}
          searchTerm={palavraChave}
          sortBy={ordenacao?.value}
          filterType={activeTab}
        />
      </section>

      <BaseFooter />
    </main>
  );
}
