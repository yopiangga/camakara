


$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll > 50) {
        $(".nav-desktop").addClass("active");
        $(".nav-mobile").addClass("active");
    } else {
        $(".nav-desktop").removeClass("active");
        $(".nav-mobile").removeClass("active");
    }

})

$('.nav-mobile .content .btn-menu i').click(function () {
    $('.menu#mobile').toggleClass('active');
});




$('.product-page .cari-tryout .content .content-heading .navigation ul a.all').click(function () {
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

$('.product-page .cari-tryout .content .content-heading .navigation ul a.aUtbk').click(function () {
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

$('.product-page .cari-tryout .content .content-heading .navigation ul a.aBebas').click(function () {
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

$('.product-page .cari-tryout .content .content-heading .navigation ul a.aPaket').click(function () {
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

$('.product-page .cari-tryout .content .content-heading .navigation ul a.aKuno').click(function () {
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


var cardTestimoniDesktop = document.querySelectorAll('.testimonial-page .testimonial-section#desktop .content .content-body .card-group .card-slide .card');
var navigasiTestimonialDesktop = 0;
$('.testimonial-page .testimonial-section#desktop .content .content-body .card-group .card-slide').css({"left" : 0, "transition" : "900ms"});

$('.testimonial-page .testimonial-section#desktop .content .content-body .circle-right').click(function () {
    if( navigasiTestimonialDesktop <= (cardTestimoniDesktop.length - 2) * 340 ){
        navigasiTestimonialDesktop = navigasiTestimonialDesktop + 340;
        $('.testimonial-page .testimonial-section#desktop .content .content-body .card-group .card-slide').css({"left" : -navigasiTestimonialDesktop, "transition" : "900ms"});
    }
});

$('.testimonial-page .testimonial-section#desktop .content .content-body .circle-left').click(function () {
    if(navigasiTestimonialDesktop >= 340 && navigasiTestimonialDesktop <= cardTestimoniDesktop.length * 430 ){
        navigasiTestimonialDesktop = navigasiTestimonialDesktop - 340;
        $('.testimonial-page .testimonial-section#desktop .content .content-body .card-group .card-slide').css({"left" : -navigasiTestimonialDesktop, "transition" : "900ms"});
    }
});


var cardTestimoniMobile = document.querySelectorAll('.testimonial-page .testimonial-section#mobile .content .content-body .card-group .card-slide .card');
var navigasiTestimonialMobile = 0;
$('.testimonial-page .testimonial-section#mobile .content .content-body .card-group .card-slide').css({"left" : 0, "transition" : "900ms"});

$('.testimonial-page .testimonial-section#mobile .content .content-body .circle-right').click(function () {
    if( navigasiTestimonialMobile <= (cardTestimoniMobile.length - 2) * 310 ){
        navigasiTestimonialMobile = navigasiTestimonialMobile + 310;
        $('.testimonial-page .testimonial-section#mobile .content .content-body .card-group .card-slide').css({"left" : -navigasiTestimonialMobile, "transition" : "900ms"});
    }
});

$('.testimonial-page .testimonial-section#mobile .content .content-body .circle-left').click(function () {
    if(navigasiTestimonialMobile >= 310 && navigasiTestimonialMobile <= cardTestimoniMobile.length * 340 ){
        navigasiTestimonialMobile = navigasiTestimonialMobile - 310;
        $('.testimonial-page .testimonial-section#mobile .content .content-body .card-group .card-slide').css({"left" : -navigasiTestimonialDesktop, "transition" : "900ms"});
    }
});


$('.nav-desktop .content .icon .icon-profile').click(function(){
    $('.nav-desktop .content .icon .dropdownProfile').toggleClass('active')
})

$('.nav-mobile .content .icon .icon-profile').click(function(){
    $('.nav-mobile .content .icon .dropdownProfile').toggleClass('active')
})

$('section').click(function(){
    $('.nav-desktop .content .icon .dropdownProfile').removeClass('active')
    $('.nav-mobile .content .icon .dropdownProfile').removeClass('active')
})



$('.beli-tryout-detail .info-mapel-tryout .content nav .nav-left').click(function () {
    $('.beli-tryout-detail .info-mapel-tryout .content nav .nav-left').addClass('active');
    $('.beli-tryout-detail .info-mapel-tryout .content nav .nav-right').removeClass('active');
    $('.beli-tryout-detail .info-mapel-tryout .content .content-body .card-tka').addClass('disable');
    $('.beli-tryout-detail .info-mapel-tryout .content .content-body .card-tps').removeClass('disable');
});

$('.beli-tryout-detail .info-mapel-tryout .content nav .nav-right').click(function () {
    $('.beli-tryout-detail .info-mapel-tryout .content nav .nav-left').removeClass('active');
    $('.beli-tryout-detail .info-mapel-tryout .content nav .nav-right').addClass('active');
    $('.beli-tryout-detail .info-mapel-tryout .content .content-body .card-tka').removeClass('disable');
    $('.beli-tryout-detail .info-mapel-tryout .content .content-body .card-tps').addClass('disable');
});

$('.tryout-detail .info-mapel-tryout .content nav .nav-left').click(function () {
    $('.tryout-detail .info-mapel-tryout .content nav .nav-left').addClass('active');
    $('.tryout-detail .info-mapel-tryout .content nav .nav-right').removeClass('active');
    $('.tryout-detail .info-mapel-tryout .content .content-body .card-tka').addClass('disable');
    $('.tryout-detail .info-mapel-tryout .content .content-body .card-tps').removeClass('disable');
});

$('.tryout-detail .info-mapel-tryout .content nav .nav-right').click(function () {
    $('.tryout-detail .info-mapel-tryout .content nav .nav-left').removeClass('active');
    $('.tryout-detail .info-mapel-tryout .content nav .nav-right').addClass('active');
    $('.tryout-detail .info-mapel-tryout .content .content-body .card-tka').removeClass('disable');
    $('.tryout-detail .info-mapel-tryout .content .content-body .card-tps').addClass('disable');
});


$('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select').click(function(){
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select .icon-right i').toggleClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body').toggleClass('active');
})

$('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bca').click(function(){
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bca .right i').addClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-mandiri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bni .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-alfamart .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-ovo .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-shopee .right i').removeClass('active');

    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .nama-bank').html("Bank BCA")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .no-rekening').html("112085775526608")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .atas-nama').html("demitesfaye")
})

$('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-mandiri').click(function(){
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bca .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-mandiri .right i').addClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bni .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-alfamart .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-ovo .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-shopee .right i').removeClass('active');

    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .nama-bank').html("Bank Mandiri")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .no-rekening').html("112085775526608")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .atas-nama').html("demitesfaye")
})

$('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bni').click(function(){
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bca .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-mandiri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bni .right i').addClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-alfamart .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-ovo .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-shopee .right i').removeClass('active');

    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .nama-bank').html("Bank BNI")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .no-rekening').html("112085775526608")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .atas-nama').html("demitesfaye")
})

$('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bri').click(function(){
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bca .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-mandiri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bni .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bri .right i').addClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-alfamart .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-ovo .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-shopee .right i').removeClass('active');

    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .nama-bank').html("Bank BRI")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .no-rekening').html("112085775526608")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .atas-nama').html("demitesfaye")
})

$('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-alfamart').click(function(){
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bca .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-mandiri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bni .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-alfamart .right i').addClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-ovo .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-shopee .right i').removeClass('active');

    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .nama-bank').html("Alfamart / Alfamidi")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .no-rekening').html("112085775526608")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .atas-nama').html("demitesfaye")
})

