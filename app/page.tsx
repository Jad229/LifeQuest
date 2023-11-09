import QuestLog from "@/components/Quest Log";
import QuestTile from "@/components/Quest Log/QuestTile";

export default function Home() {
  return (
    <main className="p-5">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-xl">Welcome, User</h2>
        <div>Image goes here</div>
      </div>
      <QuestLog />
    </main>
  );
}
