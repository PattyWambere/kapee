// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import WishList from "./pages/WishList";

function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <Router>
          <Routes>
            <Route element={<MainLayout />}>
              <Route path="/" element={<Home />} /> {/* Home page */}
              <Route path="/about" element={<About />} /> {/* About page */}
              <Route path="/blog" element={<Blog />} /> {/* Blog page */}
              <Route path="/wishlist" element={<WishList />} />{" "}
              {/* Wishlist page */}
              <Route path="/shop" element={<Shop />} /> {/* Shop page */}
              {/* 404 fallback */}
              <Route
                path="*"
                element={<div className="text-center py-20">Page Not Found</div>}
              />
            </Route>
          </Routes>
        </Router>
      </CartProvider>
    </WishlistProvider>
  );
}

export default App;
