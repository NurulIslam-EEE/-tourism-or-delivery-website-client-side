import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className='row m-0 p-3'>
            <h3>ABOUT US</h3>
            <h1 className='about-title'>ROYAL ADVENTURE TRAVEL AND TOURISM</h1>
            <p className='text-start'>It is indeed a great pleasure to introduce to you, Royal Tours and Travels is a long-established and exciting Travel, Tours & Adventure Desert Safari Operator with the emphasis on quality, innovation and customer service delivery.

                Royal Tours and Travels are fully equipped to cater to all requirements related to Hotel Accommodation, Visas, Inter Emirates City Tours, Desert Safari Dubai, Musandam Island Trips, Hatta Mountain Safari , Water Sports, Fishing Trips & Special Services viz. Golf, Scuba Diving, Helicopter Tours, Dhow Cruise Dinner, Airport meet & assist, Multilingual guides etc provide exciting and unique programmes & packages that are totally flexible and can be adapted to suit the needs of all of our clients

                Royal Tours and Travels are managed by a professional team and it serve progress to the position as one of the top tourism companies in the United Arab Emirates. Our staff are committed to serve customers with professional care and give them optimum satisfaction inspiring people to travel and explore.</p>
            <h1>WHY CHOOSE US</h1>

            <div className="col-md-4 text-center">
                <h1 className='icon '><i class="fas fa-star"></i></h1>
                Best Desert Safari Operator in UAE</div>
            <div className="col-md-4">
                <h1 className='icon '><i class="fas fa-car"></i></h1>
                Great Deal For Best Desert Adventure</div>
            <div className="col-md-4">
                <h1 className='icon '><i class="fas fa-user"></i></h1>
                Experienced Driver's</div>

        </div>
    );
};

export default AboutUs;