import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Res } from "src/types/home";


const initialState: string | undefined = "";


const searchString = createSlice({
  name: 'createApplicationContent',
  initialState,
  reducers: {
    setSearchString:
      (state, action: PayloadAction<string>) => {
        console.log(action.payload);
        return state = action.payload;
      },
  },
});


const { setSearchString} = searchString.actions;
export default searchString.reducer;
export {setSearchString };