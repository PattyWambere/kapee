import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/shop/ProductCard";
import { products } from "../data/Products";
import { FaShippingFast, FaUndo, FaHandHoldingUsd, FaHistory } from "react-icons/fa";

const carouselSlides = [
  {
    title: "MEN'S CLOTHES",
    subtitle: "NEW COLLECTIONS 2019",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor!",
    cta: "SHOP NOW",
    bg: "bg-white",
    image: "/images/mens_banner.jpg", // Placeholder - in real app would use actual image
    align: "center",
    textColor: "text-black",
  },
  {
    title: "HUGE SALE",
    subtitle: "FASHION COLLECTION",
    description: "MIN. 40-80% OFF",
    cta: "SHOP NOW",
    bg: "bg-white",
    image: "/images/womens_banner.jpg",
    align: "right",
    textColor: "text-black",
  },
  {
    title: "Fashion Accessories",
    subtitle: "Festive Feast",
    description: "Minimum 50% Off",
    cta: "SHOP NOW",
    bg: "bg-white",
    image: "/images/accessories_banner.jpg",
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
    <div className="overflow-hidden">
      {/* Hero Carousel */}
      <div className="relative w-full h-[400px] md:h-[600px] lg:h-[700px] overflow-hidden bg-gray-50 group">
        {carouselSlides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 transform
            ${idx === currentSlide ? "opacity-100 z-10 scale-100" : "opacity-0 z-0 scale-105"}`}
          >
            {/* Background Image (Mocked) */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent z-0 opacity-50" />

            {/* Slide Content */}
            <div className="max-w-7xl mx-auto w-full px-6 flex items-center h-full z-10">
              <div
                className={`w-full ${slide.align === "right" ? "md:text-right md:ml-auto" : "text-center md:text-left"} max-w-2xl transform transition-all delay-300 duration-700 ${idx === currentSlide ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <p className="text-blue-600 font-bold tracking-[0.3em] uppercase mb-4 text-xs md:text-sm">
                  {slide.subtitle}
                </p>
                <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-6 text-gray-900 leading-tight uppercase tracking-tighter shadow-sm">
                  {slide.title}
                </h2>
                <div className="h-1 w-20 bg-orange-500 mb-8 md:mb-10 ${slide.align === 'right' ? 'md:ml-auto' : 'mx-auto md:mx-0'}" />
                <p className="text-gray-500 mb-10 text-sm md:text-xl font-medium max-w-lg ${slide.align === 'right' ? 'md:ml-auto' : ''}">
                  {slide.description}
                </p>
                <button className="bg-blue-600 text-white hover:bg-black px-10 py-4 uppercase text-[10px] md:text-xs font-bold tracking-[0.2em] transition-all duration-300 shadow-xl hover:shadow-2xl active:scale-95">
                  {slide.cta}
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 md:inset-x-10 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
          <button
            className="w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur shadow-xl rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-auto active:scale-90"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === 0 ? carouselSlides.length - 1 : prev - 1,
              )
            }
          >
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button
            className="w-10 h-10 md:w-14 md:h-14 bg-white/90 backdrop-blur shadow-xl rounded-full flex items-center justify-center text-gray-800 hover:bg-blue-600 hover:text-white transition-all duration-300 opacity-0 group-hover:opacity-100 pointer-events-auto active:scale-90"
            onClick={() =>
              setCurrentSlide((prev) =>
                prev === carouselSlides.length - 1 ? 0 : prev + 1,
              )
            }
          >
            <i className="fa-solid fa-angle-right"></i>
          </button>
        </div>

        {/* Dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
          {carouselSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 transition-all duration-300 rounded-full ${i === currentSlide ? 'w-8 bg-blue-600' : 'w-4 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      {/* Category Highlights */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {categoryHighlights.map((cat, idx) => (
          <div
            key={idx}
            className="relative overflow-hidden group cursor-pointer aspect-[4/3] rounded-2xl bg-gray-100 flex items-center p-8 md:p-12 transition-all duration-500 hover:shadow-2xl border border-gray-50"
          >
            <div className="relative z-10 w-2/3">
              <h3 className="text-xl md:text-2xl font-black uppercase mb-1 leading-tight text-gray-900 tracking-tighter">
                <span className="block">{cat.name}</span>
                <span className="block">{cat.info}</span>
              </h3>
              <p className="text-blue-600 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-6">
                {cat.discount}
              </p>
              <button className="border-b-2 border-blue-600 text-blue-600 text-[10px] font-bold uppercase tracking-widest hover:text-orange-500 hover:border-orange-500 transition-all duration-300 pb-1">
                Shop Now
              </button>
            </div>
            {/* Background Decoration */}
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-600/5 rounded-full group-hover:scale-150 transition-transform duration-700" />
            <div className="absolute right-4 top-4 text-8xl font-black text-gray-200/20 group-hover:text-blue-600/10 transition-colors duration-500 select-none">
              0{idx + 1}
            </div>
          </div>
        ))}
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter mb-2">Featured Products</h2>
            <p className="text-gray-400 font-medium italic">Our most loved collections this season</p>
          </div>
          <div className="flex gap-4">
            <Link to="/shop" className="text-xs font-bold uppercase tracking-widest text-blue-600 hover:text-orange-500 transition border-b-2 border-blue-600 hover:border-orange-500 pb-1">View All Collection</Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-gray-50 border-y border-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {[
            { icon: <FaShippingFast />, title: 'Free Shipping', desc: 'On all orders over $99' },
            { icon: <FaUndo />, title: 'Money Return', desc: '30 days money back guarantee' },
            { icon: <FaHandHoldingUsd />, title: 'Best Price', desc: 'Guaranteed lowest prices' },
            { icon: <FaHistory />, title: '24/7 Support', desc: 'Dedicated support whenever' }
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-4 group">
              <div className="text-3xl text-orange-500 bg-white shadow-xl p-5 rounded-2xl group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                {item.icon}
              </div>
              <div>
                <h4 className="font-black uppercase tracking-widest text-sm mb-1">{item.title}</h4>
                <p className="text-xs text-gray-400 font-medium">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
