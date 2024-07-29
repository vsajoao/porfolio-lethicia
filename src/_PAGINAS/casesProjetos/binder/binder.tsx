import styles from './binder.module.css'
import Page from '../../../_components/casePage/tituloPage'
import { Nav } from '../../../tsxhome/nav'
import { Footer } from '../../../tsxhome/footer'
export function Binder() {
    return (

        <section>
            <Nav />
            <section>
                <div>
                    <div className={styles.home}>
                        <Page
                            empresa='Binder'
                            funcao='Coordenação de Conteúdo'
                            texto='Aut aliquid laboriosam qui excepturi distinctio sed velit quidem a dolorum ipsam et asperiores 
                    reprehenderit id voluptatum quasi? Est voluptatem ducimus a doloremque saepe et sint internos. 
                    Eos excepturi dolore aut neque perferendis non consectetur asperiores est veritatis sequi.'
                            img1='public/images/600x600.png'
                            img2='src/_components/cardsPage/imagenscardsle/caixa.jpg'
                            textoBotao='VER CASES'
                            linkBotao='/comunicacao'
                        />
                        <div className={styles.containerInfo}>
                            <div className={styles.containerText}>
                                <h3>CAIXA</h3>
                                <ul className={styles.lista}>
                                    <li>ALWAYS ON-CONTEÚDO DIGITAL</li>
                                    <li>PLANEJAMENTO,REDAÇÃO,GESTÃO DE EQUIPE</li>
                                    <li>ESTRATÉGIA CRIATIVA E DE CONTEÚDO</li>
                                </ul>
                                <h3>SENAC-RJ</h3>
                                <ul className={styles.lista}>
                                    <li>PLANEJAMENTO</li>
                                    <li>ESTRATÉGIA CRIATIVA E DE CONTEÚDO</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>


        </section>



    )
}