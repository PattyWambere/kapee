// data/Products.ts

// data/Products.ts

// ✅ TypeScript types used for Filters (Categories -> Subcategories)
export interface SubCategory {
  title: string;
  items: string[];
}

export interface Category {
  name: string;
  products: SubCategory[];
}

// ✅ TypeScript types for Actual Products
export interface ProductItem {
  id: number;
  title: string;
  category: string;
  price: number;
  oldPrice?: number;
  image: string;
  featured: boolean;
  rating: number;
  colors?: string[];
  sizes?: string[];
}

// Categories and their structure (for Filters)
export const categories: Category[] = [
  {
    name: "Men’s Clothing",
    products: [
      { title: "Top wear", items: ["T-Shirts", "Shirts", "Suits & Blazers", "Jackets"] },
      { title: "Bottom wear", items: ["Jeans", "Trousers", "Shorts", "Cargos", "Track pants"] },
      { title: "Winter wear", items: ["Sweaters", "Jackets", "Sweatshirts", "Thermals", "Pullovers"] },
      { title: "Sports wear", items: ["Sports T-Shirts", "Track Pants", "Track Suits", "Shorts", "Innerwear"] },
      { title: "Innerwear & Sleepwear", items: ["Briefs & Trunks", "Vests", "Boxers", "Thermals"] },
      { title: "Accessories", items: ["Backpacks", "Belts", "Sunglasses", "Luggage & Travel", "Frames", "Jewellery"] },
    ],
  },
  {
    name: "Women’s Clothing",
    products: [
      { title: "Western Wear", items: ["Tops", "T-Shirts", "Shirts", "Jeans & Jeggings", "Trousers & Capris"] },
      { title: "Fusion Wear", items: ["Sweaters & Sweatshirts", "Coats & Blazers", "Jackets & Waistcoats", "Shorts & Skirts", "Camisoles & Slips"] },
      { title: "Sports & Active Wear", items: ["Clothing", "Footwear", "T-Shirts", "Sports Accessories", "Sports Equipment"] },
      { title: "Lingerie & Sleepwear", items: ["Bras & Lingerie Sets", "Briefs", "Shapewear", "Sleepwear & Loungewear", "Camisoles & Thermals"] },
      { title: "Beauty & Personal Care", items: ["Makeup", "Skincare", "Premium Beauty", "Lipsticks"] },
      { title: "Accessories", items: ["Smart Bands", "Handbags"] },
    ],
  },
  {
    name: "Accessories",
    products: [],
  },
];

// ✅ Actual Products Data
export const products: ProductItem[] = [
  // Men's
  {
    id: 1,
    title: "Classic White T-Shirt",
    category: "Men’s Clothing",
    price: 25.0,
    image: "/images/mens_tshirt_white_1769413247505.png",
    featured: true,
    rating: 5,
    colors: ["#FFFFFF"],
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    title: "Slim Fit Jeans",
    category: "Men’s Clothing",
    price: 45.0,
    oldPrice: 60.0,
    image: "/images/mens_jeans_blue_1769413266092.png",
    featured: false,
    rating: 4,
    colors: ["#1E88E5"],
    sizes: ["30", "32", "34", "36"],
  },
  {
    id: 3,
    title: "Leather Biker Jacket",
    category: "Men’s Clothing",
    price: 150.0,
    oldPrice: 199.0,
    image: "/images/leather_jacket_black_1769413295399.png",
    featured: true,
    rating: 5,
    colors: ["#000000"],
    sizes: ["M", "L", "XL"],
  },

  // Women's
  {
    id: 4,
    title: "Floral Summer Dress",
    category: "Women’s Clothing",
    price: 55.0,
    image: "/images/womens_dress_floral_1769413280298.png",
    featured: true,
    rating: 5,
    colors: ["#FF4081"],
    sizes: ["XS", "S", "M", "L"],
  },

  // Accessories
  {
    id: 5,
    title: "Classic Leather Handbag",
    category: "Accessories",
    price: 85.0,
    oldPrice: 120.0,
    image: "/images/handbag_classic_1769413309814.png",
    featured: true,
    rating: 4,
    colors: ["#795548"],
    sizes: ["One Size"],
  },
];
