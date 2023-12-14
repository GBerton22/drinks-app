import { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [input, setInput] = useState('')
  return ( 
    <nav className="navbar bg-base-100 px-60">
        <div className="flex-1">VATES DRINKS</div>
        <ul className="flex gap-4 px-6">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/category/alcoholic">Alcoholic</Link>
          </li>
          <li>
            <Link to="/category/non_alcoholic">Non Alcoholic</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
        <div className="flex-none gap-2">
          <form onSubmit={(e) => e.preventDefault()} className="flex">
            <input onChange={(e) => setInput(e.target.value)} type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
            <button className="text-[20px]"><Link to={`/results/${input}`}>Buscar🔍</Link></button>
          </form>
        </div>
    </nav>
  );
}

export default NavBar;
