document.addEventListener("DOMContentLoaded",(function(){$(".btn-burger").on("click",(function(s){$(this).is(s.target)?($(".sidebar").fadeOut("slow"),$(this).find("span").removeClass("active")):($(".sidebar").fadeIn("slow"),$(this).find("span").addClass("active"))})),$(".header__plus").on("click",(function(s){$(this).is(s.target)?($(this).removeClass("active"),$(this).find("button").css("color","rgba(0, 0, 0, 0.52)")):($(this).addClass("active"),$(this).find("button").css("color","#FA961E"))}))}));