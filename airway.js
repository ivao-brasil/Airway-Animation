const airplaneVariants = [
  ["180", "#2EC662"],
  ["0", "#A339E3"],
];

function generateAirplane() {
  const randomNumber = Math.floor(Math.random() * 99) + 1;
//   const randomVariant = airplaneVariants[Math.floor(Math.random() * airplaneVariants.length)];

    const randomVariant = airplaneVariants[0];

  const randomPlane = `
        <div class="airplaneRight">
            <div class="airplaneLine"></div>
            <svg 
                width="34"
                height="32" 
                viewBox="0 0 34 32" 
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M23.579 -8.39233e-05H20.2106L11.7895 13.4736H2.52632C1.12842 13.4736 0 14.6021 0 16C0 17.3979 1.12842 18.5263 2.52632 18.5263H11.7895L20.2106 32H23.579L19.3685 18.5263H28.6317L31.158 21.8947H33.6843L32.0001 16L33.6843 10.1052H31.158L28.6317 13.4736H19.3685L23.579 -8.39233e-05Z" />
            </svg>
    
        </div>
    `;

  document.querySelector(".airway").innerHTML += randomPlane;
}

generateAirplane();
generateAirplane();
generateAirplane();
