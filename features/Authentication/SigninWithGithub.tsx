"use client";

import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";

type Props = {};

export default function SigninWithGithub({}: Props) {
  return (
    <Button variant="secondary">
      Login with Github <Github className="w-4 h-4 ml-4" />
    </Button>
  );
}
