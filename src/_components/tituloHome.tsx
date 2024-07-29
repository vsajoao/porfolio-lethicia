import estrela from '/home/jota/portfoliole/public/images/estrelale.png'
import styles from './tituloHome.module.css'
interface TituloProps {
    texto: string;
}
export function TituloHome({ texto }: TituloProps) {
    return (
        <div className={styles.tituloCom}>
            <img src={estrela} alt="" />
            <h1>{texto}</h1>
        </div>
    )
}