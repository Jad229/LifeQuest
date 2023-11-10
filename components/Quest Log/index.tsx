import QuestTile from "./QuestTile";

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

function QuestLog() {
  return (
    <section className="text-center">
      <h1 className="text-2xl mb-5">Quest log</h1>
      <div className="flex flex-col mx-auto justify-center lg:w-1/2 border border-neutral-500 rounded-lg shadow-xl">
        {quests.map((quest) => (
          <QuestTile
            title={quest.title}
            expGain={quest.expGain}
            description={quest.description}
          />
        ))}
      </div>
    </section>
  );
}

export default QuestLog;
