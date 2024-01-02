import { useParams } from 'react-router-dom'
import Banner from '../../components/Banner'
import Titulo from '../../components/Titulo'
import styles from './Player.module.css'
import VideoInterface from '../../interfaces/video'
import NaoEncontrada from '../NaoEncontrada'
import { useEffect, useState } from 'react'

function Player () {
    const [videos, setVideos] = useState<VideoInterface[]>([]);
    const parametros = useParams();

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/bomdiajj/cinetag-api/videos?id=${parametros.id}`)
        .then(resposta => resposta.json())
        .then(dados => {
            setVideos(dados)
        })
    }, [parametros.id])

    if (videos.length === 0) {
        return <NaoEncontrada/>
    }

    return(
        <>
            <Banner nomeImagem='player'/>
            <Titulo>
                <h1>
                    Player: {videos[0].titulo}
                </h1>
            </Titulo>

            <section className={styles.container}>
                <iframe
                    width="100%"
                    height="100%"
                    src={videos[0].link}
                    title={videos[0].titulo}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>
        </>
        
        // <div className={styles.Player}>

        // </div>
    )
}

export default Player 