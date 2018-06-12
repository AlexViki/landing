//=require components/**.*

console.log('Hi from main.js');

// функция описана в файле header.js
$(window).ready(function() {
    menuShow();
})

// запуск слайдера с ресурса flickity.metafizzy.co
$('.intro-list').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false
});
