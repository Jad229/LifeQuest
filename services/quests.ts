import prisma from "@/database/prisma";

async function fetchQuests(userId: string) {
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
  skill: string
) {
  const response = await prisma.quest.create({
    data: {
      title,
      description,
      difficulty,
      skill,
      category,
    },
  });
  return response;
}
export { fetchQuests, createQuest };
