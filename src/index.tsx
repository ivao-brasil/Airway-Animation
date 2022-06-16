/* eslint-disable react/no-array-index-key */
import React, { useEffect, useRef, useState } from 'react';
import { AirplaneProps } from './@types/airplane';
import { Airplane } from './components/Airplane';
import { AirwayContainer } from './components/AirwayContainer';

interface Props {
    airplaneColors: {
        left: string;
        right: string;
    };
}

export const AirwayAnimation: React.FC<Props> = ({ airplaneColors }) => {
    const [planes, setPlanes] = useState<AirplaneProps[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const timer = useRef(0);

    const getRandomSeconds = (min: number, max: number) => {
        const roundedMin = Math.ceil(min);
        const roundedMax = Math.floor(max);
        return Math.floor(Math.random() * (roundedMax - roundedMin) + roundedMin) * 1000;
    };

    const addPlane = () => {
        const direction = Math.random() < 0.5 ? 'right' : 'left';
        const color = direction === 'left' ? airplaneColors.left : airplaneColors.right;

        const plane: AirplaneProps = {
            color,
            direction,
        };

        setPlanes((oldPlanes) => [...oldPlanes, plane]);
    };

    const removePlane = (index: number) => {
        const newPlanes = [...planes];
        newPlanes.splice(index, 1);
        setPlanes(newPlanes);
    };

    const updatePlanes = () => {
        if (!containerRef || !containerRef.current) return;
        window.clearInterval(timer.current);

        const container = containerRef.current;

        const containerHeightLimit = container.offsetHeight;
        const airplaneCountLimit = Math.floor(containerHeightLimit / 32);

        if (container.childElementCount > airplaneCountLimit) removePlane(0);
        if (container.childElementCount === airplaneCountLimit) return;

        addPlane();

        const seconds = getRandomSeconds(3, 6);
        timer.current = window.setInterval(updatePlanes, seconds);
    };

    useEffect(() => {
        updatePlanes();

        return () => window.clearInterval(timer.current);
    }, []);

    return (
        <AirwayContainer ref={containerRef}>
            {planes.map((plane, index) => (
                <Airplane direction={plane.direction} color={plane.color} key={index} />
            ))}
        </AirwayContainer>
    );
};
