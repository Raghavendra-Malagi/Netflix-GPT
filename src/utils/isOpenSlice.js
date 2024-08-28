import { createSlice } from "@reduxjs/toolkit";

const isOpenSlice = createSlice({
  name: "isOpen",
  initialState: {
    updateOpen: false,
  },
  reducers: {
    updateIsOpen: (state) => {
      state.updateOpen = !state.updateOpen;
    },
  },
});

export const { updateIsOpen } = isOpenSlice.actions;
export default isOpenSlice.reducer;
