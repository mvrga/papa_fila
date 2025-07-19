import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { useCart } from "@/contexts/cart-context";
import { CartItemsListView } from "../cart-items-list/cart-items-list.view";

export const CartDetailView = () => {
  const { totalItems, totalPrice, items, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const discountRules = [
    { porcentagem: 25, quantidade: 5 },
    { porcentagem: 20, quantidade: 4 },
    { porcentagem: 15, quantidade: 3 },
    { porcentagem: 10, quantidade: 2 },
  ];

  const calculateDiscount = () => {
    let totalDiscount = 0;

    const groupedItems: Record<string, typeof items> = {};
    items.forEach((item) => {
      if (!groupedItems[item.restaurantSlug]) {
        groupedItems[item.restaurantSlug] = [];
      }
      groupedItems[item.restaurantSlug].push(item);
    });

    Object.values(groupedItems).forEach((restaurantItems) => {
      const totalItemsInRestaurant = restaurantItems.reduce(
        (sum: number, item: { quantity: number }) => sum + item.quantity,
        0
      );
      const restaurantSubtotal = restaurantItems.reduce(
        (sum: number, item: { price: number; quantity: number }) =>
          sum + item.price * item.quantity,
        0
      );

      const applicableDiscount = discountRules.find(
        (rule) => totalItemsInRestaurant >= rule.quantidade
      );

      if (applicableDiscount) {
        totalDiscount +=
          restaurantSubtotal * (applicableDiscount.porcentagem / 100);
      }
    });

    return totalDiscount;
  };

  const subtotal = totalPrice;
  const desconto = calculateDiscount();
  const total = subtotal - desconto;

  const handleFinalizarPedido = () => {
    console.log("Finalizar pedido");
  };

  const handleCancelar = () => {
    clearCart();
  };

  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex gap-1 items-center">
          <span className="relative">
            <ShoppingCart className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full size-5 flex items-center justify-center min-w-[16px] shadow-md border-2 border-white">
                {totalItems}
              </span>
            )}
          </span>
          <span className="">Carrinho</span>
        </div>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader className="px-6 pb-4 border-b">
          <SheetTitle className="text-left text-xl font-semibold">Seu Carrinho</SheetTitle>
          <SheetDescription className="text-left text-sm text-muted-foreground mt-1">
            Revise seus itens antes de finalizar
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 overflow-auto py-4">
            <div className="px-6">
              <CartItemsListView />
            </div>
          </div>

          <div className="border-t bg-background/50 backdrop-blur-sm">
            <div className="px-6 py-4 space-y-4">
              {/* Resumo financeiro melhorado */}
              <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Subtotal</span>
                  <span className="text-sm font-medium">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                {desconto > 0 ? (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Desconto progressivo</span>
                    <span className="text-sm font-medium text-green-600">
                      -{formatPrice(desconto)}
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-between items-center opacity-50">
                    <span className="text-sm text-muted-foreground">Desconto</span>
                    <span className="text-sm text-muted-foreground">R$ 0,00</span>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-foreground">
                    Total
                  </span>
                  <span className="text-xl font-bold text-primary">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <Button
                onClick={handleFinalizarPedido}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-lg shadow-sm"
              >
                Finalizar Pedido
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};
