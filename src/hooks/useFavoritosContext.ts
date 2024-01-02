import { useContext } from "react";
import VideoInterface from "../interfaces/video";
import { FavoritosContext} from "../contextos/Favoritos";

export function useFavoritosContext() {
    const context = useContext(FavoritosContext);
    const favoritos = context?.favoritos;

    function adicionarFavorito(novoFavorito: VideoInterface) {
        if (!context) {
            throw new Error('useFavoritosContext deve ser usado dentro de um FavoritosProvider');
        }

        const favoritoRepetido = context.favoritos.some(favorito => favorito.id === novoFavorito.id);
        let novaLista = [...context.favoritos];

        if (!favoritoRepetido) {
            novaLista.push(novoFavorito);
            return context.setFavoritos(novaLista);
        }

        novaLista = context.favoritos.filter((favorito) => favorito.id !== novoFavorito.id);
        return context.setFavoritos(novaLista);
    }

    return {
        favoritos,
        adicionarFavorito
    }
}
