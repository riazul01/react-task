import React, { useState, createContext } from 'react';
import useFetch from '../hooks/useFetch';

export const ModalAContext = createContext();

const ModalAContextProvider = ({children}) => {
    const [searchText, setSearchText] = useState('');
    const [data, loader] = useFetch(`https://contact.mediusware.com/api/contacts/?search=${searchText}&page_size=500`);
    
    return (
        <ModalAContext.Provider value={{data, loader, searchText, setSearchText}}>
            {children}
        </ModalAContext.Provider>
    );
}

export default ModalAContextProvider;