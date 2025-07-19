/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { use } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Share, Star, Clock } from "lucide-react";
import { HeaderView } from "@/components/header/header.view";
import BaseFooter from "@/components/base-footer";
import { BackButton } from "@/components/back-button";
import { useCart } from "@/contexts/cart-context";
import { toast } from "sonner";

interface DishPageProps {
  params: Promise<{
    slug: string;
    dishSlug: string;
  }>;
}

// Função para buscar dados do prato baseado nos slugs
function getDishData(restaurantSlug: string, dishSlug: string) {
  // Base de dados mock dos pratos por restaurante

  const dishesDatabase: Record<string, any> = {
    "pizza-margherita": {
      name: "Pizza Margherita",
      price: 32.9,
      rating: 4.8,
      prepTime: 25,
      orders: 142,
      description:
        "Uma deliciosa pizza tradicional italiana com molho de tomate artesanal, mussarela de búfala fresca, manjericão cultivado localmente e um toque de azeite extravirgem premium. Massa fermentada por 48 horas para máxima digestibilidade e sabor autêntico.",
      ingredients: [
        "Molho de tomate artesanal",
        "Mussarela de búfala",
        "Manjericão fresco",
        "Azeite extravirgem",
        "Massa fermentada 48h",
      ],
      variants: [
        { name: "Pequena (25cm)", price: 28.9 },
        { name: "Média (30cm)", price: 32.9 },
        { name: "Grande (35cm)", price: 38.9 },
      ],
      images: [
        "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1542282088-fe8426682b8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    "hamburguer-artesanal": {
      name: "Hambúrguer Artesanal",
      price: 28.5,
      rating: 4.6,
      prepTime: 20,
      orders: 89,
      description:
        "Hambúrguer premium com pão brioche artesanal, blend de carnes nobres 180g, queijo cheddar inglês derretido, alface americana crocante, tomate holandês e nosso molho especial da casa com ervas finas. Acompanha batatas rústicas temperadas.",
      ingredients: [
        "Pão brioche artesanal",
        "Blend de carnes 180g",
        "Queijo cheddar inglês",
        "Alface americana",
        "Tomate holandês",
        "Molho especial da casa",
      ],
      variants: [
        { name: "Simples", price: 25.5 },
        { name: "Com bacon", price: 28.5 },
        { name: "Duplo", price: 35.9 },
      ],
      images: [
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    "risotto-camarao": {
      name: "Risotto de Camarão",
      price: 45.0,
      rating: 4.9,
      prepTime: 35,
      orders: 67,
      description:
        "Cremoso risotto preparado com arroz arbóreo italiano, camarões frescos da costa, vinho branco seco, alho confit, manteiga de primeira qualidade e queijo parmesão reggiano envelhecido. Finalizado com ervas finas e azeite trufado.",
      ingredients: [
        "Arroz arbóreo italiano",
        "Camarões frescos",
        "Vinho branco seco",
        "Alho confit",
        "Parmesão reggiano",
        "Ervas finas",
        "Azeite trufado",
      ],
      variants: [
        { name: "Individual", price: 45.0 },
        { name: "Para 2 pessoas", price: 78.0 },
      ],
      images: [
        "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563379091339-03246963d388?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565299507177-b0ac66763828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    "salmao-grelhado": {
      name: "Salmão Grelhado",
      price: 42.0,
      rating: 4.7,
      prepTime: 30,
      orders: 95,
      description:
        "Filé de salmão norueguês grelhado na perfeição, servido com quinoa colorida, aspargos frescos no vapor, brócolis baby e molho de ervas cítricas. Prato equilibrado, saudável e saboroso, ideal para quem busca uma refeição nutritiva.",
      ingredients: [
        "Salmão norueguês",
        "Quinoa colorida",
        "Aspargos frescos",
        "Brócolis baby",
        "Molho de ervas cítricas",
      ],
      variants: [
        { name: "Porção individual", price: 42.0 },
        { name: "Porção família", price: 68.0 },
      ],
      images: [
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1559847844-d05ce0e1b2e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    "tacos-mexicanos": {
      name: "Tacos Mexicanos",
      price: 24.9,
      rating: 4.5,
      prepTime: 15,
      orders: 123,
      description:
        "Autênticos tacos mexicanos com tortillas de milho feitas na casa, carne desfiada temperada com especiarias tradicionais, guacamole cremoso, pico de gallo fresco, creme azedo e queijo cheddar. Acompanha molho picante artesanal.",
      ingredients: [
        "Tortillas de milho caseiras",
        "Carne desfiada temperada",
        "Guacamole",
        "Pico de gallo",
        "Creme azedo",
        "Queijo cheddar",
        "Molho picante",
      ],
      variants: [
        { name: "3 unidades", price: 24.9 },
        { name: "5 unidades", price: 38.9 },
        { name: "Kit família (8 unidades)", price: 58.9 },
      ],
      images: [
        "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1565299585323-38174c13c7d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
    tiramisu: {
      name: "Tiramisu",
      price: 18.0,
      rating: 4.8,
      prepTime: 10,
      orders: 78,
      description:
        "Clássica sobremesa italiana preparada com biscoitos savoiardi embebidos em café espresso forte, creme mascarpone artesanal, ovos frescos e açúcar. Finalizado com cacau em pó belga premium e uma pitada de canela. Sobremesa que derrete na boca.",
      ingredients: [
        "Biscoitos savoiardi",
        "Café espresso",
        "Mascarpone artesanal",
        "Ovos frescos",
        "Cacau belga",
        "Canela",
      ],
      variants: [
        { name: "Individual", price: 18.0 },
        { name: "Fatia dupla", price: 28.0 },
      ],
      images: [
        "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      ],
    },
  };

  return dishesDatabase[dishSlug] || null;
}

export default function DishPage({ params }: DishPageProps) {
  const resolvedParams = use(params);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addItem } = useCart();

  const dish = getDishData(resolvedParams.slug, resolvedParams.dishSlug);

  if (!dish) {
    return (
      <main>
        <HeaderView />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Prato não encontrado
          </h1>
          <p className="text-gray-600">
            O prato que você está procurando não existe ou foi removido do
            cardápio.
          </p>
        </div>
        <BaseFooter />
      </main>
    );
  }

  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % dish.images.length);
  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + dish.images.length) % dish.images.length
    );

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    // Aqui você pode adicionar uma notificação de sucesso
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const generateIdFromSlug = (dishSlug: string, restaurantSlug: string) => {
    // Gera um ID único baseado no hash do slug do prato + restaurante
    const combined = `${restaurantSlug}-${dishSlug}`;
    let hash = 0;
    for (let i = 0; i < combined.length; i++) {
      const char = combined.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // Convert to 32-bit integer
    }
    return Math.abs(hash);
  };

  const handleAddToCart = () => {
    addItem({
      id: generateIdFromSlug(resolvedParams.dishSlug, resolvedParams.slug),
      name: dish.name,
      price: dish.price,
      image: dish.images[0],
      slug: resolvedParams.dishSlug,
      restaurantSlug: resolvedParams.slug,
    });

    toast.success(`${dish.name} adicionado ao carrinho!`, {
      description: `${formatPrice(dish.price)} • Food Truck`,
      duration: 3000,
    });
  };

  return (
    <main>
      <HeaderView />
      <BackButton />

      <section className="lg:md:mx-[8.75rem] md:px-8 lg:px-0 px-4 py-32">
        <div className="flex flex-col lg:flex-row lg:space-x-8 xl:space-x-32">
          {/* Left Column */}
          <div className="flex flex-col space-y-6 lg:w-1/2">
            <div className="flex flex-col lg:flex-row lg:space-x-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={dish.images[currentImageIndex]}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-4 flex justify-between lg:mt-0 lg:flex-col">
                <Button
                  variant="outline"
                  size="icon"
                  className="w-10 h-10 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200 lg:w-11 lg:h-11"
                  onClick={copyLink}
                >
                  <Share className="h-5 w-5" />
                  <span className="sr-only">Compartilhar prato</span>
                </Button>

                <div className="mt-4 flex gap-4 lg:mt-auto lg:flex-col">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevImage}
                    className="w-10 h-10 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200 lg:w-11 lg:h-11"
                  >
                    <ChevronLeft className="h-5 w-5" />
                    <span className="sr-only">Imagem anterior</span>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextImage}
                    className="w-10 h-10 rounded-lg bg-gray-100 shadow-sm hover:bg-gray-200 lg:w-11 lg:h-11"
                  >
                    <ChevronRight className="h-5 w-5" />
                    <span className="sr-only">Próxima imagem</span>
                  </Button>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-2 sm:gap-4">
              {dish.images.map((image: string, index: number) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative aspect-square overflow-hidden rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                    currentImageIndex === index
                      ? "ring-2 ring-blue-500"
                      : "hover:opacity-80"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${dish.name} foto ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="mt-10 flex flex-col justify-between lg:mt-0 lg:w-1/2">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                  {dish.name}
                </h1>
                <p className="text-sm font-medium text-gray-500">
                  {dish.orders} pedidos
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{dish.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-600">{dish.prepTime} min</span>
                </div>
              </div>

              <p className="text-xl font-bold text-gray-900 sm:text-2xl">
                {formatPrice(dish.price)}
              </p>

              <hr className="border-t border-dashed border-gray-300" />

              <div>
                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                  Descrição
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-700 sm:text-base">
                  {dish.description}
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-gray-900 sm:text-xl">
                  Ingredientes
                </h2>
                <ul className="mt-2 space-y-1">
                  {dish.ingredients.map((ingredient: string, index: number) => (
                    <li
                      key={index}
                      className="text-sm text-gray-700 sm:text-base"
                    >
                      • {ingredient}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            <Button 
              onClick={handleAddToCart}
              className="mt-8 w-full text-base sm:text-lg"
            >
              Adicionar ao carrinho
            </Button>
          </div>
        </div>
      </section>

      <RecommendedDishes />
      <BaseFooter />
    </main>
  );
}

function RecommendedDishes() {
  const dishes = [
    {
      name: "Hambúrguer Artesanal",
      price: 28.5,
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Risotto de Camarão",
      price: 45.0,
      image:
        "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Salmão Grelhado",
      price: 42.0,
      image:
        "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Pad Thai",
      price: 29.9,
      image:
        "https://images.unsplash.com/photo-1559314809-0f31657da1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <section className="mx-auto lg:px-[8.75rem] md:px-8 px-4 pb-32 flex flex-col space-y-10">
      <h2 className="text-2xl font-medium text-gray-900">
        Pratos recomendados
      </h2>

      <div className="flex w-full h-auto gap-4 overflow-x-auto">
        {dishes.map((dish, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-64 sm:w-72 md:w-80 lg:w-96"
          >
            <div className="bg-white rounded-xl overflow-hidden border border-gray-100">
              <div className="aspect-square relative">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  {dish.name}
                </h3>
                <p className="text-xl font-bold text-gray-900">
                  {formatPrice(dish.price)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
