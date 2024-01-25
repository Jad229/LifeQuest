import Link from "next/link";
import QuestForm from "../forms/QuestForm";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/button";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const AddQuest = ({ searchParams }: Props) => {
  const showModal = searchParams?.addQuestModal;

  return (
    <div>
      <Button>
        <Link href="/?addQuestModal=true">+ Add new task</Link>
      </Button>

      {showModal && (
        <Modal title="Add New Quest">
          <QuestForm />
        </Modal>
      )}
    </div>
  );
};

export default AddQuest;
