import React from 'react';
import Card from '../_components/cards/cards'
import styles from '../_components/cards/cards.module.css'
import imgTellus from '/home/jota/portfoliole/src/_components/cardsPage/imagenscardsle/institutotellus(1).png'
import imgTembici from '/home/jota/portfoliole/src/_components/cardsPage/imagenscardsle/tembici.png'
import imgUnited from '/home/jota/portfoliole/src/_components/cardsPage/imagenscardsle/unitedwaybrasil.jpg'
const CardsProj: React.FC = () => {
    const cardsData = [
        {
            imgSrc: imgTellus,
            title: 'instituto tellus',
            description: 'No Instituto Tellus, lidero como consultora em Projetos de Inovação e Políticas Públicas, focando em diagnóstico, cocriação e implementação estratégica, além de aplicar Design Thinking e Teoria da Mudança.',
            link: '#'
        },
        {
            imgSrc: imgTembici,
            title: 'tembici',
            description: 'Na Tembici, coordenei as Relações Institucionais no Brasil e em Bogotá, focando em planejamento estratégico, gestão de equipe, facilitação e relacionamento com a sociedade civil.',
            link: '#'
        },
        {
            imgSrc: imgUnited,
            title: 'united way brasil',
            description: 'Como consultora do projeto EAD "Crescer Aprendendo", liderei o planejamento, gestão estratégica, criação de conteúdo, trilha de aprendizagem, kit de formação, produção de vídeos e avaliação.',
            link: '#'
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

export default CardsProj;
