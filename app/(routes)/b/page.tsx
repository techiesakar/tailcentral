import { authOptions } from "@/app/utils/auth";
import { getServerSession } from "next-auth";

const BlockPage = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return <div className="p-10">Homepage</div>;
};

export default BlockPage;
