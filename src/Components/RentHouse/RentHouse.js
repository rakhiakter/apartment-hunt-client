import React from 'react';
// import logo from '../../../images/logos/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faList, faCommentAlt } from '@fortawesome/free-solid-svg-icons';

const RentHouse = () => {
    return (
        <div>
           <div className="container-fluid" >

            <div className = "d-flex justify-content-between pt-4 px-4">
                <Link to="/"><img src="{logo}" alt="" height="38"/></Link>
                <h5>Add Services</h5>
                <h5>Admin</h5>
            </div>
            <div className="row admin-navbar">

                <div className="col-md-3">
                    <ul className="mt-5">
                        <Link to="/rentHouse"><FontAwesomeIcon icon={faShoppingCart} className = "pr-1"/>Booking list</Link>
                        <br/>
                        <Link to="/bookingList"><FontAwesomeIcon icon={faList} className = "pr-1"/>Add House</Link>
                        <br/>
                        <Link to="/myRent"><FontAwesomeIcon icon={faCommentAlt} className = "pr-1"/>My Rent</Link>
                    </ul>
                </div>
                <div className="col-md-6" style={{ height: '100vh', background: '#F4F7FC' }}>
                    <div className="bg-white p-5 " onsubmit="return false">
                        <form >
                            <div className="row form-group">
                                <div className="col">
                                    <label htmlFor="title">Service Title</label>
                                    <input type="text" id="description" className="form-control bg-light" placeholder="Enter Title"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="title">Price</label>
                                    <input type="text" id="description" className="form-control bg-light" placeholder="Price"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="title">Location</label>
                                    <input type="text" id="description" className="form-control bg-light" placeholder="Location"/>
                                </div>
                                <div className="col">
                                    <label htmlFor="title">No of Bedroom</label>
                                    <input type="text" id="description" className="form-control bg-light" placeholder="Selete the bed room"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label htmlFor="title">No of Bathroom</label>
                                    <input type="text" id="description" className="form-control bg-light" placeholder="No of bathroom"/>
                                </div>
                                <div className="col form-group">
                                    <label htmlFor="title">Thumbnail</label>
                                    <input type="file" id="image" className="form-control-file"/>
                                </div>
                            </div>
                            <div className="row d-flex justify-content-start pl-3">
                                <input type="submit" value="Send" className="btn btn-dark px-5 py-2"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div >
        </div>
    );
};

export default RentHouse;