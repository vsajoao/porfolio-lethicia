import { Nav } from '../../../tsxhome/nav'
import styles from './travessia.module.css'
import Page from '../../../_components/casePage/tituloPage'
import { Footer } from '../../../tsxhome/footer'
export function Travessia() {
    return (
        <main>
            <header>
                <Nav />
            </header>
            <section>
                <div>
                    <Page
                        empresa='Travessia politicas publicas'
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
                        <li>MAPEAMENTOS DE INICIATIVAS RELACIONADAS Á PI NO GOVERNO FEDERAL</li>
                        <li>PRODUÇÃO DE RELATÓRIO E CARDS DOS MINISTÉRIOS ENVOLVIDOS</li>
                        <li>PESQUISA E SISTEMATIZAÇÃO</li>
                        <li>ENTREVISTAS COM MINISTÉRIOS</li>
                        <li>PRODUÇÃO E FACILITAÇÃO DE WORKSHOP</li>
                    </ul>
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}