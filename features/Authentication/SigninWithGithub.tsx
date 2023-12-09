"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import { signIn } from "next-auth/react";

type Props = {};

export default function SigninWithGithub({}: Props) {
  return (
    <Button
      onClick={() =>
        signIn("github", {
          callbackUrl: `${window.location.origin}`,
        })
      }
      variant="secondary"
    >
      Login with Github <Github className="w-4 h-4 ml-4" />
    </Button>
  );
}
