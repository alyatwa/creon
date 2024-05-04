import Image from "next/image";

export const Main = () => {
  return (
    <main className="relative flex flex-col gap-4 justify-end px-6 md:px-32 pb-20">
      <div className="absolute left-0 top-0 w-full h-full z-0 object-cover">
        <video className="w-full h-full z-0 object-cover" autoPlay muted>
          <source
            src="/assets/main/main-background-video.mp4"
            type="video/mp4"
          />
        </video>
      </div>
      <Image
        alt=""
        width="3840"
        height="1940"
        className="absolute top-0 left-0 mix-blend-soft-light w-full h-full z-0"
        src="/assets/main/main-video.png"
      />

      <h2 className="text-white font-monument text-lg sm:text-3xl md:text-xl xl:text-5xl leading-[110%] uppercase z-[1] mt-72 lg:mt-96 mx-0">
        The world's first platform for Tokenizing AI blockchain projects
      </h2>

      <span className="subtitle font-satoshi text-sm font-bold leading-130 z-10 relative py-1 px-0 w-fit md:w-max block bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        Hold the Creon Pass NFT and earn passive income from AI Tools
      </span>
    </main>
  );
};
