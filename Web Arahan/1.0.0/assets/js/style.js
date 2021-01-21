
// (function beliTryoutDetail(){
//     const btnTps = document.getSelection('.beli-tryout-detail .info-mapel-tryout .content nav .navigation');
//     const cardTps = document.getSelection('.beli-tryout-detail .info-mapel-tryout .content .content-body .card-tps');
//     const cardTka = document.getSelection('.beli-tryout-detail .info-mapel-tryout .content .content-body .card-tka');
//     btnTps.addEventListener().on("click", function(){
//         cardTps.removeClass('disable');
//         cardTka.addClass('disable');
//         alert("yopiangga");
//     });

// })()


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