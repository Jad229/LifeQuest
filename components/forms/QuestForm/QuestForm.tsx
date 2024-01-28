"use client";
import { createQuestAction } from "@/actions/quests";
import { useFormState } from "react-dom";
import { Stat } from "@/types/stat";
import SubmitButton from "./SubmitButton";
import FormFields from "./FormFields";

type QuestFormProps = {
  stats: Stat[];
};

export default function QuestForm({ stats }: QuestFormProps) {
  const [state, formAction] = useFormState(createQuestAction, null);

  return (
    <form
      action={formAction}
      className="flex flex-col gap-2 py-6 mx-auto bg-white text-black"
    >
      <FormFields stats={stats} />
      <p
        className={`${
          state?.success ? "text-green-500" : "text-red-500"
        } font-semibold self-center`}
      >
        {state?.message}
      </p>
      <SubmitButton />
    </form>
  );
}
