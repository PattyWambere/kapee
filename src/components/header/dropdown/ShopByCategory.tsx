import { useState, useRef } from "react";
import { Link } from "react-router-dom";
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

  const handleCategoryClick = () => {
    setOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* TRIGGER */}
      <div className="flex items-center gap-3 border-r border-gray-300 pr-8 cursor-pointer group">
        <span className="tracking-widest group-hover:text-blue-600 transition-colors">SHOP BY CATEGORY</span>
        <i className={`fa-solid fa-bars text-sm transition-transform duration-300 ${open ? 'rotate-90' : ''}`}></i>
      </div>

      {/* DROPDOWN MEGA MENU */}
      <div
        className={`
          absolute left-0 top-full mt-0 w-[1100px] bg-white
          border border-gray-200 shadow-2xl rounded-b-lg overflow-hidden
          transition-all duration-300 ease-out z-50
          ${open ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible"}
        `}
      >
        <div className="flex">
          {/* LEFT PANEL - Categories */}
          <div className="w-72 border-r border-gray-200 bg-gray-50/50">
            <div className="py-4">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  onMouseEnter={() => setActiveCategory(cat)}
                  className={`
                    flex items-center justify-between px-6 py-4 text-sm cursor-pointer
                    transition-all duration-200 border-l-4
                    ${activeCategory.name === cat.name
                      ? "bg-white border-blue-600 text-blue-600 font-bold shadow-sm"
                      : "border-transparent hover:bg-white hover:border-gray-300 text-gray-700 font-medium"
                    }
                  `}
                >
                  <span className="uppercase tracking-wider text-xs">{cat.name}</span>
                  {cat.products.length > 0 && (
                    <i className={`fa-solid fa-chevron-right text-xs transition-transform ${activeCategory.name === cat.name ? 'translate-x-1' : ''}`}></i>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL - Subcategories */}
          <div className="flex-1 p-8 bg-white">
            {activeCategory.products.length > 0 ? (
              <>
                <h3 className="text-sm font-black uppercase tracking-widest text-gray-800 mb-6 pb-3 border-b border-gray-200">
                  {activeCategory.name}
                </h3>
                <div className="grid grid-cols-3 gap-x-10 gap-y-8">
                  {activeCategory.products.map((product) => (
                    <div key={product.title} className="space-y-3">
                      <Link
                        to="/shop"
                        onClick={handleCategoryClick}
                        className="block font-bold text-sm text-gray-900 hover:text-blue-600 cursor-pointer transition-colors uppercase tracking-wide"
                      >
                        {product.title}
                      </Link>
                      <ul className="space-y-2">
                        {product.items.map((item) => (
                          <li key={item}>
                            <Link
                              to="/shop"
                              onClick={handleCategoryClick}
                              className="text-xs text-gray-600 hover:text-blue-600 hover:translate-x-1 cursor-pointer transition-all inline-block"
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="flex items-center justify-center h-64">
                <div className="text-center">
                  <i className="fa-solid fa-box-open text-4xl text-gray-300 mb-4"></i>
                  <p className="text-gray-500 italic text-sm">Products coming soon!</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopByCategory;
