import prisma from "@/database/prisma";
import { Stat } from "@/types/stat";

async function getUserStats(userId: string) {
  const stats = await prisma.stat.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      userId: true,
      name: true,
      value: true,
    },
  });

  return stats;
}

async function createStat(stat: Stat) {
  const newStat = await prisma.stat.create({
    data: {
      ...stat,
    },
  });

  return newStat;
}

async function updateStat(statId: string, difficulty: string) {
  let statIncrease = 0;
  switch (difficulty) {
    case "easy":
      statIncrease = 1;
      break;
    case "medium":
      statIncrease = 2;
      break;
    case "hard":
      statIncrease = 3;
      break;
    default:
      break;
  }

  const updatedStat = await prisma.stat.update({
    where: {
      id: statId,
    },
    data: {
      value: {
        increment: statIncrease,
      },
    },
  });
}

async function deleteStat() {}

export { getUserStats, createStat, updateStat, deleteStat };
