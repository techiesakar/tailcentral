import PageWrapper from "@/components/common/page-wrapper";
import { Header } from "@/components/navigation/header/header";
import PrivateSidebar from "@/components/navigation/sidebar/private/private-sidebar";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <PageWrapper header={<Header />} sidebar={<PrivateSidebar />}>
        {children}
      </PageWrapper>
    </>
  );
};

export default PrivateLayout;
