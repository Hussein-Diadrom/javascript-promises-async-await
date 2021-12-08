import {fetchWithTimeout } from './services'; 
import { resolve } from 'dns';
const movies = require('./data/movies.json');

export function fetchMovies() {
    const resolveFunction = () => movies;

    return fetchWithTimeout(1000).then(resolveFunction);
} 

const moviePromise = fetchMovies();

moviePromise.then(result => {
    console.log(result);
});