$(document).ready(function(){
    $(".fechar-modal,.fundo-modal").click(function(){
        $(".container-modal").hide();
    });
    

    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $("header").addClass("topo-fixo");
        }else{
            $("header").removeClass("topo-fixo");
        }
    });

    // ACCORDION
    $(".menu p").click(function(){
        $(this).next(".submenu").toggle("fast");
        $(this).toggleClass("open");
    });

});