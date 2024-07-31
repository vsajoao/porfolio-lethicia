import Page from '../../../_components/casePage/tituloPage'
import { Nav } from '../../../tsxhome/nav'
import './foodFlow.module.css'
export function FoodFlow() {
    return (
        <main>
            <header>
                <Nav />
            </header>
            <section>
                <div>
                    <Page
                        empresa='FoodFlow'
                        funcao='Direção de Comunicação e Produção de Conteúdo'
                        img1='/images/600x600.png'
                        img2=''
                        linkBotao='/comunicacao'
                        texto='Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias optio delectus quod repellendus, tenetur consequuntur porro nisi nam modi architecto, sit officia, recusandae molestiae facilis ex aliquid vel assumenda placeat.'
                        textoBotao='VER CASES'
                    />
                </div>
            </section>
        </main>
    )
}
