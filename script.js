'use strict';

// let initDOM;
// let comparedDOM;

// setTimeout(function() 
// {
//     initDOM = document.getElementById('DOM').innerHTML;
// }, 1000);

// let checkDOM = setInterval(() => {
//     comparedDOM = document.getElementById('DOM').innerHTML;

//     if (comparedDOM !== initDOM)
//     {
//         document.write(`<h1 style="font-size:40px;text-align:center;">INVALID ACTION DETECTED: CONNECTION TERMINATED!</h1>`)
//         clearInterval(checkDOM);
//     }
// }, 1100);

/* ===================================================================================== */

setTimeout(function() {
    document.getElementById('loadingCover').style.background = 'transparent';
}, 900);

setTimeout(function() {
    document.getElementById('loadingCover').style.color = 'transparent';
}, 900);

setTimeout(function() {
    document.getElementById('loadingCover').style.zIndex = '-99'
}, 1200);


setInterval(function() {

    if (window.scrollY > 0)
    {
        document.getElementById('navBar').style = 'background:rgba(0,0,0,0.68);';
    }else if (window.scrollY == 0)
     {
        document.getElementById('navBar').style = 'background:transparent;border-bottom:transparent;';
     }
}, 500);

/* ===================================================================================== */

function toAbout() 
{
    document.getElementById('aboutSection').scrollIntoView();
}

document.querySelector('.phone-nav').addEventListener('click',function()
{
    document.querySelector('.phone-nav__menu').style = 'transform:translate(0px,0px); z-index:999; opacity:1;';
})
document.querySelector('#closePhoneNavMenu').addEventListener('click',function()
{
    document.querySelector('.phone-nav__menu').style = 'transform:translate(-2000px,0px); z-index:-999; opacity:0;';
})

/* ===================================================================================== */

var currentImage = 1;

setInterval(function() {

    if (currentImage == 0)
    {
        document.querySelector('header').style = `background: url('Images/HeaderAnimation/BayfrontPark.jpg'); background-position: bottom; background-size: cover; background-repeat: no-repeat; background-attachment: fixed;`;
        document.getElementById('dot1').style.backgroundColor = 'rgb(255, 174, 0)';
        document.getElementById('dot4').style.backgroundColor = 'white';
        currentImage++;
    }
     else if (currentImage == 1)
     {
        document.querySelector('header').style = `background: url('Images/HeaderAnimation/DundasPeak.jpg'); background-position: bottom; background-size: cover; background-repeat: no-repeat; background-attachment: fixed;`;
        document.getElementById('dot2').style.backgroundColor = 'rgb(255, 174, 0)';
        document.getElementById('dot1').style.backgroundColor = 'white';
        currentImage++;
     }
      else if (currentImage == 2)
      {
        document.querySelector('header').style = `background: url('Images/HeaderAnimation/ForestSunLeaves.jpg'); background-position: right; background-size: cover; background-repeat: no-repeat; background-attachment: fixed;`
        document.getElementById('dot3').style.backgroundColor = 'rgb(255, 174, 0)';
        document.getElementById('dot2').style.backgroundColor = 'white';
        currentImage++;
      }
       else if (currentImage == 3)
       {      
        document.querySelector('header').style = `background: url('Images/HeaderAnimation/China1.jpg'); background-position: left; background-size: cover; background-repeat: no-repeat; background-attachment: fixed;`
        document.getElementById('dot4').style.backgroundColor = 'rgb(255, 174, 0)';
        document.getElementById('dot3').style.backgroundColor = 'white';
        currentImage = 0;
       }
}, 4500);

