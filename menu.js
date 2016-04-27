var main = function(){
$('#mob-menu-btn').click(function(){
$('.slide-menu').animate({left:'0px'},200);
$('body').animate({left:'-375px'},200);
});
$('.icon-close').click(function(){
$('.slide-menu').animate({left:'-750px'},200);
$('body').animate({left:'0px'},200);
});
};
$(document).ready(main);