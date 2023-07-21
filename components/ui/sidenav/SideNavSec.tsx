const SideNavSec = ({
  children,
  hiddensec,
}: {
  children: React.ReactNode;
  hiddensec?: string;
}) => {
  return <ul className={`mx-4 ${hiddensec}`}>{children}</ul>;
};

export default SideNavSec;
