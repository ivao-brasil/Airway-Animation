import React from 'react';

import { AirwayAnimation } from 'airway-animation';
import 'airway-animation/dist/index.css';

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const App = () => {
    const colors = {
        left: getRandomColor(),
        right: getRandomColor()
    }

    return <AirwayAnimation airplaneColors={colors} />;
};

export default App;
