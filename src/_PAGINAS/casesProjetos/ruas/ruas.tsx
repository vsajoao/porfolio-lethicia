import styles from './ruas.module.css'
import { Nav } from '../../../tsxhome/nav'
import Page from '../../../_components/casePage/tituloPage'
import { Footer } from '../../../tsxhome/footer'

export function Ruas() {
    return (
        <main>
            <header>
                <Nav />
            </header>
            <section>
                <div>
                    <Page
                        empresa='RUAS - Rede Urbana de Ações'
                        funcao='Facilitadora e Multiplicadora do Programa Brasília Vida Segura'
                        texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse, accusamus odio deleniti aperiam minima aliquid assumenda incidunt, repellendus, debitis reiciendis dignissimos nam porro soluta repellat autem? Cum, voluptatem fugit!'
                        img1='/images/600x600.png'
                        img2=''
                        linkBotao='/projetos'
                        textoBotao='VER PROJETOS'
                    />
                </div>
                <div className={styles.containerText}>
                    <h3>RESPONSABILIDADES</h3>
                    <ul>
                        <li>FACILITAÇÃO</li>
                        <li>MOBILIZAÇÃO</li>
                        <li>PROTOTIPAGEM</li>
                    </ul>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}