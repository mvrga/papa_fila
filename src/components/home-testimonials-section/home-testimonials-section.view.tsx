/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import Link from "next/link";

const HomeTestimonialsSection: React.FC = () => {
  const restaurantOwnerAvatar =
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face";

  return (
    <section className="w-full h-auto">
      <div className="flex flex-col sm:flex-row">
        <div className="px-10 py-[70px] xl:py-[140px] w-full xl:w-1/2 space-y-7 flex flex-col justify-center items-start bg-blue-50">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.2 13.12C13.2 11.3278 13.2 10.4317 12.8512 9.74723C12.5444 9.14511 12.0549 8.65557 11.4528 8.34878C10.7683 8 9.87218 8 8.08001 8H7.10392C6.0772 8 5.56384 8 5.14357 8.11674C4.06214 8.41713 3.21714 9.26213 2.91675 10.3436C2.80001 10.7638 2.80001 11.2772 2.80001 12.3039V12.5261C2.80001 13.8596 2.80001 14.5264 2.84519 15.1838C2.98873 17.2726 3.47298 19.324 4.27876 21.2565C4.53234 21.8647 4.83053 22.461 5.4269 23.6538C5.55332 23.9066 5.61653 24.033 5.69365 24.1394C5.94086 24.4802 6.31248 24.7099 6.72791 24.7786C6.85751 24.8 6.99885 24.8 7.28152 24.8H10.4L7.20001 18.4H8.08001C9.87218 18.4 10.7683 18.4 11.4528 18.0512C12.0549 17.7444 12.5444 17.2549 12.8512 16.6528C13.2 15.9683 13.2 15.0722 13.2 13.28V13.12Z"
              fill="#00a6f4"
              stroke="#00a6f4"
              strokeLinejoin="round"
            />
            <path
              d="M29.2 13.12C29.2 11.3278 29.2 10.4317 28.8512 9.74723C28.5444 9.14511 28.0549 8.65557 27.4528 8.34878C26.7683 8 25.8722 8 24.08 8H23.1039C22.0772 8 21.5638 8 21.1436 8.11674C20.0621 8.41713 19.2171 9.26213 18.9167 10.3436C18.8 10.7638 18.8 11.2772 18.8 12.3039V12.5261C18.8 13.8596 18.8 14.5264 18.8452 15.1838C18.9887 17.2726 19.473 19.324 20.2788 21.2565C20.5323 21.8647 20.8305 22.461 21.4269 23.6538C21.5533 23.9066 21.6165 24.033 21.6937 24.1394C21.9409 24.4802 22.3125 24.7099 22.7279 24.7786C22.8575 24.8 22.9988 24.8 23.2815 24.8H26.4L23.2 18.4H24.08C25.8722 18.4 26.7683 18.4 27.4528 18.0512C28.0549 17.7444 28.5444 17.2549 28.8512 16.6528C29.2 15.9683 29.2 15.0722 29.2 13.28V13.12Z"
              fill="#00a6f4"
              stroke="#00a6f4"
              strokeLinejoin="round"
            />
          </svg>

          <p className="text-xl leading-[34px] xl:text-2xl xl:leading-[36px] font-medium text-gray-800">
            &quot;O Papa Fila revolucionou meu restaurante! Agora consigo
            gerenciar pedidos com muito mais eficiência e{" "}
            <a
              href="/cadastro-restaurante"
              className="text-primary underline font-semibold"
            >
              aumentei minhas vendas em 40%!
            </a>
            &quot;
          </p>

          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src={restaurantOwnerAvatar}
                alt="Carlos Silva"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-gray-800">Carlos Silva</p>
              <p className="text-sm text-gray-600">
                Dono da Pizzaria Bella Napoli
              </p>
            </div>
          </div>
        </div>

        <div className="px-10 py-[70px] xl:py-[140px] w-full xl:w-1/2 space-y-8 flex flex-col justify-center items-start bg-primary">
          <p className="text-white text-xl leading-[34px] xl:text-[28px] xl:leading-10">
            No Papa Fila, você faz parte de uma comunidade que apoia seu
            negócio. Juntos, crescemos e fortalecemos o mercado gastronômico.
            Vamos crescer juntos!
          </p>
          <Link
            href="/cadastro-restaurante"
            className="bg-white py-3 px-6 text-primary border border-white rounded-lg flex items-center space-x-2 hover:bg-gray-50 transition-colors font-medium"
          >
            <span>Quero começar</span>

            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.75 4.75L13.25 10L7.75 15.25"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeTestimonialsSection;
