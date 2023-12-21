import prisma from "@/database/prisma";
import { User } from "@/types/user";

async function getUser(userId: string): Promise<User | null> {
  if (!userId) return null;

  const user: User | null = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      name: true,
      email: true,
      image: true,
      quests: true,
      level: true,
      xp: true,
    },
  });

  return user;
}

async function updateUserXp(user: User, expGain: number) {
  const currentXp: number = user.xp ?? 0;
  const newXp: number = currentXp + expGain;

  //TODO: Check if user has leveled up after adding exp
  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      xp: newXp,
    },
  });

  if (!updatedUser) throw new Error("User could not be updated");

  return updatedUser;
}
//TODO: Create a function to update user xp
//TODO: Create a function to update user level
async function updateUserLevel(user: User) {
  //TODO: review this logic
  const currentLevel: number = user.level ?? 0;
  const newLevel: number = currentLevel + 1;

  const updatedUser = await prisma.user.update({
    where: {
      id: user.id,
    },
    data: {
      level: newLevel,
    },
  });

  if (!updatedUser) throw new Error("User could not be updated");

  return updatedUser;
}
//TODO: Create a function to update user inventory

export { getUser, updateUserXp };
