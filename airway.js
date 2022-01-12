const container = document.getElementById('airwayGrid');

function generateAirplane() {
    const randomClass = Math.random() < 0.5 ? 'airplaneRight' : 'airplaneLeft';

    const randomPlane = `
        <div class="${randomClass} airplaneContent">
            <div class="airplaneLine"></div>
            <svg width="34" height="32" viewBox="0 0 34 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" >
                <path d="M23.579 -8.39233e-05H20.2106L11.7895 13.4736H2.52632C1.12842 13.4736 0 14.6021 0 16C0 17.3979 1.12842 18.5263 2.52632 18.5263H11.7895L20.2106 32H23.579L19.3685 18.5263H28.6317L31.158 21.8947H33.6843L32.0001 16L33.6843 10.1052H31.158L28.6317 13.4736H19.3685L23.579 -8.39233e-05Z" />
            </svg>
        </div>
    `;
    container.insertAdjacentHTML('beforeend', randomPlane);
};

function getRandomSeconds(min, max) {   
    min = Math.ceil(min);   
    max = Math.floor(max);   
    return Math.floor((Math.random() * (max - min) + min)) * 1000;
};

let myInterval = setInterval(updateTimeout, 1000); // First call to updateTimeout
const containerHeightLimit = container.offsetHeight;

function updateTimeout() {
    const time = getRandomSeconds(3, 6);
    const airplaneCount = container.querySelectorAll('.airplaneContent').length;
    const airplaneCountLimit = Math.floor(containerHeightLimit / 32) - 1;

    console.warn(`INFO: This container fits: ${airplaneCountLimit + 1} airplane(s) and currently we have: ${airplaneCount + 1} airplane(s) flying!`);

    generateAirplane();
    clearInterval(myInterval);

    if (airplaneCount < airplaneCountLimit) {
        myInterval = setInterval(updateTimeout, time);
    } else {
        console.log('-----------------');
        console.warn(`INFO: Airplane limit reached!`);
    };
};