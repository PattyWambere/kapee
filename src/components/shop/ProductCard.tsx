import { FaRegHeart, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useWishlist } from "../../context/WishlistContext";

const ProductCard = ({ product }: any) => {
  const { toggleWishlist, isInWishlist } = useWishlist();
  const liked = isInWishlist(product.id);

  return (
    // 👇 LOWER z-index
    <div className="group relative z-0">
      <div className="relative overflow-hidden mb-4 z-0">
        {/* Featured Badge */}
        {product.featured && (
          <span className="absolute top-3 left-3 bg-orange-500 text-white text-[10px] font-bold px-2 py-1 uppercase z-10">
            Featured
          </span>
        )}

        {/* Image */}
        <Link to={`/shop/${product.id}`}>
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-[320px] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {/* Wishlist Button */}
        <button
          onClick={() => toggleWishlist(product)}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow-md transition hover:bg-orange-500 hover:text-white z-10"
        >
          {liked ? (
            <FaHeart className="text-red-500" size={14} />
          ) : (
            <FaRegHeart size={14} />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="space-y-1">
        <p className="text-xs text-gray-400 uppercase">{product.category}</p>
        <Link to={`/shop/${product.id}`}>
          <h3 className="font-semibold">{product.title}</h3>
        </Link>

        {/* Rating */}
        <div className="flex text-yellow-400 text-xs">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < product.rating ? "" : "text-gray-200"}
            />
          ))}
        </div>

        {/* Price */}
        <div className="text-sm font-bold">${product.price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductCard;
