import { Main } from "../main-hero";
import { Logo } from "../shared/logo";
import { NavLinks } from "./Nav";
import { Connect } from "./connect";

export const Header = () => {
  return (
    <section className="absolute left-0 top-0 w-full py-4 px-10 flex items-center justify-between max-h-28 z-40">
      <Logo />
      <div className="flex gap-7">
        <NavLinks />
        <Connect />
      </div>
    </section>
  );
};