$('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-ovo').click(function(){
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bca .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-mandiri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bni .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-alfamart .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-ovo .right i').addClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-shopee .right i').removeClass('active');

    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .nama-bank').html("OVO")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .no-rekening').html("112085775526608")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .atas-nama').html("demitesfaye")
})

$('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-shopee').click(function(){
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bca .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-mandiri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bni .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group-select .group-right .select-body .btn-bri .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-alfamart .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-ovo .right i').removeClass('active');
    $('.topup-page .main .content .content-body .card-metode .form .form-group .group-right .btn-shopee .right i').addClass('active');

    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .nama-bank').html("Shopee Pay")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .no-rekening').html("112085775526608")
    $('.topup-page .main .content .content-body .card-transfer-detail .form .form-group .atas-nama').html("demitesfaye")
})




// Card Jumlah Top Up

$('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-10').click(function(){
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-10').addClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-20').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-50').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-100').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-200').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-300').removeClass('active');

    $('.topup-page .main .content .content-body .card-jumlah .form .form-group input').val(10000);
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-topup h4 span').html(10000)
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-pembayaran h4 span text').html(10000)
})

$('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-20').click(function(){
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-10').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-20').addClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-50').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-100').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-200').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-300').removeClass('active');

    $('.topup-page .main .content .content-body .card-jumlah .form .form-group input').val(20000);
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-topup h4 span').html(20000)
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-pembayaran h4 span text').html(20000)
})

$('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-50').click(function(){
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-10').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-20').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-50').addClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-100').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-200').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-300').removeClass('active');

    $('.topup-page .main .content .content-body .card-jumlah .form .form-group input').val(50000);
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-topup h4 span').html(50000)
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-pembayaran h4 span text').html(50000)
})

$('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-100').click(function(){
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-10').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-20').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-50').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-100').addClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-200').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-300').removeClass('active');

    $('.topup-page .main .content .content-body .card-jumlah .form .form-group input').val(100000);
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-topup h4 span').html(100000)
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-pembayaran h4 span text').html(100000)
})

$('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-200').click(function(){
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-10').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-20').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-50').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-100').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-200').addClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-300').removeClass('active');

    $('.topup-page .main .content .content-body .card-jumlah .form .form-group input').val(200000);
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-topup h4 span').html(200000)
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-pembayaran h4 span text').html(200000)
})

$('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-300').click(function(){
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-10').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-20').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-50').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-100').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-200').removeClass('active');
    $('.topup-page .main .content .content-body .card-jumlah .form .choice-group #choice-300').addClass('active');

    $('.topup-page .main .content .content-body .card-jumlah .form .form-group input').val(300000);
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-topup h4 span').html(300000)
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-pembayaran h4 span text').html(300000)
})

function inputTopUp(){
    let value = document.querySelector('.topup-page .main .content .content-body .card-jumlah .form .form-group input').value
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-topup h4 span').html(value)
    $('.topup-page .main .content .content-body .card-jumlah .form .form-group .jumlah-pembayaran h4 span text').html(value)
}

function checkUserTransfer() {
    $('.transferSesama-page .main .content .content-body .card-transfer-detail').addClass('active')
}