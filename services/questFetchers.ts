import prisma from "@/database/prisma";
import { Quest } from "@/types/questTypes";

async function fetchQuests() {
  const response = await prisma.quest.findMany({});
  // console.log(response);
  return response;
}

export { fetchQuests };
