import React from 'react';
import './ApartmentDetails.scss';
import heroImg from '../../images/hero/product_details_hero.png';
import featuredImg from '../../images/rectangle 406.png';
import thumbnailImgOne from '../../images/rectangle 407.png';
import thumbnailImgTwo from '../../images/rectangle 408.png';
import thumbnailImgThree from '../../images/rectangle 409.png';
import thumbnailImgFour from '../../images/rectangle 410.png';
import NavigationBar from '../NavigationBar/NavigationBar';

const ApartmentDetails = () => {
  return (
    <div className="details-section">
      <NavigationBar></NavigationBar>
      {/* Hero Section */}

      <section className="apartment-details-bg">
        <h1 className="hero-text">Apartment</h1>
      </section>

      {/* Details image section with contact form*/}

      <section className="container pt-5">
        <div className="row">
          <div className="col-md-8 col-12">
            <img src={featuredImg} className="hero-img-height" alt="" />
            <div className="d-flex flex-wrap justify-content-between py-3">
              <img src={thumbnailImgOne} className="img-thumbnail-size" alt="" />
              <img src={thumbnailImgTwo} className="img-thumbnail-size" alt="" />
              <img src={thumbnailImgThree} className="img-thumbnail-size" alt="" />
              <img src={thumbnailImgFour} className="img-thumbnail-size" alt="" />
            </div>
          </div>
          <div className="col-md-4 col-12">
            <form className="apartment-form">
              <div className="form-group">
                <input type="text" className="form-control" id="fullName" placeholder="Full Name" />
              </div>
              <div className="form-group">
                <input type="text" className="form-control" id="phone" placeholder="Phone No." />
              </div>
              <div className="form-group">
                <input type="email" className="form-control" id="email" placeholder="Email Address" />
              </div>
              <div className="form-group">
                <textarea type="text" className="form-control" id="message" rows="5" placeholder="Message" />
              </div>
              <button type="submit" className="btn btn-lg btn-block">Request Booking</button>
            </form>
          </div>
        </div>
      </section>

      {/* Apartment deatils section */}

      <section className="container-fluid d-flex flex-row pt-5">
        <div className="col-md-6 pl-5 ml-5">
          <h1>Family Apartment Three</h1>
          <p>3000 sq-ft., 3 Bedroom, Semi-furnished, Luxurious, South facing Apartment for Rent in Rangs Malancha, Melbourne.</p>

          <h3>Price Details-</h3>
          <ul>
            <li>Rent/Month: $550 (negotiable)</li>
            <li>Service Charge : 8,000/= Tk per month, subject to change</li>
            <li>Security Deposit : 3 month’s rent</li>
            <li>Flat Release Policy : 3 months earlier notice required</li>
          </ul>

          <h3>Property Details-</h3>
          <ul>
            <li>Address & Area : Rangs Malancha, House-68, Road-6A (Dead End Road), Dhanmondi Residential Area.</li>
            <li>Flat Size : 3000 Sq Feet.</li>
            <li>Floor :  A5 (5th Floor) (6 storied Building ) (South Facing Unit)</li>
            <li>Room Category : 3 Large Bed Rooms with 3 Verandas, Spacious Drawing, Dining & Family Living Room, Highly Decorated Kitchen with Store Room and Servant room with attached Toilet.</li>
            <li>Facilities : 1 Modern Lift, All Modern Amenities & Semi Furnished.</li>
            <li>Additional Facilities : a. Electricity with full generator load, b. Central Gas Geyser, c. 2 Car Parking with 1 Driver’s Accommodation, d. Community Conference Hall, e. Roof Top Beautified Garden and Grassy Ground, f. Cloth Hanging facility with CC camera</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h1 className="price">$256</h1>
        </div>

      </section>
    </div>
  );
};

export default ApartmentDetails;