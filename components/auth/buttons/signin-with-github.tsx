"use client";
import { Button } from "../../ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

const SignInWithGithubButton = () => {
  return (
    <>
      <Button
        onClick={() =>
          signIn("github", {
            callbackUrl: `${window.location.origin}`,
          })
        }
        className="mt-5"
      >
        Login with Github <Github className="w-4 h-4 ml-4" />
      </Button>
    </>
  );
};

export default SignInWithGithubButton;
