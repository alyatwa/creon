export const Profiting = () => {
  return (
    <section className="px-6 sm:px-32 py-8 ">
      <h2 className="text-white font-monument font-normal text-3xl lg:text-4xl xl:text-5xl uppercase leading-[110%]">
        Profiting Through
      </h2>
      <h3 className="mt-3 text-right w-full font-monument text-2xl lg:text-2xl xl:text-3xl font-normal leading-[120%] uppercase bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        AI Innovation &amp; Decentralization
      </h3>
      <div className="mt-11 mb-0 flex flex-col lg:flex-row justify-between relative overflow-hidden gap-6">
        <video
          className="w-full lg:w-[34rem] xl:w-full h-80 object-cover rounded-md"
          poster="/assets/profiting/profit-video.png"
          autoPlay
        >
          <source
            src="https://github.com/niftables-og/front-end-tech-test/raw/main/videos/creon-logo.mp44"
            type="video/mp4"
          />
        </video>
        <div className="w-full lg:w-96 px-4 flex flex-col justify-center space-y-4 py-16 border-solid border-l border-r border-[#13171d]">
          <h4 className="font-satoshi text-sm normal-case font-bold leading-[130%] text-white">
            The dynamic community driven business model of the future
          </h4>

          <p className="text-white font-satoshi text-xs normal-case font-normal leading-[130%]">
            At Creon, we blend the power of AI tools with the dynamic crypto and
            NFT markets, utilizing an innovative business model to drive
            profitability. This approach empowers our community, as our NFT and
            token holders directly benefit from the growth and prosperity of the
            Creon network, creating a win-win scenario for both our community
            and for the projects we launch.
          </p>
        </div>
      </div>
    </section>
  );
};
