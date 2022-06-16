import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { ReactComponent as Plane } from './plane.svg';
import { AirplaneProps } from '../../@types/airplane';

export const Airplane: React.FC<AirplaneProps> = ({ direction, color = '#000' }) => {
    const directionClassName = `${direction}`;
    const containerClassNames = clsx(styles.airplane, styles[directionClassName]);
    const backgroundLinearGradient = `linear-gradient(270deg, ${color} 0%, rgba(163, 57, 227, 0) 100%)`;

    return (
        <div className={containerClassNames}>
            <div className={styles.airplaneLine} style={{ background: backgroundLinearGradient }} />
            <Plane fill={color} />
        </div>
    );
};
