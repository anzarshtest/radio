$(document).ready(function(){
    // $('.load').animate({'opacity': '0', 'z-index': '0'}, 1000);
    $('.radious a').click(function(){
        $('.radious a').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    $('.controls a').click(function(){
        $('.controls a').removeClass('active');
        $(this).addClass('active');
        var slide = $(this).attr('href');
        var item;
        var slides = $('.slide');
        slides.each(function(i, j){
            if('#'+$(this).attr('id') == slide){
                item = i;
            }
        });
        if(!slides.eq(item).hasClass('current')){
            var next = true;
            if(slides.eq(item).hasClass('prev')){
                next = false;
            }
            if(next){
                slides.eq(slides.length-1).after(slides.eq(0));
            } else {
                slides.eq(0).before(slides.eq(slides.length-1));
            }
            slides = $('.slide');
            slides.each(function(i, j){
                if('#'+$(this).attr('id') == slide){
                    item = i;
                }
            });
            slides.removeClass('current next prev');
            slides.eq(item).addClass('current');
            slides.eq((item+1)%slides.length).addClass('next');
            slides.eq(item-1).addClass('prev');
        }
        return false;
    });
});


