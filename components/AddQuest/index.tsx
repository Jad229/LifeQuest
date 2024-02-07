import QuestForm from "../forms/QuestForm/QuestForm";
import { Button } from "@/components/ui/button";
import { Session } from "@/types/session";
import { getUserStats } from "@/services/stats";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

type Props = {
  searchParams: Record<string, string> | null | undefined;
};

const AddQuest = async ({ searchParams }: Props) => {
  const session: Session | null = await getServerSession(authOptions);
  const stats = await getUserStats(session?.user?.id as string);
  return (
    <div className="mx-auto">
      <AlertDialog>
        <AlertDialogTrigger>
          <Button>Add New Task</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Create New Quest</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            <QuestForm stats={stats} />
          </AlertDialogDescription>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default AddQuest;
