import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./components/Styling/index.css";
import App from "./App.jsx";
import Header from "./components/custom/Header";
import DelhiDarshan from "./components/TourPlans/DelhiDarshan";
import AgraTour from "./components/TourPlans/AgraTour";
import ContactPage from "./components/Pages/ContactPage";
import AboutPage from "./components/Pages/AboutUsPage";
import TourPage from "./components/Pages/TourPage";
import Footer from "./components/custom/footer";

// Layout component to include Header
function Layout() {
  return (
    <>
      <Header />
      <p>yash malhotra</p>
      <Outlet /> {/* Dynamically renders the current route */}
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Use Layout as the base element
    children: [
      { path: "/", element: <App /> },
      { path: "/delhi-darshan", element: <DelhiDarshan /> },
      { path: "/agra-tour", element: <AgraTour /> },
      { path: "/contact", element: <ContactPage /> },
      { path: "/about-page", element: <AboutPage /> },
      { path: "/tour-page", element: <TourPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
