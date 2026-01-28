import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
    id: string;
    name: string;
    email: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    register: (name: string, email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    // Load user from localStorage on mount
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = async (email: string, password: string): Promise<boolean> => {
        // Simulate API call
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const foundUser = users.find((u: any) => u.email === email && u.password === password);

        if (foundUser) {
            const userData = { id: foundUser.id, name: foundUser.name, email: foundUser.email };
            setUser(userData);
            localStorage.setItem("user", JSON.stringify(userData));
            return true;
        }
        return false;
    };

    const register = async (name: string, email: string, password: string): Promise<boolean> => {
        // Check if user already exists
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const existingUser = users.find((u: any) => u.email === email);

        if (existingUser) {
            return false; // User already exists
        }

        // Create new user
        const newUser = {
            id: Date.now().toString(),
            name,
            email,
            password, // In production, this should be hashed
        };

        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        // Auto-login after registration
        const userData = { id: newUser.id, name: newUser.name, email: newUser.email };
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        return true;
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };

    const isAuthenticated = !!user;

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
