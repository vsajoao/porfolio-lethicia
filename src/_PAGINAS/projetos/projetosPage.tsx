import { Nav } from "../../tsxhome/nav"
import styles from '../comunicacao/comunicacaoPage.module.css'
import CardsPageProj from "../../_components/cardsPage/cardsPageProj"
import { Footer } from "../../tsxhome/footer"
export function ProjetosPage() {
    return (
        <main>
            <header>
                <Nav />
            </header>
            <section className={styles.sectionCom}>
                <section className={styles.containerCom}>
                    <div className={styles.containerText}>
                        <h1>PROJETOS</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum neque autem molestiae vel impedit maiores, dolorum, perferendis a ea earum iure odit beatae delectus nisi commodi odio vitae accusantium.</p>
                    </div>
                    <div className={styles.card}>
                        <CardsPageProj />
                    </div>

                </section>
            </section>
            <Footer />
        </main>
    )
}