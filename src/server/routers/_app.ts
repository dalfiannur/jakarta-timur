import { router } from "../trpc";
import { config } from "./dashboard/config";
import { externalApi } from "./external-api";

export const appRouter = router({
  config,
  externalApi,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
