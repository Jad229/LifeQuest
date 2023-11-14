import ExperienceBar from "@/components/ExperienceBar";
import Leaderboard from "@/components/Leaderboard";
import QuestLog from "@/components/QuestLog";
import Image from "next/image";
import { fetchDailyQuests, fetchHabitQuests, fetchTodoQuests } from "@/services/questFetchers";

export default async function Home(){

  const dailyQuests = await fetchDailyQuests();
  const habitQuests = await fetchHabitQuests();
  const todoQuests = await fetchTodoQuests();

  return (
    <main className="p-5 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Welcome, User</h2>
        <Image
          className="rounded-full"
          src="https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
          alt="User Profile Picture"
          width={75}
          height={75}
        />
      </div>
      <ExperienceBar />
      <QuestLog title="Dailies" quests={dailyQuests} />
      <QuestLog title="Habits" quests={habitQuests} />
      <Leaderboard />
    </main>
  );
}

