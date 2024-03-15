import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Cocktails from "./pages/Cocktails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Contributor from "./pages/Contributor"



const router= createBrowserRouter([
  {path:"/", element: <MainLayout></MainLayout>, children: [
    { index: true, element: <Home></Home>},
    { path: "cocktails", element: <Cocktails></Cocktails>},
    { path: "cocktails/:id", element: <SingleCocktail></SingleCocktail>},
    { path: "signup", element: <SignUp></SignUp>},
    { path: "signin", element: <SignIn></SignIn>},
    { path: "contributor", element: <Contributor></Contributor>}
  ]}
])

function App() {
  return <RouterProvider router={router}><App></App></RouterProvider>;
}

export default App;
