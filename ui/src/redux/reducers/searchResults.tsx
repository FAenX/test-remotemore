import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Res } from "src/types/home";


const initialState: Res  = {};


const searchResults = createSlice({
  name: 'createApplicationContent',
  initialState,
  reducers: {
    setResults:
      (state, action: PayloadAction<Res>) => {
        return state = action.payload;
      },
  },
});


const { setResults } = searchResults.actions;
export default searchResults.reducer;
export { setResults };