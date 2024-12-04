import { atom } from "jotai";

export const search = atom<string>("");
export const page = atom<number>(1);
export const kecamatanId = atom<string | undefined>();
