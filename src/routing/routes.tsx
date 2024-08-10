import { createBrowserRouter } from "react-router-dom";
import FirstPage from "../FirstPage";
import NewRecipeDisplay from "../innerComponent/NewRecipeDisplay";

const router = createBrowserRouter([
  { path: "/", element: <FirstPage /> },
  { path: "/users/:text", element: <NewRecipeDisplay /> },
  { path: "/users/:image", element: <NewRecipeDisplay /> },
]);

export default router