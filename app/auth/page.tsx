import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SigninWithGithub from "@/features/Authentication/SigninWithGithub";
type Props = {};

export default function AuthRoute({}: Props) {
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
            <div className="flex flex-col gap-2">
              <Label>Email</Label>
              <Input name="email" type="email" placeholder="name@example.com" />
            </div>
            <Button>Login with Email</Button>
            <hr />
            <SigninWithGithub />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
