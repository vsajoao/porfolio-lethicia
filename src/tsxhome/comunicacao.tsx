import styles from '../styles/comunicaçao.module.css'
import { TituloHome } from '../_components/tituloHome'
import CardsCom from './cardsCom'
import Botao from '../_components/botao/botao';
export function Comunicacao() {
    return (
        <div id='consultoria-comunicacao' className={styles.containerCom}>
            <TituloHome texto='Consultoria em Comunicação' />

            <div className={styles.textosCom}>
                <p>Lorem ipsum dolor sit amet. Aut porro debitis eum accusamus omnis et autem libero hic dolorum eveniet vel voluptatibus quisquam id sint Quis sit expedita ipsam. Et enim ipsa eos porro repellendus quo quos distinctio quo temporibus vitae et consequatur necessitatibus ad harum officia.Aut porro debitis eum accusamus omnis et autem libero hic dolorum eveniet vel voluptatibus quisquam id sint Quis sit expedita ipsam. Et enim ipsa eos porro repellendus quo quos distinctio quo temporibus vitae et consequatur necessitatibus ad harum officia</p>
                <p>Lorem ipsum dolor sit amet. Aut porro debitis eum accusamus omnis et autem libero hic dolorum eveniet vel voluptatibus quisquam id sint Quis sit expedita ipsam. Et enim ipsa eos porro repellendus quo quos distinctio quo temporibus vitae et consequatur necessitatibus ad harum officia.Aut porro debitis eum accusamus omnis et autem libero hic dolorum eveniet vel voluptatibus quisquam id sint Quis sit expedita ipsam. Et enim ipsa eos porro repellendus quo quos distinctio quo temporibus vitae et consequatur necessitatibus ad harum officia</p>
            </div>
            <div className={styles.linhaAzul}></div>
            <CardsCom />
            <div className={styles.botaoMid}>
                <Botao
                    textoBotao='VER CASES'
                    linkBotao='/comunicacao'
                />
            </div>
        </div>


    )
}
