import Link from "next/link";
import { useRouter } from "next/router";
import { IconContainer } from "../icon_container/iconContainer";

type sidebarLinkProps = {
  href: string;
  title?: string;
  icon: any;
  type?: "link" | "other-page-link";
};

export function SidebarLink({ href, title, icon, type = "link" }: sidebarLinkProps) {
  const router = useRouter();
  return (
    <Link href={href}>
      <IconContainer type={type} activeRoute={router.pathname === href} icon={icon} title={title} />
    </Link>
  );
}
