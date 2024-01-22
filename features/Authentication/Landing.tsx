import SignInForm from "./SignInForm";
import SigninWithGithub from "./SigninWithGithub";

export default function Landing() {
  return (
    <>
      <section className="flex gap-10 h-screen justify-center items-center">
        <div className="flex flex-col gap-10">
          <h2 className="text-4xl font-bold">Welcome to LifeQuest!</h2>
          <p className="text-xl">
            LifeQuest is a gamified task manager. Complete tasks to earn
            experience points and level up!
          </p>
        </div>
        <div className="flex flex-col gap-4 w-full">
          <SignInForm />
          <hr />
          <SigninWithGithub />
        </div>
      </section>
    </>
  );
}
