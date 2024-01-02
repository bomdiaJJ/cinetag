import { useFavoritosContext } from '../../hooks/useFavoritosContext'
import styles from './Card.module.css'
import iconeFavoritar from './favoritar.png'
import iconeDesfavoritar from './desfavoritar.png'
import { Link } from 'react-router-dom'

interface CardProps {
    id: number
    titulo: string
    capa: string
}

function Card({id, titulo, capa}: CardProps) {
    const {favoritos, adicionarFavorito} = useFavoritosContext()
    const eFavorito = favoritos?.some((fav) => fav.id === id)
    const icone = eFavorito ? iconeDesfavoritar : iconeFavoritar; 

    return(
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.capa} />
                
                <h2>
                    {titulo}
                </h2>
            </Link>

            <img
                src={icone}
                alt="Favoritar filme"
                className={styles.favoritar}
                onClick={
                    () => {adicionarFavorito({
                        id, titulo, capa, link: ''})
                    }
                }
            />
        </div>
    )
}

export default Card 