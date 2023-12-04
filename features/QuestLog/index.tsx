"use client";
import { useState } from "react";
import QuestTile from "./QuestTile";
import { Quest } from "@/types/questTypes";
import Modal from "@/components/ui/Modal";
import QuestForm from "@/components/forms/QuestForm";
interface QuestLogProps {
  title: string;
  quests: Quest[];
}

enum QuestType {
  Dailies = "Dailies",
  Habits = "Habits",
  Todos = "Todos",
}

function QuestLog({ title, quests }: QuestLogProps): JSX.Element {
  const [selectedCategory, setSelectedCategory] = useState<QuestType>(
    QuestType.Dailies
  ); // ["daily", "habit", "todo"
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredQuests = quests.filter(
    (quest) => quest.category === selectedCategory
  );

  return (
    <section className="text-center">
      <h1 className="text-2xl mb-5">{title}</h1>
      <div className="flex mx-auto pl-10 gap-2 lg:w-1/2 ">
        {Object.values(QuestType).map((type) => (
          <button
            key={type}
            onClick={() => setSelectedCategory(type)}
            className={`rounded-t-md py-2 px-6 font-semibold border border-purple-600 border-b-0 ${
              selectedCategory === type ? "bg-purple-600 text-white" : ""
            }`}
          >
            {type}
          </button>
        ))}
      </div>
      <div className="flex flex-col mx-auto justify-center lg:w-1/2 border border-neutral-500 rounded-lg shadow-xl">
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-amber-400 w-1/3 p-2 rounded-sm text-black font-semibold self-end mr-3 mt-3"
        >
          + Add new task
        </button>
        <hr className="my-3 opacity-30" />
        {filteredQuests.map((quest) => (
          <QuestTile
            key={quest.id}
            title={quest.title}
            expGain={quest.expGain}
            description={quest.description}
          />
        ))}
      </div>
      {isModalOpen && (
        <Modal
          title={title}
          content=<QuestForm />
          onClose={() => setIsModalOpen(false)}
          onConfirm={() => setIsModalOpen(false)}
        />
      )}
    </section>
  );
}

export default QuestLog;
