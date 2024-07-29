import styles from './idiomas.module.css';

export function Idiomas() {
    return (
        <div className={styles.idiomas}>
            <div className={styles.linguagem}>
                <div className={styles.linguagemHeader}>
                    <h3 className={styles.linguagemNome}>Inglês</h3>
                    <div className={styles.nivel}>
                        <span className={`${styles.circle} ${styles.filled}`}></span>
                        <span className={`${styles.circle} ${styles.filled}`}></span>
                        <span className={`${styles.circle} ${styles.filled}`}></span>
                    </div>
                </div>
                <span className={styles.instituicao}>Casa Thomas Jefferson</span>
            </div>
            <div className={styles.linguagem}>
                <div className={styles.linguagemHeader}>
                    <h3 className={styles.linguagemNome}>Espanhol</ h3>
                    <div className={styles.nivel}>
                        <span className={`${styles.circle} ${styles.filled}`}></span>
                        <span className={`${styles.circle}`}></span>
                        <span className={`${styles.circle}`}></span>
                    </div>
                </div>
                <span className={styles.instituicao}>Universidade de Brasília</span>
            </div>
        </div>
    );
}
