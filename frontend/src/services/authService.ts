export interface User {
    id: string;
    name: string;
    email: string;
    avatar?: string;
}

const MOCK_DELAY = 800;

export const authService = {
    login: async (email: string, password: string): Promise<User> => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (password === "password") { // Mock password check
                    resolve({
                        id: "1",
                        name: "Demo User",
                        email: email,
                        avatar: "https://github.com/shadcn.png"
                    });
                } else {
                    reject(new Error("Invalid credentials"));
                }
            }, MOCK_DELAY);
        });
    },

    signup: async (name: string, email: string, password: string): Promise<User> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: "1",
                    name: name,
                    email: email,
                    avatar: "https://github.com/shadcn.png"
                });
            }, MOCK_DELAY);
        });
    },

    logout: async (): Promise<void> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, MOCK_DELAY / 2);
        });
    }
};
