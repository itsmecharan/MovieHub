import React, { useMemo } from 'react';
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import { getAllMovies, getAllShows, getMovieLoader, getShowLoader } from '../../features/movies/movieSlice';
import MovieCard from "../MovieCard/MovieCard";
import { Settings } from "../../common/settings";
import "./MovieListing.scss";

const MovieListing = () => {
    const movies = useSelector(getAllMovies);
    const shows = useSelector(getAllShows);
    const movieLoader = useSelector(getMovieLoader);
    const showLoader = useSelector(getShowLoader);
    let renderMovies, renderShows;
    renderMovies = useMemo(() => (
        movies.Response === "True" ?
            movies.Search.map((movie, index) => {
                return (<MovieCard
                    key={index}
                    data={movie}
                />);
            }) :
            (
                <div className='movies-error'>
                    <h3>{movies.Error}</h3>
                </div>
            )), [movies]);
    console.log(renderMovies);
    // renderShows = useMemo(() => (
    //     shows.Response === "True" ?
    //         shows.Search.map((show, index) => {
    //             return (<MovieCard
    //                 key={index}
    //                 data={show}
    //             />);
    //         }) :
    //         (
    //             <div className='shows-error'>
    //                 <h3>{shows.Error}</h3>
    //             </div>
    //         )
    // ), [shows]);


    return (
        <div className='movie-wrapper'>
            <div className='movie-list'>
                {console.log("In render")}
                <h2>Movies</h2>
                {movieLoader ?
                    <div>Loading...</div>
                    :
                    <div className='movie-container'>
                        <Slider {...Settings}>
                            {renderMovies}
                        </Slider>
                    </div>
                }

            </div>
            {/* <div className='show-list'>
                <h2>Shows</h2>
                {showLoader ?
                    <div>Loading...</div>
                    :
                    <div className='movie-container'>
                        <Slider {...Settings}>
                            {renderShows}
                        </Slider>
                    </div>
                }
            </div> */}
        </div>
    );
}

export default MovieListing;