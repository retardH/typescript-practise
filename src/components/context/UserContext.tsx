import { createContext, useState } from "react";

export interface AuthUser {
    name: string,
    email: string,
}

interface UserContextProviderProps {
    children: React.ReactNode,
}

interface UserContextType {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>,
}

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = (props: UserContextProviderProps) => {
    const [user, setUserr] = useState<AuthUser | null>(null);
    return (
            <UserContext.Provider value={{
                user,
                setUser: setUserr,
            }}>
                {props.children}
            </UserContext.Provider>
        );
}
