"use client";
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";
import { completeQuestAction } from "@/actions/quests";

type CompleteQuestProps = {
  questId?: string | null | undefined;
};

export default function CompleteQuest({ questId }: CompleteQuestProps) {
  const { toast } = useToast();
  return (
    <form action={}>
      <Button
        onClick={() =>
          toast({
            title: "Quest Completed!",
            description: "You have completed the quest!",
          })
        }
      >
        <FaCheck />
      </Button>
    </form>
  );
}
