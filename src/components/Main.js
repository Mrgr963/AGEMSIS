import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./NavBar/NavBar";
import Login from "./Login/Login";
import CriarJovem from "./Jovem/CriarJovem";
import ListarJovem from "./Jovem/ListarJovem";

import Firebase from "./utils/Firebase";
import FirebaseContext from "./utils/FirebaseContext";
import EditarJovem from "./Jovem/EditarJovem";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path:"login",
        element:<Login />
    },
    {
      path:"criar",
      element:<CriarJovem />
    },
    {
      path:"listar",
      element:<ListarJovem />
    },
    {
      path:"editar/:id",
      element:<EditarJovem/>
    },
    ],
  },
]);

const Main = () => {
  return (
    <FirebaseContext.Provider value={new Firebase()}>
      <RouterProvider router={router}/>
    </FirebaseContext.Provider>
  )
};

export default Main;