"use client";

import React, { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

import {
  CardRestaurantView,
  CardRestaurantSkeleton,
} from "@/components/card-restaurant";

interface ListRestaurantsCardProps extends HTMLAttributes<HTMLDivElement> {
  palavraChave?: string | null;
  categoria?: string | null;
  cidade?: string | null;
  page?: number | null;
  ordenacao?: { value: string; label: string } | null;
}

import { BasePaginationView } from "@/components/base-pagination";
import { CardDishView } from "@/components/card-dish/card-dish.view";
import { mockDishes } from "@/data/mock-dishes";

const ListRestaurantsCardView: React.FC<ListRestaurantsCardProps> = ({
  className,
  palavraChave = null,
  categoria = null,
  cidade = null,
  page = null,
  ordenacao = null,
  ...props
}) => {
  const loading = false;

  // Mock data para simular a query
  const mockData = {
    topRestaurantes: {
      items: [
        {
          id: 1,
          nome_exibicao: "Outback Steakhouse",
          cidade: "Cidade do Rock",
          estado: "Rio de Janeiro",
          nome_usuario: "outback-steakhouse",
          img_cover:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
          img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
          plano: "pro",
        },
        {
          id: 2,
          nome_exibicao: "Spoleto",
          cidade: "Cidade do Rock",
          estado: "Rio de Janeiro",
          nome_usuario: "spoleto",
          img_cover:
            "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=400&h=300&fit=crop",
          img: "https://images.unsplash.com/photo-1621996346565-e3dbc353d2e5?w=100&h=100&fit=crop",
          plano: "basico",
        },
        {
          id: 3,
          nome_exibicao: "Subway",
          cidade: "Cidade do Rock",
          estado: "Rio de Janeiro",
          nome_usuario: "subway",
          img_cover:
            "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400&h=300&fit=crop",
          img: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=100&h=100&fit=crop",
          plano: "pro",
        },
        {
          id: 4,
          nome_exibicao: "Habib's",
          cidade: "Cidade do Rock",
          estado: "Rio de Janeiro",
          nome_usuario: "habibs",
          img_cover:
            "https://images.unsplash.com/photo-1565299585323-38dd212d1b80?w=400&h=300&fit=crop",
          img: "https://images.unsplash.com/photo-1565299585323-38dd212d1b80?w=100&h=100&fit=crop",
          plano: "basico",
        },
        {
          id: 5,
          nome_exibicao: "McDonald's",
          cidade: "Cidade do Rock",
          estado: "Rio de Janeiro",
          nome_usuario: "mcdonalds",
          img_cover:
            "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=300&fit=crop",
          img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=100&h=100&fit=crop",
          plano: "pro",
        },
        {
          id: 6,
          nome_exibicao: "Brahma Lounge",
          cidade: "Cidade do Rock",
          estado: "Rio de Janeiro",
          nome_usuario: "brahma-lounge",
          img_cover:
            "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&h=300&fit=crop",
          img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=100&h=100&fit=crop",
          plano: "basico",
        },
      ],
      metadata: {
        currentPage: 1,
        totalPages: 2,
        totalItems: 8,
        itemsPerPage: 6,
      },
    },
  };

  // Filter restaurants by search keyword
  let filteredRestaurants = mockData?.topRestaurantes.items || [];
  if (palavraChave) {
    filteredRestaurants = filteredRestaurants.filter((usuario) =>
      usuario.nome_exibicao.toLowerCase().includes(palavraChave.toLowerCase())
    );
  }

  // Filter dishes by search keyword
  let filteredDishes = mockDishes;
  if (palavraChave) {
    filteredDishes = mockDishes.filter((dish) =>
      dish.name.toLowerCase().includes(palavraChave.toLowerCase()) ||
      dish.description.toLowerCase().includes(palavraChave.toLowerCase()) ||
      dish.category.toLowerCase().includes(palavraChave.toLowerCase())
    );
  } else {
    filteredDishes = []; // Only show dishes when searching
  }

  const restaurants =
    filteredRestaurants.map((usuario) => {
      const location =
        usuario.cidade != "null" && usuario.cidade && usuario.estado
          ? `${usuario.cidade}, ${usuario.estado}`
          : usuario.estado;

      return {
        id: usuario.id,
        name: usuario.nome_exibicao,
        location: location,
        slug: `/${usuario.nome_usuario}`,
        rating: 5,
        image: usuario.img_cover,
        avatar: usuario.img,
        pro: usuario.plano as "basico" | "pro",
      };
    }) || [];

  // Apply sorting to restaurants
  if (ordenacao?.value) {
    restaurants.sort((a, b) => {
      switch (ordenacao.value) {
        case "prep-asc":
          return a.name.localeCompare(b.name); // Mock sorting
        case "prep-desc":
          return b.name.localeCompare(a.name); // Mock sorting
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }

  // Apply sorting to dishes
  if (ordenacao?.value) {
    filteredDishes.sort((a, b) => {
      switch (ordenacao.value) {
        case "prep-asc":
          return a.prepTime - b.prepTime;
        case "prep-desc":
          return b.prepTime - a.prepTime;
        case "price":
          return a.price - b.price;
        case "rating":
          return b.rating - a.rating;
        default:
          return 0;
      }
    });
  }

  const hasResults = restaurants.length > 0 || filteredDishes.length > 0;

  if (!loading && !hasResults) {
    return (
      <div className="w-full h-[30dvh] flex flex-col justify-center items-center">
        <svg
          width="96"
          height="96"
          viewBox="0 0 96 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.0362 17.8923C25.5329 0.0535136 51.222 -5.14383 71.7755 6.68532L71.8329 6.71825L71.8899 6.75139C92.4116 18.6365 100.755 43.4829 92.5548 64.9571C91.9591 66.5173 91.2352 68.7417 89.2739 70.351C87.7861 71.5718 85.6601 72.3267 83.7356 72.3176C82.3473 72.3111 81.1833 71.9306 80.1936 71.4831C79.3364 71.0955 78.4008 70.5551 77.4875 70.0276L49.5862 53.9187L30.487 86.9993H91.3332C93.7265 86.9993 95.6666 88.9394 95.6666 91.3327C95.6666 93.7259 93.7265 95.666 91.3332 95.666H4.66658C2.27335 95.666 0.333252 93.7259 0.333252 91.3327C0.333252 88.9394 2.27335 86.9993 4.66658 86.9993H20.4796L42.0806 49.5854L14.1788 33.4763C13.2653 32.9491 12.3294 32.409 11.5651 31.8604C10.6828 31.2271 9.77118 30.4092 9.0714 29.2103C8.10128 27.5481 7.69207 25.3295 8.00538 23.4306C8.4186 20.9263 9.98275 19.1886 11.0362 17.8923ZM17.762 23.358C26.5037 12.601 40.2284 7.46712 53.5734 9.38924C52.3835 10.1548 51.1986 11.0063 50.026 11.9289C43.702 16.9052 37.1726 24.3993 31.4735 33.454L16.6199 24.8205C16.7881 24.5716 17.1641 24.0937 17.762 23.358ZM78.2237 28.2089C77.0761 36.1738 73.8508 45.5754 68.8587 55.0383L83.7629 63.5856C83.8944 63.3155 84.1202 62.7509 84.4584 61.8652C89.4036 48.9159 86.9871 34.4627 78.6495 23.8665C78.5814 25.2799 78.4365 26.732 78.2237 28.2089Z"
            fill="#798AA3"
          />
        </svg>

        <div className="flex flex-col items-center space-y-2 pt-10">
          <h3 className="text-[#282F3D] leading-9 text-center font-semibold text-[24px]">
            Nenhum food truck encontrado
          </h3>

          <p className="text-[#798AA3] text-center text-sm break-words">
            Não encontramos nenhum food truck com os filtros selecionados
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full space-y-8">
      {/* Dishes Section */}
      {filteredDishes.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Pratos encontrados</h2>
          <div
            className={cn(
              "w-full gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
              className
            )}
          >
            {filteredDishes.map((dish) => (
              <CardDishView
                key={dish.id}
                dish={dish}
                className="min-w-[280px] mb-6 md:mb-0"
              />
            ))}
          </div>
        </div>
      )}

      {/* Restaurants Section */}
      {restaurants.length > 0 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            {filteredDishes.length > 0 ? "Food Trucks encontrados" : "Food Trucks em destaque"}
          </h2>
          <div
            {...props}
            className={cn(
              "w-full gap-6 md:grid md:grid-cols-2 xl:grid-cols-3",
              className
            )}
          >
            {loading &&
              Array.from({ length: 6 }).map((_, index) => (
                <CardRestaurantSkeleton
                  key={index}
                  className="w-full min-w-[280px]"
                />
              ))}

            {!loading &&
              restaurants.map((restaurant) => (
                <CardRestaurantView
                  key={restaurant.id}
                  restaurant={restaurant}
                  className="min-w-[280px] mb-6 md:mb-0"
                />
              ))}
          </div>
        </div>
      )}

      {/* Pagination */}
      {restaurants.length > 0 && (
        <div className="flex justify-end">
          <BasePaginationView
            pagination={mockData?.topRestaurantes?.metadata}
            showTotalPages={false}
            onPageChange={(page: number) => {
              console.log("Mudando para página:", page);
            }}
          />
        </div>
      )}
    </div>
  );
};

export { ListRestaurantsCardView };
export default ListRestaurantsCardView;
