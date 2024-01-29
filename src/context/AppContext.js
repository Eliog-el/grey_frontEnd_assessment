
import React, { useContext, useState, useEffect } from 'react'

import { createBrowserHistory } from 'history';




export const AppContext = React.createContext({})




export function useApp() { return useContext(AppContext) }

export function AppContextProvider({ children }) {

    let history = createBrowserHistory()

    const [currentSearch, setCurrentSearch] = useState('');



    const [favourites, setFavourites] = useState(JSON.parse(localStorage.getItem('favourites')) ? JSON.parse(localStorage.getItem('favourites')) : []);

    useEffect(() => {
        localStorage.setItem('favourites', JSON.stringify(favourites));
    }, [favourites]);


    const addToFavourites = ({ character }) => {
        console.log(favourites)
        if (favourites.some((favourite) => favourite.url === character.url)) {
        } else {
            setFavourites([...favourites, { name: character.name, url: character.url }])
        }
    }

    const removeFromFavourites = ({ character }) => {
        setFavourites(favourites.filter((favourite) => favourite.url !== character.url))
    }


    return (
        <AppContext.Provider value={{ history, favourites, setFavourites, addToFavourites, removeFromFavourites, currentSearch, setCurrentSearch }}>
            {children}
        </AppContext.Provider>
    )
}