import prisma from "@/database/prisma";
import { User } from "@/types/user";

async function getUser(userId: string): Promise<User | null> {
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

export { getUser };
