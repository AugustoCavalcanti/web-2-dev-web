import "./App.css";
import NavBar from "./components/NavBar";
import AdicionaReceita from "./pages/adicionaReceita";
import Detalhes from "./pages/detalhes";
import EditarReceita from "./pages/editarReceita";
import Lista from "./pages/lista";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Lista />} />
            <Route path="receita/:id" element={<Detalhes />} />
            <Route path="receita-editar/:id" element={<EditarReceita />} />
            <Route path="adicionar-receita/" element={<AdicionaReceita />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
