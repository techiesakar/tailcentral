import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import { LogoutBtn } from "@/components/auth/buttons/logoutbtn";

const Home = async () => {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="p-10">
      <h1>Hello from the index page, this is a public route</h1>
      {session ? (
        <div>
          <h1>you are logged in </h1>
          <LogoutBtn />
        </div>
      ) : (
        <div>
          <h1>Pleae log in to see something special</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
