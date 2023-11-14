import ExperienceBar from "@/components/ExperienceBar";
import Leaderboard from "@/components/Leaderboard";
import QuestLog from "@/components/QuestLog";
import Image from "next/image";

const quests: {
  id: number;
  title: string;
  expGain: number;
  skills: string[];
  description: string;
}[] = [
  {
    id: 1,
    title: "Coding Project",
    expGain: 100,
    skills: ["Programming", "Problem Solving"],
    description: "Work on a coding project to improve your programming skills.",
  },
  {
    id: 2,
    title: "Gym Workout",
    expGain: 50,
    skills: ["Fitness", "Strength"],
    description: "Hit the gym and have a good workout session.",
  },
  {
    id: 3,
    title: "Reading Challenge",
    expGain: 30,
    skills: ["Intellect", "Knowledge"],
    description: "Read 10 pages of a book to expand your knowledge.",
  },
  {
    id: 4,
    title: "Meditation",
    expGain: 40,
    skills: ["Mental Clarity", "Stress Management"],
    description:
      "Practice meditation for 15 minutes to improve mental clarity and reduce stress.",
  },
  {
    id: 5,
    title: "Cooking Experiment",
    expGain: 60,
    skills: ["Culinary", "Creativity"],
    description:
      "Try cooking a new recipe and experiment with different ingredients.",
  },
];

export default function Home() {
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
      <QuestLog title="Dailies" quests={quests} />
      <QuestLog title="Habits" quests={quests} />
      <Leaderboard />
    </main>
  );
}
