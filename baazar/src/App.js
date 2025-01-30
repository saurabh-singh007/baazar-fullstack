import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Categories from "./pages/Categories";
import ProductPage from "./pages/ProductPage";
import CheckOutPage from "./pages/CheckOutPage";

const App = () => {
  const location = useLocation();
  const noHeaderFooterRoutes = ["/checkout"];
  return (
    <div className=" relative flex flex-col">
      {!noHeaderFooterRoutes.includes(location.pathname) && (
        <>
          <Header />
          <Navigation />
        </>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/categories/:id" element={<Categories />} />
        <Route
          path="/categories/:categoryId/:subcategoryId/products/:productId"
          element={<ProductPage />}
        />
        <Route path="/checkout" element={<CheckOutPage />} />
      </Routes>
      {!noHeaderFooterRoutes.includes(location.pathname) && (
        <>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
