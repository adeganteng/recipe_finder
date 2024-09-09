import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";
import { useContext, useEffect, useState } from "react";
import { DarkModeContext } from "../context/DarkMode";

const appId = import.meta.env.VITE_APP_ID;
const appKey = import.meta.env.VITE_APP_KEY;

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const { darkMode } = useContext(DarkModeContext);

  const foods = [
    "chicken",
    "beef",
    "pork",
    "fish",
    "vegetable",
    "dairy",
    "seafood",
    "egg",
  ];

  const randomFood = foods[Math.floor(Math.random() * foods.length)];

  const fetchRecipe = async (searchQuery) => {
    setLoading(true);
    setRecipes([]);

    try {
      const res = await fetch(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=${appId}&app_key=${appKey}`
      );

      const data = await res.json();
      setRecipes(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipe(randomFood);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSearchRecipe = (e) => {
    e.preventDefault();
    const searchQuery = e.target[0].value;
    fetchRecipe(searchQuery);
    e.target[0].value = "";
  };

  return (
    <div className="p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSearchRecipe}>
          <label className="input shadow-lg bg-teal-50 text-teal-800 flex items-center gap-2 border-none focus-within:ring-2 focus-within:ring-teal-600">
            <Search size={24} className="cursor-pointer" />
            <input
              type="text"
              className="text-sm md:text-base grow focus:ring-0 focus:ring-teal-600 focus:outline-none placeholder-teal-500"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>

        <h1
          className={`text-3xl md:text-5xl text-teal-900 font-bold mt-10 ${
            darkMode && "text-white"
          }`}
        >
          Recommended Recipes
        </h1>
        <p
          className={`text-teal-600 font-semibold ml-1 my-2 text-sm tracking-tight ${
            darkMode && "text-slate-300"
          }`}
        >
          Popular choices
        </p>

        <div className="mt-7 sm:mt-10 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {/* Recipe Card  */}
          {!loading &&
            recipes.map(({ recipe }, index) => (
              <RecipeCard key={index} recipe={recipe} />
            ))}

          {loading &&
            [...Array(9)].map((_, index) => (
              <div className="flex w-full flex-col gap-4" key={index}>
                <div className="skeleton h-32 w-full"></div>
                <div className="skeleton h-4 w-full"></div>
                <div className="flex gap2">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-full"></div>
                </div>
              </div>
            ))}
        </div>
        {/* Jika recipenya tidak ada */}
        {!loading && recipes.length === 0 && (
          <div className="min-h-screen w-full flex justify-center items-center">
            <p className="font-bold text-3xl md:text-5xl text-teal-900 text-center">
              No recipes was found
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
