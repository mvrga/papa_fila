export const mockDishes = [
  {
    id: 1,
    name: "Pizza Margherita",
    description:
      "Pizza tradicional com molho de tomate, mussarela de búfala, manjericão fresco e azeite extravirgem",
    price: 32.9,
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop",
    slug: "pizza-margherita",
    prepTime: 25,
    rating: 4.8,
    category: "Pizza",
    type: "comida" as const,
    restaurantSlug: "outback-steakhouse",
    restaurantName: "Outback Steakhouse",
  },
  {
    id: 2,
    name: "Hambúrguer Artesanal",
    description:
      "Pão brioche, hambúrguer 180g, queijo cheddar, alface americana, tomate e molho especial da casa",
    price: 28.5,
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop",
    slug: "hamburguer-artesanal",
    prepTime: 20,
    rating: 4.6,
    category: "Hambúrguer",
    type: "comida" as const,
    restaurantSlug: "spoleto",
    restaurantName: "Spoleto",
  },
  {
    id: 3,
    name: "Risotto de Camarão",
    description:
      "Arroz arbóreo cremoso com camarões frescos, alho, vinho branco e parmesão",
    price: 45.0,
    image:
      "https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop",
    slug: "risotto-camarao",
    prepTime: 35,
    rating: 4.9,
    category: "Pratos Principais",
    type: "comida" as const,
    restaurantSlug: "subway",
    restaurantName: "Subway",
  },
  {
    id: 4,
    name: "Salmão Grelhado",
    description:
      "Filé de salmão grelhado com legumes no vapor e molho de ervas",
    price: 42.0,
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&h=300&fit=crop",
    slug: "salmao-grelhado",
    prepTime: 30,
    rating: 4.7,
    category: "Peixes",
    type: "comida" as const,
    restaurantSlug: "habibs",
    restaurantName: "Habib's",
  },
  {
    id: 5,
    name: "Tacos Mexicanos",
    description:
      "Tortillas de milho com carne desfiada, guacamole, pico de gallo e creme azedo",
    price: 24.9,
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=400&h=300&fit=crop",
    slug: "tacos-mexicanos",
    prepTime: 15,
    rating: 4.5,
    category: "Mexicano",
    type: "comida" as const,
    restaurantSlug: "mcdonalds",
    restaurantName: "McDonald's",
  },
  {
    id: 6,
    name: "Tiramisu",
    description:
      "Sobremesa italiana clássica com café, mascarpone e cacau em pó",
    price: 18.0,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop",
    slug: "tiramisu",
    prepTime: 10,
    rating: 4.8,
    category: "Sobremesas",
    type: "comida" as const,
    restaurantSlug: "brahma-lounge",
    restaurantName: "Brahma Lounge",
  },
];
