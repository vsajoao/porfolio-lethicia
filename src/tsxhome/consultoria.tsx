import styles from '../styles/consultoria.module.css'
import { TituloHome } from '../_components/tituloHome'
import CardsProj from './cardsProj'
import Botao from '../_components/botao/botao';
export function Consultoria() {
    return (
        <div id='consultoria-consultoria' className={styles.containerCom}>
            <TituloHome texto='Consultoria de Projetos' />

            <div className={styles.textosCom}>
                <p>Lorem ipsum dolor sit amet. Aut porro debitis eum accusamus omnis et autem libero hic dolorum eveniet vel voluptatibus quisquam id sint Quis sit expedita ipsam. Et enim ipsa eos porro repellendus quo quos distinctio quo temporibus vitae et consequatur necessitatibus ad harum officia.Aut porro debitis eum accusamus omnis et autem libero hic dolorum eveniet vel voluptatibus quisquam id sint Quis sit expedita ipsam. Et enim ipsa eos porro repellendus quo quos distinctio quo temporibus vitae et consequatur necessitatibus ad harum officia</p>
                <p>Lorem ipsum dolor sit amet. Aut porro debitis eum accusamus omnis et autem libero hic dolorum eveniet vel voluptatibus quisquam id sint Quis sit expedita ipsam. Et enim ipsa eos porro repellendus quo quos distinctio quo temporibus vitae et consequatur necessitatibus ad harum officia.Aut porro debitis eum accusamus omnis et autem libero hic dolorum eveniet vel voluptatibus quisquam id sint Quis sit expedita ipsam. Et enim ipsa eos porro repellendus quo quos distinctio quo temporibus vitae et consequatur necessitatibus ad harum officia</p>
            </div>
            <div className={styles.linhaAzul}></div>
            <CardsProj />
            <div className={styles.botaoMid}>
                <Botao
                    textoBotao='VER PROJETOS'
                    linkBotao='/projetos'
                />
            </div>

        </div>
    )
}