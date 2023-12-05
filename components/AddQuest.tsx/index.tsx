"use client";
import QuestForm from "../forms/QuestForm";
import Modal from "../ui/Modal";
import { useState } from "react";
type Props = {};

const AddQuest = (props: Props) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setModalOpen(true)}
        className="bg-amber-400 w-1/3 p-2 rounded-sm text-black font-semibold self-end mr-3 mt-3"
      >
        + Add new task
      </button>

      {modalOpen && (
        <Modal
          title="Add New Quest"
          onClose={() => setModalOpen(false)}
          onConfirm={() => setModalOpen(false)}
        >
          <QuestForm />
        </Modal>
      )}
    </div>
  );
};

export default AddQuest;
