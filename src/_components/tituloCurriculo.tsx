import styles from './titulo.module.css';

interface TituloProps {
    texto: string;
}

export function Titulo({ texto }: TituloProps) {
    return (
        <h1 className={styles.titulo}>{texto}</h1>
    );
}