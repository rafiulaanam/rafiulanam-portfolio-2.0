
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface PaginationState {
  currentPage: number;
}
const initialState: PaginationState = {
  currentPage: 1,
};

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    next: (state , action: PayloadAction<number>) => {
      state.currentPage = action?.payload;
    },
  
  },
});

export const { next } = paginationSlice.actions;

export default paginationSlice.reducer;
