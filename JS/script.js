function changeH1() {
document.getElementById("h1").innerHTML = "Hello World"
};

function colorP() {
document.querySelectorAll('p').forEach(e => e.style.color = "red")
};

function rotate() {
document.querySelectorAll('li').forEach(e => e.style.transform = 'rotate(45deg)')
};

function hide() {
document.querySelectorAll('h1,h2,h3,h4').forEach(e => e.style.display = "none")
};

function addLi() {
let liste = document.getElementById('liste');
let li = document.createElement('li');
li.textContent = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.';
liste.appendChild(li);
element.insertBefore(li,element.children[5]);
};

function rotatebody() {
    document.getElementById('body').style.transform = 'rotate(-15deg)'
    };







