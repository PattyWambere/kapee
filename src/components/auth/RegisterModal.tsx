import { useState } from "react";
import { FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuth } from "../../context/AuthContext";

interface RegisterModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitchToLogin: () => void;
}

const RegisterModal = ({ isOpen, onClose, onSwitchToLogin }: RegisterModalProps) => {
    const { register } = useAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");

        if (!name || !email || !password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters");
            return;
        }

        if (!agreeToTerms) {
            setError("Please agree to the terms and conditions");
            return;
        }

        setIsLoading(true);
        const success = await register(name, email, password);
        setIsLoading(false);

        if (success) {
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
            onClose();
        } else {
            setError("Email already exists. Please login instead.");
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm">
            <div className="relative w-full max-w-4xl mx-4 bg-white rounded-lg shadow-2xl overflow-hidden animate-fadeIn">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 transition"
                >
                    <FaTimes size={20} />
                </button>

                <div className="grid md:grid-cols-2">
                    {/* Left Panel - Blue */}
                    <div className="bg-blue-600 text-white p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-black uppercase tracking-tight mb-4">Register</h2>
                        <p className="text-blue-100 mb-8">
                            Signup for FREE and get access to exclusive deals and personalized recommendations
                        </p>
                        <ul className="space-y-3 text-sm text-blue-100">
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-check"></i>
                                <span>Fast & Easy Checkout</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-check"></i>
                                <span>Exclusive Member Deals</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <i className="fa-solid fa-check"></i>
                                <span>Order Tracking & History</span>
                            </li>
                        </ul>
                    </div>

                    {/* Right Panel - Form */}
                    <div className="p-12">
                        <form onSubmit={handleSubmit} className="space-y-4">
                            {error && (
                                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded text-sm">
                                    {error}
                                </div>
                            )}

                            {/* Name */}
                            <div>
                                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                    Full Name
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-blue-500 focus:outline-none text-sm"
                                    placeholder="Enter your name"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label htmlFor="reg-email" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <input
                                    id="reg-email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-300 focus:border-blue-500 focus:outline-none text-sm"
                                    placeholder="Enter your email"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label htmlFor="reg-password" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="reg-password"
                                        type={showPassword ? "text" : "password"}
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="w-full px-4 py-3 pr-12 border border-gray-300 focus:border-blue-500 focus:outline-none text-sm"
                                        placeholder="Min. 6 characters"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                    </button>
                                </div>
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label htmlFor="confirm-password" className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <input
                                        id="confirm-password"
                                        type={showConfirmPassword ? "text" : "password"}
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="w-full px-4 py-3 pr-12 border border-gray-300 focus:border-blue-500 focus:outline-none text-sm"
                                        placeholder="Re-enter password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                    >
                                        {showConfirmPassword ? <FaEyeSlash size={16} /> : <FaEye size={16} />}
                                    </button>
                                </div>
                            </div>

                            {/* Terms and Conditions */}
                            <div className="flex items-start gap-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={agreeToTerms}
                                    onChange={(e) => setAgreeToTerms(e.target.checked)}
                                    className="w-4 h-4 mt-1 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer">
                                    I agree to the{" "}
                                    <button type="button" className="text-blue-600 hover:underline">
                                        Terms & Conditions
                                    </button>
                                </label>
                            </div>

                            {/* Register Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-blue-600 text-white py-3 font-bold uppercase tracking-wider hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? "Creating Account..." : "REGISTER"}
                            </button>

                            {/* Login Link */}
                            <div className="text-center text-sm text-gray-600">
                                Already have an account?{" "}
                                <button
                                    type="button"
                                    onClick={onSwitchToLogin}
                                    className="text-blue-600 font-bold hover:underline"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterModal;
