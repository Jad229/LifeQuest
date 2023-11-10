"use client";
import { useState } from "react";
import { FaPlus } from "react-icons/fa/";
interface QuestTileProps {
  title: string;
  expGain: number;
  description: string;
}

function QuestTile({
  title,
  expGain,
  description,
}: QuestTileProps): JSX.Element {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function showQuestDetails(): void {
    setIsModalOpen(true);
  }

  function hideQuestDetails(): void {
    setIsModalOpen(false);
  }
  return (
    <div className="flex justify-between items-center w-full text-neutral-200 p-5">
      <div>
        <h3 className="text-lg">{title}</h3>
      </div>

      <button
        onClick={showQuestDetails}
        className="p-2 border-none rounded-md bg-green-500 text-black"
      >
        <FaPlus />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
          <div className="flex flex-col gap-4 w-3/4 bg-white rounded-lg p-4 text-black">
            <h1 className="text-2xl"> Quest Details </h1>
            <div className="flex flex-col text-left">
              {/* pull data from database and render as many quest rewards */}
              <p>Exp: {expGain}</p>
              <p>Description: {description}</p>
            </div>
            <button
              onClick={hideQuestDetails}
              className="bg-red-500 py-2 px-4 text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestTile;
