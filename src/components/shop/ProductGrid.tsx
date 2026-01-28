import { useState } from "react";
import ProductCard from "./ProductCard";
import { FaTh, FaList, FaChevronDown } from "react-icons/fa";
import { products } from "../../data/Products";
import type { Filters } from "../../pages/Shop";

const ProductGrid = ({ filters }: { filters: Filters }) => {
  const [sort, setSort] = useState("default"); // sorting
  const [perPage, setPerPage] = useState(12); // products per page
  const [gridView, setGridView] = useState(true); // grid vs list view

  // Apply filters
  let filteredProducts = products.filter((product) => {
    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      const matchesSearch =
        product.name.toLowerCase().includes(searchLower) ||
        product.description?.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower);

      if (!matchesSearch) return false;
    }

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
      <div className="flex flex-col sm:flex-row justify-between items-center mb-10 pb-6 border-b border-gray-100 gap-6">
        <div className="flex items-center gap-6 self-start md:self-auto">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">
            <span className="text-gray-900">{displayedProducts.length}</span> of {filteredProducts.length} Products
          </p>
          {/* View Switcher */}
          <div className="hidden md:flex items-center gap-4 bg-gray-50 p-1.5 rounded-xl border border-gray-100">
            <button
              onClick={() => setGridView(true)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${gridView ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400 hover:text-gray-900'}`}
            >
              <FaTh size={12} />
            </button>
            <button
              onClick={() => setGridView(false)}
              className={`w-8 h-8 flex items-center justify-center rounded-lg transition-all ${!gridView ? 'bg-white shadow-sm text-blue-600' : 'text-gray-400 hover:text-gray-900'}`}
            >
              <FaList size={12} />
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between w-full sm:w-auto gap-4 md:gap-8">
          {/* Show per page */}
          <div className="flex items-center gap-3 bg-gray-50 px-4 py-2.5 rounded-2xl border border-gray-100">
            <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Show:</label>
            <select
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
              className="bg-transparent text-[11px] font-black uppercase tracking-widest text-gray-900 focus:outline-none appearance-none cursor-pointer pr-4 relative"
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={48}>48</option>
            </select>
          </div>

          {/* Sorting */}
          <div className="relative group">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="bg-black text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest focus:outline-none appearance-none cursor-pointer pr-12 shadow-xl shadow-black/10 active:scale-95 transition-all"
            >
              <option value="default">Default Sort</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
              <option value="rating">Best Rated</option>
            </select>
            <FaChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-white pointer-events-none" size={10} />
          </div>
        </div>
      </div>

      {/* PRODUCTS GRID / LIST */}
      {displayedProducts.length > 0 ? (
        <div
          className={`${gridView
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12"
            : "flex flex-col gap-6"
            }`}
        >
          {displayedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="py-32 text-center bg-gray-50 rounded-3xl border border-dashed border-gray-200">
          <div className="inline-block p-10 rounded-full bg-white shadow-sm mb-6">
            <FaTh size={40} className="text-gray-200" />
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tighter text-gray-300">No Desserts Found</h3>
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mt-2">Try adjusting your filters</p>
        </div>
      )}

      {/* Pagination Placeholder */}
      <div className="mt-20 flex justify-center items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-gray-900 text-white flex items-center justify-center text-[10px] font-black">1</div>
        <div className="w-10 h-10 rounded-xl bg-white border-2 border-gray-50 text-gray-400 flex items-center justify-center text-[10px] font-black hover:border-gray-900 hover:text-gray-900 transition-all cursor-pointer">2</div>
        <div className="w-10 h-10 rounded-xl bg-white border-2 border-gray-50 text-gray-400 flex items-center justify-center text-[10px] font-black hover:border-gray-900 hover:text-gray-900 transition-all cursor-pointer">3</div>
      </div>
    </>
  );
};

export default ProductGrid;
