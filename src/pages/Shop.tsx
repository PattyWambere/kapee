import { useState } from "react";

import PageHeader from "../components/header/PageHeader";
import ShopFilters from "../components/shop/ShopFilters";
import ProductGrid from "../components/shop/ProductGrid";

export interface Filters {
  category: string | null;
  price: number;
  color: string | null;
  size: string | null;
  rating: number | null;
}

const Shop = () => {
  const [filters, setFilters] = useState<Filters>({
    category: null,
    price: 500,
    color: null,
    size: null,
    rating: null,
  });

  return (
    <>
      <PageHeader title="Shop" />

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-4 gap-10">
        <aside className="lg:col-span-1">
          <ShopFilters filters={filters} setFilters={setFilters} />
        </aside>

        <section className="lg:col-span-3">
          <ProductGrid filters={filters} />
        </section>
      </div>
    </>
  );
};

export default Shop;
