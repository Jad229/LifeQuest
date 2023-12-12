"use server";

import { calculateExpGain } from "@/services/calculateExpGain";
import { createQuest } from "@/services/quests";
import { getUser } from "@/services/users";
import { Quest } from "@/types/quest";
import { User } from "@/types/user";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";

type Session = {
  user: {
    id: string;
    name: string;
    email: string;
    image: string;
  };
};

export async function createQuestAction(data: FormData) {
  const session: Session | null = await getServerSession(authOptions);
  const userId: string = session?.user?.id as string;
  const user: User | null = await getUser(userId);
  const userLevel: number = user?.level as number;

  const title: string = data.get("title") as string;
  const description: string = data.get("description") as string;
  const difficulty: string = data.get("difficulty") as string;
  const skill: string = data.get("skill") as string;
  const category: string = data.get("category") as string;

  if (!title || !description || !difficulty || !skill || !category) return;

  const expGain: number = calculateExpGain(difficulty, userLevel);

  const quest: Quest = {
    userId,
    title,
    description,
    difficulty,
    skill,
    category,
    expGain,
  };
  await createQuest(quest);
  revalidatePath("/");
}
