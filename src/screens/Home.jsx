import { useEffect, useState } from "react";
import DrinkCard from "../components/DrinkCard";
import Filter from "../components/Filter";

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
  {drinks.length > 0 ? (
    <ul className="flex flex-wrap gap-6">
      {drinks
        .slice(0, 21)
        .map((drink) => (
          <DrinkCard
            key={drink.idDrink}
            drink={drink}
            favorites={favorites}
            setFavorites={setFavorites}
          />
        ))}
    </ul>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  )}
</section>
  );
}

export default Home;
