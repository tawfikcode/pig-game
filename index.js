"use strict";


const active = 'player--active';
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const con = document.querySelector('.container')
const body = document.querySelector('body')
const current = document.querySelector('.current')
let score1 = 0;
let score2 = 0;
let current1 = 0;
let current2 = 0;
const diceEL = document.querySelector('.dice')
document.querySelector('.roll').addEventListener('click', function () {

    let number = Math.floor(Math.random() * 6) + 1

    diceEL.style.display = 'block'
    diceEL.src = `dice-${number}.png`

    if (number === 1) {

        document.querySelector('.player--active .downscore').textContent = 0;

        if (p1.classList.contains(active) === true) {
            current1 = 0;
            p1.classList.remove(active);
            p2.classList.add(active);


        } else {
            current2 = 0;
            p2.classList.remove(active);
            p1.classList.add(active)


        }


    } else if (number !== 1 && p1.classList.contains(active)) {
        current1 = current1 + number;
        document.querySelector('.p1 .downscore').textContent = current1


    } else {

        current2 = current2 + number;
        document.querySelector('.p2 .downscore').textContent = current2

    }
})


document.querySelector('.hold').addEventListener('click', function () {

diceEL.style.display = 'none'
    if (p1.classList.contains(active)) {

        score1 = score1 + current1;
        current1 = 0;
        document.querySelector('.p1 .downscore').textContent = current1
        document.querySelector('.p1 .score').textContent = score1;

        if (score1 > 100) {

            p1.style.flex = '100%';
            p1.style.transition = '1s , all'
            p1.style.backgroundColor = 'green'
            body.style.backgroundImage = 'linear-gradient(to top left, darkgreen 50%, yellow 50%)'
            document.querySelector('.p1 .current').style.display = 'none'
            p1.querySelector('.score').textContent = 'WINNER'
            document.querySelector('.p1 .score').style.color = 'gold'

            p2.style.display = 'none'



        } else {

            p1.classList.remove(active);
            p2.classList.add(active);
        }

    } else {

        score2 = score2 + current2;
        current2 = 0;
        document.querySelector('.p2 .downscore').textContent = current2
        document.querySelector('.p2 .score').textContent = score2;


        if (score2 > 100) {

            p2.style.flex = '100%';
            p2.style.transition = '1s , all'
            p1.style.display = 'none'
            p2.style.backgroundColor = 'green'
            body.style.backgroundImage = 'linear-gradient(to top left, darkgreen 50%, yellow 50%)'
            document.querySelector('.p2 .current').style.display = 'none'
            p2.querySelector('.score').textContent = 'WINNER'
            document.querySelector('.p2 .score').style.color = 'gold'


        } else {
            p2.classList.remove(active)
            p1.classList.add(active)
        }
    }


})


document.querySelector('.new').addEventListener('click', function () {
    diceEL.style.display = 'none'
    if(score1 > 100 ){
        p2.style.display = 'flex'
        p1.style.flex = '50%';
        p1.style.transition = '1s , all'
        p1.querySelector('.score').textContent = '0'
        p1.style.backgroundColor = ''
        body.style.backgroundImage = 'linear-gradient(to top left, #753682 0%, #bf2e34 100%)'
        document.querySelector('.p1 .score').style.color = ''
        document.querySelector('.p1 .current').style.display = 'block'



    }

    else if(score2 > 100){

        p1.style.display = 'flex'
        p2.style.flex = '50%';
        p2.style.transition = '1s , all'
        p2.querySelector('.score').textContent = '0'
        p2.style.backgroundColor = ''
        body.style.backgroundImage = 'linear-gradient(to top left, #753682 0%, #bf2e34 100%)'
        document.querySelector('.p2 .score').style.color = ''
        document.querySelector('.p2 .current').style.display = 'block'





    }

    score1 = 0;
    score2 = 0;
    document.querySelector('.p1 .score').textContent = 0;
    document.querySelector('.p2 .score').textContent = 0;


    if (p1.classList.contains(active)) {

        current1 = 0
        document.querySelector('.p1 .downscore').textContent = 0


    } else {

        current2 = 0;
        document.querySelector('.p2 .downscore').textContent = 0


    }




    p1.classList.add(active);
    p2.classList.remove(active);


})