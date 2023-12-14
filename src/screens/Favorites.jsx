import { useEffect, useState } from "react";
import DrinkCard from "../components/DrinkCard";

function Favorites() {
  const [favoriteDrinks, setFavoriteDrinks] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];

    if (storedFavorites.length > 0) {
      Promise.all(
        //promesa por cada elmento del ciclo en este caso favorites
        storedFavorites.map((id) =>
          fetch(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
          )
        )
      )
        .then((data) =>
          setFavoriteDrinks(data.map((response) => response.drinks[0]))
        )
        .catch((error) => console.log(error));
    }
  }, []);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
//     storedFavorites && setFavorites(storedFavorites);
//   }, []);

  return (
    <div>
      <h2 className="text-center my-6">Favorites</h2>
      <ul className="flex flex-wrap gap-6">
        {favoriteDrinks.length > 0 ? (
          favoriteDrinks.map((drink) => (
            <DrinkCard
              key={drink.idDrink}
              drink={drink}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          ))
        ) : (
          <p>No hay bebidas favoritas guardadas.</p>
        )}
      </ul>
    </div>
  );
}

export default Favorites;
