import { procedure, router } from "@/server/trpc";
import { TRPCError } from "@trpc/server";
import { z } from "zod";

export const config = router({
  findByName: procedure.input(z.string()).query(async ({ input, ctx }) => {
    const data = await ctx.database.config.findFirst({
      where: {
        name: input,
      },
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
