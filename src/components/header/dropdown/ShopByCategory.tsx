import { useState, useRef } from "react";
import type { Category } from "../../../data/Products";
import { categories } from "../../../data/Products";

const ShopByCategory = () => {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setOpen(false), 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* TRIGGER */}
      <div className="flex items-center gap-3 border-r border-gray-300 pr-6 cursor-pointer">
        <span>SHOP BY CATEGORY</span>
        <i className="fa-solid fa-bars"></i>
      </div>

      {/* DROPDOWN */}
      <div
        className={`
          absolute left-0 top-full mt-4 w-[1100px] bg-white
          border border-gray-200 shadow-xl
          transition-all duration-200 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"}
        `}
      >
        <div className="flex">
          {/* LEFT PANEL */}
          <div className="w-64 border-r border-gray-200">
            {categories.map((cat) => (
              <div
                key={cat.name}
                onMouseEnter={() => setActiveCategory(cat)}
                className={`
                  flex items-center justify-between px-5 py-3 text-sm cursor-pointer
                  ${activeCategory.name === cat.name ? "bg-blue-50 text-blue-600 font-semibold" : "hover:bg-gray-50"}
                `}
              >
                <span>{cat.name}</span>
                {cat.products.length > 0 && (
                  <i className="fa-solid fa-chevron-right text-xs"></i>
                )}
              </div>
            ))}
          </div>

          {/* RIGHT PANEL */}
          <div className="flex-1 p-6 animate-fadeIn">
            {activeCategory.products.length > 0 ? (
              <div className="grid grid-cols-3 gap-8">
                {activeCategory.products.map((product) => (
                  <div key={product.title}>
                    <h4 className="font-semibold mb-3 hover:text-blue-600 cursor-pointer transition">
                      {product.title}
                    </h4>
                    <ul className="space-y-2">
                      {product.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-gray-700 hover:text-blue-600 cursor-pointer transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-gray-500 italic text-sm">
                Products coming soon!
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
