import styles from './styles.css';

const localButton = document.createElement('div');
console.log(localButton);
console.log("styles ",styles);
localButton.className = styles.localButton;
localButton.innerText = 'Local Button';
console.log(localButton);
document.body.appendChild(localButton);

const globalButton = document.createElement('div');
globalButton.className = 'global-button'; // Global class can be used directly
globalButton.innerText = 'Global Button';
document.body.appendChild(globalButton);