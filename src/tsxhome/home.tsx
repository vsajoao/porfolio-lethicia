import Botao from '../_components/botao/botao';
import styles from '../styles/homeCss.module.css'
import imgHome from '/public/images/fotohome-removebg-preview.png'
export function Home() {
    return (
        <div id='home' className={styles.containerHome}>
            <div className={styles.containerText}>
                <h1>OLÁ,</h1>
                <h2>EU SOU A LETHÍCIA</h2>
                <p>Líder na concepção de estratégias criativas,
                    gerenciamento de equipes e produção de conteúdo envolvente,
                    busco conexões autênticas com o público. Como consultora, cocrio soluções inovadoras,
                    impactando positivamente áreas diversas.</p>
                <Botao
                    textoBotao='SOBRE MIM'
                    linkBotao='/curriculo'
                />
            </div>
            <div className={styles.containerContato}>
                <div className={styles.caixaAzul}>
                    <img src={imgHome} alt="imghome" className={styles.imgHome} />
                </div>
                <div className={styles.caixaCinza}>
                    <h1>CONTATO</h1>
                    <ul>
                        <li><a href="">lethiciaararuna@gmail.com</a></li>
                        <li><a href="">(61) 982820076</a></li>
                        <li><a href="">links para o linkedin</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}