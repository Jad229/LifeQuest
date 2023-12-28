"use client";

import { useToast } from "../ui/use-toast";
import { completeQuestAction } from "@/actions/quests";
import { Checkbox } from "../ui/checkbox";

type CompleteQuestProps = {
  questId?: string | null | undefined;
};

export default function CompleteQuest({ questId }: CompleteQuestProps) {
  const completeQuestWithId = completeQuestAction.bind(null, questId);
  const { toast } = useToast();
  return (
    <form
      className="flex justify-center items-center"
      action={completeQuestWithId}
    >
      <Checkbox
        onClick={() =>
          toast({
            title: "Quest Completed!",
            description: "You have completed the quest!",
          })
        }
        id="quest-complete"
      />
    </form>
  );
}
