import prisma from "@/database/prisma";
import { Stat } from "@/types/stat";

async function getUserStats(userId: string) {
  const stats = await prisma.stat.findMany({
    where: {
      userId: userId,
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

async function updateStat() {}

async function deleteStat() {}

export { getUserStats, createStat, updateStat, deleteStat };
