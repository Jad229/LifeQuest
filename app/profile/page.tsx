import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createStatAction } from "@/actions/stats";
import { getUserStats } from "@/services/stats";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { Session } from "@/types/session";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getUser } from "@/services/users";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function Profile() {
  const session: Session | null = await getServerSession(authOptions);
  const stats = await getUserStats(session?.user?.id as string);
  const user = await getUser(session?.user?.id as string);

  const statCards = stats.map((stat) => {
    return (
      <Card key={stat.id} className="w-full sm:w-52 h-52">
        <CardContent className="flex flex-col justify-center items-center gap-5 h-full">
          <h3 className="text-xl font-bold">{stat.name}</h3>
          <p className="text-3xl">{stat.value}</p>
        </CardContent>
      </Card>
    );
  });

  return (
    <div className="flex flex-col gap-12">
      <section className="flex flex-col gap-6 justify-center items-center">
        <h1 className="text-3xl font-bold">Name: {user?.name}</h1>
        <div className="flex flex-col justify-center items-center gap-3">
          <p className="text-xl">
            <strong>Level:</strong> {user?.level}
          </p>
          <Avatar>
            <AvatarImage src={session?.user?.image as string} />
            <AvatarFallback>Avatar</AvatarFallback>
          </Avatar>
        </div>
      </section>
      <Card className="flex flex-col gap-5 p-5 mx-auto w-full sm:w-3/4">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Character Stats</CardTitle>
          <CardDescription>
            Customize your stats to fit your character! See at your progress!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createStatAction} className="w-2/3 mx-auto flex">
            <Input name="statName" id="statName" placeholder="Add a new stat" />
            <Button>Add Stat</Button>
          </form>
          <div className="flex flex-wrap justify-center items-center gap-3 p-12 ">
            {statCards}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
