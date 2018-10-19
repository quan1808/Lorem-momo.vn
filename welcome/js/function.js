/* 
	* To change this license header, choose License Headers in Project Properties.
	* To change this template file, choose Tools | Templates
	* and open the template in the editor.
*/
// function sendSms() {
// 	$.ajax({
// 		url: "/agent/sendSms",
// 		dataType: 'html',
// 		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
// 		data: {
// 			sms_phone: $("#phone").val().trim(),
// 		},
// 		beforeSend: function () {
			
// 		},
// 		success: function (data) {
			
// 		},
// 		error: function (request, status, error) {
// 			alert(error)
// 		},
// 		complete: function () {
// 		}
// 	});
// }


function changeMobileMenuArrow() {
	if( document.getElementById("menuIconArrow").getAttribute("src") == "../microsite/image/ExpandDown.png" )
	{					
		document.getElementById("menuIconArrow").src = "../microsite/image/CollapseUp.png";				
	}
	else if ( document.getElementById("menuIconArrow").getAttribute("src") == "../microsite/image/CollapseUp.png" )
	{					
		document.getElementById("menuIconArrow").src = "../microsite/image/ExpandDown.png";
	}
}
function changeMobileMenuArrow1() {
	if( document.getElementById("menuIconArrow1").getAttribute("src") == "../microsite/image/ExpandDown.png" )
	{					
		document.getElementById("menuIconArrow1").src = "../microsite/image/CollapseUp.png";				
	}
	else if ( document.getElementById("menuIconArrow1").getAttribute("src") == "../microsite/image/CollapseUp.png" )
	{					
		document.getElementById("menuIconArrow1").src = "../microsite/image/ExpandDown.png";
	}
}
function changeMobileMenuArrowA() {
	if( document.getElementById("menuIconArrowA").getAttribute("src") == "../../microsite/image/ExpandDown.png" )
	{					
		document.getElementById("menuIconArrowA").src = "../../microsite/image/CollapseUp.png";				
	}
	else if ( document.getElementById("menuIconArrowA").getAttribute("src") == "../../microsite/image/CollapseUp.png" )
	{					
		document.getElementById("menuIconArrowA").src = "../../microsite/image/ExpandDown.png";
	}
}
function changeMobileMenuArrowB() {
	if( document.getElementById("menuIconArrowB").getAttribute("src") == "../../microsite/image/ExpandDown.png" )
	{					
		document.getElementById("menuIconArrowB").src = "../../microsite/image/CollapseUp.png";				
	}
	else if ( document.getElementById("menuIconArrowB").getAttribute("src") == "../../microsite/image/CollapseUp.png" )
	{					
		document.getElementById("menuIconArrowB").src = "../../microsite/image/ExpandDown.png";
	}
}
function darkOutMobileBody() {
	/*alert(document.getElementById("MobileBody").style.backgroundColor);*/
	
	if( document.getElementById("MobileBody").style.opacity == "1" )
	{					
		/*Open Menu*/
		document.getElementById("MobileBody").style.opacity = "0.2";
		document.getElementById("menuIconArrow").src = "../microsite/image/ExpandDown.png";
		document.getElementById("AddBottomBorder").style.borderBottom = "1px solid #d3d3d3";
		/*document.getElementById("MobileBody").style.backgroundColor = "#454445";*/
	}
	else if( document.getElementById("MobileBody").style.opacity == "0.2" )
	{	
		/*Close Menu*/
		document.getElementById("MobileBody").style.opacity = "1";
		document.getElementById("AddBottomBorder").style.borderBottom = "0px solid transparent";
		/*document.getElementById("MobileBody").style.backgroundColor = "transparent";*/
	}
}

