import { Button } from "@/components/ui/button";
import { FaGithub, FaGoogle } from "react-icons/fa";

import { signIn } from "@/auth";

const Providers = [
  {
    name: "github",
    icon: FaGithub,
  },

  {
    name: "google",
    icon: FaGoogle,
  },
];

const ProviderLogin = () => {
  return (
    <div className="flex  gap-2 flex-col">
      {Providers.map((provider) => {
        const Icon = provider.icon;
        return (
          <form
            key={provider.name}
            action={async () => {
              "use server";
              await signIn(provider.name, {
                callbackUrl: "/",
              });
            }}
          >
            <Button
              variant="outline"
              type="submit"
              size="lg"
              className="w-full capitalize  font-light"
            >
              <Icon className="mr-2 h-4 w-4" />
              Continue with {provider.name}
            </Button>
          </form>
        );
      })}
    </div>
  );
};

export default ProviderLogin;
