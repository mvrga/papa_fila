import React, { useState, useMemo } from "react";
import { CardDishView } from "@/components/card-dish";
import { BasePaginationView } from "@/components/base-pagination";

interface ListDishesCardProps {
  restaurantSlug: string;
  searchTerm?: string | null;
  sortBy?: string | null;
}

const ListDishesCardView: React.FC<ListDishesCardProps> = ({
  restaurantSlug,
  searchTerm,
  sortBy,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Dados mock dos pratos - em produção viria de uma API
  const mockDishes = [
    {
      id: 1,
      name: "Pizza Margherita",
      description: "Pizza tradicional com molho de tomate, mussarela de búfala, manjericão fresco e azeite extravirgem",
      price: 32.90,
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "pizza-margherita",
      prepTime: 25,
      rating: 4.8,
      category: "Pizza",
      restaurantSlug,
    },
    {
      id: 2,
      name: "Hambúrguer Artesanal",
      description: "Pão brioche, hambúrguer 180g, queijo cheddar, alface americana, tomate e molho especial da casa",
      price: 28.50,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "hamburguer-artesanal",
      prepTime: 20,
      rating: 4.6,
      category: "Hambúrguer",
      restaurantSlug,
    },
    {
      id: 3,
      name: "Risotto de Camarão",
      description: "Arroz arbóreo cremoso com camarões frescos, alho, vinho branco e parmesão",
      price: 45.00,
      image: "https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "risotto-camarao",
      prepTime: 35,
      rating: 4.9,
      category: "Pratos Principais",
      restaurantSlug,
    },
    {
      id: 4,
      name: "Salmão Grelhado",
      description: "Filé de salmão grelhado com legumes no vapor e molho de ervas",
      price: 42.00,
      image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "salmao-grelhado",
      prepTime: 30,
      rating: 4.7,
      category: "Peixes",
      restaurantSlug,
    },
    {
      id: 5,
      name: "Tacos Mexicanos",
      description: "Tortillas de milho com carne desfiada, guacamole, pico de gallo e creme azedo",
      price: 24.90,
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "tacos-mexicanos",
      prepTime: 15,
      rating: 4.5,
      category: "Mexicano",
      restaurantSlug,
    },
    {
      id: 6,
      name: "Tiramisu",
      description: "Sobremesa italiana clássica com café, mascarpone e cacau em pó",
      price: 18.00,
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "tiramisu",
      prepTime: 10,
      rating: 4.8,
      category: "Sobremesas",
      restaurantSlug,
    },
    {
      id: 7,
      name: "Lasanha Bolognesa",
      description: "Lasanha tradicional com molho bolognesa, bechamel e queijo parmesão",
      price: 38.00,
      image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "lasanha-bolognesa",
      prepTime: 40,
      rating: 4.7,
      category: "Massas",
      restaurantSlug,
    },
    {
      id: 8,
      name: "Frango à Parmegiana",
      description: "Filé de frango empanado com molho de tomate e queijo derretido",
      price: 35.50,
      image: "https://images.unsplash.com/photo-1608039755401-742074f0548d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "frango-parmegiana",
      prepTime: 30,
      rating: 4.6,
      category: "Pratos Principais",
      restaurantSlug,
    },
    {
      id: 9,
      name: "Ceviche de Peixe",
      description: "Peixe fresco marinado em limão com cebola roxa, pimenta e coentro",
      price: 32.00,
      image: "https://images.unsplash.com/photo-1565299585323-38174c13c7d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "ceviche-peixe",
      prepTime: 20,
      rating: 4.8,
      category: "Peixes",
      restaurantSlug,
    },
    {
      id: 10,
      name: "Pad Thai",
      description: "Macarrão de arroz salteado com camarão, amendoim, broto de feijão e molho tamarindo",
      price: 29.90,
      image: "https://images.unsplash.com/photo-1559314809-0f31657da1bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "pad-thai",
      prepTime: 25,
      rating: 4.5,
      category: "Asiático",
      restaurantSlug,
    },
    {
      id: 11,
      name: "Cheesecake de Frutas Vermelhas",
      description: "Cheesecake cremoso com calda de frutas vermelhas",
      price: 22.00,
      image: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "cheesecake-frutas-vermelhas",
      prepTime: 10,
      rating: 4.9,
      category: "Sobremesas",
      restaurantSlug,
    },
    {
      id: 12,
      name: "Burrito Mexicano",
      description: "Tortilla de farinha com carne, feijão, queijo, guacamole e salsa",
      price: 26.50,
      image: "https://images.unsplash.com/photo-1566740933430-b5e70b06d2d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      slug: "burrito-mexicano",
      prepTime: 20,
      rating: 4.4,
      category: "Mexicano",
      restaurantSlug,
    },
  ];

  // Processar filtros e ordenação com useMemo para performance
  const processedDishes = useMemo(() => {
    let filtered = mockDishes;

    // Filtrar por termo de busca
    if (searchTerm) {
      filtered = mockDishes.filter(dish =>
        dish.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        dish.category.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Ordenar
    if (sortBy) {
      filtered = [...filtered].sort((a, b) => {
        switch (sortBy) {
          case "prep-asc":
            return (a.prepTime || 0) - (b.prepTime || 0);
          case "prep-desc":
            return (b.prepTime || 0) - (a.prepTime || 0);
          case "price":
            return a.price - b.price;
          case "rating":
            return (b.rating || 0) - (a.rating || 0);
          default:
            return 0;
        }
      });
    }

    return filtered;
  }, [searchTerm, sortBy]);

  // Resetar página quando filtros mudarem
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, sortBy]);

  // Cálculos de paginação
  const totalItems = processedDishes.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentDishes = processedDishes.slice(startIndex, endIndex);

  const paginationData = {
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll para o topo da seção quando mudar de página
    document.querySelector('#dishes-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="flex flex-col gap-8">
      <div id="dishes-section" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {currentDishes.map((dish) => (
          <CardDishView key={dish.id} dish={dish} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-end">
          <BasePaginationView
            pagination={paginationData}
            onPageChange={handlePageChange}
            showTotalPages={false}
            className="mt-8"
          />
        </div>
      )}
    </div>
  );
};

export default ListDishesCardView;