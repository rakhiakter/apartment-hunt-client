import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './MyRent.css';

const MyRent = () => {
    return (
        <div className="container-fluid" >
            <div className="row admin-navbar">
                <div className="col-md-3">
                    <Sidebar></Sidebar>
                </div>
                <div className="col-md-9" style={{ height: '100vh', background: '#F4F7FC', padding: 0 }}>
                    <div className="d-flex justify-content-between bg-white p-4">
                        <h4>Services List</h4>
                        <h5>Admin</h5>
                    </div>
                    <div className="bg-white p-5 mx-4 mt-4 rounded-lg">
                        <table className="table table-borderless table-hover">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">House Name</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Washington house</th>
                                    <th>$195</th>
                                    <td><button className="view-btn">View Details</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Washington house</th>
                                    <th>$195</th>
                                    <td><button className="view-btn">View Details</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Washington house</th>
                                    <th>$195</th>
                                    <td><button className="view-btn">View Details</button></td>
                                </tr>
                                <tr>
                                    <th scope="row">Washington house</th>
                                    <th>$195</th>
                                    <td><button className="view-btn">View Details</button></td>
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