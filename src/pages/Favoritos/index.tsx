import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import styles from './Favoritos.module.css'
import Card from '../../components/Card';
import { useFavoritosContext } from '../../hooks/useFavoritosContext';

function Favoritos () {
    const {favoritos} = useFavoritosContext()

    return (
        <>
            <Banner nomeImagem="favoritos" />

            <Titulo>
                <h1>
                    Meus favoritos
                </h1>
            </Titulo>

            <section className={styles.container}>
                {favoritos?.map((video) => <Card {...video} key={video.id} />)}
            </section>
        </>
    )
}

export default Favoritos 