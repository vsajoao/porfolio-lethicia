import styles from './curriculo.module.css'
import { Nav } from '../../tsxhome/nav'
import { Titulo } from '../../_components/tituloCurriculo'
import { Idiomas } from '../../_components/idiomas'
import { Footer } from '../../tsxhome/footer'
export function Curriculo() {
    return (
        <main >
            <header>
                <Nav />
            </header>
            <section className={styles.containerCurriculo}>
                <section className={styles.esquerda}>
                    <div className={styles.containerFormacao}>
                        <Titulo texto='Formação Acadêmica' />
                        <h3>2013-2016</h3>
                        <h4>Universidade de Brasília</h4>
                        <p>Bacharel em Ciência Política</p>
                        <h3>2019-2020</h3>
                        <h4>Universidade de Brasília</h4>
                        <p>Especialização em Políticas Públicas, Infância,
                            Juventude e Diversidade</p>
                    </div>
                    <div className={styles.containerAperfeicoamento}>
                        <Titulo texto='Aperfeiçoamento' />
                        <div className={styles.containerColunas}>
                            <div className={styles.column}>
                                <h4>ESPM</h4>
                                <p>Ativações de Marca e Patrocínios como Ferramentas de Marketing</p>
                                <h4>Centro Unviersiatário Belas Artes</h4>
                                <p>Jornalismo Cultural</p>
                                <h4>Ana Couto</h4>
                                <p>A (R)evolução do Branding</p>
                                <h4>Hands</h4>
                                <p>Workshop de Storymaker</p>
                                <h4>BOCA ROSA COMPANY</h4>
                                <p>Fromcação em Marketing Digital</p>
                                <h4>Lemonade School</h4>
                                <p>Gestão de Conteúdo para Redes Socias</p>
                                <h4>Fundação Getúlio Vargas</h4>
                                <p>Introdução ao temas da liderança</p>
                                <h4>Estácio de Sá</h4>
                                <p>Marketing Cultural</p>
                                <p>Marketing de Influência</p>
                                <h4>Perestrolka</h4>
                                <p>Mindset colaborativo</p>
                                <h4>Look'n Fell Talks</h4>
                                <p>Facilitação e Oratória</p>
                            </div>
                            <div className={styles.column}>
                                <h4>Escola Virtual do Governo</h4>
                                <p>Gestão de Projetos</p>
                                <h4>Movimento Brasília ODS</h4>
                                <p>Formação em Sustentabilidade</p>
                                <h4>Udemy</h4>
                                <p>Desing Thinking de A a Z</p>
                                <h4>Pretitudes</h4>
                                <p>Introdução à Teoria Negra Feminista</p>
                                <h4>Murilo Gun</h4>
                                <p>Reaprendizagem Criativa</p>
                                <h4>Observatório de Saúde da População Negra</h4>
                                <p>Antirracismo desde a branquitude:é possível?</p>
                                <h4>Observatório da Juventude</h4>
                                <p>Aperfeiçoamento em práticas na área
                                    da saúde da população em situação de rua,com foco na população negra</p>
                                <h4>Instituo Gaio</h4>
                                <p>Gestão de Políticas Públicas e Socias</p>
                                <h4>Instituto Tiê</h4>
                                <p>Mini curso de Comunicação Não Violenta</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className={styles.direita}>
                    <div className={styles.idiomas}>
                        <Titulo texto='IDIOMAS' />
                        <Idiomas />
                    </div>
                    <div className={styles.containerVoluntariado}>
                        <Titulo texto='Voluntariado' />
                        <h3>A Pilastra</h3>
                        <p>Produção Cultural</p>
                        <h3>ElaSTEMpoder</h3>
                        <p>Diretoria de Redes e Criação de Conteúdo</p>
                        <h3>Global Shapers Community</h3>
                        <p>Criação e Desenvolvimento de Projetos Sociais</p>
                        <h3>UNICEF</h3>
                        <p>Enfrentamento das fake news em meio à pandemia de covid-19</p>
                        <h3>CANVI - Iniciativas Criativas</h3>
                        <p>Oficina de Empreendedorismo</p>
                    </div>
                    <div className={styles.containerEventos}>
                        <Titulo texto='Produção de Eventos' />
                        <h3>Workshop cdess GT Primeira Infância</h3>
                        <p>Workshop para o Conselho de Desenvolvimento Econômico Social
                            Sustentável (CDESS) e GT Primeira Infância - Apresentação de Relatório
                            do Mapeamento de Iniciativas Relacionadas à PI no Governo Federal</p>
                        <h3>Voz e Vez Delas</h3>
                        <p>Roda de conversa de promoção à inserção da mulher nos espaços -
                            Edição Mulheres na Política</p>
                        <h3>Mulheres de Sucesso - Empreender é Poder</h3>
                        <p>Sebrae</p>
                        <h3>Fórum de Debate</h3>
                        <p>Evento no CEM Paulo Freire sobre sistema eleitoral brasileiro</p>
                    </div>

                </section>
            </section>
            <Footer />
        </main>
    )
}