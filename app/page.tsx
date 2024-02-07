import Leaderboard from "@/features/Leaderboard";
import QuestLog from "@/features/QuestLog";
import { getQuests } from "@/services/quests";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import Unauthorized from "@/features/Authentication/Landing";
import { calculateProgress } from "@/services/calculateProgress";
import { getUser } from "@/services/users";
import calculateExpNeeded from "@/services/calculateExpNeeded";
import Link from "next/link";
import { Session } from "@/types/session";

type Props = {
  searchParams: Record<string, string> | null | undefined;
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
    <main className="w-full mx-auto flex sm:p-0 flex-col gap-6">
      {session ? (
        <div className="flex flex-col gap-12">
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-2xl">
              Welcome, {session?.user?.name}
            </h2>
            <Link href="/profile">
              <Avatar>
                <AvatarImage src={session?.user?.image as string} />
                <AvatarFallback>Avatar</AvatarFallback>
              </Avatar>
            </Link>
          </div>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl">Level: {user?.level}</h2>
            <Progress className="w-5/6" value={progress} />
            <p className="text-center">
              {userExp} / {expNeeded}
            </p>
          </div>

          <div className="flex flex-col mx-auto w-full gap-10 md:flex-row sm:p-10">
            <QuestLog
              title="Quests"
              quests={quests}
              searchParams={searchParams}
            />
            <Leaderboard />
          </div>
        </div>
      ) : (
        <Unauthorized />
      )}
    </main>
  );
}
