import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows, getSearchedText } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    const searchedText = useSelector(getSearchedText);
    const movieText = searchedText !== "" ? searchedText : "Harry";
    const showText = searchedText !== "" ? searchedText : "Friends";
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText));
        dispatch(fetchAsyncShows(showText));
    }, [dispatch, movieText, showText, searchedText]);
    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing />
        </div>
    );
}
export default Home;
