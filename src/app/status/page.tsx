"use client";

import { useState, useEffect } from "react";
import { HeaderView } from "@/components/header/header.view";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Search,
  Clock,
  CheckCircle,
  Package,
  Utensils,
  MapPin,
} from "lucide-react";

interface OrderStatus {
  id: string;
  status: "preparing" | "ready" | "delivered" | "cancelled";
  estimatedTime?: string;
  actualTime?: string;
  items: Array<{
    name: string;
    quantity: number;
    price: number;
    restaurant: string;
  }>;
  total: number;
  createdAt: string;
  fastPass?: boolean;
  scheduledTime?: string;
}


export default function StatusPedido() {
  const [searchTerm, setSearchTerm] = useState("");
  const [orders, setOrders] = useState<OrderStatus[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<OrderStatus[]>([]);

  const loadOrdersFromStorage = () => {
    try {
      const storedOrders = localStorage.getItem('papa_fila_orders');
      if (storedOrders) {
        const parsedOrders = JSON.parse(storedOrders);
        setOrders(parsedOrders);
        setFilteredOrders(parsedOrders);
      }
    } catch (error) {
      console.error('Erro ao carregar pedidos:', error);
    }
  };

  useEffect(() => {
    loadOrdersFromStorage();
  }, []);

  useEffect(() => {
    const filtered = orders.filter(
      (order) =>
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.items.some(
          (item) =>
            item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.restaurant.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
    setFilteredOrders(filtered);
  }, [searchTerm, orders]);

  const getStatusColor = (status: OrderStatus["status"]) => {
    switch (status) {
      case "preparing":
        return "bg-chart-2 text-primary-foreground";
      case "ready":
        return "bg-green-500 text-white";
      case "delivered":
        return "bg-muted text-muted-foreground";
      case "cancelled":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const getStatusText = (status: OrderStatus["status"]) => {
    switch (status) {
      case "preparing":
        return "Preparando";
      case "ready":
        return "Pronto";
      case "delivered":
        return "Entregue";
      case "cancelled":
        return "Cancelado";
      default:
        return "Desconhecido";
    }
  };

  const getStatusIcon = (status: OrderStatus["status"]) => {
    switch (status) {
      case "preparing":
        return <Utensils className="h-4 w-4" />;
      case "ready":
        return <Package className="h-4 w-4" />;
      case "delivered":
        return <CheckCircle className="h-4 w-4" />;
      case "cancelled":
        return <MapPin className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const formatTime = (dateString: string) => {
    return new Date(dateString).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main>
      <HeaderView />

      <section className="my-20 container mx-auto w-full px-4 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Status dos Pedidos</h1>

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between w-full">
          <div className="flex flex-col items-start gap-1 w-full md:max-w-xl">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Buscar por número do pedido, prato ou restaurante..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 h-12 w-full"
              />
            </div>
          </div>
        </div>

        <div className="space-y-3 pb-20 lg:pb-0">
          {filteredOrders.length === 0 ? (
            <Card className="border border-border">
              <CardContent className="p-6 text-center">
                <div className="space-y-3">
                  <Package className="h-10 w-10 mx-auto text-muted-foreground" />
                  <h3 className="text-base font-semibold text-foreground">
                    Nenhum pedido encontrado
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {searchTerm
                      ? "Tente buscar com outros termos"
                      : "Você ainda não fez nenhum pedido"}
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            filteredOrders.map((order) => (
              <Card key={order.id} className="border border-border">
                <CardHeader className="pb-3 px-4 pt-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <CardTitle className="text-base font-semibold text-foreground">
                          #{order.id}
                        </CardTitle>
                        {order.fastPass && (
                          <Badge
                            variant="secondary"
                            className="bg-chart-1 text-chart-1-foreground text-xs"
                          >
                            Fast Pass
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {formatTime(order.createdAt)}
                        {order.scheduledTime &&
                          ` • Agendado ${order.scheduledTime}`}
                      </p>
                    </div>
                    <Badge className={getStatusColor(order.status)}>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(order.status)}
                        <span className="text-xs font-medium">{getStatusText(order.status)}</span>
                      </div>
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="px-4 pb-4 space-y-3">
                  <div className="space-y-2">
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-start gap-2 py-1"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="text-sm font-medium text-foreground leading-tight">
                              {item.name}
                            </span>
                            <Badge variant="outline" className="text-xs px-1 py-0">
                              {item.restaurant}
                            </Badge>
                          </div>
                          <span className="text-xs text-muted-foreground">
                            Qtd: {item.quantity}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-foreground shrink-0">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex justify-between items-center pt-2 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">
                        {order.status === "preparing" &&
                          order.estimatedTime &&
                          `${order.estimatedTime}`}
                        {order.status === "ready" && "Pronto!"}
                        {order.status === "delivered" &&
                          order.actualTime &&
                          `${order.actualTime}`}
                        {order.status === "cancelled" && "Cancelado"}
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="text-base font-bold text-primary">
                        {formatPrice(order.total)}
                      </span>
                    </div>
                  </div>

                  {order.status === "ready" && (
                    <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-md p-2">
                      <div className="flex items-center gap-2 text-green-700 dark:text-green-400">
                        <CheckCircle className="h-3 w-3" />
                        <span className="text-xs font-medium">
                          Pronto para retirada!
                        </span>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </section>
    </main>
  );
}
