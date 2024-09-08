import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const FavoritesPage = () => {
  const fav = false;
  return (
    <div className="flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <p className="font-bold text-3xl md:text-5xl my-4 text-teal-900">
          My Favorites
        </p>

        {fav ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
            <RecipeCard />
          </div>
        ) : (
          <div className="h-[80vh] flex flex-col items-center justify-center gap-4">
            <p className="font-bold text-3xl md:text-5xl my-4 text-teal-900">
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
