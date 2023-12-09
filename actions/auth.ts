"use server";

import { signIn } from "next-auth/react";

export async function SignInWithEmail(email: string) {
  const signInResult = await signIn("email", {
    email: email,
    callbackUrl: `${window.location.origin}`,
  });
}
