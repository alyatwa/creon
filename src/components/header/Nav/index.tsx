import Link from "next/link";

export const NavLinks = () => {
  const links = [
    {
      href: "/creon-pass",
      label: "Creon Pass",
    },
    {
      href: "/token",
      label: "Token",
    },
    {
      href: "/ai-revenue",
      label: "AI Revenue",
    },
    {
      href: "/ai-launchpad",
      label: "AI Launchpad",
    },
  ];
  return (
    <ul className="  items-center gap-6 list-none nav-links hidden sm:flex">
      {links.map((link, index) => (
        <Item key={index} href={link.href} label={link.label} />
      ))}
    </ul>
  );
};

interface ItemProps {
  href: string;
  label: string;
}

const Item: React.FC<ItemProps> = ({ href, label }) => {
  return (
    <li className="nav-link flex">
      <Link href={href} className="text-[0.75rem] text-white">
        {label}
      </Link>
    </li>
  );
};
