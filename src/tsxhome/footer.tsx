import styles from '../styles/footer.module.css'
import estrela from '/home/jota/portfoliole/public/images/estrelale.png'
export function Footer() {
    return (
        <div>
            <div className={styles.linhaFooter}></div>
            <div className={styles.footer}>
                <div className={styles.linksFooter}>
                    <li><a href="">HOME</a></li>
                    <li><a href="">Consultoria</a></li>
                    <li><a href="">Projetos</a></li>
                    <li><a href="">Serviços</a></li>
                    <li><a href="">Contato</a></li>
                </div>
                <div className={styles.contatoFooter}>
                    <li><a href="">Email</a></li>
                    <li><a href="">Linkedin</a></li>
                    <li><a href="">Whatsapp</a></li>
                </div>
                <div className={styles.tituloFooter}>
                    <div className={styles.tituloCom}>
                        <img src={estrela} alt="" />
                        <h1>Lethícia Araruna</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}