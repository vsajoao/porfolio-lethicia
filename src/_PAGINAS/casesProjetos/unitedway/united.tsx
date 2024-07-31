import styles from './united.module.css'
import Page from '../../../_components/casePage/tituloPage'
import { Footer } from '../../../tsxhome/footer'
import { Nav } from '../../../tsxhome/nav'
export function United() {
    return (
        <main>
            <header>
                <Nav />
            </header>
            <section>
                <div>
                    <Page
                        empresa='United Way Brasil'
                        funcao='consultora de projeto'
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
                        <li>PLANEJAMENTO</li>
                        <li>GESTÃO ESTRATÉGICA</li>
                        <li>CRIAÇÃO DE CONTEÚDO</li>
                        <li>TRILHA DE APRENDIZAGEM E KIT DE FORMAÇÃO</li>
                        <li>ACOMPANHAMENTO DE PRODUÇÕES DE VÍDEOS</li>
                        <li>AVALIAÇÃO</li>
                    </ul>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}