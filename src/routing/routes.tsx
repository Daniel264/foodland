import { createBrowserRouter } from "react-router-dom";
import FirstPage from "../FirstPage";
import NewRecipeDisplay from "../innerComponent/NewRecipeDisplay";

const router = createBrowserRouter([
  { path: "/", element: <FirstPage /> },
  { path: "/users", element: <NewRecipeDisplay /> },
]);

export default router;