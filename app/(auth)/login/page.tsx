import { auth } from "@/auth";
import ProviderLogin from "@/components/forms/sign-in-form/provider-login";

import Image from "next/image";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await auth();
  if (session) {
    redirect("/");
  }
  return (
    <div className="w-full  relative h-screen flex justify-center items-center">
      <div className="absolute inset-0 -z-10">
        <Image
          src="/signin-bg.svg"
          width={1000}
          height={1000}
          className="absolute h-full w-full object-cover "
          alt="banner"
        ></Image>
      </div>
      <div className="grid gap-6 max-w-[480px] w-full  py-8 px-10  border border-gray-300 rounded-md bg-white">
        <ProviderLogin />
      </div>
    </div>
  );
};

export default LoginPage;
