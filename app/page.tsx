import Leaderboard from "@/features/Leaderboard";
import QuestLog from "@/features/QuestLog";
import { fetchQuests } from "@/services/quests";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";
import Unauthorized from "@/features/Authentication/Unauthorized";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: Props) {
  const session = await getServerSession(authOptions);
  const quests = await fetchQuests();

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
          <Progress value={33} />
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
