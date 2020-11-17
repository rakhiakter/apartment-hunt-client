import React from 'react';
import Sidebar from '../Sidebar/Sidebar';


const BookingList = () => {
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
                        <table className="table table-borderless table-hover rounded">
                            <thead className="thead-light">
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email ID</th>
                                    <th scope="col">Service</th>
                                    <th scope="col">Project</th>
                                    <th scope="col">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">Mosiur Rahaman</th>
                                    <td>masiurreheman01@gmail.com</td>
                                    <td>Graphic Design</td>
                                    <td width="100px">Lorem ipsum dolor sit amet.</td>
                                    <td><div className="dropdown">
                                        <button className="btn dropdown-toggle text-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Pending
                                    </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item active" href="#pending">Pending</a>
                                            <a className="dropdown-item" href="#ongoing">Ongoing</a>
                                            <a className="dropdown-item" href="#done">Done</a>
                                        </div>
                                    </div></td>
                                </tr>
                                <tr>
                                    <th scope="row">Poltu</th>
                                    <td>poltu@gmail.com</td>
                                    <td>Graphic Design</td>
                                    <td>Lorem ipsum dolor sit amet.</td>
                                    <td>
                                        <div className="dropdown">
                                            <button className="btn dropdown-toggle text-danger" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Pending
                                            </button>
                                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item active" href="#">Pending</a>
                                                <a className="dropdown-item" href="#">Ongoing</a>
                                                <a className="dropdown-item" href="#">Done</a>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BookingList;