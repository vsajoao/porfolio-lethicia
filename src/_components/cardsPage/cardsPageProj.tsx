import React from 'react';
import Card from '../cards/cards'
import styles from '../cards/cards.module.css'
import imgTellus from './imagenscardsle/institutotellus(1).png'
import imgTembici from './imagenscardsle/tembici.png'
import imgTravessia from './imagenscardsle/governo.png'
import imgUnited from './imagenscardsle/unitedwaybrasil.jpg'
import imgRedes from './imagenscardsle/ruas.jpeg'
const CardsPageProj: React.FC = () => {
    const cardsData = [
        {
            imgSrc: imgTellus,
            title: 'Instituto Tellus',
            description: 'Exerci o papel de coordenadora de conteúdo para marcas como CAIXA e Senac RJ, focando em planejamento, redação criativa e gestão de equipe para campanhas digitais impactantes.',
            link: '/tellus'
        },
        {
            imgSrc: imgTembici,
            title: 'Tembici',
            description: 'Na The Hub, coordenei criação para Banco do Brasil, CAIXA, Governo Federal, agências. Mediei entre influenciadores e marcas como Banco do Brasil e Irmãos Fittipaldi.',
            link: '/tembici'
        },
        {
            imgSrc: imgTravessia,
            title: 'Travessia Políticas Públicas',
            description: 'Direção de Comunicação e Produção de Conteúdo na Food Flow, uma startup de combate ao desperdício de comida.',
            link: '/travessia'
        },
        {
            imgSrc: imgUnited,
            title: 'United Way Brasil',
            description: 'Direção de Comunicação e Produção de Conteúdo na Food Flow, uma startup de combate ao desperdício de comida.',
            link: '/unitedway'
        },
        {
            imgSrc: imgRedes,
            title: 'RUAS-Rede Urbana de Ações',
            description: 'Direção de Comunicação e Produção de Conteúdo na Food Flow, uma startup de combate ao desperdício de comida.',
            link: '/ruas'
        }



    ];

    return (
        <div id='card-area'>
            <div className={styles.wrapper}>
                <div className={styles.boxArea}>
                    {cardsData.map((card, index) => (
                        <Card
                            key={index}
                            imgSrc={card.imgSrc}
                            title={card.title}
                            description={card.description}
                            link={card.link}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardsPageProj;
