import { useEffect, useState } from "react";
import DrinkCard from "../components/DrinkCard";
import { useParams } from "react-router-dom";

function Results() {
  const [drinks, setDrinks] = useState([]);
  const {query} = useParams();

  useEffect(() => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${query}`)
      .then((res) => res.json())
      .then((data) => setDrinks(data.drinks));
  }, [query]);

  return (
    <section>
      <h2 className="text-center my-6">Results for: {query}</h2>
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

export default Results;
