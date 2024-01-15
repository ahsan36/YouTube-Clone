import React, { useState, useEffect } from "react";
import {fetchDataFromApi} from "../utils/api";
import Context from './contextApi'

export const ContextApiProvider = (props) => {
    const [loading, setLoading] = useState(false);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("New");
    const [mobileMenu, setMobileMenu] = useState(false);

    // The data will load when we select the category.

    useEffect (() => {
        fetchSelectedCategoryData(selectedCategory);
    }, [selectedCategory]);

    const fetchSelectedCategoryData = (query) => {
        setLoading(true); 
        fetchDataFromApi(`search/?q=${query}`).then(({contents}) => {
            console.log(contents)
            setSearchResults(contents);
            setLoading(false); // when the data will be loaded
        })
    }

    return (
        <Context.Provider
            value={{
               loading,
               setLoading,
               searchResults,
               selectedCategory,
               setSelectedCategory,
               mobileMenu,
               setMobileMenu 
            }}>

                {props.children}

        </Context.Provider>
    )
}