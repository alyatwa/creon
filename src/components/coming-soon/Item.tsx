import Image from "next/image";

interface ItemCardProps {
  item: {
    title: string;
    subtitle: string;
    description: string;
    img: string;
  };
}
export const ItemCard: React.FC<ItemCardProps> = ({ item }) => {
  return (
    <div className="w-64 lg:w-80 py-4 rounded-md bg-[rgba(19,23,29,.672)] relative coming-soon">
      <h3 className="font-monument font-normal text-xl lg:text-2xl mx-4 text-white uppercase">
        {item.title}
      </h3>
      <h4 className="font-satoshi font-bold leading-[130%] text-xs bg-clip-text fill-transparent mt-2 mx-4 bg-gradient-to-r from-blue-500 to-purple-500 text-transparent w-40 lg:w-48 lg:text-sm">
        {item.subtitle}
      </h4>
      <div className="relative overflow-hidden mt-4 h-44 w-60 lg:w-[18.5rem] rounded-tr-sm rounded-br-sm">
        <Image
          alt=""
          loading="lazy"
          width="1269"
          height="702"
          src={item.img}
          className="w-full h-full object-cover"
        />
      </div>
      <p className="text-white font-satoshi font-normal text-xs mx-4 mt-4 leading-[130%]">
        {item.description}
      </p>
    </div>
  );
};
