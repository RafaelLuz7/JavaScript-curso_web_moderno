let isAtivo = false;
console.log(isAtivo);
isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!!isAtivo);// força pra boolean

console.log('os verdadeiros...')
console.log(!!3);
console.log(!!-1);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
console.log(!!(isAtivo = true));

console.log('os falsos...');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

let nome = 'Rafael';
console.log(nome || 'Desconhecido');
let b = '';
console.log(b || 'Desconhecido');