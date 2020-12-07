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
}, 1900);


setInterval(function() {

    if (window.scrollY > 0)
    {
        document.getElementById('navBar').style = 'background:rgba(0,0,0,0.68);border-bottom:1px darkgrey solid;';
    }else if (window.scrollY == 0)
     {
        document.getElementById('navBar').style = 'background:transparent;border-bottom:transparent;';
     }
}, 500);

/* ===================================================================================== */

var currentImage = 1;

setInterval(function() {

    if (currentImage == 0)
    {
        document.querySelector('header').style = `background: url('Images/My Images/IMG_20181006_180118.jpg');background-position: bottom; background-size: cover; background-repeat: no-repeat; background-attachment: fixed;`;
        currentImage++;
    }else if (currentImage == 1)
     {
        document.querySelector('header').style = `background: url('Images/My Images/PANO_20181008_175039.jpg');background-position: bottom; background-size: cover; background-repeat: no-repeat; background-attachment: fixed;`;
        currentImage++;
     }
     else if (currentImage == 2)
     {
         document.querySelector('header').style = `background: url('Images/My Images/IMG_20201023_170602.jpg');background-position: bottom; background-size: cover; background-repeat: no-repeat; background-attachment: fixed;`
         currentImage = 0;
     }
}, 5000);

