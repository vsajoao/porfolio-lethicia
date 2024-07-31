import Page from '../../../_components/casePage/tituloPage'
import { Nav } from '../../../tsxhome/nav'
import styles from './expo.module.css'
export function Expo() {
    return (
        <main>
            <header>
                <Nav />
            </header>
            <section>
                <div>
                    <Page
                        empresa='ExpoFavela'
                        funcao='Voluntária na equipe Artístico'
                        texto='Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque modi, quo iure in accusamus corrupti architecto libero esse deleniti, quasi natus iste nesciunt odit velit suscipit perspiciatis quae voluptates, cum totam nostrum adipisci hic aliquid aspernatur. Expedita earum in ipsam?'
                        img1='/images/600x600.png'
                        img2=''
                        linkBotao='/comunicacao'
                        textoBotao='VER CASES'
                    />
                </div>
                <div className={styles.containerText}>
                    <h3>RESPONSIBILIDADES</h3>
                    <ul>
                        <li>ACOMPANHAMNETO DOS ARTISTAS E PALESTRANTES DURANTE O EVENTO</li>
                        <li>MEDIAÇÃO JUNTO A CRONOGRAMA DO EVENTO</li>
                    </ul>
                </div>
            </section>
        </main>
    )
}
