import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Track } from "src/types/home";

const initialState: Track[]  = [];


const selectedAlbumTracks = createSlice({
  name: 'createApplicationContent',
  initialState,
  reducers: {
    setSelectedAlbumTracks:
      (state, action: PayloadAction<Track[]>) => {
        return state = action.payload;
      },
  },
});


const { setSelectedAlbumTracks } = selectedAlbumTracks.actions;
export default selectedAlbumTracks.reducer;
export { setSelectedAlbumTracks };