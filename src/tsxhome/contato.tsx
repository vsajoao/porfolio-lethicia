import styles from '../styles/contato.module.css'
export function Contato() {
    return (
        <div id='contato' className={styles.containerTextos}>
            <h3>E agora?</h3>
            <h1>ENTRE EM CONTATO!</h1>
            <p>Emo laborum soluta laboriosam quae qui natus placeat eos possimus voluptates vel, aliquid repudiandae cupiditate reprehenderit ipsa? Aperiam voluptatem ab atque consectetur officia, sit ea reiciendis, magnam repudiandae ex sapiente esse.</p>
            <button className={styles.botaoContato}>AGENDE UMA CONVERSA</button>
        </div>
    )
}