import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CarouselState = {
  index: number;
};

const initialState: CarouselState = {
  index: 0,
};

const slice = createSlice({
  name: 'appSlice',
  initialState,
  reducers: {
    setIndex: (state, action: PayloadAction<number>): void => {
      const index = action.payload;
      state.index = index;
    },
  },
});

export const { setIndex } = slice.actions;

export default slice.reducer;
