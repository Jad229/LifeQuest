import prisma from "@/database/prisma";
import { Quest } from "@/types/questTypes";

async function fetchQuests() {
  const response = await prisma.quest.findMany();
  // console.log(response);
  return response;
}

async function createQuest(
  title: string,
  description: string,
  difficulty: string,
  category: string
) {
  const response = await prisma.quest.create({
    data: {
      title,
      description,
      difficulty,
      category,
    },
  });
  return response;
}
export { fetchQuests, createQuest };
