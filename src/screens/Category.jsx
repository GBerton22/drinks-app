import { useEffect, useState } from "react";
import DrinkCard from "../components/DrinkCard";
import { useParams } from "react-router-dom";

function Category() {
  const [drinks, setDrinks] = useState([]);
  const [favorites, setFavorites] = useState([])
  const { idCategory } = useParams();

  useEffect(() => {
    fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=${idCategory}`
    )
      .then((res) => res.json())
      .then((data) => setDrinks(data.drinks));
  }, [idCategory]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites"));
    storedFavorites && setFavorites(storedFavorites);
  }, []);

  return (
    <section>
      <h2 className="text-center my-6">
        {" "}
        {idCategory.toUpperCase().replace("_", " ")}{" "}
      </h2>
      <ul className="flex flex-wrap gap-6">
        {drinks.length > 0 ? (
          drinks
            .slice(0, 21)
            .map((drink) => <DrinkCard key={drink.idDrink} drink={drink} />)
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </section>
  );
}

export default Category;
