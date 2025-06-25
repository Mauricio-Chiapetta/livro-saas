import { auth } from "@/auth";
import { Button } from "./button";

export default async function NavbarButton({children}: {children:React.ReactNode}) {
    const session = await auth()
  return ( 
      <Button variant={"outline"} className="cursor-pointer">
        {children}
      </Button>
  );
}
