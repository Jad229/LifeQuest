import ExperienceBar from "@/components/ExperienceBar";
import QuestLog from "@/components/QuestLog";

export default function Home() {
  return (
    <main className="p-5 flex flex-col gap-6">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Welcome, User</h2>
        <div>Image goes here</div>
      </div>
      <ExperienceBar/>
      <QuestLog />
    </main>
  );
}
