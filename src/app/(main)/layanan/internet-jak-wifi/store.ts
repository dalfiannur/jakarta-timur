import { atom } from "jotai";

export const search = atom<string | undefined>();
export const map = atom<{
  longitude?: number;
  latitude?: number;
}>({});
