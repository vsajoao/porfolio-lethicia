import styles from '../styles/navCss.module.css';
import logo from '/home/jota/portfoliole/public/images/estrelale.png';
import { useNavigate } from 'react-router-dom';

export function Nav() {
    const navigate = useNavigate();
    return (
        <div className={styles.containerNav}>
            <img src={logo} alt="" />
            <h1>Lethícia Araruna</h1>
            <div className={styles.containerLinks}>
                <li><a onClick={() => navigate('/')} href="">HOME</a></li>
                <li className={styles.dropdown}>
                    <a href="#">CONSULTORIA</a>
                    <div className={styles.dropdownContent}>
                        <a href="" onClick={() => navigate('/comunicacao')}>Comunicação</a>
                        <a href="" onClick={() => navigate('/projetos')}>Projetos</a>
                    </div>
                </li>
                <li><a href="#servicos">SERVIÇOS</a></li>
                <li><a onClick={() => navigate('/curriculo')} href="">CURRÍCULO</a></li>
                <li><a href="#contato">Contato</a></li>
            </div>
        </div>
    );
}
