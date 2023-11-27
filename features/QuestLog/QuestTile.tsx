"use client";
import { useState } from "react";
import { FaCheck } from "react-icons/fa";
import Modal from "@/components/ui/Modal";
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

  return (
    <div className="flex justify-between items-center w-full border-b border-neutral-800 rounded-md text-neutral-200 p-5">
      <div>
        <h3 className="text-lg">{title}</h3>
      </div>

      <button
        onClick={showQuestDetails}
        className="p-2 border-none rounded-md bg-green-500 text-black"
      >
        <FaCheck />
      </button>

      {isModalOpen && ( 
        <Modal title={title} 
        content={<p>Quest Information Content</p>} 
        onClose={() => setIsModalOpen(false)} 
        onConfirm={() => setIsModalOpen(false)}/> )
      }
    </div>
  );
}

export default QuestTile;
