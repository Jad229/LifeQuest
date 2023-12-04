import { PrismaClient } from "@prisma/client";

async function main() {
  // const quest = await prisma.quest.create({
  //   data: {
  //     title: "Gym Workout",
  //     description: "Hit the gym and have a good workout session.",
  //     category: "Habits",
  //     userId: "057d803d-2e15-4099-85a5-541822bc2a4b",
  //   },
  // });
  // console.log(quest);
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
