function progress(){$(".skill .progress-bar").each(function(){var o=$(this).data("progress");$(this).css("width",o+"%")})}$(".btnImg").on("click",function(){$(this).toggleClass("active"),$("header ul").slideToggle()}),$(window).scroll(function(){var o=$(window).scrollTop(),t=$(".skill").offset().top;$(".works").offset().top;t<=o&&progress()}),$(function(){$("body").prognroll({height:5,color:"orange",custom:!1})}),$("#Contact").gradientify({gradients:[{start:[49,76,172],stop:[242,159,191]},{start:[255,103,69],stop:[240,154,241]},{start:[33,229,241],stop:[235,236,117]}]}),$(function(){$(window).scroll(function(){100<$(window).scrollTop()?($(".gotop").addClass("active"),$(".black-line").css("background","#000")):($(".gotop").removeClass("active"),$(".black-line").css("background","transparent"))})}),$(".gotop").on("click",function(){event.preventDefault(),$("html, body").animate({scrollTop:0},1e3)}),$(".menu_link").on("click",function(){event.preventDefault();var o=$(this).attr("href"),t=$(o).offset().top;$("html, body").animate({scrollTop:t},1e3)}),$(window).scroll(function(){var e=$(window).scrollTop();$(".menu_link").each(function(){var o=$(this).attr("href"),t=$(o).offset().top;$(o).outerHeight();t-200<=e?($(this).addClass("active"),$(".menu_link").not(this).removeClass("active")):$(this).removeClass("active")})}),$(function(){$("#About").jParticle({background:"#fff",color:"#a0a0a0",particlesNumber:40,particle:{minSize:1,maxSize:2,speed:30}})}),$(".mouse-icon").click(function(){$("html, body").animate({scrollTop:$("#About").offset().top},800)}),$(".works_info").slick({arrows:!0,centerMode:!0,infinite:!0,dots:!1,centerPadding:"0px",autoplaySpeed:3e3,slidesToShow:3,responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1,centerMode:!0,dots:!0}}]}),$(window).ready(function(){0!=parseInt($(".prognroll-bar").width())?($(".gotop").addClass("active"),$(".black-line").css("background","#000")):($(".gotop").removeClass("active"),$(".black-line").css("background","transparent"))});