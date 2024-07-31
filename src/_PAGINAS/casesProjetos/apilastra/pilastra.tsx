import Page from '../../../_components/casePage/tituloPage'
import { Footer } from '../../../tsxhome/footer'
import { Nav } from '../../../tsxhome/nav'
import styles from './pilastra.module.css'
export function Pilastra() {
    return (
        <main>
            <header>
                <Nav />
            </header>
            <section>
                <div>
                    <Page
                        empresa='A PILASTRA'
                        funcao='?'
                        texto='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum mollitia aliquid ullam voluptate ea numquam molestiae, reprehenderit non reiciendis ex voluptates sequi modi doloremque consectetur corrupti laudantium libero ut minima, dolorem debitis et. Harum odit hic incidunt tempora, delectus natus.'
                        img1='/images/600x600.png'
                        img2=''
                        linkBotao='/comunicacao'
                        textoBotao='VER CASES'
                    />
                </div>
            </section>
            <footer>
                <Footer />
            </footer>
        </main>
    )
}
