import Page from '../../../_components/casePage/tituloPage'
import '../../../_components/casePage/page.module.css'
import { Nav } from '../../../tsxhome/nav'
import styles from './thehub.module.css'
import { Footer } from '../../../tsxhome/footer'
export function TheHub() {
    return (
        <main>
            <Nav />
            <section>
                <div>
                    <div>
                        <Page
                            empresa='The Hub'
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
                                <h3>BANCO DO BRASIL/CAIXA</h3>
                                <ul className={styles.lista}>
                                    <li>PLANEJAMENTO</li>
                                    <li>GESTÃO DE EQUIPE</li>
                                    <li>ESTRATÉGIA CRIATIVA E DE CONTEÚDO</li>
                                </ul>
                                <h3>BANCO DO BRASIL/IRMAÕS FITTIPLADI</h3>
                                <ul className={styles.lista}>
                                    <li>PLANEJAMENTO E CRONOGRAMA DE CONTEÚDO</li>
                                    <li>MEDIAÇÃO E COMUNICAÇÃO COM INFLUENCIADOR E AGÊNCIA</li>
                                    <li>MONITORAMENTO</li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </main>


    )


}
