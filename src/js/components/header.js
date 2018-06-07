var btn = $('.header-body__burger');
var menu = $('.header-body');
var mask = $('.mask');

function menuShow() {
    btn.on('click', function() {
        menu.toggleClass('is-active');       mask.toggleClass('is-active');
    })
}
