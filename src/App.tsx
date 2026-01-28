// App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { WishlistProvider } from "./context/WishlistContext";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import WishList from "./pages/WishList";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderComplete from "./pages/OrderComplete";
import Contact from "./pages/Contact";

function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>
          <Router>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<Home />} /> {/* Home page */}
                <Route path="/about" element={<About />} /> {/* About page */}
                <Route path="/blog" element={<Blog />} /> {/* Blog page */}
                <Route path="/contact" element={<Contact />} /> {/* Contact page */}
                <Route path="/wishlist" element={<WishList />} />{" "}
                {/* Wishlist page */}
                <Route path="/shop" element={<Shop />} /> {/* Shop page */}
                <Route path="/shop/:id" element={<ProductDetails />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-complete" element={<OrderComplete />} />
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
    </AuthProvider>
  );
}

export default App;
