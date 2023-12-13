"use client";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

const SignInWithGithubButton = () => {
  const { data: session, status } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (session) {
      setIsLoading(false);
    }
  }, [session]);
  return (
    <Button
      disabled={isLoading}
      onClick={() => {
        setIsLoading(true);
        signIn("github");
      }}
      variant="outline"
      type="button"
    >
      <Github className="mr-2 h-4 w-4" />
      Github
    </Button>
  );
};

export default SignInWithGithubButton;
