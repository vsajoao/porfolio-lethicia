import React from 'react';
import Card from '../_components/cards/cards'
import styles from '../_components/cards/cards.module.css'
import imgBinder from '/home/jota/portfoliole/src/_components/cardsPage/imagenscardsle/caixa.jpg'
import imgThehub from '/home/jota/portfoliole/src/_components/cardsPage/imagenscardsle/bancodobrasil.png'
import imgFood from '/home/jota/portfoliole/src/_components/cardsPage/imagenscardsle/foodflowbr_logo(1).jpeg'
const CardsCom: React.FC = () => {
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
            imgSrc: imgFood,
            title: 'Food Flow',
            description: 'Direção de Comunicação e Produção de Conteúdo na Food Flow, uma startup de combate ao desperdício de comida.',
            link: '/foodflow'
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

export default CardsCom;
