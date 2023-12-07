import QuestTile from "./QuestTile";
import { Quest } from "@/types/questTypes";
import AddQuest from "@/components/AddQuest.tsx";
import Link from "next/link";

interface QuestLogProps {
  title: string;
  quests: Quest[];
  searchParams?: Record<string, string> | null | undefined;
}

enum QuestType {
  Dailies = "Dailies",
  Habits = "Habits",
  Todos = "Todos",
}

function QuestLog({ title, quests, searchParams }: QuestLogProps): JSX.Element {
  const selectedCategory = searchParams?.category;

  const filteredQuests = quests.filter(
    (quest) => quest.category === selectedCategory
  );

  return (
    <section className="text-center">
      <h1 className="text-2xl mb-5">{title}</h1>
      <div className="flex mx-auto pl-10 gap-2 lg:w-1/2 ">
        {Object.values(QuestType).map((type) => (
          <Link
            href={`/?category=${type}`}
            key={type}
            className={`rounded-t-md py-2 px-6 font-semibold border border-purple-600 border-b-0 ${
              selectedCategory === type ? "bg-purple-600 text-white" : ""
            }`}
          >
            {type}
          </Link>
        ))}
      </div>
      <div className="flex flex-col mx-auto justify-center lg:w-1/2 border border-neutral-500 rounded-lg shadow-xl">
        <AddQuest searchParams={searchParams} />
        <hr className="my-3 opacity-30" />

        {filteredQuests.map((quest) => (
          <QuestTile
            key={quest.id}
            title={quest.title}
            description={quest.description}
          />
        ))}
      </div>
    </section>
  );
}

export default QuestLog;
