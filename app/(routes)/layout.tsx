import { Header } from "@/components/navigation/header/header";
import Sidebar from "@/components/navigation/sidebar/sidebar";

const BlockLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Sidebar className="w-[260px]" />
      <div className="flex flex-col justify-between ml-[260px] max-h-screen h-full overflow-hidden">
        <Header />
        <main className="flex-1 p-6 border border-gray-300 bl-0 ">
          {children}
        </main>
      </div>
    </>
  );
};

export default BlockLayout;
