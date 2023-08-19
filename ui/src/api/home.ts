
import { Res, Track } from 'src/types/home';
import API  from './http';
import { Artist } from 'src/types/artist';



const endpoints = {
    search: 'search',
    tracks: 'tracks',
    artist: 'artist',
}

const apiUrl =`http://localhost:3001`;





const search = async (searchString: string):Promise< Res > => {
    const dres = await new API().callAPI(
        apiUrl,
        endpoints.search,
        "get",
        undefined,
        `q=${searchString}`,
        );

    return {
        ...dres,
        success: true,
    };
};


const tracks = async (artistId?: number):Promise< Track[] > => {
    console.log(artistId)
    if (!artistId) {
        return [];
    }
    const tracks = await new API().callAPI(
        apiUrl,
        endpoints.tracks,
        "get",
        undefined,
        undefined,
        `artist/${artistId}/top?limit=5`
        );

   return  tracks.data

};


const artist = async (artistId?: number):Promise< Artist > => {
    if (!artistId) {
        return {};
    }
    const artist = await new API().callAPI(
        apiUrl,
        endpoints.artist,
        "get",
        undefined,
        `q=${artistId}`
        );

    console.log(artist.data)
   return  artist

};



export  {
    search,
    tracks,
    artist
};