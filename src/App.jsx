import "./App.css";
import Banner from "./components/Banner";
import Header from "./components/Header";
import Kitchen from "./components/Kitchen";
import Menu from "./components/Menu";

function App() {
  return (
    <div>
      <header className="mb-[6.25rem]">
        <Header />
        <Banner />
      </header>
      <main className="flex flex-col gap-[3rem] justify-center items-center">
        <div className="max-w-[51.4375rem]">
          <h2 className="text-[2.5rem] font-[600] text-[#150B2B] text-center">
            Our Recipes
          </h2>
          <p className="text-[1rem] font-[400] text-[#150B2B99] text-center">
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.{" "}
          </p>
        </div>
        <div className="grid grid-cols-5 gap-[1rem]">
          <Menu />
          <Kitchen />
        </div>
      </main>
    </div>
  );
}

export default App;
