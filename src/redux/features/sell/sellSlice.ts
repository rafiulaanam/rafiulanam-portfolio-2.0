
import { createSlice } from '@reduxjs/toolkit';

interface SoldHistory {
  _id: string;
  buyerName: string;
  quantitySold: string;
  SellDate: string;
}

interface SoldHistoryState {
  currentHistory: SoldHistory[] | null;
  error: string | null;
  loading: boolean;
}

const initialState: SoldHistoryState = {
  currentHistory: null,
  error: null,
  loading: false,
};

const soldHistorySlice = createSlice({
  name: 'soldHistory',
  initialState,
  reducers: {
    waitingForHistory: (state) => {
      state.loading = true;
      state.error = null;
    },
    getHistorySuccess: (state, action) => {
      state.currentHistory = action.payload;
      state.loading = false;
      state.error = null;
    },
    getHistoryFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteHistorySuccess: (state, action) => {
      state.currentHistory = (state.currentHistory || []).filter((item) => item?._id !== action.payload);
      state.loading = false;
      state.error = null;
    },
    updateHistorySuccess: (state, action) => {
      const updatedHistoryId = action.payload._id;
      const historyIndex = (state.currentHistory || []).findIndex(item => item?._id === updatedHistoryId);

      if (historyIndex !== -1) {
        const updatedHistory = {
          ...((state.currentHistory || [])[historyIndex] as Record<string, any>),
          ...action.payload,
        };
        ((state.currentHistory || [])[historyIndex] as Record<string, any>) = updatedHistory;
      }

      state.loading = false;
      state.error = null;
    }
  }
});

export const {
  waitingForHistory,
  getHistorySuccess,
  getHistoryFailure,
  deleteHistorySuccess,
  updateHistorySuccess,
} = soldHistorySlice.actions;

export default soldHistorySlice.reducer;
