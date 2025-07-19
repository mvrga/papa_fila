"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import QRCode from "qrcode";

interface QrCodeDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QrCodeDialog = ({ isOpen, onClose }: QrCodeDialogProps) => {
  const [qrCodeUrl, setQrCodeUrl] = useState<string>("");

  useEffect(() => {
    if (isOpen) {
      generateQrCode();
    }
  }, [isOpen]);

  const generateQrCode = async () => {
    // Buscar pedido mais recente do localStorage
    try {
      const storedOrders = localStorage.getItem('papa_fila_orders');
      if (storedOrders) {
        const orders = JSON.parse(storedOrders);
        const latestOrder = orders[orders.length - 1]; // Último pedido

        if (latestOrder) {
          const qrData = JSON.stringify({
            orderId: latestOrder.id,
            total: latestOrder.total,
            fastPass: latestOrder.fastPass,
            items: latestOrder.items.map((item: any) => ({
              name: item.name,
              quantity: item.quantity,
              price: item.price,
              restaurant: item.restaurant,
            })),
            timestamp: new Date().toISOString(),
          });

          const qrCodeDataUrl = await QRCode.toDataURL(qrData, {
            width: 200,
            margin: 1,
            color: {
              dark: "#1f2937",
              light: "#ffffff",
            },
          });
          
          setQrCodeUrl(qrCodeDataUrl);
        } else {
          // Se não há pedidos, gerar QR code genérico
          await generateGenericQrCode();
        }
      } else {
        // Se não há pedidos, gerar QR code genérico
        await generateGenericQrCode();
      }
    } catch (error) {
      console.error('Erro ao gerar QR code:', error);
      await generateGenericQrCode();
    }
  };

  const generateGenericQrCode = async () => {
    const qrData = JSON.stringify({
      message: "Papa Fila - Food Truck Festival",
      timestamp: new Date().toISOString(),
    });

    try {
      const qrCodeDataUrl = await QRCode.toDataURL(qrData, {
        width: 200,
        margin: 1,
        color: {
          dark: "#1f2937",
          light: "#ffffff",
        },
      });
      
      setQrCodeUrl(qrCodeDataUrl);
    } catch (error) {
      console.error('Erro ao gerar QR code genérico:', error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-sm mx-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-bold">
            QR Code
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-4 py-4">
          {qrCodeUrl ? (
            <>
              <img
                src={qrCodeUrl}
                alt="QR Code"
                className="border border-gray-200 rounded"
              />
              <p className="text-sm text-center text-muted-foreground px-4">
                Apresente este código no food truck
              </p>
            </>
          ) : (
            <div className="flex items-center justify-center w-[200px] h-[200px] border border-gray-200 rounded">
              <span className="text-muted-foreground">Gerando QR Code...</span>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};