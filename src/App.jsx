import { Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import FavoritesPage from "./pages/FavoritesPage";
import { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { DarkModeContext } from "./context/DarkMode";

const App = () => {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  return (
    <div className={`flex relative ${darkMode ? "bg-teal-950" : ""}`}>
      <div
        className={`fixed right-4 top-4 p-2 rounded-full cursor-pointer  font-extrabold z-10 ${
          darkMode
            ? "bg-teal-950 text-white border border-white"
            : "bg-white text-teal-600 border border-teal-600"
        }`}
      >
        {darkMode ? (
          <Sun size={24} onClick={() => setDarkMode(!darkMode)} />
        ) : (
          <Moon size={24} onClick={() => setDarkMode(!darkMode)} />
        )}
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </div>
  );
};

export default App;
