import React, { forwardRef, PropsWithChildren } from 'react';
import styles from './styles.module.css';

export const AirwayContainer = forwardRef<HTMLDivElement, PropsWithChildren>(({ children }, ref) => {
    const backgroundSvg =
        '<svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">' +
        '<rect width="8" height="8" fill="white"/>' +
        '<circle cx="4" cy="4" r="1" fill="#D7D7DC"/>' +
        '</svg>';

    const base64Background = btoa(backgroundSvg);

    return (
        <div
            className={styles.airwayGrid}
            style={{ backgroundImage: `url("data:image/svg+xml;base64,${base64Background}")` }}
            ref={ref}
        >
            {children}
        </div>
    );
});
