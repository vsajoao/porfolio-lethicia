import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App';
import { Curriculo } from './_PAGINAS/curriculo/curriculo';
import { ComunicacaoPage } from './_PAGINAS/comunicacao/comunicacaoPage';
import { ProjetosPage } from './_PAGINAS/projetos/projetosPage';
import ScrollToTop from './_components/scrolltotop';
import { Binder } from './_PAGINAS/casesProjetos/binder/binder';
import { TheHub } from './_PAGINAS/casesProjetos/thehub/thehub';
import { Tellus } from './_PAGINAS/casesProjetos/tellus/tellus';
import { FoodFlow } from './_PAGINAS/casesProjetos/foodflow/foodFlow';
import { MenteMestra } from './_PAGINAS/casesProjetos/mentemestra/menteMestra';
import { Expo } from './_PAGINAS/casesProjetos/expofavela/expo';
import { Pilastra } from './_PAGINAS/casesProjetos/apilastra/pilastra';
import { Tembici } from './_PAGINAS/casesProjetos/tembici/tembici';
import { Travessia } from './_PAGINAS/casesProjetos/travessia/travesia';
import { United } from './_PAGINAS/casesProjetos/unitedway/united';
import { Ruas } from './_PAGINAS/casesProjetos/ruas/ruas';
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
                <Route path="/foodflow" element={<FoodFlow />} />
                <Route path="/mentemestra" element={<MenteMestra />} />
                <Route path="/expofavela" element={<Expo />} />
                <Route path="/apilastra" element={<Pilastra />} />
                <Route path="/tembici" element={<Tembici />} />
                <Route path="/travessia" element={<Travessia />} />
                <Route path="/unitedway" element={<United />} />
                <Route path="/ruas" element={<Ruas />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
