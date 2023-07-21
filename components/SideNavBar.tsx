import SideNavItem from "./ui/sidenav/SideNavItem";
import SideNavSec from "./ui/sidenav/SideNavSec";
import SideNavTitle from "./ui/sidenav/SideNavTitle";

export default function SideNavBar({
  hidden,
  hiddensec,
}: {
  hidden?: string;
  hiddensec?: string;
}) {
  return (
    <div className={`h-screen w-72 border-r bg-white ${hidden}`}>
      <SideNavSec>
        <SideNavItem href="/">
          TOP
        </SideNavItem>
        <SideNavItem href="/">
          Dashboard
        </SideNavItem>
      </SideNavSec>
      <SideNavSec hiddensec={hiddensec}>
        <hr className="border-2" />
        <SideNavTitle>tradings</SideNavTitle>
        <SideNavItem href="/trade">
          取引一覧
        </SideNavItem>
        <SideNavItem href="/stock">
          銘柄一覧
        </SideNavItem>
      </SideNavSec>
      <SideNavSec>
        <hr className="border-2" />
        <SideNavTitle>settings</SideNavTitle>
        <SideNavItem href="/market">
          市場一覧
        </SideNavItem>
        <SideNavItem href="/company">
          証券会社一覧
        </SideNavItem>
      </SideNavSec>
      <SideNavSec>
        <hr className="border-2" />
        <SideNavTitle>tools</SideNavTitle>
        <SideNavItem href="/">
          PDF読み込み
        </SideNavItem>
        <SideNavItem href="/">
          銘柄一覧
        </SideNavItem>
      </SideNavSec>
    </div>
  );
}
