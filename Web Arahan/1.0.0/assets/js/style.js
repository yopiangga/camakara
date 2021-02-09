
$('.beli-tryout-detail .info-mapel-tryout .content nav .nav-left').click(function(){
    $('.beli-tryout-detail .info-mapel-tryout .content nav .nav-left').addClass('active');
    $('.beli-tryout-detail .info-mapel-tryout .content nav .nav-right').removeClass('active');
    $('.beli-tryout-detail .info-mapel-tryout .content .content-body .card-tka').addClass('disable');
    $('.beli-tryout-detail .info-mapel-tryout .content .content-body .card-tps').removeClass('disable');
});

$('.beli-tryout-detail .info-mapel-tryout .content nav .nav-right').click(function(){
    $('.beli-tryout-detail .info-mapel-tryout .content nav .nav-left').removeClass('active');
    $('.beli-tryout-detail .info-mapel-tryout .content nav .nav-right').addClass('active');
    $('.beli-tryout-detail .info-mapel-tryout .content .content-body .card-tka').removeClass('disable');
    $('.beli-tryout-detail .info-mapel-tryout .content .content-body .card-tps').addClass('disable');
});


$(window).scroll(function(){
    var scroll = $(window).scrollTop();

    if(scroll > 50){
        $(".nav-desktop").addClass("active");
        $(".nav-mobile").addClass("active");
    } else {
        $(".nav-desktop").removeClass("active");
        $(".nav-mobile").removeClass("active");
    }
    
})

$('.nav-mobile .content .btn-menu i').click(function(){
    $('.menu#mobile').toggleClass('active');
});




$('.product-page .cari-tryout .content .content-heading .navigation ul a.all').click(function(){
    $('.product-page .card-tryout .content .card.cardUtbk').removeClass('unActive')
    $('.product-page .card-tryout .content .card.cardBebas').removeClass('unActive')
    $('.product-page .card-tryout .content .card.cardPaket').removeClass('unActive')
    $('.product-page .card-tryout .content .card.cardKuno').removeClass('unActive')

    $('.product-page .cari-tryout .content .content-heading .navigation ul a.all').addClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aUtbk').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aBebas').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aPaket').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aKuno').removeClass('active')
});

$('.product-page .cari-tryout .content .content-heading .navigation ul a.aUtbk').click(function(){
    $('.product-page .card-tryout .content .card.cardUtbk').removeClass('unActive')
    $('.product-page .card-tryout .content .card.cardBebas').addClass('unActive')
    $('.product-page .card-tryout .content .card.cardPaket').addClass('unActive')
    $('.product-page .card-tryout .content .card.cardKuno').addClass('unActive')

    $('.product-page .cari-tryout .content .content-heading .navigation ul a.all').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aUtbk').addClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aBebas').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aPaket').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aKuno').removeClass('active')
});

$('.product-page .cari-tryout .content .content-heading .navigation ul a.aBebas').click(function(){
    $('.product-page .card-tryout .content .card.cardUtbk').addClass('unActive')
    $('.product-page .card-tryout .content .card.cardBebas').removeClass('unActive')
    $('.product-page .card-tryout .content .card.cardPaket').addClass('unActive')
    $('.product-page .card-tryout .content .card.cardKuno').addClass('unActive')

    $('.product-page .cari-tryout .content .content-heading .navigation ul a.all').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aUtbk').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aBebas').addClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aPaket').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aKuno').removeClass('active')
});

$('.product-page .cari-tryout .content .content-heading .navigation ul a.aPaket').click(function(){
    $('.product-page .card-tryout .content .card.cardUtbk').addClass('unActive')
    $('.product-page .card-tryout .content .card.cardBebas').addClass('unActive')
    $('.product-page .card-tryout .content .card.cardPaket').removeClass('unActive')
    $('.product-page .card-tryout .content .card.cardKuno').addClass('unActive')

    $('.product-page .cari-tryout .content .content-heading .navigation ul a.all').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aUtbk').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aBebas').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aPaket').addClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aKuno').removeClass('active')
});

$('.product-page .cari-tryout .content .content-heading .navigation ul a.aKuno').click(function(){
    $('.product-page .card-tryout .content .card.cardUtbk').addClass('unActive')
    $('.product-page .card-tryout .content .card.cardBebas').addClass('unActive')
    $('.product-page .card-tryout .content .card.cardPaket').addClass('unActive')
    $('.product-page .card-tryout .content .card.cardKuno').removeClass('unActive')

    $('.product-page .cari-tryout .content .content-heading .navigation ul a.all').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aUtbk').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aBebas').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aPaket').removeClass('active')
    $('.product-page .cari-tryout .content .content-heading .navigation ul a.aKuno').addClass('active')
});