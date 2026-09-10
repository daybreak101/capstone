import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage/HomePage";
import BookingPage from "./pages/BookingPage/BookingPage";
import ConfirmedBooking from "./pages/ConfirmedBooking/ConfirmedBooking";

function ScrollToTop() {
  // Code serves to scroll to the top of the page when the user navigates to a different page
  // Noticed this happens when user clicks links
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]); 

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
