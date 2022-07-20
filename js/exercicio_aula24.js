$(document).ready(function(){
    $(".artigo").hide();
    $(".leia").click(function(){
        $(".artigo").show();
        $(".leia").hide();
    });

    // Continuar lendo
    $(".continuar").hide();
    $(".cont").click(function(){
        $(".continuar").show();
        $(".cont").hide();
    });


    $(".conheca1").click(function(){
        $(".conheca1").attr("src","Imagens/Fotos/flor1.png");
        $(".conheca1").attr("alt","Flor 1");
    });
    $(".conheca2").click(function(){
        $(".conheca2").attr("src","Imagens/Fotos/flor2.png");
        $(".conheca2").attr("alt","Flor 2");
    });
    $(".conheca3").click(function(){
        $(".conheca3").attr("src","Imagens/Fotos/flor3.png");
        $(".conheca3").attr("alt","Flor 3");
    });
});