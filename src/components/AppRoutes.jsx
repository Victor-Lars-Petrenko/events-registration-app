import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Loader from "./Loader";

const Board = lazy(() => import("../pages/Board"));
const Participants = lazy(() => import("../pages/Participants"));
const Registration = lazy(() => import("../pages/Registration"));

const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route index element={<Board />} />
        <Route path="participants" element={<Participants />} />
        <Route path="registration" element={<Registration />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
