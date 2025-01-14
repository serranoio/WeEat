import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import "./App.css";
import localforage from "localforage";

import DebugPage from "./pages/debug";

import MapSection from "./pages/Map/Map";
import ListView from "./pages/ListView/ListView";

import SetupIndex from "./pages/Setup/SetupIndex";
import CategoriesPage from "./pages/Setup/Categories";
import TransportPage from "./pages/Setup/Transport";
import BudgetPage from "./pages/Setup/Budget";
import PreferencesIndex from "./pages/Setup/PreferencesIndex";
import TimePage from "./pages/Setup/Time";

export default function App() {
  const isSetupDone = localStorage.getItem("setup-done") == "true";

  localforage.config({
    name: "WeEat",
  });

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={isSetupDone ? <MapSection /> : <SetupIndex />} />
        <Route path="/map" element={<MapSection />} />
        <Route path="/debug" element={<DebugPage />} />
        <Route path="/map/list-view" element={<ListView />} />
        <Route path="/preferences/" element={<PreferencesIndex />} />
        <Route path="/preferences/setup" element={<SetupIndex />} />
        <Route path="/preferences/categories" element={<CategoriesPage />} />
        <Route path="/preferences/transport" element={<TransportPage />} />
        <Route path="/preferences/time" element={<TimePage />} />
        <Route path="/preferences/budget" element={<BudgetPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
