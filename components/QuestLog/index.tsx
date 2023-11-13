"use client";
import { useState } from "react";
import QuestTile from "./QuestTile";
interface QuestLogProps {
  title: string;
}

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

function QuestLog({ title }: QuestLogProps): JSX.Element {
  const [isFormOpen, setIsFormOpen] = useState(false);

  function openForm() {
    setIsFormOpen(true);
  }

  function closeForm() {
    setIsFormOpen(false);
  }
  return (
    <section className="text-center">
      <h1 className="text-2xl mb-5">{title}</h1>
      <div className="flex flex-col mx-auto justify-center lg:w-1/2 border border-neutral-500 rounded-lg shadow-xl">
        <button
          onClick={openForm}
          className="bg-amber-400 w-1/3 p-2 rounded-sm text-black font-semibold self-end mr-3 mt-3"
        >
          + Add new task
        </button>
        <hr className="my-3 opacity-30" />
        {quests.map((quest) => (
          <QuestTile
            title={quest.title}
            expGain={quest.expGain}
            description={quest.description}
          />
        ))}
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <form className="flex flex-col gap-2 px-12 py-6 mx-auto w-3/4 md:w-1/2 lg:w-1/3 bg-white text-black">
            <div className="form-group ">
              <label>Title</label>
              <input type="text" placeholder="Add a title" />
            </div>
            <div className="form-group ">
              <label>Description</label>
              <textarea placeholder="Add a title" />
            </div>
            <div className="form-group ">
              <label>Difficulty</label>
              <select className="text-black" name="difficulty" id="difficulty">
                <option>Hard</option>
                <option>Medium</option>
                <option>Easy</option>
              </select>
            </div>
            <div className="form-group ">
              <label>Tags</label>
              <select className="text-black" name="tag" id="tag">
                <option>Fitness & Health</option>
                <option>Work</option>
                <option>Chores</option>
                <option value="">Personal</option>
                <option value="">Social</option>
                <option value="">Creativity</option>
              </select>
            </div>
            <button onClick={closeForm} className="bg-red-600 p-2">
              Close
            </button>
          </form>
        </div>
      )}
    </section>
  );
}

export default QuestLog;
