import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



const initialState = {};


const ph = createSlice({
  name: 'createApplicationContent',
  initialState,
  reducers: {
    setph:
      (state, action: PayloadAction<{}>) => {
        return action.payload;
      },
  },
});


const { setph } = ph.actions;
export default ph.reducer;
export { setph };