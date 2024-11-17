import { router } from "../trpc";
import { config } from "./dashboard/config";

export const appRouter = router({
  config,
});

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter;
