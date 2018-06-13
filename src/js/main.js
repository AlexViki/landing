//=require components/**.*

console.log('Hi from main.js');

// функция описана в файле header.js
$(window).ready(function() {
    menuShow();

    // запуск слайдера с ресурса flickity.metafizzy.co
    // для блока <!-- Begins Meet Brandi! -->
    $('.intro-list').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
    });

    // запуск слайдера с ресурса flickity.metafizzy.co
    // для блока <!-- Begins Meet Brandi! -->
    $('.features-items').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
    });

    // запуск слайдера с ресурса flickity.metafizzy.co
    // для блока <!-- Begins Team -->
    $('.team-people').flickity({
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false
    });

    filter();


})

