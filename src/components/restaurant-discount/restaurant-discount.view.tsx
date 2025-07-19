import React from "react";

interface DiscountData {
  porcentagem: number;
  quantidade: number;
}

interface RestaurantDiscountProps {
  discounts?: DiscountData[];
}

const RestaurantDiscountView: React.FC<RestaurantDiscountProps> = ({
  discounts = [
    { porcentagem: 25, quantidade: 5 },
    { porcentagem: 20, quantidade: 4 },
    { porcentagem: 15, quantidade: 3 },
    { porcentagem: 10, quantidade: 2 },
  ],
}) => {
  const calcPorcent = () => {
    return 100 / discounts.length + '%';
  };

  const variants = [
    {
      color: '#2786EA',
      bg: '#F3F9FF',
    },
    {
      color: '#2686EA',
      bg: '#CCE5FF',
    },
    {
      color: '#FFFFFF',
      bg: '#74B8FF',
    },
    {
      color: '#FFFFFF',
      bg: '#2686EA',
    },
    {
      color: '#FFFFFF',
      bg: '#0058B4',
    },
  ];

  if (!discounts.length) return null;

  return (
    <div className="w-full relative flex flex-col md:flex-row gap-1">
      <div className="overflow-hidden relative text-center py-4 md:py-6 px-2 w-full md:w-auto flex-1 rounded-lg bg-[#F3F9FF] flex flex-col justify-center items-center">
        <svg
          className="absolute hidden lg:block left-4 top-[40%] -translate-y-1/2 w-auto h-full"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 107.943 119.328"
        >
          <path
            d="M637.883,88.2a46.384,46.384,0,0,0-33.015-13.675V73.83a47.074,47.074,0,0,1,33.506,13.878Z"
            transform="translate(-550.896 -67.242)"
            fill="#fff"
          />
          <path
            d="M121.211,652.255a47.384,47.384,0,0,1-47.384-47.384h.693a46.691,46.691,0,1,0,93.381,0h.693a47.384,47.384,0,0,1-47.384,47.384"
            transform="translate(-67.24 -550.899)"
            fill="#fff"
          />
          <path
            d="M336.222,362.12l-19.337-12.072-12.874-.625-32.4,43.875-10.633-6.638.7,48.245,49.032-17.2-10.633-6.638Z"
            transform="translate(-237.687 -318.244)"
            fill="#ceddf4"
          />
          <path
            d="M303.106,210.023l-29.178-17.815-33.29,54.919-10.921-6.62,3.322,52.13,47.754-21.169-10.921-6.62Z"
            transform="translate(-209.219 -175.057)"
            fill="#fff"
          />
          <path
            d="M228.762,347.631l-3.4-53.29,11.192,6.784,9.752-16.088a.347.347,0,1,1,.593.359l-10.112,16.681-10.649-6.455,3.248,50.971,46.692-20.7-10.649-6.455.18-.3,33.054-54.529-19.717-11.952a.347.347,0,1,1,.359-.593l20.31,12.311-.18.3-33.054,54.529,11.192,6.784Z"
            transform="translate(-205.257 -229.533)"
            fill="#0d4472"
          />
          <path
            d="M209.182,253.048q-2.3-2.452-7.146-2.451t-7.173,2.451a9.543,9.543,0,0,0-2.321,6.837,9.391,9.391,0,0,0,2.321,6.733q2.322,2.452,7.173,2.451t7.146-2.451a9.456,9.456,0,0,0,2.3-6.733,9.61,9.61,0,0,0-2.3-6.837m-4.1,7.61q0,4.488-3.044,4.49a2.558,2.558,0,0,1-2.349-1.214,6.2,6.2,0,0,1-.747-3.276v-1.65a6.207,6.207,0,0,1,.747-3.278,2.56,2.56,0,0,1,2.349-1.212q3.042,0,3.044,4.49Z"
            transform="translate(-175.361 -228.237)"
            fill="#457eff"
          />
          <path
            d="M299.524,293.559l21.621-35.45h5.625l-21.518,35.45Z"
            transform="translate(-272.798 -235.078)"
            fill="#457eff"
          />
          <path
            d="M575.863,929.688,571.9,964.313h7.551v-33.29Z"
            transform="translate(-520.87 -846.733)"
            fill="#0d4472"
          />
          <path
            d="M616.315,929.688l3.588,34.625h26.949l-3.838-34.625Z"
            transform="translate(-561.322 -846.733)"
            fill="#457eff"
          />
          <path
            d="M366.3,1086.036l-2.527,22.076h4.814v-21.225Z"
            transform="translate(-331.31 -989.13)"
            fill="#ceddf4"
          />
          <path
            d="M365.045,1104.919h-4.814a.347.347,0,0,1-.345-.386l2.527-22.076a.347.347,0,0,1,.465-.286l2.287.851a.347.347,0,0,1,.226.325v21.225a.347.347,0,0,1-.347.347m-4.425-.693H364.7v-20.637l-1.647-.613Z"
            transform="translate(-327.772 -985.591)"
            fill="#0d4472"
          />
          <path
            d="M392.087,1086.036l2.287,22.076h17.182l-2.447-22.076Z"
            transform="translate(-357.102 -989.13)"
            fill="#fff"
          />
          <path
            d="M684.669,935.228a9.606,9.606,0,0,1-6.323-2.475,9.758,9.758,0,0,1-3.277-5.984l-1.008-7.5a.607.607,0,1,1,1.2-.161l1.008,7.5a8.751,8.751,0,0,0,8.4,7.407,6.277,6.277,0,0,0,4.819-2.091,6.4,6.4,0,0,0,1.447-5.154l-1-7.45a.607.607,0,1,1,1.2-.162l1,7.451a7.6,7.6,0,0,1-1.737,6.115,7.473,7.473,0,0,1-5.732,2.506"
            transform="translate(-613.911 -836.615)"
            fill="#0d4472"
          />
          <path
            d="M456.2,1136.248a4.581,4.581,0,0,1-4.4-3.875l-.445-3.31a.433.433,0,0,1,.859-.115l.445,3.31a3.69,3.69,0,0,0,3.54,3.123,2.606,2.606,0,0,0,2-.866,2.66,2.66,0,0,0,.6-2.142l-.441-3.286a.433.433,0,1,1,.859-.115l.441,3.286a3.514,3.514,0,0,1-.806,2.828,3.46,3.46,0,0,1-2.653,1.162"
            transform="translate(-411.078 -1027.871)"
            fill="#0d4472"
          />
          <path
            d="M583.188,283.629a.347.347,0,0,1-.3-.526l7.947-13.11a.347.347,0,1,1,.593.359l-7.947,13.11a.347.347,0,0,1-.3.167"
            transform="translate(-530.835 -245.749)"
            fill="#0d4472"
          />
          <path
            d="M516.831,457.764q-2.3-2.452-7.148-2.451t-7.172,2.451a9.543,9.543,0,0,0-2.323,6.837,9.392,9.392,0,0,0,2.323,6.733q2.322,2.452,7.172,2.451t7.148-2.451a9.456,9.456,0,0,0,2.3-6.733,9.609,9.609,0,0,0-2.3-6.837m-4.1,7.61q0,4.491-3.044,4.49a2.555,2.555,0,0,1-2.347-1.214,6.2,6.2,0,0,1-.749-3.276v-1.65a6.2,6.2,0,0,1,.749-3.276,2.559,2.559,0,0,1,2.347-1.214q3.045,0,3.044,4.49Z"
            transform="translate(-455.558 -414.686)"
            fill="#457eff"
          />
          <path
            d="M408.017,1104.919H390.835a.347.347,0,0,1-.345-.311l-2.287-22.076a.347.347,0,0,1,.345-.382H405.57a.347.347,0,0,1,.345.308l2.447,22.076a.347.347,0,0,1-.345.385m-16.869-.693h16.482l-2.37-21.382H388.932Z"
            transform="translate(-353.562 -985.591)"
            fill="#0d4472"
          />
        </svg>

        <h2 className="md:max-w-[250px] text-lg md:text-[32px] md:leading-9 text-[#2786EA] font-extrabold break-words">
          GANHE ATÉ {discounts[0].porcentagem}% DE DESCONTO!
        </h2>

        <span className="md:mt-3 text-xs md:text-base text-[#2786EA] font-normal break-words">
          Os descontos são aplicados automaticamente
        </span>
      </div>

      <div className="w-full md:w-auto flex gap-1">
        {discounts
          .slice()
          .reverse()
          .map((discount, index) => (
            <div
              key={index}
              style={{
                width: calcPorcent(),
                backgroundColor: variants[index].bg,
                color: variants[index].color,
              }}
              className="md:w-auto md:min-w-[165px] md:space-y-1 p-2 md:py-6 md:px-2 rounded-lg flex flex-col justify-center items-center"
            >
              <p className="text-sm md:text-[15px] md:leading-[18px] font-bold break-words">
                GANHE
              </p>

              <div className="flex justify-start">
                <h3 className="text-lg md:text-[51px] md:leading-[51px] font-bold break-words">
                  {discount.porcentagem}
                </h3>

                <span className="text-sm md:text-[26px] md:leading-9 font-bold break-words">
                  %
                </span>
              </div>

              <span className="md:max-w-[50%] text-[10px] md:text-xs md:leading-[14px] text-center font-bold break-words">
                Na compra de {discount.quantidade} pratos
              </span>
            </div>
          ))}
      </div>
    </div>
  );
};

export default RestaurantDiscountView;