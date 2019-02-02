// Your code goes here
let h1 = document.querySelector('.logo-heading');
h1.addEventListener('dblclick', e => {
    h1.style.color = 'red';
});

let anchor = document.querySelectorAll('.nav-link');
anchor.forEach(function(a) {
    let randStyle = Math.random() * 5.1;
    a.addEventListener('click', e => {
        e.preventDefault();
        if(randStyle <= 1.7) {
            return a.style.color = 'orange';
        } else if(randStyle <= 3.4) {
            return a.style.color = 'purple';
        } else {
            return a.style.color = 'green';
        }
    });
});

let imgFluid = document.querySelector('.img-fluid');
imgFluid.addEventListener('mouseenter', e => {
    imgFluid.setAttribute('style', 'border: 2px dashed pink; width: 95%; height: 95%;');
});
imgFluid.addEventListener('mouseleave', e => {
    imgFluid.setAttribute('style', 'border: 2px solid pink; width: 100%; height: 100%;')
});

let p = document.querySelectorAll('p');
p.forEach(function(elem) {
    elem.addEventListener('mouseover', e => {
        elem.style.backgroundColor = 'cornflowerblue';
    });
    elem.addEventListener('mouseleave', e => {
        elem.style.backgroundColor = 'white';
    });
});

let funBus = document.querySelector('.intro img');
funBus.addEventListener('contextmenu', e => {
    funBus.style.display = 'none';
});
funBus.addEventListener('dragstart', e => {
    funBus.style.borderRadius = '100px';
});
funBus.addEventListener('dragend', e => {
    funBus.style.borderRadius = '0';
});

let contentSection = document.querySelector('.home .content-section');
contentSection.addEventListener('dblclick', e => {
    contentSection.setAttribute('style', 'flex-direction: row-reverse;');
});
contentSection.addEventListener('click', e => {
    contentSection.setAttribute('style', 'flex-direction: row;');
});

let imgContent = document.querySelector('.img-content img');
imgContent.addEventListener('dragend', e => {
    imgContent.src = '../img/fun.jpg';
    imgFluid.src = '../img/adventure.jpg';
});
imgFluid.addEventListener('dragend', e => {
    imgContent.src = '../img/adventure.jpg';
    imgFluid.src = '../img/fun.jpg';
});

let contentPick = document.querySelector('.content-pick');
contentPick.addEventListener('click', e => {
    alert('ContentPick area is clickbait');
});

let button = document.querySelectorAll('.btn');
button.forEach(function(elem) {
    elem.addEventListener('click', e => {
         elem.style.fontSize = '2.4rem';
         elem.style.color = 'black';
         e.stopPropagation();
    });
});

let footer = document.querySelector('.footer');
footer.addEventListener('contextmenu', e => e.preventDefault());