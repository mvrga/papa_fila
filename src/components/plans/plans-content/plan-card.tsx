"use client"

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { useState } from "react"; // Não mais necessário
// import { PlansModal } from "@/components" // Modal removido
// import { useAuth } from "@/contexts/auth-context";
import { PlanoEnum } from "@/enum/PlanoEnum";
import { Badge } from "@/components/ui/badge";

type PlanCardProps = {
    id: number;
    period: string;
    value: number;
    highlighted?: boolean;
};

export function PlanCard({ id, period, value, highlighted }: PlanCardProps) {
    // Mock user data - replace with actual user data when needed
    const user = { plano: PlanoEnum.GRATIS }; // Change this to test different states

    const getTextButton = () => {
        if (id === PlanoEnum.GRATIS) {
            return "PARTICIPAR"
        }

        if (id === PlanoEnum.PRO) {
            return "TORNAR-SE PRO"
        }
    }

    return (
        <Card className={`relative w-full border ${highlighted ? "border-[#2686EA] bg-[#2686EA]" : "border-[#DDE7F0] bg-[#FFFFFF]"} p-8 md:min-w-[405px]`}>
            {
                user?.plano === id && (
                    <Badge variant={'secondary'} className="absolute top-2 right-2">
                        Plano atual
                    </Badge>
                )
            }

            <CardContent className="flex h-full w-full flex-col p-0">
                <div className="flex flex-1 flex-col">
                    <h4 className={`text-base font-semibold ${highlighted ? "text-white" : "text-[#282F3D]"}`}>
                        {id === PlanoEnum.GRATIS ? "Gratuito" : "Pro"}
                    </h4>
                    <p className={`text-xs font-normal ${highlighted ? "text-white/50" : "text-[#798AA3]"}`}>
                        {id === PlanoEnum.GRATIS ? "Acesso básico aos benefícios" : "Benefícios premium e exclusivos"}
                    </p>
                    <span className={`mt-4 text-3xl font-semibold ${highlighted ? "text-white" : "text-[#282F3D]"}`}>
                        R$ {value} /{period === "mensal" ? "mês" : "ano"}
                    </span>
                </div>

                <Button
                    className="mt-6"
                    variant="outline"
                    onClick={() => {}}
                    disabled={false}
                >
                    {getTextButton()}
                </Button>
            </CardContent>
        </Card>
    );
}
