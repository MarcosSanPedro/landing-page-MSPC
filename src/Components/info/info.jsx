/* eslint-disable react/prop-types */

import './info.css'

export function Info(){
    return(
        <div className="infoContainer1">
        <h2>Why us?</h2>
        <p>From the casual party to an elegant event, we provide you with the very bes quality italiancousine and service. Please take a moment to view out menu or  feel free to call us at.</p>
        <span>Our professional team takes care of all the details and makes sure your event has a delicius ARRAY😉 of dishes</span>
        </div>
    )
}

export function Offers({day, offerDay}){
    return(
        <div className="infoContainer2">
            <h2>Special Offers</h2>
            <p className='ptag'>☼ Every {offerDay} all pizzas cost only $15, is not amazing??</p>
            <p className='ptag'>☼ If we delay 20 minutes or more delivering your order you will have a 80% of discount😲. Fast, quality and reliable</p>
            <p className='ptag'>☼ Here at the restaurant, we have live music on {day}!!. Every week, proffesional music bands provide us with an excelent envioroment. Do not be lazy it is free!!, except for the food😆</p>
        </div>
    )
}