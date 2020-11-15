import React from 'react';
import AvailableHouses from '../AvailableHouses/AvailableHouses';
import Footer from '../Footer/Footer';
import MainHeader from '../MainHeader/MainHeader';
import Service from '../Service/Service';

const Home = () => {
    return (
        <div>
           <MainHeader></MainHeader>
           <AvailableHouses></AvailableHouses>
           <Service></Service>
           <Footer></Footer>
        </div>
    );
};

export default Home;