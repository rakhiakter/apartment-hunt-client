import React from 'react';
import { Container } from 'react-bootstrap';
import rectangle13 from "../../images/rectangle 13.png";
import './SearchBar.css';
const SearchBar = () => {
    console.log({rectangle13});
    return (
      <Container>
        <div 
          style={{
            backgroundImage: `url("${rectangle13}")`,
            height: "400px",
            backgroundSize: "cover"
            
          }}
        >
          <h1 className="find">Find Your House Rent</h1>
        </div>
      </Container>
    );
};

export default SearchBar;