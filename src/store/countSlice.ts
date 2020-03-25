import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const count = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    inc: (state, action: PayloadAction<void>) => state + 1,
    dec: (state, action: PayloadAction<void>) => state - 1
  }
});

export const { inc, dec } = count.actions;
export default count.reducer;
