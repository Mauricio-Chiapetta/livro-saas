import { Metadata } from "next";

export const metadata:Metadata = {
  title: "LivroSaaS | Cadastro",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="py-24 h-screen flex justify-center">
        <div className="container flex flex-col items-center text-center">
          {children}
        </div>
      </div>
    </>
  );
}
