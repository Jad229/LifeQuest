"use server";

import { createQuest } from "@/services/quests";
import { revalidatePath } from "next/cache";

export async function createQuestAction(
  title: string,
  description: string,
  difficulty: string,
  category: string,
  skill: string,
  userId: string
) {
  await createQuest(title, description, difficulty, skill, category, userId);
  revalidatePath("/");
}
