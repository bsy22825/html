$(function(){
    //메뉴
    $('.nav ul li').mouseover(function(){
        $(this).find('.sub').stop().slideDown();
    });
    $('.nav ul li').mouseout(function(){
        $(this).find('.sub').stop().slideUp();
    });

    //모달팝업

    $('.popup-open').click(function(){
        $('.popup').show()
    });
    $('button').click(function(){
        $('.popup').hide()
    });

    //페이드인아웃

    var i = 0;

    function slider() {
        if(i < 2){
            i++;
        } else {
            i = 0;
        }
        $("#slider ul li").fadeOut();
        $("#slider ul li").eq(i).fadeIn();
        }
        setInterval(slider, 3000);

        $('.tabmenu > li').click(function(){
            $('.tabmenu > li').removeClass('.on');
            $(this).addClass('.on');

            i=$(this).index();
            console.log(i);
            $('.tabcon').hide();
            $('.tabcon').eq(i).show();

            return false;
        })

});