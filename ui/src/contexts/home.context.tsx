

import useApiCall from '../hooks/useApiCall';
import React, { useContext } from 'react';


const endpoints = {
    search: 'search',
}

const apiUrl =(searchString: string)=> `https://api.deezer.com/${endpoints.search}?q=${searchString}`;



interface ProviderProps {
    children: React.ReactNode;
}


interface HomeContextType {
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    searchString: string;
    handleSubmit: () => void


};

export const HomeContext = React.createContext<HomeContextType>({
    handleChange: () => { },
    searchString: '',
    handleSubmit: () => { },

});


export const HomeProvider: React.FC<ProviderProps> = ({ children }) => {

     // Replace with your API URL

    const [searchString, setSearchString] = React.useState<string>('');

    const handleSubmit = () => {
        console.log("clicked");
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);
        setSearchString(event.target.value);
    }

    return (
        <HomeContext.Provider value={{
            handleChange,
            handleSubmit,
            searchString
        }}>
            {children}
        </HomeContext.Provider>
    )
}