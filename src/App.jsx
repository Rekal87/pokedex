import "./App.css";
import pokemon from "./utils/pokedex.json";

function App() {
  return (
    <div className="min-h-full">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Pokedéx
          </h1>
          <div className="menu"></div>
          <section>
            <Result pokemon={pokemon} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default App;
