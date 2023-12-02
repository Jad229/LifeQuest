import { PrismaClient } from "@prisma/client";

async function main() {
  //   await prisma.quest.deleteMany(); // Optional: Deletes existing quests
  //   await prisma.user.deleteMany(); // Optional: Deletes existing users
  //   const user = await prisma.user.create({
  //     data: {
  //       username: "Justin",
  //       email: "test@test.com",
  //     },
  //   });
  const quest = await prisma.quest.create({
    data: {
      title: "Coding",
      description:
        "Work on a coding project to improve your programming skills.",
      category: "Dailies",
      userId: "057d803d-2e15-4099-85a5-541822bc2a4b",
    },
  });

  console.log(quest);
}
const prismaClientSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globalPrisma.prisma ?? prismaClientSingleton();

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

export default prisma;

if (process.env.NODE_ENV !== "production") globalPrisma.prisma = prisma;
