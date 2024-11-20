import { PrismaClient } from "@prisma/client";

export const createContext = async () => {
  const database = new PrismaClient();

  const ctx = {
    database,
  };

  return ctx;
};

export type Context = typeof createContext;
