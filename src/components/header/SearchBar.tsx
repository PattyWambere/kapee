const SearchBar = () => {
  return (
    <div className="flex bg-white rounded-full overflow-hidden w-full max-w-xl">
      <input
        type="text"
        placeholder="Search for products, categories, brands, sku..."
        className="flex-1 px-4 py-3 outline-none"
      />

      <select className="px-3 border-l">
        <option>All Categories</option>
      </select>

      <button className="px-5 bg-blue-500 text-white">
        <i className="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBar;
