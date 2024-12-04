import { signal } from "@preact/signals-react";

export const view = signal<"grid" | "list">("grid");
export const filter = signal({
  search: signal<string | undefined>(),
  year: signal<string | undefined>(),
  sort: signal<string | undefined>(),
});
