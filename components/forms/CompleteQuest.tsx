"use client";

import { Button } from "../ui/button";
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
    <form action={completeQuestWithId}>
      <Button
        onClick={() =>
          toast({
            title: "Quest Completed!",
            description: "You have completed the quest!",
          })
        }
      >
        <Checkbox id="quest-complete" />
      </Button>
    </form>
  );
}
