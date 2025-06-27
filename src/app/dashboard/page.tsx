import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import bookImg from "./book.png";
import { auth } from "../../../auth";
import MySubscription from "./minha-assinatura/page-without-subscription";
import { fetchSubscriptionByEmail } from "@/lib/stripe";

export default async function MonthlyBook() {
  const session = await auth();
  const userEmail = session?.user?.email as string
  const subscription = await fetchSubscriptionByEmail(userEmail);
  return (
    <div>
      {subscription && (
        <>
          <h1 className="text-3xl font-bold mb-2">Livro do Mês</h1>
          <Image src={bookImg} alt="Livro do mês" className="shadow-md" />
          <Link
            className={cn(
              "flex items-center justify-center mt-2",
              buttonVariants()
            )}
            href="/livro.pdf"
            target="_blank"
          >
            <Download className="h-4 w-4" /> Download do Pdf
          </Link>
        </>
      )}
      {!subscription && <MySubscription />}
    </div>
  );
}
