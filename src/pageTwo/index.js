import style from './index.css';

const app = document.getElementById('app');

let h2 = document.createElement('h2');
h2.innerText = 'this is pageTwo!';
h2.className = style.h2;
console.log(style.h2);

app.append(h2);
