import { createSlice } from "@reduxjs/toolkit";

type Breadcrumb = {
  label: string;
  link?: string;
};

type InitialState = {
  breadcrumbs: Breadcrumb[];
  selectedSidebarItem: string;
};

const initialState: InitialState = {
  breadcrumbs: [],
  selectedSidebarItem: "",
};

const slice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setBreadcrumbs: (state, value) => {
      state.breadcrumbs = value.payload;
    },
    setSelectedSidebar: (state, value) => {
      state.selectedSidebarItem = value.payload;
    },
  },
});

export const { setBreadcrumbs, setSelectedSidebar } = slice.actions;
export default slice.reducer;
