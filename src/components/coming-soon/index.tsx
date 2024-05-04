import { ItemCard } from "./Item";

export const ComingSoon = () => {
  const items = [
    {
      title: "TOKEN",
      subtitle: "The Gateway token to the world of AI",
      description:
        "Set to debut in the latter half of 2024, the CREON token serves as the pioneering link between cutting-edge AI initiatives and blockchain technology. This innovative token provides NFT and token holders with unparalleled access to our Launchpad, AI tools, and exclusive pre-launch investment prospects.",
      img: "/assets/coming-soon/img1.png",
    },
    {
      title: "REVENUE",
      subtitle: "Driving income and growth through decentralization",
      description:
        "As an integral part of our project, AI Income offers the opportunity to benefit from a genuine, profit-generating AI-based business. This facet of our initiative leverages the power of selected exclusive AI tools to create a profit stream.",
      img: "/assets/coming-soon/img2.png",
    },
    {
      title: "LAUNCHPAD",
      subtitle: "Driving the future of AI Innovation",
      description:
        "The Creon AI Launchpad, an essential component of our initiative, represents a groundbreaking opportunity in the realm of AI and blockchain. It provides the first known platform for acquiring allocations in tokenized AI projects, offering our community of NFT and CREON token holders early access to innovative and promising AI endeavors.",
      img: "/assets/coming-soon/img3.png",
    },
  ];

  return (
    <section className="px-10 lg:px-32 py-6 justify-between relative z-10 grid justify-items-center grid-cols-1 md:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {items.map((item) => (
        <ItemCard item={item} key={item.title} />
      ))}
    </section>
  );
};
