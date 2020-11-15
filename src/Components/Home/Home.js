import React from 'react';
import AvailableHouses from '../AvailableHouses/AvailableHouses';
import MainHeader from '../MainHeader/MainHeader';

const Home = () => {
    return (
        <div>
           <MainHeader></MainHeader>
           <AvailableHouses></AvailableHouses>
        </div>
    );
};

export default Home;