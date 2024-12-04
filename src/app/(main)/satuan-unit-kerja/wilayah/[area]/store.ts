import { signal } from "@preact/signals-react";

export const store = signal({
  search: signal(""),
  page: signal(1),
  kecamatan_id: signal<string | undefined>(),
});
