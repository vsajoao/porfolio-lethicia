import Page from '../../../_components/casePage/tituloPage'
import { Nav } from '../../../tsxhome/nav'
import styles from './tellus.module.css'
export function Tellus() {
    return (
        <section>
            <Nav />
            <section>
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
                <div className={styles.containerTexto}>
                    <ul>
                        <h3>Fundação Maria Cecília Souto Vidigal</h3>
                        <li>INTEGRAÇÃO DAS OFERTAS SOCIOASSISTENCIAS SUAS E PCF</li>
                        <li>PROTOCOLO INTEGRADO DE ATENÇÃO À PRIMEIRA INFÂNICA</li>
                    </ul>
                    <ul>
                        <h3>Fundação ABInbev/Secretaria de Educação do DF </h3>
                        <li>PROTOCOLO INTEGRADO DE ATENÇÃO À PRIMEIRA INFÂNICA</li>
                        <a href="">https://www.youtube.com/playlist?list=PLWiuEbYTrUw8Lw5KF9cGwxiljdas3z1Z8</a>
                    </ul>
                </div>
            </section>



        </section>


    )
}