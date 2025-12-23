import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TService } from '@/shared/types/types';

type ServiceState = {
  selected: TService[];
};

const initialState: ServiceState = {
  selected: [],
};
const serviceSlice = createSlice({
  name: 'services',
  initialState,
  reducers: {
    addService(state, action: PayloadAction<TService>) {
      state.selected.push(action.payload);
    },
    removeService(state, action: PayloadAction<number>) {
      state.selected = state.selected.filter(
        (service) => service.id !== action.payload
      );
    },
  },
});

export const serviceReducer = serviceSlice.reducer;
export const { addService, removeService } = serviceSlice.actions;
