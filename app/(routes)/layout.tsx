import { Header } from "@/components/navigation/header/header";
import Sidebar from "@/components/navigation/sidebar/sidebar";
import BlocksWrapper from "@/components/page/blocks/blocks";

const BlockLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <BlocksWrapper header={<Header />} sidebar={<Sidebar />}>
        {children}
      </BlocksWrapper>
    </>
  );
};

export default BlockLayout;
