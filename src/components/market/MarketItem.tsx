import Image from "next/image";

interface MarketItemProps {
  item: { id: string; title: string; description: string; img: string };
}

export const MarketItem: React.FC<MarketItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col md:flex-row rounded-md bg-[rgba(19,23,29,.671)] h-auto md:h-52">
      <div className="p-8 flex flex-col space-y-3">
        <h3 className="font-monument text-sm md:text-xl font-normal leading-[120%] uppercase text-white">
          {item.title}
        </h3>
        <p className=" text-white font-satoshi text-xs leading-[130%]">
          {item.description}
        </p>
      </div>
      <div className="flex-shrink-0 hidden md:block relative w-64 h-auto rounded-r-md overflow-hidden">
        <Image
          alt={item.title}
          src={item.img}
          loading="lazy"
          width="906"
          height="604"
          className="w-full h-full object-cover flex-shrink-0"
        />
      </div>
    </div>
  );
};
