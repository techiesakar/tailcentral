"use client";
import { Button } from "@/components/ui/button";
import { FaGoogle, FaGithub } from "react-icons/fa";

import React from "react";
import { signIn } from "next-auth/react";
const Providers = [
  {
    name: "github",
    icon: FaGithub,
  },
];

const ProviderLogin = () => {
  return (
    <div className="flex  gap-2 flex-col">
      {Providers.map((provider) => {
        const Icon = provider.icon;
        return (
          <Button
            onClick={() => signIn(provider.name)}
            key={provider.name}
            variant="outline"
            type="submit"
            size="lg"
            className="w-full capitalize  font-light"
          >
            <Icon className="mr-2 h-4 w-4" />
            Continue with {provider.name}
          </Button>
        );
      })}
    </div>
  );
};

export default ProviderLogin;
