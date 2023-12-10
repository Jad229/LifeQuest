import prisma from "@/database/prisma";
import { calculateExpGain } from "./calculateExpGain";
import { getUser } from "./users";
import { User } from "@/types/databaseSchemas";

async function getQuests(userId: string) {
  const response = await prisma.quest.findMany({
    where: {
      id: userId,
    },
  });

  return response;
}

async function createQuest(
  title: string,
  description: string,
  difficulty: string,
  category: string,
  skill: string,
  userId: string
) {
  const userLevel = getUser(userId).level;
  const expGain = calculateExpGain(difficulty, userLevel);
  const response = await prisma.quest.create({
    data: {
      userId,
      title,
      description,
      difficulty,
      skill,
      category,
    },
  });
  return response;
}
export { getQuests, createQuest };
