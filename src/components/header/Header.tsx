import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useWishlist } from "../../context/WishlistContext"; // ✅ import context
import { useCart } from "../../context/CartContext";
import CartSidebar from "../cart/CartSidebar";

const Header = () => {
  const { wishlist } = useWishlist(); // ✅ get wishlist items
  const { cartItems, subtotal, setCartOpen } = useCart();

  return (
    <>
      <div className="bg-blue-600 border-t border-blue-500">
        <div className="max-w-7xl mx-auto flex items-center px-4 py-7 gap-10">
          {/* MOBILE MENU */}
          <button className="text-white text-2xl md:hidden">
            <i className="fa-solid fa-bars"></i>
          </button>

          {/* LOGO */}
          <Link to="/" className="text-white text-4xl font-bold tracking-tight">
            kapee.
          </Link>

          {/* SEARCH (desktop only) */}
          <div className="hidden md:block flex-1">
            <SearchBar />
          </div>

          {/* USER ACTIONS */}
          <div className="hidden md:flex ml-auto items-center gap-8 text-white text-sm">
            {/* SIGN IN */}
            <Link to="/login" className="flex items-center gap-3 cursor-pointer">
              <i className="fa-regular fa-user text-xl"></i>
              <div className="leading-tight">
                <p className="text-xs opacity-80">HELLO,</p>
                <p className="font-semibold">SIGN IN</p>
              </div>
            </Link>

            {/* WISHLIST */}
            <Link to="/wishlist" className="relative cursor-pointer">
              <i className="fa-regular fa-heart text-xl"></i>
              <span className="absolute -top-2 -right-2 bg-white text-blue-600 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {wishlist.length} {/* ✅ show actual wishlist count */}
              </span>
            </Link>

            {/* CART */}
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setCartOpen(true)}
            >
              <div className="relative">
                <i className="fa-solid fa-cart-shopping text-xl"></i>
                <span className="absolute -top-2 -right-2 bg-white text-blue-600 text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                  {cartItems.length}
                </span>
              </div>
              <span className="font-semibold">${subtotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* GLOBAL CART SIDEBAR */}
      <CartSidebar />
    </>
  );
};

export default Header;
