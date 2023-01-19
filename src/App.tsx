import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Pokemons } from "./pages/Pokemons";
import { Profile } from "./pages/Profile";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/pokemons" element={<Pokemons />} />
        <Route path="/pokemons/:name" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
