import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";


export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
    async (term) => {
        const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${term}&type=movie`);
        return response.data;
    });

export const fetchAsyncShows = createAsyncThunk(
    "movies/fetchAsyncShows",
    async (term) => {
        const response = await movieApi
            .get(`?apiKey=${APIKey}&s=${term}&type=series`);
        return response.data;
    });

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
    "movies/fetchAsyncMovieOrShowDetail",
    async (id) => {
        const response = await movieApi
            .get(`?apiKey=${APIKey}&i=${id}&Plot=full`);
        return response.data;
    });

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
    movieLoader: false,
    showLoader: false,
    searchedText: ""
}

const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
        removeSelectedMovieOrShow: (state) => {
            state.selectedMovieOrShow = {};
        },
        setSearchedText: (state, { payload }) => {
            state.searchedText = payload;
        }
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: (state) => {
            return { ...state, movieLoader: true }
        },
        [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
            return { ...state, movies: payload, movieLoader: false };
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Movies Rejected!");
        },
        [fetchAsyncShows.pending]: (state) => {
            return { ...state, showLoader: true };
        },
        [fetchAsyncShows.fulfilled]: (state, { payload }) => {
            return { ...state, shows: payload, showLoader: false };
        },
        [fetchAsyncShows.rejected]: () => {
            console.log("Shows Rejected!");
        },
        [fetchAsyncMovieOrShowDetail.pending]: () => {
            console.log("MovieOrShowDetail Pending")
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
            return { ...state, selectedMovieOrShow: payload };
        },
        [fetchAsyncMovieOrShowDetail.rejected]: () => {
            console.log("MovieOrShowDetail Rejected!");
        },
    }
});

export const { removeSelectedMovieOrShow, setSearchedText } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) => state.movies.selectedMovieOrShow;
export const getMovieLoader = (state) => state.movies.movieLoader;
export const getShowLoader = (state) => state.movies.showLoader;
export const getSearchedText = (state) => state.movies.searchedText;
export default movieSlice.reducer;