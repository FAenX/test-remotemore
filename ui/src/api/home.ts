
import { Album, Res, Track } from 'src/types/home';
import API  from './http';
import { Artist } from 'src/types/artist';



const hooks = {
    search: 'search',
    tracks: 'tracks',
    artist: 'artist',
    album: 'album',
}

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001/remote-api-inc/us-central1/handleRequest';





const search = async (searchString: string):Promise< Res > => {
    const dres = await new API().callAPI(
        apiUrl,
        hooks.search,
        undefined,
        searchString,
        );

    return {
        ...dres,
        success: true,
    };
};


const tracks = async (artistId?: number):Promise< Track[] > => {
    if (!artistId) {
        return [];
    }
    const tracks = await new API().callAPI(
        apiUrl,
        hooks.tracks,
        `/${artistId}/top?limit=5`
        );

   return  tracks.data

};


const artist = async (artistId?: number):Promise< Artist > => {
    if (!artistId) {
        return {};
    }
    const artist = await new API().callAPI(
        apiUrl,
        hooks.artist,
        `/${artistId}`
        );

   return  artist

};

const album = async (albumId?: number):Promise< Album > => {
    if (!albumId) {
        return {};
    }
    const album = await new API().callAPI(
        apiUrl,
        hooks.album,
        `/${albumId}`
        );


   return  album

};




export  {
    search,
    tracks,
    artist,
    album,
};