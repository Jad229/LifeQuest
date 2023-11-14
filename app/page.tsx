import ExperienceBar from "@/components/ExperienceBar";
import Leaderboard from "@/components/Leaderboard";
import QuestLog from "@/components/QuestLog";
import Image from "next/image";
export default function Home() {
  return (
    <main className="p-5 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Welcome, User</h2>
        <Image
          className="rounded-full"
          src="https://cdn.vectorstock.com/i/preview-1x/08/19/gray-photo-placeholder-icon-design-ui-vector-35850819.jpg"
          alt="profile picture default"
          width={75}
          height={75}
        />
      </div>
      <ExperienceBar />
      <QuestLog title="Dailies" />
      <QuestLog title="Habits" />
      <Leaderboard />
    </main>
  );
}
