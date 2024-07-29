
import Botao from '../botao/botao';
import styles from './page.module.css'
interface PageProps {
    empresa: string;
    funcao: string;
    texto: string;
    img1: string;
    img2: string;
    textoBotao: string;
    linkBotao: string;
}
const Page: React.FC<PageProps> = ({ empresa, funcao, texto, img1, img2, textoBotao, linkBotao }) => {
    return (
        <div className={styles.home}>
            <section className={styles.containerTitulo}>
                <div className={styles.containerTexto}>
                    <Botao
                        textoBotao={textoBotao}
                        linkBotao={linkBotao} />
                    <h3>{empresa}</h3>
                    <h1>{funcao}</h1>
                    <div className={styles.containerAzul}>
                        <p>{texto}</p>
                    </div>
                </div>
                <div className={styles.containerImg1}>
                    <img src={img1} alt='img' />
                </div>
                <div className={styles.containerImg2}>
                    <img src={img2} alt='' />
                </div>
            </section>
        </div>
    )
}
export default Page;