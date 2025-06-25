import Link from "next/link";
import { Button } from "../ui/button";

type NavbarLink = {
  label: string;
  href: string;
};

export interface BaseNavbarProps {
  links: NavbarLink[];
  actionButton?: NavbarLink;
  extraComponent?: React.ReactNode;
}

export async function NavButton({
  links,
  actionButton,
  extraComponent,
}: BaseNavbarProps) {
  return (
    <>
      {actionButton && (
        <Link href={actionButton}>
          <Button variant={"outline"} className="cursor-pointer">
            {actionButton}
          </Button>
        </Link>
      )}
    </>
  );
}
