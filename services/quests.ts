import prisma from "@/database/prisma";
import { Quest } from "@/types/quest";

async function getQuests(userId: string) {
  const quests = await prisma.quest.findMany({
    where: {
      userId,
    },
    select: {
      userId: true,
      id: true,
      title: true,
      skill: true,
      description: true,
      difficulty: true,
      category: true,
      expGain: true,
    },
  });

  return quests;
}

async function createQuest(quest: Quest) {
  const response = await prisma.quest.create({
    data: {
      ...quest,
    },
  });
  return response;
}
export { getQuests, createQuest };
