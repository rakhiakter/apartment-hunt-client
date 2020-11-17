import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const RentHouse = () => {
    return (
        <div>
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
                        <div className="bg-white p-5 mx-4 mt-4" >
                            <form >
                                <div className="row form-group">
                                    <div className="col">
                                        <label htmlFor="title">Service Title</label>
                                        <input type="text" id="title" className="form-control bg-light" placeholder="Enter Title" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="price">Price</label>
                                        <input type="text" id="price" className="form-control bg-light" placeholder="Price" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="location">Location</label>
                                        <input type="text" id="location" className="form-control bg-light" placeholder="Location" />
                                    </div>
                                    <div className="col">
                                        <label htmlFor="bedroom">No of Bedroom</label>
                                        <input type="text" id="bedroom" className="form-control bg-light" placeholder="Selete the bed room" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <label htmlFor="bathroom">No of Bathroom</label>
                                        <input type="text" id="bathroom" className="form-control bg-light" placeholder="No of bathroom" />
                                    </div>
                                    <div className="col form-group">
                                        <label htmlFor="image">Thumbnail</label>
                                        <input type="file" id="image" className="form-control-file" />
                                    </div>
                                </div>
                                <div className="row d-flex justify-content-end pl-3">
                                    <input type="submit" value="Send" className="btn btn-dark px-5 py-2" />
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