"use client";

import React from "react";
import { plans } from "@/components/plans/plans-content/plans-data";

import { PlanSwitcher, PlanCard, FeatureSection } from "@/components/plans";
import { HeaderView } from "@/components";
import { BackButton } from "@/components/back-button";

import { Card } from "@/components/ui/card";
import { PlanoEnum } from "@/enum/PlanoEnum";

export default function Plans() {
  const [period, setPeriod] = React.useState<"mensal" | "anual">("mensal");

  return (
    <main className="relative pb-24 lg:pb-0">
      <HeaderView />
      <BackButton />
      <Card className="container mx-auto mt-8 flex min-h-screen flex-col items-center justify-center p-10">
        <h1 className="max-w-[500px] text-center text-4xl font-semibold text-[#282F3D]">
          Torne-se membro RockInRio e ganhe benefícios exclusivos
        </h1>
        <PlanSwitcher period={period} setPeriod={setPeriod} />
        <p className="mt-8">Economize 17% em uma assinatura anual!</p>
        <div className="mt-12 flex w-full flex-col gap-8 font-normal text-[#798AA3] md:w-auto md:flex-row">
          {plans
            .filter((p) => p.period === period)
            .map((plan) => (
              <PlanCard
                key={plan.id}
                id={plan.id}
                period={plan.period}
                value={plan.value}
                highlighted={plan.id === PlanoEnum.PRO}
              />
            ))}
        </div>
        <FeatureSection />
      </Card>
    </main>
  );
}
