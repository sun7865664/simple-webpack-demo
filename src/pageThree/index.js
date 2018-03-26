import style from './index.css';

const app = document.getElementById('app');

let h2 = document.createElement('h2');
h2.innerText = 'this is pageThree!';
h2.className = style.h2;

app.append(h2);

app.appendChild(document.createTextNode('something'));
