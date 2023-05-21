import { BrowserRouter, Route, Routes } from "react-router-dom";
import TriptiRoy from "../pages/TriptiRoy";
import Login from "../pages/login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TriptiRoy />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
