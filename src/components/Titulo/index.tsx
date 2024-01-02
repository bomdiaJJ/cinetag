import { ReactElement } from 'react'
import styles from './Titulo.module.css'

interface TituloProps {
    children: ReactElement | string
}

function Titulo ({ children }: TituloProps ) {
    return(
        <div className={styles.texto}>
            {children}
        </div>
    )
}

export default Titulo 