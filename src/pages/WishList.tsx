
import PageHeader from "../components/header/PageHeader";
import { useWishlist } from "../context/WishlistContext";

const WishList = () => {
  const { wishlist, toggleWishlist } = useWishlist();

  return (
    <>
      <PageHeader title="WishList" />

      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="border border-gray-200 rounded-md overflow-hidden">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-4 bg-gray-100 text-sm font-medium text-gray-700 px-4 py-3">
            <span>Product</span>
            <span>Price</span>
            <span>Status</span>
            <span>Action</span>
          </div>

          {wishlist.length === 0 ? (
            <div className="px-4 py-12 text-center text-gray-500 text-sm">
              No products added to the wishlist
            </div>
          ) : (
            wishlist.map((product) => (
              <div
                key={product.id}
                className="grid grid-cols-4 items-center px-4 py-4 border-t text-sm"
              >
                <span className="font-medium">{product.title}</span>
                <span>${product.price.toFixed(2)}</span>
                <span className="text-green-600">In Stock</span>
                <button
                  onClick={() => toggleWishlist(product)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default WishList;
