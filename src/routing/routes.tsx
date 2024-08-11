import { createBrowserRouter } from "react-router-dom";
import FirstPage from "../FirstPage";
import FullApp from "../innerComponent/FullApp";
import NavigationHeader from "../components/NavigationHeader";
import RecipeDisplay from "../pages/RecipeDisplay";


const router = createBrowserRouter([
  { path: "/", element: <FirstPage /> },
  { path: "/users/:text", element: <FullApp /> },
  {path: '#', element: <NavigationHeader />},
  {path: '/recipe', element: <RecipeDisplay/>}
]);

export default router