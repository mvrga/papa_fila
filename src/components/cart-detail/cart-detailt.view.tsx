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
import { useState } from "react";
import { CartItemsListView } from "../cart-items-list/cart-items-list.view";
import { OrderConfirmationView } from "../order-confirmation/order-confirmation.view";
import { WaitingConfirmationView } from "../waiting-confirmation/waiting-confirmation.view";

export const CartDetailView = ({
  onlyIcon = false,
}: { onlyIcon?: boolean } = {}) => {
  const { totalItems, totalPrice, items, clearCart } = useCart();
  const [fastPass, setFastPass] = useState(false);
  const [showWaitingConfirmation, setShowWaitingConfirmation] = useState(false);
  const [showOrderConfirmation, setShowOrderConfirmation] = useState(false);
  const [orderId, setOrderId] = useState("");
  const [isSheetOpen, setIsSheetOpen] = useState(false);

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

  const fastPassFee = 5.0;
  const subtotal = totalPrice;
  const desconto = calculateDiscount();
  const total = subtotal - desconto + (fastPass ? fastPassFee : 0);

  const generateOrderId = () => {
    return `PP${Date.now().toString().slice(-8)}${Math.random()
      .toString(36)
      .substr(2, 4)
      .toUpperCase()}`;
  };

  const handleFinalizarPedido = () => {
    if (items.length === 0) return;

    const newOrderId = generateOrderId();
    setOrderId(newOrderId);
    setIsSheetOpen(false);
    setShowWaitingConfirmation(true);
  };

  const handleConfirmationReceived = () => {
    setShowWaitingConfirmation(false);
    setShowOrderConfirmation(true);
  };

  const handleCloseOrderConfirmation = () => {
    setShowOrderConfirmation(false);
    setOrderId("");
    clearCart();
  };

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <button
          className={
            onlyIcon
              ? "relative flex flex-col items-center justify-center w-full"
              : "flex gap-1 items-center"
          }
        >
          <span className="relative">
            <ShoppingCart className={onlyIcon ? "h-6 w-6" : "h-5 w-5"} />
            {totalItems > 0 && (
              <span
                className={
                  onlyIcon
                    ? "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center min-w-[16px] shadow-md border-2 border-white"
                    : "absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full size-5 flex items-center justify-center min-w-[16px] shadow-md border-2 border-white"
                }
              >
                {totalItems}
              </span>
            )}
          </span>
          {!onlyIcon && <span>Carrinho</span>}
        </button>
      </SheetTrigger>

      <SheetContent className="w-full sm:max-w-lg flex flex-col">
        <SheetHeader className="px-4 sm:px-6 pb-4 border-b">
          <SheetTitle className="text-left text-xl font-semibold">
            Seu carrinho
          </SheetTitle>
          <SheetDescription className="text-left text-sm text-muted-foreground mt-1">
            Revise seus itens antes de finalizar
          </SheetDescription>
        </SheetHeader>

        <div className="flex-1 flex flex-col min-h-0">
          <div className="flex-1 overflow-auto py-4">
            <div className="px-4 sm:px-6">
              <CartItemsListView />
            </div>
          </div>

          <div className="border-t bg-background/50 backdrop-blur-sm">
            <div className=" py-4 space-y-4">
              <div className="bg-muted/30 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    Subtotal
                  </span>
                  <span className="text-sm font-medium">
                    {formatPrice(subtotal)}
                  </span>
                </div>

                {desconto > 0 ? (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Desconto progressivo
                    </span>
                    <span className="text-sm font-medium text-green-600">
                      -{formatPrice(desconto)}
                    </span>
                  </div>
                ) : (
                  <div className="flex justify-between items-center opacity-50">
                    <span className="text-sm text-muted-foreground">
                      Desconto
                    </span>
                    <span className="text-sm text-muted-foreground">
                      R$ 0,00
                    </span>
                  </div>
                )}

                {fastPass && (
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">
                      Fast Pass
                    </span>
                    <span className="text-sm font-medium text-blue-600">
                      +{formatPrice(fastPassFee)}
                    </span>
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

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mx-2">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={fastPass}
                    onChange={(e) => setFastPass(e.target.checked)}
                    className="mt-1 h-4 w-4 text-blue-600 border-2 border-blue-300 rounded focus:ring-blue-500"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-blue-900">
                      Fast Pass (+R$ 5,00)
                    </div>
                    <div className="text-xs text-blue-700 mt-1">
                      Entrega prioritária - seu pedido será preparado e entregue
                      mais rapidamente
                    </div>
                  </div>
                </label>
              </div>
            </div>
            <div className="px-4 py-4">
              <Button
                onClick={handleFinalizarPedido}
                disabled={items.length === 0}
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-2.5 rounded-lg shadow-sm disabled:opacity-50 disabled:cursor-not-allowed "
              >
                Finalizar Pedido
              </Button>
            </div>
          </div>
        </div>
      </SheetContent>

      <OrderConfirmationView
        isOpen={showOrderConfirmation}
        onClose={handleCloseOrderConfirmation}
        items={items.map((item) => ({
          ...item,
          id: item.id.toString(),
          restaurantName:
            item.restaurantSlug.charAt(0).toUpperCase() +
            item.restaurantSlug.slice(1),
        }))}
        total={total}
        fastPass={fastPass}
        orderId={orderId}
      />

      <WaitingConfirmationView
        isOpen={showWaitingConfirmation}
        onConfirmed={handleConfirmationReceived}
        orderId={orderId}
      />
    </Sheet>
  );
};
