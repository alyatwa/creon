export const Pass = () => {
  const items = [
    {
      id: "1",
      text: "Revenue share distribution from Creon built AI projects",
    },
    {
      id: "2",
      text: "Free and early access to Creon built AI projects",
    },
    {
      id: "3",
      text: "Higher allocation limits on the Creon AI Launchpad",
    },
    {
      id: "4",
      text: "Revenue share distribution from Creon built AI projects",
    },
  ];
  return (
    <section className="px-6 sm:px-32 py-8 relative flex flex-col lg:flex-row overflow-hidden gap-8 sm:gap-6 justify-between items-center">
      <div className="flex flex-col">
        <h2 className="pb-4 pt-0 w-44 md:w-64 lg:w-72 text-white border-b border-solid border-[#13171d] font-monument font-normal text-xl md:text-2xl lg:text-3xl uppercase leading-[110%]">
          creon pass nft
        </h2>
        <p className="font-satoshi text-[.8rem] w-[23rem] normal-case font-bold leading-[130%] mt-4 mb-0 ml-0 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          The Creon NFT pass unlocks access to AI projects, the Creon launchpad,
          and a ticket to generate passive income through AI-driven tools.
        </p>

        <div className="mt-5 mb-0 ml-0 flex flex-col items-start space-y-3">
          {items.map((item) => (
            <Item key={item.id} text={item.text} />
          ))}
        </div>

        <button className="w-72 h-7 px-2 py-4 bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] rounded-sm flex flex-col items-center justify-center font-satoshi text-xs normal-case font-medium leading-[110%] text-white border-none overflow-hidden relative mt-8 mb-0 ml-0">
          Buy Creon Pass
        </button>
      </div>
      <div className="relative w-[464px] h-[464px] md:min-w-96 pass-video">
        <video
          className="w-full h-full object-cover"
          poster="/assets/pass/poster.png"
        >
          <source
            src="https://github.com/niftables-og/front-end-tech-test/raw/main/videos/nft-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </section>
  );
};

const Item: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="p-3 border border-[#13171d] border-solid rounded-[.25rem] h-auto">
      <span className="text-white font-satoshi text-xs font-normal leading-[130%]">
        {text}
      </span>
    </div>
  );
};
