$(document).ready(function(){
    $(".menu-hamburguer").click(function(){
        $(this).next(".conteudo-modal").toggle();
        $(this).toggleClass("show");
    });
    
    $(".menu p").click(function(){
        $(this).next(".submenu").toggle("fast");
        $(this).toggleClass("open");
    });
});