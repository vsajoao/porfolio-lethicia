import Page from '../../../_components/casePage/tituloPage'
import { Footer } from '../../../tsxhome/footer'
import { Nav } from '../../../tsxhome/nav'
import styles from './tellus.module.css'
export function Tellus() {
    return (
        <section>
            <Nav />
            <section className={styles.home}>
                <div>
                    <Page
                        empresa='Instituto Tellus'
                        funcao='Coordenação de Relações Institucionais Brasil e Bogotá'
                        texto='Aut aliquid laboriosam qui excepturi distinctio sed velit quidem a dolorum ipsam et asperiores reprehenderit id voluptatum quasi? Est voluptatem ducimus a doloremque saepe et sint internos. Eos excepturi dolore aut neque perferendis non consectetur asperiores est veritatis sequi.'
                        img1='/images/600x600.png'
                        img2=''
                        textoBotao='VER PROJETOS'
                        linkBotao='/projetos'
                    />
                </div>
                <div className={styles.containerInfo}>
                    <div className={styles.containerTexto}>
                        <h3>Fundação Maria Cecília Souto Vidigal</h3>
                        <ul>
                            <li>INTEGRAÇÃO DAS OFERTAS SOCIOASSISTENCIAS SUAS E PCF</li>
                            <li>PROTOCOLO INTEGRADO DE ATENÇÃO À PRIMEIRA INFÂNICA</li>
                        </ul>
                        <h3>Fundação ABInbev/Secretaria de Educação do DF </h3>
                        <ul>
                            <li><a href="https://www.youtube.com/playlist?list=PLWiuEbYTrUw8Lw5KF9cGwxiljdas3z1Z8">Protocolo Integrado de Atenção à Primeiríssima Infância</a></li>
                        </ul>
                        <h3>United Way Brasil</h3>
                        <ul>
                            <li>Estudo de Viabilidade do Programa Crescer Aprendendo</li>
                        </ul>
                    </div>
                    <div className={styles.containerResp}>
                        <h3>REPSONSABILIDADES</h3>
                        <ul>
                            <li>DIAGNÓSTICO,COCRIAÇÃO E IMPLEMENTAÇÃO DE PROJETOS</li>
                            <li>DESIGN ESTRATÉGICO E DESIGN THINKING</li>
                            <li>TEORIA DA MUDANÇA</li>
                            <li>GESTÃO DE EQUIPE</li>
                        </ul>
                    </div>
                </div>
            </section>

            <Footer />

        </section>


    )
}