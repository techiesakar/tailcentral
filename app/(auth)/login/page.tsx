import { authOptions } from "@/app/utils/auth";
import SignInWithGithubButton from "@/components/auth/buttons/signin-with-github";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Circle } from "lucide-react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const LoginPage = async () => {
  const session = await getServerSession(authOptions);
  if (session) {
    return redirect("/");
  }
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="grid gap-6 max-w-[480px] w-full  py-8 px-10  border border-gray-300 rounded-md">
        <form method="post" action="/api/auth/signin">
          <div className="grid gap-2">
            <div className="grid gap-1">
              <Label className="sr-only" htmlFor="email">
                Email
              </Label>
              <Input
                id="email"
                placeholder="name@example.com"
                type="email"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                disabled={false}
                className=" focus-visible:ring-0"
              />
            </div>
            <Button disabled={false}>
              {false && <Circle className="mr-2 h-4 w-4 animate-spin" />}
              Sign In with Email
            </Button>
          </div>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <SignInWithGithubButton />
      </div>
    </div>
  );
};

export default LoginPage;
