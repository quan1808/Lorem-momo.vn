﻿$(document).ready(function () {
    //Set footer to bottom
    var screenHeight = $(window).height();
    var headerHeight = $("#header-container").outerHeight();
    var footerHeight = $("footer").outerHeight();
    var topmenuHeight = $(".bottom-menu-wrap").is(":hidden") ? 0 : $(".bottom-menu-wrap").outerHeight();
    var mainHeight = screenHeight - headerHeight - topmenuHeight - footerHeight;
    $(".main-content.container").css("min-height", mainHeight);
    //event Show menu login account
	$(".account").mouseenter(function(){
		if ($(".login-wrap").is(":visible") == true) return;//nếu đã hiển thị rồi thì out
		$(".login-wrap").slideToggle( "slow" );//hiển thị đăng nhập
	});

	//event Ẩn menu login
	$("#main").mouseenter(function(event){
		$(".login-wrap").hide();
	});
	
    /*tab-active*/
    //Event show menu bottom
	$(".bottom-menu li").hover(function(){
		$(".bottom-menu ul li").removeClass("active-tab");
		$(".layer-item").css("visibility","visible");
		$(".layer-section").hide();
		
		$(this).addClass("active-tab");
		var parent = $(this).attr("parent");
		var activeTab = "#" + parent;
		$(activeTab).show();
	});
	
    //event ẩn menu bottom
	$(".layer-item").mouseleave(function(){
		$(".layer-item").css("visibility","");
		$(".bottom-menu ul li").removeClass("active-tab");
		
	});

	var layerItem =  $(".cms-home .layer-item").width();
	$(".cms-home .layer-item").css("margin-left",-layerItem/2);
	
	/*toggle menu*/
	//Sự kiện click vào menu 3 gạch
	$(".mobile-menu").click(function(e){
	    $(".login-wrap").hide();//ẩn login
	    if ($(".wrapper").height() != 0) //dành cho các trang con
	        $("#mega-menu").css("height", $(".wrapper").height());//set full chiều cao cho mega menu
	    $("#mega-menu").toggle("slide", { direction: "left" }, 500);//hiện mega menu
	    //e.preventDefault();
	    e.stopImmediatePropagation();//quan trọng phải có để bỏ event document click đóng mega-menu
	});
	
	//click dấu X đóng menu 3 gạch
	$("#mega-menu .glyphicon-remove-sign").click(function () {
	    CloseMegaMenu();
	});

    //click vào document đóng mega menu
	$(document).click(function (e) {
	    //nếu mega menu đang hiện và ko có cha là mega-menu
	    if ($("#mega-menu").is(":visible") && !$(e.target).closest("#mega-menu").length) {
	        CloseMegaMenu();
	    }
	});

	//click vào từng menu cha trong mega-menu
	$("#mega-menu li.parent").click(function(){
		if($(this).has("ul")){	
			ToggleMenu(this);//show menu
		}
	});
	
	$(".acc-mb-icon").click(function(){
		$(".login-wrap").slideToggle( "slow" );
	});
	
	////MOBILE event==============
	//click vào menu footer
	$(".bottom-menu li").on("click",function(e){//click vào icon footer cho show menu
		if($(".mobile-menu").is(":visible"))//nếu có icon mobile thì mới có sự kiện này
		{
			if ($("#mega-menu").is(":hidden")) //nếu menu 3 gạch chưa mở
			{
			    $("#mega-menu").toggle("slide", { direction: "left" }, 500);
			}
			var item = $(this).attr("parent");
			switch(item)
			{
				case "service-place":
					ToggleMenu(".momo-service.parent");
					break;
				case "application":
					ToggleMenu(".momo-app.parent");
					break;
				case "cus-com":
					ToggleMenu(".momo-customer.parent");
					break;
				case "charity":
					ToggleMenu(".momo-charity.parent");
					break;
			}
			
			e.stopImmediatePropagation();//quan trọng phải có để bỏ event document click đóng mega-menu
		}
	});

	//Sticky mobile footer
	$(".icon-footer-show").click(function(){
	    $(".footer-mobile ul").toggle("slide", { direction: "right" }, 500, function () {
	        $(".icon-footer-hide").show();
	        $(".icon-footer-show").hide();
	    });
		
	});
	$(".icon-footer-hide").click(function(){
	    $(".footer-mobile ul").toggle("slide", { direction: "right" }, 500,function() {
	        $(".icon-footer-show").show();
	        $(".icon-footer-hide").hide();
	    });
		
	});
	
    //SELECT CHANGE
	$(".select-news select").change(function () {
	    location.href = $(this).val();
	});

    //remove element css của ảnh và video cho scale lại đúng tỷ lệ màn hình
	//$(".tblImage").removeAttr("style");
	//$(".tblImage img").removeAttr("style");
	if ($(window).width() < 600) {
	    $(".tblImage").removeAttr("style");
	    $(".tblImage img").removeAttr("style");
	    $(".full-content iframe").attr("width", $(window).width()-20);
	    $(".full-content iframe").attr("height", $(window).width()*3/4);
	}
	
});

$(window).resize(function(){
	var layerItem =  $(".cms-home .layer-item").width();
	$(".cms-home .layer-item").css("margin-left", -layerItem / 2);
});

//mở menu con trong mega-menu
function ToggleMenu(id)
{
	if($(id).find("ul").is(":hidden"))//nếu menu con chưa đươc mở
	{
		$("#mega-menu li.parent").find("ul:visible").slideToggle( "slow" ); 
		$(id).find(".glyphicon-last").removeClass("glyphicon-chevron-down").addClass("glyphicon-chevron-up");//đổi dấu mũi lên
		$(id).find("ul").slideToggle( "slow" );
	}
	else{//nếu menu con mở rồi
		$("#mega-menu li.parent").find("ul:visible").slideToggle( "slow" ); 
		$(id).find(".glyphicon-last").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");
	}
}

function CloseMegaMenu() {
    $("#mega-menu").toggle("slide", { direction: "left" }, 500);
    $("#mega-menu li.parent").find("ul:visible").slideToggle("slow"); //đóng các list menu con nếu đang visible
    $("#mega-menu li.parent").find(".glyphicon-last").removeClass("glyphicon-chevron-up").addClass("glyphicon-chevron-down");//để icon mũi tên về mặc định
}



