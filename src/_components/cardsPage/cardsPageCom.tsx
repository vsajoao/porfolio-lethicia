import React from 'react';
import Card from '../cards/cards'
import styles from '../cards/cards.module.css'
import imgBinder from './imagenscardsle/caixa.jpg'
import imgThehub from './imagenscardsle/bancodobrasil.png'
import imgFoodflow from './imagenscardsle/foodflowbr_logo(1).jpeg'
import imgMentemestra from './imagenscardsle/mentemestra.jpeg'
import imgExpo from './imagenscardsle/expofavela.png'
import imgPilastra from './imagenscardsle/pilastra.jpeg'
const CardsPageCom: React.FC = () => {
    const cardsData = [
        {
            imgSrc: imgBinder,
            title: 'Binder',
            description: 'Exerci o papel de coordenadora de conteúdo para marcas como CAIXA e Senac RJ, focando em planejamento, redação criativa e gestão de equipe para campanhas digitais impactantes.',
            link: '/binder'
        },
        {
            imgSrc: imgThehub,
            title: 'The hub',
            description: 'Na The Hub, coordenei criação para Banco do Brasil, CAIXA, Governo Federal, agências. Mediei entre influenciadores e marcas como Banco do Brasil e Irmãos Fittipaldi.',
            link: '/thehub'
        },
        {
            imgSrc: imgFoodflow,
            title: 'Food Flow',
            description: 'Direção de Comunicação e Produção de Conteúdo na Food Flow, uma startup de combate ao desperdício de comida.',
            link: '/foodflow'
        },
        {
            imgSrc: imgMentemestra,
            title: 'Mente Mestra',
            description: 'Direção de Comunicação e Produção de Conteúdo na Food Flow, uma startup de combate ao desperdício de comida.',
            link: '/mentemestra'
        },
        {
            imgSrc: imgExpo,
            title: 'Expo Favela Brasilia',
            description: 'Direção de Comunicação e Produção de Conteúdo na Food Flow, uma startup de combate ao desperdício de comida.',
            link: '/expofavela'
        },
        {
            imgSrc: imgPilastra,
            title: 'A Pilastra',
            description: 'Direção de Comunicação e Produção de Conteúdo na Food Flow, uma startup de combate ao desperdício de comida.',
            link: '/apilastra'
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

export default CardsPageCom;
