import { atom } from "jotai";

export const view = atom<"grid" | "list">("grid");
export const search = atom<string|undefined>();
export const year = atom<string|undefined>()
export const sort = atom<string|undefined>()