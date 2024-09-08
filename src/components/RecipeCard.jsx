import { Heart, HeartPulse, Soup } from "lucide-react";
import { Link } from "react-router-dom";

const RecipeCard = () => {
  return (
    <div className="flex flex-col rounded-md bg-teal-600 overflow-hidden p-3 relative">
      <Link className="relative">
        <img
          src="/food-1.jpg"
          alt="Food recipe"
          className="rounded-md w-full h-full object-cover cursor-pointer"
        />
        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm">
          <Soup size={16} /> 4 Servings
        </div>
        <div className=" absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
          <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
        </div>
      </Link>
      <div className="flex mt-1">
        <p className="font-bold tracking-wide">Pecel Lele</p>
      </div>
      <p className="my-2">Indonesian Kitchen</p>
      <div className="flex gap-2 mt-auto">
        <div className="flex gap-1 bg-emerald-400 items-center p-1 rounded-md">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Gluten-free
          </span>
        </div>
        <div className="flex gap-1 bg-emerald-400 items-center p-1 rounded-md">
          <HeartPulse size={16} />
          <span className="text-sm tracking-tighter font-semibold">
            Gluten-free
          </span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
