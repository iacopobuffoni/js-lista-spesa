
const items = [
    'Latte',
    'Uova',
    'Pane',
    'Carne',
    'Acqua',
    'Fazzoletti'
];

const itemsList = document.getElementById('items');

let i = 0;

while(i < items.length) {

    const newLi = document.createElement('li');
    newLi.innerHTML = items[i];
    itemsList.append(newLi);
    console.log(items[i]);
    i++;

}