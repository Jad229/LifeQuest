"use server";

import { calculateExpGain } from "@/services/calculateExpGain";
import { createQuest, getQuest } from "@/services/quests";
import { getUser, updateUserXp } from "@/services/users";
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
  try {
    const session: Session | null = await getServerSession(authOptions);
    const userId: string = session?.user?.id ?? "";
    if (!userId) throw new Error("User ID not found");

    const user: User | null = await getUser(userId);
    if (!user) throw new Error("User not found");

    const userLevel: number = user.level ?? 1; // Set a default level if not available

    const title: string = data.get("title") as string;
    const description: string = data.get("description") as string;
    const difficulty: string = data.get("difficulty") as string;
    const skill: string = data.get("skill") as string;
    const category: string = data.get("category") as string;

    if (!title || !description || !difficulty || !skill || !category) {
      throw new Error("Incomplete quest data");
    }

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
  } catch (error: any) {
    // Handle the error, e.g., log it or show a user-friendly message
    console.error("Error creating quest:", error.message);
    // Optionally rethrow the error for higher level handling
    throw error;
  }
}

export async function completeQuestAction(questId: string | null | undefined) {
  try {
    const session: Session | null = await getServerSession(authOptions);
    const userId: string = session?.user?.id ?? "";

    const user: User | null = await getUser(userId);
    if (!user) throw new Error("User not found");

    const quest: Quest | null = await getQuest(questId);
    if (quest?.userId !== userId)
      throw new Error("Quest does not belong to user");

    // TODO: Add xp to user
    const expGain: number = quest.expGain;

    const updatedUser = await updateUserXp(user, expGain);

    // TODO: check if its a recurring quest

    //We revalidate path to rerender progress
    revalidatePath("/");
  } catch (error: any) {
    // Handle the error, e.g., log it or show a user-friendly message
    console.error("Error creating quest:", error.message);
    // Optionally rethrow the error for higher level handling
  }
}
