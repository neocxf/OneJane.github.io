var timer_show,timer_eyebrow,parallel=17,headHeight=150,opacity=0,eyeBrowHeight=0,step=1;function mouseMove(e){}function startAnimation(){timer_show=setInterval("rotateCounterclockwise()",55),window.setTimeout(function(){window.clearInterval(timer_eyebrow),timer_show=setInterval("rotateClockwise()",55)},6e3)}function rotateCounterclockwise(){headHeight-=2.5,opacity=(17-(parallel-=.3))/17,0<parallel?($(".head").css("top",headHeight+"px"),$(".hat").css("transform","rotate("+parallel+"deg)"),$(".bubble").css("opacity",opacity)):(window.clearInterval(timer_show),timer_eyebrow=setInterval("flash()",10))}function rotateClockwise(){headHeight+=2.5,opacity=(17-(parallel+=.3))/17,parallel<=17?($(".head").css("top",headHeight+"px"),$(".hat").css("transform","rotate("+parallel+"deg)"),$(".bubble").css("opacity",opacity)):(window.clearInterval(timer_show),startAnimation())}function flash(){eyeBrowHeight+=step,$(".lefteye .eyebrow").css("clip","rect(0px 38px "+eyeBrowHeight+"px 0px)"),$(".righteye .eyebrow").css("clip","rect(0px 38px "+eyeBrowHeight+"px 0px)"),eyeBrowHeight%19==0&&(step=-step)}document.onmousemove=mouseMove,startAnimation();