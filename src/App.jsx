import './App.css'
import { Navbar } from './Components/Navbar/navbar.jsx'
import { Hero } from './Components/Hero/hero.jsx'
import { PizzaDishes } from './Components/pizzadishes/pizzaDishes'
import { Info, Offers } from './Components/info/info'

function App() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <div className='grid'>
    <PizzaDishes kind="Cheese" ingredients="Souce and Mozzarela" price="$15"/>
    <PizzaDishes kind="Cheese Lovers" ingredients="Mozzarela, Ricota and Parmesean" price="$18"/>
    <PizzaDishes kind="Hawaian" ingredients="Souce, Mozzarela, Ham and Pineapple" price="$18"/>
    <PizzaDishes kind="Truffle" ingredients="Mozzarela, Gorgonzola, Black Truffle and Truffle Oil" price="$20"/>
    <PizzaDishes kind="The Vegetarian" ingredients="Souce, Mozzarella, Red Pappers, Brocoli, Spinash and onions" price="$21"/>
    <PizzaDishes kind="Meat Lovers" ingredients="Souce, Mozzarella, Peperoni, Ham, Meatballs and Chorizo " price="$23"/>
    </div>
<div className='adjust'>
    <Info/>
    <Offers day='Thursday' offerDay='Tuesday'/>
    </div>
    </>
  )
}

export default App
