import {
  CreditCard,
  MessagesSquare,
  MonitorSmartphone,
  Star,
  Users2,
} from "lucide-react";

const sections = [
  {
    title: "Eventos e Experiências",
    icon: Star,
    features: [
      {
        gratuito: {
          check: false,
          label: "Sem acesso a eventos exclusivos",
        },
        pro: {
          check: true,
          label: "Ingressos grátis para RockInRio e outros eventos",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem acesso a pré-vendas",
        },
        pro: {
          check: true,
          label: "Acesso antecipado a pré-vendas de ingressos",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem experiências VIP",
        },
        pro: {
          check: true,
          label: "Experiências VIP e meet & greet com artistas",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem acesso a camarins e áreas VIP",
        },
        pro: {
          check: true,
          label: "Acesso exclusivo a camarins e áreas VIP",
        },
      },
    ],
  },
  {
    title: "Descontos e Cupons",
    icon: CreditCard,
    features: [
      {
        gratuito: {
          check: true,
          label: "5% de desconto em pedidos no iFood",
        },
        pro: {
          check: true,
          label: "20% de desconto em pedidos no iFood",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem cupons exclusivos",
        },
        pro: {
          check: true,
          label: "Cupons exclusivos de restaurantes parceiros",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem frete grátis",
        },
        pro: {
          check: true,
          label: "Frete grátis ilimitado em todos os pedidos",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem cashback",
        },
        pro: {
          check: true,
          label: "5% de cashback em todos os pedidos",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem prioridade na entrega",
        },
        pro: {
          check: true,
          label: "Prioridade na entrega e tempo reduzido",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem acesso a ofertas especiais",
        },
        pro: {
          check: true,
          label: "Acesso exclusivo a ofertas e promoções especiais",
        },
      },
      {
        gratuito: {
          check: true,
          label: "Programa de pontos básico",
        },
        pro: {
          check: true,
          label: "Dobro de pontos e recompensas premium",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem descontos em bebidas",
        },
        pro: {
          check: true,
          label: "15% de desconto em bebidas e sobremesas",
        },
      },
    ],
  },
  {
    title: "Atendimento Premium",
    icon: MessagesSquare,
    features: [
      {
        gratuito: {
          check: true,
          label: "Suporte padrão via chat",
        },
        pro: {
          check: true,
          label: "Suporte prioritário 24/7 via WhatsApp",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem gerente de conta dedicado",
        },
        pro: {
          check: true,
          label: "Gerente de conta dedicado e atendimento personalizado",
        },
      },
    ],
  },
  {
    title: "Benefícios Exclusivos",
    icon: Users2,
    features: [
      {
        gratuito: {
          check: false,
          label: "Sem acesso a eventos gastronômicos",
        },
        pro: {
          check: true,
          label: "Convites para eventos gastronômicos exclusivos",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem programa de parceiros",
        },
        pro: {
          check: true,
          label: "Acesso ao programa de parceiros com hotéis e viagens",
        },
      },
    ],
  },
  {
    title: "Recursos Adicionais",
    icon: MonitorSmartphone,
    features: [
      {
        gratuito: {
          check: true,
          label: "Aplicativo iFood padrão",
        },
        pro: {
          check: true,
          label: "App com interface personalizada e recursos exclusivos",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem notificações personalizadas",
        },
        pro: {
          check: true,
          label: "Notificações personalizadas sobre ofertas e eventos",
        },
      },
      {
        gratuito: {
          check: false,
          label: "Sem programa de indicação",
        },
        pro: {
          check: true,
          label: "Programa de indicação com recompensas",
        },
      },
    ],
  },
];

const CheckIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.75 10.25L8 13.75L15.25 6.25"
      stroke="#2686EA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const EmptyIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 10.75C9.58579 10.75 9.25 10.4142 9.25 10C9.25 9.58579 9.58579 9.25 10 9.25C10.4142 9.25 10.75 9.58579 10.75 10C10.75 10.4142 10.4142 10.75 10 10.75Z"
      stroke="#C5D2E0"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
);

export function FeatureSection() {
  return (
    <div className="w-full md:w-auto md:min-w-[842px]">
      {sections.map((section, index) => (
        <div className="divide-y-2 mt-10" key={index}>
          <h3 className="flex items-center space-x-3 py-4">
            <section.icon size={28} className="text-[#282F3D]" />
            <span className="text-xl font-semibold text-[#282F3D]">
              {section.title}
            </span>
          </h3>
          {section.features.map((feature, idx) => (
            <div key={idx} className="flex py-4">
              {["gratuito", "pro"].map((plan) => (
                <p key={plan} className="flex w-1/2 items-center space-x-3">
                  {feature[plan as keyof typeof feature].check ? (
                    <CheckIcon />
                  ) : (
                    <EmptyIcon />
                  )}
                  <span
                    className={
                      feature[plan as keyof typeof feature].check
                        ? "text-sm text-[#475366]"
                        : "text-sm text-[#C5D2E0]"
                    }
                  >
                    {feature[plan as keyof typeof feature].label}
                  </span>
                </p>
              ))}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
