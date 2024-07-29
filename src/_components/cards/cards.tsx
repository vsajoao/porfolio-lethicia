import React from 'react';
import styles from './cards.module.css';

interface CardProps {
    imgSrc: string;
    title: string;
    description: string;
    link: string;
}

const Card: React.FC<CardProps> = ({ imgSrc, title, description, link }) => {
    return (
        <div className={styles.box}>
            <img src={imgSrc} alt={title} />
            <div className={styles.overlay}>
                <h3>{title}</h3>
                <p>{description}</p>
                <a href={link}>Saiba mais</a>
            </div>
        </div>
    );
};

export default Card;
