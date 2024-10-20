import { createSlice } from "@reduxjs/toolkit";

const breadcrumbs = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "Tentang Jakarta Timur",
  },
];

const slice = createSlice({
  name: "tentang-jakarta-timur",
  initialState: {
    breadcrumbs,
  },
  reducers: {
    setActiveSection: (state, value) => {
      state.breadcrumbs = [...breadcrumbs, { label: value.payload }];
    },
  },
});

export const { setActiveSection } = slice.actions;
export default slice.reducer;
