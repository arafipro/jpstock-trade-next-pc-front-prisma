import Link from "next/link";

const SideNavItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  return (
    <div>
      <li className="mb-4">
        <Link
          href={href}
          className="text-gray-500 hover:text-black hover:font-bold hover:tracking-wider duration-100 pl-4"
        >
          {children}
        </Link>
      </li>
    </div>
  );
};

export default SideNavItem;
