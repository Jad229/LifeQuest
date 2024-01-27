import Link from "next/link";
import QuestForm from "../forms/QuestForm";
import Modal from "@/components/ui/Modal";
import { Button } from "@/components/ui/button";
import { Session } from "@/types/session";
import { getUserStats } from "@/services/stats";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const AddQuest = async ({ searchParams }: Props) => {
  const showModal = searchParams?.addQuestModal;
  const session: Session | null = await getServerSession(authOptions);
  const stats = await getUserStats(session?.user?.id as string);
  return (
    <div>
      <Button>
        <Link href="/?addQuestModal=true">+ Add new task</Link>
      </Button>

      {showModal && (
        <Modal title="Add New Quest">
          <QuestForm stats={stats} />
        </Modal>
      )}
    </div>
  );
};

export default AddQuest;
