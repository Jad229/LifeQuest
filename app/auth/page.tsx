import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import SignInForm from "@/features/Authentication/SignInForm";
import SigninWithGithub from "@/features/Authentication/SigninWithGithub";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export default async function AuthRoute() {
  const session = await getServerSession(authOptions);

  if (session) {
    return redirect("/");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Card>
        <CardHeader>
          <CardTitle>Please sign in</CardTitle>
          <CardDescription>
            To access this page you need to log in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <SignInForm />
            <hr />
            <SigninWithGithub />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
