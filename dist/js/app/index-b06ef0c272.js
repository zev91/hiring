!function t(e,n,r){function i(a,o){if(!n[a]){if(!e[a]){var c="function"==typeof require&&require;if(!o&&c)return c(a,!0);if(s)return s(a,!0);throw new Error("Cannot find module '"+a+"'")}var f=n[a]={exports:{}};e[a][0].call(f.exports,function(t){return i(e[a][1][t]||t)},f,f.exports,t,e,n,r)}return n[a].exports}for(var s="function"==typeof require&&require,a=0;a<r.length;a++)i(r[a]);return i}({1:[function(t,e,n){!function(){function t(t){var e=$(".bubble_ct .bubble");e.removeClass("active"),$(e[t]).addClass("active")}$.fn.prevAll=function(t){var e=[],n=this[0];if(!n)return $([]);for(;n.previousElementSibling;){var r=n.previousElementSibling;t?$(r).is(t)&&e.push(r):e.push(r),n=r}return $(e)},$.fn.nextAll=function(t){var e=[],n=this[0];if(!n)return $([]);for(;n.nextElementSibling;){var r=n.nextElementSibling;t?$(r).is(t)&&e.push(r):e.push(r),n=r}return $(e)},H5FullscreenPage.init({type:3,pageShow:function(t){},pageHide:function(t){}});var e=$(window).width(),n=$(window).height();.65>e/n>.57&&$(".item1 .qt_slogan").css("margin-top","3vw"),e/n>.65&&($(".item1 .qt_slogan").css("margin-top","3vw"),$(".item1 .qr_code ").css("margin-top","1.4vw"),$(".item1 .qt_logo ").css("top","3.2vw"),$(".item1 .qt_logo ").css("left","3.2vw"),$(".about .profile>p.align_left").css("margin","2.8vw 0"),$(".about .profile").css("padding-top","0"),$(".jobs .jobs_btn .btn ").css("margin-bottom","1.2vw"),$(".jobs .job_info p ").css("margin","1.2vw 0"),$(".jobs .eveirment_ct").css("height","103vw"));var r,i,s;$(".imagec_ct").bind("touchstart",function(t){var e=t.touches[0];r={x:e.pageX}}).bind("touchmove",function(t){var e=t.touches[0];i={x:e.pageX},s=i.x-r.x});var a=parseInt($(".eveirment_ct").width()),o=$(".imagec_ct").css("margin-left"),c=parseInt(o),f=0;t(f),$(".imagec_ct").swipeLeft(function(){Math.abs(s)>40&&(c==2*-a?(c=0,f=0):(c-=a,f+=1),$(".imagec_ct").css("margin-left",c+"px"),t(f))}),$(".imagec_ct").swipeRight(function(){Math.abs(s)>40&&(0==c?(c=2*-a,f=2):(c+=a,f-=1),$(".imagec_ct").css("margin-left",c+"px"),t(f))}),$("body").on("tap",".skip_to",function(t){t.preventDefault;var e={upDrag:function(t){t.css("-webkit-transform","scale(1)"),t.next().css("-webkit-transform","translate3d(0,100%,0)")},downDrag:function(t){t.css("-webkit-transform","translate3d(0,100%,0)"),t.prev().css("-webkit-transform","scale(1)")},nextSlide:function(t){t.css("-webkit-transform","scale(.8)"),t.next().css("-webkit-transform","translate3d(0,0,0)")},prevSlide:function(t){t.prev().css("-webkit-transform","scale(1)"),t.css("-webkit-transform","translate3d(0,100%,0)")},showSlide:function(t){t.css("-webkit-transform","scale(1)"),t.next().css("-webkit-transform","translate3d(0,100%,0)")}},n=$(".item"),r=$(this).index()+3;n.removeAttr("state"),e.upDrag($(n[r])),e.downDrag($(n[r])),e.nextSlide($(n[r])),e.prevSlide($(n[r])),e.showSlide($(n[r])),$(n[r]).prevAll().css("-webkit-transform","scale(.8)"),function(t){$(t).find(".part").forEach(function(t){var e=$(t).attr("data-delay")||100;setTimeout(function(){$(t).removeClass("hide")},e)})}(n[r]),$(n[r]).prev().length&&($(n[r]).prev().attr("state","prev"),$(n[r]).attr("state","next"))})}()},{}]},{},[1]);