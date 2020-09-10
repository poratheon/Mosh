console.log('Testing 1...2...3..');

let name = 'Stephen';
console.log('Hello ' + name  + '.  Welcome!');

//Button testing
const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
    if (btn.textContent === 'Start machine') {
        btn.textContent = 'Stop machine';
        txt.textContent = 'The machine has started!';
        console.log('The button has been pressed');
    } else {
        btn.textContent = 'Start machine';
        txt.textContent = 'The machine is stopped.';
        console.log('The button has been pressed');
    }
}

