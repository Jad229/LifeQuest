"use client";
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";
import { useToast } from "../ui/use-toast";

export default function CompleteQuest() {
  const { toast } = useToast();
  return (
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
  );
}
