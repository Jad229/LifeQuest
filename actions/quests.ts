"use server";

import { createQuest } from "@/services/quests";
import { Quest } from "@/types/quest";
import { revalidatePath } from "next/cache";

export async function createQuestAction(quest: Quest) {
  await createQuest(quest);
  revalidatePath("/");
}
