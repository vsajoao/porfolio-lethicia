import { Nav } from "../../tsxhome/nav"
import styles from './comunicacaoPage.module.css'
import CardsPageCom from "../../_components/cardsPage/cardsPageCom"
import { Footer } from "../../tsxhome/footer"
export function ComunicacaoPage() {
    return (
        <main>
            <header>
                <Nav />
            </header>
            <section className={styles.sectionCom}>
                <section className={styles.containerCom}>
                    <div className={styles.containerText}>
                        <h1>CASES</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nostrum neque autem molestiae vel impedit maiores, dolorum, perferendis a ea earum iure odit beatae delectus nisi commodi odio vitae accusantium.</p>
                    </div>
                    <div className={styles.card}>
                        <CardsPageCom />
                    </div>

                </section>
            </section>
            <Footer />
        </main>
    )
}