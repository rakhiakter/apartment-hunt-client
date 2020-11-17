import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../../logos/logo.png'

const Sidebar = () => {

    return (
        <div className="sidebar" style={{ height: "100%" }}>
            <nav className="navbar navbar-expand-lg navbar-light flex-column mx-5">
                <Link className="navbar-brand" to="/">
                    <img style={{ height: 54.8 }} src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse pt-5" id="navbarNav">
                    <ul className="navbar-nav flex-column">
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold" to="/bookingList">
                                <FontAwesomeIcon icon={faList} className="pr-1" />Booking list
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold" to="/addHouse">
                                <FontAwesomeIcon icon={faPlus} className="pr-1" />Add House
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link font-weight-bold" to="/myRent">
                                <FontAwesomeIcon icon={faUser} className="pr-1" />My Rent
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;