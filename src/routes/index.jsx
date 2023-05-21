import { BrowserRouter, Route, Routes } from "react-router-dom";
import TriptiRoy from "../pages/TriptiRoy";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TriptiRoy />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
