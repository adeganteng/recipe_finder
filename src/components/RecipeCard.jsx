import { Heart, HeartPulse, Soup } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ recipe }) => {
  const getTwoValuesFromArray = (array) => {
    return [array[0], array[1]];
  };
  const healthLabels = getTwoValuesFromArray(recipe.healthLabels);
  const [isFavorites, setIsFavorites] = useState(
    localStorage.getItem("favorites")?.includes(recipe.label)
  );

  const addRecipeFavirites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const isRecipeAlreadyInFavorite = favorites.some(
      (fav) => fav.label === recipe.label
    );
    if (isRecipeAlreadyInFavorite) {
      favorites = favorites.filter((fav) => fav.label !== recipe.label);
      setIsFavorites(false);
    } else {
      favorites.push(recipe);
      setIsFavorites(true);
    }

    localStorage.setItem("favorites", JSON.stringify(favorites));
  };
  return (
    <div className="flex flex-col rounded-md  bg-teal-600 overflow-hidden p-3 relative">
      <Link
        className="relative"
        target="_blank"
        to={`https://www.youtube.com/results?search_query=${recipe.label}+recipe`}
      >
        <div className="absolute inset-0 skeleton" />
        <img
          src={recipe.image}
          alt="Food recipe"
          className="rounded-md w-full h-32 object-cover cursor-pointer opacity-0 transition-opacity duration-500"
          onLoad={(e) => {
            e.currentTarget.style.opacity = 1;
            e.currentTarget.previousElementSibling.style.display = "none";
          }}
        />
        <div className="absolute bottom-2 left-2 bg-white text-teal-600 rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> {recipe.yield} Servings
        </div>
      </Link>
      <div
        onClick={(e) => {
          e.preventDefault();
          addRecipeFavirites();
        }}
        className=" absolute top-4 right-4 bg-white rounded-full p-1 cursor-pointer"
      >
        <Heart
          size={20}
          className={`text-teal-600 hover:fill-red-500 hover:text-red-500 ${
            isFavorites && "fill-red-500 text-red-500"
          }`}
        />
      </div>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide text-white">{recipe.label}</p>
      </div>
      <p className="my-2 text-slate-100">
        {recipe.cuisineType[0].slice(0, 1).toUpperCase() +
          recipe.cuisineType[0].slice(1)}{" "}
        Kitchen
      </p>
      <div className="flex gap-2 mt-auto">
        {healthLabels.map((label, index) => (
          <div
            className="flex gap-1 bg-emerald-400 items-center p-1 rounded-md "
            key={index}
          >
            <HeartPulse size={16} />
            <span className="text-sm tracking-tighter font-semibold text-teal-950">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
