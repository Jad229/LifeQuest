"use server";

import prisma from "@/database/prisma";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { Session } from "@/types/session";
import { createStat } from "@/services/stats";

export async function createStatAction(data: FormData) {
  try {
    const session: Session | null = await getServerSession(authOptions);
    const userId: string = session?.user?.id ?? "";
    if (!userId) throw new Error("User ID not found");

    const statName: string = data.get("statName") as string;

    const newStat = { userId, name: statName.toUpperCase() };

    await createStat(newStat);

    revalidatePath("/profile");
  } catch (error: any) {
    console.error("Error creating stat:", error.message);
    throw error;
  }
}
