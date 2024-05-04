import Image from "next/image";
import Link from "next/link";

export const Footer: React.FC = () => {
  return (
    <footer className="px-6 md:px-32 py-5 flex flex-col md:flex-row justify-between items-center font-satoshi">
      <div className="z-10 flex items-center space-x-16">
        <span className=" text-white font-medium text-xs leading-130">
          © Creon 2023. All rights reserved.
        </span>
        <div className="flex space-x-2">
          <Link
            href="#"
            className="flex items-center justify-center w-7 h-7 flex-shrink-0 border border-white rounded-full"
          >
            <Image
              alt="Telegram"
              loading="lazy"
              width={16}
              height={16}
              src="/assets/footer/telegram.svg"
            />
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center w-7 h-7 flex-shrink-0 border border-white rounded-full"
          >
            <Image
              alt="Gitbook"
              loading="lazy"
              width={18}
              height={18}
              src="/assets/footer/gitbook.svg"
            />
          </Link>

          <Link
            href="#"
            className="flex items-center justify-center w-7 h-7 flex-shrink-0 border border-white rounded-full"
          >
            <Image
              alt="Twitter"
              loading="lazy"
              width={16}
              height={16}
              src="/assets/footer/twitter.svg"
            />
          </Link>
        </div>
      </div>

      <Link
        href="https://www.niftables.com/"
        className="flex gap-1 items-center text-white text-xs leading-[130%] z-10"
        target="_blank"
      >
        Powered by
        <Image
          alt="Niftables"
          loading="lazy"
          width={101}
          height={18}
          className="w-[3.6rem]"
          decoding="async"
          src="/assets/footer/niftables.svg"
        />
      </Link>
      <div className="absolute left-0 bottom-0 w-full">
        <div className="w-full h-full relative video-warp">
          <video className="w-full h-full object-cover" autoPlay muted>
            <source src="/assets/footer/roadmap-video.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </footer>
  );
};
