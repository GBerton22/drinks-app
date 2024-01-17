import { useState } from "react";
import { Link } from "react-router-dom";

function DrinkCard(props) {
  const [favorite, setFavorite] = useState(false);

  const handleFavorite = () => {
    const updateFavorites = props.favorites.includes(props.drink.idDrink)
      ? props.favorites.filter((id) => id !== props.drink.idDrink)
      : [...props.favorites, props.drink.idDrink];

    props.setFavorites(updateFavorites);
    localStorage.setItem("favorites", JSON.stringify(updateFavorites));
    // if (props.favorite.includes(props.drink.idDrink)) {
    //   props.removeFavorite(props.drink.idDrink);
    // }
    setFavorites(!favorite);
  };
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
          <button className="btn btn-primary"><Link to={`/detail/${props.drink.idDrink}`}>View</Link></button>
          <button onClick={handleFavorite} className="btn btn-primary">{favorite ? '💛' : '🤍'}</button>
        </div>
      </div>
    </div>
  );
}
export default DrinkCard;
