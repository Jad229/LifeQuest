import ExperienceBar from "@/components/ExperienceBar";
import Leaderboard from "@/features/Leaderboard";
import QuestLog from "@/features/QuestLog";
import Image from "next/image";
import { fetchQuests } from "@/services/questFetchers";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

export default async function Home({ searchParams }: Props) {
  const quests = await fetchQuests();

  return (
    <main className="max-w-6xl mx-auto p-5 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Welcome, Username</h2>
        <Image
          className="rounded-full"
          src="https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
          alt="User Profile Picture"
          width={75}
          height={75}
        />
      </div>
      <ExperienceBar />
      <QuestLog title="Quests" quests={quests} searchParams={searchParams} />
      <Leaderboard />
    </main>
  );
}
