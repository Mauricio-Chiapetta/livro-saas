export default function Layout({ children }: { children: React.ReactNode }) {
  return (
   <section className="flex flex-col items-center justify-center py-24 sm:px-10">
    {children}
   </section>
  );
}
