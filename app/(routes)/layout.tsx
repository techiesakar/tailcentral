import PageWrapper from "@/components/common/page-wrapper";
import { Header } from "@/components/navigation/header/header";
import Sidebar from "@/components/navigation/sidebar/public-sidebar";

const BlockLayout = ({ children }: { children: React.ReactNode }) => {
  return (

    <PageWrapper header={<Header />} sidebar={<Sidebar />}>
      {children}
    </PageWrapper>

  );
};

export default BlockLayout;
