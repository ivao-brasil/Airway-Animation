import React, { Fragment, ReactElement, useEffect, useRef, useState } from 'react';
import { Airplane } from './components/Airplane';
import { AirwayContainer } from './components/AirwayContainer';

interface Props {
    airplaneColors?: {
        left?: string;
        right?: string;
    };
}

export const AirwayAnimation = ({ airplaneColors = { left: '#000', right: '#000' } }: Props) => {
    const [planes, setPlanes] = useState<ReactElement[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);
    const previousContainerHeight = useRef<number>(0);
    const timerRef = useRef<number>(0);

    const getRandomSeconds = (min: number, max: number) => {
        const roundedMin = Math.ceil(min);
        const roundedMax = Math.floor(max);
        return Math.floor(Math.random() * (roundedMax - roundedMin) + roundedMin) * 1000;
    };

    const generateAirplane = () => {
        const direction = Math.random() < 0.5 ? 'right' : 'left';
        const color = direction === 'left' ? airplaneColors.left : airplaneColors.right;

        return <Airplane direction={direction} color={color} />;
    };

    const clearAirplanesAboveLimit = (maxLimit: number) => {
        const remaningPlanes = planes.slice(0, maxLimit);
        setPlanes([...remaningPlanes]);
    };

    const onTimerUpdate = () => {
        if (!containerRef.current) {
            return;
        }

        const airplaneCount = planes.length;

        const containerHeightLimit = containerRef.current.offsetHeight;
        const airplaneCountLimit = Math.floor(containerHeightLimit / 32) - 1;

        if (airplaneCount > airplaneCountLimit) {
            clearAirplanesAboveLimit(airplaneCountLimit);
            return;
        }

        if (airplaneCount === airplaneCountLimit) {
            return;
        }

        const newPlane = generateAirplane();
        setPlanes([...planes, newPlane]);
    };

    useEffect(() => {
        if (!containerRef.current) {
            return () => {};
        }

        previousContainerHeight.current = containerRef.current!.offsetHeight;

        const observer = new ResizeObserver(() => {
            const newContainerHeight = containerRef.current!.offsetHeight;

            if (newContainerHeight === previousContainerHeight.current) {
                return;
            }

            onTimerUpdate();
        });

        observer.observe(containerRef.current);

        return function cleanup() {
            observer.disconnect();
        };
    }, [containerRef]);

    useEffect(() => {
        if (!planes.length) {
            onTimerUpdate();
            return;
        }

        clearInterval(timerRef.current);

        const time = getRandomSeconds(3, 6);
        timerRef.current = setInterval(onTimerUpdate, time) as unknown as number;
    }, [planes]);

    return (
        <AirwayContainer ref={containerRef}>
            {planes.map((plane, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Fragment key={index}>{plane}</Fragment>
            ))}
        </AirwayContainer>
    );
};
