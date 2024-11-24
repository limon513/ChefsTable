import NavBar from "./NavBar";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="py-[3.12rem] flex justify-between items-center">
      <h1 className="text-[2rem] font-[700]">Recipe Calories</h1>
      <NavBar />
      <SearchBar />
    </div>
  );
}
