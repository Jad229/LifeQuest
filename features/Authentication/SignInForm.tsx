"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SignInForm() {
  return (
    <form className="flex flex-col gap-2">
      <div>
        <Label>Email</Label>
        <Input name="email" type="email" placeholder="name@example.com" />
      </div>
      <Button type="submit">Login with Email</Button>
    </form>
  );
}
