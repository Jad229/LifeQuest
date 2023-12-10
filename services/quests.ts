import prisma from "@/database/prisma";

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
  const expGain = calculateExpGain(difficulty);
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
