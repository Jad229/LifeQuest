import Leaderboard from "@/features/Leaderboard";
import QuestLog from "@/features/QuestLog";
import { fetchQuests } from "@/services/quests";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { getServerSession } from "next-auth";
import { authOptions } from "../utils/auth";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: Props) {
  const session = await getServerSession(authOptions);
  const quests = await fetchQuests();

  return (
    <main className="max-w-6xl mx-auto p-5 flex flex-col gap-6">
      <h1>THIS IS A PUBLIC ROUTE</h1>
      {session ? (
        <div>
          <h1 className="bg-green-500 text-white p-2 rounded-md">
            You are logged in!
          </h1>
          <div className="flex justify-between items-center">
            <h2 className="font-bold text-xl">Welcome, Username</h2>
            <Avatar>
              <AvatarImage src="https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg" />
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
        <div className="bg-red-500 text-white p-2 rounded-md">
          You are not logged in!
        </div>
      )}
    </main>
  );
}
