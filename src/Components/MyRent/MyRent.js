import React from 'react';
// import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faList, faUser } from '@fortawesome/free-solid-svg-icons';

const MyRent = () => {
    return (
        <div className="container-fluid" >

        <div className = "d-flex justify-content-between pt-4 px-4">
            <Link to="/"><img src="{logo}" alt="" height="38"/></Link>
            <h5>Services List</h5>
            <h5>Admin</h5>
        </div>
        <div className="row admin-navbar">

            <div className="col-md-3">
                <ul className="mt-5">
                    <Link to="/rentHouse"><FontAwesomeIcon icon={faList} className = "pr-1"/>Booking list</Link>
                    <br/>
                    <Link to="/bookingList"><FontAwesomeIcon icon={faPlus} className = "pr-1"/>Add House</Link>
                    <br/>
                    <Link to="/myRent"><FontAwesomeIcon icon={faUser} className = "pr-1"/>My Rent</Link>
                </ul>
            </div>
            

                <div className="col-md-9" style={{ height: '100vh', background: '#F4F7FC' }}>
                    <div className="bg-white p-5">
                        <table className="table table-hover fixed">
                            <thead>
                                <tr>
                                    <th scope="col">House Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Washington house</th>
                                    <td>$195</td>
                                    <td><button>View Details</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Poltu house</th>
                                    <td>$295</td>
                                    <td><button>View Details</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">York house</th>
                                    <td>$599</td>
                                    <td><button>View Details</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Luxary house</th>
                                    <td>$199</td>
                                    <td><button>View Details</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">York house</th>
                                    <td>$299</td>
                                    <td><button>View Details</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default MyRent;