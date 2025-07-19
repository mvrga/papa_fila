import React from "react";

import { cn } from "@/lib/utils";
import Link from "next/link";

interface CardRestaurantProps
  extends React.HTMLAttributes<HTMLAnchorElement> {
  restaurant: {
    id: number;
    name: string;
    location: string;
    avatar: string;
    image: string;
    slug: string;
    rating?: number;
    pro?: "basico" | "pro";
  };
}

const CardRestaurantView: React.FC<CardRestaurantProps> = ({
  restaurant,
  className,
  ...props
}) => {
  return (
    <Link
      href={restaurant.slug}
      key={restaurant.id}
      className={cn("flex flex-col space-y-2", className)}
      {...props}
    >
      {restaurant.image ? (
        <div className="group cursor-pointer aspect-video relative overflow-hidden rounded-lg bg-[#ddd]">
          <div
            className={"w-full h-full"}
            style={{
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundImage: `url(${restaurant.image})`,
            }}
          />
        </div>
      ) : (
        <div className="bg-slate-200 h-full rounded-lg overflow-hidden group cursor-pointer aspect-video relative" />
      )}

      <div className="flex items-center space-x-3">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={restaurant.avatar}
            alt={restaurant.name}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {restaurant.name}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {restaurant.location}
          </p>
          <div className="flex items-center gap-2 mt-1">
            {restaurant.rating && (
              <div className="flex items-center">
                <span className="text-xs text-yellow-500">★</span>
                <span className="text-xs text-gray-600 ml-1">
                  {restaurant.rating}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardRestaurantView;

export const CardRestaurantSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={cn("flex flex-col space-y-2 animate-pulse", className)}>
      <div className="bg-slate-200 h-32 rounded-lg" />
      <div className="flex items-center space-x-3">
        <div className="h-10 w-10 bg-slate-200 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="h-4 bg-slate-200 rounded w-3/4" />
          <div className="h-3 bg-slate-200 rounded w-1/2" />
        </div>
      </div>
    </div>
  );
};