import React from 'react'
import './HeaderTop.scss';
import { Navbar, Container, Button } from 'react-bootstrap'
import { AiOutlineSearch } from 'react-icons/ai';
import logo from '../../assets/logo.png'

function HeaderTop() {
    return (
        <>
            <header class="site-header site-header--full site-header--no-crumbs">
                <div class="container">
                    <div class="site-header__wrap">
                        <a href="https://www.comparemymove.com/" class="site-header__logo">
                            <img src={logo}>

                            </img>
                        </a>
                        <ul class="nav-top">
                            <li class="nav-top__item">
                                <a href="/network/login" class="nav-top__item__link">
                                    Partner Login
                                </a>
                            </li>
                            <li class="nav-top__item">
                                <a href="/partners" class="nav-top__btn">
                                    Become A Partner
                                </a>
                            </li>
                        </ul>
                        <div class="burger-nav__actions">
                            <button type="button" class="burger-nav__search-btn js-search-switch" aria-label="search">
                                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                    <path fill="#262626" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg></button>
                            <button type="button" class="burger-nav__menu-btn js-main-nav-switch" aria-label="main menu">
                                <svg aria-hidden="true" focusable="false" class="fa-bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#262626" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg><svg aria-hidden="true" focusable="false" class="fa-times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="#262626" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg></button></div></div></div></header>
            <div class="search-drop">
                <div class="container">
                    <form action="/search" method="GET" class="searchbox ">
                        <input type="text" name="kw" id="searchbox__field" class="searchbox__field" placeholder="Search" aria-label="searchbox field" />
                        <button type="submit" class="searchbox__btn" aria-label="search">
                            <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#262626" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path></svg>
                        </button>
                        <label for="searchbox__field" class="accessibility-text">
                            Search
                        </label>
                    </form>
                </div>
            </div>
        </>
    )
}

export default HeaderTop;