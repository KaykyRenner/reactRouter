import './App.css'
// 2 reaproveitamento de estrutura
import {Outlet} from "react-router-dom"
// 4- navegando entre páginas
import NavBar from "./components/navBar.jsx";
function App() {
  return (
    <>
      <div>  
        <NavBar/>
      <p className="read-the-docs">
        REACT ROUTER
      </p>
    <Outlet/>
      </div>
    </>
  )
}

export default App
