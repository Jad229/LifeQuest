import prisma from "@/database/prisma";
import { User } from "@/types/databaseSchemas";

async function getUser(userId: string): Promise<User> {
  const user: User = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });

  return user;
}

export { getUser };
