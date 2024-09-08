import { Search } from "lucide-react";
import RecipeCard from "../components/RecipeCard";

const HomePage = () => {
  return (
    <div className="p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form action="">
          <label className="input shadow-lg bg-teal-50 text-teal-800 flex items-center gap-2 border-none focus-within:ring-2 focus-within:ring-teal-600">
            <Search size={24} className="cursor-pointer" />
            <input
              type="text"
              className="text-sm md:text-base grow focus:ring-0 focus:ring-teal-600 focus:outline-none placeholder-teal-500"
              placeholder="What do you want to cook today?"
            />
          </label>
        </form>

        <h1 className="text-3xl md:text-5xl text-teal-900 font-bold mt-10">
          Recommended Recipes
        </h1>
        <p className="text-teal-600 font-semibold ml-1 my-2 text-sm tracking-tight ">
          Popular choices
        </p>

        <div className="mt-7 sm:mt-10 grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          {/* Recipe Card  */}
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
