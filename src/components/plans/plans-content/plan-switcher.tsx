import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type PlanSwitcherProps = {
    period: "mensal" | "anual";
    setPeriod: (period: "mensal" | "anual") => void;
};

export function PlanSwitcher({ period, setPeriod }: PlanSwitcherProps) {
    return (
        <div className="mt-8 flex gap-1 rounded-full bg-[#F0F5FA] p-1">
            <Button variant="secondary" className={cn("rounded-full p-1 px-10", period === "mensal" ? "bg-white" : "bg-transparent")} onClick={() => setPeriod("mensal")}>
                Mensal
            </Button>
            <Button variant="secondary" className={cn("rounded-full p-1 px-10", period === "anual" ? "bg-white" : "bg-transparent")} onClick={() => setPeriod("anual")}>
                Anual
            </Button>
        </div>
    );
}