import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Track } from 'src/types/home';



const initialState: Track  = {};


const selectedTrack = createSlice({
  name: 'createApplicationContent',
  initialState,
  reducers: {
    setTrack:
      (state, action: PayloadAction<Track>) => {
        return state = action.payload;
      },
  },
});


const { setTrack } = selectedTrack.actions;
export default selectedTrack.reducer;
export { setTrack };


