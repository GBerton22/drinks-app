import { useState } from "react";

function DrinkDetailCard(props) {
  const [favorite, setFavorite] = useState(false)
  
    return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={props.drink.strDrinkThumb} 
          alt="Drinks"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{props.drink.strDrink}</h2>
        <div className="card-actions justify-end">
          <button onClick={()=> setFavorite(!favorite)} className="btn btn-primary">{favorite ? '💛' : '🤍'}</button>
        </div>
        <div>
            <p>Instructions:</p>
            <p>{props.drink.strInstructions}</p>
        </div>
      </div>
    </div>
  );
}
export default DrinkDetailCard;
