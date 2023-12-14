import React, { useState, createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const ModalBContext = createContext();

const ModalBContextProvider = ({children}) => {
    const [searchText, setSearchText] = useState('');
    const [data, loader] = useFetch(`https://contact.mediusware.com/api/country-contacts/United%20States/?search=${searchText}`);
    
    return (
        <ModalBContext.Provider value={{data, loader, searchText, setSearchText}}>
            {children}
        </ModalBContext.Provider>
    );
}

export default ModalBContextProvider;