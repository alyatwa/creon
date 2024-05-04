import { ComingSoon } from "@/components/coming-soon";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Main } from "@/components/main-hero";
import { Market } from "@/components/market";
import { Pass } from "@/components/pass";
import { Profiting } from "@/components/profiting";

export default function Home() {
  return (
    <main className="w-full h-auto relative">
      <Header />
      <div className="flex flex-col justify-between min-h-screen">
        <Main />
        <Pass />
        <Profiting />
        <ComingSoon />
        <Market />
        <Footer />
      </div>
    </main>
  );
}
