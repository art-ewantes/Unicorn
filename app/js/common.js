$(document).ready(function() {
	
	$('.award_info').addClass('animated fadeInLeft');
	$('.watch_us').addClass('animated fadeInDown');
	$('.overlay__').addClass('animated pulse');
	$(".aN").animated("fadeOutUp, pulse");
	$("h1").animated("pulse, fadeInRight");
	$("h2").animated("pulse, fadeInRight");
	$("#six_cap_about .six_cap_about_title").animated("pulse, fadeInLeft");
	$("#six_cap_about p").animated("pulse, fadeInLeft");
	$(".row_leader_board p").animated("pulse, fadeInLeft");
	$(".dev_item").animated("pulse, flipInY");
	$(".row_snbc_exchange p").animated("pulse, flipInY");
	$("#foreword .fixed_deg").animated("zoomOutDown, zoomInDown");
	$("#foreword h2").animated("zoomOutDown, zoomInDown");
	$(".logo").animated("pulse, flip");
	$("#pre_footer h3").animated("pulse, fadeInLeft");
	$("#participants .nomitate_item_top").animated("fadeOutUp, fadeInUp");
	$("#participants .nomitate_item_bottom").animated("fadeOutDown, fadeInDown");
	$("#judging .item_skills").animated("pulse, fadeInRight");
	$("#leaderboard .row_leaderboard .leaderboard_item").animated("pulse, flipInX");
	$("#benefits .row_items_benefits .items_benefits .circle_item").animated("pulse, rollIn");
	$(".steps_item").animated("pulse, flipInY");
	$(".masonry").animated("pulse, zoomIn");
	$(".row_main_items").animated("pulse, zoomIn");
	$("#reco .fixed_deg p").animated("pulse, fadeInLeft");
	$("#participants").waypoint(function(){
		
		alert:"123";
		},
		{
		offset: '20%'

	});
	$("#nManim").waypoint(function(){
	$({blurRadius: 5}).animate({blurRadius: 0}, {
		duration: 1500,
		easing: 'swing',
		step: function() {
			$("#reco .row_items span:nth-child(1)").css({
				"-webkit-filter": "blur("+this.blurRadius+"px)",
				"filter": "blur("+this.blurRadius+"px)"
			});
		}
	});
	var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');
	$("#reco .row_items span:nth-child(1)").each(function() {
		var tcount = $(this).data("count");
		$(this).animateNumber({ number: tcount,
			easing: 'easeInQuad',
			numberStep: comma_separator_number_step},
			1500);
	});		

		},
		{
		offset: '120%'

	});
	$(".back_to_top").mPageScroll2id();
	// $('#number_').animateNumber({ number: 15 });
	// $("#pre_footer>.fixed_deg").parent(".button").css("text-align","right" ).html;

	// $("#toggle_mnu").click(function(){
	// 	$(this).toggleClass("on");
	// 	$("#menu").slideToggle();
	// 	return false;
	// });

	// $('.owl-carousel').owlCarousel({
	//     loop:true,
	//     margin:10,
	//     autoplayTimeout: 4000,
	//     autoplaySpeed:1400,
	//     pagination:true,
	//     dots:true,
	//     dotsSpeed: 100,
	//     responsive:{
	//         0:{
	//             items:1
	//         },
	//         600:{
	//             items:1,
	//             autoplay: false,
	//         },
	//         700:{
	//             items:1,
	//             autoplay: true,
	//         }
	//     }
	// });

	// $('.collapse').collapse();

	// $(".teaser-more").parent("p").css("display","inline-block" ).html;
});



