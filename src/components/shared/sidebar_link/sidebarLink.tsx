import Link from "next/link";
import { useRouter } from "next/router";
import { IconContainer } from "../icon_container/iconContainer";

type sidebarLinkProps = {
  href: string;
  title: string;
  icon: any;
};

export function SidebarLink({ href, title, icon }: sidebarLinkProps) {
  const router = useRouter();
  return (
    <Link href={href}>
      <IconContainer type="link" activeRoute={router.pathname === href} icon={icon} title={title} />
    </Link>
  );
}
