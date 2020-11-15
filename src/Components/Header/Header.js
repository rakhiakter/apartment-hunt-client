import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import SearchBar from '../SearchBar/SearchBar';



const Header = () => {
    return (
      <div>
        <NavigationBar></NavigationBar>
        <SearchBar></SearchBar>
      </div>
    );
};

export default Header;