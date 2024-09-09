import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkMode";

const FavoritesPage = () => {
  const [recipes, setRecipes] = useState([]);

  const { darkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setRecipes(favorites);
  }, []);

  return (
    <div className="flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p
          className={` font-bold text-3xl md:text-5xl my-4 text-teal-900 ${
            darkMode && "text-white"
          }`}
        >
          My Favorites
        </p>

        {recipes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {recipes.map((recipe, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}
          </div>
        ) : (
          <div className="h-[80vh] flex flex-col items-center justify-center gap-4">
            <p
              className={`font-bold text-3xl md:text-5xl my-4 text-teal-900 ${
                darkMode && "text-white"
              }`}
            >
              No Favorites
            </p>
            <Link to="/" className="btn bg-teal-600 text-teal-50">
              Add your favorites now!
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
