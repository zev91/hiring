!function(){
    $.ajax({
        url: 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=wx28f5fd5ac0dd9c12&secret=315d528852af6e84b167fbe7da9b1947',
        success: function(data){
            var openid = data.openid||'';
           $.ajax({
               url:'https://api.weixin.qq.com/sns/userinfo?access_token='+data.access_token+'&openid='+openid+'&lang=zh_CN',
               success:function(data){
                   console.log(data)
               }
           })
        }
    })


    
    $.fn.prevAll = function (selector) {
        var prevEls = [];
        var el = this[0];
        if (!el) return $([]);
        while (el.previousElementSibling) {
            var prev = el.previousElementSibling;
            if (selector) {
                if ($(prev).is(selector)) prevEls.push(prev);
            } else prevEls.push(prev);
            el = prev;
        }
        return $(prevEls);
    };
    
    $.fn.nextAll = function (selector) {
        var nextEls = [];
        var el = this[0];
        if (!el) return $([]);
        while (el.nextElementSibling) {
            var next = el.nextElementSibling;
            if (selector) {
                if ($(next).is(selector)) nextEls.push(next);
            } else nextEls.push(next);
            el = next;
        }
        return $(nextEls);
    };
    
    H5FullscreenPage.init({
        'type': 3,
        'pageShow': function (dom) {
    
        },
        'pageHide': function (dom) {
        }
    });
    var $width = $(window).width();
    var $height = $(window).height()

    // var $rem = ($width / $height>0.597)?(0.597/($width / $height)*75):750
    // $('html').css('font-size',$rem+'px')
    if (0.65>$width / $height > 0.57) {
        $('.item1 .qt_slogan').css('margin-top', '3vw')

    }
    if ($width / $height > 0.65) {
        $('.item1 .qt_slogan').css('margin-top', '3vw')
        $('.item1 .qr_code ').css('margin-top','1.4vw')
        $('.item1 .qt_logo ').css('top','3.2vw')
        $('.item1 .qt_logo ').css('left','3.2vw')
        $('.about .profile>p.align_left').css('margin','2.8vw 0')
        $('.about .profile').css('padding-top','0')
        $('.jobs .jobs_btn .btn ').css('margin-bottom','1.2vw')
        $('.jobs .job_info p ').css('margin','1.2vw 0')
        $('.jobs .eveirment_ct').css('height','103vw')
    }

    var startPosition, endPosition, moveLength;  
    $('.imagec_ct').bind('touchstart', function(e){  
    var touch = e.touches[0];  
    startPosition = {  
        x: touch.pageX 
    }
}) .bind('touchmove', function(e){  
    var touch = e.touches[0];  
    endPosition = {  
        x: touch.pageX
    };  
    moveLength = endPosition.x - startPosition.x;
});
// 切换
    var numbEve = parseInt($('.eveirment_ct').width());
    var marginLeft = $('.imagec_ct').css('margin-left');
    var numbLeft =  parseInt(marginLeft);
    var index = 0;
    setBubble(index)
$('.imagec_ct').swipeLeft(function(){
    $('.arrow_width').css('display','none')
    if(Math.abs(moveLength)>20){
        if(numbLeft == -numbEve*2){
            numbLeft=0
            index = 0
        }else{
            numbLeft -= numbEve
            index +=1;
   
        }
        $('.imagec_ct').css('margin-left',numbLeft+'px');
        setBubble(index)
       
    }
})
$('.imagec_ct').swipeRight(function(){
$('.arrow_width').css('display','none')
    if(Math.abs(moveLength)>20){
        if(numbLeft == 0){
            numbLeft = -numbEve*2
            index = 2
    
        }else{
            numbLeft += numbEve;
            index  -=1;
          
        }
        $('.imagec_ct').css('margin-left',numbLeft+'px');
        setBubble(index)
        
    }
})
function setBubble(index){
    var lis = $('.bubble_ct .bubble');
    lis.removeClass('active');
    $(lis[index]).addClass('active')
}
    $('body').on('tap', '.skip_to', function (e) {
        e.preventDefault;
        var obj = {
            'prevSlide': function (item) {
                item.css('-webkit-transform', 'translate3d(0,0,0)');
            }
        }
        function orderPart(dom) {
            var parts = $(dom).find('.part');
            parts.forEach(function (item) {
                var time = $(item).attr('data-delay') || 100;
                setTimeout(function () {
                    $(item).removeClass('hide');
                }, time);
            });
        }
            var $items = $('.item')
            var $index = $(this).index() + 4
            $items.removeAttr('state')
            obj.prevSlide($($items[$index]));
            $($items[$index]).prevAll().css('-webkit-transform', 'translate3d(0px, -100%, 0px)');
            orderPart($items[$index])
            if ($($items[$index]).prev().length) {
                $($items[$index]).prev().attr('state', 'prev');
                $($items[$index]).attr('state', 'next');
            }
    });
    $('body').on('tap','.back_menu',function(e){
        e.preventDefault;
        var $items = $('.item')
        $items.removeAttr("style")
        $($items[2]).attr('state', 'prev');
        $($items[3]).attr('state', 'next');
        $($items[3]).css('-webkit-transform', 'translate3d(0,0,0)');
        $($items[3]).prevAll().css('-webkit-transform', 'translate3d(0px, -100%, 0px)');
    })
}()

