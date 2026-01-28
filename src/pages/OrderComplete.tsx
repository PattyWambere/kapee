import { Link } from "react-router-dom";
import { FaCheck, FaChevronRight, FaPrint, FaShoppingBag } from "react-icons/fa";

const OrderComplete = () => {
    return (
        <div className="bg-white min-h-screen pb-20">
            {/* Header */}
            <div className="border-b border-gray-100 mb-12">
                <div className="max-w-7xl mx-auto px-4 py-12 text-center">
                    <h1 className="text-4xl font-black text-gray-900 mb-4 uppercase tracking-tighter">Order Success</h1>
                    <div className="flex items-center justify-center gap-4 text-[10px] font-black uppercase tracking-[0.2em]">
                        <span className="text-gray-300">1. Shopping Cart</span>
                        <FaChevronRight size={8} className="text-gray-300" />
                        <span className="text-gray-300">2. Checkout</span>
                        <FaChevronRight size={8} className="text-gray-300" />
                        <span className="text-gray-900">3. Order Complete</span>
                    </div>
                </div>
            </div>

            <div className="max-w-3xl mx-auto px-4 py-10 md:py-20 text-center">
                <div className="flex justify-center mb-10">
                    <div className="relative">
                        <div className="absolute inset-0 bg-green-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                        <div className="relative w-24 h-24 bg-green-500 rounded-full flex items-center justify-center text-white shadow-2xl shadow-green-500/40">
                            <FaCheck size={40} />
                        </div>
                    </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 uppercase tracking-tighter">Awesome!</h1>
                <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto font-black uppercase tracking-tight leading-tight">
                    Your sweet treats are on the way. We've received your order and started the baking process.
                </p>

                <div className="bg-white border-2 border-gray-100 p-8 md:p-12 rounded-3xl mb-16 shadow-2xl shadow-gray-200/50">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-left">
                        <div className="col-span-1">
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Order number:</div>
                            <div className="text-gray-900 font-black text-sm tracking-tighter">#ORD-552901</div>
                        </div>

                        <div className="col-span-1">
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Order Date:</div>
                            <div className="text-gray-900 font-black text-sm tracking-tighter">{new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                        </div>

                        <div className="col-span-1">
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Net Total:</div>
                            <div className="text-blue-600 font-black text-sm tracking-tighter">$125.00</div>
                        </div>

                        <div className="col-span-1">
                            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3">Method:</div>
                            <div className="text-gray-900 font-black text-sm tracking-tighter uppercase whitespace-nowrap">Express</div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/shop"
                        className="bg-orange-500 text-white px-12 py-5 rounded-2xl shadow-2xl shadow-orange-500/30 hover:bg-black transition-all duration-500 font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3"
                    >
                        <FaShoppingBag size={14} />
                        Continue Shopping
                    </Link>
                    <button
                        className="bg-gray-100 text-gray-400 px-12 py-5 rounded-2xl hover:bg-blue-600 hover:text-white transition-all duration-500 font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3"
                    >
                        <FaPrint size={14} />
                        Print Receipt
                    </button>
                </div>

                <p className="mt-12 text-[10px] font-black text-gray-400 uppercase tracking-[0.3em]">
                    A confirmation email has been sent to your inbox.
                </p>
            </div>
        </div>
    );
};

export default OrderComplete;
