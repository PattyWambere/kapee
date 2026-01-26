import { useState } from "react";
import ProductCard from "./ProductCard";
import { FaTh, FaList } from "react-icons/fa";
import { products } from "../../data/Products";
import type { Filters } from "../../pages/Shop";

const ProductGrid = ({ filters }: { filters: Filters }) => {
  const [sort, setSort] = useState("default"); // sorting
  const [perPage, setPerPage] = useState(12); // products per page
  const [gridView, setGridView] = useState(true); // grid vs list view

  // Apply filters
  let filteredProducts = products.filter((product) => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.price && product.price > filters.price) return false;
    if (filters.color && !product.colors?.includes(filters.color)) return false;
    if (filters.size && !product.sizes?.includes(filters.size)) return false;
    if (filters.rating && product.rating < filters.rating) return false;
    return true;
  });

  // Apply sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    if (sort === "low-high") return a.price - b.price;
    if (sort === "high-low") return b.price - a.price;
    if (sort === "rating") return b.rating - a.rating;
    return 0; // default
  });

  // Limit products per page
  const displayedProducts = filteredProducts.slice(0, perPage);

  return (
    <>
      {/* TOP BAR */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 pb-4 border-b border-gray-200">
        <p className="text-gray-500 text-sm mb-4 sm:mb-0">
          Showing 1–{displayedProducts.length} of {filteredProducts.length}{" "}
          Products
        </p>

        <div className="flex items-center gap-4">
          {/* View Switcher */}
          <div className="flex text-gray-400 gap-2 mr-2">
            <FaTh
              className={`cursor-pointer ${gridView ? "text-gray-800" : ""}`}
              onClick={() => setGridView(true)}
            />
            <FaList
              className={`cursor-pointer ${!gridView ? "text-gray-800" : ""}`}
              onClick={() => setGridView(false)}
            />
          </div>

          {/* Show per page */}
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-500">Show:</label>
            <select
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
              className="border-gray-300 border px-2 py-1.5 rounded text-sm text-gray-600 focus:outline-none focus:border-orange-500"
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
            </select>
          </div>

          {/* Sorting */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border-gray-300 border px-3 py-1.5 rounded text-sm text-gray-600 focus:outline-none focus:border-orange-500"
          >
            <option value="default">Default sorting</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="rating">Average Rating</option>
          </select>
        </div>
      </div>

      {/* PRODUCTS GRID / LIST */}
      <div
        className={`${
          gridView
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            : "flex flex-col gap-4"
        }`}
      >
        {displayedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductGrid;
