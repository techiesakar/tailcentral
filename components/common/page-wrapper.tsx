"use client";
import { useMenuContext } from "@/components/providers/menu-context";
import { useMenuToggle } from "@/hooks/use-menu-toggle-store";
import { cn } from "@/lib/utils";

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
          "fixed inset-y-0 w-[260px] bg-gray-50 h-screen flex flex-col ease-in-out transition-all duration-200 md:left-0 border-r -left-full",
          isOpen && "left-0"
        )}
      >
        {sidebar}
      </aside>

      <div
        className={cn(
          "flex flex-col  justify-between  transition-all ease-in-out duration-200 md:ml-[260px] max-h-screen h-full overflow-hidden",
          isOpen && ""
        )}
      >
        {header}
        <main className="flex-1 p-6 border border-gray-300 border-l-0">
          {children}
        </main>
      </div>
    </>
  );
};

export default PageWrapper;
