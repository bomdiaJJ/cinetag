import styles from './Banner.module.css'

interface BannerProps {
    nomeImagem: string
}

function Banner ({ nomeImagem  } : BannerProps ) {
    return(
        <div
            className={styles.capa}
            style={{backgroundImage: `url('/imagens/banner-${nomeImagem}.png')`}}
        >

        </div>
    )
}

export default Banner 