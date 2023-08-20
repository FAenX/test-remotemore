
import React from 'react';
import { Res, Track, Album } from 'src/types/home';
import { RootState, setTrack } from 'src/redux/';
import { useDispatch, useSelector } from 'react-redux';
import { artist, tracks as getTracks} from '../api/home';
import { artist as getArtist, album as getAlbum } from '../api/home';
import { Artist } from 'src/types/artist';




interface ProviderProps {
    children: React.ReactNode;
}


interface TrackContextType {
    selectedTrack?: Track;
    tracks?: Track[];
    artist?: Artist;
    getAlbumDetails: (albumId: number) => Promise<Album>;


};

export const TrackContext = React.createContext<TrackContextType>({
    selectedTrack: undefined,
    tracks: undefined,
    artist: undefined,
    getAlbumDetails: async (albumId: number) => {
        return new Promise<Album>((resolve, reject) => {
            resolve({} as Album)
        })
    }

});


export const TrackProvider: React.FC<ProviderProps> = ({ children }) => {
    const [selectedTrack, setSelectedTrack] = React.useState<Track>(
        JSON.parse(sessionStorage.getItem('track') || '{}') || {}
    );
    const [selectedAlbumTracks, setSelectedAlbumTracks] = React.useState<Track[]>(
        JSON.parse(sessionStorage.getItem('tracks') || '[]') || []
    );

    const [artist, setArtist] = React.useState<Artist>();


    React.useEffect(()=>{
        if(!selectedTrack.id){
            return;
        }
        getTracks(selectedTrack.artist?.id).then((res)=>{
            setSelectedAlbumTracks(res);
            if(res.length > 0){
                sessionStorage.setItem('tracks', JSON.stringify(res));
            }
        }).catch((err)=>{
            console.log(err);        })

    }, [selectedTrack])

    React.useEffect(() => {
        if (!selectedTrack.id) {
            return;
        }
        // console.log(selectedTrack.artist?.id)
        getArtist(selectedTrack.artist?.id).then((res) => {
            setArtist(res);
            sessionStorage.setItem('artist', JSON.stringify(res));
        }).catch((err) => {
            console.log(err);
        })
    }, [selectedTrack])


    const getAlbumDetails = async (albumId: number) => {
        console.log(albumId)
        const album = await getAlbum(albumId) ;
        // console.log(album)
        return album;
    }




    return (
        <TrackContext.Provider value={{
            selectedTrack,
            tracks: selectedAlbumTracks,
            artist,
            getAlbumDetails
            
        }}>
            {children}
        </TrackContext.Provider>
    )
}