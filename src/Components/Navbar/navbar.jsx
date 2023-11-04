import './navbar.css'
import logo from '../../assets/Pizza-icon.png'
export function Navbar(){
    return(
        <ul>
            <div>
                <li><img src={logo} alt="pizza" className='logo' /></li>
                <li>PizzaOMG</li>
            </div>
            <div className='navbarMenu'>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Buy me a coffe</a></li>
                </div>
                   </ul>
                   
    )
}