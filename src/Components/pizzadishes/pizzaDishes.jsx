import './pizzadish.css'

/* eslint-disable react/prop-types */
export function PizzaDishes({kind ,ingredients ,price }){
    return(
        <div className='pizzasContainer'>
        <h3 className='pizzaKind'>{kind}</h3>
        <p className='pizzaIngredients'>{ingredients}</p>
        <p>{price}</p>
        </div>
    )
}