import { useState } from "react";
import { FaChevronDown, FaChevronUp, FaStar } from "react-icons/fa";
import { categories } from "../../data/Products";
import type { Filters } from "../../pages/Shop";

const FilterSection = ({
  title,
  children,
  isOpen: defaultOpen = false,
}: {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-sm font-bold text-gray-800 mb-2 uppercase"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
        <span className="text-gray-400 text-xs">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </span>
      </button>

      {isOpen && <div className="mt-2">{children}</div>}
    </div>
  );
};

const ShopFilters = ({
  filters,
  setFilters,
}: {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}) => {
  return (
    <div className="pr-4">
      {/* CLEAR FILTERS */}
      <button
        onClick={() =>
          setFilters({
            category: null,
            price: 500,
            color: null,
            size: null,
            rating: null,
          })
        }
        className="text-xs text-red-500 font-bold mb-4 uppercase"
      >
        Clear All Filters
      </button>

      {/* PRODUCT CATEGORIES */}
      <FilterSection title="Product Categories" isOpen>
        <ul className="space-y-2 text-sm">
          {categories.map((cat) => (
            <li
              key={cat.name}
              onClick={() => setFilters({ ...filters, category: cat.name })}
              className={`cursor-pointer transition ${
                filters.category === cat.name
                  ? "text-orange-500 font-bold"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              {cat.name}
            </li>
          ))}
        </ul>
      </FilterSection>

      {/* PRICE FILTER */}
      <FilterSection title="Filter by Price" isOpen>
        <div className="space-y-3">
          <p className="text-sm text-gray-600 font-medium">
            Up to ${filters.price}
          </p>

          <input
            type="range"
            min="10"
            max="500"
            value={filters.price}
            onChange={(e) =>
              setFilters({
                ...filters,
                price: Number(e.target.value),
              })
            }
            className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
          />
        </div>
      </FilterSection>

      {/* COLOR FILTER */}
      <FilterSection title="Filter by Color" isOpen>
        <div className="flex flex-wrap gap-2">
          {[
            { name: "Black", color: "#000000" },
            { name: "White", color: "#FFFFFF" },
            { name: "Blue", color: "#1E88E5" },
            { name: "Red", color: "#D32F2F" },
            { name: "Beige", color: "#F5F5DC" },
            { name: "Green", color: "#388E3C" },
          ].map((c) => (
            <button
              key={c.name}
              onClick={() => setFilters({ ...filters, color: c.color })}
              title={c.name}
              className={`w-6 h-6 rounded-full border shadow-sm transition ${
                filters.color === c.color
                  ? "ring-2 ring-orange-500"
                  : "border-gray-300"
              }`}
              style={{ backgroundColor: c.color }}
            />
          ))}
        </div>
      </FilterSection>

      {/* SIZE FILTER */}
      <FilterSection title="Filter by Size" isOpen>
        <ul className="space-y-2 text-sm">
          {["XS", "S", "M", "L", "XL", "XXL"].map((size) => (
            <li
              key={size}
              onClick={() => setFilters({ ...filters, size })}
              className={`cursor-pointer transition ${
                filters.size === size
                  ? "text-orange-500 font-bold"
                  : "text-gray-500 hover:text-orange-500"
              }`}
            >
              {size}
            </li>
          ))}
        </ul>
      </FilterSection>

      {/* RATING FILTER */}
      <FilterSection title="Average Rating" isOpen>
        <ul className="space-y-2">
          {[5, 4, 3, 2].map((stars) => (
            <li
              key={stars}
              onClick={() => setFilters({ ...filters, rating: stars })}
              className="flex items-center cursor-pointer hover:opacity-80"
            >
              <div className="flex text-yellow-400 text-xs mr-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar
                    key={i}
                    className={i < stars ? "" : "text-gray-200"}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500">& Up</span>
            </li>
          ))}
        </ul>
      </FilterSection>
    </div>
  );
};

export default ShopFilters;
