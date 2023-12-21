"use client";
import { cn } from "@/lib/utils";
import { useMenuToggle } from "@/hooks/use-menu-toggle-store";

type PageWrapper = {
  sidebar?: React.ReactNode;
  header?: React.ReactNode;
  children?: React.ReactNode;
};
const PageWrapper = ({ sidebar, header, children }: PageWrapper) => {
  const { isOpen } = useMenuToggle();
  return (
    <>
      <aside
        className={cn(
          "fixed inset-y-0 w-[260px] bg-gray-50 z-50 h-screen flex flex-col ease-in-out transition-all duration-200 md:left-0  -left-full",
          isOpen && "left-0"
        )}
      >
        {sidebar}
      </aside>

      <div
        className={cn(
          " transition-all ease-in-out duration-200 md:ml-[260px] justify-between max-h-screen flex flex-col h-full relative",
          isOpen && ""
        )}
      >
        {/* This is Main Header */}
        {header}
        {/* This is Main Right Container  */}
        <main className="mt-auto border flex-1   border-gray-300   border-l-0 overflow-hidden">
          <section className="flex-col flex h-full">
            {/* Children will hold Heading as well body of the components */}
            {children}
          </section>
        </main>
      </div>
    </>
  );
};

export default PageWrapper;
