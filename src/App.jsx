import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/Home";
import SingleCocktail from "./pages/SingleCocktail";
import Cocktails from "./pages/Cocktails";
import SignUp from "./pages/SignUp";
import Contributor from "./pages/Contributor";
import Error from "./pages/Error";
import { CocktailLayout } from "./pages/CocktailLayout";
import { useDispatch } from "react-redux";
import { PrivateRoutes } from "./components/PrivateRoutes";
import NewCocktail from "./pages/NewCocktail";
import { authActions } from "./redux/slice/authSlice";
import { glasses, method } from "./helpers/initialLocalStorage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditCocktail from "./pages/EditCocktail";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "cocktails",
        element: <CocktailLayout />,
        children: [
          { index: true, element: <Cocktails /> },
          {
            path: ":id",
            element: (
              <PrivateRoutes>
                <SingleCocktail />
              </PrivateRoutes>
            ),
          },
          {
            path: ":id/editCocktail",
            element: (
              <PrivateRoutes>
                <EditCocktail />
              </PrivateRoutes>
            ),
          },
          {
            path: "contributor/:author",
            element: (
              <PrivateRoutes>
                <Contributor />
              </PrivateRoutes>
            ),
          },
          {
            path: "contributor/:author/makeCocktail",
            element: (
              <PrivateRoutes>
                <NewCocktail />
              </PrivateRoutes>
            ),
          },
        ],
      },

      { path: "users/signup", element: <SignUp /> },
      { path: "users/signin", element: <SignUp /> },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();
  if (localStorage.getItem("user")) {
    dispatch(authActions.login());
  }
  localStorage.setItem("method", JSON.stringify(method));
  localStorage.setItem("glass", JSON.stringify(glasses));
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer />
    </>
  );
}

export default App;
