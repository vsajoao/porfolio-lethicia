import Page from '../../../_components/casePage/tituloPage'
import { Footer } from '../../../tsxhome/footer'
import { Nav } from '../../../tsxhome/nav'
import styles from './tembici.module.css'
export function Tembici() {
    return (
        <main>
            <header>
                <Nav />
            </header>
            <section>
                <div>
                    <Page
                        empresa='TEMBICI'
                        funcao='Coordenação de Relações Institucionais Brasil e Bogotá'
                        texto='Aut aliquid laboriosam qui excepturi distinctio sed velit quidem a dolorum ipsam et asperiores reprehenderit id voluptatum quasi? Est voluptatem ducimus a doloremque saepe et sint internos. Eos excepturi dolore aut neque perferendis non consectetur asperiores est veritatis sequi.'
                        img1='/images/600x600.png'
                        img2=''
                        linkBotao='/projetos'
                        textoBotao='VER PROJETOS    '
                    />
                </div>
                <div className={styles.containerInfo}>
                    <div>
                        <h2>O PLANO DE ENTORNO OCORRE EM DUAS FRENTES:</h2>
                        <div className={styles.containerText}>
                            <h3>RELACIONAMENTOS E PARCERIAS</h3>
                            <p>Em uma raio maior,considerando o bairro e um grupo de estaçoes,com o objetivo de viabilizar parcerias win-win com empresas e comercios,aporximacao com atores estrategiccos,como associacao de moradores e de comercio e acoes de engajamento que incetivem o aumento do uso do nosso sistema</p>
                            <h3>REPUTAÇÃO E MITIGAÇAO DE RISCOS</h3>
                            <p>Em um raio menor,considerando o que esta diretamente ligado a uma estacao,com o objetivo de minimizar conflitos,por meio de medidas preventivas e abertura de comunicacao para manter bom relacionamento,a fim de evitar problemas reputacionais</p>
                        </div>
                    </div>
                    <div className={styles.containerResp}>
                        <h3>RESPONSABILIDADES</h3>
                        <ul>
                            <li>PLANEJAMENTO</li>
                            <li>MEDIAÇÃO DE CONFLITOS</li>
                            <li>GESTÃO DE EQUIPE</li>
                            <li>FACILITAÇÃO E ESTRATÉGIA</li>
                            <li>RELACIONAMENTO COM SOCIEDADE CIVIL</li>
                        </ul>
                    </div>

                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}