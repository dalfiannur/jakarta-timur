import { database } from "@/db";
import { configs } from "@/db/schema";
import { procedure, router } from "@/server/trpc";
import { TRPCError } from "@trpc/server";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const config = router({
  findByName: procedure.input(z.string()).query(async ({ input }) => {
    const data = await database.query.configs.findFirst({
      where: eq(configs.name, input),
    });

    if (!data) {
      throw new TRPCError({
        message: "Config not found",
        code: "NOT_FOUND",
      });
    }

    if (data.type === "json") {
      return JSON.parse(data.value ?? "{}");
    }

    if (data.type === "string") {
      return data.value;
    }

    if (data.type === "number") {
      return parseFloat(data.value ?? "0");
    }
  }),
});
