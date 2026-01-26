import { useState, useEffect } from "react";

import ProductCard from "../components/shop/ProductCard";
import { products } from "../data/Products";

const carouselSlides = [
  {
    title: "MEN'S CLOTHES",
    subtitle: "NEW COLLECTIONS 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor!",
    cta: "SHOP NOW",
    bg: "bg-white",
    image: "/images/mens_banner.png", // Placeholder - in real app would use actual image
    align: "center",
    textColor: "text-black",
  },
  {
    title: "HUGE SALE",
    subtitle: "FASHION COLLECTION",
    description: "MIN. 40-80% OFF",
    cta: "SHOP NOW",
    bg: "bg-white",
    image: "/images/womens_banner.png",
    align: "right",
    textColor: "text-black",
  },
  {
    title: "Fashion Accessories",
    subtitle: "Festive Feast",
    description: "Minimum 50% Off",
    cta: "SHOP NOW",
    bg: "bg-white",
    image: "/images/accessories_banner.png",
    align: "center",
    textColor: "text-black",
  },
];

const categoryHighlights = [
  { name: "MEN'S", info: "COLLECTIONS", discount: "MIN. 50% OFF" },
  { name: "WOMEN'S", info: "COLLECTIONS", discount: "NEW FASHION" },
  { name: "FASHION'S", info: "ACCESSORIES", discount: "UP TO 60% OFF" },
];

// Mock banner images using placeholder if not available.
// In a real implementation I would upload the images from your attachments to public/images/
// For now I'll style it to look like the layout even without the specific background images if they are missing,
// but relying on text placement.

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const featuredProducts = products.filter((p) => p.featured);

  // Auto-slide every 5s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Carousel */}
      <div className="relative w-full h-[500px] overflow-hidden bg-gray-50 group">
        {/* Background Image Area (Mocked with gray for now, ideally strictly images) */}
        {/* 
            Since I cannot "see" the uploaded files in the file system to move them, 
            I will style the text over a neutral background to match the structure. 
            The user can replace the background images.
         */}
        {carouselSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000
            ${idx === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"}
            ${slide.bg}`}
          >
            {/* Slide Content */}
            <div
              className={`max-w-7xl mx-auto w-full px-4 flex ${slide.align === "right" ? "justify-end" : "justify-center"} items-center h-full`}
            >
              <div
                className={`text-center ${slide.align === "right" ? "text-right md:w-1/2" : "max-w-2xl"} ${slide.textColor}`}
              >
                <p className="text-blue-500 font-semibold tracking-wider uppercase mb-2">
                  {slide.subtitle}
                </p>
                <h2 className="text-5xl md:text-6xl font-bold mb-4 font-serif">
                  {slide.title}
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  {slide.description}
                </p>
                <button className="border border-blue-500 text-blue-500 hover:bg-blue-600 hover:text-white px-8 py-3 uppercase text-sm font-semibold transition tracking-wider">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition opacity-0 group-hover:opacity-100"
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === 0 ? carouselSlides.length - 1 : prev - 1,
            )
          }
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <button
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md flex items-center justify-center text-gray-500 hover:bg-blue-600 hover:text-white transition opacity-0 group-hover:opacity-100"
          onClick={() =>
            setCurrentSlide((prev) =>
              prev === carouselSlides.length - 1 ? 0 : prev + 1,
            )
          }
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>

      {/* Category Highlights */}
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {categoryHighlights.map((cat, idx) => (
          <div
            key={idx}
            className="flex items-center bg-gray-50 p-6 group cursor-pointer hover:shadow-md transition"
          >
            {/* Image Placeholder */}
            <div className="w-1/2">{/* Placeholder for category image */}</div>

            {/* Text Content */}
            <div className="w-1/2">
              <h3 className="text-lg font-bold uppercase mb-1 leading-tight">
                <span className="block">{cat.name}</span>
                <span className="block">{cat.info}</span>
              </h3>
              <p className="text-blue-500 text-xs font-bold uppercase mb-4">
                {cat.discount}
              </p>
              <button className="bg-blue-600 text-white px-4 py-2 text-xs font-bold uppercase hover:bg-blue-700 transition">
                Shop Now
              </button>
            </div>
          </div>
        ))}
        {/* Note: In the screenshots, these categories have specific layouts and images (Men, Women, Accessories). 
             I've mocked the structure. The mock data above tries to represent 'MEN'S COLLECTIONS', 'WOMEN'S COLLECTIONS' etc.
         */}
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
