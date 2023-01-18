import { Routes, Route } from "react-router-dom";
import { Pokemons } from "./pages/Pokemons";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/pokemons" element={<Pokemons />} />
      </Routes>
    </main>
  );
}

export default App;
