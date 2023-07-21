import Link from "next/link";

const SideNavItem = ({
  children,
  href,
  mb = 4,
  pl = 4,
}: {
  children: React.ReactNode;
  href: string;
  mb?: number;
  pl?: number;
}) => {
  return (
    <div>
      <li className={`mb-${mb}`}>
        <Link
          href={href}
          className={`text-gray-500 hover:text-black hover:font-bold hover:tracking-wider duration-100 pl-${pl}`}
        >
          {children}
        </Link>
      </li>
    </div>
  );
};

export default SideNavItem;
