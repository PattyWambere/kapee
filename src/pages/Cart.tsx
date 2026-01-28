import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaMinus, FaPlus, FaChevronRight, FaShippingFast } from "react-icons/fa";
import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, subtotal } = useCart();
    const navigate = useNavigate();
    const shippingCost = 5.00; // Flat rate for now
    const total = subtotal + shippingCost;
    const freeShippingThreshold = 120;
    const progress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

    if (cartItems.length === 0) {
        return (
            <div className="bg-white">
                <div className="border-b border-gray-100 mb-20">
                    <div className="max-w-7xl mx-auto px-4 py-8 text-center">
                        <h1 className="text-4xl font-bold text-gray-800 mb-2 font-black uppercase tracking-tighter">Cart</h1>
                        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                            <Link to="/" className="hover:text-orange-500 transition">Home</Link>
                            <FaChevronRight size={8} />
                            <span>Cart</span>
                        </div>
                    </div>
                </div>
                <div className="max-w-7xl mx-auto px-4 py-20 text-center">
                    <div className="bg-gray-50 inline-block p-10 rounded-full mb-8">
                        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329065.png" alt="Empty Cart" className="w-24 opacity-20" />
                    </div>
                    <h2 className="text-2xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Your cart is currently empty.</h2>
                    <p className="text-gray-500 mb-8 max-w-md mx-auto font-medium">Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our "Shop" page.</p>
                    <Link
                        to="/shop"
                        className="inline-block bg-orange-500 hover:bg-black text-white font-black py-4 px-12 rounded-xl transition-all duration-300 shadow-xl shadow-orange-500/20 uppercase tracking-widest text-xs"
                    >
                        Return To Shop
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white pb-20">
            {/* Header */}
            <div className="border-b border-gray-100 mb-12">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Shopping Cart</h1>
                    <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em]">
                        <span className="text-gray-900">1. Shopping Cart</span>
                        <FaChevronRight size={8} className="text-gray-300" />
                        <span className="text-gray-300">2. Checkout</span>
                        <FaChevronRight size={8} className="text-gray-300" />
                        <span className="text-gray-300">3. Order Complete</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                {/* Free Shipping Message */}
                <div className="mb-12 bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-orange-50 text-orange-500 rounded-xl">
                                    <FaShippingFast size={24} />
                                </div>
                                <div>
                                    <p className="text-sm md:text-base font-black text-gray-900 uppercase tracking-tight">
                                        {subtotal >= freeShippingThreshold
                                            ? "Congratulations! You've unlocked FREE SHIPPING!"
                                            : `Add $${(freeShippingThreshold - subtotal).toFixed(2)} more for FREE SHIPPING`}
                                    </p>
                                    <p className="text-xs text-gray-400 font-medium">{subtotal >= freeShippingThreshold ? 'Your order qualifies for complimentary standard delivery' : 'Spend more to save on delivery fees'}</p>
                                </div>
                            </div>
                            <span className="text-xs font-black text-blue-600 bg-blue-50 px-3 py-1 rounded-full">{progress.toFixed(0)}% Complete</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-orange-500 transition-all duration-1000 ease-in-out"
                                style={{ width: `${progress}%` }}
                            />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
                    {/* Cart Items */}
                    <div className="lg:col-span-8">
                        {/* Desktop Table */}
                        <div className="hidden md:block overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-100 text-[10px] uppercase font-black tracking-[0.2em] text-gray-400 text-left">
                                        <th className="pb-8">Product Details</th>
                                        <th className="pb-8">Price</th>
                                        <th className="pb-8">Quantity</th>
                                        <th className="pb-8 text-right">Total</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {cartItems.map((item) => (
                                        <tr key={item.id} className="group">
                                            <td className="py-10">
                                                <div className="flex items-center gap-8">
                                                    <button
                                                        onClick={() => removeFromCart(item.id)}
                                                        className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-300 hover:bg-red-50 hover:text-red-500 transition-all duration-300"
                                                    >
                                                        <FaTrash size={14} />
                                                    </button>
                                                    <div className="w-24 h-32 bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100 shrink-0">
                                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                                    </div>
                                                    <div>
                                                        <Link to={`/shop/${item.id}`} className="font-black text-gray-900 hover:text-blue-600 transition-colors uppercase tracking-tight text-sm">
                                                            {item.title}
                                                        </Link>
                                                        <div className="text-[10px] uppercase font-bold text-gray-400 mt-2 flex gap-4">
                                                            <span>Size: {item.sizes?.[0] || 'L'}</span>
                                                            <span>SKU: #{item.id}00{item.id}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="py-10 text-sm font-black text-gray-900">
                                                ${item.price.toFixed(2)}
                                            </td>
                                            <td className="py-10">
                                                <div className="inline-flex items-center border-2 border-gray-100 rounded-lg overflow-hidden h-12">
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                        className="w-10 h-full flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors disabled:opacity-20"
                                                        disabled={item.quantity <= 1}
                                                    >
                                                        <FaMinus size={10} />
                                                    </button>
                                                    <span className="w-10 text-center font-black text-xs">{item.quantity}</span>
                                                    <button
                                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                        className="w-10 h-full flex items-center justify-center text-gray-400 hover:bg-gray-50 transition-colors"
                                                    >
                                                        <FaPlus size={10} />
                                                    </button>
                                                </div>
                                            </td>
                                            <td className="py-10 text-right font-black text-orange-500 text-base">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Mobile List View */}
                        <div className="md:hidden space-y-6">
                            {cartItems.map((item) => (
                                <div key={item.id} className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex gap-4">
                                    <div className="w-24 h-32 bg-gray-50 rounded-xl overflow-hidden shrink-0">
                                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-1 flex flex-col">
                                        <div className="flex justify-between items-start mb-2">
                                            <Link to={`/shop/${item.id}`} className="font-black text-xs uppercase tracking-tight text-gray-900 pr-4">{item.title}</Link>
                                            <button onClick={() => removeFromCart(item.id)} className="text-gray-300 active:text-red-500">
                                                <FaTrash size={12} />
                                            </button>
                                        </div>
                                        <div className="text-[10px] text-gray-400 font-bold mb-4">SIZE: {item.sizes?.[0] || 'L'}</div>
                                        <div className="mt-auto flex justify-between items-center">
                                            <div className="inline-flex items-center border border-gray-200 rounded-lg overflow-hidden h-9">
                                                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 flex items-center justify-center text-gray-400" disabled={item.quantity <= 1}><FaMinus size={8} /></button>
                                                <span className="w-8 text-center text-xs font-black">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 flex items-center justify-center text-gray-400"><FaPlus size={8} /></button>
                                            </div>
                                            <span className="font-black text-orange-500 text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-12 py-10 border-t border-gray-100">
                            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                                <input
                                    type="text"
                                    placeholder="COUPON CODE"
                                    className="border-2 border-gray-100 px-6 py-4 rounded-xl focus:border-blue-600 outline-none text-xs font-black tracking-widest w-full sm:w-72"
                                />
                                <button className="bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] px-10 py-4 rounded-xl hover:bg-blue-600 transition-all duration-300 shadow-xl">
                                    Apply
                                </button>
                            </div>
                            <button className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-orange-500 transition-colors border-b-2 border-transparent hover:border-orange-500">
                                Update Shopping Cart
                            </button>
                        </div>
                    </div>

                    {/* Cart Summary */}
                    <div className="lg:col-span-4">
                        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-gray-200/50 sticky top-32">
                            <h2 className="text-xl font-black text-gray-900 mb-10 uppercase tracking-tighter border-b border-gray-50 pb-6">Order Summary</h2>

                            <div className="space-y-6 mb-12">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest">Subtotal</span>
                                    <span className="text-lg font-black text-gray-900">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-start">
                                    <span className="text-xs font-black text-gray-400 uppercase tracking-widest mt-1">Shipping</span>
                                    <div className="text-right">
                                        <div className="flex items-center gap-2 font-black text-gray-900">
                                            <span className="text-xs">FLAT RATE:</span>
                                            <span className="text-orange-500">${shippingCost.toFixed(2)}</span>
                                        </div>
                                        <p className="text-[10px] text-gray-400 mt-2 font-medium">Standard shipping to California</p>
                                        <button className="text-[9px] font-black text-blue-600 underline uppercase mt-3 tracking-widest hover:text-black">Update Location</button>
                                    </div>
                                </div>
                                <div className="pt-8 border-t border-gray-100 flex justify-between items-center">
                                    <span className="text-base font-black text-gray-900 uppercase tracking-tighter">Net Total</span>
                                    <span className="text-2xl font-black text-blue-600">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => navigate("/checkout")}
                                className="w-full bg-orange-500 text-white font-black py-5 rounded-2xl shadow-2xl shadow-orange-500/30 hover:bg-black transition-all duration-500 uppercase text-xs tracking-[0.3em] active:scale-[0.98]"
                            >
                                Checkout Now
                            </button>

                            <div className="mt-8 flex justify-center gap-6 opacity-30 grayscale items-center">
                                <div className="text-xs font-black italic">VISA</div>
                                <div className="text-xs font-black italic">PayPal</div>
                                <div className="text-xs font-black italic">AMEX</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
