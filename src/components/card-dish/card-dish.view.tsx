import React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { Clock, Star } from "lucide-react";

interface CardDishProps extends React.HTMLAttributes<HTMLAnchorElement> {
  dish: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    slug: string;
    prepTime?: number;
    rating?: number;
    category?: string;
    restaurantSlug: string;
  };
}

const CardDishView: React.FC<CardDishProps> = ({
  dish,
  className,
  ...props
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price);
  };

  return (
    <Link href={`/${dish.restaurantSlug}/prato/${dish.slug}`} {...props}>
      <div
        className={cn(
          'w-full aspect-square relative rounded-xl overflow-hidden cursor-pointer',
          className
        )}
      >
        <img
          className="object-cover w-full h-full"
          src={dish.image}
          alt={dish.name}
        />
        
        {dish.category && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-white/95 backdrop-blur-sm rounded-md">
            <span className="text-xs font-medium text-gray-700">
              {dish.category}
            </span>
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white text-lg font-semibold mb-2 break-words">
            {dish.name}
          </h3>
          
          <p className="text-white/90 text-sm line-clamp-2 mb-3">
            {dish.description}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-white text-xl font-bold">
              {formatPrice(dish.price)}
            </span>
            
            <div className="flex items-center space-x-3">
              {dish.rating && (
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-white text-sm font-medium">
                    {dish.rating}
                  </span>
                </div>
              )}

              {dish.prepTime && (
                <div className="flex items-center space-x-1">
                  <Clock className="w-4 h-4 text-white/70" />
                  <span className="text-white/70 text-sm">
                    {dish.prepTime} min
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardDishView;

export const CardDishSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full aspect-square rounded-xl bg-slate-200 animate-pulse", className)} />
  );
};