import styles from '../styles/servicos.module.css'
import { TituloHome } from '../_components/tituloHome'
import Botao from '../_components/botao/botao'
export function Servicos() {
    return (
        <div id='servicos' className={styles.containerServ}>
            <TituloHome texto='Serviços Oferecidos' />
            <div className={styles.containerTextos}>
                <div className={styles.textos}>
                    <h3>Consultoria & Projetos Customizados</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur in, suscipit exercitationem quod sed fugiat error quaerat beatae sequi aliquid reiciendis unde tempora ipsam assumenda accusantium deleniti nobis facere quia.</p>
                </div>
                <div className={styles.textos}>
                    <h3>Marketing Digital</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur in, suscipit exercitationem quod sed fugiat error quaerat beatae sequi aliquid reiciendis unde tempora ipsam assumenda accusantium deleniti nobis facere quia.</p>
                </div>
                <div className={styles.textos}>
                    <h3>Comunicação interna</h3>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur in, suscipit exercitationem quod sed fugiat error quaerat beatae sequi aliquid reiciendis unde tempora ipsam assumenda accusantium deleniti nobis facere quia.</p>
                </div>
            </div>
            <div className={styles.botaoMid}>
                <Botao
                    textoBotao='VER SERVIÇOS'
                    linkBotao=''
                />
            </div>
        </div>
    )
}