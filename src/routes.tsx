import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { Curriculo } from './_PAGINAS/curriculo/curriculo';
import { ComunicacaoPage } from './_PAGINAS/comunicacao/comunicacaoPage';
import { ProjetosPage } from './_PAGINAS/projetos/projetosPage';
import ScrollToTop from './_components/scrolltotop';
import { Binder } from './_PAGINAS/casesProjetos/binder/binder';
import { TheHub } from './_PAGINAS/casesProjetos/thehub/thehub';
import { Tellus } from './_PAGINAS/casesProjetos/tellus/tellus';
const AppRoutes = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/curriculo" element={<Curriculo />} />
                <Route path="/comunicacao" element={<ComunicacaoPage />} />
                <Route path="/projetos" element={<ProjetosPage />} />
                <Route path="/binder" element={<Binder />} />
                <Route path="/thehub" element={<TheHub />} />
                <Route path="/tellus" element={<Tellus />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
