import Link from "next/link";
import { Clock, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  slug: string;
  prepTime: number;
  rating: number;
  category: string;
  type: "comida" | "bebida";
  restaurantSlug: string;
  restaurantName?: string;
}

interface CardDishProps {
  dish: Dish;
  className?: string;
}

export const CardDishView = ({ dish, className }: CardDishProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <Link 
      href={`/${dish.restaurantSlug}/prato/${dish.slug}`}
      className={cn("block group", className)}
    >
      <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-200 group-hover:shadow-lg transition-all duration-300">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/95 backdrop-blur-sm text-gray-800">
            {dish.category}
          </span>
        </div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <div className="text-white">
            <h3 className="font-semibold text-lg leading-tight mb-1 group-hover:text-white transition-colors">
              {dish.name}
            </h3>
            <p className="text-white/80 text-sm mb-3 line-clamp-2">
              {dish.description}
            </p>
            
            <div className="flex items-center justify-between">
              <span className="text-xl font-bold text-white">
                {formatPrice(dish.price)}
              </span>
              
              <div className="flex items-center gap-3 text-white/90">
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{dish.prepTime}min</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-current text-yellow-400" />
                  <span className="text-sm">{dish.rating}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};