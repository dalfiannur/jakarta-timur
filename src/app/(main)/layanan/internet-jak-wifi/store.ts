import { effect, signal } from "@preact/signals-react";

export const search = signal("");
export const map = signal<{
  longitude?: number;
  latitude?: number;
}>({});
