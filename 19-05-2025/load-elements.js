import { getCellMarkup, getCellRangeMarkup, getColumnSpanner } from "./helper.js";

export const colors = {
  green: '#9DC97C',
  red: '#D0212C',
  orange: '#F7941C',
  skyBlue: '#6EA4D9',
  purple: '#A879B7',
  yellow: '#FBD009',
  pink: '#F9B5CE',
  blue: '#027BBD',
  bottleGreen: '#05AC99',
  gray: '#C3C4C6',
  black: '#000108',
  white: '#FFFBFE'
}

const elementsTable1 = [
  { atomicNum: 1, label: 'H', name: 'Hydrogen', bgColor: 'green', textColor: 'black' },
  { atomicNum: 2, label: 'He', name: 'Helium', bgColor: 'pink', textColor: 'black' },

  // Alkali Metals
  { atomicNum: 3, label: 'Li', name: 'Lithium', bgColor: 'red', textColor: 'white' },
  { atomicNum: 11, label: 'Na', name: 'Sodium', bgColor: 'red', textColor: 'white' },
  { atomicNum: 19, label: 'K', name: 'Potassium', bgColor: 'red', textColor: 'white' },
  { atomicNum: 37, label: 'Rb', name: 'Rubidium', bgColor: 'red', textColor: 'white' },
  { atomicNum: 55, label: 'Cs', name: 'Cesium', bgColor: 'red', textColor: 'white' },
  { atomicNum: 87, label: 'Fr', name: 'Francium', bgColor: 'red', textColor: 'white' },

  // Alkali Earth Metals
  { atomicNum: 4, label: 'Be', name: 'Beryllium', bgColor: 'orange', textColor: 'white' },
  { atomicNum: 12, label: 'Mg', name: 'Magnesium', bgColor: 'orange', textColor: 'white' },
  { atomicNum: 20, label: 'Ca', name: 'Calcium', bgColor: 'orange', textColor: 'white' },
  { atomicNum: 38, label: 'Sr', name: 'Strontium', bgColor: 'orange', textColor: 'white' },
  { atomicNum: 56, label: 'Ba', name: 'Barium', bgColor: 'orange', textColor: 'white' },
  { atomicNum: 88, label: 'Ra', name: 'Radium', bgColor: 'orange', textColor: 'white' },

  // Transition Metals
  { atomicNum: 21, label: 'Sc', name: 'Scandium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 22, label: 'Ti', name: 'Titanium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 23, label: 'V', name: 'Vanadium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 24, label: 'Cr', name: 'Chromium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 25, label: 'Mn', name: 'Manganese', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 26, label: 'Fe', name: 'Iron', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 27, label: 'Co', name: 'Cobalt', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 28, label: 'Ni', name: 'Nickel', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 29, label: 'Cu', name: 'Copper', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 30, label: 'Zn', name: 'Zinc', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 39, label: 'Y', name: 'Yttrium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 40, label: 'Zr', name: 'Zirconium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 41, label: 'Nb', name: 'Niobium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 42, label: 'Mo', name: 'Molybdenum', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 43, label: 'Tc', name: 'Technetium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 44, label: 'Ru', name: 'Ruthenium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 45, label: 'Rh', name: 'Rhodium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 46, label: 'Pd', name: 'Palladium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 47, label: 'Ag', name: 'Silver', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 48, label: 'Cd', name: 'Cadmium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 72, label: 'Hf', name: 'Hafnium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 73, label: 'Ta', name: 'Tantalum', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 74, label: 'W', name: 'Tungsten', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 75, label: 'Re', name: 'Rhenium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 76, label: 'Os', name: 'Osmium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 77, label: 'Ir', name: 'Iridium', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 78, label: 'Pt', name: 'Platinum', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 79, label: 'Au', name: 'Gold', bgColor: 'skyBlue', textColor: 'black' },
  { atomicNum: 80, label: 'Hg', name: 'Mercury', bgColor: 'skyBlue', textColor: 'black' },

  // Other Metals
  { atomicNum: 13, label: 'Al', name: 'Aluminium', bgColor: 'purple', textColor: 'black' },
  { atomicNum: 31, label: 'Ga', name: 'Gallium', bgColor: 'purple', textColor: 'black' },
  { atomicNum: 49, label: 'In', name: 'Indium', bgColor: 'purple', textColor: 'black' },
  { atomicNum: 50, label: 'Sn', name: 'Tin', bgColor: 'purple', textColor: 'black' },
  { atomicNum: 81, label: 'Tl', name: 'Thallium', bgColor: 'purple', textColor: 'black' },
  { atomicNum: 82, label: 'Pb', name: 'Lead', bgColor: 'purple', textColor: 'black' },
  { atomicNum: 83, label: 'Bi', name: 'Bismuth', bgColor: 'purple', textColor: 'black' },
  { atomicNum: 84, label: 'Po', name: 'Polonium', bgColor: 'purple', textColor: 'black' },

  // Metalloids
  { atomicNum: 5, label: 'B', name: 'Boron', bgColor: 'yellow', textColor: 'black' },
  { atomicNum: 14, label: 'Si', name: 'Silicon', bgColor: 'yellow', textColor: 'black' },
  { atomicNum: 32, label: 'Ge', name: 'Germanium', bgColor: 'yellow', textColor: 'black' },
  { atomicNum: 33, label: 'As', name: 'Arsenic', bgColor: 'yellow', textColor: 'black' },
  { atomicNum: 51, label: 'Sb', name: 'Antimony', bgColor: 'yellow', textColor: 'black' },
  { atomicNum: 52, label: 'Te', name: 'Tellurium', bgColor: 'yellow', textColor: 'black' },

  // Non-metals
  { atomicNum: 6, label: 'C', name: 'Carbon', bgColor: 'green', textColor: 'black' },
  { atomicNum: 7, label: 'N', name: 'Nitrogen', bgColor: 'green', textColor: 'black' },
  { atomicNum: 8, label: 'O', name: 'Oxygen', bgColor: 'green', textColor: 'black' },
  { atomicNum: 15, label: 'P', name: 'Phosphorus', bgColor: 'green', textColor: 'black' },
  { atomicNum: 16, label: 'S', name: 'Sulfur', bgColor: 'green', textColor: 'black' },
  { atomicNum: 34, label: 'Se', name: 'Selenium', bgColor: 'green', textColor: 'black' },

  // Halogens
  { atomicNum: 9, label: 'F', name: 'Fluorine', bgColor: 'pink', textColor: 'black' },
  { atomicNum: 17, label: 'Cl', name: 'Chlorine', bgColor: 'pink', textColor: 'black' },
  { atomicNum: 35, label: 'Br', name: 'Bromine', bgColor: 'pink', textColor: 'black' },
  { atomicNum: 53, label: 'I', name: 'Iodine', bgColor: 'pink', textColor: 'black' },
  { atomicNum: 85, label: 'At', name: 'Astatine', bgColor: 'pink', textColor: 'black' },

  // Noble Gases
  { atomicNum: 10, label: 'Ne', name: 'Neon', bgColor: 'pink', textColor: 'black' },
  { atomicNum: 18, label: 'Ar', name: 'Argon', bgColor: 'pink', textColor: 'black' },
  { atomicNum: 36, label: 'Kr', name: 'Krypton', bgColor: 'pink', textColor: 'black' },
  { atomicNum: 54, label: 'Xe', name: 'Xenon', bgColor: 'pink', textColor: 'black' },
  { atomicNum: 86, label: 'Rn', name: 'Radon', bgColor: 'pink', textColor: 'black' },

  // Unknown / synthetic (gray)
  { atomicNum: 104, label: 'Rf', name: 'Rutherfordium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 105, label: 'Db', name: 'Dubnium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 106, label: 'Sg', name: 'Seaborgium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 107, label: 'Bh', name: 'Bohrium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 108, label: 'Hs', name: 'Hassium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 109, label: 'Mt', name: 'Meitnerium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 110, label: 'Ds', name: 'Darmstadtium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 111, label: 'Rg', name: 'Roentgenium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 112, label: 'Cn', name: 'Copernicium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 113, label: 'Nh', name: 'Nihonium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 114, label: 'Fl', name: 'Flerovium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 115, label: 'Mc', name: 'Moscovium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 116, label: 'Lv', name: 'Livermorium', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 117, label: 'Ts', name: 'Tennessine', bgColor: 'gray', textColor: 'black' },
  { atomicNum: 118, label: 'Og', name: 'Oganesson', bgColor: 'gray', textColor: 'black' }
];

const elementsTable2 = [
    // Lanthanides
  { atomicNum: 57, label: 'La', name: 'Lanthanum', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 58, label: 'Ce', name: 'Cerium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 59, label: 'Pr', name: 'Praseodymium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 60, label: 'Nd', name: 'Neodymium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 61, label: 'Pm', name: 'Promethium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 62, label: 'Sm', name: 'Samarium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 63, label: 'Eu', name: 'Europium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 64, label: 'Gd', name: 'Gadolinium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 65, label: 'Tb', name: 'Terbium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 66, label: 'Dy', name: 'Dysprosium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 67, label: 'Ho', name: 'Holmium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 68, label: 'Er', name: 'Erbium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 69, label: 'Tm', name: 'Thulium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 70, label: 'Yb', name: 'Ytterbium', bgColor: 'blue', textColor: 'white' },
  { atomicNum: 71, label: 'Lu', name: 'Lutetium', bgColor: 'blue', textColor: 'white' },

  // Actinides
  { atomicNum: 89, label: 'Ac', name: 'Actinium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 90, label: 'Th', name: 'Thorium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 91, label: 'Pa', name: 'Protactinium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 92, label: 'U', name: 'Uranium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 93, label: 'Np', name: 'Neptunium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 94, label: 'Pu', name: 'Plutonium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 95, label: 'Am', name: 'Americium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 96, label: 'Cm', name: 'Curium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 97, label: 'Bk', name: 'Berkelium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 98, label: 'Cf', name: 'Californium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 99, label: 'Es', name: 'Einsteinium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 100, label: 'Fm', name: 'Fermium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 101, label: 'Md', name: 'Mendelevium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 102, label: 'No', name: 'Nobelium', bgColor: 'bottleGreen', textColor: 'black' },
  { atomicNum: 103, label: 'Lr', name: 'Lawrencium', bgColor: 'bottleGreen', textColor: 'black' },
]


const table1 = document.getElementById('table-1')
const table2 = document.getElementById('table-2')

/** Populating first table */
elementsTable1
.sort((cell1, cell2) => {
  return cell1.atomicNum - cell2.atomicNum
})
.forEach(({ atomicNum, label, name, bgColor, textColor }, i) => {
  table1.insertAdjacentHTML('beforeend', getCellMarkup({ atomicNum, label, name, bgColor, textColor }));

  switch (atomicNum) {
    case 1:
      table1.insertAdjacentHTML('beforeend', getColumnSpanner(16))
      break;

    case 4: 
      table1.insertAdjacentHTML('beforeend', getColumnSpanner(10))
      break;

    case 12: 
      table1.insertAdjacentHTML('beforeend', getColumnSpanner(10))
      break;

    case 56: 
      table1.insertAdjacentHTML('beforeend', getCellRangeMarkup({ 
        atomicNumFrom: 57, 
        atomicNumTo: 71,
        name: 'Lanthanides',
        bgColor: 'blue',
        textColor: 'white'
      }))
      break;

    case 88: 
      table1.insertAdjacentHTML('beforeend', getCellRangeMarkup({ 
        atomicNumFrom: 89, 
        atomicNumTo: 103,
        name: 'Actinides',
        bgColor: 'bottleGreen',
        textColor: 'white'
      }))
      break;
  
    default:
      break;
  }
})



elementsTable2
.sort((cell1, cell2) => {
  return cell1.atomicNum - cell2.atomicNum
})
.forEach(({ atomicNum, label, name, bgColor, textColor }, i) => {
  table2.insertAdjacentHTML('beforeend', getCellMarkup({ atomicNum, label, name, bgColor, textColor }));

  switch (atomicNum) {
  
    default:
      break;
  }
})