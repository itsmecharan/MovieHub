import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import user from "../../images/user.png";
import "./Header.scss"
import { fetchAsyncMovies, fetchAsyncShows, setSearchedText, removeMoviesAndShows } from '../../features/movies/movieSlice';

export default function Header() {
    const [term, setTerm] = useState("");
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const submitHandler = (e) => {
        e.preventDefault();
        if (term.trim() === "") {
            setError("Enter something to Search!!");
        }
        else {
            dispatch(removeMoviesAndShows());
            dispatch(setSearchedText(term));
            dispatch(fetchAsyncMovies(term));
            dispatch(fetchAsyncShows(term));
        }
    }

    const onLogoClick = () => {
        setTerm("");
        dispatch(setSearchedText(""));
        navigate("/");
    }
    return (
        <div className='header'>
            <div className='logo' onClick={onLogoClick}>
                MovieHub
            </div>
            <div className='search-wrapper'>
                <div className='search-bar'>
                    <form onSubmit={submitHandler}>
                        <input
                            type="text"
                            value={term}
                            placeholder="Search for Movies or Shows"
                            onChange={(e) => {
                                setTerm(e.target.value);
                                if (e.target.value.trim() !== "") {
                                    setError("");
                                }
                            }
                            }
                        />
                        <button type="submit"><i className='fa fa-search' /></button>
                    </form>
                </div>
                {error !== "" && <div className='error-msg'>{error}</div>}
            </div>
            <div className='user-image'>
                <img src={user} alt="user" />
            </div>
        </div>
    );
}
