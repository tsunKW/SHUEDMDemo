/* 回版頭 */
jQuery(function(){
	jQuery("#gotop").click(function(){
		jQuery("html,body").stop(true,false).animate({scrollTop:0},700); //設定回頁面頂端
		return false;	
	});
    jQuery(window).scroll(function() {
        if ( jQuery(this).scrollTop() >300){ //設定大於300px才顯示浮層
            jQuery('#gotop').stop(true,true).fadeIn("fast");
        } else {
            jQuery('#gotop').stop(true,true).fadeOut("fast");
        }
    });
});

/* 滑動的GOTO */
function goTop(val) {
	if($(window).width() > 767 ){
		var gotop_i = 150;
	} else {
		var gotop_i = 100;
	}
	jQuery('html,body').animate({scrollTop: jQuery(val).offset().top - gotop_i },700);
}



/*開關PC黏人精*/
$(function(){
	var $fixed_Area = $('.fixed_Area');
	//預設進場
	setTimeout( function(){ $fixed_Area.toggleClass('fixed_Area_hide') } ,1500)
	//點擊切換
	$fixed_Area.find('.js-fixed_Area_hide').click(function(){
		$fixed_Area.toggleClass('fixed_Area_hide');
	})
});


/* 浮層*/
function agree(val) {
	$(val).fadeIn();
	var winST =  jQuery(window).scrollTop(); //目前位置
	var winH =  jQuery(window).height(); //裝置高度
	//浮層高度
	$(val).find('.agreeArea .txtArea').css('height', winH * 70 / 100 );
	var this_agreeH = $(val).find('.agreeArea').height();
	//浮層top定位
	$('.agreeArea').css('top', winST + winH/2 - this_agreeH/2 );
	
	
    /*折價券_延遲載圖*/
	$(function () {  
            imglazyload();
        });
	function imglazyload() { 
	  var imglazy = ".agree_coupon img.lazy" ; 
	  $(imglazy).show().lazyload({
		  threshold: 500,
		  //failure_limit: 10,
		  effect : "fadeIn",
		  container:$('#agree')
	  });
};

    /*折價券_延遲載圖*/
	$(function () {  
            imglazyload_02();
        });
	function imglazyload_02() { 
	  var imglazy_02 = ".agree_momocard img.lazy" ; 
	  $(imglazy_02).show().lazyload({
		  threshold: 6000,
		  //failure_limit: 10,
		  effect : "fadeIn",
		  container:$('#agree')
	  });
};

}

$(function(){
	var blackBox = $(".blackBox");
	var blackBox_close = $(".blackBox .close , .blackBox .but-close");
	var blackBox_BOXclose = ".Boxclose , .fixedfooterArea_B ";
	//點按鈕關閉
	blackBox_close.delegate( "a" ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
	//點黑區關閉
	blackBox.delegate( blackBox_BOXclose ,"touchstart click",function(e){
		$(blackBox).fadeOut();
		e.preventDefault();
	});
});

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

/*背景互動--PC背景-背景00捲動物件*/
$.debounce = function(func, wait, immediate) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
$.throttle = function(func, wait) {
  var context, args, timeout, throttling, more, result;
  var whenDone = $.debounce(function() {
    more = throttling = false;
  }, wait);
  return function() {
    context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (more) func.apply(context, args);
      whenDone();
    };
    if (!timeout) timeout = setTimeout(later, wait);

    if (throttling) {
      more = true;
    } else {
      result = func.apply(context, args);
    };
    whenDone();
    throttling = true;
    return result;
  };
};

function bgscroll(val,top,num) { //背景互動(物件,起始top位置,速度)
  var $win = $(window);
  var $doc = $(document);
  var $bg  = $(val);
  var handler = $.throttle(function(e) {
    var dTop = $doc.scrollTop()
    highLight(dTop);
  }, 100);
  function highLight(docTop) {
    $bg.css('background-position', 'center '+  -1*( top + docTop * num) +'px' );
  };
  $win.scroll(handler)
};
$(function(){ 
  bgscroll('.js-Area_bgtop_00',0,0.2);
  //bgscroll('.js-Area_bgtop_01',-500,0.25);
});
