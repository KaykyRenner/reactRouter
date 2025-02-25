import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
// 1- configurando router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./router/pages/home.jsx";
import Contact from "./router/pages/contact.jsx";
// 3- importando página de erro
import Erro from "./router/pages/erro.jsx"
// 4- importando contactDetails(indetificador único)
import ContactDetails from "./router/pages/detailsContact.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    //-3 página de erro
    errorElement:<Erro/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      //5- nested routes - indentificador único
      {
        path:"/contact/:id",
        element:<ContactDetails/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
