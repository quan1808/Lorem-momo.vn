function setCurTime0() {
    "use strict";
    vid.currentTime = 0
}

function setCurTime17() {
    "use strict";
    vid.currentTime = 18
}

function setCurTime25() {
    "use strict";
    vid.currentTime = 27
}

function setCurTime49() {
    "use strict";
    vid.currentTime = 51
}

function changeMobileMenuArrow() {
    "use strict";
    "images/ExpandDown.png" === document.getElementById("menuIconArrow").getAttribute("src") ? document.getElementById("menuIconArrow").src = "images/CollapseUp.png" : "images/CollapseUp.png" === document.getElementById("menuIconArrow").getAttribute("src") && (document.getElementById("menuIconArrow").src = "images/ExpandDown.png")
}
var $ = this.$,
    document = this.document,
    console = this.console;
$(document).ready(function () {
    "use strict";
    var e = 100,
        s = 1200,
        t = $(".cd-top");
    $(window).scroll(function () {
        $(this).scrollTop() > e ? t.addClass("cd-is-visible") : t.removeClass("cd-is-visible cd-fade-out"), $(this).scrollTop() > s && t.addClass("cd-fade-out")
    }), jQuery.scrollSpeed(150, 800), window.onbeforeunload = function () {
        window.scrollTo(0, 0)
    }, $(".bxslider").bxSlider({
        auto: !0,
        pager: !1,
        "default": 500
    }), $(".tieude").click(function () {
        var e = $(this).parent().find(".noidung");
        "none" === e.css("display") ? ($(this).parent().find(".menuIconArrow").attr("src", "images/CollapseUp.png")) : ($(this).parent().find(".menuIconArrow").attr("src", "images/ExpandDown.png"))
    }), $("#btn-type-share").addClass("btn-share-active"), $("#nguoi-chia-se").css("display", "block"), $("#btn-type-shared").click(function () {
        $("#nguoi-chia-se").css("display", "none"), $("#nguoi-duoc-chia-se").css("display", "block"), $("#btn-type-share").removeClass("btn-share-active"), $("#btn-type-shared").addClass("btn-share-active")
    }), $("#btn-type-share").click(function () {
        $("#nguoi-duoc-chia-se").css("display", "none"), $("#nguoi-chia-se").css("display", "block"), $("#btn-type-share").addClass("btn-share-active"), $("#btn-type-shared").removeClass("btn-share-active")
    }), $(".regular").slick({
        autoplay: !0,
        autoplaySpeed: 2e3,
        infinite: !0,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: "<img class='a-left control-c prev slick-prev' src='../chiasemomo/images/T.png'>",
        nextArrow: "<img class='a-right control-c next slick-next' src='../chiasemomo/images/P.png'>",
        responsive: [{
            breakpoint: 480,
            settings: {
                infinite: !0,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    }), $(".share").click(function () {
        $("html, body").animate({
            scrollTop: $("#share").offset().top - 10
        }, "slow")
    }), $(".guide").click(function () {
        $("html, body").animate({
            scrollTop: $("#guide").offset().top - 50
        }, "slow")
    }), $(".rule-faq").click(function () {
        $("html, body").animate({
            scrollTop: $("#rule-faq").offset().top - 50
        }, "slow")
    }), $(window).scroll(function () {
        $(this).scrollTop() > 100 ? $("#scroll-top").fadeIn() : $("#scroll-top").fadeOut()
    }), $("#scroll-top").click(function () {
        return $("html, body").animate({
            scrollTop: 0
        }, 800), !1
    })
});
var vid = document.getElementById("playvideo");
