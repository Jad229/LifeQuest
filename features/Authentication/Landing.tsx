import SignInForm from "./SignInForm";
import SigninWithGithub from "./SigninWithGithub";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
export default function Landing() {
  return (
    <section className="flex flex-col md:flex-row mx-auto w-96 gap-10 h-screen justify-center items-center">
      <div className="flex flex-col gap-10">
        <h2 className="text-3xl font-bold">Welcome to LifeQuest!</h2>
        <p className="text-xl">
          LifeQuest is a gamified task manager. Complete tasks to earn
          experience points and level up!
        </p>
      </div>
      <div className="flex flex-col gap-4 w-96">
        <Card>
          <CardHeader>
            <CardTitle>Sign in to Get Started!</CardTitle>
            <CardDescription>
              Ready to become the best version of yourself?
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
    </section>
  );
}
