import { useEffect, useState } from "react";
import DrinkCard from "../components/DrinkCard";
import Filter  from "../components/Filter";

function Home() {
  const [favorites, setFavorites] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [inputValue, setInputValue] = useState('')
  useEffect(() => {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")
      .then((res) => res.json())
      .then((data) => setDrinks(data.drinks));
  }, []);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    storedFavorites && setFavorites(storedFavorites);
  }, []);

  const filteredDrinks = drinks.filter((drink)=> drink)

  return (
    <section>
        <Filter setInputValue />
      <ul className="flex flex-wrap gap-6">
        {drinks.length > 0 ? (
          drinks
            .slice(0, 21)
            .map((drink) => (
              <DrinkCard
                key={drink.idDrink}
                drink={drink}
                favorites={favorites}
                setFavorites={setFavorites}
              />
            ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </section>
  );
}
import Filter from "../components/Filter";

export default Home;
