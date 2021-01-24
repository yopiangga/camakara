
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
    } else {
        $(".nav-desktop").removeClass("active");
    }
	
})