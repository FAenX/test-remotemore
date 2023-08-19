import { configureStore } from '@reduxjs/toolkit'
import selectedTrack from "./reducers/selectedTrack"
import selectedAlbumTracks from "./reducers/selectedAlbumTracks"
import searchResults from './reducers/searchResults'
import searchString from './reducers/searchString'


export const store = configureStore({
    reducer: {
        track: selectedTrack,
        albumTracks: selectedAlbumTracks,
        searchResults: searchResults,
        searchString: searchString,
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch