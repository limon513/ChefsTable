import { useEffect } from "react";
import { useState } from "react";
import MenuItem from "./MenuItem";

export default function Menu() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("../../public/Recipe.json")
      .then((res) => res.json())
      .then((recipes) => setRecipes(recipes));
  }, []);

  return (
    <div className="grid grid-cols-2 gap-[1rem] col-span-3">
      {recipes.map((item, idx) => (
        <MenuItem key={idx} item={item}></MenuItem>
      ))}
    </div>
  );
}
