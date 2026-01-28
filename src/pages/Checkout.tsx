import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaChevronRight, FaLock, FaPaypal, FaCreditCard, FaUniversity } from "react-icons/fa";

const Checkout = () => {
    const { cartItems, subtotal, clearCart } = useCart();
    const navigate = useNavigate();
    const shippingCost = 5.0;
    const total = subtotal + shippingCost;

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "United States (US)",
        streetAddress: "",
        apartment: "",
        city: "",
        state: "California",
        zipCode: "",
        phone: "",
        email: "",
        orderNotes: "",
    });

    const [paymentMethod, setPaymentMethod] = useState("bank");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        clearCart();
        navigate("/order-complete");
    };

    if (cartItems.length === 0) {
        return (
            <div className="bg-white min-h-screen">
                <div className="border-b border-gray-100 mb-20">
                    <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                        <h1 className="text-4xl font-black text-gray-900 mb-2 uppercase tracking-tighter">Checkout</h1>
                        <div className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                            <Link to="/" className="hover:text-orange-500">Home</Link>
                            <FaChevronRight size={8} />
                            <span>Checkout</span>
                        </div>
                    </div>
                </div>
                <div className="text-center py-20 px-4">
                    <h2 className="text-2xl font-black mb-4 uppercase tracking-tighter">Your cart is empty.</h2>
                    <p className="text-gray-500 mb-8 font-medium">You need to add items to your cart before you can checkout.</p>
                    <Link
                        to="/shop"
                        className="bg-orange-500 text-white px-12 py-4 rounded-xl font-black hover:bg-black transition-all duration-300 shadow-xl shadow-orange-500/20 uppercase tracking-widest text-xs"
                    >
                        Return To Shop
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <div className="border-b border-gray-100 mb-12">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Checkout</h1>
                    <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em]">
                        <Link to="/cart" className="text-gray-300 hover:text-orange-500 transition">1. Shopping Cart</Link>
                        <FaChevronRight size={8} className="text-gray-300" />
                        <span className="text-gray-900">2. Checkout</span>
                        <FaChevronRight size={8} className="text-gray-300" />
                        <span className="text-gray-300">3. Order Complete</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">

                    {/* Billing Details - Left Side */}
                    <div className="lg:col-span-7">
                        <h2 className="text-2xl font-black mb-10 text-gray-900 uppercase tracking-tighter border-b-2 border-orange-500 inline-block pb-2">Billing details</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">First name *</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    required
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Last name *</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    required
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold"
                                />
                            </div>
                        </div>

                        <div className="mb-6 md:mb-8">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Company name (optional)</label>
                            <input
                                type="text"
                                name="companyName"
                                value={formData.companyName}
                                onChange={handleInputChange}
                                className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold"
                            />
                        </div>

                        <div className="mb-6 md:mb-8">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Country / Region *</label>
                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleInputChange}
                                className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold appearance-none cursor-pointer"
                            >
                                <option>United States (US)</option>
                                <option>United Kingdom (UK)</option>
                                <option>Canada</option>
                                <option>France</option>
                            </select>
                        </div>

                        <div className="mb-6 md:mb-8">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Street address *</label>
                            <input
                                type="text"
                                name="streetAddress"
                                required
                                placeholder="House number and street name"
                                value={formData.streetAddress}
                                onChange={handleInputChange}
                                className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold mb-4"
                            />
                            <input
                                type="text"
                                name="apartment"
                                placeholder="Apartment, suite, unit, etc. (optional)"
                                value={formData.apartment}
                                onChange={handleInputChange}
                                className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Town / City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    required
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">State *</label>
                                <select
                                    name="state"
                                    value={formData.state}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold appearance-none cursor-pointer"
                                >
                                    <option>California</option>
                                    <option>New York</option>
                                    <option>Texas</option>
                                    <option>Florida</option>
                                </select>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-6 md:mb-8">
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">ZIP Code *</label>
                                <input
                                    type="text"
                                    name="zipCode"
                                    required
                                    value={formData.zipCode}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold"
                                />
                            </div>
                            <div>
                                <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Phone *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    required
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold"
                                />
                            </div>
                        </div>

                        <div className="mb-6 md:mb-8">
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Email address *</label>
                            <input
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold"
                            />
                        </div>

                        <div className="mt-12">
                            <h3 className="text-xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Additional information</h3>
                            <label className="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] mb-3">Order notes (optional)</label>
                            <textarea
                                name="orderNotes"
                                rows={4}
                                placeholder="Notes about your order, e.g. special notes for delivery."
                                value={formData.orderNotes}
                                onChange={handleInputChange}
                                className="w-full border-2 border-gray-100 bg-gray-50 rounded-xl px-6 py-4 focus:outline-none focus:border-blue-600 focus:bg-white transition-all text-sm font-bold resize-none"
                            ></textarea>
                        </div>
                    </div>

                    {/* Order Summary - Right Side */}
                    <div className="lg:col-span-5">
                        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-100 shadow-2xl shadow-gray-200/50 sticky top-32">
                            <h2 className="text-xl font-black text-gray-900 mb-8 uppercase tracking-tighter border-b border-gray-50 pb-6">Your order</h2>

                            <div className="mb-8">
                                <div className="flex justify-between text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-6">
                                    <span>Product</span>
                                    <span>Subtotal</span>
                                </div>
                                <div className="space-y-6 mb-8 max-h-[300px] overflow-y-auto pr-4 custom-scrollbar">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="flex justify-between items-center group">
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-20 bg-gray-50 rounded-xl border border-gray-100 overflow-hidden flex-shrink-0">
                                                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                                                </div>
                                                <div>
                                                    <span className="text-sm font-black text-gray-900 line-clamp-1 uppercase tracking-tight">{item.title}</span>
                                                    <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">× {item.quantity}</span>
                                                </div>
                                            </div>
                                            <span className="font-black text-gray-900 text-sm whitespace-nowrap">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="space-y-6 py-8 border-t border-b border-gray-50 mb-10">
                                    <div className="flex justify-between items-center text-xs font-black uppercase tracking-widest text-gray-400">
                                        <span>Subtotal</span>
                                        <span className="text-gray-900 font-black">${subtotal.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between items-start text-xs font-black uppercase tracking-widest text-gray-400">
                                        <span>Shipping</span>
                                        <div className="text-right">
                                            <span className="text-orange-500 font-black">FLAT RATE: ${shippingCost.toFixed(2)}</span>
                                        </div>
                                    </div>
                                    <div className="pt-4 flex justify-between items-center">
                                        <span className="text-lg font-black text-gray-900 uppercase tracking-tighter">Total</span>
                                        <span className="text-2xl font-black text-blue-600">${total.toFixed(2)}</span>
                                    </div>
                                </div>

                                {/* Payment Methods */}
                                <div className="space-y-4 mb-10">
                                    <div
                                        onClick={() => setPaymentMethod('bank')}
                                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${paymentMethod === 'bank' ? 'bg-orange-50/30 border-orange-500 shadow-lg shadow-orange-500/10' : 'bg-white border-gray-100 hover:border-gray-200'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'bank' ? 'border-orange-500 bg-orange-500' : 'border-gray-200'}`}>
                                                {paymentMethod === 'bank' && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <FaUniversity className={paymentMethod === 'bank' ? 'text-orange-500' : 'text-gray-300'} />
                                                <span className="font-black text-[11px] uppercase tracking-[0.1em] text-gray-900">Direct Bank Transfer</span>
                                            </div>
                                        </div>
                                        {paymentMethod === 'bank' && (
                                            <p className="text-[10px] text-gray-500 leading-relaxed font-bold mt-4 pt-4 border-t border-orange-100">
                                                Make your payment directly into our bank account. Please use your Order ID as the payment reference.
                                            </p>
                                        )}
                                    </div>

                                    <div
                                        onClick={() => setPaymentMethod('cod')}
                                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${paymentMethod === 'cod' ? 'bg-orange-50/30 border-orange-500 shadow-lg shadow-orange-500/10' : 'bg-white border-gray-100 hover:border-gray-200'}`}
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'cod' ? 'border-orange-500 bg-orange-500' : 'border-gray-200'}`}>
                                                {paymentMethod === 'cod' && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <FaCreditCard className={paymentMethod === 'cod' ? 'text-orange-500' : 'text-gray-300'} />
                                                <span className="font-black text-[11px] uppercase tracking-[0.1em] text-gray-900">Cash on Delivery</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div
                                        onClick={() => setPaymentMethod('paypal')}
                                        className={`p-5 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${paymentMethod === 'paypal' ? 'bg-orange-50/30 border-orange-500 shadow-lg shadow-orange-500/10' : 'bg-white border-gray-100 hover:border-gray-200'}`}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${paymentMethod === 'paypal' ? 'border-orange-500 bg-orange-500' : 'border-gray-200'}`}>
                                                    {paymentMethod === 'paypal' && <div className="w-2.5 h-2.5 rounded-full bg-white"></div>}
                                                </div>
                                                <div className="flex items-center gap-3">
                                                    <FaPaypal className={paymentMethod === 'paypal' ? 'text-orange-500' : 'text-gray-300'} />
                                                    <span className="font-black text-[11px] uppercase tracking-[0.1em] text-gray-900">PayPal Express</span>
                                                </div>
                                            </div>
                                            <div className="flex gap-1 opacity-50 grayscale">
                                                <div className="text-[8px] font-black italic">MASTERCARD</div>
                                                <div className="text-[8px] font-black italic">AMEX</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-orange-500 text-white font-black py-5 rounded-2xl shadow-2xl shadow-orange-500/30 hover:bg-black transition-all duration-500 uppercase text-xs tracking-[0.3em] flex items-center justify-center gap-4 active:scale-[0.98]"
                                >
                                    <FaLock size={12} />
                                    Complete Order Now
                                </button>

                                <p className="text-[10px] text-gray-400 text-center mt-8 leading-relaxed font-bold uppercase tracking-widest">
                                    Secure 256-bit SSL encrypted checkout
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Checkout;
