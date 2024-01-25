import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { createStatAction } from "@/actions/stats";
import { getUserStats } from "@/services/stats";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { Session } from "@/types/session";
import { Card, CardContent } from "@/components/ui/card";
export default async function Profile() {
  const session: Session | null = await getServerSession(authOptions);
  const stats = await getUserStats(session?.user?.id as string);

  const statCards = stats.map((stat) => {
    return (
      <Card key={stat.id} className="w-52 h-52">
        <CardContent className="flex flex-col justify-center items-center gap-5 h-full">
          <h3 className="text-3xl font-bold">{stat.name}</h3>
          <p className="text-4xl">{stat.value}</p>
        </CardContent>
      </Card>
    );
  });

  return (
    <>
      <h1>Name: Username</h1>
      <h2>Character Stats</h2>
      <form action={createStatAction} className="flex">
        <Input name="statName" id="statName" placeholder="Add a new stat" />
        <Button>Add Stat</Button>
      </form>
      <div className="flex flex-wrap justify-center items-center gap-3 p-12 ">
        {statCards}
      </div>
    </>
  );
}
