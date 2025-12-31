import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { User, authService } from '@/services/authService';
import { useToast } from '@/hooks/use-toast';

interface AuthContextType {
    user: User | null;
    isLoading: boolean;
    login: (email: string, password: string) => Promise<void>;
    signup: (name: string, email: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const { toast } = useToast();

    useEffect(() => {
        // Check for persisted user on mount
        const storedUser = localStorage.getItem('chart_auth_user');
        if (storedUser) {
            try {
                setUser(JSON.parse(storedUser));
            } catch (e) {
                console.error("Failed to parse stored user", e);
                localStorage.removeItem('chart_auth_user');
            }
        }
        setIsLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        setIsLoading(true);
        try {
            const user = await authService.login(email, password);
            setUser(user);
            localStorage.setItem('chart_auth_user', JSON.stringify(user));
            toast({
                title: "Welcome back!",
                description: `Logged in as ${user.name}`,
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Login failed",
                description: error instanceof Error ? error.message : "An error occurred",
            });
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const signup = async (name: string, email: string, password: string) => {
        setIsLoading(true);
        try {
            const user = await authService.signup(name, email, password);
            setUser(user);
            localStorage.setItem('chart_auth_user', JSON.stringify(user));
            toast({
                title: "Account created!",
                description: `Welcome, ${user.name}!`,
            });
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Signup failed",
                description: error instanceof Error ? error.message : "An error occurred",
            });
            throw error;
        } finally {
            setIsLoading(false);
        }
    };

    const logout = async () => {
        setIsLoading(true);
        try {
            await authService.logout();
            setUser(null);
            localStorage.removeItem('nepse_auth_user');
            toast({
                title: "Logged out",
                description: "See you next time!",
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider value={{ user, isLoading, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
