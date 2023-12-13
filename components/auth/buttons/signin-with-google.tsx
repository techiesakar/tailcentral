"use client";
import { Button } from "../../ui/button";
import { signIn } from "next-auth/react";

const SignInWithGoogleButton = () => {
  return (
    <>
      <Button
        onClick={() =>
          signIn("google", {
            callbackUrl: `${window.location.origin}`,
          })
        }
        className="mt-5"
      >
        Login with Google
      </Button>
    </>
  );
};

export default SignInWithGoogleButton;
