import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import React from "react";
import axios from "axios";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import MainLayout from "./layout/MainLayout";
import NotFoundPage from "./pages/NotFoundPage";
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EditJobPage from "./pages/EditJobPage";
const baseURL = "http://localhost:5555/api/";
axios.defaults.baseURL = baseURL;

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/jobs" element={<JobsPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/add-job" element={<AddJobPage />} />
        <Route
          path="/edit-job/:id"
          element={<EditJobPage />}
          loader={jobLoader}
        />
        <Route path="/jobs/:id" element={<JobPage />} loader={jobLoader} />
      </Route>
    )
  );

  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
