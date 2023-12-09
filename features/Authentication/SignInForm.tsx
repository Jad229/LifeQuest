"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState<null | string>(null);
  async function SignInWithEmail() {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });
    if (!signInResult?.ok) {
      return toast({
        title: "Sorry, we couldn't sign you in.",
        description: "Something went wrong :( Please try again.",
        variant: "destructive",
      });
    }

    return toast({
      title: "Success!",
      description: "A magic link has been sent to your provided email!",
    });
  }

  return (
    <form action={SignInWithEmail} className="flex flex-col gap-2">
      <div>
        <Label>Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="name@example.com"
        />
      </div>
      <Button type="submit">Login with Email</Button>
    </form>
  );
}
