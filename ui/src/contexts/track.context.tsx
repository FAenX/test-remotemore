
import React from 'react';
import { Res, Track } from 'src/types/home';
import { RootState, setTrack } from 'src/redux/';
import { useDispatch, useSelector } from 'react-redux';
import { artist, tracks as getTracks} from '../api/home';
import { artist as getArtist } from '../api/home';
import { Artist } from 'src/types/artist';




interface ProviderProps {
    children: React.ReactNode;
}


interface TrackContextType {
    selectedTrack?: Track;
    tracks?: Track[];
    artist?: Artist;


};

export const TrackContext = React.createContext<TrackContextType>({
    selectedTrack: undefined,
    tracks: undefined,
    artist: undefined

});


export const TrackProvider: React.FC<ProviderProps> = ({ children }) => {
    const [selectedTrack, setSelectedTrack] = React.useState<Track>(
        JSON.parse(sessionStorage.getItem('track') || '{}')
    );
    const [selectedAlbumTracks, setSelectedAlbumTracks] = React.useState<Track[]>(
        JSON.parse(sessionStorage.getItem('tracks') || '[]')
    );

    const [artist, setArtist] = React.useState<Artist>();
    


    React.useEffect(()=>{
        if(!selectedTrack.id){
            return;
        }
        getTracks(selectedTrack.artist?.id).then((res)=>{
            setSelectedAlbumTracks(res);
            console.log(res);
            sessionStorage.setItem('tracks', JSON.stringify(res));
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
            console.log(res);
        }).catch((err) => {
            console.log(err);
        })
    }, [selectedTrack])




    return (
        <TrackContext.Provider value={{
            selectedTrack,
            tracks: selectedAlbumTracks,
            artist
            
        }}>
            {children}
        </TrackContext.Provider>
    )
}