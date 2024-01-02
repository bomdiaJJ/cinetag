import { ReactElement, createContext, useState } from "react";
import VideoInterface from "../interfaces/video";

export interface FavoritosContextType {
    favoritos: VideoInterface[];
    setFavoritos: React.Dispatch<React.SetStateAction<VideoInterface[]>>;
}

interface FavoritosProviderProps {
    children: ReactElement
}

export const FavoritosContext = createContext<FavoritosContextType | undefined>(undefined);
FavoritosContext.displayName = "Favoritos"

export default function FavoritosProvider({ children }: FavoritosProviderProps) {
    const [favoritos, setFavoritos] = useState<VideoInterface[]>([]);

    return (
        <FavoritosContext.Provider value={{ favoritos, setFavoritos }}>
            {children}
        </FavoritosContext.Provider>
    )
}