import Leaderboard from "@/features/Leaderboard";
import QuestLog from "@/features/QuestLog";
import { getQuests } from "@/services/quests";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import Unauthorized from "@/features/Authentication/Unauthorized";
import { calculateProgress } from "@/services/calculateProgress";
import { getUser } from "@/services/users";
import calculateExpNeeded from "@/services/calculateExpNeeded";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

type Session = {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
};

export default async function Home({ searchParams }: Props) {
  const session: Session | null = await getServerSession(authOptions);

  const user = await getUser(session?.user?.id as string);
  const quests = await getQuests(session?.user?.id as string);

  const userExp: number = user?.xp as number;
  const userLevel: number = user?.level as number;
  const expNeeded: number | undefined = calculateExpNeeded(userLevel);
  const progress = calculateProgress(userExp, expNeeded);
  return (
    <main className="relative max-w-6xl mx-auto p-5 flex flex-col gap-6">
      {session ? (
        <div>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl">
              Welcome, {session?.user?.name}
            </h2>
            <Avatar>
              <AvatarImage src={session?.user?.image as string} />
              <AvatarFallback>Avatar</AvatarFallback>
            </Avatar>
          </div>
          <Progress value={progress} />
          <QuestLog
            title="Quests"
            quests={quests}
            searchParams={searchParams}
          />
          <Leaderboard />
        </div>
      ) : (
        <Unauthorized />
      )}
    </main>
  );
}
