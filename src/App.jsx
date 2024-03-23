import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Cocktails from "./pages/Cocktails";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Contributor from "./pages/Contributor";
import Error from "./pages/Error";
import { CocktailLayout } from "./pages/CocktailLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement: <Error/>,
    children: [
      { index: true, element: <Home/> },
      {
        path: "cocktails",
        element: <CocktailLayout/>,
        children: [
          {index: true, element: <Cocktails/>},
          { path: ":id", element: <SingleCocktail/> },
          {
            path: "contributor/:author",
            element: <Contributor/>,
          },
        ],
      },

      { path: "users/signup", element: <SignUp/> },
      { path: "users/signin", element: <SignIn/> },
    ],
  },
]);

function App() {
  return (
    <RouterProvider router={router}>
      <App></App>
    </RouterProvider>
  );
}

export default App;
