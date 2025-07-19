import { useEffect } from "react";
import { CheckCircle2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";

interface WaitingConfirmationProps {
  isOpen: boolean;
  onConfirmed: () => void;
  orderId: string;
}

export const WaitingConfirmationView = ({
  isOpen,
  onConfirmed,
  orderId,
}: WaitingConfirmationProps) => {
  useEffect(() => {
    if (!isOpen) return;

    const timeout = setTimeout(() => {
      onConfirmed();
    }, 5000);

    return () => clearTimeout(timeout);
  }, [isOpen, onConfirmed]);

  return (
    <Dialog open={isOpen} onOpenChange={() => {}}>
      <DialogContent className="max-w-sm mx-auto">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-bold text-black">
            Aguardando Confirmação
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center space-y-6 py-8">
          <div className="bg-gray-100 rounded-full p-6">
            <CheckCircle2 className="h-16 w-16 text-black" />
          </div>

          <div className="text-center space-y-3">
            <p className="text-lg font-medium text-black">
              Aguardando confirmação do estabelecimento
            </p>
            <p className="text-base text-black">
              Pedido #{orderId}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};