import { createBrowserRouter } from "react-router-dom";
import FirstPage from "../FirstPage";
import NewRecipeDisplay from "../innerComponent/NewRecipeDisplay";
import FullApp from "../innerComponent/FullApp";

const router = createBrowserRouter([
  { path: "/", element: <FirstPage /> },
  { path: "/users/:text", element: <FullApp /> },
]);

export default router