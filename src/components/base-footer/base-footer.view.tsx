import React from "react";
import Link from "next/link";

const BaseFooter: React.FC = () => {
  const ano: number = new Date().getFullYear();

  return (
    <footer className="w-full relative border-t border-[#DDE7F0] pb-[144px] md:pb-0 container mx-auto">
      <div className="container pt-[36px] xl:pt-[72px] pb-[52px] xl:pb-[104px] grid grid-cols-7 gap-10 xl:gap-28">
        <div className="col-span-7 xl:col-span-3 flex flex-col items-center sm:items-start">
          <h2 className="text-2xl font-bold text-primary">Papa Fila</h2>

          <div className="mt-9 space-y-2 md:space-y-6">
            <p className="text-[#475366] text-xs md:text-base md:leading-[28px] font-normal text-center sm:text-start">
              Papa Fila é a plataforma que conecta você aos melhores
              restaurantes da sua região, facilitando reservas e descobertas
              gastronômicas únicas
            </p>

            <div className="grid grid-cols-2 gap-4 pt-6 md:grid-cols-1 lg:pt-0">
              <div className="space-y-3">
                <h3 className="text-[#475366] text-xs md:text-base md:leading-[28px] font-semibold">
                  Empresa
                </h3>
                <p className="text-[#475366] text-xs md:text-base md:leading-[28px] font-normal">
                  PAPA FILA TECNOLOGIA LTDA.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-[#475366] text-xs md:text-base md:leading-[28px] font-semibold">
                  CNPJ
                </h3>
                <p className="text-[#475366] text-xs md:text-base md:leading-[28px] font-normal">
                  12.345.678/0001-90
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-[#475366] text-xs md:text-base md:leading-[28px] font-semibold">
                  Endereço
                </h3>
                <p className="text-[#475366] text-xs md:text-base md:leading-[28px] font-normal">
                  Rua das Flores, 123 / Sala 456
                  <br />
                  São Paulo, SP
                  <br />
                  CEP: 01234-567
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-3 xl:col-span-2 flex flex-col space-y-3 md:space-y-6">
          <h3 className="text-[#475366] text-xs md:text-base md:leading-[28px] font-semibold">
            Nossos serviços
          </h3>

          <Link
            className="text-[#475366] w-fit hover:underline text-xs md:text-base"
            href="/restaurants"
          >
            Encontrar restaurantes
          </Link>

          <Link
            className="text-[#475366] w-fit hover:underline text-xs md:text-base"
            href="/reservations"
          >
            Fazer reservas
          </Link>

          <Link
            className="text-[#475366] w-fit hover:underline text-xs md:text-base"
            href="/partner-restaurant"
          >
            Seja um restaurante parceiro
          </Link>
        </div>

        <div className="col-span-4 xl:col-span-2 flex flex-col space-y-3 md:space-y-6">
          <h3 className="text-[#475366] text-xs md:text-base md:leading-[28px] font-semibold">
            Empresa
          </h3>

          <Link
            href="/about"
            className="text-[#475366] text-xs md:text-base w-fit hover:underline"
          >
            Quem somos
          </Link>

          <Link
            href="/how-it-works"
            className="text-[#475366] text-xs md:text-base w-fit hover:underline"
          >
            Como funciona
          </Link>

          <Link
            href="/help-center"
            className="text-[#475366] text-xs md:text-base w-fit hover:underline"
          >
            Central de ajuda
          </Link>

          <Link
            href="/terms-of-use"
            className="text-[#475366] text-xs md:text-base w-fit hover:underline"
          >
            Termos de uso
          </Link>

          <Link
            href="/privacy-policy"
            className="text-[#475366] text-xs md:text-base w-fit hover:underline"
          >
            Política de privacidade
          </Link>
        </div>
      </div>

      <div className="border-t border-[#DDE7F0]">
        <div className="py-6 container flex flex-col justify-center xl:flex-row xl:justify-between items-center">
          <span className="text-sm leading-6 xl:text-base xl:leading-[28px] font-normal text-[#798AA3]">
            © {ano} Papa Fila. Todos os direitos reservados
          </span>

          <div className="mt-4 xl:mt-0">
            <div className="flex space-x-4">
              <Link href="#" className="text-[#798AA3] hover:text-primary">
                Instagram
              </Link>
              <Link href="#" className="text-[#798AA3] hover:text-primary">
                Facebook
              </Link>
              <Link href="#" className="text-[#798AA3] hover:text-primary">
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default BaseFooter;
