import { useEffect, useState } from "react";
import QRCode from "qrcode";
import { Clock, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import { useRouter } from "next/navigation";

interface OrderItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  restaurantSlug: string;
  restaurantName: string;
}

interface OrderConfirmationProps {
  isOpen: boolean;
  onClose: () => void;
  items: OrderItem[];
  total: number;
  fastPass: boolean;
  orderId: string;
  scheduledTime?: string;
}

interface RestaurantTimer {
  restaurantSlug: string;
  restaurantName: string;
  estimatedTime: number;
  remainingTime: number;
  status: "preparing" | "ready";
}

export const OrderConfirmationView = ({
  isOpen,
  onClose,
  items,
  total,
  fastPass,
  orderId,
  scheduledTime,
}: OrderConfirmationProps) => {
  const router = useRouter();
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");
  const [restaurantTimers, setRestaurantTimers] = useState<RestaurantTimer[]>(
    []
  );

  const handleNavigateToStatus = () => {
    router.push("/status");
    onClose(); // Close the modal after navigation
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const formatTime = (minutes: number) => {
    if (minutes <= 0) return "Pronto!";
    return `${minutes} min`;
  };

  const formatRestaurantName = (slug: string) => {
    return slug.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  };

  const groupedItems = items.reduce(
    (groups: Record<string, OrderItem[]>, item) => {
      if (!groups[item.restaurantSlug]) {
        groups[item.restaurantSlug] = [];
      }
      groups[item.restaurantSlug].push(item);
      return groups;
    },
    {}
  );

  const getRestaurantStats = (restaurantItems: OrderItem[]) => {
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

  const maxEstimatedTime =
    restaurantTimers.length > 0
      ? Math.max(...restaurantTimers.map((t) => t.estimatedTime))
      : 0;

  useEffect(() => {
    if (isOpen && orderId) {
      const qrData = JSON.stringify({
        orderId,
        total,
        fastPass,
        items: items.map((item) => ({
          id: item.id,
          name: item.name,
          quantity: item.quantity,
          price: item.price,
          restaurantSlug: item.restaurantSlug,
        })),
        timestamp: new Date().toISOString(),
      });

      QRCode.toDataURL(qrData, {
        width: 160,
        margin: 1,
        color: {
          dark: "#1f2937",
          light: "#ffffff",
        },
      })
        .then(setQrCodeUrl)
        .catch(console.error);

      const timers: RestaurantTimer[] = Object.entries(groupedItems).map(
        ([restaurantSlug, restaurantItems]) => {
          const totalQuantity = restaurantItems.reduce(
            (sum, item) => sum + item.quantity,
            0
          );

          let baseTime = Math.max(10, totalQuantity * 3);
          if (fastPass) {
            baseTime = Math.ceil(baseTime * 0.6);
          }

          return {
            restaurantSlug,
            restaurantName: formatRestaurantName(restaurantSlug),
            estimatedTime: baseTime,
            remainingTime: baseTime,
            status: "preparing" as const,
          };
        }
      );

      setRestaurantTimers(timers);
    }
  }, [isOpen, orderId, items, total, fastPass]);

  useEffect(() => {
    if (!isOpen || restaurantTimers.length === 0) return;

    const interval = setInterval(() => {
      setRestaurantTimers((prev) =>
        prev.map((timer) => {
          if (timer.status === "preparing" && timer.remainingTime > 0) {
            const newRemainingTime = timer.remainingTime - 1;
            return {
              ...timer,
              remainingTime: newRemainingTime,
              status: newRemainingTime <= 0 ? "ready" : "preparing",
            };
          }
          return timer;
        })
      );
    }, 60000);

    return () => clearInterval(interval);
  }, [isOpen, restaurantTimers.length]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md mx-auto max-h-[90vh] overflow-y-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-bold text-green-600">
            Pedido Confirmado!
          </DialogTitle>
          <p className="text-sm text-muted-foreground">#{orderId}</p>
        </DialogHeader>

        <div className="space-y-4">
          {/* QR Code */}
          {qrCodeUrl && (
            <div className="flex flex-col items-center space-y-2 py-2">
              <img
                src={qrCodeUrl}
                alt="QR Code do Pedido"
                className="border border-gray-200 rounded"
              />
              <p className="text-xs text-center text-muted-foreground px-4">
                Apresente este código no restaurante
              </p>
            </div>
          )}

          {/* Tempo estimado ou agendamento */}
          {scheduledTime ? (
            <div className="text-center bg-muted/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-foreground">
                {scheduledTime}
              </div>
              <div className="text-sm text-muted-foreground">
                Horário agendado para retirada
              </div>
            </div>
          ) : (
            <div className="text-center bg-muted/30 rounded-lg p-4">
              <div className="text-2xl font-bold text-foreground">
                {maxEstimatedTime} min
              </div>
              <div className="text-sm text-muted-foreground">
                Tempo estimado para retirada
              </div>
              {fastPass && (
                <div className="text-xs text-muted-foreground mt-1">
                  Fastp ass ativo
                </div>
              )}
            </div>
          )}

          {/* Itens por restaurante */}
          <div className="space-y-4">
            {Object.entries(groupedItems).map(
              ([restaurantSlug, restaurantItems]) => {
                const { totalItems, totalPrice: restaurantTotal } =
                  getRestaurantStats(restaurantItems);
                const timer = restaurantTimers.find(
                  (t) => t.restaurantSlug === restaurantSlug
                );

                return (
                  <div key={restaurantSlug} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-bold text-base uppercase tracking-wide">
                          {formatRestaurantName(restaurantSlug)}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {totalItems} {totalItems === 1 ? "item" : "itens"} -{" "}
                          {formatPrice(restaurantTotal)}
                        </p>
                      </div>
                      {!scheduledTime && (
                        <div className="text-right">
                          <div className="flex items-center gap-1">
                            {timer?.status === "preparing" ? (
                              <Clock className="h-4 w-4 text-orange-500" />
                            ) : (
                              <CheckCircle2 className="h-4 w-4 text-green-500" />
                            )}
                            <span className="text-sm font-medium">
                              {timer ? formatTime(timer.remainingTime) : ""}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      {restaurantItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between items-center text-sm"
                        >
                          <div className="flex-1">
                            <span className="text-muted-foreground">
                              {item.quantity}x {item.name}
                            </span>
                          </div>
                          <span className="font-medium">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              }
            )}
          </div>

          {/* Total */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center">
              <span className="font-bold text-lg">Total:</span>
              <span className="font-bold text-xl text-primary">
                {formatPrice(total)}
              </span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button onClick={onClose} variant="outline" className="flex-1">
              Fechar
            </Button>
            <Button onClick={handleNavigateToStatus} className="flex-1">
              Acompanhar Status
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
