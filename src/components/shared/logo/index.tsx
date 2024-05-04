import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        alt="Logo"
        width="140"
        height="39"
        data-nimg="1"
        className="h-auto w-24 fill-white"
        src="/assets/logo/logo.svg"
      />
    </Link>
  );
};
