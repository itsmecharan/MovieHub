import React, { useEffect } from 'react';
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch, useSelector } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows, getSearchedText } from '../../features/movies/movieSlice';

const Home = () => {
    const dispatch = useDispatch();
    const searchedText = useSelector(getSearchedText);

    useEffect(() => {
        dispatch(fetchAsyncMovies(searchedText !== "" ? searchedText : "Harry"));
        dispatch(fetchAsyncShows(searchedText !== "" ? searchedText : "Friends"));
    }, [dispatch, searchedText]);
    return (
        <div>
            <div className='banner-img'></div>
            <MovieListing />
        </div>
    );
}
export default Home;
