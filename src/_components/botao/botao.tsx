import { useNavigate } from 'react-router-dom';
import './botao.module.css'
interface PageProps {
    textoBotao: string;
    linkBotao: string;

}
const Botao: React.FC<PageProps> = ({ textoBotao, linkBotao }) => {
    const navigate = useNavigate();
    return (
        <button onClick={() => navigate(`${linkBotao}`)}>{textoBotao}</button>
    )
}
export default Botao;