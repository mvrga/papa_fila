/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { cn } from "@/lib/utils";

interface CartItemsListProps {
  className?: string;
}

export const CartItemsListView: React.FC<CartItemsListProps> = ({
  className,
}) => {
  const { items, updateQuantity, removeItem } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const handleDecrease = (id: number, currentQuantity: number) => {
    if (currentQuantity === 1) {
      removeItem(id);
    } else {
      updateQuantity(id, currentQuantity - 1);
    }
  };

  const handleIncrease = (id: number, currentQuantity: number) => {
    updateQuantity(id, currentQuantity + 1);
  };

  const groupedItems = React.useMemo(() => {
    const groups: Record<string, typeof items> = {};

    items.forEach((item) => {
      if (!groups[item.restaurantSlug]) {
        groups[item.restaurantSlug] = [];
      }
      groups[item.restaurantSlug].push(item);
    });

    return groups;
  }, [items]);

  const getRestaurantStats = (restaurantItems: typeof items) => {
    const totalItems = restaurantItems.reduce(
      (sum, item) => sum + item.quantity,
      0
    );
    const totalPrice = restaurantItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { totalItems, totalPrice };
  };

  const formatRestaurantName = (slug: string) => {
    return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  if (items.length === 0) {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center py-12 text-center",
          className
        )}
      >
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">
          Seu carrinho está vazio
        </h3>
        <p className="text-gray-500 text-sm">
          Adicione alguns pratos deliciosos para começar!
        </p>
      </div>
    );
  }

  return (
    <div className={cn("w-full h-auto flex flex-col space-y-6", className)}>
      {/* Itens agrupados por restaurante */}
      {Object.entries(groupedItems).map(([restaurantSlug, restaurantItems]) => {
        const { totalItems, totalPrice: restaurantTotal } =
          getRestaurantStats(restaurantItems);

        return (
          <div
            key={restaurantSlug}
            className="w-full h-auto flex flex-col space-y-4"
          >
            {/* Cabeçalho do restaurante */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col space-y-1">
                <h3 className="font-bold text-foreground text-base uppercase tracking-wide">
                  {formatRestaurantName(restaurantSlug)}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {totalItems} {totalItems === 1 ? "item" : "itens"} -{" "}
                  {formatPrice(restaurantTotal)}
                </p>
              </div>
            </div>

            <div className="w-full flex flex-col space-y-3">
              {restaurantItems.map((item) => (
                <div
                  key={item.id}
                  className="w-full flex justify-between items-center"
                >
                  <div className="flex space-x-4 justify-start items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <div className="space-y-1">
                      <h4 className="font-medium text-foreground text-sm leading-tight">
                        {item.name}
                      </h4>
                      <p className="text-muted-foreground text-xs">
                        ID {item.id}
                      </p>
                      <p className="font-semibold text-sm text-foreground">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-1">
                    <button
                      className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => handleDecrease(item.id, item.quantity)}
                    >
                      {item.quantity === 1 ? (
                        <Trash2 className="h-4 w-4" />
                      ) : (
                        <Minus className="h-4 w-4" />
                      )}
                    </button>

                    <span className="text-sm font-medium text-foreground min-w-[24px] text-center">
                      {item.quantity}
                    </span>

                    <button
                      className="w-6 h-6 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
                      onClick={() => handleIncrease(item.id, item.quantity)}
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartItemsListView;
