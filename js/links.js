/// GNB메뉴 링크 연결 JS - linksys.js ///

$(function () { /////// jQB ///////////////////////
    console.log("링크js");


    // index.html 섹션별로 서브페이지 이동
    $(".mainban_txt_area button ,#consultant_section2 button, #merit_section button").click(function () {
        location.href = "estimate.html"
    });

    $("#reviewSlideSection button").click(function () {
        location.href = "review.html"
    });

    $("#service_section button").click(function () {
        location.href = "service.html"
    });

    $("#main_estimate_section button").click(function () {
        location.href = "estimate.html"
    });

    $("#introduce_section button").click(function () {
        location.href = "introduce.html"
    });






    // center.html 지도버튼 누르면 카카오지도 페이지로 이동
    $(".center_wrap button").click(function () {
        window.open("http://kko.to/kvAIO7OZf");
    });


    

    // userguide.html  메뉴얼 누르면 pdf페이지로 이동
    $(".guide_area .guide_1").click(function () {
        window.open("../guide_pdf/vendor.html");
    });
    $(".guide_area .guide_2").click(function () {
        window.open("../guide_pdf/product_registration.html");
    });
    $(".guide_area .guide_3").click(function () {
        window.open("../guide_pdf/order.html");
    });
    $(".guide_area .guide_4").click(function () {
        window.open("../guide_pdf/cs.html");
    });
    $(".guide_area .guide_5").click(function () {
        window.open("../guide_pdf/unprocessed.html");
    });
    $(".guide_area .guide_6").click(function () {
        window.open("../guide_pdf/stock.html");
    });





    // estimate.html 설문지로 페이지 이동
    $(".estimate_wrap .estimate_box").click(function () {
        window.open("https://vlvxnkok05t.typeform.com/to/ZHYHQD3p");
    });


    //로고이미지 클릭하면 index.html로 이동
    $(".logo a,.event_wrap .logo a").click(function (e) {
        e.preventDefault();
        location.href = "index.html";
    }); ////////// click //////////////


    //로고이미지 클릭하면 index.html로 이동
    $(".event_wrap.event_article_wrap .logo a").click(function (e) {
        e.preventDefault();
        location.href = "../index.html";
    }); ////////// click //////////////





}); ////////// jQB ///////////////////////////////
/////////////////////////////////////////////////