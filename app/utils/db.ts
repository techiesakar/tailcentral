import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>;
}

const client = globalThis.prisma ?? prismaClientSingleton();

export default client;

if (process.env.NODE_ENV !== "production") globalThis.prisma = client;
