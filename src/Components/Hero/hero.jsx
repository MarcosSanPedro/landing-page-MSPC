import restaurant from '../../assets/restaurant.jpeg'
import './hero.css' 
export function Hero(){
    return(
        
        <div className='heroContainer'>
        <img src={restaurant} alt="restaurant" className='restaurantPicture'/>
        <button id="order">Order Ahead</button>
        </div>
        
    )
}

