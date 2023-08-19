
import React from 'react';
import { search } from '../api/home';
import { Res, Track } from 'src/types/home';
import { setResults, setTrack } from 'src/redux/';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setSearchString } from 'src/redux/reducers/searchString';





interface ProviderProps {
    children: React.ReactNode;
}


interface HomeContextType {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchString: string;
    handleSubmit: () => void;
    loading?: boolean;
    results?: Res | null;
    handleSelect: (track: Track) => void;
    err?: string | unknown;


};

export const HomeContext = React.createContext<HomeContextType>({
    handleChange: () => { },
    searchString: '',
    handleSubmit: () => { },
    loading: false,
    results: null,
    handleSelect: () => { },
    err: undefined

});


export const HomeProvider: React.FC<ProviderProps> = ({ children }) => {

     // Replace with your API URL

    const [loading, setLoading] = React.useState<boolean>(true);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [results, setResults] = React.useState<Res | null>(null);
    const [searchString, setSearchString] = React.useState<string>('');
    const [error, setError] = React.useState<boolean>(false);

    React.useEffect(() => {
        
        const r = JSON.parse(sessionStorage.getItem('results') || '[]');
        if (r?.data?.length > 0) {
            setResults(r);
        }
        setLoading(false);
    }, [])



    const handleSubmit = () => {
        setLoading(true);
        search(searchString).then((res) => {
            if (res.error) {
                setLoading(false);
                setError(true);
            }
            setResults(res);
            sessionStorage.setItem('results', JSON.stringify(res));
            setLoading(false);

        }).catch((err) => {
            setError(true);
            setLoading(false);
        })
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchString(event.target.value);
    }

    const handleSelect = (track: Track) => {
        sessionStorage.setItem('track', JSON.stringify(track));
        navigate('/track');
    }


    return (
        <HomeContext.Provider value={{
            handleChange,
            handleSubmit,
            searchString,
            loading,
            results,
            handleSelect,
            err: error
        }}>
            {children}
        </HomeContext.Provider>
    )
}