import { createBrowserRouter } from "react-router-dom";
import HeroListPage from "@pages/hero/HeroListPage";
import HeroDetailPage from "@pages/hero/HeroDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroListPage />,
  },
  { path: "/detail/:id", element: <HeroDetailPage /> },
]);
