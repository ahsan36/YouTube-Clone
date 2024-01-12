import axios from "axios";

//  Rapid => Youtube Api

const URL = 'https://youtube138.p.rapidapi.com';

const options = {
    params: {
        hl: 'en',
        gl: 'US'
    },
    headers: {
        'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
        'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
};

// Fetching data from api

export const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${URL}/${url}`, options);
    return data;
}