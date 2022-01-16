const wrapper = document.getElementById('airwayGrid');

const defaultConfig = {
    maxLimit: 'container',
    background: 'transparent',
    resizable: true,
    colorFromLeft: 'blue',
    colorFromRight: 'red',
    log: false,
};

function executeAirplanes(container, userConfig = {}) {
    const config = { ...defaultConfig, ...userConfig };

    function initConfig() {

        // Airplane Colors
        document.documentElement.style.setProperty('--airplane-left-fill-color', config.colorFromLeft);
        document.documentElement.style.setProperty('--airplane-right-fill-color', config.colorFromRight);
    };

    initConfig();

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

    function clearAirplanes(maxLimit) {
        const airplanesFlying = container.querySelectorAll('.airplaneContent');

        airplanesFlying.forEach((airplane, index) => {
            if (index > maxLimit - 1) {
                airplane.remove();
                log('Airplane removed');
            }
        });
    };
    
    function getRandomSeconds(min, max) {   
        min = Math.ceil(min);   
        max = Math.floor(max);   
        return Math.floor((Math.random() * (max - min) + min)) * 1000;
    };
    
    let myInterval = setInterval(updateTimeout, 0); // First call to updateTimeout
    
    function updateTimeout() {
        const time = getRandomSeconds(3, 6);
        const airplaneCount = container.querySelectorAll('.airplaneContent').length;

        const containerHeightLimit = container.offsetHeight;
        const airplaneCountLimit = Math.floor(containerHeightLimit / 32) - 1;
    
        log(`INFO: This container fits: ${airplaneCountLimit + 1} airplane(s) and currently we have: ${airplaneCount + 1} airplane(s) flying!`, 'warn');

        if (airplaneCount >= airplaneCountLimit) {
            clearAirplanes(airplaneCountLimit);
        }
    
        generateAirplane();
        clearInterval(myInterval);
    
        if (airplaneCount < airplaneCountLimit) myInterval = setInterval(updateTimeout, time);
        else log('INFO: Airplane limit reached!', 'info');
    };

    const containerHeight = container.offsetHeight;

    new ResizeObserver(() => {
        const newContainerHeight = container.offsetHeight;
        if(containerHeight === newContainerHeight) return;

        log(`Container has been resized to: ${newContainerHeight}`);
        updateTimeout();
        
    }).observe(container);

    function log(msg, type) {
        if (!config.log) return;

        console.log('Logmode is on!');

        switch (type) {
            case 'info':
                console.info(msg);
                break;
            case 'warn':
                console.warn(msg);
                break;
            case 'error':
                console.error(msg);
                break;
            default:
                console.log(msg);
        };
    };

}; executeAirplanes(wrapper, {
    log: true,
});