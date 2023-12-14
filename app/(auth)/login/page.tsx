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

        {/* <div className="flex items-center justify-center">
          <div className="flex justify-start h-[1px] bg-gray-200 flex-1"></div>
          <p className="text-xs mx-6">Or</p>
          <div className="flex justify-start h-[1px] bg-gray-200 flex-1"></div>
        </div>

        <form method="post" action="/api/auth/signin">
          <div className="grid gap-6">
            <div className="grid gap-1">
              <Label htmlFor="email" className="font-medium">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={false}
                className=" focus-visible:ring-0 focus-visible:ring-offset-0  border-2 focus-visible:border-[#7D4BDF]"
              />
            </div>
            <Button disabled={false}>
              {false && <Circle className="mr-2 h-4 w-4 animate-spin" />}
              Continue
            </Button>

            <Link className="text-sm" href="/">
              Forget Password ?
            </Link>
          </div>
        </form> */}
      </div>
    </div>
  );
};

export default LoginPage;
