import Page from '../../../_components/casePage/tituloPage'
import { Nav } from '../../../tsxhome/nav'
import styles from './menteMestra.module.css'
export function MenteMestra() {
    return (
        <main>
            <header>
                <Nav />
            </header>
            <section>
                <div>
                    <Page
                        empresa='Mente Mestra'
                        funcao='Gerente Geral'
                        texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum esse, accusamus odio deleniti aperiam minima aliquid assumenda incidunt, repellendus, debitis reiciendis dignissimos nam porro soluta repellat autem? Cum, voluptatem fugit!'
                        img1='/images/600x600.png'
                        img2=''
                        linkBotao='/comunicacao'
                        textoBotao='VER CASES'
                    />
                </div>
                <div className={styles.containerText}>
                    <h3>RESPONSABILIDADES</h3>
                    <ul>
                        <li>GESTÃO DE EQUIPE</li>
                        <li>PRODUÇÃO DE CONTEÚDO</li>
                        <li>ACOMPANHAMENTO DE PDCA</li>
                        <li>COMUNICAÇÃO COM CLIENTES</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
