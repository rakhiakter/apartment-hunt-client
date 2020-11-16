import React from 'react';
import './ApartmentDetails.css';
import heroImg from '../../Images/hero/product_details_hero.png';
import featuredImg from '../../Images/preview/Rectangle 406.png';
import thumbnailImgOne from '../../Images/thumbnail/Rectangle 407.png';
import thumbnailImgTwo from '../../Images/thumbnail/Rectangle 408.png';
import thumbnailImgThree from '../../Images/thumbnail/Rectangle 409.png';
import thumbnailImgFour from '../../Images/thumbnail/Rectangle 410.png';

const ApartmentDetails = () => {
    return (
        <div>
          {/* Hero Section */}

          <section className = "container-fluid p-0">
            <h2 className = "hero-text">Apartment</h2>
            <img src={heroImg} className = "hero-img-height" alt=""/>
          </section>

          {/* Details image section with contact form*/}

          <section className = "container-fluid d-flex flex-row pt-5 align-items-center">
            <div className = "col-md-7 pl-5 ml-5">
              <img src={featuredImg} className = "hero-img-height" alt=""/>
              <div className = "d-flex flex-row justify-content-between pt-3">
                <img src={thumbnailImgOne} className = "img-thumbnail-size" alt=""/>
                <img src={thumbnailImgTwo} className = "img-thumbnail-size" alt=""/>
                <img src={thumbnailImgThree} className = "img-thumbnail-size" alt=""/>
                <img src={thumbnailImgFour} className = "img-thumbnail-size" alt=""/>
              </div>
            </div>
            <div className = "col-md-4 pl-5 pr-5">
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" id="fullName" placeholder = "Full Name"/>
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" id="phone" placeholder = "Phone No."/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" id="email" placeholder = "Email Address"/>
                </div>
                <div className="form-group">
                  <textarea type="text" className="form-control" id="meassage" placeholder = "Message"/>
                </div>
                <button type="submit" className="btn btn-primary btn-lg btn-block">Request Booking</button>
              </form>
            </div>
          </section>

          {/* Apartment deatils section */}

          <section className = "container-fluid d-flex flex-row pt-5">
            <div className = "col-md-6 pl-5 ml-5">
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
            <div className = "col-md-6">
              <h1>$256</h1>
            </div>
            
          </section>
        </div>
    );
};

export default ApartmentDetails;