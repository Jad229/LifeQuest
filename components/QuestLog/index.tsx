"use client";
import { useState } from "react";
import QuestTile from "./QuestTile";

interface Quest {
  id: number;
  title: string;
  expGain: number;
  skills: string[];
  description: string;
}
interface QuestLogProps {
  title: string;
  quests: Quest[];
}

function QuestLog({ title, quests }: QuestLogProps): JSX.Element {
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
