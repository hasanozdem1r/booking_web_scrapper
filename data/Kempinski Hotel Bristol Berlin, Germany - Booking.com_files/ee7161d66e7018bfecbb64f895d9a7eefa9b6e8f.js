if(booking.env.enable_scripts_tracking){booking.env.scripts_tracking.hotel={loaded:true,run:false}
}(function(a){if(typeof define==="function"&&define.amd){define(["jquery"],a)
}else{if(typeof exports!=="undefined"){module.exports=a(require("jquery"))
}else{a(jQuery)
}}}(function(a){var b=window.Slick||{};
b=(function(){var c=0;
function d(h,j){var g=this,e,i,f;
g.defaults={accessibility:true,adaptiveHeight:false,appendArrows:a(h),appendDots:a(h),arrows:true,asNavFor:null,prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',autoplay:false,autoplaySpeed:3000,centerMode:false,centerPadding:"50px",cssEase:"ease",customPaging:function(l,k){return'<button type="button" data-role="none">'+(k+1)+"</button>"
},dots:false,dotsClass:"slick-dots",draggable:true,easing:"linear",edgeFriction:0.35,fade:false,focusOnSelect:false,galleryMode:"normal",infinite:true,initialSlide:0,lazyLoad:"ondemand",mobileFirst:false,pauseOnHover:true,pauseOnDotsHover:false,respondTo:"window",responsive:null,rtl:false,slide:"",slidesToShow:1,slidesToScroll:1,speed:500,keydownOverride:false,keydownSpeed:500,swipe:true,swipeToSlide:false,touchMove:true,touchThreshold:5,useCSS:true,variableWidth:false,vertical:false,waitForAnimate:true};
g.initials={animating:false,dragging:false,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,currentSpeed:null,iskeyboardEvent:false,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:false,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:false};
a.extend(g,g.initials);
g.activeBreakpoint=null;
g.animType=null;
g.animProp=null;
g.breakpoints=[];
g.breakpointSettings=[];
g.cssTransitions=false;
g.hidden="hidden";
g.paused=false;
g.positionProp=null;
g.respondTo=null;
g.shouldClick=true;
g.$slider=a(h);
g.$slidesCache=null;
g.transformType=null;
g.transitionType=null;
g.visibilityChange="visibilitychange";
g.windowWidth=0;
g.windowTimer=null;
e=a(h).data("slick")||{};
g.options=a.extend({},g.defaults,e,j);
g.currentSlide=g.options.initialSlide;
g.originalSettings=g.options;
i=g.options.responsive||null;
if(i&&i.length>-1){g.respondTo=g.options.respondTo||"window";
for(f in i){if(i.hasOwnProperty(f)){g.breakpoints.push(i[f].breakpoint);
g.breakpointSettings[i[f].breakpoint]=i[f].settings
}}g.breakpoints.sort(function(l,k){if(g.options.mobileFirst===true){return l-k
}else{return k-l
}})
}if(typeof document.mozHidden!=="undefined"){g.hidden="mozHidden";
g.visibilityChange="mozvisibilitychange"
}else{if(typeof document.msHidden!=="undefined"){g.hidden="msHidden";
g.visibilityChange="msvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){g.hidden="webkitHidden";
g.visibilityChange="webkitvisibilitychange"
}}}g.autoPlay=a.proxy(g.autoPlay,g);
g.autoPlayClear=a.proxy(g.autoPlayClear,g);
g.changeSlide=a.proxy(g.changeSlide,g);
g.clickHandler=a.proxy(g.clickHandler,g);
g.selectHandler=a.proxy(g.selectHandler,g);
g.setPosition=a.proxy(g.setPosition,g);
g.swipeHandler=a.proxy(g.swipeHandler,g);
g.dragHandler=a.proxy(g.dragHandler,g);
g.keyHandler=a.proxy(g.keyHandler,g);
g.autoPlayIterator=a.proxy(g.autoPlayIterator,g);
g.instanceUid=c++;
g.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/;
g.init();
g.checkResponsive(true)
}return d
}());
b.prototype.addSlide=b.prototype.slickAdd=function(c,e,f){var d=this;
if(typeof(e)==="boolean"){f=e;
e=null
}else{if(e<0||(e>=d.slideCount)){return false
}}d.unload();
if(typeof(e)==="number"){if(e===0&&d.$slides.length===0){a(c).appendTo(d.$slideTrack)
}else{if(f){a(c).insertBefore(d.$slides.eq(e))
}else{a(c).insertAfter(d.$slides.eq(e))
}}}else{if(f===true){a(c).prependTo(d.$slideTrack)
}else{a(c).appendTo(d.$slideTrack)
}}d.$slides=d.$slideTrack.children(this.options.slide);
d.$slideTrack.children(this.options.slide).detach();
d.$slideTrack.append(d.$slides);
d.$slides.each(function(g,h){a(h).attr("data-slick-index",g)
});
d.$slidesCache=d.$slides;
d.reinit()
};
b.prototype.animateHeight=function(){var e=this,d=e.options.animateHeightSpeed||e.options.speed;
if(e.options.slidesToShow===1&&e.options.adaptiveHeight===true&&e.options.vertical===false){var c=e.$slides.eq(e.currentSlide).outerHeight(true);
e.$list.animate({height:c},d)
}};
b.prototype.animateSlide=function(f,e){var d={},c=this;
c.animateHeight();
if(c.options.rtl===true&&c.options.vertical===false){f=-f
}if(c.transformsEnabled===false){if(c.options.vertical===false){c.$slideTrack.animate({left:f},c.options.speed,c.options.easing,e)
}else{c.$slideTrack.animate({top:f},c.options.speed,c.options.easing,e)
}}else{if(c.cssTransitions===false){if(c.options.rtl===true){c.currentLeft=-(c.currentLeft)
}a({animStart:c.currentLeft}).animate({animStart:f},{duration:c.options.speed,easing:c.options.easing,step:function(g){g=Math.ceil(g);
if(c.options.vertical===false){d[c.animType]="translate("+g+"px, 0px)";
c.$slideTrack.css(d)
}else{d[c.animType]="translate(0px,"+g+"px)";
c.$slideTrack.css(d)
}},complete:function(){if(e){e.call()
}}})
}else{c.applyTransition();
f=Math.ceil(f);
if(c.options.vertical===false){d[c.animType]="translate3d("+f+"px, 0px, 0px)"
}else{d[c.animType]="translate3d(0px,"+f+"px, 0px)"
}c.$slideTrack.css(d);
if(e){setTimeout(function(){c.disableTransition();
e.call()
},c.options.speed)
}}}};
b.prototype.asNavFor=function(e){var d=this,c=d.options.asNavFor!==null?a(d.options.asNavFor).slick("getSlick"):null;
if(c!==null){c.slideHandler(e,true)
}};
b.prototype.applyTransition=function(c){var d=this,e={};
if(d.options.fade===false){e[d.transitionType]=d.transformType+" "+d.options.speed+"ms "+d.options.cssEase
}else{e[d.transitionType]="opacity "+d.options.speed+"ms "+d.options.cssEase
}if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.autoPlay=function(){var c=this;
if(c.autoPlayTimer){clearInterval(c.autoPlayTimer)
}if(c.slideCount>c.options.slidesToShow&&c.paused!==true){c.autoPlayTimer=setInterval(c.autoPlayIterator,c.options.autoplaySpeed)
}};
b.prototype.autoPlayClear=function(){var c=this;
if(c.autoPlayTimer){clearInterval(c.autoPlayTimer)
}};
b.prototype.autoPlayIterator=function(){var c=this;
if(c.options.infinite===false){if(c.direction===1){if((c.currentSlide+1)===c.slideCount-1){c.direction=0
}c.slideHandler(c.currentSlide+c.options.slidesToScroll)
}else{if((c.currentSlide-1===0)){c.direction=1
}c.slideHandler(c.currentSlide-c.options.slidesToScroll)
}}else{c.slideHandler(c.currentSlide+c.options.slidesToScroll)
}};
b.prototype.buildArrows=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow=a(c.options.prevArrow);
c.$nextArrow=a(c.options.nextArrow);
if(c.htmlExpr.test(c.options.prevArrow)){c.$prevArrow.appendTo(c.options.appendArrows)
}if(c.htmlExpr.test(c.options.nextArrow)){c.$nextArrow.appendTo(c.options.appendArrows)
}if(c.options.infinite!==true){c.$prevArrow.addClass("slick-disabled")
}}};
b.prototype.buildDots=function(){var d=this,e,c;
if(d.options.dots===true&&d.slideCount>d.options.slidesToShow){c='<ul class="'+d.options.dotsClass+'">';
for(e=0;
e<=d.getDotCount();
e+=1){c+="<li>"+d.options.customPaging.call(this,d,e)+"</li>"
}c+="</ul>";
d.$dots=a(c).appendTo(d.options.appendDots);
d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden","false")
}};
b.prototype.buildOut=function(){var c=this;
c.$slides=c.$slider.children(c.options.slide+":not(.slick-cloned)").addClass("slick-slide");
c.slideCount=c.$slides.length;
c.$slides.each(function(d,e){a(e).attr("data-slick-index",d)
});
c.$slidesCache=c.$slides;
c.$slider.addClass("slick-slider");
c.$slideTrack=(c.slideCount===0)?a('<div class="slick-track"/>').appendTo(c.$slider):c.$slides.wrapAll('<div class="slick-track"/>').parent();
c.$list=c.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
c.$slideTrack.css("opacity",0);
if(c.options.centerMode===true||c.options.swipeToSlide===true){c.options.slidesToScroll=1
}a("img[data-lazy]",c.$slider).not("[src]").addClass("slick-loading");
c.setupInfinite();
c.buildArrows();
c.buildDots();
c.updateDots();
if(c.options.accessibility===true){c.$list.attr("tabIndex",0)
}c.setSlideClasses(typeof this.currentSlide==="number"?this.currentSlide:0);
if(c.options.draggable===true){c.$list.addClass("draggable")
}};
b.prototype.checkResponsive=function(e){var d=this,c,i,h;
var g=d.$slider.width();
var f=window.innerWidth||a(window).width();
if(d.respondTo==="window"){h=f
}else{if(d.respondTo==="slider"){h=g
}else{if(d.respondTo==="min"){h=Math.min(f,g)
}}}if(d.originalSettings.responsive&&d.originalSettings.responsive.length>-1&&d.originalSettings.responsive!==null){i=null;
for(c in d.breakpoints){if(d.breakpoints.hasOwnProperty(c)){if(d.originalSettings.mobileFirst===false){if(h<d.breakpoints[c]){i=d.breakpoints[c]
}}else{if(h>d.breakpoints[c]){i=d.breakpoints[c]
}}}}if(i!==null){if(d.activeBreakpoint!==null){if(i!==d.activeBreakpoint){d.activeBreakpoint=i;
if(d.breakpointSettings[i]==="unslick"){d.unslick()
}else{d.options=a.extend({},d.originalSettings,d.breakpointSettings[i]);
if(e===true){d.currentSlide=d.options.initialSlide
}d.refresh()
}}}else{d.activeBreakpoint=i;
if(d.breakpointSettings[i]==="unslick"){d.unslick()
}else{d.options=a.extend({},d.originalSettings,d.breakpointSettings[i]);
if(e===true){d.currentSlide=d.options.initialSlide
}d.refresh()
}}}else{if(d.activeBreakpoint!==null){d.activeBreakpoint=null;
d.options=d.originalSettings;
if(e===true){d.currentSlide=d.options.initialSlide
}d.refresh()
}}}};
b.prototype.changeSlide=function(g,j){var e=this,c=a(g.target),i,f,h;
c.is("a")&&g.preventDefault();
h=(e.slideCount%e.options.slidesToScroll!==0);
i=h?0:(e.slideCount-e.currentSlide)%e.options.slidesToScroll;
switch(g.data.message){case"previous":f=i===0?e.options.slidesToScroll:e.options.slidesToShow-i;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide-f,false,j)
}break;
case"next":f=i===0?e.options.slidesToScroll:i;
if(e.slideCount>e.options.slidesToShow){e.slideHandler(e.currentSlide+f,false,j)
}break;
case"index":var d=g.data.index===0?0:g.data.index||a(g.target).parent().index()*e.options.slidesToScroll;
e.slideHandler(e.checkNavigable(d),false,j);
break;
default:return
}};
b.prototype.checkNavigable=function(d){var c=this,e,f;
e=c.getNavigableIndexes();
f=0;
if(d>e[e.length-1]){d=e[e.length-1]
}else{for(var g in e){if(d<e[g]){d=f;
break
}f=e[g]
}}return d
};
b.prototype.clickHandler=function(d){var c=this;
if(c.shouldClick===false){d.stopImmediatePropagation();
d.stopPropagation();
d.preventDefault()
}};
b.prototype.destroy=function(){var c=this;
c.autoPlayClear();
c.touchObject={};
a(".slick-cloned",c.$slider).remove();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&(typeof c.options.prevArrow!=="object")){c.$prevArrow.remove()
}if(c.$nextArrow&&(typeof c.options.nextArrow!=="object")){c.$nextArrow.remove()
}c.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden","true").removeAttr("data-slick-index").css({position:"",left:"",top:"",zIndex:"",opacity:"",width:""});
c.$slider.removeClass("slick-slider");
c.$slider.removeClass("slick-initialized");
c.$list.unbind(".slick");
a(window).unbind(".slick-"+c.instanceUid);
a(document).unbind(".slick-"+c.instanceUid);
c.$slider.html(c.$slides)
};
b.prototype.disableTransition=function(c){var d=this,e={};
e[d.transitionType]="";
if(d.options.fade===false){d.$slideTrack.css(e)
}else{d.$slides.eq(c).css(e)
}};
b.prototype.fadeSlide=function(d,e){var c=this;
if(c.cssTransitions===false){c.$slides.eq(d).css({zIndex:1000});
if(c.options.speed){c.$slides.eq(d).animate({opacity:1},c.options.speed,c.options.easing,e)
}else{c.$slides.eq(d).show(c.options.speed,e)
}}else{c.applyTransition(d);
c.$slides.eq(d).css({opacity:1,zIndex:1000});
if(e){setTimeout(function(){c.disableTransition(d);
e.call()
},c.options.speed)
}}};
b.prototype.filterSlides=b.prototype.slickFilter=function(d){var c=this;
if(d!==null){c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.filter(d).appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.getCurrent=b.prototype.slickCurrentSlide=function(){var c=this;
return c.currentSlide
};
b.prototype.getDotCount=function(){var d=this;
var f=0;
var c=0;
var e=0;
if(d.options.infinite===true){e=Math.ceil(d.slideCount/d.options.slidesToScroll)
}else{if(d.options.centerMode===true){e=d.slideCount
}else{while(f<d.slideCount){++e;
f=c+d.options.slidesToShow;
c+=d.options.slidesToScroll<=d.options.slidesToShow?d.options.slidesToScroll:d.options.slidesToShow
}}}return e-1
};
b.prototype.getLeft=function(f){var d=this,h,e,c=0,g;
d.slideOffset=0;
e=d.$slides.first().outerHeight();
if(d.options.infinite===true){if(d.slideCount>d.options.slidesToShow){d.slideOffset=(d.slideWidth*d.options.slidesToShow)*-1;
c=(e*d.options.slidesToShow)*-1
}if(d.slideCount%d.options.slidesToScroll!==0){if(f+d.options.slidesToScroll>d.slideCount&&d.slideCount>d.options.slidesToShow){if(f>d.slideCount){d.slideOffset=((d.options.slidesToShow-(f-d.slideCount))*d.slideWidth)*-1;
c=((d.options.slidesToShow-(f-d.slideCount))*e)*-1
}else{d.slideOffset=((d.slideCount%d.options.slidesToScroll)*d.slideWidth)*-1;
c=((d.slideCount%d.options.slidesToScroll)*e)*-1
}}}}else{if(f+d.options.slidesToShow>d.slideCount){d.slideOffset=((f+d.options.slidesToShow)-d.slideCount)*d.slideWidth;
c=((f+d.options.slidesToShow)-d.slideCount)*e
}}if(d.slideCount<=d.options.slidesToShow){d.slideOffset=0;
c=0
}if(d.options.centerMode===true&&d.options.infinite===true){d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)-d.slideWidth
}else{if(d.options.centerMode===true){d.slideOffset=0;
d.slideOffset+=d.slideWidth*Math.floor(d.options.slidesToShow/2)
}}if(d.options.vertical===false){h=((f*d.slideWidth)*-1)+d.slideOffset
}else{h=((f*e)*-1)+c
}if(d.options.variableWidth===true){if(d.slideCount<=d.options.slidesToShow||d.options.infinite===false){g=d.$slideTrack.children(".slick-slide").eq(f)
}else{g=d.$slideTrack.children(".slick-slide").eq(f+d.options.slidesToShow)
}h=g[0]?g[0].offsetLeft*-1:0;
if(d.options.centerMode===true){if(d.options.infinite===false){g=d.$slideTrack.children(".slick-slide").eq(f)
}else{g=d.$slideTrack.children(".slick-slide").eq(f+d.options.slidesToShow+1)
}h=g[0]?g[0].offsetLeft*-1:0;
h+=(d.$list.width()-g.outerWidth())/2
}}return h
};
b.prototype.getOption=b.prototype.slickGetOption=function(d){var c=this;
return c.options[d]
};
b.prototype.getNavigableIndexes=function(){var f=this,g=0,d=0,e=[],c;
if(f.options.infinite===false){c=f.slideCount-f.options.slidesToShow+1;
if(f.options.centerMode===true){c=f.slideCount
}}else{g=f.slideCount*-1;
d=f.slideCount*-1;
c=f.slideCount*2
}while(g<c){e.push(g);
g=d+f.options.slidesToScroll;
d+=f.options.slidesToScroll<=f.options.slidesToShow?f.options.slidesToScroll:f.options.slidesToShow
}return e
};
b.prototype.getSlick=function(){return this
};
b.prototype.getSlideCount=function(){var e=this,d,f,c;
c=e.options.centerMode===true?e.slideWidth*Math.floor(e.options.slidesToShow/2):0;
if(e.options.swipeToSlide===true){e.$slideTrack.find(".slick-slide").each(function(h,g){if(g.offsetLeft-c+(a(g).outerWidth()/2)>(e.swipeLeft*-1)){f=g;
return false
}});
d=Math.abs(a(f).attr("data-slick-index")-e.currentSlide)||1;
return d
}else{return e.options.slidesToScroll
}};
b.prototype.goTo=b.prototype.slickGoTo=function(c,e){var d=this;
d.changeSlide({data:{message:"index",index:parseInt(c)}},e)
};
b.prototype.init=function(){var c=this;
if(!a(c.$slider).hasClass("slick-initialized")){a(c.$slider).addClass("slick-initialized");
c.buildOut();
c.setProps();
c.startLoad();
c.loadSlider();
c.initializeEvents();
c.updateArrows();
c.updateDots()
}c.$slider.trigger("init",[c])
};
b.prototype.initArrowEvents=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.bind("click.slick",{message:"previous"},c.changeSlide);
c.$nextArrow.bind("click.slick",{message:"next"},c.changeSlide)
}};
b.prototype.initDotEvents=function(){var c=this;
if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){a("li",c.$dots).bind("click.slick",{message:"index"},c.changeSlide)
}if(c.options.dots===true&&c.options.pauseOnDotsHover===true&&c.options.autoplay===true){a("li",c.$dots).bind("mouseenter.slick",function(){c.paused=true;
c.autoPlayClear()
}).bind("mouseleave.slick",function(){c.paused=false;
c.autoPlay()
})
}};
b.prototype.initializeEvents=function(){var c=this;
c.initArrowEvents();
c.initDotEvents();
c.$list.bind("touchstart.slick mousedown.slick",{action:"start"},c.swipeHandler);
c.$list.bind("touchmove.slick mousemove.slick",{action:"move"},c.swipeHandler);
c.$list.bind("touchend.slick mouseup.slick",{action:"end"},c.swipeHandler);
c.$list.bind("touchcancel.slick mouseleave.slick",{action:"end"},c.swipeHandler);
c.$list.bind("click.slick",c.clickHandler);
if(c.options.autoplay===true){a(document).bind(c.visibilityChange,function(){c.visibility()
});
if(c.options.pauseOnHover===true){c.$list.bind("mouseenter.slick",function(){c.paused=true;
c.autoPlayClear()
});
c.$list.bind("mouseleave.slick",function(){c.paused=false;
c.autoPlay()
})
}}if(c.options.accessibility===true){a(document).bind("keydown.slick",c.keyHandler)
}if(c.options.focusOnSelect===true){a(c.$slideTrack).children().bind("click.slick",c.selectHandler)
}a(window).bind("orientationchange.slick.slick-"+c.instanceUid,function(){c.checkResponsive();
c.setPosition()
});
a(window).bind("resize.slick.slick-"+c.instanceUid,function(){if(a(window).width()!==c.windowWidth){clearTimeout(c.windowDelay);
c.windowDelay=window.setTimeout(function(){c.windowWidth=a(window).width();
c.checkResponsive();
c.setPosition()
},50)
}});
a("*[draggable!=true]",c.$slideTrack).bind("dragstart",function(d){d.preventDefault()
});
a(window).bind("load.slick.slick-"+c.instanceUid,c.setPosition);
a(document).bind("ready.slick.slick-"+c.instanceUid,c.setPosition)
};
b.prototype.initUI=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.show();
c.$nextArrow.show()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.show()
}if(c.options.autoplay===true){c.autoPlay()
}};
b.prototype.keyHandler=function(d){var c=this;
if(c.options.accessibility===true&&c.options.keydownOverride===true&&c.options.keydownSpeed){c.iskeyboardEvent=true;
c.currentSpeed=c.options.speed;
c.options.speed=c.options.keydownSpeed
}if(d.keyCode===37&&c.options.accessibility===true){c.changeSlide({data:{message:c.options.rtl?"next":"previous"}})
}else{if(d.keyCode===39&&c.options.accessibility===true){c.changeSlide({data:{message:c.options.rtl?"previous":"next"}})
}}};
b.prototype.lazyLoad=function(){var e=this,c,h,g,f;
function d(i){a("img[data-lazy]",i).each(function(){var j=a(this),k=a(this).attr("data-lazy");
j.load(function(){j.animate({opacity:1},200)
}).css({opacity:0}).attr("src",k).removeAttr("data-lazy").removeClass("slick-loading")
})
}if(e.options.centerMode===true){if(e.options.infinite===true){g=e.currentSlide+(e.options.slidesToShow/2+1);
f=g+e.options.slidesToShow+2
}else{g=Math.max(0,e.currentSlide-(e.options.slidesToShow/2+1));
f=2+(e.options.slidesToShow/2+1)+e.currentSlide
}}else{g=e.options.infinite?e.options.slidesToShow+e.currentSlide:e.currentSlide;
f=g+e.options.slidesToShow;
if(e.options.fade===true){if(g>0){g--
}if(f<=e.slideCount){f++
}}}c=e.$slider.find(".slick-slide").slice(g,f);
d(c);
if(e.slideCount<=e.options.slidesToShow){h=e.$slider.find(".slick-slide");
d(h)
}else{if(e.currentSlide>=e.slideCount-e.options.slidesToShow){h=e.$slider.find(".slick-cloned").slice(0,e.options.slidesToShow);
d(h)
}else{if(e.currentSlide===0){h=e.$slider.find(".slick-cloned").slice(e.options.slidesToShow*-1);
d(h)
}}}};
b.prototype.loadSlider=function(){var c=this;
c.setPosition();
c.$slideTrack.css({opacity:1});
c.$slider.removeClass("slick-loading");
c.initUI();
if(c.options.lazyLoad==="progressive"){c.progressiveLazyLoad()
}};
b.prototype.next=b.prototype.slickNext=function(){var c=this;
c.changeSlide({data:{message:"next"}})
};
b.prototype.pause=b.prototype.slickPause=function(){var c=this;
c.autoPlayClear();
c.paused=true
};
b.prototype.play=b.prototype.slickPlay=function(){var c=this;
c.paused=false;
c.autoPlay()
};
b.prototype.postSlide=function(d){var c=this;
c.$slider.trigger("afterChange",[c,d]);
c.animating=false;
c.setPosition();
c.swipeLeft=null;
if(c.options.autoplay===true&&c.paused===false){c.autoPlay()
}if(c.options.accessibility===true&&c.options.keydownOverride===true&&c.iskeyboardEvent===true){c.iskeyboardEvent=false;
c.options.speed=c.currentSpeed
}};
b.prototype.prev=b.prototype.slickPrev=function(){var c=this;
c.changeSlide({data:{message:"previous"}})
};
b.prototype.progressiveLazyLoad=function(){var d=this,c,e;
c=a("img[data-lazy]",d.$slider).length;
if(c>0){e=a("img[data-lazy]",d.$slider).first();
e.attr("src",e.attr("data-lazy")).removeClass("slick-loading").load(function(){e.removeAttr("data-lazy");
d.progressiveLazyLoad();
if(d.options.adaptiveHeight===true){d.setPosition()
}}).error(function(){e.removeAttr("data-lazy");
d.progressiveLazyLoad()
})
}};
b.prototype.refresh=function(){var c=this,d=c.currentSlide;
c.destroy();
a.extend(c,c.initials);
c.init();
c.changeSlide({data:{message:"index",index:d}},true)
};
b.prototype.reinit=function(){var c=this;
c.$slides=c.$slideTrack.children(c.options.slide).addClass("slick-slide");
c.slideCount=c.$slides.length;
if(c.currentSlide>=c.slideCount&&c.currentSlide!==0){c.currentSlide=c.currentSlide-c.options.slidesToScroll
}if(c.slideCount<=c.options.slidesToShow){c.currentSlide=0
}c.setProps();
c.setupInfinite();
c.buildArrows();
c.updateArrows();
c.initArrowEvents();
c.buildDots();
c.updateDots();
c.initDotEvents();
if(c.options.focusOnSelect===true){a(c.$slideTrack).children().bind("click.slick",c.selectHandler)
}c.setSlideClasses(0);
c.setPosition();
c.$slider.trigger("reInit",[c])
};
b.prototype.removeSlide=b.prototype.slickRemove=function(d,f,e){var c=this;
if(typeof(d)==="boolean"){f=d;
d=f===true?0:c.slideCount-1
}else{d=f===true?--d:d
}if(c.slideCount<1||d<0||d>c.slideCount-1){return false
}c.unload();
if(e===true){c.$slideTrack.children().remove()
}else{c.$slideTrack.children(this.options.slide).eq(d).remove()
}c.$slides=c.$slideTrack.children(this.options.slide);
c.$slideTrack.children(this.options.slide).detach();
c.$slideTrack.append(c.$slides);
c.$slidesCache=c.$slides;
c.reinit()
};
b.prototype.setCSS=function(d){var e=this,f={},c,g;
if(e.options.rtl===true){d=-d
}c=e.positionProp=="left"?Math.ceil(d)+"px":"0px";
g=e.positionProp=="top"?Math.ceil(d)+"px":"0px";
f[e.positionProp]=d;
if(e.transformsEnabled===false){e.$slideTrack.css(f)
}else{f={};
if(e.cssTransitions===false){f[e.animType]="translate("+c+", "+g+")";
e.$slideTrack.css(f)
}else{f[e.animType]="translate3d("+c+", "+g+", 0px)";
e.$slideTrack.css(f)
}}};
b.prototype.setDimensions=function(){var d=this;
if(d.options.vertical===false){if(d.options.centerMode===true){d.$list.css({padding:("0px "+d.options.centerPadding)})
}}else{d.$list.height(d.$slides.first().outerHeight(true)*d.options.slidesToShow);
if(d.options.centerMode===true){d.$list.css({padding:(d.options.centerPadding+" 0px")})
}}d.listWidth=d.$list.width();
d.listHeight=d.$list.height();
if(d.options.vertical===false&&d.options.variableWidth===false){d.slideWidth=Math.ceil(d.listWidth/d.options.slidesToShow);
d.$slideTrack.width(Math.ceil((d.slideWidth*d.$slideTrack.children(".slick-slide").length)))
}else{if(d.options.variableWidth===true){var c=0;
d.slideWidth=Math.ceil(d.listWidth/d.options.slidesToShow);
d.$slideTrack.children(".slick-slide").each(function(){c+=d.listWidth
});
d.$slideTrack.width(Math.ceil(c)+1)
}else{d.slideWidth=Math.ceil(d.listWidth);
d.$slideTrack.height(Math.ceil((d.$slides.first().outerHeight(true)*d.$slideTrack.children(".slick-slide").length)))
}}var e=d.$slides.first().outerWidth(true)-d.$slides.first().width();
if(d.options.variableWidth===false){d.$slideTrack.children(".slick-slide").width(d.slideWidth-e)
}};
b.prototype.setFade=function(){var c=this,d;
c.$slides.each(function(e,f){d=(c.slideWidth*e)*-1;
if(c.options.rtl===true){a(f).css({position:"relative",right:d,top:0,zIndex:800,opacity:0})
}else{a(f).css({position:"relative",left:d,top:0,zIndex:800,opacity:0})
}});
c.$slides.eq(c.currentSlide).css({zIndex:900,opacity:1})
};
b.prototype.setHeight=function(){var d=this;
if(d.options.slidesToShow===1&&d.options.adaptiveHeight===true&&d.options.vertical===false){var c=d.$slides.eq(d.currentSlide).outerHeight(true);
d.$list.css("height",c)
}};
b.prototype.setOption=b.prototype.slickSetOption=function(e,f,d){var c=this;
c.options[e]=f;
if(d===true){c.unload();
c.reinit()
}};
b.prototype.setPosition=function(){var c=this;
c.setDimensions();
c.setHeight();
if(c.options.fade===false){c.setCSS(c.getLeft(c.currentSlide))
}else{c.setFade()
}c.$slider.trigger("setPosition",[c])
};
b.prototype.setProps=function(){var d=this,c=document.body.style;
d.positionProp=d.options.vertical===true?"top":"left";
if(d.positionProp==="top"){d.$slider.addClass("slick-vertical")
}else{d.$slider.removeClass("slick-vertical")
}if(c.WebkitTransition!==undefined||c.MozTransition!==undefined||c.msTransition!==undefined){if(d.options.useCSS===true){d.cssTransitions=true
}}if(c.OTransform!==undefined){d.animType="OTransform";
d.transformType="-o-transform";
d.transitionType="OTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.MozTransform!==undefined){d.animType="MozTransform";
d.transformType="-moz-transform";
d.transitionType="MozTransition";
if(c.perspectiveProperty===undefined&&c.MozPerspective===undefined){d.animType=false
}}if(c.webkitTransform!==undefined){d.animType="webkitTransform";
d.transformType="-webkit-transform";
d.transitionType="webkitTransition";
if(c.perspectiveProperty===undefined&&c.webkitPerspective===undefined){d.animType=false
}}if(c.msTransform!==undefined){d.animType="msTransform";
d.transformType="-ms-transform";
d.transitionType="msTransition";
if(c.msTransform===undefined){d.animType=false
}}if(c.transform!==undefined&&d.animType!==false){d.animType="transform";
d.transformType="transform";
d.transitionType="transition"
}d.transformsEnabled=(d.animType!==null&&d.animType!==false)
};
b.prototype.setSlideClasses=function(f){var e=this,c,d,h,g;
e.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true").removeClass("slick-center");
d=e.$slider.find(".slick-slide");
if(e.options.centerMode===true){c=Math.floor(e.options.slidesToShow/2);
if(e.options.infinite===true){if(f>=c&&f<=(e.slideCount-1)-c){e.$slides.slice(f-c,f+c+1).addClass("slick-active").attr("aria-hidden","false")
}else{h=e.options.slidesToShow+f;
d.slice(h-c+1,h+c+2).addClass("slick-active").attr("aria-hidden","false")
}if(f===0){d.eq(d.length-1-e.options.slidesToShow).addClass("slick-center")
}else{if(f===e.slideCount-1){d.eq(e.options.slidesToShow).addClass("slick-center")
}}}e.$slides.eq(f).addClass("slick-center")
}else{if(f>=0&&f<=(e.slideCount-e.options.slidesToShow)){e.$slides.slice(f,f+e.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}else{if(d.length<=e.options.slidesToShow){d.addClass("slick-active").attr("aria-hidden","false")
}else{g=e.slideCount%e.options.slidesToShow;
h=e.options.infinite===true?e.options.slidesToShow+f:f;
if(e.options.slidesToShow==e.options.slidesToScroll&&(e.slideCount-f)<e.options.slidesToShow){d.slice(h-(e.options.slidesToShow-g),h+g).addClass("slick-active").attr("aria-hidden","false")
}else{d.slice(h,h+e.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")
}}}}if(e.options.lazyLoad==="ondemand"){e.lazyLoad()
}};
b.prototype.setupInfinite=function(){var c=this,d,f,e;
if(c.options.fade===true){c.options.centerMode=false
}if(c.options.infinite===true&&c.options.fade===false){f=null;
if(c.slideCount>c.options.slidesToShow){if(c.options.centerMode===true){e=c.options.slidesToShow+1
}else{e=c.options.slidesToShow
}for(d=c.slideCount;
d>(c.slideCount-e);
d-=1){f=d-1;
a(c.$slides[f]).clone(true).attr("id","").attr("data-slick-index",f-c.slideCount).prependTo(c.$slideTrack).addClass("slick-cloned")
}for(d=0;
d<e;
d+=1){f=d;
a(c.$slides[f]).clone(true).attr("id","").attr("data-slick-index",f+c.slideCount).appendTo(c.$slideTrack).addClass("slick-cloned")
}c.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")
})
}}};
b.prototype.selectHandler=function(e){var d=this;
var c=parseInt(a(e.target).parents(".slick-slide").attr("data-slick-index"));
if(!c){c=0
}if(d.slideCount<=d.options.slidesToShow){d.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden","true");
d.$slides.eq(c).addClass("slick-active").attr("aria-hidden","false");
if(d.options.centerMode===true){d.$slider.find(".slick-slide").removeClass("slick-center");
d.$slides.eq(c).addClass("slick-center")
}d.asNavFor(c);
return
}d.slideHandler(c)
};
b.prototype.slideHandler=function(e,h,d){var c,k,g,i,f=null,j=this;
h=h||false;
if(j.animating===true&&j.options.waitForAnimate===true){return
}if(j.options.fade===true&&j.currentSlide===e){return
}if(j.slideCount<=j.options.slidesToShow){return
}if(h===false){j.asNavFor(e)
}c=e;
f=j.getLeft(c);
i=j.getLeft(j.currentSlide);
j.currentLeft=j.swipeLeft===null?i:j.swipeLeft;
if(j.options.infinite===false&&j.options.centerMode===false&&(e<0||e>j.getDotCount()*j.options.slidesToScroll)){if(j.options.fade===false){c=j.currentSlide;
if(d!==true){j.animateSlide(i,function(){j.postSlide(c)
})
}else{j.postSlide(c)
}}return
}else{if(j.options.infinite===false&&j.options.centerMode===true&&(e<0||e>(j.slideCount-j.options.slidesToScroll))){if(j.options.fade===false){c=j.currentSlide;
if(d!==true){j.animateSlide(i,function(){j.postSlide(c)
})
}else{j.postSlide(c)
}}return
}}if(j.options.autoplay===true){clearInterval(j.autoPlayTimer)
}if(c<0){if(j.slideCount%j.options.slidesToScroll!==0){k=j.slideCount-(j.slideCount%j.options.slidesToScroll)
}else{k=j.slideCount+c
}}else{if(c>=j.slideCount){if(j.slideCount%j.options.slidesToScroll!==0){k=0
}else{k=c-j.slideCount
}}else{k=c
}}j.animating=true;
j.$slider.trigger("beforeChange",[j,j.currentSlide,k]);
g=j.currentSlide;
j.currentSlide=k;
j.setSlideClasses(j.currentSlide);
j.updateDots();
j.updateArrows();
if(j.options.fade===true){if(d!==true){j.fadeSlide(k,function(){j.postSlide(k)
})
}else{j.postSlide(k)
}j.animateHeight();
return
}if(d!==true){j.animateSlide(f,function(){j.postSlide(k)
})
}else{j.postSlide(k)
}};
b.prototype.startLoad=function(){var c=this;
if(c.options.arrows===true&&c.slideCount>c.options.slidesToShow){c.$prevArrow.hide();
c.$nextArrow.hide()
}if(c.options.dots===true&&c.slideCount>c.options.slidesToShow){c.$dots.hide()
}c.$slider.addClass("slick-loading")
};
b.prototype.swipeDirection=function(){var c,f,e,g,d=this;
c=d.touchObject.startX-d.touchObject.curX;
f=d.touchObject.startY-d.touchObject.curY;
e=Math.atan2(f,c);
g=Math.round(e*180/Math.PI);
if(g<0){g=360-Math.abs(g)
}if((g<=45)&&(g>=0)){return(d.options.rtl===false?"left":"right")
}if((g<=360)&&(g>=315)){return(d.options.rtl===false?"left":"right")
}if((g>=135)&&(g<=225)){return(d.options.rtl===false?"right":"left")
}return"vertical"
};
b.prototype.swipeEnd=function(e){var d=this,c;
d.dragging=false;
d.shouldClick=(d.touchObject.swipeLength>10)?false:true;
if(d.touchObject.curX===undefined){return false
}if(d.touchObject.edgeHit===true){d.$slider.trigger("edge",[d,d.swipeDirection()])
}if(d.touchObject.swipeLength>=d.touchObject.minSwipe){switch(d.swipeDirection()){case"left":c=d.options.swipeToSlide?d.checkNavigable(d.currentSlide+d.getSlideCount()):d.currentSlide+d.getSlideCount();
d.slideHandler(c);
d.currentDirection=0;
d.touchObject={};
d.$slider.trigger("swipe",[d,"left"]);
break;
case"right":c=d.options.swipeToSlide?d.checkNavigable(d.currentSlide-d.getSlideCount()):d.currentSlide-d.getSlideCount();
d.slideHandler(c);
d.currentDirection=1;
d.touchObject={};
d.$slider.trigger("swipe",[d,"right"]);
break
}}else{if(d.touchObject.startX!==d.touchObject.curX){d.slideHandler(d.currentSlide);
d.touchObject={}
}}};
b.prototype.swipeHandler=function(d){var c=this;
if((c.options.swipe===false)||("ontouchend" in document&&c.options.swipe===false)){return
}else{if(c.options.draggable===false&&d.type.indexOf("mouse")!==-1){return
}}c.touchObject.fingerCount=d.originalEvent&&d.originalEvent.touches!==undefined?d.originalEvent.touches.length:1;
c.touchObject.minSwipe=c.listWidth/c.options.touchThreshold;
switch(d.data.action){case"start":c.swipeStart(d);
break;
case"move":c.swipeMove(d);
break;
case"end":c.swipeEnd(d);
break
}};
b.prototype.swipeMove=function(f){var e=this,j=false,h,d,g,c,i;
i=f.originalEvent!==undefined?f.originalEvent.touches:null;
if(!e.dragging||i&&i.length!==1){return false
}h=e.getLeft(e.currentSlide);
e.touchObject.curX=i!==undefined?i[0].pageX:f.clientX;
e.touchObject.curY=i!==undefined?i[0].pageY:f.clientY;
e.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(e.touchObject.curX-e.touchObject.startX,2)));
d=e.swipeDirection();
if(d==="vertical"){return
}if(f.originalEvent!==undefined&&e.touchObject.swipeLength>4){f.preventDefault()
}c=(e.options.rtl===false?1:-1)*(e.touchObject.curX>e.touchObject.startX?1:-1);
g=e.touchObject.swipeLength;
e.touchObject.edgeHit=false;
if(e.options.infinite===false){if((e.currentSlide===0&&d==="right")||(e.currentSlide>=e.getDotCount()&&d==="left")){g=e.touchObject.swipeLength*e.options.edgeFriction;
e.touchObject.edgeHit=true
}}if(e.options.vertical===false){e.swipeLeft=h+g*c
}else{e.swipeLeft=h+(g*(e.$list.height()/e.listWidth))*c
}if(e.options.fade===true||e.options.touchMove===false){return false
}if(e.animating===true){e.swipeLeft=null;
return false
}e.setCSS(e.swipeLeft)
};
b.prototype.swipeStart=function(d){var c=this,e;
if(c.touchObject.fingerCount!==1||c.slideCount<=c.options.slidesToShow){c.touchObject={};
return false
}if(d.originalEvent!==undefined&&d.originalEvent.touches!==undefined){e=d.originalEvent.touches[0]
}c.touchObject.startX=c.touchObject.curX=e!==undefined?e.pageX:d.clientX;
c.touchObject.startY=c.touchObject.curY=e!==undefined?e.pageY:d.clientY;
c.dragging=true
};
b.prototype.unfilterSlides=b.prototype.slickUnfilter=function(){var c=this;
if(c.$slidesCache!==null){c.unload();
c.$slideTrack.children(this.options.slide).detach();
c.$slidesCache.appendTo(c.$slideTrack);
c.reinit()
}};
b.prototype.unload=function(){var c=this;
a(".slick-cloned",c.$slider).remove();
if(c.$dots){c.$dots.remove()
}if(c.$prevArrow&&(typeof c.options.prevArrow!=="object")){c.$prevArrow.remove()
}if(c.$nextArrow&&(typeof c.options.nextArrow!=="object")){c.$nextArrow.remove()
}c.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden","true").css("width","")
};
b.prototype.unslick=function(){var c=this;
c.destroy()
};
b.prototype.updateArrows=function(){var d=this,c;
c=Math.floor(d.options.slidesToShow/2);
if(d.options.arrows===true&&d.options.infinite!==true&&d.slideCount>d.options.slidesToShow){d.$prevArrow.removeClass("slick-disabled");
d.$nextArrow.removeClass("slick-disabled");
if(d.currentSlide===0){d.$prevArrow.addClass("slick-disabled");
d.$nextArrow.removeClass("slick-disabled")
}else{if(d.currentSlide>=d.slideCount-d.options.slidesToShow&&d.options.centerMode===false){d.$nextArrow.addClass("slick-disabled");
d.$prevArrow.removeClass("slick-disabled")
}else{if(d.currentSlide>=d.slideCount-1&&d.options.centerMode===true){d.$nextArrow.addClass("slick-disabled");
d.$prevArrow.removeClass("slick-disabled")
}}}}};
b.prototype.updateDots=function(){var c=this;
if(c.$dots!==null){c.$dots.find("li").removeClass("slick-active").attr("aria-hidden","true");
c.$dots.find("li").eq(Math.floor(c.currentSlide/c.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden","false")
}};
b.prototype.visibility=function(){var c=this;
if(document[c.hidden]){c.paused=true;
c.autoPlayClear()
}else{c.paused=false;
c.autoPlay()
}};
a.fn.slick=function(){var f=this,h=arguments[0],e=Array.prototype.slice.call(arguments,1),c=f.length,g=0,d;
for(g;
g<c;
g++){if(typeof h=="object"||typeof h=="undefined"){f[g].slick=new b(f[g],h)
}else{d=f[g].slick[h].apply(f[g].slick,e)
}if(typeof d!="undefined"){return d
}}return f
};
a(function(){a("[data-slick]").slick()
})
}));
B.hotel=B.hotel||{};
B.hotel.Events={Gallery:{BEFORE_SLIDE_CHANGE:"hp:gallery_before_slide_change",AFTER_SLIDE_CHANGE:"hp:gallery_after_slide_change",INIT:"hp:gallery_init",THUMB_HOVER:"hp:gallery_thumb_hover",NAVIGATE:"hp:gallery_navigate",NAVIGATE_MANUAL:"hp_gallery_navigate_manual",ON_CTA_SLIDE:"hp:gallery_on_cta_slide",OFF_CTA_SLIDE:"hp:gallery_off_cta_slide"},RT:{ROOM_SELECTED:"rt:room_selected",ROOM_CHANGED:"rt:room_changed",NO_ROOM_SELECTED:"rt:no_rooms_selected",NO_ROOM_SELECTED_POSTALERT:"rt:no_rooms_selected_postalert",SUMMARY_CHANGE:"rt:summary_change",SUMMARY_BEFORE_CHANGE:"rt:summary_before_change",SUMMARY_HIDE:"rt:summary_hide",LIGHTBOX_OPEN:"rt-lightbox-open",LIGHTBOX_CLOSE:"rt-lightbox-closed",LIGHTBOX_READY:"rt-lightbox-ready",STICKY_STUCK:"rt:sticky_stuck",STICKY_RELEASE:"rt:sticky_release"},Reviews:{REVIEWS_FETCHED:"REVIEWS:fetched",SEO_REVIEWS_FETCHED:"SEO_REVIEWS:fetched"},Other:{LOCK_PRICE_DISMISSED:"hp:lock_price_dismissed"}};
B.hotel.Events.ReviewFloater={FORCE_SLIDE:"hp:gallery_rf_force_slide",MOUSE_ENTER:"hp:gallery_rf_mouse_enter",MOUSE_LEAVE:"hp:gallery_rf_mouse_leave"};
B.hotel.Goals={Gallery:{CLICK_NAVIGATION:"hp:gallery_arrows_clicked",VIEW_ALL_PHOTOS:"hp:gallery_photos_all_viewed",HOVER_THUMB:"hp:gallery_thumbs_used"},RT:{}};
B.hotel.GAEvents={};
booking.components.define("legacy-emitter",function(b,a){this.eventHandlers={};
this.bind=function(c,d){this.eventHandlers[c]=this.eventHandlers[c]||[];
this.eventHandlers[c].push(d);
return this
};
this.once=function(c,d){var e=this;
var f=function(g){e.unbind(c,f);
d.apply(e,arguments)
};
this.bind(c,f);
return this
};
this.unbind=function(d,e){this.eventHandlers[d]=this.eventHandlers[d]||[];
if(e){var c=a.inArray(e,this.eventHandlers[d]);
c!=-1&&this.eventHandlers[d].splice(c,1)
}else{this.eventHandlers[d]=[]
}return this
};
this.trigger=function(d,f){if(!this.eventHandlers[d]||this.eventHandlers[d].length==0){return this
}var c=false,e=this;
a.each(this.eventHandlers[d],function(g,h){if(c){return false
}h&&h.call&&h.call(e,{type:d,data:f,stopPropagation:function(){c=true
}})
});
return this
};
this.on=this.bind;
this.off=this.unbind
});
B.define("overlay",function(d,c,e){var f=d("event-emitter"),b,a;
e.exports=f.extend({options:{},created:false,visible:false,getElement:function(g){if(!this.created){this.created=true;
b=$('<div class="b-overlay" style="display:none"></div>');
$("body").append(b);
a=$("html").component("keyboard");
a.on("keyup:Escape",this._keyboardEscape.bind(this));
b.click(this._backgroundClick.bind(this))
}this.options=g||{};
this.options.animationDuration=this.options.animationDuration||0.5;
return b
},show:function(){if(this.visible||!this.created){return false
}this.visible=true;
this.trigger("show");
b.fadeIn(this.options.animationDuration*1000,function(){this.trigger("show:end")
}.bind(this))
},hide:function(){if(!this.visible||!this.created){return false
}this.visible=false;
this.trigger("hide");
b.fadeOut(this.options.animationDuration*1000,function(){this.trigger("hide:end")
}.bind(this))
},_keyboardEscape:function(g){if(!this.options.preventHide){this.hide()
}},_backgroundClick:function(g){if(!this.options.preventHide&&(g.currentTarget===g.target||(this.options.hideElements&&this.options.hideElements.indexOf(g.target)!=-1))){g.preventDefault();
this.hide()
}}})
});
B.define("component/keyboard",function(c,a,d){var b=c("component"),e=c("event-emitter"),g={8:"Backspace",46:"Delete",9:"Tab",13:"Enter",27:"Escape",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",65:"A",66:"B",67:"C",68:"D",69:"E",70:"F",71:"G",72:"H",73:"I",74:"J",75:"K",76:"L",77:"M",78:"N",79:"O",80:"P",81:"Q",82:"R",83:"S",84:"T",85:"U",86:"V",87:"W",88:"X",89:"Y",90:"Z"};
function f(i,h){return function(k){var j="";
if(k.which&&g[k.which.toString()]!==undefined){if(k.originalEvent.altKey){j+=":alt"
}if(k.originalEvent.ctrlKey){j+=":ctrl"
}if(k.originalEvent.metaKey){j+=":meta"
}if(k.originalEvent.shiftKey){j+=":shift"
}j+=":"+g[k.which];
i.trigger(h+j,{keys:h+j,originalEvent:k})
}}
}d.exports=b.extend({init:function(){e.extend(this);
this.$el.bind("keydown",f(this,"keydown")).bind("keyup",f(this,"keyup"))
}})
});
B.define("component/company/lp-return-bar/lp-return-bar",function(c,a,d){var b=c("component");
d.exports=b.extend({init:function(){this.setupHandlers()
},setupHandlers:function(){this.$el.find('[data-return-bar-dismiss], [data-return-bar-dismiss=""]').bind("click",this.dismiss.bind(this))
},dismiss:function(e){if(B.env.b_browser!=="msie"||B.env.b_browser_version>9){this.$el.remove();
e.preventDefault();
history.replaceState({},document.title,$(e.target).attr("href"))
}B.track.custom_goal("bbtool_lp_return_bar",2)
}})
});
booking.components.define("nearby-widget",function(c,b){var a=this;
this.init=function(d){a.me=b(d);
a.type=a.me.data("type")||"";
a.MAX_RESULTS=a.me.data("maxresults")||4;
a.experiment=a.me.data("experiment")||undefined;
a.keyword=a.me.data("keyword")||"";
a.radius=a.me.data("radius")||null;
a.domNode=a.me.find(".content")[0]||a.me[0];
a.jstmpl=a.me.data("jstmpl")||"loc_hp_nearby_restaurant";
a.rowname=a.me.data("rowname")||"nearby-row";
c.atlas.require(["atlas-places"],function(g){var f=new g({provider:"provider-places",modules:["places"],options:{domNode:a.domNode}});
var e={location:[c.env.b_map_center_latitude,c.env.b_map_center_longitude],keyword:a.keyword,types:a.type.split("|")};
if(a.radius){e.radius=a.radius
}else{e.rankBy=1
}f.done(function(){f.searchPlaces(e,a.placesHandler)
})
})
};
this.filterPlaces=function(f){var g,d=[],e;
a.MAX_RESULTS=Math.min(a.MAX_RESULTS,f.length);
for(g=0;
g<a.MAX_RESULTS;
++g){e=f[g];
d.push(e)
}return d
};
this.startTracking=function(){if(a.experiment===undefined){return true
}c.track.onView(a.me).exp(a.experiment);
return c.track.getVariant(a.experiment)
};
this.done=function(){if(booking.startup.bookingSticker){booking.startup.bookingSticker.update()
}};
this.placesHandler=function(d){c.atlas.require(["geo.projection"],function(f){var e=a.filterPlaces(d);
if(e.length>0&&a.startTracking()){b.each(e,function(k,j){var h=j.get("data");
var l=j.get("location");
var o={lat:c.env.b_map_center_latitude,lng:c.env.b_map_center_longitude};
var n={lat:l.lat(),lng:l.lng()};
var g=Math.round(f.getDistance(o,n)),m="m",i=function(p,q){return Math.round(q/p)*p
};
if(g>=1000){g=(g/1000).toFixed(1);
m="km"
}else{if(g>10){if(g>50){g=i(50,g)
}else{g=i(10,g)
}}}h.distance=g;
h.unit=m;
b("#nearby-halal, #nearby-kosher, #nearby-mosque").slice(0,-1).each(function(){b("img",this).remove()
});
j.renderHTML({className:a.rowname,content:c.jstmpl(a.jstmpl).render(h)})
});
a.me.addClass("is-ready").slideDown("slow",a.done)
}})
}
});
B.define("component/tooltip",function(c,a,d){var b=c("component");
d.exports=b.extend({DEFAULTS:{template:'<div class="component-tooltip off" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',placement:"top",alignment:"center",trigger:"hover focus",animation:"true"},init:function(){this._buildOptions();
this._createTooltip();
this._attachEvents()
},_buildOptions:function(){this.options=$.extend({},this.DEFAULTS,this.$el.data());
this.options.intangible="intangible" in this.options;
if(this.options.target){this.options.target=$(this.options.target).first()
}if(!this.options.content){this.options.content=this.options.title||this.el.title
}},_createTooltip:function(){var e="tooltip-"+this.options.placement+" tooltip-align-"+this.options.alignment;
if(this.options.extraClass){e=e+" "+this.options.extraClass
}if(this.options.animation==="true"){e=e+" tooltip-animate"
}this.$tip=$(this.options.template);
this.$tip.addClass(e);
this._attachContent();
this.$tip.appendTo($("body"));
this.$el.trigger("inserted.B.tooltip",[this.$tip])
},_attachContent:function(){var f;
var e=this.$tip.find(".tooltip-inner");
if(this.options.target){e.append(this.options.target.clone())
}else{this.options.target=[];
e.text(this.options.content)
}},_positionTooltip:function(){this._defineAlignmentVars();
this._placeTooltip();
this._alignTooltip();
this.$tip.css({left:this.left,top:this.top})
},_defineAlignmentVars:function(){this.elOffset=this.$el.offset();
this.position="left";
this.dimension="outerWidth";
if(this.options.placement.match(/top|bottom/)){this.position="top";
this.dimension="outerHeight"
}},_accountForRTL:function(e){if(!B.env.rtl){return e
}if(e==="left"){return"right"
}if(e==="right"){return"left"
}return e
},_placeTooltip:function(){var e=this._accountForRTL(this.position);
var f=this.dimension;
if(this._accountForRTL(this.options.placement)===e){this[e]=this.elOffset[e]-this.$tip[f]()
}else{this[e]=this.elOffset[e]+this.$el[f]()
}},_alignTooltip:function(){var e;
var f;
if(this.position==="left"){e="top";
f="outerHeight"
}else{e="left";
f="outerWidth"
}switch(this._accountForRTL(this.options.alignment)){case e:this[e]=this.elOffset[e];
break;
case"center":this[e]=(this.$el[f]()/2)+this.elOffset[e]-(this.$tip[f]()/2);
break;
default:this[e]=this.elOffset[e]+this.$el[f]()-this.$tip[f]()
}},_attachEvents:function(){if(this.options.trigger.match(/manual/)){return
}var j=this.options.trigger.split(" ");
var h=j.length;
var g=this.$el.add(this.$tip);
var f;
var k;
var e;
if(this.options.intangible){g=this.$el
}for(h;
h--;
){f=j[h];
if(f==="click"){this.$el.on("click",$proxy(this.toggle,this))
}else{k=f=="hover"?"mouseenter":"focusin";
e=f=="hover"?"mouseleave":"focusout";
g.on(k,$.proxy(this.show,this));
g.on(e,$.proxy(this.hide,this))
}}},_trackTransitionEnd:function(e){var f=this.$el;
this.$tip.one("transitionend",function(g){f.trigger(e,[this])
})
},show:function(){this.$el.trigger("show.B.tooltip",[this.$tip]);
this._trackTransitionEnd("shown.B.tooltip");
this.$el.attr("aria-describedby",this.el.id);
this._positionTooltip();
this.$tip.addClass("on").removeClass("off")
},hide:function(){this.$el.trigger("hide.B.tooltip",[this.$tip]);
this._trackTransitionEnd("hidden.B.tooltip");
this.$el.removeAttr("aria-describedby");
this.$tip.removeClass("on").addClass("off")
},toggle:function(){if(this.$tip.is(".on")){this.hide()
}else{this.show()
}}})
});
B.define("read-data-options",function(b,a,c){c.exports=function(f,e){var d={};
if(f.jquery){f=f[0]
}Object.keys(e).forEach(function(g){var h=e[g];
var j="data-"+(h.name||g);
var i=null;
if(typeof h==="function"){h={type:h}
}if(!f.attributes[j]){if(h.hasOwnProperty("defaultValue")){d[g]=h.defaultValue
}else{if(h.hasOwnProperty("required")){throw new Error("read-data-options: missing required "+j+" attribute")
}}return
}var i=f.getAttribute(j);
if(h.type===Boolean){i=!(/^0|false|no|off$/.test(i))
}else{if(h.type===String){i=i||h.defaultValue
}else{if(h.type===Number){i=parseFloat(i,10);
if(isNaN(i)){i=h.defaultValue
}}else{throw new Error("data-options: Invalid option type for "+g)
}}}d[g]=i
});
return d
}
});
B.define("component/core/lightbox/trigger",function(b,a,d){var c=b("read-data-options");
var e=b("lightbox");
d.exports=b("component").extend({init:function(){var f=this.$el.data("event")||"click";
this.options=c(this.el,{bCloseButton:{name:"close-button",type:Boolean},bCanScroll:{name:"scrollable",type:Boolean},bOverflowVisible:{name:"overflow-visible",type:Boolean},autoWidth:{name:"auto-width",type:Boolean},ajax:{name:"ajax",type:Boolean},iframe:{name:"iframe",type:Boolean},customWrapperClassName:{name:"wrapper-class",type:String},customMaskClassName:{name:"mask-class",type:String}});
if(f==="page-load"){this.target=this.$el;
$(document).ready((function(){setTimeout(this.open.bind(this),150)
}).bind(this))
}else{this.target=this.$el.attr("href")||this.$el.data("src")||this.target;
this.$el.bind(f,this.open.bind(this))
}},open:function(f){if(f&&f.preventDefault){f.preventDefault()
}e.show(this.target,this.options)
}})
});
booking.components.define("clickable-block",function(b,a){this.init=function(d){var c=d.data("selector")||"a";
var e=d.data("exclude")||"";
var f=d.data("target")||"";
d.click(function(i){if(!a(i.target).closest(c).length||!(e&&a(i.target).closest(e).length)){i.preventDefault();
var g=d.find(c+":first"),j=g.attr("target")=="_blank"||f=="blank"||f=="_blank",h=g.attr("href")||g.data("href");
if(h){if(!j){window.location=h
}else{window.open(h)
}}}})
}
});
B.define("component/reviews/review-helpful",function(c,a,d){var b=c("component");
var e=c("jstmpl");
d.exports=b.extend({init:function(){this.form=this.$el.find(".review-helpful__form");
this.submitButton=this.form.find("[type=submit]");
this.reviewId=this.form.find("[name=review_id]").val();
this.currentCount=this.$el.data("current-count");
this.feedbackMessage=this.$el.find(".review-helpful__vote-feedback-message");
if(this.isAlreadyVoted()){this.disableSubmit();
this.updateMessage()
}else{this.attachEvents()
}},attachEvents:function(){this.form.on("submit",this.formSubmit.bind(this))
},disableSubmit:function(){this.submitButton.prop("disabled",true).removeClass("review-helpful__form-submit").addClass("review-helpful__form-submitted").val(e.translations("review_helpful_vote_button_confirmed")+" \u2714")
},enableSubmit:function(){this.submitButton.prop("disabled",false).removeClass("review-helpful__form-submitted").addClass("review-helpful__form-submit").val(e.translations("review_helpful_vote_button_confirmed"))
},updateMessage:function(){var f=this.currentCount;
if(f===0){this.feedbackMessage.queue(function(){$(this).hide().dequeue()
}).queue(function(){$(this).html(e.translations("review_helpful_vote_you_bold",null,{start_bold:"<strong>",end_bold:"</strong>"})).dequeue()
}).queue(function(){$(this).fadeIn("fast").dequeue()
})
}else{this.feedbackMessage.queue(function(){$(this).fadeOut("fast").dequeue()
}).queue(function(){$(this).html(e.translations("review_helpful_vote_you_and_others_bold",f,{number_people:f,start_bold:"<strong>",end_bold:"</strong>"})).dequeue()
}).queue(function(){$(this).fadeIn("fast").dequeue()
})
}},addVoteToCookie:function(){var f=[];
window.b_cookie=window.b_cookie||{};
if(window.b_cookie.rF){f=window.b_cookie.rF.split(",")
}f=$.grep(f,function(h,g){return h&&h!=="undefined"
});
if(f.length>49){f=f.slice(f.length-49)
}f.push(this.reviewId);
window.b_cookie.rF=f.toString();
if(JSON&&JSON.stringify&&$.cookie("b")){$.cookie("b",JSON.stringify(window.b_cookie),{expires:30,path:"/",domain:".booking.com"})
}},isAlreadyVoted:function(){var g=[];
if(window.b_cookie&&window.b_cookie.rF){g=window.b_cookie.rF.split(",")
}else{if(JSON&&JSON.parse&&$.cookie("b")){var f=JSON.parse($.cookie("b"));
if(f.rF){g=f.rF.split(",")
}}}if(g.length&&g.indexOf(this.reviewId)!==-1){return true
}return false
},trackGAClick:function(){B.google.trackEvent(B.google.clickTracker,"Action: reviewlist","Review usefulness vote")
},formSubmit:function(f){f&&f.preventDefault();
this.disableSubmit();
$.ajax({url:this.form.prop("action"),data:this.form.serialize(),method:"POST",success:this.success.bind(this),error:this.error.bind(this)})
},success:function(g,h,f){this.updateMessage();
this.addVoteToCookie();
this.trackGAClick()
},error:function(f,h,g){this.enableSubmit()
}})
});
(function(c,d,b,a){d.hotel.GallerySettings=d.hotel.GallerySettings||{};
d.hotel.GallerySettings={slide:'div:not("#hp-gallery-custom")',autoplay:true,autoplaySpeed:d.env.hp_gallery_autoplay_speed,dots:false,easing:"swing",fade:true,lazyLoad:d.env.hp_gallery_lazyload,infinite:true,initialSlide:0,pauseOnHover:false,speed:0,keydownOverride:true,keydownSpeed:100,slidesToShow:1,centerMode:true,slidesToScroll:1,rtl:d.env.rtl}
})(window,window.booking,document,jQuery);
(function(c,d,b,a){d.hotel.Gallery=(function(){var e={container:null,gallery:null,slides:[],thumbs:[],nav:null,review:null,activeSlide:null,nextSlide:null,counter:null,isOldIE:(d.env.b_browser==="msie"&&d.env.b_browser_version<10),toPhotoID:d.env.b_hp_tophotoid||0,initSlide:0,totalSlides:0,defaultFadeSpeed:d.env.hp_gallery_fade_speed,fadeSpeedOnHover:300,currentSlide:0,hoverTimer:0,initTimer:0,overrides:{},options:{},CLASS_THUMB:"hotel_thumbs_sprite",CLASS_SELECTED_THUMB:"selected_thumb",CLASS_GALLERY_CONTROL:"hp-gallery-control",CLASS_REVIEW_FLOATER:"nha_large_photo_reviewFloater",CLASS_GALLERY_COUNTER:"js-hp-gallery__counter",CLASS_COUNTER_CURRENT:"js-hp-gallery__counter__current",CLASS_COUNTER_COUNT:"js-hp-gallery__counter__count",CLASS_VISIBLE:"visible",CLASS_HIDDEN:"hp-gallery__hidden",EVENT_GALLERY_BEFORE_CHANGE:d.hotel.Events.Gallery.BEFORE_SLIDE_CHANGE,EVENT_GALLERY_AFTER_CHANGE:d.hotel.Events.Gallery.AFTER_SLIDE_CHANGE,EVENT_GALLERY_INIT:d.hotel.Events.Gallery.INIT,GOAL_CLICK_NAVIGATION:d.hotel.Goals.Gallery.CLICK_NAVIGATION,GOAL_VIEW_ALL_PHOTOS:d.hotel.Goals.Gallery.VIEW_ALL_PHOTOS,GOAL_HOVER_THUMB:d.hotel.Goals.Gallery.HOVER_THUMB,trackingelem:a("#photo_wrapper"),emitter:d.events,photosViewed:[],trackedPhotosViewed:false,trackslides:{},setup:function(f){var g=this;
g.container=f;
g.gallery=g.container.find('[data-gallery=""]');
g.slides=g.gallery.children().not("#hp-gallery-custom");
g.thumbs=g.container.find("a."+g.CLASS_THUMB);
g.nav=g.container.find("a."+g.CLASS_GALLERY_CONTROL);
g.review=g.container.find("div."+g.CLASS_REVIEW_FLOATER);
g.counter=g.container.find("div."+g.CLASS_GALLERY_COUNTER);
g.totalSlides=g.slides.length;
g.setupSlides();
g.initSlide=g.toPhotoID?g.slides.index(g.slides.filter('[data-photoid="'+g.toPhotoID+'"]')):0;
g.defaultFadeSpeed=g.isOldIE?0:d.env.hp_gallery_fade_speed;
g.fadeSpeedOnHover=g.isOldIE?0:300;
g.overrides={initialSlide:g.initSlide,speed:g.defaultFadeSpeed,nextArrow:g.nav.filter('[data-nav="next"]'),prevArrow:g.nav.filter('[data-nav="prev"]'),waitForAnimate:false};
g.options=a.extend({},d.hotel.GallerySettings,g.overrides);
g.initSlickEvents()
},setupSlides:function(){var g=this,h=a("#hp-gallery-custom").children(),f=false;
if(h.length){h.each(function(){var i=a(this),n=i.attr("data-gallery-insert-at"),m,l=i.attr("data-gallery-track-at"),k=i.attr("data-gallery-hash"),j;
m=n?(n=="last"?g.totalSlides:n):g.totalSlides;
l=l?(l=="last"?g.totalSlides:l):g.totalSlides;
if(k){if(+d.track.getVariant(k)){if(m&&((m-1)!=g.slides.index(this))){j=g.slides.eq(m-1);
if(n=="last"){j.after(i)
}else{j.before(i)
}f=true
}}if(d.track.getVariant(k)!==false){if(l){if(!g.trackslides[l-1]){g.trackslides[l-1]=[]
}g.trackslides[l-1].push(k)
}}}});
if(f){g.slides=g.gallery.children().not("#hp-gallery-custom");
g.totalSlides=g.slides.length
}}},initSlickEvents:function(){var f=this;
f.gallery.bind("init",function(h,g){f.initControls();
f.setupCounter();
f.trackGoals("autoplay",f.currentSlide);
f.updatePhotosViewed(f.initSlide);
f.highlightThumb(g.$slides.eq(f.initSlide).attr("data-photoid"));
f.bindEmitterEvents(g);
if(d.track.getVariant("BUTGbAJBTWWCQSLT")==2){var i=g.$slides.eq(f.initSlide).attr("data-gallery-container-custom-class");
if(f.containerCustomClass&&f.containerCustomClass!==""){f.container.removeClass(f.containerCustomClass)
}f.containerCustomClass="";
if(i){f.containerCustomClass=i;
f.container.addClass(i)
}}f.trackToolbar();
d.hotel.Gallery.slick=g;
f.emitter.trigger(f.EVENT_GALLERY_INIT,[f])
}).bind("beforeChange",function(g,m,l,j){var h,s;
f.activeSlide=f.slides.eq(l);
f.nextSlide=f.slides.eq(j);
s=f.nextSlide.attr("data-gallery-pause");
if(f.trackslides[j]){for(var k=0,n=f.trackslides[j].length;
k<n;
k++){f.trackExperiment(f.trackslides[j][k])
}delete f.trackslides[j]
}if(s=="true"){f.gallery.slick("slickPause")
}else{f.gallery.slick("slickPlay")
}f.updatePhotosViewed(j);
f.highlightThumb(m.$slides.eq(j).attr("data-photoid"));
if(d.track.getVariant("BUTGbAJBTWWCQSLT")==2){var o=m.$slides.eq(j).attr("data-gallery-container-custom-class");
if(f.containerCustomClass&&f.containerCustomClass!==""){f.container.removeClass(f.containerCustomClass)
}f.containerCustomClass="";
if(o){f.containerCustomClass=o;
f.container.addClass(o)
}}f.updateCounter(j+1);
var r=true;
var p=m.$slides.index(f.activeSlide),q=m.$slides.index(f.nextSlide);
if((q<p)||((q===m.$slides.length-1)&&p===0)){r=false
}f.emitter.trigger(d.hotel.Events.ReviewFloater.FORCE_SLIDE,[r]);
f.emitter.trigger(f.EVENT_GALLERY_BEFORE_CHANGE,[g,m,f.activeSlide,f.nextSlide])
}).bind("afterChange",function(h,g,i){f.activeSlide=f.slides.eq(i);
if(d.env.b_gallery_slide_onview){f.trackSlideView()
}f.trackGoals(f.GOAL_VIEW_ALL_PHOTOS);
f.emitter.trigger(f.EVENT_GALLERY_AFTER_CHANGE,[h,g,f.activeSlide])
}).bind("reInit",function(h,g){if(f.counter.length){f.updateCounter(g.getCurrent()+1,g.slideCount)
}});
f.run()
},initControls:function(){var f=this,g;
f.gallery.add(f.nav).add(f.review).add(".hp-gallery__toolbar").bind("mouseenter",function(){f.nav.addClass(f.CLASS_VISIBLE);
f.gallery.slick("slickSetOption","speed",f.fadeSpeedOnHover)
}).bind("mouseleave",function(){f.nav.removeClass(f.CLASS_VISIBLE);
f.gallery.slick("slickSetOption","speed",f.defaultFadeSpeed)
});
f.nav.bind("click",function(h){if(d.track.getVariant("YcWVNYNSCYAXHCTNTWfYKe")){h.preventDefault()
}f.navigate(f,this);
return false
}).bind("click.tracking",function(){f.trackGoals(f.GOAL_CLICK_NAVIGATION)
});
f.thumbs.bind("mouseenter click",function(j){var k=a(this),h,m,l,i=j.type=="click"?0:300;
f.hoverTimer=c.setTimeout(function(){h=k.attr("data-photoid");
m=f.slides.filter('[data-photoid="'+h+'"]');
l=f.gallery.slick("getSlick");
f.gallery.slick("slickSetOption","speed",f.fadeSpeedOnHover);
f.gallery.slick("slickGoTo",l.$slides.index(m.get(0)))
},i)
}).bind("mouseleave",function(){f.gallery.slick("slickSetOption","speed",f.defaultFadeSpeed);
clearTimeout(f.hoverTimer)
}).bind("mouseenter.tracking click.tracking",function(){f.trackGoals(f.GOAL_HOVER_THUMB)
});
f.container.on("mouseenter.pause","div.hp-gallery-thumbs",function(){var h=f.gallery.slick("getSlick");
f.gallery.slick("slickSetOption","autoplaySpeed",10000*1000);
f.gallery.slick("slickPause")
}).on("mouseleave.pause","div.hp-gallery-thumbs",function(){var h=f.gallery.slick("getSlick");
f.gallery.slick("slickSetOption","autoplaySpeed",3*1000);
f.gallery.slick("slickPlay")
});
a(window).bind("blur",function(){if(d.track.getVariant("BUTWWCQSFTeXLEfHfSbfZALOBaNFHe")){var h=f.gallery.slick("getSlick");
f.gallery.slick("slickSetOption","autoplaySpeed",10000*1000);
f.gallery.slick("slickPause")
}d.track.stage("BUTWWCQSFTeXLEfHfSbfZALOBaNFHe",1)
}).bind("focus",function(){if(d.track.getVariant("BUTWWCQSFTeXLEfHfSbfZALOBaNFHe")){var h=f.gallery.slick("getSlick");
f.gallery.slick("slickSetOption","autoplaySpeed",3*1000);
f.gallery.slick("slickPlay")
}d.track.stage("BUTWWCQSFTeXLEfHfSbfZALOBaNFHe",2)
});
f.emitter.on(d.hotel.Events.ReviewFloater.MOUSE_ENTER,function(){var h=f.gallery.slick("getSlick");
f.gallery.slick("slickSetOption","autoplaySpeed",10000*1000);
f.gallery.slick("slickPause")
});
f.emitter.on(d.hotel.Events.ReviewFloater.MOUSE_LEAVE,function(){var h=f.gallery.slick("getSlick");
f.gallery.slick("slickSetOption","autoplaySpeed",3*1000);
f.gallery.slick("slickPlay")
})
},trackToolbar:function(){var g=a("body"),f=true
},bindEmitterEvents:function(g){var f=this;
f.emitter.on("main-tab-opened",function(){if(g){g.setPosition()
}})
},highlightThumb:function(f){var g=this;
g.thumbs.filter("."+g.CLASS_SELECTED_THUMB).removeClass(g.CLASS_SELECTED_THUMB);
if(f){g.thumbs.filter('[data-photoid="'+f+'"]').addClass(g.CLASS_SELECTED_THUMB)
}},getThumb:function(i){var h=this,g=h.gallery.slick("getSlick"),f=g.$slides.eq(i).attr("data-photoid");
if(f){return h.thumbs.filter('[data-photoid="'+f+'"]')
}},updatePhotosViewed:function(g){var f=this;
if(typeof g!==undefined&&a.inArray(g,f.photosViewed)===-1){f.photosViewed.push(g)
}f.trackGoals(f.GOAL_VIEW_ALL_PHOTOS)
},setupCounter:function(){var f=this;
if(f.counter.length){f.counter.find("span."+f.CLASS_COUNTER_CURRENT).text(f.initSlide+1).end().find("span."+f.CLASS_COUNTER_COUNT).text(f.totalSlides).end().removeClass(f.CLASS_HIDDEN)
}},updateCounter:function(h,g){var f=this;
if(h){f.counter.find("span."+f.CLASS_COUNTER_CURRENT).text(h)
}if(g){f.counter.find("span."+f.CLASS_COUNTER_COUNT).text(g)
}},navigate:function(g,f){var i=a(f).attr("data-nav"),h=g.gallery.slick("slickCurrentSlide");
if(i){g.trackGoals("tap-"+i,h)
}},trackExperiment:function(f){d.track.exp(f)
},trackGoals:function(h,g){var f=this;
switch(h){case f.GOAL_CLICK_NAVIGATION:f.emitter.trigger(f.GOAL_CLICK_NAVIGATION);
f.nav.unbind("click.tracking");
break;
case f.GOAL_VIEW_ALL_PHOTOS:if(!f.trackedPhotosViewed&&(f.photosViewed.length===f.totalSlides)){f.emitter.trigger(f.GOAL_VIEW_ALL_PHOTOS);
f.trackedPhotosViewed=true
}break;
case f.GOAL_HOVER_THUMB:f.emitter.trigger(f.GOAL_HOVER_THUMB);
f.thumbs.unbind("mouseenter.tracking click.tracking");
break;
default:f.trackingelem.trigger(h,g)
}},parseTrackOption:function(h){if(a.type(h)=="string"){var h=a.trim(h);
if(h.length){var f=h.match(/^(.+)(\_\_|\:)([1-9])$/);
var j=h,i,g;
if(f){if(f[2]===":"){g=f[3]
}else{i=f[3]
}j=f[1]
}return{hash:j,customGoal:i,stage:g}
}}return h
},trackSlideView:function(){var g=this;
var f=g.activeSlide.data("track-slide-view");
var j=[],k;
if(f){j=a.trim(f).split(",");
for(var h=0;
h<j.length;
h++){k=g.parseTrackOption(j[h]);
if(k.stage){d.track.stage(k.hash,k.stage)
}else{if(k.customGoal){d.track.custom_goal(k.hash,k.stage)
}else{d.track.exp(k.hash)
}}}}},run:function(){var f=this;
f.initTimer=c.setTimeout(function(){f.gallery.slick(f.options)
},0)
}};
return{init:function(f){e.setup(f)
},slick:null}
}());
a(function(){var e=a("div.hp-gallery-container");
if(e.length){d.hotel.Gallery.init(e)
}})
})(window,window.booking,document,jQuery);
(function(c,a){var b=function(){var f=a(".hp_seo_reviews_container");
var e=c.env.b_this_url.replace("/hotel/","/hotelfeaturedreviews/");
var d=function(i,h,g){f.html(i);
c[sNSStartup].hotelSEOReviews.initialize();
c.events.trigger("SEO_REVIEWS:fetched")
};
if(!c.env.b01){a.ajax({url:e,success:d})
}};
c[sNSStartup].asyncHotelSEOReviews={priority:9,init:b}
}(window.booking,window.jQuery));
(function(b,c){var a=function(f){if(!window.currencyFormat){return f
}f+="";
var g,h=window.currencyFormat,e=f.match(/[\.,]{1}([0-9]{1,})$/),d=e?e[1]:"";
f=e?f.replace(e[0],""):f;
if(e){f=parseFloat(f+"."+d).toFixed(parseInt(h.decimals,10)).replace(".",h.decimal_separator)
}f=f.replace(/(\d)(?=(\d{3})+?([\.,][0-9]{2,3})?$)/g,"$1"+h.group_separator);
if(h.symbol_position=="before"){return""+h.symbol+h.currency_separator+f
}else{return""+f+h.currency_separator+h.symbol
}};
window.formatCurrency=a
})();
(function(){})();
booking[sNSStartup].dynamic_rooms_left={priority:2,urg_msgs:{},init:function(){var b=false;
var c=this;
(function(){b=false;
$(".b_available_multi_room_price, .b_available_multi_room_price_single").each(function(){if(parseInt($(this).val())!=0){b=true
}});
if(b){$("#book_now_best_price_reinforcement").show()
}else{$("#book_now_best_price_reinforcement").hide()
}})();
$(".b_available_multi_room_price, .b_available_multi_room_price_single").change(function(){b=false;
$(".b_available_multi_room_price, .b_available_multi_room_price_single").each(function(){if(parseInt($(this).val())!=0&&!($(this).hasClass("free_cancellation_trigger"))){b=true
}});
if(b){$("#book_now_best_price_reinforcement").show();
$("#book_now_free_cancellation_reinforcement").hide()
}else{$("#book_now_best_price_reinforcement, #mbnbb div#book_now_best_price_reinforcement").hide()
}c.getFilterPrice(this)
});
var a=this;
$(".b_available_multi_room_price_single").change(function(){a.updateUrgencyMsg(this,"room_single")
});
$(".b_available_multi_room_price").change(function(){a.updateUrgencyMsg(this,"room_double")
})
},getFilterPrice:function(b){if($("#pr_filter").length&&$("#pr_filter_range").length){var c=$("#pr_filter").val();
if(c.indexOf(",")>-1){var d=c.split(",")[0];
var a=c.split(",")[1];
$("#pr_filter_range").val("0");
if(!isNaN(d)&&!isNaN(a)){$("select.b_room_selectbox").each(function(){if($(this).val()>0){var e=parseInt($(this).attr("data-price-avg-filter").replace(/[^0-9.]/g,""));
if(e>=parseInt(d)&&e<=parseInt(a)){$("#pr_filter_range").val("1")
}}})
}}}},updateUrgencyMsg:function(d,b){var c=d.getAttribute("data-relid"),f=$("#"+c);
if(f.length!==0){var e=elem_value=parseInt(d.value,10);
if(!f.attr("data-meta")){f.attr("data-meta",f.html())
}if(typeof(this.urg_msgs[c])!=="undefined"){if(b==="room_single"&&this.urg_msgs[c].room_double){e+=parseInt(this.urg_msgs[c].room_double,10)
}else{if(b==="room_double"&&this.urg_msgs[c].room_single){e+=parseInt(this.urg_msgs[c].room_single,10)
}}}else{this.urg_msgs[c]={}
}this.urg_msgs[c][b]=elem_value;
var a=parseInt(d.getAttribute("data-roomsleft"),10)-e;
if(a<=0){f.fadeOut()
}else{if(a==$("option",d).length-1&&f.attr("data-meta")){var g=f.attr("data-meta")
}else{var g=booking.env.x_left_rate[a-1]
}f.hide().html(g).fadeIn("slow")
}}}};
var fmTimer=null;
var fmbg=false;
var num=3;
var cnt=0;
function fminit(j,d,h,g,e){$("#maxotel_rooms").removeClass("error");
$("#errorNoRoomSelected").hide();
if(typeof j=="object"){oElem=j
}else{if(j&&document.getElementById(j)){oElem=document.getElementById(j)
}else{return false
}}if(h){var i=h
}else{i="#ffffff"
}if(cnt++>num){cnt=0;
if(d){$(oElem).css("background-color",i)
}return
}if(e&&e.length>1){fmb1=e[0];
fmb2=e[1];
fmb3=e[2]
}else{fmb1=230;
fmb2=237;
fmb3=246
}if(g&&g.length>1){fmb4=g[0];
fmb5=g[1];
fmb6=g[2]
}else{fmb4=197;
fmb5=212;
fmb6=233
}var c=(fmb1>fmb4)?fmb1-fmb4:fmb4-fmb1;
var b=(fmb2>fmb5)?fmb2-fmb5:fmb5-fmb2;
var a=(fmb3>fmb6)?fmb3-fmb6:fmb6-fmb3;
var f=330/Math.max(c,b,a);
if(!fmbg){fmtemp=fmb1;
fmb1=fmb4;
fmb4=fmtemp;
fmtemp=fmb2;
fmb2=fmb5;
fmb5=fmtemp;
fmtemp=fmb3;
fmb3=fmb6;
fmb6=fmtemp
}fmbg=!fmbg;
fmFade(oElem,d,h,g,e,f)
}function fmToHex(d){var c="0123456789ABCDEF";
if(d===0){return"00"
}var b;
var a="";
while(d!==0){b=d%16;
d=(d-b)/16;
a=c.charAt(b)+a
}if(a.length<2){a="0"+a
}return a
}function fmFade(o,c,m,l,d,i){var p="#"+fmToHex(fmb1)+fmToHex(fmb2)+fmToHex(fmb3);
var b=$(o).length;
if(b>0){if(b>1){$(o).each(function(){this.style.backgroundColor=p
})
}else{if(o.style){o.style.backgroundColor=p
}else{try{oUseElem=$(o).get(0);
oUseElem.style.backgroundColor=p
}catch(k){}}}if(b==1&&o.id&&o.id=="bookNow1"){if(document.getElementById("bookNow2")){document.getElementById("bookNow2").style.backgroundColor=p
}}if(fmb1!=fmb4){if(fmb4>fmb1){fmb1++
}else{fmb1--
}}if(fmb2!=fmb5){if(fmb5>fmb2){fmb2++
}else{fmb2--
}}if(fmb3!=fmb6){if(fmb6>fmb3){fmb3++
}else{fmb3--
}}if((fmb1==fmb4)&&(fmb2==fmb5)&&(fmb3==fmb6)){window.clearTimeout(fmTimer);
fminit(o,c,m,l,d)
}else{var h=o;
var n=c;
var f=m;
var g=l;
var a=d;
var j=i;
fmTimer=window.setTimeout(function(){fmFade(h,n,f,g,a,j)
},j)
}}}jQuery(function(){var a=$(".genius-recommended-rooms .gr-room-link");
$(".genius-recommended-rooms .gr-room-link").click(function(b){b.preventDefault();
var c=$(this).data("id");
$("#"+c).find(".togglelink").trigger("click")
})
});
$(document).ready(function(){var a=$(".editDatesForm");
var b=13;
var c=27;
B.track.exp("YcWVNNRWSEeYFPXfZNUYbeYYcO");
if(!B.track.getVariant("YcWVNNRWSEeYFPXfZNUYbeYYcO")){$(window).scroll(function(){if($("#form-wrapper").length){$("#form-wrapper").css("top",$(window).scrollTop()+200+"px")
}})
}$("#maxotel_rooms span.js_price_button").click(function(d){var e=$("#availability_target"),g=$("#av-calendar-tracking-position");
d.preventDefault();
var f=e.length?e.offset().top:g.offset().top;
if(validateDate()){$("#hotelpage_availform").submit()
}else{alert(booking.env.valdateDates_msg)
}$("html, body").scrollTop(f);
return false
});
$("#hcta_simple, #hcta").click(function(){var f=$("#availability_target"),e=f.length?"#availability_target":"#av-calendar-tracking-position";
var d=$(this).data("url");
if(d){window.location=d
}else{window.location=e
}return false
});
$("#roomsForm .bookNow1_top button, #bookNow1 input, #booknow_beneath input").click(function(){booking.env.no_rooms_selected=0;
$("#maxotel_rooms select").each(function(){if(!$(this).hasClass("bed_preference_select")){booking.env.no_rooms_selected+=parseInt(this.value,10)
}});
if(booking.env.no_rooms_selected<1){booking.google.trackEvent(booking.google.errorTracker,"JavaScript","please_select_one_or_more_rooms_RT")
}});
$("#blockdisplay1 .top_link, #blockdisplay4 .top_link, #rm_cond_link_enter_dates").click(function(){window.location.href="#availability_target";
return false
});
$(document).keyup(function(d){if(d.keyCode===c){$("#close").click()
}});
$(".b_change_dates").click(function(){var d={customWrapperClassName:"modal-edit-dates"};
if(booking.track.getVariant("GWcOCBFO")||booking.track.getVariant("GWcOCBSXHe")){d.bOverflowVisible=true
}booking[sNSStartup].lightbox.show($("#editDates"),d)
})
});
function validateDate(){var f=$("#hotelpage_availform"),e,b,d,c,a,g;
if(!f.find("select[name=checkin_year_month]").length){return false
}e=f.find("select[name=checkin_monthday]").val();
b=f.find("select[name=checkin_year_month]").val().split("-");
d=f.find("select[name=checkout_monthday]").val();
c=f.find("select[name=checkout_year_month]").val().split("-");
a=new Date(b[0],b[1]-1,e);
g=new Date(c[0],c[1]-1,d);
return(a<g)
}$(function(){var b=false,a=window.screen;
if(a&&a.systemXDPI!==undefined&&a.logicalXDPI!==undefined&&a.systemXDPI>a.logicalXDPI){b=(a.systemXDPI/a.logicalXDPI)>1.5
}else{if(window.devicePixelRatio!==undefined){b=window.devicePixelRatio>1.5
}}if(b){B.track.custom_goal("eGBUEXO",1)
}});
(function(a,b){b(function(){b(".whishlist_trigger_rounded_larger_button").bind("mousedown",function(c){a.events.trigger("hp:clicked_save_to_list_button")
})
})
}(window.booking,window.jQuery));
(function(a,b){b(function(){b(".whishlist_trigger_rounded_smaller_button").bind("mousedown",function(c){a.events.trigger("hp:clicked_save_to_list_icon")
})
})
}(window.booking,window.jQuery));
(function(g,e,d,b,f){var a=g.events,c="hp:featured_review_arrows_clicked";
e(b).ready(function(){var i=e("._goalTracker_hp_featured_review_arrows_clicked");
function h(){a.trigger(c);
i.unbind("click",h)
}i.bind("click",h)
})
})(window.booking,window.jQuery,window,document);
(function(g,e,d,b,f){var a=g.events,c="hp:gallery_arrows_clicked";
e(b).ready(function(){var i=e("a.large_image_slider");
function h(){a.trigger(c);
i.unbind("click",h)
}i.bind("click",h)
})
})(window.booking,window.jQuery,window,document);
(function(g,f,d,b){var a=g.events,c="hp:gallery_thumbs_used",e;
f(b).ready(function(){e=f("#photo_wrapper");
function h(){a.trigger(c);
e.unbind("hover-thumb tap-thumb",h)
}if(e.length){e.bind("hover-thumb tap-thumb",h)
}})
})(window.booking,window.jQuery,window,document);
(function(a,b){b(function(){b(".thumbLink, .hotel_history_lnk","#LastViewedHotels").bind("mousedown",function(c){a.events.trigger("hp:my_viewed_hotel_click")
})
})
}(window.booking,window.jQuery));
(function(f,e,d,b){var a=f.events,c="hp:prev_next_hotel_clicked";
e(b).ready(function(){var h=e("._goalTracker_hp_prev_next_hotel_clicked");
function g(){a.trigger(c);
h.unbind("click",g)
}h.bind("click",g)
})
})(window.booking,window.jQuery,window,document);
(function(a,b){a.events.on(a.hotel.Events.RT.ROOM_SELECTED,function(){a.events.trigger("hp:room_select")
})
}(window.booking,window.jQuery));
(function(a,b){b(function(){b("#maxotel_rooms").find("div.ico_policy_info span.jq_tooltip, ul.hp-rt__policy-list li").one("mouseover",function(c){a.events.trigger("hp:conditions_viewed");
if(B.env.b_lang==="zh"&&b(c.target).hasClass("loc_copy_hp_mealplan_policy")){B.track.stage("YdAFBBUbFGZdLHIXLCTae",1)
}})
})
}(window.booking,window.jQuery));
(function(h,e,d,c,g){var f="_goalTracker_hpSoldOutRoomsView",b="hp:sold_out_rooms_viewed",a=h.events;
e(c).ready(function(){var j=e("."+f),k=e(d);
function i(){var m=k.scrollTop(),l=m+k.height(),n=false;
j.each(function(q,o){var r,p;
o=e(o);
r=o.offset().top;
p=r+o.height();
if((p<=l)&&(r>=m)){n=true;
return false
}});
if(n){a.trigger(b);
k.unbind("scroll resize",i)
}}if(j.length){k.bind("scroll resize",i);
i()
}})
})(window.booking,window.jQuery,window,document);
(function(){var a={"BLOCKDISPLAY2.OPEN":"hp_location_tab_opened","BLOCKDISPLAY4.OPEN":"review_list","rt-lightbox-open":"hp_rt_roomtype_lightbox_opened","hp:my_viewed_hotel_click":"hp_my_viewed_hotel_click","hp:clicked_save_to_list_button":"hp_clicked_save_to_list_button","hp:clicked_save_to_list_icon":"hp_clicked_save_to_list_icon","hp:conditions_viewed":"hp_rt_conditions_viewed","hp:sold_out_rooms_viewed":"hp_sold_out_rooms_viewed","hp:featured_review_arrows_clicked":"hp_featured_review_arrows_clicked","hp:prev_next_hotel_clicked":"hp_prev_next_hotel_clicked","hp:gallery_arrows_clicked":"hp_gallery_arrows_clicked","hp:gallery_thumbs_used":"hp_gallery_thumbs_used","hp:gallery_photos_all_viewed":"hp_gallery_photos_all_viewed","hp:room_select":"hp_room_select"},c=B.events,b;
for(b in a){if(a.hasOwnProperty(b)){c.one(b,(function(d){return function(){B.track.goal(d)
}
})(a[b]))
}}})();
B.ensureNamespaceExists("hotel");
B.hotel.hashedTabs=(function(v,r,x,k){var u=k("body"),a=v.events,C=v.env,j=function(){var I=C.b_browser_version+"";
return C.b_browser==="msie"&&(I==="7"||I==="8")
},d=r.location,y=u.find("[data-tab]"),n=j()?"[data-tab-link='']":"[data-tab-link]",H=u.find(n),p=[],o={};
var z=function(){var I=m();
e();
G();
H.each(function(){k(this).data("default-html",k(this).html()).data("default-tab",k(this).attr("rel"))
});
y.not(":first").hide();
if(I){s(I);
if(d.hash.slice(1)!==""){k(r).hashchange()
}}else{k(r).hashchange()
}};
var s=function(K){var J,I;
if(h(K)){I=parseInt(K,10);
K=p[I]
}else{I=k.inArray(K,p)
}J=y.filter("[data-tab='"+K+"']");
if(J.is(":visible")){return false
}if(J.length){y.hide();
J.show();
f(K);
E(K,I);
if((K=="location")||(K=="reviews")){k(".similar_alternative_hotels").hide()
}else{k(".similar_alternative_hotels").show()
}a.trigger("tab-opened",{tab:K});
a.trigger(K+"-tab-opened",{tab:K});
k(r).resize();
if(I>-1){a.trigger("BLOCKDISPLAY"+I+".OPEN")
}return true
}};
var l=function(){return y.filter(":visible")
};
var c=function(M){var O=k(M.currentTarget),K=O.attr("rel"),J=O.attr("href")?O.attr("href").slice(1):"",L=O.attr("data-scroll"),I=O.attr("data-scroll-offset"),N;
M.preventDefault();
if(J!==""&&q(J)){s(K);
w(J,{offset:I});
return
}D(K);
if(L&&(N=k(L)).length){k("html, body").animate({scrollTop:(N.offset().top)},500,"easeOutCubic")
}};
var F=function(){var K=t(),L=d.hash.slice(1),I,J;
if(K){s(K);
return
}I=q(L);
if(L!==""&&I){J=I.closest("[data-tab]");
if(J.length){if(!s(J.data("tab"))){return true
}g(L);
return
}}else{if(L===""){s("main")
}}};
var b=function(J,I){I=I||J.tab;
D(I)
};
var e=function(){u.delegate(n,"click",c);
k(r).hashchange(F);
a.on("open-tab",b)
};
var D=function(I){d.hash=h(I)?"hash-blockdisplay"+I:"tab-"+I
};
var f=function(I){H.each(function(){i(k(this),I)
})
};
var i=function(J,I){if(J.data("default-tab")===I){if(J.data("return-tab")){J.attr("rel",J.data("return-tab"))
}if(J.data("return-html")){J.html(J.data("return-html"))
}if(J.is(".hp_nav_tab")){return J.addClass("selected")
}return J.parent().addClass("selected")
}if(J.is(".hp_nav_tab")){return J.removeClass("selected")
}J.attr("rel",J.data("default-tab")).parent().removeClass("selected");
if(J.data("return-html")){J.html(J.data("default-html"))
}};
var t=function(){var I=d.hash.match(/tab-(.+)/),J=d.hash.match(/hash-blockdisplay(\d)/);
if(I){return I[I.length-1]
}if(J){return J[J.length-1]
}return false
};
var G=function(){var I;
for(var J=0;
J<y.length;
J++){I=parseInt(y[J].id.match(/\d/)[0],10);
p[I]=k(y[J]).data("tab")
}return p
};
var m=function(){var J=/tab=([^&;]*)/g,I=d.search,K=I.match(J);
if(K){return K[K.length-1].split("=")[1]
}return false
};
var h=function(I){return(/^\d+$/).test(I+"")
};
var E=function(J,I){u.removeClass((u[0].className.match(/blockdisplay\d-opened/)||[""])[0]).removeClass((u[0].className.match(/tab-.+-opened/)||[""])[0]).addClass("tab-"+J+"-opened");
if(I&&I>-1){u.addClass("blockdisplay"+I+"-opened")
}};
var g=function(K,N,J){var M=q(K),I=N||(function(){}),L=0;
if(!M){return false
}if(y.filter(M).length){return false
}J=J||{};
k("html, body").animate({scrollTop:(M.offset().top-L+(-J.offset||0))},500,"easeOutCubic",I)
};
var w=function(J,I){g(J,function(){if(v.track.getVariant("bHVNYZOfFNUdJYDFLLT")!==1){d.hash=J
}},I)
};
var q=function(I){I=encodeURI(I);
var K=o[I];
if(I===""){return false
}if(K&&K.length){return K
}try{K=k("#"+I);
K=K.length?K:k("a[name='"+I+"']")
}catch(J){return false
}if(K.not("[data-tab]").length){o[I]=K;
return K
}return false
};
var A=function(I){var J=k("#current_currency").find(".currency_list").find("a"),K=k("#current_language").find(".language_flags").find("a");
J.add(K).each(function(){k(this).attr("href",k(this).attr("href").split("#")[0]+"#tab-"+I)
})
};
return{init:z,getVisibleTab:l,showTab:s}
})(B,window,document,jQuery);
booking[sNSStartup].bb_hp_business_score=(function(d,f){function e(){if(f.env.hotelAction.has_business_reviews){d(".js-big_review_score_detailed").bind("click",a);
d(".js-score_from_business_travellers").bind("click",b);
c()
}}function c(){if(window.location.hash.indexOf("tab-reviews-business_traveller")>-1){d(".js-score_from_business_travellers").trigger("click")
}}function a(g){if(d("#reviewer_type_filter option:selected").data("customer-type")!="total"){d('#reviewer_type_filter option[data-customer-type="total"]').attr("selected",1).trigger("change")
}}function b(g){if(d("#reviewer_type_filter option:selected").data("customer-type")!="business_traveller"){d('#reviewer_type_filter option[data-customer-type="business_traveller"]').attr("selected",1).trigger("change")
}}return{priority:1,init:e}
})(jQuery,booking);
(function(g,f){var e=0;
var c=false;
var b=function(){var k=f(".seo_reviews_block .review_list");
var j=k.find(".review_item");
var n=parseInt(j.first().css("margin-top"),10);
var h=parseInt(j.first().css("margin-bottom"),10);
var m=parseInt(k.css("padding-top"),10);
var i=parseInt(k.css("padding-bottom"),10);
var l=(n+h)-(m+i);
j.each(function(p,q){var o=f(q);
if(o.height()>e){e=o.height()
}});
if(c){k.css({height:j.height()+l,overflow:"hidden"});
if(e){f(".reviews_block-dynamic_height").css({"min-height":Math.min(e+l,350)})
}}else{if(e>0){k.css({height:e+l+"px",overflow:"hidden"});
j.css({height:e+"px"})
}}};
var d=function(){var k=f(".seo_reviews_block .review_list");
var i=k.find(".review_item").first();
var h,j;
if(c){h=i.next(".review_item");
j=h.css("height","").height();
if(j){k.animate({height:j+39},"slow","swing")
}}i.animate({height:0},"slow","swing",function(){k.append(i.css({height:e+"px"}))
})
};
var a=function(){var i=f(".seo_reviews_block .review_list");
var h=i.find(".review_item");
c=i.hasClass("review_list-dynamic_height");
b();
if(h.length>1){window.setInterval(d,20000)
}g.events.on("tab-opened",function(j){b()
});
f("div.hotel_quick_links_review a").bind("click",function(j){f("html,body").animate({scrollTop:0})
})
};
g[sNSStartup].hotelSEOReviews={priority:9,initialize:a}
}(window.booking,window.jQuery));
booking.ensureNamespaceExists("hotel");
booking.hotel.HP_AA_scroll={setupgoals:function(c,b){var e=b,g=$(window),d=booking.track,a=booking.tools,f=0;
g.bind("scroll.hp_aa_scroll_tracker_"+c,a.functions.throttle(function(){if(f!=e.length){for(var j=0,h=e.length;
j<h;
j++){if(e[j]&&$(e[j]).length&&a.dom.isBlockVisibleInViewport($(e[j]))){d.custom_goal(c,j+1);
f++;
delete e[j]
}}}else{g.unbind("scroll.hp_aa_scroll_tracker_"+c)
}},300))
}};
$(function(){function f(k){var m=window.location.href;
var l=window.location.hash;
var j=B.env.b_query_params_delimiter;
var o=[];
var b={};
var n="";
if(l){m=m.replace(l,"")
}else{if(m.indexOf("#")!=-1){m=m.replace("#","")
}}o=m.split("?");
if(o[1].length>0){b=B.tools.url.parse(o[1]);
if(!b.has_redirected_to_highlighted_hotel&&!b.order){b.highlighted_hotels=k;
b.has_redirected_to_highlighted_hotel=1;
o[1]=B.tools.url.stringify(b,j);
n=o.join("?")+l;
window.location.href=n
}}}if(!c){var c=B
}if(!B.env.b_run_hp_back_is_back){return
}var i=$(window),d=window.history&&window.history.pushState;
if(B.env.b_action==="searchresults"){i.bind("popstate",function(b){if(b.originalEvent.state&&b.originalEvent.state.action==="hotel"){window.location.reload()
}})
}else{if(B.env.b_action==="hotel"){var h=$(".js-back_to_searchresults_for_browser");
if(!h.length){return
}function e(){setTimeout(a,300)
}function a(){if(d){window.history.back();
if(B.et.track("OLedMQMLSWXYDNPbZZKXe")){f(B.env.b_hotel_id)
}else{window.location.reload()
}}else{window.location.href=h.attr("href")
}}if(!d){if(window.location.hash===""&&/booking\.com.*searchresults/.test(document.referrer)){window.location.hash="hotel-origin";
setTimeout(function(){window.location.hash="hotel"
},1000)
}i.bind("hashchange",function(b){if(window.location.hash.match("hotel-origin")&&b.originalEvent.oldURL.match(/#hotel$/)){e()
}})
}else{if(window.history.state===null&&/booking\.com.*searchresults/.test(document.referrer)){if(window.location.hash){var g=window.location.hash
}window.history.replaceState({action:"hotel-origin"},"Search Results",h.attr("href")+"-back");
window.history.pushState({action:"hotel"},"Hotel Page",booking.env.b_this_url);
if(g){window.location.hash=g
}}i.bind("popstate",function(b){if(b.originalEvent.state&&b.originalEvent.state.action==="hotel-origin"){e()
}})
}}}});
booking[sNSStartup].hp_cheapest_room_reinforcement_tooltip={init:function(){var f=$("div.run_hp_crrt"),c=f.find("select"),h=$("div.hp_cheap_room_container"),e=$.browser.msie&&$.browser.version<9,b=5*1000,d=booking.env.run_hp_cheapest_room_reinforcement_double_occupancy,g=function(){if(this.value==1&&d){h.css("display","block").animate({opacity:1},600);
a()
}if(!d){if(this.value){if(e){h.show()
}else{h.css("display","block").animate({opacity:1},600)
}a()
}}B.et.stage("ZOOTCXSWAbDZAHRSdJFKUFYKe",1)
},a=function(){var i=setTimeout(function(){h.animate({opacity:0},600,function(){h.remove()
})
},b)
};
if(c.length&&c.val()==0){c.bind("change.crrt",g)
}}};
(function(b){var a="BUTERLYeENKe";
b[sNSExperiments][a]={addBinds:function(){$(".js-avail-date-submit").click(function(){if(!$(this).attr("disabled")&&b.search.dates().validate()){$(this).addClass("avail-date-submit--loader")
}})
},addTracking:function(){$(".js-avail-date-submit").click(function(){if(!$(this).attr("disabled")){b.track.exp(a)
}})
},init:function(){this.addTracking();
this.addBinds()
},initElse:function(){this.addTracking()
}}
})(booking);
booking.jstmpl("price_watch_example_email",(function(){var b=['\n    \u003cdiv class="price-watch-example"\u003e\n        \u003cdiv class="price-watch-example__text"\u003e','\u003c/div\u003e\n        \u003cimg class="price-watch-example__image" src="','"\u003e\n    \u003c/div\u003e\n'],a=["annotrans_price_watch_example_1"],e,d,c;
return function(f){var g="",h=this.fn;
g+=[b[0],h.MB(a[0]),b[1],h.STATIC_HOSTNAME("/static/img/pricewatch/price-watch-sample.jpg",0,0,0),b[2]].join("");
return g
}
})());
booking.jstmpl("price_watch_banner",(function(){var b=["\n    ",'\u003cdiv class="price-watch-banner"\u003e\n\t\u003cspan class="pw-icon"\u003e\u003c/span\u003e\n\t\u003cdiv class="pw-inner"\u003e\n\t',"\n\t\t",'\n\t\t\t\u003cbutton class="b-button b-button_primary pw-stop-button" type="button"\u003e',"\u003c/button\u003e\n\t\t",'\n\t\t\u003cstrong class="pw-title"\u003e','\u003c/strong\u003e\n\t\t\u003cp class="pw-text"\u003e',"\u003c/p\u003e\n\t",'\n\t\t\u003cbutton\n\t\t\tclass="',"b-button b-button_primary pw-start-button ","pw-banner-start-button",'"\n\t\t\ttype="button"\n\t\t\tdata-component="track"\n\t\t\tdata-track="click"\n\t\t\tdata-hash="','"\n\t\t\u003e','\u003c/button\u003e\n\t\t\u003cstrong class="pw-title"\u003e',"\u003c/a\u003e",'\u003ca class="pw-link" href=#\u003e',"\n\t\u003c/div\u003e\n\u003c/div\u003e\n\n","\n"],a=["deals_price_watch9","b_pw_banner_hide_unsubscribe_cta","deals_price_watch_1","deals_price_watch_2","watching","b_include_dropdown","deals_price_watch6","deals_price_watch1","deals_price_watch7"],e,d,c;
return function(f){var h="",i=this.fn;
function g(j){j+=b[1];
if(i.MD(a[4])){j+=b[2];
if(i.MK(i.MC(a[1]))){j+=[b[3],i.MB(a[0]),b[4]].join("")
}j+=[b[5],i.MB(a[2]),b[6],i.MB(a[3]),b[7]].join("")
}else{j+=b[8];
j+=b[9];
if(i.MD(a[5])){j+=b[10]
}j+=[b[11],"AaSDAddKLSCKKbUZdcGPXPRQMSXe",b[12],i.MB(a[6]),b[13],i.MB(a[7]),b[6],(f.unshift({end_link:b[14],start_link:b[15]}),(c=i.MB(a[8])),f.shift(),c),b[7]].join("")
}j+=b[16];
return j
}h+=b[0];
h=g(h);
h+=b[17];
return h
}
})());
booking.jstmpl("cheapest_date_ranges",(function(){var b=["\n    ","\n","\u003cb\u003e","\u003c/b\u003e","",'\n    \u003cdiv class="b-slider best-price-slider" data-component="slider" data-infinite-loop="false"\u003e\n        \u003cdiv class="minrates-slider-controls clearfix"\u003e\n            \u003cdiv class="b-slider-prev-slide"\u003e\u003c/div\u003e\n            \u003cdiv class="b-slider-next-slide"\u003e\u003c/div\u003e\n        \u003c/div\u003e\n        \u003cdiv class="minrates-list b-slider-inner clearfix"\u003e\n            \u003cdiv class="minrates-item b-slider-item"\u003e\n            ',"\n                ",'\n                    \u003c/div\u003e\n                    \u003cdiv class="minrates-item b-slider-item"\u003e\n                ','\n    \u003cdiv class="minrate-month"\u003e\n        ',"\n            ",'\u003ca href="','"\u003e',"\u003c/a\u003e","\n            \u003ch5\u003e","\u003c/h5\u003e\n        ",'\n        \u003cp class="minrates-content"\u003e\n            ',"\n\n                ",'\n                    \u003ca class="best_prices_prioritize_dates_container" href="','" target="_blank"\u003e \n                        \u003cspan class="minrates-dates-range"\u003e'," - ",'\u003c/span\u003e\n                        \u003cspan class="minrates-nights"\u003e\n                            ',"v_hp_upcoming_prices_per_night_price",'\n                        \u003c/span\u003e\n                        \u003cspan class="minrates-price jq_tooltip"\n                              title="',"v_hp_upcoming_prices_total_price_with_price",'"\u003e\n                            ',"\n                            ",'\n                                \u003cspan class="best-price-tag"\u003e',"\u003c/span\u003e\n                            ","\n                        \u003c/span\u003e\n                    \u003c/a\u003e\n                ",'\n                    \u003ca href="','" target="_blank"\u003e\n                        \u003cspan class="minrates-price jq_tooltip"\n                              title="','\n                        \u003c/span\u003e\n                        \u003cspan class="minrates-nights"\u003e\n                            ','\n                        \u003c/span\u003e\n                        \u003cspan class="minrates-dates-range"\u003e',"\u003c/span\u003e\n                    \u003c/a\u003e\n                ",'\n                \u003cspan class="no-availability"\u003e\n                    \u003cspan class="minrates-nights"\u003e',"v_for_num_nights","1",'\u003c/span\u003e\n                    \u003cspan class="minrates-dates-range"\u003e',"\u003c/span\u003e\n                \u003c/span\u003e\n            ",' \n        \u003c/p\u003e\n\n        \u003cp class="minrates-content"\u003e\n            ',"\n                    ",'\n                        \u003ca class="best_prices_prioritize_dates_container" href="','" target="_blank"\u003e                    \n                            \u003cspan class="minrates-dates-range"\u003e','\u003c/span\u003e\n                            \u003cspan class="minrates-nights"\u003e\n                                ','\n                            \u003c/span\u003e                \n                            \u003cspan class="minrates-price jq_tooltip"\n                                  title="','"\u003e\n                                ',"\n                                ",'\n                                    \u003cspan class="best-price-tag"\u003e',"\u003c/span\u003e\n                                ","\n                            \u003c/span\u003e\n                        \u003c/a\u003e\n                    ",'\n                        \u003ca href="','" target="_blank"\u003e\n                            \u003cspan class="minrates-price jq_tooltip"\n                                  title="','\n                            \u003c/span\u003e                    \n                            \u003cspan class="minrates-nights"\u003e\n                                ','\n                            \u003c/span\u003e\n                            \u003cspan class="minrates-dates-range"\u003e',"\u003c/span\u003e\n                        \u003c/a\u003e\n                    ","2",'\n        \u003c/p\u003e\n\n        \u003cp class="minrates-content"\u003e\n            ','                \n                        \u003ca class="best_prices_prioritize_dates_container" href="','" target="_blank"\u003e\n                            \u003cspan class="minrates-dates-range"\u003e','\n                            \u003c/span\u003e\n                            \u003cspan class="minrates-price jq_tooltip"\n                                  title="',"\n                            \u003c/span\u003e\n                        \u003c/a\u003e     \n                    ",'\n                            \u003c/span\u003e\n                            \u003cspan class="minrates-nights"\u003e\n                                ',"7","14","\n        \u003c/p\u003e\n    \u003c/div\u003e\n","\n            \u003c/div\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n",'\n    \u003cul class="minrates-list"\u003e\n        ','\n            \u003cli class="minrates-item"\u003e\n                ',"\n            \u003c/li\u003e\n        ","\n    \u003c/ul\u003e\n"],a=["start_bold","end_bold","monthly_minrates","start_link","hotel_link","end_link","villas_sr_lowest_price_header","month_name","month_name_in","property_name","minrates","length_of_stay","v_hp_upcoming_prices_label_best_value","v_hp_upcoming_prices_label_not_available","v_for_num_nights"],e,d,c;
return function(g){var j="",k=this.fn;
function h(l){return l
}function i(l){l+=b[8];
if(k.MD(a[4])){l+=b[9];
k.MN(a[3],[b[10],k.MB(a[4]),b[11]].join(""));
l+=b[9];
k.MN(a[5],b[12]);
l+=[b[13],(g.unshift({end_link:k.MB(a[5]),month_name:k.MB(a[7]),month_name_in:k.MB(a[8]),property_name:k.MB(a[9]),start_link:k.MB(a[3])}),(c=k.MB(a[6])),g.shift(),c),b[14]].join("")
}else{l+=[b[13],k.MB(a[7]),b[14]].join("")
}l+=b[15];
if(k.MJ(k.MG(((k.MC(a[10])||{})["1_night"]||{})["length_of_stay"]))){l+=b[6];
k.MN("length_of_stay",k.MG(((k.MC(a[10])||{})["1_night"]||{})["length_of_stay"]));
l+=b[16];
if((k.MK(k.MB(a[4]))&&k.MJ(k.track_experiment("TNVIdEbUTPdbYQSQeOERSdONcVSHT")))){l+=[b[17],k.MG(((k.MC(a[10])||{})["1_night"]||{})["url"]),b[18],k.MG(((k.MC(a[10])||{})["1_night"]||{})["checkin_localized"]),b[19],k.MG(((k.MC(a[10])||{})["1_night"]||{})["checkout_localized"]),b[20],(g.unshift({total_num_nights:k.MB(a[11])}),(c=k.VP(b[21],"length_of_stay")),g.shift(),c),b[22],(g.unshift({price_with_currency:k.MG(((k.MC(a[10])||{})["1_night"]||{})["total_price_localized"]),total_num_nights:k.MB(a[11])}),(c=k.VP(b[23],"length_of_stay")),g.shift(),c),b[24],k.MG(((k.MC(a[10])||{})["1_night"]||{})["nightly_price_localized"]),b[25]].join("");
if(k.MJ(k.MG(((k.MC(a[10])||{})["1_night"]||{})["is_cheapest_length_of_stay"]))){l+=[b[26],k.MB(a[12]),b[27]].join("")
}l+=b[28]
}else{l+=[b[29],k.MG(((k.MC(a[10])||{})["1_night"]||{})["url"]),b[30],(g.unshift({price_with_currency:k.MG(((k.MC(a[10])||{})["1_night"]||{})["total_price_localized"]),total_num_nights:k.MB(a[11])}),(c=k.VP(b[23],"length_of_stay")),g.shift(),c),b[24],k.MG(((k.MC(a[10])||{})["1_night"]||{})["nightly_price_localized"]),b[25]].join("");
if(k.MJ(k.MG(((k.MC(a[10])||{})["1_night"]||{})["is_cheapest_length_of_stay"]))){l+=[b[26],k.MB(a[12]),b[27]].join("")
}l+=[b[31],(g.unshift({total_num_nights:k.MB(a[11])}),(c=k.VP(b[21],"length_of_stay")),g.shift(),c),b[32],k.MG(((k.MC(a[10])||{})["1_night"]||{})["checkin_localized"]),b[19],k.MG(((k.MC(a[10])||{})["1_night"]||{})["checkout_localized"]),b[33]].join("")
}l+=b[9]
}else{l+=[b[34],(g.unshift({num_nights:b[36]}),(c=k.VP(b[35],"1")),g.shift(),c),b[37],k.MB(a[13]),b[38]].join("")
}l+=b[39];
if(k.MJ(k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["length_of_stay"]))){l+=b[6];
k.MN("length_of_stay",k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["length_of_stay"]));
l+=b[40];
if((k.MK(k.MB(a[4]))&&k.MJ(k.track_experiment("TNVIdEbUTPdbYQSQeOERSdONcVSHT")))){l+=[b[41],k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["url"]),b[42],k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["checkin_localized"]),b[19],k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["checkout_localized"]),b[43],(g.unshift({total_num_nights:k.MB(a[11])}),(c=k.VP(b[21],"length_of_stay")),g.shift(),c),b[44],(g.unshift({price_with_currency:k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["total_price_localized"]),total_num_nights:k.MB(a[11])}),(c=k.VP(b[23],"length_of_stay")),g.shift(),c),b[45],k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["nightly_price_localized"]),b[46]].join("");
if(k.MJ(k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["is_cheapest_length_of_stay"]))){l+=[b[47],k.MB(a[12]),b[48]].join("")
}l+=b[49]
}else{l+=[b[50],k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["url"]),b[51],(g.unshift({price_with_currency:k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["total_price_localized"]),total_num_nights:k.MB(a[11])}),(c=k.VP(b[23],"length_of_stay")),g.shift(),c),b[45],k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["nightly_price_localized"]),b[46]].join("");
if(k.MJ(k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["is_cheapest_length_of_stay"]))){l+=[b[47],k.MB(a[12]),b[48]].join("")
}l+=[b[52],(g.unshift({total_num_nights:k.MB(a[11])}),(c=k.VP(b[21],"length_of_stay")),g.shift(),c),b[53],k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["checkin_localized"]),b[19],k.MG(((k.MC(a[10])||{})["2_or_3_nights"]||{})["checkout_localized"]),b[54]].join("")
}l+=b[9]
}else{l+=[b[34],(g.unshift({num_nights:b[55]}),(c=k.MB(a[14])),g.shift(),c),b[37],k.MB(a[13]),b[38]].join("")
}l+=b[56];
if(k.MJ(k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["length_of_stay"]))){l+=b[6];
k.MN("length_of_stay",k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["length_of_stay"]));
l+=b[40];
if((k.MK(k.MB(a[4]))&&k.MJ(k.track_experiment("TNVIdEbUTPdbYQSQeOERSdONcVSHT")))){l+=[b[57],k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["url"]),b[58],k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["checkin_localized"]),b[19],k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["checkout_localized"]),b[43],(g.unshift({total_num_nights:k.MB(a[11])}),(c=k.VP(b[21],"length_of_stay")),g.shift(),c),b[59],(g.unshift({price_with_currency:k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["total_price_localized"]),total_num_nights:k.MB(a[11])}),(c=k.VP(b[23],"length_of_stay")),g.shift(),c),b[45],k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["nightly_price_localized"]),b[46]].join("");
if(k.MJ(k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["is_cheapest_length_of_stay"]))){l+=[b[47],k.MB(a[12]),b[48]].join("")
}l+=b[60]
}else{l+=[b[50],k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["url"]),b[51],(g.unshift({price_with_currency:k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["total_price_localized"]),total_num_nights:k.MB(a[11])}),(c=k.VP(b[23],"length_of_stay")),g.shift(),c),b[45],k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["nightly_price_localized"]),b[46]].join("");
if(k.MJ(k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["is_cheapest_length_of_stay"]))){l+=[b[47],k.MB(a[12]),b[48]].join("")
}l+=[b[61],(g.unshift({total_num_nights:k.MB(a[11])}),(c=k.VP(b[21],"length_of_stay")),g.shift(),c),b[53],k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["checkin_localized"]),b[19],k.MG(((k.MC(a[10])||{})["about_1_week"]||{})["checkout_localized"]),b[54]].join("")
}l+=b[9]
}else{l+=[b[34],(g.unshift({num_nights:b[62]}),(c=k.MB(a[14])),g.shift(),c),b[37],k.MB(a[13]),b[38]].join("")
}l+=b[56];
if(k.MJ(k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["length_of_stay"]))){l+=b[6];
k.MN("length_of_stay",k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["length_of_stay"]));
l+=b[40];
if((k.MK(k.MB(a[4]))&&k.MJ(k.track_experiment("TNVIdEbUTPdbYQSQeOERSdONcVSHT")))){l+=[b[57],k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["url"]),b[58],k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["checkin_localized"]),b[19],k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["checkout_localized"]),b[43],(g.unshift({total_num_nights:k.MB(a[11])}),(c=k.VP(b[21],"length_of_stay")),g.shift(),c),b[59],(g.unshift({price_with_currency:k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["total_price_localized"]),total_num_nights:k.MB(a[11])}),(c=k.VP(b[23],"length_of_stay")),g.shift(),c),b[45],k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["nightly_price_localized"]),b[46]].join("");
if(k.MJ(k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["is_cheapest_length_of_stay"]))){l+=[b[47],k.MB(a[12]),b[48]].join("")
}l+=b[49]
}else{l+=[b[50],k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["url"]),b[51],(g.unshift({price_with_currency:k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["total_price_localized"]),total_num_nights:k.MB(a[11])}),(c=k.VP(b[23],"length_of_stay")),g.shift(),c),b[45],k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["nightly_price_localized"]),b[46]].join("");
if(k.MJ(k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["is_cheapest_length_of_stay"]))){l+=[b[47],k.MB(a[12]),b[48]].join("")
}l+=[b[61],(g.unshift({total_num_nights:k.MB(a[11])}),(c=k.VP(b[21],"length_of_stay")),g.shift(),c),b[53],k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["checkin_localized"]),b[19],k.MG(((k.MC(a[10])||{})["about_2_weeks"]||{})["checkout_localized"]),b[54]].join("")
}l+=b[9]
}else{l+=[b[34],(g.unshift({num_nights:b[63]}),(c=k.MB(a[14])),g.shift(),c),b[37],k.MB(a[13]),b[38]].join("")
}l+=b[64];
return l
}function f(l){l+=b[1];
k.MN(a[0],b[2]);
l+=b[1];
k.MN(a[1],b[3]);
l+=b[4];
l=h(l);
if(k.MJ(k.track_experiment("TNVIdEfZZGeAdNAcfDZET"))){l+=b[5];
var o=(k.MC(a[2])||[]);
g.unshift(null);
for(var m=1,n=o.length;
m<=n;
m++){g[0]=o[m-1];
l+=b[6];
if((k.MJ(m==4))){l+=b[7]
}l+=b[6];
l=i(l);
l+=b[9]
}g.shift();
l+=b[65]
}else{l+=b[66];
var o=(k.MC(a[2])||[]);
g.unshift(null);
for(var m=1,n=o.length;
m<=n;
m++){g[0]=o[m-1];
l+=b[67];
l=i(l);
l+=b[68]
}g.shift();
l+=b[69]
}return l
}j+=b[0];
j=f(j);
j+=b[1];
return j
}
})());
(function(b){var a="BUAeCLAOBeWe";
b[sNSExperiments][a]={init:function(){b.eventEmitter.bind("SEARCH:date_changed",function(){$("input.js-avail-date-submit").removeAttr("disabled").removeClass("b-button_disabled")
})
}}
})(booking);
booking[sNSExperiments]["BUMEfTLeJGCCKCcbKHDHT"]=(function(){function d(){b()
}var c="BUMEfTLeJGCCKCcbKHDHT";
function b(){$(window).bind("load",function(){var e;
if(booking.track.getVariant(c)===1){e=10000
}else{if(booking.track.getVariant(c)===2){e=30000
}else{if(booking.track.getVariant(c)===3){e=60000
}}}setTimeout(a,e)
})
}function a(){$("link[rel=_prefetch][data-hash="+c+"]").each(function(e,f){$(f).attr("rel","prefetch")
});
booking.track.custom_goal(c,1)
}return{init:d}
})();
(function(){var b=window.jQuery;
var e=window.booking;
function c(){d()
}function d(){b(".js-ph__cta").bind("click",a)
}function a(f){var i=e.env.b_has_valid_dates;
var g=i?"#available_rooms":"a[name=availability]";
var h=500;
b(document).scrollTo(g,h);
f.preventDefault()
}e.ensureNamespaceExists(sNSStartup);
e[sNSStartup].hp_ph_cta={init:c}
})();
(function(){var d=window.jQuery;
var g=window.booking;
var e="/hotel_attractions";
function f(){c(e,{hotel_id:g.env.b_hotel_id,lang:g.env.b_lang_for_url,stype:booking.env.b_site_type_id,aid:g.env.b_aid,label:g.env.b_label})
}function c(h,i){d.ajax({url:h,cache:true,data:i,success:a})
}function a(k){if(!k.region_attractions){return
}var i=b(k);
var j=g.jstmpl("hp_region_attraction_block").render(i);
var h=d(".hp_region_attractions");
h.html(j).css("display","block").loadComponents();
booking[sNSStartup].bookingSticker.update()
}function b(j){var i=j.region_attractions.items;
for(var h=0;
h<i.length;
h++){i[h].photo=g.tools.jsStaticUrl(i[h].photo)
}j.region_attractions.items=i;
return j
}g.ensureNamespaceExists(sNSStartup);
g[sNSStartup].load_region_attraction={init:f}
})();
(function(c,a){var b=function(){var l=0,k,m=c.google,f=a(".reviews-carousel"),e=f.find(".reviews-carousel-scroll"),d=f.find(".althotelsDiv2"),i=a(".large_image_slider"),j=d.length-1;
function g(){k=[];
d.each(function(){k.push(a(this).position().left)
});
g=Function()
}var h=function(n){var p,o=l;
if(n&&("currentTarget" in n)){if(a(n.currentTarget).hasClass("reviews-carousel-control-left")){l=(l===0)?j:l-1
}else{l=(l===j)?0:l+1
}}else{if(n&&!n[0]){l=(l===0)?j:l-1
}else{l=(l===j)?0:l+1
}}d.eq(o).css({opacity:0});
d.eq(l).css({opacity:1});
g();
p=(c.env.rtl)?{"margin-right":(k[l]||0)+"px"}:{"margin-left":(-1*k[l]||0)+"px"};
e.css(p)
};
f.bind("mouseenter",function(n){c.events.trigger(c.hotel.Events.ReviewFloater.MOUSE_ENTER,[n])
}).bind("mouseleave",function(n){c.events.trigger(c.hotel.Events.ReviewFloater.MOUSE_LEAVE,[n])
});
f.delegate(".reviews-carousel-control","mouseover",function(n){n.stopPropagation();
i.hide();
a(n.currentTarget).addClass("reviews-carousel-hover")
}).delegate(".reviews-carousel-control","mouseleave",function(n){a(n.currentTarget).removeClass("reviews-carousel-hover")
}).delegate(".reviews-carousel-control","click",h);
c.events.on(c.hotel.Events.ReviewFloater.FORCE_SLIDE,h)
};
c[sNSStartup].reviewsCarousel={priority:9,init:b}
}(window.booking,window.jQuery));
(function(g,o){var b,x=o.env,e,E,w,q="date_with_year",m=false;
var n=(function(){var F=false;
return function(){if(F){return false
}var G="YdVNYAeMGUfPPPVIEBSCUZZcHe";
o.track.exp(G);
if(o.track.getVariant(G)){q="date_with_short_weekday_with_year"
}F=true
}
})();
var v=function(F){b=F;
if(b){u(b)
}C();
A()
};
function C(){var G=false,F=g("#searchboxInc"),H=g(".js-hp-availability-section");
E=H.find(".lp_bold_date_picker_checkin");
e=H.find(".lp_bold_date_picker_checkout");
if(H.find(".lp_bold_date_picker_group_container").length){D(H,F)
}o.eventEmitter.bind(o.Search.Events.DATE_CHANGED,function(){g(".lp_bold_date_picker_btn").removeClass("b-button_disabled").removeAttr("disabled")
});
H.find(".lp_bold_date_picker_btn").click(function(){var J=r();
if(g(".lp_bold_date_picker_btn").hasClass("b-button_disabled")){G=true;
return
}else{if(J.checkin&&J.checkin.type=="valid"&&J.checkout&&J.checkout.type=="valid"){if(J.checkout.dateObject_.getTime()-J.checkin.dateObject_.getTime()>1000*60*60*24*30){G=true;
g(".lp_bold_date_picker_error").fadeIn(300);
return
}}else{if(!(J.checkin&&J.checkin.type=="valid")){G=true;
g(".lp_bold_date_picker_error--checkin").fadeIn(300);
return
}else{if(!(J.checkout&&J.checkout.type=="valid")){G=true;
g(".lp_bold_date_picker_error--checkout").fadeIn(300);
return
}}}}if(!G){g(".lp_bold_date_picker_error").hide()
}});
H.find(".b-booker-type").click(function(K){var J=g(this).find("input")[0].className;
F.find("."+J).click()
});
var I=r();
if(I.checkin){l("checkin",I.checkin.date,I.checkin.month+1,I.checkin.year)
}if(I.checkout){l("checkout",I.checkout.date,I.checkout.month+1,I.checkout.year)
}}function d(F,G){if(o.env.b_year_months[F+"-"+(G+1)]){return o.env.b_year_months[F+"-"+(G+1)].name
}}function A(){var H=x.sunday_first,K=x.b_simple_weekdays,F=x.b_short_months;
if(H){K.unshift(K.pop())
}o.eventEmitter.bind("SEARCH:date_changed",z);
function J(N,M){if(!N){return
}var L=new Date(N.year,N.month,N.date+M);
return{year:L.getFullYear(),month:L.getMonth(),date:L.getDate()}
}var I={type:"checkin",defaultDate:o.search.dates("checkin"),dayNames:K,monthNames:F,sundayFirst:H,title:x.transl_checkin_title,monthTitle:d,direction:x.rtl?"rtl":"ltr",arrow:true,onDateSelected:function(P,L){var R={year:L.getYear(),month:L.getMonth(),date:L.getDate()};
var O=o.search.dates("checkin"),N=o.search.dates("checkout");
var Q=N,S=j();
if(P.options.type=="checkin"){o.search.dates("checkin",R);
O=o.search.dates("checkin");
if(!N||N.type=="invalid"||(O.toString()>=N.toString())){o.search.dates("checkout",J(O,1));
N=o.search.dates("checkout")
}for(var M=0;
M<S.length;
M++){if(S[M].type=="checkout"){S[M].setOptions({startDate:L});
S[M].refreshDisabledDays()
}}}else{o.search.dates("checkout",R);
N=o.search.dates("checkout")
}l(P.options.type,L.getDate(),L.getMonth()+1,L.getYear());
if(!O||N.type=="invalid"){R=new Date(L.getYear(),L.getMonth(),L.getDate()-1);
o.search.dates("checkin",R);
O=o.search.dates("checkin")
}if((N&&!O)||((N.type=="valid")&&(O.type=="invalid"))||(O.toString()>=N.toString())){o.search.dates("checkin",J(N,-1));
O=o.search.dates("checkin")
}if(O&&N&&O.type=="valid"&&N.type=="valid"){P.selectRange(o.calendar2.dayId(O.year,O.month,O.date),o.calendar2.dayId(N.year,N.month,N.date))
}if(!Q||Q.type=="invalid"){l("checkout",N.date,N.month+1,N.year)
}},onHide:function(){g(this.$element.context).removeClass("focus")
},onShow:function(M,L){g(this.$element.context).addClass("focus");
if(M.options.type!="checkout"){var N=o.search.dates("checkin");
if(N&&N.type=="valid"){M.selectDay(o.calendar2.dayId())
}}}};
o.eventEmitter.bind("CALENDAR:opened",s);
var G=g.extend({},I);
G.type="checkout";
G.title=x.transl_checkout_title;
G.defaultDate=o.search.dates("checkout");
G.startDate=p();
G.endDate=y();
E.calendar2(I);
e.calendar2(G);
z(1,{type:"checkin"});
z(1,{type:"checkout"})
}function z(K,F){var J=o.search.dates("checkin"),I=o.search.dates("checkout"),H=o.search.dates(F.type),L=j();
if(J){l("checkin",J.date,J.month+1,J.year)
}if(I){l("checkout",I.date,I.month+1,I.year)
}if(H.type==="month"){f("monthSelected",F.type,H)
}else{if(H.type==="valid"){f("dateSelected",F.type,H)
}}for(var G=0;
G<L.length;
G++){if(J&&I&&J.type==="valid"&&I.type==="valid"){L[G].trigger("rangeSelected",{type:F.type,startValue:J,endValue:I})
}}}function s(H,F){var I=j();
for(var G=0;
G<I.length;
G++){if(F.id!==I[G].id()){I[G].trigger("hide")
}}}function f(H,G,I){var J=j();
for(var F=0;
F<J.length;
F++){if(J[F].type()===G){J[F].trigger(H,{type:G,value:I})
}}}function a(){var F=new Date();
return F
}function h(){var F=o.calendar2.today();
F.setFullYear(F.getFullYear()+1);
F.setDate(0);
F.setDate(F.getDate()-1);
return F
}function p(){var F=o.calendar2.today();
F.setDate(F.getDate()+1);
return F
}function y(){var F=o.calendar2.today();
F.setFullYear(F.getFullYear()+1);
F.setDate(0);
return F
}function j(){return o.calendar2.controller.getCalendars()
}function r(){return{checkin:o.search.dates("checkin"),checkout:o.search.dates("checkout")}
}function l(G,F,J,I){var H;
var K;
if(F){K=I+"-"+J+"-"+F;
n();
K=booking.formatter.date(K,q)
}if(G=="checkin"){H=E
}else{H=e
}if(F){H.removeClass("placeholder").find("span").text(K)
}else{H.addClass("placeholder").find("span").text(H.data("default"))
}return true
}function D(I,F){var H=I.find(".lp_bold_date_picker_lightbox"),G=H.parent();
I.find(".lp_bold_date_picker_group_container").click(function(M){var L=g(this).find(".main_guests_selector"),K=g(this).find(".lp_bold_date_picker_select");
if(!L.is(":visible")){M.stopPropagation();
L.show();
K.addClass("focus");
g.each(j(),function(){this.trigger("hide")
});
g(document).one("click",function(){L.hide();
K.removeClass("focus")
})
}}).find(".lp_bold_date_picker_group_lists li").click(function(){var K=g(this).data();
if(K.b_number_rooms==0){i(H,o.search.group().value);
G.show()
}else{o.search.group({adults:K.b_number_adults,children:K.b_number_children,childrenAges:[],rooms:K.b_number_rooms});
g(this).closest(".lp_bold_date_picker_group_container").find(".lp_bold_date_picker_select_text").html(g(this).text())
}});
G.click(function(K){if(g(K.target).hasClass("lp_bold_date_picker_dimmer")){G.hide()
}});
H.find(".lp_bold_date_picker_lightbox_secondary_cta, .lp_bold_date_picker_lightbox_close_button").click(function(){G.click()
}).end().find(".lp_bold_date_picker_lightbox_cta").click(function(){var K=c(H);
o.search.group(K);
t(K);
G.click()
});
o.components.require("legacy-emitter").bind("spin-button-change",function(K){if(K.data.id=="lp_bold_date_picker_children_selector"){k(K,true)
}});
var J=o.search.group().value;
t(J);
if(J.children){I.find(".lp_bold_date_picker_lightbox_ages").each(function(K){if(typeof J.childrenAges[K]!=="undefined"){g(this).find("input").val(J.childrenAges[K])
}})
}}function t(G){var F=o.jstmpl("lp_bold_date_picker_group_message").render(G);
w.find(".lp_bold_date_picker_group_container").find(".lp_bold_date_picker_select_text").html(F)
}function i(F,G){F.find(".room_guests_selector input").val(G.rooms);
F.find(".adults_guests_selector input").val(G.adults);
F.find(".children_guests_selector input").val(G.children);
k({data:{value:G.children}})
}function k(I,H){var F={show:H?"slideDown":"show",hide:H?"slideUp":"hide"};
if(!I.data.value){w.find(".lp_bold_date_picker_lightbox_ages")[F.hide]().find(".age_guests_selector")[F.hide]()
}else{var G=w.find(".lp_bold_date_picker_lightbox_ages");
if(I.data.value==1){G.find(".singular").show().siblings(".plural").hide()
}else{G.find(".plural").show().siblings(".singular").hide()
}G.slideDown().find(".age_guests_selector:lt("+I.data.value+")").filter(":not(:visible)").val("0").end()[F.show]().end().find(".age_guests_selector:gt("+(I.data.value-1)+")")[F.hide]()
}}function c(F){return{rooms:F.find(".room_guests_selector input").val(),adults:F.find(".adults_guests_selector input").val(),children:F.find(".children_guests_selector input").val(),childrenAges:F.find(".age_guests_selector:visible input").map(function(){return parseInt(g(this).val())
}).toArray()}
}var u=function(G){var F=null;
if(booking.env.lp_bold_date_picker_track_exp!=G){return
}o.eventEmitter.bind("CALENDAR:opened",function(J,H){try{var I=H.instance.options.calendar2Type||H.instance.options.type||"checkin";
F=I;
o.track.goal(I+"_cal_opened");
g(document).click()
}catch(J){}});
o.eventEmitter.bind(o.Search.Events.DATE_CHANGED,function(){if(F){o.track.goal(F+"_date_selected")
}else{o.track.goal("checkin_date_selected");
o.track.goal("checkout_date_selected")
}})
};
booking[sNSStartup].hp_rt_new_availability_block={init:function(){m=true;
v()
}}
})(jQuery,booking);
(function(e,c){var h=e("#maxotel_rooms.conditions_summary"),i=h.find(".b_room_selectbox"),j=h.find("div.rt_conditions_summary"),g=e("#rt_conditions_summary_list"),a=h.find("ul.hp-rt__policy-list"),k=a.length?function(){var q=i.filter(function(){return e(this).val()!=0
});
if(q.length==1){var p=q.parents('tr[class^="room_loop_counter"]'),o=p.find("ul.hp-rt__policy-list");
if(o.length){g.html(o.html());
g.find(".jq_tooltip").removeClass("jq_tooltip").removeAttr("data-title title");
j.addClass("show")
}}else{g.empty();
j.removeClass("show")
}}:function(){if(i.filter(function(){return e(this).val()!=0
}).length){var o=[];
i.filter(function(){return e(this).val()!=0
}).each(function(){var q=e(this).parents('tr[class^="room_loop_counter"]'),p=q.find(".ico_policy_info > span").text();
o.push(p)
});
if(b(o)){m(d(o[0]))
}else{m()
}}else{m()
}},m=function(p){if(p){var r="",q,o=p.length;
for(q=0;
q<o;
q++){if(e.trim(p[q])!==""){r+="<li><span>"+p[q]+"</span></li>"
}}g.html(r);
j.addClass("show")
}else{g.empty();
j.removeClass("show")
}},b=function(o){if(l(o).length===1){return true
}else{return false
}},d=function(p){var o="•";
if(B.track.getVariant("BOefZZGbOFMKWe")){o=/[•놑]/
}return p.split(o).filter(function(q){return q!=""
})
},l=function(o){var r={},q=[];
for(var s=0,p=o.length;
s<p;
++s){if(r.hasOwnProperty(o[s])){continue
}q.push(o[s]);
r[o[s]]=1
}return q
},f=function(){Array.prototype.filter=function(r,s){var o=[],p;
for(var q=0,t=this.length;
q<t;
q++){if(q in this&&r.call(s,p=this[q],q,this)){o.push(p)
}}return o
}
},n=function(){if(!Array.prototype.filter){f()
}i.bind("change",function(o){k();
B.events.trigger("HP:RT:RoomSelectChanged",{originalEvent:o,totalSelectedRooms:[].slice.call(i,0).reduce(function(p,q){return +q.value+p
},0)})
})
};
e(n)
})(jQuery);
(function(){var e=window.jQuery;
var a=window.booking;
var b;
var g="rt__room-selection--not-selected";
var h=false;
function i(){if(!a.env.b_has_maxotel_rooms){return
}if(a.track.getVariant("BUcJHPFbWfbHJKbIPFaXfQfQOUWe")){g="rt__room-selection--highlighted"
}b=e(".roomMultiRoomPrice");
d()
}function d(){a.events.on(a.hotel.Events.RT.ROOM_SELECTED,f);
a.events.on(a.hotel.Events.RT.NO_ROOM_SELECTED_POSTALERT,c)
}function c(){b.addClass(g);
h=true
}function f(){if(h){b.removeClass(g);
h=false
}}a.ensureNamespaceExists(sNSStartup);
a[sNSStartup].hp_rt_highlight_room_selection_column={init:i}
})();
(function(){var c=window.jQuery;
var e=window.booking;
function d(){c(".js-rt__summary__reserve-button").on("click",a)
}function b(){return !c(".b_room_selectbox").find("option:selected").filter("[value!=0]").length
}function a(f){if(b()){e.events.emit(e.hotel.Events.RT.NO_ROOM_SELECTED)
}}e.ensureNamespaceExists(sNSStartup);
e[sNSStartup].hp_rt_no_room_selected_event={init:d}
})();
booking[sNSStartup].hp_rt_select_room_event={init:function(){$(".b_room_selectbox").change(function(b){var a=$(this);
var d=a.find(":selected");
var c={room_id:a.data("roomid"),roomrate_id:a.data("roomrateid"),block_id:a.data("block-id"),price:a.data("price"),raw_total_price:d.attr("data-price-raw"),formatted_total_price:d.attr("data-price-without-addons"),no_rooms:a.val(),max_adults:a.closest("tr").find(".roomMaxPersons").attr("data-occupancy-for-tracking"),$el:a};
booking.events.emit(booking.hotel.Events.RT.ROOM_SELECTED,c)
})
}};
(function(b){var a="#hp_explorer_entry_point";
b.run("insider-entry-point").onReady(function(){var c=$(a);
if(!c.length){return
}b.lightbox.show(c,{customWrapperClassName:"hp_explorer_entry_point"})
})
})(booking);
B.define("lists/lists-share/lists-share",function(b,a,c){var d=b("../lists-hotel-sidebar/lists-hotel-sidebar");
B.components.define("lists-share",function(){this.selectInput=function(){this.$el.find(".js-lists-share-input").select()
};
this.init=function(e){var f=this;
this.$el=e;
this._isShown=false;
B.eventEmitter.bind("lists-share-active",function(){if(f._isShown){f.render()
}});
$(".js-lists-share").bind("click",function(g){g.preventDefault();
if(f._isShown){f.selectInput();
return
}f.$el.hide();
f.render().then(function(){f.$el.slideDown("fast",$.proxy(f.selectInput,f))
})
});
this.$el.delegate(".js-lists-share-input","click",$.proxy(this.selectInput,this))
};
this.render=function(){var f=booking.promise();
var e=this;
d.getListById(d.getCurrentListId()).then(function(g){e.$el.html(B.jstmpl("lists_share_template").render(g));
e._isShown=true;
f.fulfill()
});
return f
}
});
c.exports={init:function(){}}
});
B.define("lists/lists-hotel-sidebar/lists-hotel-sidebar",function(d,c,e){var g=booking[sNSStartup].wlData;
var b=B.env.b_is_tdot_traffic;
var h=B.track.getVariant("PcVBcdHKBdEKXO")||(b&&B.track.getVariant("PNDLaNLcPbAC"));
var f=d("../lists-api/lists-api");
var a=d("../lists-store/lists-store");
e.exports={getCurrentListId:function(){var j=/wl_id=([a-zA-Z0-9-_]+)/;
var i=$(".js-wishlist-added-to-name-link").attr("href").match(j);
return i&&i.length>1&&i[1]
},getListById:function(l){var k=B.promise();
var j=null;
if(B.env.lists){var i=$.grep(B.env.lists.collection,function(m){return String(m.id)===String(l)
});
j=i&&i[0]
}if(j){k.fulfill(j)
}else{f.API.list({id:l},function(m){if(m.lists&&m.lists[0]){k.fulfill(m.lists[0])
}else{k.reject(m)
}})
}return k
},render:function(l,i){this.$root.find(".js-wishlist-added-to-name").attr("data-wl-id",l.id||"")[i?"show":"hide"]();
var k=this.$root.find(".js-wishlist-added-to-name-link");
k.text(l.name||"");
k.attr("href",l.url||"");
var j=$(".js-wl-handle-text");
var m={saved:j.data("text-saved"),unsaved:j.data("text-unsaved")};
if(b){$(".wishlist_trigger_button").toggleClass("saved_in_wl",i)
}j.text(m[i?"saved":"unsaved"]);
k.text(k.data("original-label"));
this.$wishlistButton.toggleClass("added-to-list",i);
this.$flyDropdown.toggleClass("fly-dropdown-enhanced-dropdown-clicked-status",i);
if(!b){this.$socialCount.toggleClass("g-hidden",i)
}},toggleLoading:function(i){this.$wishlistButton.toggleClass("disabled",i);
this.$loadingIcon.toggleClass("g-hidden",!i)
},updateState:function(k){var j=this;
this.toggleLoading(true);
function i(m){var l=$.grep(m,function(p){if(h){return a.getHotelById({hotel_id:f.currentHotel().b_hotel_id,list_id:p.id})
}else{return p.selected
}});
var o=l.length>0;
var n=$.grep(l,function(p){return String(p.id)===String(k.list_id)
})[0]||l[0]||{};
booking.eventEmitter.trigger("wl-hp-sidebar-active-list",n);
j.render(n,o);
j.toggleLoading(false);
B.eventEmitter.trigger("lists-share-active",{id:n.id})
}B.track.exp("PcVBcdHKBdEKXO");
if(h){a.fetch({hotel_id:f.currentHotel().b_hotel_id}).then(function(l){i(l.lists)
})
}else{g.fetch({hotel_id:f.currentHotel().b_hotel_id}).then(function(l){i(l.result.lists)
})
}},$wishlistButton:$(),$loadingIcon:$(),$flyDropdown:$(),$socialCount:$(),$root:$(),init:function(){if(B.env.b_action!=="hotel"){return
}var j=this;
this.$wishlistButton=$(".wishlist_trigger_rounded_larger_button");
this.$loadingIcon=$(".tfl-clicked-status-loading");
this.$flyDropdown=$(".fly-dropdown-enhanced-dropdown");
this.$socialCount=$(".wishlist-social-count");
this.$root=$(".js-hp-wl-sidebar");
if(b||h){a.on("list:changed",function(k){j.updateState({list_id:k.id})
}).on("list:created",function(k){j.updateState({list_id:k.id})
})
}else{var i=[g.EVENTS.CREATE,g.EVENTS.EDITHOTEL].join(" ");
g.bind(i,function(k,l){j.updateState({list_id:l.params.lists})
})
}}}
});
B.define("lists/lists-hotel-dropdown/lists-hotel-dropdown",function(b,a,c){c.exports=(function(){var f=B.env.b_is_tdot_traffic;
var k=B.track.getVariant("PcVBcdHKBdEKXO")||(f&&B.track.getVariant("PNDLaNLcPbAC"));
if(k){var e=b("../lists-store/lists-store");
e.backCompatibility(false)
}else{var i=booking[sNSStartup].wlData;
var j=i.EVENTS
}function d(m,l){if(m.length<l){return m
}return m.slice(0,l)+"&hellip;"
}function h(l){return $.map(l,function(m){return $.extend({},m,{name:d(m.name,18)})
})
}var g=$.fly.dropdown.extend({defaults:{gaAction:"Wishlist",extraClass:"wl-dropdown",content:function(l){var m=this;
B.track.exp("PcVBcdHKBdEKXO");
if(k){e.fetch(this.params).then(function(n){l(m.tmpl(n))
})
}else{i.fetch(this.params).then(function(n){l(m.tmpl(n.result))
})
}}},timeout:null,init:function(){var m=this;
this.params={hotel_id:this.handle().attr("data-hotel-id")};
if(k){$.extend(this.params,{with_hotels:0,include_availability:0})
}var l=Number(this.handle().attr("data-arrow-size"));
if(l){this.options.arrowSize=l
}this.bindRoot();
this.bindData();
m.handle().bind("mouseenter",function(){if(k){e.fetch(m.params)
}else{i.fetch(m.params)
}});
m.bind("show hide",function(n){setTimeout(function(){booking.eventEmitter.trigger("wl-dropdown-toggle",{node:m.root(),state:n.type==="show"})
},0);
$("#tooltip_wrap").hide()
})
},bindRoot:function(){var l=this;
this.bind(this.events.rootready,function(){$.extend(l.options,{gaLabel:l.handle().attr("data-ga-label"),position:l.handle().attr("data-position")});
l.root().delegate(".js-wl-dropdown-item-text","keyup",$.proxy(l.ontext,l)).delegate(".js-wl-dropdown-item-checkbox","change",$.proxy(l.oncheckbox,l)).bind("mouseenter",function(){clearTimeout(l.timeout)
}).bind("mouseleave",function(){l.timeout=setTimeout($.proxy(l.hide,l),2000)
});
if(B.track.getVariant("PcVBcAPTPWOGAKAcQJFYDAUfRBbMC")){l.root().delegate(".js-lists-dropdown-create-logged-out","click",function(m){m.preventDefault();
B.lightbox.hide();
B.command("show-auth-lightbox").run()
})
}l.bind(l.events.show,function(){clearTimeout(l.timeout)
})
})
},bindData:function(){var l=this;
if(k){e.on("list:changed:loading",function(n,o){if(l.hidden()){return
}l.loading(n,o.list_id)
});
var m=function(n,o){o.hotel_ids.forEach(function(p){if(p!==l.params.hotel_id){return
}e.fetch({hotel_id:p}).then(function(){var q=e.getHotelById({hotel_id:p});
l.handle().toggleClass("saved_in_wl",Boolean(q));
l.updateSprite(Boolean(q))
})
})
};
e.on("list:changed",$.proxy(m,this));
e.on("list:created",$.proxy(m,this))
}else{i.bind([j.LOADINGSTART,j.LOADINGEND].join(" "),function(n,o){var p=o.params;
if(String(p.hotel_id)!==String(l.params.hotel_id)||!p.lists&&!p.name){return
}l.loading(n.type===j.LOADINGSTART,p.lists)
});
i.bind([j.CREATE,j.EDITHOTEL].join(" "),function(n,o){if(String(o.params.hotel_id)!==String(l.params.hotel_id)){return
}i.fetch(l.params).then(function(r){var q=$.grep(r.result.lists,function(v){return v.selected
});
var s=Boolean(q.length);
l.handle().toggleClass("saved_in_wl",s);
l.updateSprite(s);
B.eventEmitter.trigger("update:b_hotel_is_saved",{b_hotel_is_saved:s,lists:q});
var p=B.env.auth_level||0;
var t="PcVBcAPTPWOGAVLBRe";
var u="PcVBcAPTPWOGABCGLT";
p=parseInt(p);
if(p>0){B.track.stage(t,1);
B.track.stage(u,1)
}else{B.track.stage(t,2);
B.track.stage(u,2)
}})
})
}},updateSprite:function(l){if(this.handle().hasClass("added_to_fav_lists")){if(B.env.b_is_villa_site){this.handle().find(".icon").toggleClass("icon-wishlist-selected",l).toggleClass("icon-wishlist",!l)
}else{this.handle().find(".b-sprite").toggleClass("icon_list_favorites_selected",l).toggleClass("icon_list_favorites",!l)
}}if(this.handle().hasClass("lists-hotel-dropdown-alternative")){this.handle().find(".b-sprite").toggleClass("icon_list_in_circles_selected",l).toggleClass("icon_list_in_circles",!l)
}},ontext:function(l){var n=$(l.currentTarget);
var m=n.parent();
m.find(".js-wl-dropdown-item-checkbox").attr("disabled",!n.val());
if(l.which===13){l.preventDefault();
this.createList(m)
}},oncheckbox:function(l){l.preventDefault();
var m=$(l.currentTarget).parent();
var n=m.find(".js-wl-dropdown-item-text");
this[n[0]?"createList":"toggleList"](m)
},createList:function(l){var n=this;
var m=l.find(".js-wl-dropdown-item-text");
if(k){e.createList({name:m.val(),hotel_id:this.params.hotel_id}).then(function(){n.redraw()
})
}else{i.create({name:m.val(),hotel_id:this.params.hotel_id}).then(function(q){var p=q.result,o="";
p.selected=true;
o=$("<div/>").html(n.tmpl({lists:[p]}));
l.before(o.find(".js-wl-dropdown-item"));
l.replaceWith(o.find(".js-wl-dropdown-item-new"))
})
}},checked:function(l,m){if(typeof m!=="undefined"){l.get(0).checked=m;
l.parent(".wl-dropdown-item").toggleClass("wl-dropdown-item--added",m)
}return l.get(0).checked
},toggleListLink:function(l,m){l.find("span").toggleClass("g-hidden",!m);
this.root().css(this._position())
},toggleList:function(m){var n=this;
var l=m.find(".js-wl-dropdown-item-checkbox");
if(k){var o=l.attr("data-list-id");
e.toggleHotel({list_id:o,hotel_id:n.params.hotel_id}).then(function(p){n.toggleListLink(m,p.state)
})
}else{i.editHotel({lists:l.attr("data-list-id"),hotel_id:n.params.hotel_id,new_state:Number(n.checked(l))}).then(function(){n.toggleListLink(m,n.checked(l))
})
}},loading:function(m,n){var l=this.root().find("[data-list-id="+(n||'""')+"]").parent();
l.toggleClass("wl-dropdown-item_loading",m);
this.handle().toggleClass("wl-dropdown-handle_loading",m)
},tmpl:function(n){if(k){var m=this;
var l=e._lists.map(function(o){var p=e.getHotelById({list_id:o.id,hotel_id:m.params.hotel_id});
return{id:o.id,url:o.url,name:o.name,selected:p?true:false}
});
return B.jstmpl("lists_hotel_dropdown").render({lists:h(l),b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,b_action:B.env.b_action,b_is_tdot_traffic:B.env.b_is_tdot_traffic})
}return B.jstmpl("lists_hotel_dropdown").render($.extend(n,{lists:h(n.lists),b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,b_action:B.env.b_action,b_is_tdot_traffic:B.env.b_is_tdot_traffic}))
}});
return{wlDropdown:g,create:function(){$(".js-wl-dropdown-handle").each(function l(){g.create(this)
})
},init:function(){this.create()
}}
})()
});
B.define("lists/lists-hotel-content-block/lists-hotel-content-block",function(d,e,c){var g=d("../lists-api/lists-api");
var i=d("../lists-hotel-dropdown/lists-hotel-dropdown").wlDropdown;
var a=null;
function h(){return $(".hp-section--lists")
}function f(){a=i.create(h().find(".hp-lists-save-list, .hp-lists-remove-list"))
}function b(m,k,j){if(a){a._destroy()
}var l=j&&j[j.length-1];
h().replaceWith(B.jstmpl("lists_hotel_content_block").render({b_hotel_is_saved:k,b_hotel_id:m.b_hotel_id,b_wishlist_selected_url:l&&l.url,b_wishlist_selected_name:l&&l.name}));
f()
}c.exports={init:function(){$(function(){f();
B.eventEmitter.bind("update:b_hotel_is_saved",function(j,k){b(g.currentHotel(),k.b_hotel_is_saved,k.lists)
})
})
}}
});
B.require(["require"],function(a){a("lists/lists-share/lists-share").init();
a("lists/lists-hotel-sidebar/lists-hotel-sidebar").init();
a("lists/lists-hotel-dropdown/lists-hotel-dropdown").init()
});
(function(){var b,c,e=0,d=$("body"),a="lightbox-absolute-opened";
$(".ryokan_info_open").bind("click",function(f){f.preventDefault();
b=$(".ryokan_info_details");
if(!c){b.find(".block_toggler").bind("click",function(){b.find($(this).attr("data-block-toggle")).toggle()
})
}booking[sNSStartup].lightbox.show(b);
c=true
});
booking.eventEmitter.bind("modal:open",function(){var f=$("div.modal-wrapper");
if(f.find(".lightbox_absolute").length){e=parseInt(f.css("top"));
d.addClass(a);
f.css({top:$(window).scrollTop()+e})
}}).bind("modal:close",function(){d.removeClass(a)
})
})();
(function(f,d){var c,b,a,e;
d(function(){c=d("#hp_visits_num");
b=d("#hp_from_source");
a=d("#roomsForm");
if(!b.length){a.append('<input type="hidden" name="from_source" id="hp_from_source" value="hotel" />')
}if(!c.length){return
}e=+c.val();
if(e>1){c.val(1)
}a.bind("submit",function(){c.val(e+1)
})
})
})(booking,jQuery);
booking[sNSExperiments][B.env.b_is_villa_site?"TNVIdEfZZWLKVHYO":"BUYdXfMOfMbfTQMOKe"]=(function(a,c,f,b){var d="#property-location-block-map",e=".property-location-block-map-legend-category-list-item",g=".property-location-block-home";
var i=a.env.b_is_villa_site?"TNVIdEfZZWLKVHYO":"BUYdXfMOfMbfTQMOKe";
var h=function(){var k=false;
var j=c("#tracking-target-for-"+(i));
c(f).scroll(booking.tools.functions.throttle(function(){if(k){return
}if(f.scrollY>=j.offset().top-c(f).height()){k=true;
booking.track.custom_goal(i,1)
}},200));
if(!a.atlas){return
}a.atlas.define("location-block",["jQuery","geo.view","geo.latLng","geo.bounds"],function(n,w,q,A){var t=null;
var D=false;
var o=null;
var p=function(G){var H=[];
var F=n(d);
H.push({b_id:"0",b_latitude:F.data("latitude"),b_longitude:F.data("longitude"),b_type:"hotel_current",b_iw_template:"landmark_item_property"});
n(e).each(function(){var I=n(this);
H.push({b_id:String(I.data("landmark")),b_latitude:I.data("latitude"),b_longitude:I.data("longitude"),b_type:"numbered-"+I.data("index"),b_iw_template:"landmark_item"})
});
G.addMarkers(H)
};
var C=function(){var H=this;
var G=n(d);
var F=H.getViewFromMap();
if(!F.bounds.contains(new q(G.data("latitude"),G.data("longitude")))){n(g).removeClass("s_hidden")
}else{n(g).addClass("s_hidden")
}};
var z=function(H){var J=this,G=H.data;
D=true;
if(G.b_type.indexOf("numbered")===0){var F=n(e+"[data-landmark="+H.id+"]");
var I={title:F.data("ltitle"),address:F.data("address"),distance:F.data("distance"),description:F.data("description"),image:F.data("image")};
r(J,G,I)
}else{if(G.b_id==="0"){u(J,n(d))
}}};
var l=function(H){if(D){return
}var J=this,G=H.data;
if(o){clearTimeout(o);
o=null
}if(G.b_type.indexOf("numbered")===0){var F=n(e+"[data-landmark="+H.id+"]");
var I={title:F.data("ltitle"),address:F.data("address"),distance:F.data("distance"),description:F.data("description"),image:F.data("image")};
r(J,G,I)
}else{if(G.b_id==="0"){u(J,n(d))
}}};
var E=function(F){if(!D){if(!t||(t&&t.b_id&&F.data.b_id!==t.b_id)){return
}if(o){clearTimeout(o)
}var G=this;
o=setTimeout(function(){G.closeIW();
o=null
},1000)
}};
var u=function(G,F){G.setIW({className:"map-landmark-iw-property-marker"});
G.openIW("0",{title:F.data("ptitle"),address:F.data("address"),location_score:F.data("location_score")});
t=G.getMarker("0")
};
var r=function(H,F,G){H.setIW({className:"map-landmark-iw"});
H.openIW(F.b_id,G);
H.setMarkerType(F.b_id,"numbered-selected-"+F.b_type.split("-").pop());
if(t!==null&&t!==F){H.resetMarkerType(t.b_id)
}t=F;
booking.track.custom_goal(i,2)
};
var m=function(){var G=[];
var I=[];
n(e).each(function(){var J=n(this);
I.push({distance:J.data("dist"),lat:J.data("latitude"),lng:J.data("longitude")})
});
if(I.length<3){return I
}I.sort(function(K,J){return K.distance<J.distance?-1:1
});
for(var H=0,F=3/4*I.length;
H<F;
H++){G.push(I[H])
}return G
};
var v=function(I,H,F){var G=I.getViewFromMap();
G.extend(H);
I.setZoom(G.getZoom());
setTimeout(function(){I.panMarker(F)
},500)
};
var y=function(F,H,G){if(n.fn.on!==void 0){n(F).on(H,G)
}else{n(F)[H](G)
}};
var s=function(G,F){G.on("bounds-change",C,G);
G.on("marker-click",z);
y(e,"click",function(){D=true;
var H=n(this);
var I=G.getMarker(String(H.data("landmark")));
G.panMarker(I.b_id);
var J={title:H.data("ltitle"),address:H.data("address"),distance:H.data("distance"),description:H.data("description"),image:H.data("image")};
r(G,I,J)
});
y(e,"mouseenter",function(){var H=G.getMarker(String(n(this).data("landmark")));
G.setMarkerType(H.b_id,"numbered-selected-"+H.b_type.split("-").pop())
});
y(e,"mouseleave",function(){var H=G.getMarker(String(n(this).data("landmark")));
if(H!==t){G.resetMarkerType(H.b_id)
}});
G.on("iw-close",function(){D=false;
if(t!==null){G.resetMarkerType(t.b_id)
}});
y(g,"click",function(){var H=n(d);
v(G,new q(H.data("latitude"),H.data("longitude")),"0");
booking.track.custom_goal(i,4)
});
G.on("marker-hover",l);
G.on("marker-out",E)
};
var x=function(){var G=this;
var J=n(d);
p(G);
var F=[J.data("latitude"),J.data("longitude")];
var M=new w(J.width(),J.height());
var Q=m();
M.extend(new q(F[0],F[1]));
for(var L=0,H=Q.length;
L<H;
L++){M.extend(new q(Q[L].lat,Q[L].lng))
}var K=M.getCenter();
var O=K.lat-F[0];
var P=K.lng-F[1];
var I=M.getNorthWest();
var N=M.getSouthEast();
M.extend(new q(I.lat+O*2,I.lng+P*2));
M.extend(new q(N.lat+O*2,N.lng+P*2));
G.setCenter(F);
G.setZoom(M.getZoom());
G.setIW({engine:"html",className:"map-landmark-iw"});
u(G,J);
s(G,J)
};
return{locationBlockInit:x}
});
a.atlas.define("icons-location-block",["icons-default"],function(q){var n=a.env.b_is_villa_site?"//q-ec.bstatic.com/villas/img/experiments/numbered-markers-v2/85d36ea9793d4f5bacaa1b93ab5cf12e1375d93c.png":"//q-ec.bstatic.com/static/img/experiments/hotel_page/b-com-numbered_markers-2/eace931e5b6fdbcd4b593c6fdd66f9a1c92a8200.png",m=5,o=6,l={url:n,w:25,h:35,x:0,y:0,z:10};
function p(t){if(t.indexOf("numbered")===0){var s=t.split("-");
var r=null;
if(s.length>2){r=s[1]
}var x=l.z;
var w=0;
if(r==="selected"){x=100;
w=l.w*m
}var v=parseInt(s.pop(),10)-1;
var u=c.extend({},l,{x:(v%m)*l.w+w,y:Math.floor(v/m)*l.h,z:x});
return u
}return q.getIcon(t)
}return{getIcon:p}
});
a.atlas.require(["jQuery","atlas"],function(n,m){var l=function(){var r,q=["markers","icons-default","bounds","icons-location-block","center","iw","location-block"],p={id:"map-location-block",domNode:"#property-location-block-map",zoom:11,scrollwheel:false};
r=new m({modules:q,options:p});
r.done(function(){r.locationBlockInit()
})
};
if(n("#property-location-block-map").is(":visible")){setTimeout(l,1000)
}else{var o=false;
a.eventEmitter.bind("tab-opened",function(){if(!o&&n("#property-location-block-map").is(":visible")){o=true;
l()
}})
}})
};
return{init:h,initElse:function(){}}
})(booking,jQuery,window);
$(function(){if(!B.atlas){return
}B.atlas.define("icons-zindex",["jQuery"],function(f){var e,d="//r-ec.bstatic.com/static/img/map_sprites_omnibus_mk3/635ad7902710fb05e761a015c754ac4c664951fe.png",b={url:d,w:18,h:27,x:33,y:33,z:500};
function c(h){return f.extend({},b,h)
}e={genius_current:c({w:22,h:36,x:176,y:60,z:1010}),hotel_current:c({w:22,h:36,x:198,y:60,z:1000}),landmark_current:c({w:22,h:36,x:66,y:60,z:350}),airport_current:c({w:22,h:36,x:132,y:60,z:340}),ski_lift_current:c({w:22,h:36,x:110,y:60,z:330}),transport_current:c({w:22,h:36,x:88,y:60,z:320}),city_current:c({w:22,h:36,x:154,y:60,z:310}),genius:c({x:136,z:800}),hotel_matching:c({x:0,z:700}),hotel:c({}),"default":c({}),hotel_not_matching:c({x:17,z:400}),landmark:c({x:51,z:300}),airport:c({x:102,z:250}),ski_lift:c({x:85,z:200}),transport:c({x:68,z:150}),city:c({x:118,z:100})};
function g(h){return(h&&e.hasOwnProperty(h))?e[h]:e["default"]
}function a(j){var h={},i=g(j);
switch(true){case (j==="genius"):case (j==="city"):case (j==="landmark"):case (j==="airport"):case (j==="transport"):case (j==="ski_lift"):case (j==="genius_current"):case (j==="city_current"):case (j==="airport_current"):case (j==="landmark_current"):case (j==="transport_current"):case (j==="ski_lift_current"):h=f.extend(h,i,{z:2000});
break;
case (j&&j.indexOf("_current")>-1):f.extend(h,i,{x:198,y:60,z:2000});
break;
default:f.extend(h,i,{x:153,y:33,z:2000})
}return h
}return{ICONS:e,getIcon:g,getHover:a}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("zoom-control",["jQuery"],function(b){function a(d){var c=this,f=d.map;
function e(){var g=d.$elZoomIn||b("#map_atlas_custom_zoom > .map_atlas_custom_zoom_increment"),h=d.$elZoomOut||b("#map_atlas_custom_zoom > .map_atlas_custom_zoom_decrement");
g.bind("click",function(k){k.preventDefault();
var i=b(this),j=false;
if(!i.hasClass("disabled")){h.removeClass("disabled");
j=f.incrementZoom();
f.trigger("zoomin.button");
if(j){i.addClass("disabled")
}}});
h.bind("click",function(k){k.preventDefault();
var i=b(this),j=false;
if(!i.hasClass("disabled")){g.removeClass("disabled");
j=f.decrementZoom();
f.trigger("zoomout.button");
if(j){i.addClass("disabled")
}}})
}e();
return c
}return a
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("label-current-hotel",["jQuery"],function(b){function a(e){var d=e.label,f=e.map;
var c=b(d);
f.addLabel({domNode:c.get(0),coordinates:[B.env.b_map_center_latitude||B.env.b_latitude,B.env.b_map_center_longitude||B.env.b_longitude]});
c.loadComponents()
}return a
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("icons-new-current",["jQuery","icons-default"],function(g,c){var f=g.extend({},c.ICONS),e="//q-ec.bstatic.com/static/img/map_sprites_omnibus_mk7/68beb34228a289570dfd3196c0d30be5473b2f16.png",b={url:e,w:18,h:27,x:33,y:33,z:400};
function d(i){return g.extend({},b,i)
}g.extend(f,{hotel_current:d({w:22,h:36,x:220,y:60,z:2000}),hotel_soldout_current:d({w:22,h:36,x:220,y:60,z:2000})});
function h(i){return(i&&f.hasOwnProperty(i))?f[i]:f["default"]
}function a(k){var i={},j=h(k);
switch(true){case (k==="genius"):case (k==="city"):case (k==="landmark"):case (k==="airport"):case (k==="transport"):case (k==="ski_lift"):case (k==="genius_current"):case (k==="city_current"):case (k==="airport_current"):case (k==="landmark_current"):case (k==="transport_current"):case (k==="ski_lift_current"):i=g.extend(i,j,{z:2000});
break;
case (k&&k.indexOf("_current")>-1):g.extend(i,j,{x:220,y:60,z:2000});
break;
default:g.extend(i,j,{x:153,y:33,z:2000})
}return i
}return{ICONS:f,getIcon:h,getHover:a}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("hover-visited",function(){function d(){this.on("marker-hover",function(e){a(e.markerId)
});
this.on("marker-out",function(e){b(e.markerId)
});
this.on("marker-visited",function(e){c(e.markerId)
})
}function a(g){var e=this.Interface.getMarker(g),f=(e)?e.iconType||e.b_type:"";
this.Interface.setMarkerType(g,this.getHover(f))
}function c(g){var e=this.Interface.getMarker(g),f=(e)?e.iconType||e.b_type:"";
this.Interface.setMarkerType(g,this.getVisited(f))
}function b(g){var e=this.Interface.getMarker(g),f=(e)?e.iconType||e.b_type:"";
this.Interface.setMarkerType(g,this.getIcon(f))
}return{addIconEvents:d,setIconHover:a,setIconOut:b,setIconVisited:c}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("map-markers-disperse",["markers-disperser","util-array"],function(f,d){var b=false;
function e(h,k,j){var i=h.length,l,g;
if(!j||!k){return
}while(i--){l=h[i];
if(l&&j===l.b_id){if(!B.atlas.assert.tdot&&B.atlas.assert.hp&&!B.atlas.getVariant("ebcBUHSCQWXXTTWEYcZbMKSGHRIcUZC")){k.setMarkerOptions(l.b_id,{cursor:"default"})
}g=l.b_marker_type||l.b_type;
if(!/_current/.test(g)){k.setMarkerType(l.b_id,g+"_current");
if(!b&&B.atlas.getVariant("ebcBUHRXOSHFBddQDXZQIYSYC")){k.animateMarker(l.b_id);
b=true
}}break
}}}function c(h,l,k){var j=h.concat(l.getActiveMarkers()||[]),g=[],i;
if(k){i=d.findIndex(j,function(m){return m.b_id===k
});
if(i>0){g=j.splice(i,1)
}}return g.concat(j)
}function a(g,l,k,m){var i=c(g,l,k),h=[],j=m||{top:-10,left:-9,bottom:-12,right:-9},n;
n=new f({map:l,offset:j});
h=n.filter(i);
l.setMarkers(h);
e(h,l,k);
l.trigger("markers-dispersed",h)
}return{initialize:a}
})
});
$(function(){if(!B.atlas){return
}var a=["markers-shape","util-getset","util-object","util-array"];
if(B.atlas.getVariant("ebcBUNHTIYSaBNAHBBMC")||B.atlas.getVariant("ebcOQZRUAPBRNcbRYYEO")){a.push("markers-disperser-filters")
}B.atlas.define("markers-disperser",a,function(f,d,h,c,b){var g={offset:{top:0,left:0,bottom:0,right:0}};
function i(j){var k={};
h.extend(k,g,j);
h.extend(this,d.call(this,k))
}function e(o,n){var j,k;
var m=o.b_marker_type||o.b_type;
var l=n.b_marker_type||n.b_type;
if(typeof B.env!=="undefined"&&typeof B.env.b_hotel_id!=="undefined"){if(o.b_id===B.env.b_hotel_id&&n.b_id!==B.env.b_hotel_id){return 1
}else{if(n.b_id===B.env.b_hotel_id&&o.b_id!==B.env.b_hotel_id){return -1
}else{if(o.b_id===B.env.b_hotel_id&&n.b_id===B.env.b_hotel_id){return 0
}}}}if(o.b_persistent&&!n.b_persistent){j=1
}else{if(!o.b_persistent&&n.b_persistent){j=-1
}else{j=0
}}if(m!=="hotel_soldout"&&l==="hotel_soldout"){k=1
}else{if(m==="hotel_soldout"&&l!=="hotel_soldout"){k=-1
}else{k=0
}}if(j>0||j<0){return j
}else{return k
}}i.prototype.filter=function(n,m){var j=this.get("map"),q=j.getViewFromMap(),o=this.get("offset"),r=[],l=[];
var k=false;
if(B.atlas.getVariant("ebcBUNHTIYSaBNAHBBMC")||B.atlas.getVariant("ebcOQZRUAPBRNcbRYYEO")){var p=new b()
}c.each(n,function(w){var u=new f(w,q,j),x=true;
var v=false,s=false,t;
if(!r.length||w.b_persistent){r.push(w);
l.push(u)
}else{if(!m||r.length<=m){if(B.atlas.getVariant("ebcBUECAFWTYcUNSVGPQJJYJO")||B.atlas.getVariant("ebcOLHMbdIePQNZBaQDbAAPVT")||B.atlas.getVariant("ebcMMfEDXPdLbeMSSdPIFdELSVWe")||B.atlas.getVariant("ebcMbfWWJbVHMbdIePQNZBaQDbAAPVT")||B.atlas.getVariant("ebcBUNHTIYSaBNAHBBMC")||B.atlas.getVariant("ebcOQZRUAPBRNcbRYYEO")){c.each(l,function(z,y){if(u.intersects(z,o)){if(e(w,r[y])>0&&!(B.atlas.getVariant("ebcBUNHTIYSaBNAHBBMC")||B.atlas.getVariant("ebcOQZRUAPBRNcbRYYEO"))){t=y;
v=true;
k=true
}else{if((B.atlas.getVariant("ebcBUNHTIYSaBNAHBBMC")||B.atlas.getVariant("ebcOQZRUAPBRNcbRYYEO"))&&p.check(w,r[y])===0){s=0
}else{if((B.atlas.getVariant("ebcBUNHTIYSaBNAHBBMC")||B.atlas.getVariant("ebcOQZRUAPBRNcbRYYEO"))&&p.check(w,r[y])>0){t=y;
v=true;
k=true
}else{s=true
}}}}});
if(v){r.splice(t,1,w);
l.splice(t,1,u)
}else{if(!s){r.push(w);
l.push(u)
}}}else{c.each(l,function(z,y){if(u.intersects(z,o)){x=false;
if(e(w,r[y])>0){k=true
}}});
if(x){r.push(w);
l.push(u)
}}}}});
if(k){j.trigger("process-soldout-hotel")
}return r
};
return i
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("markers-shape",["geometry.point","geo.latLng","util-object"],function(b,a,d){function c(f,e,i){var h=new a(f.b_latitude,f.b_longitude),j=e.latLngToPixel(h),g={ox:0,oy:0};
if(f&&f.b_states&&f.b_states.overlay){d.extend(g,i.getMarkerDimension(f))
}else{d.extend(g,i.getIcon(f.b_type))
}this.tl=new b(j.x-(g.w/2)+g.ox,j.y-g.h+g.oy);
this.br=new b(this.tl.x+g.w,this.tl.y+g.h)
}c.prototype.intersects=function(f,j){var h=f.tl,i=f.br,e=this.tl,g=this.br;
return !(h.x>(g.x+j.right)||h.y>(g.y+j.bottom)||i.x<(e.x-j.left)||i.y<(e.y-j.top))
};
return c
})
});
$(function(){if(!B.atlas||!B.atlas.define){return
}B.atlas.define("marker-data-format",["util-object"],function(g){var e={};
function f(){g.extend(this,e)
}function a(i,j){if(j){i.b_behaviors=j.b_behaviors
}else{i.b_behaviors={}
}}function d(i,j){if(j){i.b_states=j.b_states
}else{i.b_states={}
}}function h(i){i.b_type=i.b_marker_type;
delete i.b_marker_type
}function c(i){if(/hotel/.test(i.b_type)){i.b_basic_type="hotel"
}if(/city/.test(i.b_type)){i.b_basic_type="city"
}if(/airport/.test(i.b_type)){i.b_basic_type="airport"
}if(/soldout/.test(i.b_type)){i.b_states.soldout=true
}if(/comp_set/.test(i.b_type)){i.b_states.compset=true
}if(/current/.test(i.b_type)){i.b_states.current=true
}}function b(i,k){var j=this;
Object.keys(i).forEach(function(l){i[l].forEach(function(m){var n=j.getMarker(m.b_id);
h(m);
d(m,n);
a(m,n);
c(m);
if(typeof k==="function"){k(m)
}})
});
return i
}e={enforceDataFormat:b,updateMarkerStates:c};
return{init:f}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("iw-gallery",function(){function a(b){this.galPos=0;
this.galItems=3;
this.$wrapper=b.$wrapper;
this.bindEvents()
}a.prototype.bindEvents=function(){var b=this;
this.$wrapper.on("click",".maps-iw-image-gal-nav",function(d){d.preventDefault();
var c=$(this);
if(c.hasClass("maps-iw-image-gal-nav-next")){b.galPos++
}else{b.galPos--
}if(b.galPos>=b.galItems){b.galPos=0
}if(b.galPos<0){b.galPos=(b.galItems-1)
}b.changeImage()
});
this.$wrapper.on("click",".maps-iw-image-gal-nav-bullets li",function(){b.galPos=$(this).index();
b.changeImage()
})
};
a.prototype.changeImage=function(){$(".maps-iw-image-gal-view .maps-iw-image-gal-images li.current").stop().removeAttr("style").toggleClass("current previous");
$(".maps-iw-image-gal-view .maps-iw-image-gal-images li").eq(this.galPos).addClass("current").hide().fadeIn(200,function(){$(".maps-iw-image-gal-view .maps-iw-image-gal-images li.previous").removeClass("previous")
});
$(".maps-iw-image-gal-view .maps-iw-image-gal-nav-bullets li.active").removeClass("active");
$(".maps-iw-image-gal-view .maps-iw-image-gal-nav-bullets li").eq(this.galPos).addClass("active")
};
return a
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("iw-control-events",[],function(){return new booking.events.Emitter()
})
});
$(function(){if(!B.atlas){return
}var a=["iw-control-events","util-env"];
if(B.atlas.getVariant("ebcBUYSaBbRPUMVBFUWe")||B.atlas.getVariant("ebcOQPBRYSKDYEaNdNC")){a.push("iw-gallery")
}B.atlas.define("iw-control-view",a,function(c,e,d){function b(g){var f=B.jstmpl("atlas_iw_control_view_wrapper");
this._data={};
this.tmpl=B.jstmpl("atlas_iw_control_view");
this.$wrapper=$(f.render(g));
g.topOverlay.append(this.$wrapper);
this.map=g.map;
this.events=c;
this.bindEvents();
if(B.atlas.getVariant("ebcBUYSaBbRPUMVBFUWe")||B.atlas.getVariant("ebcOQPBRYSKDYEaNdNC")){new d({$wrapper:g.topOverlay})
}}b.prototype.bindEvents=function(){var g=this.$wrapper,f=this;
if(B.atlas.getVariant("ebcYSaBHCMYQGCIBTAcHe")){this.on("load",$.proxy(this.updateRenderLoading,this))
}this.on("add",$.proxy(this.updateRender,this));
if(!(B.atlas.getVariant("ebcBUNHTIYSaBNAHBBMC")||B.atlas.getVariant("ebcOQZRUAPBRNcbRYYEO"))){this.map.on("bounds-change",function(){f._close()
})
}g.delegate(".iw-close","click",function(h){h.preventDefault();
f._close();
f.map.trigger("iw-close.button")
});
g.delegate(".js-map-hotel__link","click",function(h){f.map.trigger("iw-click-title")
}).delegate(".js-map-hotel__button","click",function(h){f.map.trigger("iw-click-button")
})
};
b.prototype._close=function(){this.$wrapper.hide();
this.clearMarkerId();
this.map.setIconOut();
this.trigger("close",[])
};
b.prototype.updateRenderLoading=function(g){var f=$.extend({},g,{b_loading:g.b_states.b_is_loaded?false:true});
this.updateRender(f)
};
b.prototype.renderPendingIWCards=function(){var f=B.jstmpl("atlas_iw_hotel"),g=this.map;
this.$wrapper.find("[data-hotel-load-id]").each(function(j,k){var h=$(k),l=h.data("hotel-load-id");
g.getIW(l,function(n){var i=g.getMarker(n.b_id);
var o=i.b_basic_type;
if(n.b_id===e.get("destinationId")){o+="-current"
}var m=$(f.render($.extend(n,{b_maps_iw_fixed_classes:"iw-overlay-"+o})));
h.replaceWith(m);
g.getMarker(l,function(p){p.b_states.b_is_loaded=true
});
g.trigger("iw-load")
})
})
};
b.prototype.updateRender=function(i){this.fixHotelUrl(i);
var j=i.b_basic_type,g=this.tmpl,f=this.map.getMarker(i.b_id),h=this.$wrapper;
if(i.b_id===e.get("destinationId")){j+="-current"
}i.b_class_name="iw-overlay-"+j;
this.map.trigger("fixed-iw-open",f);
this.renderTemplate({view:this,tmplData:g.render(i)});
this.trigger("rendered",{$wrapper:this.$wrapper,data:i});
f=this.map.getMarker(i.b_id);
this.map.trigger("iw-open")
};
b.prototype.renderTemplate=function(i){var g=i.view,h=i.tmplData,f=this.isVisible(),j=this.$wrapper;
if(B.atlas.getVariant("ebcBUNHTIYSaBVOHYRRT")===1||B.atlas.getVariant("ebcOQZRUAPBRYaTWPKXe")===1){if(!f){j.show().html(h);
if(B.atlas.getVariant("ebcYSaBHCMYQGCIBTAcHe")){g.renderPendingIWCards()
}$(".iw-control").animate({opacity:0},0)
}j.show();
$(".iw-control").animate({opacity:0},200,function(){f&&j.html(h);
if(B.atlas.getVariant("ebcYSaBHCMYQGCIBTAcHe")){g.renderPendingIWCards()
}$(".iw-control").delay(0).css({opacity:0}).animate({opacity:1},400,"easeOutQuart")
})
}else{if(B.atlas.getVariant("ebcBUNHTIYSaBVOHYRRT")===2||B.atlas.getVariant("ebcOQZRUAPBRYaTWPKXe")===2){if(!f){j.show().html(h);
if(B.atlas.getVariant("ebcYSaBHCMYQGCIBTAcHe")){g.renderPendingIWCards()
}}j.show();
$(".iw-control").animate({opacity:0},0,function(){f&&j.html(h);
if(B.atlas.getVariant("ebcYSaBHCMYQGCIBTAcHe")){g.renderPendingIWCards()
}$(".iw-control").delay(0).css({opacity:1,left:-300}).animate({left:20},400,"easeOutQuart")
})
}else{j.show().html(h);
if(B.atlas.getVariant("ebcYSaBHCMYQGCIBTAcHe")){g.renderPendingIWCards()
}$(".iw-control").delay(0).slideUp(0).slideDown(400)
}}};
b.prototype.isVisible=function(){if(!$(".iw-control").length){return false
}return this.$wrapper.is(":visible")
};
b.prototype.fixHotelUrl=function(g){if(g&&g.is_closed===1){return false
}var f=this.map.getMarker(g.b_id);
if(f.b_url){g.b_url=f.b_url
}};
b.prototype.on=function(){var f=Array.prototype.slice.call(arguments);
this.events.on.apply(this.events,f)
};
b.prototype.trigger=function(){var f=Array.prototype.slice.call(arguments);
this.events.trigger.apply(this.events,f)
};
b.prototype.get=function(f){return this._data[f]
};
b.prototype.set=function(f,g){this._data[f]=g;
return this.get(f)
};
b.prototype.clearMarkerId=function(f){this.set("markerIdList");
this.trigger("markerList:updated",[],this.map)
};
b.prototype.saveMarkerId=function(g){var f=this.get("markerIdList")||[];
f.push(g);
this.set("markerIdList",f);
this.trigger("markerList:updated",this.get("markerIdList"),this.map)
};
return b
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("iw-control",["iw-control-view","geo.view","geo.latLng","iw-control-events"],function(e,d,c,b){function f(h){var g={map:h.map,topOverlay:h.topOverlay};
this.viewOptions=g;
this.map=h.map;
this.view=new e(g);
this.bindEvents()
}f.prototype.bindEvents=function(){var g=this,h=this.map;
h.on("marker-click",function(i){var j=i.data,k=j.b_id;
if(!((/hotel.*/.test(j.b_type))||(/^city.*/.test(j.b_type)&&B.atlas.getVariant("ebcYSaBaUSBCHC")==2))){return
}g.getIWFromMap(k,j);
h.setIconActive(k)
});
h.on("iw-control-show",function(k){var i=k.markerId,j=k.data;
g.getIWFromMap(i,j);
if(B.atlas.getVariant("ebcYSaBTOSGScDbQNcO")){}else{h.off("iw-control-show")
}})
};
f.prototype.getIWFromMap=function(g,h){var i=this.map,j=/hotel.*/.test(h.b_type);
b.trigger("markerList:updated",[g],this.map);
j&&this.map.trigger("fixed-iw-skeleton");
if(j&&B.atlas.getVariant("ebcYSaBHCMYQGCIBTAcHe")&&!h.b_states.b_is_loaded){b.trigger("load",h)
}else{if(j){i.getIW(g,function(k){b.trigger("add",k)
})
}else{if(B.atlas.getVariant("ebcYSaBaUSBCHC")==2){b.trigger("add",h)
}}}};
f.prototype.createGeoView=function(){var h=this.viewOptions.topOverlay,i=h.width(),g=h.height(),j=new d(i,g),k=this.map.getBoundingBox();
j.setNorthEast(a(k.NE));
j.setSouthWest(a(k.SW));
return j
};
function a(g){return new c(parseFloat(g[0]),parseFloat(g[1]))
}return f
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("iw-control-ajax",["jQuery","util-env","util-array"],function(b,d,k){var c=[],a=[],g=d.get("markerDetailsURL")||"";
function j(o){var n=k.findIndex(c,function(r){return r[0]===o
}),q=c[n],p;
if(n>-1){p=q[2];
p.abort();
var m=q;
c.splice(n);
o.trigger("iw-get-abort",o);
return m
}}function l(n){var m=k.findIndex(c,function(p){return p[0]===n
}),o=c[m];
if(typeof o=="object"){o[3].length=0
}}function h(n){var m=this.get("markerDetailsURL");
if(!m){this.set("markerDetailsURL",g);
m=g
}return m+";hotel_id="+n
}function e(o){var n,m=this;
n=k.find(a,function(p){return p[0]===m&&p[1]===o
});
return(n)?n[2]:false
}function i(o,t,r){var u,n=h.call(this,o),m=this,p=e.call(m,o),s,q=j(m);
s=q&&q[3]&&q[1]==o?q[3]:[];
s.push(t);
if(!r&&p){k.each(s,function(v){if(typeof t==="function"){v.apply(m,[p])
}});
if(B.atlas.getVariant("ebcYSaBTOSGScDbQNcO")){l(m)
}return p
}m.trigger("iw-get-before",m);
u=b.ajax({url:n,error:function(w,v){if(v!=="abort"){m.trigger("iw-get-fail",m)
}},success:function(v){if(!v){return
}k.each(s,function(w){if(typeof w==="function"&&v.b_hotels){w.apply(m,[v.b_hotels[o]])
}});
if(B.atlas.getVariant("ebcYSaBTOSGScDbQNcO")){l(m)
}a.push([m,o,v.b_hotels[o],u]);
m.trigger("iw-get-success",v,m)
}});
c.push([m,o,u,[t]]);
return u
}function f(){a.length=0
}return{getIW:i,clearIWCache:f}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("atlas-common-icons",["jQuery","icons-default","util-env"],function(f,c,h){if(h.get("action")=="hotel"&&!h.get("tdot")&&!h.get("isMsie")){B.track.stage("ebcBUECAFSDPOHO",3)
}var l=f.extend({},c.ICONS),b={hotel:j({x:153,y:33,z:2000}),hotel_soldout:j({x:153,y:33,z:2000}),geosearch_place:j({w:28,h:25,x:131,y:96,z:2000})},m={hotel:j({x:215,y:33,z:2000})},k="//q-ec.bstatic.com/static/img/map_sprites_omnibus_mk10/8b553fa5484a0ceb6aaea7eb9db1aa3e109dec1e.png",d,g={url:k,w:18,h:27,x:33,y:33,z:400};
function j(n){return f.extend({},g,n)
}f.extend(l,{hotel_soldout_current:j({w:22,h:36,x:22,y:60,z:1010}),hotel_soldout:j({x:17,z:300}),hotel_current:j({w:22,h:36,x:198,y:60,z:1000}),hotel:j({}),geosearch_place:j({w:28,h:25,x:103,y:96,z:500})});
if(!h.get("tdot")&&h.get("hasValidDates")&&h.get("action")=="hotel"){d="//q-ec.bstatic.com/static/img/map_sprites_omnibus_mk15/c22e8051729f66180a287ff5f7e4f209785cfdaa.png";
f.extend(l,{hotel_soldout:j({url:d,w:16,h:28,x:198,y:33}),hotel:j({url:d,w:16,h:28,x:215,y:33}),hotel_comp_set:j({url:d,w:16,h:28,x:215,y:33})});
f.extend(b,{hotel_soldout:j({url:d,w:16,h:28,x:232,y:33,z:501}),hotel:j({url:d,w:16,h:28,x:249,y:33,z:501}),hotel_comp_set:j({url:d,w:16,h:28,x:249,y:33,z:501})})
}if(B.atlas.getVariant("eGBUZUabBTRSOIfREFcdHPSYZeKe")===1){f.extend(l,{hotel_comp_set:j({x:34,y:33,z:60})});
f.extend(b,{hotel_comp_set:j({x:153,y:33,z:2000})})
}if(B.atlas.getVariant("eGBUZUabBTRSOIfREFcdHPSYZeKe")===2){d="//r-ec.bstatic.com/static/img/map_hp_competitive_set_markers_step5/a4ecda09c83a2b78232f9eb1af8a185aa630fe95.png";
f.extend(l,{hotel_comp_set:j({url:d,w:16,h:28,x:0,y:0})});
f.extend(b,{hotel_comp_set:j({url:d,w:16,h:28,x:16,y:0})})
}if((!B.atlas.assert.tdot&&(B.atlas.assert.sr||B.atlas.assert.hp))||B.atlas.getVariant("eGfEWJcEbOMFcPREFHT")||B.atlas.getVariant("eGBUMbfWEYcZbMKJZKe")){f.extend(l,{city:j({w:22,h:21,x:0,y:97,z:500}),city_current:j({w:28,h:25,x:44,y:97})});
f.extend(b,{city:j({w:22,h:21,x:22,y:97,z:2000}),city_current:j({w:28,h:25,x:44,y:97,z:4000})})
}if(B.atlas.getVariant("eGOQJJYDMKJZfIBHPLYIO")){d="//q-ec.bstatic.com/static/img/map_sprites_sr_soldout_markers_fade_x/93509a58510c1ca40a289eb55f2608d5edd35a0d.png";
f.extend(l,{hotel_soldout:j({url:d,w:16,h:28,x:0,y:0})});
f.extend(b,{hotel_soldout:j({url:d,w:16,h:28,x:48,y:0,z:501})})
}if(B.atlas.getVariant("eGOQJJYDXKbMKJZKe")===1){d="//r-ec.bstatic.com/static/img/map_sprites_sr_soldout_red_markers/c139ee4c3f6e318afbf8ac5d578c8f790dddcbf4.png";
f.extend(l,{hotel_soldout:j({url:d,w:17,h:28,x:0,y:0})});
f.extend(b,{hotel_soldout:j({url:d,w:17,h:28,x:17,y:0,z:501})})
}if(B.atlas.getVariant("eGBUPfBfRXQDXPdRe")===1){d="//r-ec.bstatic.com/static/img/map_sprites_sr_soldout_red_markers/c139ee4c3f6e318afbf8ac5d578c8f790dddcbf4.png";
f.extend(l,{hotel:j({x:34,y:33,z:60}),hotel_soldout:j({url:d,w:17,h:28,x:0,y:0})});
f.extend(b,{hotel:j({x:153,y:33,z:2000}),hotel_soldout:j({url:d,w:17,h:28,x:17,y:0,z:501})})
}if(B.atlas.getVariant("eGfEFGbJEXAEHMbEO")===1){d="//r-ec.bstatic.com/static/img/map_sprites_sr_soldout_red_markers/c139ee4c3f6e318afbf8ac5d578c8f790dddcbf4.png";
f.extend(l,{hotel:j({x:34,y:33,z:60}),hotel_soldout:j({url:d,w:17,h:28,x:0,y:0})});
f.extend(b,{hotel:j({x:153,y:33,z:2000}),hotel_soldout:j({url:d,w:17,h:28,x:17,y:0,z:501})})
}if(B.atlas.getVariant("HMDCceGECAFSdfIO")===1){l.hotel_sr=l.hotel;
l.hotel_sr_soldout=l.hotel_soldout;
b.hotel_sr=b.hotel;
b.hotel_sr_soldout=b.hotel_soldout
}else{if(B.atlas.getVariant("HMDCceGECAFSdfIO")===2){d="//r-ec.bstatic.com/static/img/map/hotel_sr/f0ac72eb6ac10833ef3310bd86375b7ce787ee25.png";
f.extend(l,{hotel_sr:j({url:d,x:0,y:0,w:19,h:34}),hotel_sr_soldout:j({url:d,x:38,y:0,w:19,h:34})});
f.extend(b,{hotel_sr:j({url:d,x:19,y:0,w:19,h:34}),hotel_sr_soldout:j({url:d,x:57,y:0,w:19,h:34})})
}}function i(n){return(n&&l.hasOwnProperty(n))?l[n]:l["default"]
}function a(n){return(n&&b.hasOwnProperty(n))?f.extend({},i(n),b[n]):i(n)
}function e(n){return(n&&m.hasOwnProperty(n))?f.extend({},i(n),m[n]):i(n)
}return{ICONS:l,HOVER_ICONS:b,getIcon:i,getHover:a,getVisited:e}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("icons-svg",["util-object"],function(b){var i="//r-ec.bstatic.com/static/img/atlas_markers-2/071fc2eee7a98c63196cf712c1a1d35b63868ece.svg",f={url:i,w:17,h:28,x:0,y:0,z:400},j={"default":f},k={hover:{x:50,y:0}};
function a(m,n){var l=this.getIcon(m),o=k[n];
if(o){l=b.extend({},l,{x:l.x+o.x,y:l.y+o.y})
}return l
}function g(l){return(j.hasOwnProperty(l))?j[l]:j["default"]
}function c(l){return a.call(this,l,"hover")
}function e(l){return a.call(this,l,"visited")
}function d(m,l){if(m){j[m]=b.extend({},f,l)
}}function h(m,l){if(m){k[m]=l
}}return{ICONS:j,getIcon:g,getHover:c,getVisited:e,getIconState:a,setIcon:d,setIconState:h}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("atlas-svg-icons",["util-env"],function(a){function b(){if(a.get("action")=="hotel"&&!a.get("tdot")&&!a.get("isMsie")){B.track.stage("ebcBUECAFSDPOHO",3)
}var c=this;
c.setIcon("geosearch_place",{w:28,h:25,x:600,y:100,z:2000});
c.setIcon("hotel_current",{w:22,h:38,x:400,y:0,z:1000});
c.setIcon("hotel_soldout_current",{w:22,h:38,x:400,y:50,z:1010});
if((!B.atlas.assert.tdot&&(B.atlas.assert.sr||B.atlas.assert.hp))||B.atlas.getVariant("eGfEWJcEbOMFcPREFHT")||B.atlas.getVariant("eGBUMbfWEYcZbMKJZKe")){c.setIcon("city",{w:23,h:21,x:600,y:0});
c.setIcon("city_current",{w:30,h:25,x:600,y:50})
}if(!a.get("tdot")&&a.get("hasValidDates")&&a.get("action")==="hotel"){c.setIcon("hotel_soldout",{x:0,y:50});
c.setIcon("hotel",{x:0,y:100})
}if(B.atlas.getVariant("eGBUZUabBTRSOIfREFcdHPSYZeKe")===2){c.setIcon("hotel_comp_set",{x:0,y:300,z:451})
}if(B.atlas.getVariant("ebcBUBaTaeLcPC")===1){c.setIcon("photo_list",{w:20,h:20,x:600,y:250})
}if(B.atlas.getVariant("eGBUPfBfRXQDXPdRe")===1){c.setIcon("hotel_soldout",{x:0,y:250});
c.setIcon("hotel",{x:0,y:0})
}}return{init:b}
})
});
$(function(){var a=["util-env","util-array"];
if(!B.atlas){return
}if(B.atlas.getVariant("ebcBUcSPWYNHICTEZWDTPcHe")||B.atlas.getVariant("ebcOQQTDCPZRVMUPSCMeDQWe")){a.push("best-areas-poly")
}B.atlas.define("atlas-common-markers",a,function(q,u,g){var k,s=q.get("destinationId"),t=false,e=100,l=null,i=false,m=q.get("isMiniIWLandingPages"),d=q.get("isMiniIW");
function c(A,M,z){var N,J,K=35,H=56,C=5,L=27,I=this.ubber.$domNode,G={w:I.width(),h:I.height()},D={w:A.outerWidth(),h:A.outerHeight()};
H=(H>G.w-z.x-C)?C:H;
if((D.w+C+H>G.w)){D.w=G.w-C-H;
A.find(".iw-container").css({"max-width":D.w})
}N=z.x-C-D.w/2;
if((B.atlas.getVariant("ebcOQPBRYUSPdHcPdDCRe")||B.atlas.getVariant("ebcBUYSaBTbYFYdEFPWHT"))&&(!/^(city|airport)/.test(this.config.type)||(B.atlas.getVariant("VOGOLNWPSeCXYfZNKe")&&this.config.type!="landmark"))){var F={left:12,top:0};
N=z.x-C+F.left;
N=(N+D.w+C>G.w)?G.w-D.w-C-H-F.left:N;
N=(N-H<3)?3:N;
J=(z.y+D.h>G.h-K)?z.y-D.h-L-F.top:z.y+F.top
}else{N=(N+D.w+C>G.w)?G.w-D.w-C-H:N;
N=(N-H<3)?3:N;
J=(z.y+D.h>G.h-K)?z.y-D.h-L:z.y
}if(B.atlas.getVariant("ebcYSaBfBFDae")){var E=K,O=this.config.iwType||"";
L=O&&this.ubber.ICONS[O]?this.ubber.ICONS[O].h:L;
J=(z.y-D.h<E)?z.y:z.y-D.h-L
}return{x:N,y:J}
}function j(x){x.setIW({disablePan:true,className:"iw-overlay-lp",engine:"html",getPosition:c,isFixed:true})
}function f(A,x){if(x&&x.data&&x.data.b_id&&x.data.b_basic_type){var y={};
if(B.atlas.getVariant("ebcYSaBfBFDae")){var z=x.data.b_basic_type;
if(x.data.b_id===s){z+="-current"
}y.className="iw-overlay-lp iw-overlay-"+z;
y.iwType=z.replace(/-/g,"_");
A.setIW(y)
}else{y.className="iw-overlay-lp iw-overlay-"+x.data.b_basic_type+((x.data.b_id===s)?"-current":"")
}A.setIW(y)
}}function r(){var x=this;
x.getMarkers(function(z){var C=q.get("action"),D,y,A;
z=z||{};
if(B.atlas.getVariant("ebcTGPbfRdcDBMdeObC")){z=x.enforceDataFormat(z,function(E){if(/^hotel/.test(E.b_type)){E.b_states.overlay=true
}})
}else{z=x.enforceDataFormat(z)
}y=[].concat(z.b_hotels||[],z.b_cities||[],z.b_airports||[]);
if(B.atlas.getVariant("VOGOLNWPSeCXYfZNKe")){y=z.b_current_landmark?y.concat(z.b_current_landmark):y;
y=z.b_place?y.concat(z.b_place):y
}A=y.length;
if(C==="searchresults"||C==="hotel"||B.atlas.getVariant("ebcMMECAFWTYcUNC")||q.get("isLP")&&C!=="city"){B.atlas.require(["map-markers-disperse"],function(E){if(B.atlas.getVariant("ebcTGPbfRdcDBMdeObC")){E.initialize(y,x,s,{top:0,left:-9,bottom:0,right:-9})
}else{E.initialize(y,x,s)
}});
if(B.atlas.getVariant("ebcBUcSPWYNHICTEZWDTPcHe")||B.atlas.getVariant("ebcOQQTDCPZRVMUPSCMeDQWe")){g.addPolygon.call(x,z.b_best_location_score_districts)
}}else{x.updateMarkers(y);
if(s){while(A--){D=y[A];
if(D&&s===D.b_id){if(!B.atlas.assert.tdot&&B.atlas.assert.hp&&!B.atlas.getVariant("ebcBUHSCQWXXTTWEYcZbMKSGHRIcUZC")){x.setMarkerOptions(D.b_id,{cursor:"default"})
}x.setMarkerType(D.b_id,D.b_marker_type+"_current");
break
}}}}});
x.closeIW()
}function b(x){var z=this;
var y=B.atlas.getVariant("ebcBUYWbMDceASAcCWOMKSGbEC")||B.atlas.getVariant("ebcOQPIFdOQUbBbLOIBECBLFHO");
if(k){clearTimeout(k)
}k=setTimeout(function(){z.setIconHover(x.id);
z.trigger("marker-hover-triggered",x);
if(y){z.set("hoverMarker",x.id)
}if(x.type==="geosearch_place"&&x.data){z.setIW({className:"iw-overlay-lp iw-overlay-geosearch-place"});
z.openIW(x.id,x.data.data)
}else{if(/^(city|airport)/.test(x.type)||(B.atlas.getVariant("fEJMSeCXeLfHHHYbNKe")&&x.type=="landmark")||(B.atlas.getVariant("VOGOLNWPSeCXYfZNKe")&&x.type=="landmark")){if(d||m){if(l!==x.id){if(l){z.setIconOut(l);
z.closeIW()
}f(z,x);
x.data.b_is_current=(x.id||x.data.b_id)===s;
z.openIW(x.id,{},B.jstmpl("atlas_iw_mini_landmark").render(p(x.data)))
}}else{z.openIWLoading(x.id);
f(z,x);
z.openIW(x.id,x.data)
}}else{if(d||m){if(l!==x.id){if(l){z.setIconOut(l);
z.closeIW()
}f(z,x);
z.openIWLoading(x.id,B.jstmpl("atlas_iw_mini_loading").render({}));
z.getIW(x.id,function(C){if(y&&z.get("hoverMarker")!=C.b_id){return
}if(s==x.id){z.set("currentHotel",C)
}else{C.b_destination_reference=z.get("currentHotel")
}C.b_basic_type=(x.data)?x.data.b_basic_type:"";
C.b_map_nights=q.get("checkinCheckoutInterval");
C.map_price_per_x_nights_txt=q.get("transPricePerXNights");
z.trigger("cheap-price");
if(B.atlas.getVariant("ebcBUMKTIGSOJFDZSIWe")||B.atlas.getVariant("ebcOLEIUVQBTAdOSBAC")){var A=B.atlas.require("cheapest-price");
C.b_is_cheapest=A.isCheaper(C)
}z.openIW(x.id,{},B.jstmpl("atlas_iw_mini").render(C));
if(B.atlas.getVariant("ebcYSaBHCMYQGCIBTAcHe")){x.data.b_states.b_is_loaded=true
}})
}}else{z.openIWLoading(x.id);
z.getIW(x.id,function(A){if(y&&z.get("hoverMarker")!=A.b_id){return
}A.b_basic_type=(x.data)?x.data.b_basic_type:"";
A.b_map_nights=q.get("checkinCheckoutInterval");
A.map_price_per_x_nights_txt=q.get("transPricePerXNights");
f(z,x);
z.openIW(x.id,A);
if(B.atlas.getVariant("ebcYSaBHCMYQGCIBTAcHe")){x.b_states.data.b_is_loaded=true
}})
}}}},e)
}function v(x){var y=this;
if(k){clearTimeout(k)
}if(!(d||m)){y.setIconOut(x.id)
}if(d||m){if(l!==x.id){y.setIconOut(x.id);
y.setIW({className:"iw-overlay-lp"});
y.closeIW()
}}else{y.setIW({className:"iw-overlay-lp"});
y.closeIW()
}}function o(y){var A=this,x=A.getMarker(y.id),z=(x&&x.b_url)?x.b_url:"";
if(/^hotel.*/.test(x.data.b_type)){this.trigger("hotel-marker-click")
}if(B.atlas.getVariant("fEJMSeCXeLfHHHYbNKe")&&x.data&&x.data.b_type=="landmark"&&x.data.b_url){return window.location=x.data.b_url
}if(x&&x.data&&((/^hotel.*/.test(x.data.b_type)&&(B.atlas.getVariant("eGBUYSaBNHTXT")||B.atlas.getVariant("ebcfESAcCSBCHC")||B.atlas.getVariant("eGOQPBRNZRUXe")))||(/^city.*/.test(x.data.b_type)&&B.atlas.getVariant("ebcYSaBaUSBCHC")==2))){if(d||m){A.set("hoverMarker","");
A.trigger("mini-iw-close-on-marker-click")
}return
}if(x.b_type==="geosearch_place"){return false
}if(x&&x.data&&x.data.b_id===s&&x.data.b_type==="city"&&B.atlas.getVariant("eGYSaBHRXOSLTfdJdHPSYSbC")){return false
}if(d||m){A.on("iw-close",function(){if(l){A.setIconOut(l);
l=null
}});
if(l){A.setIconOut(l)
}l=x.b_id;
A.openIWLoading(x.b_id);
A.setIconHover(x.b_id);
if(/^(city|airport)/.test(x.b_type)||(B.atlas.getVariant("VOGOLNWPSeCXYfZNKe")&&x.b_type=="landmark")){f(A,x);
x.data.b_is_current=(x.id||x.data.b_id)===s;
A.openIW(x.b_id,{},B.jstmpl("atlas_iw_landmark").render(p(x.data)));
A.trigger("iw-opened-click",{marker:x,data:x.data})
}else{A.getIW(x.b_id,function(C){C.b_map_nights=q.get("checkinCheckoutInterval");
C.map_price_per_x_nights_txt=q.get("transPricePerXNights");
C.b_url=x.data.b_url;
C.b_basic_type=x.data.b_basic_type;
f(A,x);
A.openIW(x.b_id,C);
A.trigger("iw-opened-click",{marker:x,data:C})
})
}}else{if(z&&!(x.data.b_id===s&&(!B.atlas.assert.tdot&&B.atlas.assert.hp))){location.assign(z)
}}}function w(x){var y=this;
if(d||m){if(B.atlas.getVariant("ebcBUYWbMDceASAcCWOMKSGbEC")===1||B.atlas.getVariant("ebcOQPIFdOQUbBbLOIBECBLFHO")===1){if(k){clearTimeout(k)
}if(l!==x.b_id){y.setIconOut(x.b_id);
y.setIW({className:"iw-overlay-lp"});
y.closeIW()
}}}}function h(E,z){var C=this,x=C.getMarker(z),y,A=3000;
if(B.atlas.getVariant("eGTNVIdEaUDPNcQLCHT")){var D=z,F=B.atlas.require("atlas-common-overlay");
z=F.getCurrentHotelId();
if(z){z=z
}else{z=D
}}if(!z){return
}if(!x&&!t){t=true;
return C.once("markers-show",h,z)
}if(B.atlas.getVariant("eGTNVIdEaUDPNcQLCHT")){t=false
}if(!q.get("tdot")&&q.get("action")=="searchresults"){if(!x){return
}}else{if(!x||(x&&x.b_type&&(/^(city|airport)/.test(x.b_type)||(B.atlas.getVariant("VOGOLNWPSeCXYfZNKe")&&x.b_type=="landmark")))){return
}}if(q.get("action")=="hotel"){y=function(){h.call(C,E,z,true);
C.isBoundChangeAutoopen=false
};
C.isBoundChangeAutoopen&&C.once("bounds-change",y);
C.isBoundChangeAutoopen=false
}t=false;
if(!(B.atlas.getVariant("eGBUYSaBNHTXT")||B.atlas.getVariant("ebcfESAcCSBCHC")||B.atlas.getVariant("eGOQPBRNZRUXe"))){C.openIWLoading(z)
}if(typeof C.setIconHover==="function"){window.setTimeout(function(){C.setIconHover(z)
},0)
}if(!q.get("tdot")&&q.get("action")=="searchresults"&&(/^(city|airport)/.test(x.b_type)||(B.atlas.getVariant("VOGOLNWPSeCXYfZNKe")&&x.b_type=="landmark"))){f(C,x);
x.data.b_is_current=(x.id||x.data.b_id)===s;
if(/^city.*/.test(x.data.b_type)&&B.atlas.getVariant("ebcYSaBaUSBCHC")==2){window.setTimeout(function(){C.trigger("autoopen-fixed-iw");
C.trigger("iw-control-show",{markerId:z,data:x.data})
},0)
}else{C.openIW(x.b_id,{},B.jstmpl("atlas_iw_landmark").render(p(x.data)))
}C.trigger("iw-opened-click",{marker:x,data:x.data});
return
}C.getIW(z,function(G){G.b_basic_type=(x.data)?x.data.b_basic_type:"";
G.b_map_nights=q.get("checkinCheckoutInterval");
G.map_price_per_x_nights_txt=q.get("transPricePerXNights");
if(s==z){C.set("currentHotel",G)
}f(C,x);
if((B.atlas.getVariant("eGBUYSaBNHTXT")||B.atlas.getVariant("ebcfESAcCSBCHC")||B.atlas.getVariant("eGOQPBRNZRUXe"))&&/hotel.*/.test(x.data.b_type)){window.setTimeout(function(){C.trigger("autoopen-fixed-iw",G);
C.trigger("iw-control-show",{markerId:z,data:x.data});
C.trigger("cheap-price");
if(B.atlas.getVariant("ebcBUMKTIGSOJFDZSIWe")||B.atlas.getVariant("ebcOLEIUVQBTAdOSBAC")){var H=B.atlas.require("cheapest-price");
G.b_is_cheapest=H.isCheaper(x.data)
}},0)
}else{C.openIW(z,G)
}if(q.get("action")==="hotel"){A=4000
}k=setTimeout(function(){C.closeIW()
},A)
})
}function n(y){try{i=(window.localStorage&&window.sessionStorage?true:false);
if(i){window.localStorage.setItem("btest","1")
}}catch(x){i=false
}if(i){y.on("load",function(){y.trigger("load-dom-storage-supported")
})
}j(y);
y.on("bounds-change",r,y);
y.on("marker-hover",b);
y.on("marker-out",v);
y.on("marker-click",o);
y.on("close",y.closeIW);
y.on("open",h,s);
y.on("fixed-iw-open",w);
y.on("marker-hover-triggered",function(z){if(s==z.id&&/^hotel/.test(z.type)){y.trigger("current-property-marker-hover")
}});
y.on("marker-click",function(z){if(s==z.id&&/^hotel/.test(z.type)){B.track.custom_goal("ebcBUHSCQWXXTTWEYcZbMKSGHRIcUZC",1)
}});
B.atlas.SUBSCRIPTIONS["marker-iw-inconsistent-group"].forEach(function(z){if(z.cond){y.on("marker-hover",function(C){var E=/^hotel/.test(C.type),A=/soldout/.test(C.type);
if(!E){return
}B.track.stage(z.name,1);
if(!A){y.once("iw-get-success",D)
}function D(H){var G,F;
var I;
if(H&&H.b_hotels&&H.b_hotels[C.id]){I=H.b_hotels[C.id];
F=(I.can_accommodate_group==false);
if(F){y.trigger("marker-iw-inconsistent-group")
}}}})
}});
B.atlas.SUBSCRIPTIONS["marker-iw-inconsistent-non-group"].forEach(function(z){if(z.cond){y.on("marker-hover",function(C){var E=/^hotel/.test(C.type),A=/soldout/.test(C.type);
if(!E){return
}B.track.stage(z.name,1);
if(!A){y.once("iw-get-success",D)
}function D(H){var G,F;
var I;
if(H&&H.b_hotels&&H.b_hotels[C.id]){I=H.b_hotels[C.id];
G=I.soldout;
if(G){y.trigger("marker-iw-inconsistent-non-group")
}}}})
}});
y.once("load",function(){var z="ebcTGPbfRdcDBMdeObC";
if(q.get("action")==="hotel"){B.track.stage(z,2)
}else{if(q.get("isLP")){B.track.stage(z,3)
}else{if(q.get("action")==="searchresults"){B.track.stage(z,4)
}}}if(q.get("hasValidDates")){B.track.stage(z,5)
}else{B.track.stage(z,6)
}});
if(d||m){$("body").delegate("#marker_close","click",function(){y.closeIW()
})
}}function p(y){if(B.atlas.getVariant("ebcBUaUDGDGae")){var x=$.extend({},y);
x.b_basic_type=x.b_basic_type.replace(/\_current/g,"");
return x
}else{return y
}}return{init:n,setupIW:j,autoopenIW:h,getIWPosition:c,markerHover:b,markerOut:v,markerClick:o,boundsChange:r}
})
});
$(function(){if(!B.atlas){return
}var a=["jQuery","pubsub","util-env"];
if(B.atlas.getVariant("ebcBUVKfLPaacXO")){a.push("pin-favicon")
}B.atlas.define("atlas-common-overlay",a,function(j,g,w,l,m){var u=".show_map",z="#close_map_lightbox, #close_map, #b_map_back_link",d="#b_map_tiles",y="#b_map_container",A="map_opened",i=new g(),D=B.env,t=(D.b_browser==="msie"&&D.b_browser_version<8),n=D.b_map_center_latitude||D.b_latitude,F=D.b_map_center_longitude||D.b_longitude,c=D.b_map_google_static_thumbnail_zoom_level||14,x=j(y),b=window.location,h=false;
function o(K){var H={},G=j("#"+K),J=G.data("bbox")||D.b_map_bbox,I=G.data("coords");
if(J){I=J.split(",");
H.boundingBox={sw:[I[1],I[0]],ne:[I[3],I[2]]}
}else{if(typeof I==="string"){I=I.split(",");
H={center:[I[1],I[0]],zoom:parseInt(G.data("zoom")||G.attr("rel")||c,10),boundingBox:null}
}else{if(w.get("defaultBoundingBox")){I=w.get("defaultBoundingBox").split(",");
H.boundingBox={sw:[I[0],I[1]],ne:[I[2],I[3]]}
}else{if(D.b_map_google_bounding_box){I=B.env.b_map_google_bounding_box.split(",");
H.boundingBox={sw:[I[1],I[0]],ne:[I[3],I[2]]}
}else{H={center:[n,F],zoom:parseInt(c,10),boundingBox:null}
}}}}return H
}function E(){var G={height:x.height()};
j(d).css(G)
}function p(){var M,K=new RegExp("(?:"+A+"-)(.+)","i"),I=K.exec(b.hash),H={center:[n,F],zoom:c},G=j(window).scrollTop(),J=50,L;
h=false;
if(I&&I.length===2){H=o(I[1]);
if(B.atlas.getVariant("eGTNVIdEaUDPNcQLCHT")){h=I[1].replace("show_id","")
}}else{if(D.b_map_bbox){M=D.b_map_bbox.split(",");
H.boundingBox={sw:[M[1],M[0]],ne:[M[3],M[2]]}
}}if(t){setTimeout(E,0)
}if(!B.atlas.assert.tdot&&B.env.b_action=="hotel"){x.addClass("b_map_container_fixed").css({top:B.atlas.getVariant("ebcBUeHdZBJJGOaT")?30:J,bottom:30,left:B.atlas.getVariant("ebcBUdfYOdQXSJVITXbbFFXbEIdAJOBYKe")?30:m})
}else{if(B.atlas.getVariant("ebcOLcDHBZGKTVaVUXFSdEXFHVcbVBNHC")||B.atlas.getVariant("ebcfEDGTKZdaAYWXDHIcNQRIZXDfEWZSXT")){J=30;
L=30
}x.css({top:J+G,bottom:30-G,left:L})
}if(I!==null&&I[1]){H.centralPolygonCoords=j("#"+I[1]).data("centralPolygon")||""
}else{H.centralPolygonCoords=""
}x.show();
if(B.atlas.getVariant("ebcBUVKfLPaacXO")){l.addPin()
}i.trigger("open",H);
if(B.atlas.getVariant("ebcBUYWbMDcFGcVYaBEFHO")||B.atlas.getVariant("ebcOQPIFdOQEQLfHRYPdRT")){j("body").on("click",e)
}}function s(){if(B.atlas.getVariant("ebcBUVKfLPaacXO")){l.removePin()
}x.hide();
if(B.atlas.getVariant("ebcBUYWbMDcFGcVYaBEFHO")||B.atlas.getVariant("ebcOQPIFdOQEQLfHRYPdRT")){j("body").off("click",e)
}i.trigger("close")
}function e(G){if(j(G.target).closest(x).length==0){if(w.get("action")=="hotel"){B.track.custom_goal("ebcBUYWbMDcFGcVYaBEFHO",1)
}else{if(w.get("action")=="searchresults"){B.track.custom_goal("ebcOQPIFdOQEQLfHRYPdRT",1)
}else{if(w.get("isLP")){B.track.custom_goal("ebcfESVGPLUQJFWOICDAFKe",1)
}}}r(false)
}}function r(G){b.hash=G||"map_closed";
if(typeof window.onhashchange===m){return(G)?p():s()
}}function C(G){var H=j(this).attr("id");
G.preventDefault();
G.stopPropagation();
if(B.atlas.assert.sr){B.track.goal("atlas_sr_open_click")
}else{if(B.atlas.assert.hp){B.track.goal("atlas_hp_open_click")
}else{if(B.atlas.assert.lp){B.track.goal("atlas_lp_open_click")
}}}r((H)?A+"-"+H:A)
}function k(){if(w.get("action")=="hotel"){B.track.custom_goal("ebcBUYWbMDcFGcVYaBEFHO",2)
}else{if(w.get("action")=="searchresults"){B.track.custom_goal("ebcOQPIFdOQEQLfHRYPdRT",2)
}else{if(w.get("isLP")){B.track.custom_goal("ebcfESVGPLUQJFWOICDAFKe",2)
}}}r(false)
}function q(G){if(B.atlas.getVariant("ebcOLJMMZIeDNabNfQHO")){j(document).on("click",u,function(){var H=j(this);
var I=H.data("source");
G.trigger("map-open",I)
}).on("click",z,function(){G.trigger("map-close","button")
})
}else{j(u).bind("click",function(){var H=j(this);
var I=H.data("source");
G.trigger("map-open",I)
});
j(z).bind("click",function(){G.trigger("map-close","button")
})
}j(document).keyup(function(H){if(H.which===27){G.trigger("map-close","esc")
}});
if(/[;?&]+map=1/gi.test(b.search)){G.trigger("map-open","param")
}if(b.hash.indexOf(A)>-1){G.trigger("map-open","hash")
}}function v(){if(B.atlas.getVariant("ebcOLJMMZIeDNabNfQHO")){j(document).on("click",u,C).on("click",z,k)
}else{j(u).bind("click",C);
j(z).bind("click",k)
}j(document).keyup(function(G){if(G.which===27){r()
}});
if(/[;?&]+map=1/gi.test(b.search)){if(B.atlas.assert.hp){B.track.goal("atlas_hp_open_auto")
}else{if(B.atlas.assert.sr){B.track.goal("atlas_sr_open_auto")
}else{if(B.atlas.assert.lp){B.track.goal("atlas_lp_open_auto")
}}}r(A)
}if(b.hash.indexOf(A)>-1){p()
}j(window).bind("hashchange",function(){return(b.hash.indexOf(A)>-1)?p():s()
});
if(t){j(window).bind("resize",E)
}}function f(){return h
}return{addEvents:v,addGAEvents:q,changeHash:r,open:p,close:k,pubSub:i,getCurrentHotelId:f}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("static-iw",["jQuery","geometry.point"],function(d,c){var b={latLng:[0,0],offset:new c(0,0),className:"",closeSelector:".static-iw-close",mapOffset:new c(0,0),mapPadding:0,content:"",disablePan:true,engine:"html",isFixed:false};
function g(h){this.OPTIONS.content=h||this.OPTIONS.content;
this.iwInstance.open(this.OPTIONS)
}function f(i){var h=this.iwInstance.$domNode;
if(h){h.addClass(i)
}else{this.iwInstance.config.className=i
}}function e(i){var h=this.iwInstance.$domNode;
if(h){h.removeClass(i)
}else{this.iwInstance.config.className=""
}}function a(i){var j=this;
function h(k){var l=d.extend({},b,k);
this.OPTIONS=l;
this.iwInstance=new j.Interface.IW(l,j)
}h.prototype.openIW=g;
h.prototype.setClass=f;
h.prototype.unsetClass=e;
return new h(i)
}return{createStaticIW:a}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("center-on-resize",function(a){function b(){var c=this.getCenter();
this.resize();
this.setCenter(c)
}return{resizeCenter:b}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("central-district-polygon",["jQuery","util-env","geo.bounds"],function(d,c,b){function a(e){this.options=d.extend({},e||{});
var g=this;
this.map=this.options.map;
this.paths=[];
function f(){var h=g.map.get("centralPolygonCoords");
if(h){g.setPaths(h);
g.showPolygon(true)
}else{g.removePolygon()
}}this.map.done(f);
this.map.on("open",f)
}d.extend(a.prototype,{showPolygon:function(f){if(this.polygon&&f!==true){return
}this.removePolygon();
if(!this.paths||!this.paths.length){return
}this.polygon=this.map.createPolygon({clickable:false,fillColor:"#0896FF",fillOpacity:0.07,strokeColor:"#003580",strokeOpacity:0.8,strokeWeight:2,paths:this.paths});
var e=new b();
d.each(this.paths,function(g,h){e.extend(h)
});
if(this.map.setBounds){this.map.setBounds(e)
}},removePolygon:function(){if(this.polygon&&this.polygon.remove){this.polygon.remove();
this.polygon=null
}},setPaths:function(h){var k=h.split(","),g=[],j,e;
for(var f=0;
f<k.length;
f=f+2){j=parseFloat(k[f]);
e=parseFloat(k[f+1]);
if(!isNaN(j)&&!isNaN(e)){g.push([j,e])
}}this.paths=g
}});
return a
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("bounding-box-onclose",["jQuery"],function(b){function a(d){var c;
d.once("load",function(){c=d.getBoundingBox();
if(c){c=[c.SW,c.NE]
}});
d.on("close",function(){var e=d.getBoundingBox();
if(e){e=[e.SW,e.NE]
}if(typeof c=="object"&&c[0]&&typeof e=="object"&&e[0]){if((c[0][0]!=e[0][0])||(c[0][1]!=e[0][1])){d.isBoundChangeAutoopen=true
}}})
}return a
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("util-mvcobject",function(){function b(g){var f=this;
f.attributes=g||{};
if(f.initialize){f.initialize.apply(f,arguments)
}}var c=/[^\s]+/g,e=function(k){var j=Array.prototype.slice.call(arguments,1);
for(var h=0;
h<j.length;
h++){var f=j[h];
for(var g in f){k[g]=f[g]
}}},a={handlers:{},on:function(g,h){var f=this;
g.replace(c,function(i){(f.handlers[i]=f.handlers[i]||[]).push(h)
});
return f
},off:function(g,h){var f=this;
g.replace(c,function(i){f.handlers[i]=(f.handlers[i]||[]).map(function(j){return h&&j!==h
})
});
return f
},one:function(i,h){var f=this;
function g(){h.apply(f.off(i,g),arguments)
}return f.on(i,g)
},trigger:function(k){var g=this,f=g.handlers[k]||[];
for(var h=0,j=f[h];
j;
++h){j.apply(g,arguments)
}return g
}},d={set:function(h,i){var f=this,g=f.attributes[h];
f.attributes[h]=i;
f.trigger("change:"+h,i,g);
return f
},get:function(g){var f=this;
return f.attributes[g]
}};
e(b.prototype,a,d);
b.extend=function(g){var f=this,h=function(){return f.apply(this,arguments)
},i=function(){this.constructor=h
};
i.prototype=f.prototype;
h.prototype=new i();
e(h.prototype,g);
h.extend=f.extend;
return h
};
return b
})
});
(function(){var b="YdAULNYeNTAC";
function a(){if(!B.atlas||!B.atlas.define){return
}B.atlas.define("poi-search",["jQuery","util-env","geo.bounds"],function(g,f,d){function e(h){this.options=g.extend({updateOnBoundsChange:false,searchByRadius:true,animateMarkers:true,hideIwOnMouseout:false,requestPointDetails:true,requestPointRoute:true,optimalZoomLevel:13,maxRequestsNum:1,maxPlacesPerCollection:40,radius:4000},h||{});
this.map=this.options.map;
this.searchNum=0;
if(!this.map){return
}this.placesInstances={};
this.ITEM_CLASS="atlas_poi_menu--item";
this.ITEM_ACTIVE_CLASS="is-active";
this.isSearching=false;
this.isMuted=false;
this.renderTimers=[];
this.iw=null;
this.collections=[{id:"todo",title:"Click to see landmarks nearby",tags:("amusement_park,aquarium,church,city_hall,park,zoo,point_of_interest,museum").split(","),marker:{icon:{url:"//r-ec.bstatic.com/static/img/map/map_marker_poi/f33e8fa5311c7cff5d906353daa5370bd443cff3.png",w:25,h:25,x:25,y:0,z:1}}}];
this.openedPlace=null;
this.places=[];
this.init()
}e.prototype.init=function(){var h=this;
this.map.done(function(){h.renderUi()
});
this.map.on("markers-dispersed",function(i){if(h.isMuted){h.muteHotelMarkers(i)
}})
};
e.prototype.renderUi=function(){if(!this.map.$domNode){return
}var h=this;
this.$menu=g(B.jstmpl("atlas_poi_menu").render({collections:h.collections})).on("click",".atlas_poi_menu--check",function(){B.track.custom_goal(b,1);
h.toggleCollection(g(this).closest(".atlas_poi_menu--item").data("item"))
}).appendTo(this.map.$domNode)
};
e.prototype.isPlaceOpened=function(h){return this.openedPlace&&h.id&&h.id==this.openedPlace.id
};
e.prototype.searchCollectionPlaces=function(h){if(this.isSearching){return
}var l=this,j=this.getCollectionById(h),m,k=this.map.getMarker(f.get("destinationId")),p={},n,i;
if(!j){return
}this.isSearching=true;
this.searchNum++;
n=this.searchNum;
p.types=j.tags;
if(B.env.b_lang){p.language=B.env.b_lang
}this.stopAnimation();
if(k&&this.options.searchByRadius){p.location=[k.b_latitude,k.b_longitude];
p.radius=this.options.radius;
i=true
}else{m=l.map.getBoundingBox();
p.bounds=new d(m.SW,m.NE)
}if(i&&j.placesCache){o(j.placesCache)
}else{this.map.searchPlaces(p,function(r,q){if(n!==l.searchNum||!j.isActive){return
}B.track.custom_goal(b,2);
if(r&&r.length&&r.length<10){B.track.custom_goal(b,3)
}o(r,q);
if(i){j.placesCache=(j.placesCache||[]).concat(r)
}if(l.options.maxRequestsNum>1&&q&&q.nextPage&&j.places.length<l.options.maxPlacesPerCollection){q.nextPage()
}})
}function o(q){g.each(q,function(){this.set("poiCollection",j)
});
j.places=(j.places||[]).concat(q);
l.muteHotelMarkers();
l.putPlacesOnMap(q,{},function(){l.isSearching=false
})
}};
e.prototype.putPlacesOnMap=function(i,h,k){var j=this;
h=h||{};
if(this.map.getZoom()>this.options.optimalZoomLevel){this.map.setZoom(this.options.optimalZoomLevel)
}g.each(i,function(n,l){var m=l.getMarkerConfig(),p,q=n==i.length-1,o=function(){var r=l.get("poiCollection");
if(r){l.render(r.marker||{})
}if(q){k&&k()
}};
m.b_type=m.b_marker_type="poi";
m.b_name=m.data.b_name=m.data.name;
if(j.options.animateMarkers&&!h.quite){j.renderTimers.push(setTimeout(o,n*15))
}else{o()
}p=j.getPlaceInstance(l);
j.placesInstances[p.id]=p;
j.places.push(l)
})
};
e.prototype.setHotelMarkersOptions=function(h,k){var i=this,j=f.get("destinationId");
k=k||i.map.getActiveMarkers();
g.each(k,function(n,l){if(l.b_id&&(l.b_type!=="city")&&l.b_id!=j){i.map.setMarkerOptions(l.b_id,h)
}})
};
e.prototype.muteHotelMarkers=function(h){if(this.isMuted&&!h){return
}this.setHotelMarkersOptions({visible:false},h);
this.isMuted=true
};
e.prototype.unMuteHotelMarkers=function(h){this.setHotelMarkersOptions({visible:true},h);
this.isMuted=false
};
e.prototype.stopAnimation=function(){while(this.renderTimers.length){clearTimeout(this.renderTimers.shift())
}};
e.prototype.openIW=function(h){if(this.iw){this.iw.close();
this.iw.remove()
}this.iw=new this.map.Interface.IW(h,this.map);
return this.iw
};
e.prototype.closeIW=function(){if(this.iw){this.iw.close();
this.iw.remove();
this.iw=null
}this.openedPlace=null
};
e.prototype.hideCollection=function(i){var h=this.getCollectionById(i);
if(!h){return
}if(h.places){while(h.places.length){h.places.shift().remove()
}}h.isActive=false;
this.$menu.find(">."+this.ITEM_CLASS+'[data-item="'+i+'"]').removeClass(this.ITEM_ACTIVE_CLASS).find(".atlas_poi_menu--check").prop("checked",false);
if(!this.getActiveCollectionsNum()){this.unMuteHotelMarkers();
this.closeIW()
}};
e.prototype.toggleCollection=function(h){if(this.isSearching){return
}if(this.isCollectionActive(h)){this.hideCollection(h)
}else{this.showCollection(h)
}};
e.prototype.showCollection=function(i){var h=this.getCollectionById(i);
if(!h){return
}h.isActive=true;
if(this.$menu){this.$menu.find(">."+this.ITEM_CLASS+'[data-item="'+i+'"]').addClass(this.ITEM_ACTIVE_CLASS).find(".atlas_poi_menu--check").prop("checked",true)
}if(this.map.closeIW){this.map.closeIW()
}g(".js-iw-control #marker_close").trigger("click");
this.searchCollectionPlaces(i)
};
e.prototype.isCollectionActive=function(i){var h=this.getCollectionById(i);
return h&&h.isActive
};
e.prototype.getCollectionById=function(i){var h=null;
g.each(this.collections,function(){if(i===this.id){h=this;
return false
}});
return h
};
e.prototype.getActiveCollectionsNum=function(){var h=0;
g.each(this.collections,function(){if(this.isActive){h++
}});
return h
};
e.prototype.getPlaceInstance=function(h){var j=this,k=h.get("id"),i;
if(k&&this.placesInstances[k]){i=this.placesInstances[k];
i.refresh(h)
}else{i=new c(h,this,{onOpen:function(){j.openedPlace=this
}});
this.placesInstances[i.id]=i
}return i
};
function c(h,j,i){var k=h.get();
this.ps=j;
this.details={collection:h.get("poiCollection")};
this.details.type=k.type;
this.details.typeHtml=B.jstmpl("atlas_poi_type").render({type:k.type});
this.markerConfig=h.getMarkerConfig();
this.baseIwOptions={disablePan:true,className:"atlas_poi_iw_wrap",closeSelector:".atlas_poi_iw--close",latLng:[this.markerConfig.b_latitude,this.markerConfig.b_longitude],maxWidth:300,offset:{x:0,y:3},zIndex:10000};
this.isExpanded=false;
this.id=h.get("id")||("rnd_"+Math.random());
this.options=g.extend({onOpen:function(){}},i||{});
this.refresh(h)
}g.extend(c.prototype,{refresh:function(h){var i=this;
if(this.place===h){return
}if(this.place){this.place.off("mouseover click mouseout")
}this.place=h;
this.place.on("mouseover",g.proxy(this.openShort,this));
this.place.on("click",g.proxy(this.openExpanded,this));
this.place.on("mouseout",function(){if(!i.isExpanded){i.close()
}})
},isOpened:function(){return this.ps.isPlaceOpened(this)
},openShort:function(){if(this.isOpened()){return
}var l=this;
this.isExpanded=false;
var i=this.place.getMarkerConfig(),j=B.jstmpl("atlas_poi_iw_short").render({name:i.data.name,type:this.details.type,typeHtml:this.details.typeHtml,collectionId:this.details.collection?this.details.collection.id:""}),k=g.extend({},this.baseIwOptions,{content:j}),h;
h=this.ps.openIW(k);
h.draw();
if(h.$domNode){h.$domNode.off(".poiEvent").on("mousedown.poiEvent",function(){l.openExpanded()
})
}this.options.onOpen.apply(this);
B.track.custom_goal(b,4)
},_renderExpanded:function(){if(!this.isOpened()){return
}var h=this.place.getMarkerConfig(),k=this.place.get(),l=this.place.getImage({width:200,height:200}),i=B.jstmpl("atlas_poi_iw_full").render({name:h.data.name,type:this.details.type,typeHtml:this.details.typeHtml,collectionId:this.details.collection?this.details.collection.id:"",data:k,direction:this.details.direction,img_url:l.url}),j=g.extend({},this.baseIwOptions,{content:i,maxWidth:300});
this.ps.openIW(j);
B.track.custom_goal(b,5)
},_getDirection:function(l){if(!window.google||!window.google.maps||!window.google.maps.DirectionsService){l&&l();
return
}var h=google.maps,k=new h.DirectionsService(),j=this.ps.map.getMarker(f.get("destinationId")),i=new Date();
i.setDate(i.getDate()+1);
i.setHours(12);
k.route({origin:new h.LatLng(j.b_latitude,j.b_longitude),destination:new h.LatLng(this.markerConfig.b_latitude,this.markerConfig.b_longitude),travelMode:h.TravelMode.TRANSIT,transitOptions:{departureTime:i}},function(o,n){var m;
if(n!=h.DirectionsStatus.OK){l&&l();
return
}if(o.routes&&o.routes[0]&&(m=o.routes[0].legs)&&m[0]){m[0].is_walking_only=m[0].steps&&m[0].steps.length===1&&m[0].steps[0].travel_mode===h.TravelMode.WALKING;
l&&l(m[0])
}})
},openExpanded:function(){if(this.isOpened()&&this.isExpanded){this.close();
return
}var h=this;
this.isExpanded=true;
this.options.onOpen.apply(this);
if(this.ps.options.requestPointRoute){if(this.details.direction){h._renderExpanded()
}else{h.setLoading();
this._getDirection(function(i){h.details.direction=i;
h._renderExpanded()
})
}}},close:function(){this.ps.closeIW();
this.isExpanded=false
},setLoading:function(){if(this.ps.iw&&this.ps.iw.$domNode){this.ps.iw.$domNode.find(".atlas_poi_iw").addClass("atlas_poi_iw--loading")
}}});
return e
})
}booking[sNSExperiments][b]=(function(d,c){return{init:function(){c(a)
}}
})(booking,jQuery)
})();
(function(){var a="HMDOTASKFPIEKeAEGUPdOSBNET";
B.runExp(a).onLoad(function(){var g=4,f=4,b=3.7,h=750,e="hp_nearby_places",m="#hp_nearby_food_drink",i=".hp_nearby_places_content",c=".hp_nearby_places_item_name",l=".hp_nearby_places_item_name-clickable",k=".hp_nearby_places_item_name-unclickable",j="maps_hp_nearby_food_drink_2",d=false;
if(!B.atlas){return
}B.atlas.require(["atlas-places","util-env","geo.projection","geo.latLng"],function(y,z,q,x){var r,D="provider-places",w=["places"],p=$(m).find(i),E={domNode:p.get(0)},C={location:[B.env.b_map_center_latitude,B.env.b_map_center_longitude],rankBy:0,radius:h,types:["restaurant","bar","cafe"],exclude:["lodging"]},o={unit:"m",isImperial:B.env.distance_config&&B.env.distance_config!="metric"},v={hoverTitle:1,clickTitle:2,hoverDisabledTitle:3,clickDisabledTitle:4};
if(z.get("disablePlaces")){return
}B.jstmpl.fn.GEO_GET_PHOTO=function(G,H){var I=(H||"80,80").split(","),F;
if(typeof G!=="function"){return""
}F=G({width:parseInt(I[0],10),height:parseInt(I[1],10)});
return F?F.url:""
};
function t(I,H){var G=B.utils.accounting,F=$.extend({number:I},o);
H=H||{};
H.unit=H.unit||F.unit;
if(!H.hasOwnProperty("precision")){H.precision=1
}G.changeDistanceToMetricUnit(F,H);
F.number=A(F.number);
if(F.isImperial){G.convertDistanceToImperial(F,H)
}return G.formatDistanceNumber(F.number,H)
}function A(F){return Math.round(F/10)*10
}function u(J,H){var F=e+"_row",K=B.jstmpl(j),L=H.get("data"),I,G;
H.renderHTML({className:F+" "+F+"_"+J+" "+F+"_loading ",content:K.render($.extend({},L,{dateFormat:o}))});
I=H.get("$domNode");
if(I){I.undelegate(c,"mouseover.fdplace").delegate(c,"mouseover.fdplace",function(){var M=$(this);
G&&clearTimeout(G);
G=setTimeout(function(){if(M.is(l)){B.track.custom_goal(a,v.hoverTitle)
}else{B.track.custom_goal(a,v.hoverDisabledTitle)
}},300)
}).delegate(c,"mouseout.fdplace",function(){G&&clearTimeout(G)
})
}}function s(I){var J,F=[],K,G,H=new x(B.env.b_map_center_latitude,B.env.b_map_center_longitude);
for(J=0;
J<I.length&&F.length<f;
++J){G=I[J];
K=G.get("data");
if(typeof G.getImage==="function"&&G.getImage()&&K&&K.rating&&K.rating>=b){F.push(G)
}}return F
}function n(H){var G=$(m),F=s(H);
if(F.length>=g){if(B.track.getVariant(a)===2){$.each(F,function(J,I){u(J,I);
if(d){I.getDetails(function(){u(J,I)
})
}});
G.addClass(e+"_available").delegate(l,"click",function(){B.track.custom_goal(a,v.clickTitle)
}).delegate(k,"click",function(){B.track.custom_goal(a,v.clickDisabledTitle)
})
}B.track.onView(m).stage(a,1)
}}r=new y({provider:D,modules:w,options:E});
r.done(function(){r.searchPlaces(C,n)
})
})
})
})();
$(function(){if(!B.atlas){return
}B.atlas.define("add-airport-to-high-zoom",["jQuery","markers-ajax","util-env","geo.projection","geo.latLng"],function(e,f,g,b,d){var i=e.extend({},f,{defaultGetMarkers:f.getMarkers,getMarkers:a});
function h(k){var j=k.Interface?k.Interface.getBoundingBox():k.get("bounds"),l="";
if(j&&j.SW){l=[j.SW[1],j.SW[0],j.NE[1],j.NE[0]].join(",")
}else{if(j&&j.toMOMString){l=j.toMOMString()
}}return l
}function a(n){var m=h(this),k=m.split(","),l=b.getDistance(new d(k[0],k[1]),new d(k[2],k[3]))/1000,j=n;
if(l>1000&&l<1500){this.trigger("markers-get-filter-distance");
j=c(n)
}this.defaultGetMarkers(j)
}function c(j){return function(){var k=Array.prototype.slice.call(arguments);
this.trigger("markers-show-filter-distance");
if(B.atlas.getVariant("ebcNAHBfQUaSHbZFcDaSYeGXT")==2){j.apply(null,k)
}}
}return i
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("maps-qualaroo",["util-env"],function(b){var c=b.get("action"),a=false;
function d(e){this.map=e.map;
switch(c){case"hotel":if(b.get("paramMapSurvey")=="1"){this.initSurvey()
}break;
case"searchresults":this.map.on("close",$.proxy(function(){this.initSurvey()
},this));
break
}}d.prototype.initSurvey=function(){if(a){return
}window.setTimeout(function(){window._kiq.push(["stopNudge"]);
window._kiq.push(["selectNudge"]);
a=true
},1)
};
return d
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("atlas-style",function(){return{setStyle:function(a){if(typeof this.Interface.setStyle==="function"){this.Interface.setStyle(a)
}}}
});
B.atlas.define("styler",function(){function a(b){this.map=b&&b.map;
this.theme=b&&b.theme
}a.prototype={init:function(){this.setRoadmapStyle();
this.bind(this.map)
},bind:function(){var b=this,c=this.map;
c.on("map-type-change",function(){var d=c.getMapType();
if(/satellite|hybrid/.test(d)){b.setSatelliteStyle()
}else{if(/terrain|roadmap/.test(d)){b.setRoadmapStyle()
}}})
},setRoadmapStyle:function(){if(this.theme&&this.theme.roadmap){this.map.setStyle(this.theme.roadmap)
}},setSatelliteStyle:function(){if(this.theme&&this.theme.satellite){this.map.setStyle(this.theme.satellite)
}}};
return a
});
B.atlas.define("styler-theme",["styles-cartography"],function(a){var b;
if(B.atlas.getVariant("ebcAZTDCMfKTUSGGO")==1){b={roadmap:[{featureType:"transit.station.airport",stylers:[{visibility:"off"}]}]}
}if(b&&b.roadmap){b.roadmap=b.roadmap.concat(a.STYLES)
}if(b&&b.satellite){b.satellite=b.satellite.concat(a.STYLES)
}return b
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("map-loader",["jQuery"],function(b){function a(c){this.map=c.map;
this.$wrapper=c.topOverlay.find(".js-maps-loading__wrapper");
this.$loadingBar=c.topOverlay.find(".js-maps-loading__bar");
this.loadingBarDone=b.Deferred();
this.loadingMapDone=b.Deferred();
b.when(this.loadingMapDone,this.loadingBarDone).then(b.proxy(this.hideLoader,this));
this.bindEvents()
}a.prototype.bindEvents=function(){var d=["WebkitAnimationEnd","MSAnimationEnd","animationEnd","animationend"],c=1.8;
this.map.on("idle",this.loadingMapDone.resolve);
if(this.checkAnimation()){this.$loadingBar.on(d.join(" "),this.loadingBarDone.resolve)
}else{window.setTimeout(b.proxy(function(){this.loadingBarDone.resolve()
},this),c*1000)
}};
a.prototype.checkAnimation=function(){var c=false,d,e=["WebkitAnimation","MozAnimation","MSAnimation","animation"];
if(this.$loadingBar.length>0){d=this.$loadingBar[0];
e.forEach(function(f){if(d.style[f]){c=true
}})
}return c
};
a.prototype.hideLoader=function(){var c=this.$wrapper;
c.animate({opacity:0},100,function(){c.css({display:"none"})
})
};
return a
})
});
$(function(){if(!B.atlas){return
}var a=["util-env"];
B.atlas.define("toggle-markers",a,function(d){var f=".js-map-toggle__check",e=d.get("destinationId"),c=true;
function b(g){this.$inpChk=g.topOverlay.find(f);
this.map=g.map;
this.state="show";
this.toggleState();
g.topOverlay.on("change",f,$.proxy(this.toggleSoldoutMarkers,this));
this.map.on("markers-dispersed",$.proxy(this.updateShown,this))
}b.prototype.toggleSoldoutMarkers=function(g){if(c&&B.atlas.getVariant("ebcOQJJYDTJRLXET")){B.track.custom_goal("ebcOQJJYDTJRLXET",1);
c=false
}else{if(c&&B.atlas.getVariant("ebcBUPfBfSPaGXMO")){B.track.custom_goal("ebcBUPfBfSPaGXMO",1);
c=false
}}this.toggleState();
this.updateShown()
};
b.prototype.toggleState=function(){this.state=this.checkState()?"hide":"show"
};
b.prototype.checkState=function(){var g=this.$inpChk.is(":checked");
return g
};
b.prototype.updateShown=function(g){var i=this.map,h=this.state;
if(!this.allMarkers&&!g){return
}if(g){this.allMarkers=g
}this.displayedMarkers=this.allMarkers.filter(function(l){var k=true,j=(l.b_marker_type||l.b_type||"");
if(h=="hide"&&l.b_id!=e&&j.indexOf("soldout")!=-1){k=false
}return k
});
i.setMarkers(this.displayedMarkers)
};
return b
})
});
$(function(){if(!B.atlas||!B.atlas.define){return
}B.atlas.define("map-center-button",["util-env"],function(b){function a(c){this.map=c.map;
this.$el=c.$el;
this.hash=c.hash;
this.clickHotel=c.clickHotel;
this.destId=b.get("destinationId");
this.forceZoom=c.forceZoom;
this.zoom=this.map.getZoom();
this.center=[].concat(this.map.getCenter());
this.openCurrentHotelProxied=$.proxy(this.openCurrentHotel,this);
this.$el.on("click",$.proxy(this.centerMap,this))
}a.prototype.centerMap=function(c){if(this.isCenterChanged()){if(this.clickHotel){this.map.on("bounds-change",this.openCurrentHotelProxied)
}B.track.custom_goal(this.hash,1);
this.map.setCenter(this.center);
this.forceZoom&&this.map.setZoom(this.zoom)
}};
a.prototype.isCenterChanged=function(){var f=this.center,g=this.map.getCenter(),d=!(g[0]==f[0]&&g[1]==f[1]),e=this.zoom,c=this.map.getZoom();
if(this.forceZoom&&!d){d=e!=c
}return d
};
a.prototype.openCurrentHotel=function(){var c=this;
setTimeout(function(){var d=c.map.getMarker(c.destId);
c.map.trigger("marker-click",{id:c.destId,data:d});
c.map.off("bounds-change",c.openCurrentHotelProxied)
},0)
};
return a
})
});
$(function(){if(!B.atlas||!B.atlas.define){return
}var a={};
B.atlas.define("best-areas-poly",["polygons","geo.view","geometry.point","util-env"],function(m,n,l,j){var i={paths:[],clickable:false,fillColor:"#0896FF",fillOpacity:0.04,strokeColor:"#155EAB",strokeOpacity:0.6,strokeWeight:1},p=[],o=true,b=true;
function r(s){if(!(B.atlas.getVariant("ebcOQQTDCPZRVMUPSCMeDQWe")==2||B.atlas.getVariant("ebcBUcSPWYNHICTEZWDTPcHe")==2)){return
}var u=$(B.jstmpl("atlas_best_areas_toggle").render()),t=$(s.topOverlay);
b=u.find(".js-map-toggle__best-areas-check").prop("checked")?true:false;
t.append(u);
g(t);
!o&&$(".js-map-toggle__best-areas").addClass("map-toggle__best-areas--hide")
}function g(s){s.on("change",".js-map-toggle__best-areas-check",function(){b=$(this).prop("checked")?true:false;
d();
c()
})
}function k(t){var s=t instanceof Array;
if(!s||t.length<1){return
}o&&this.trigger("best-areas-poly");
if(B.atlas.getVariant("ebcBUcSPWYNHICTEZWDTPcHe")==1||B.atlas.getVariant("ebcOQQTDCPZRVMUPSCMeDQWe")==1){return
}var u=this;
t.forEach(function(y){if(h(y.id,u)){return
}var x=y.polygon.map(function(z){return[z[1],z[0]]
}),v=$.extend({},i,{paths:x}),w=m.createPolygon.call(u,v);
!o&&w.hide();
p.push(w)
})
}function h(v,u){var t=u.get("bestAreaDrawnList")||{},s=false;
if(t[v]){s=true
}t[v]=true;
u.set("bestAreaDrawnList",t);
return s
}function d(){var s=j.get("action")=="searchresults"?"ebcOQQTDCPZRVMUPSCMeDQWe":"ebcBUcSPWYNHICTEZWDTPcHe";
B.et.customGoal(s,1)
}function q(s){o=s.centralPolygonCoords?false:true;
c()
}function c(){var s=$(".js-map-toggle__best-areas");
o&&b?e():f();
if(o){s.removeClass("map-toggle__best-areas--hide")
}else{s.addClass("map-toggle__best-areas--hide")
}}function e(){p.forEach(function(s){s.show()
})
}function f(){p.forEach(function(s){s.hide()
})
}return{addPolygon:k,updateState:q,init:r}
})
});
$(function(){if(!B.atlas||!B.atlas.define){return
}B.atlas.define("marker-behavior-manager",["util-object"],function(f){var c={};
function e(){this.on("marker-click",$.proxy(a,this));
f.extend(this,c)
}function b(g){var h=this.get("markersList");
this.set("markersList",d(g,h));
return this.get("markersList")
}function d(g,h){Object.keys(g).forEach(function(j){if(g[j]&&g[j].length){g[j].forEach(function(k){k.b_behaviors=k.b_behaviors||{}
})
}});
if(!h){return g
}var i={};
Object.keys(h).forEach(function(j){h[j].forEach(function(k){i[j+k.b_id]=k.b_behaviors
})
});
Object.keys(g).forEach(function(j){g[j].forEach(function(k){if(i[j+k.b_id]){k.b_behaviors=i[j+k.b_id]
}})
});
return g
}function a(g){var i=g.data.b_id,h=this.get("markersList");
Object.keys(h).forEach(function(j){h[j].forEach(function(k){k.b_behaviors=k.b_behaviors||{};
k.b_behaviors.active=k.b_id==i?true:false
})
});
this.set("markersList",h)
}c={applyBehaviorsToMarkers:b};
return{init:e}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("markers-disperser-settings",["util-env"],function(c){var b={};
if(c.get("action")=="hotel"){b={higher:[g,f],overlap:[d]}
}else{if(c.get("isLP")&&c.get("action")!="city"){b={higher:[f,a],lower:[e]}
}else{b={higher:[f]}
}}function g(i,h){if(typeof B.env!=="undefined"&&typeof B.env.b_hotel_id!=="undefined"){if(i.b_id===B.env.b_hotel_id&&h.b_id!==B.env.b_hotel_id){return 1
}else{return -1
}}}function f(i,h){if(i.b_behaviors.active&&!h.b_behaviors.active){return 1
}else{return -1
}}function a(i,h){if(i.b_persistent&&!h.b_persistent){return 1
}else{return -1
}}function d(k,j){var i=k.b_id===B.env.b_hotel_id||k.b_behaviors.active;
var h=j.b_id===B.env.b_hotel_id||j.b_behaviors.active;
return i==true&&h==true?0:false
}function e(i,h){if(i.b_marker_type!=="hotel_soldout"&&h.b_marker_type==="hotel_soldout"){return 1
}else{if(i.b_marker_type==="hotel_soldout"&&h.b_marker_type!=="hotel_soldout"){return -1
}else{return 0
}}}return{settings:b}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("markers-disperser-filters",["markers-disperser-settings","util-object"],function(c,b){function a(d){var e=d&&d.settings?d.settings:{};
this.config={};
b.extend(this.config,c,e)
}a.prototype.check=function(h,g){var d=0,f=this.config.settings,e=this.config.fn;
if(f.lower){f.lower.forEach(function(i){if(d!=1){d=i(h,g)
}})
}if(f.higher){f.higher.forEach(function(i){if(d!=1){d=i(h,g)
}})
}if(f.overlap){f.overlap.forEach(function(i){var j=i(h,g);
d=j===0?j:d
})
}return d
};
return a
})
});
$(function(){if(!B.atlas||!B.atlas.define){return
}B.atlas.define("marker-behavior-manager",["util-object"],function(f){var c={};
function e(){this.on("marker-click",$.proxy(a,this));
f.extend(this,c)
}function b(g){var h=this.get("markersList");
this.set("markersList",d(g,h));
return this.get("markersList")
}function d(g,h){Object.keys(g).forEach(function(j){if(g[j]&&g[j].length){g[j].forEach(function(k){k.b_behaviors=k.b_behaviors||{}
})
}});
if(!h){return g
}var i={};
Object.keys(h).forEach(function(j){h[j].forEach(function(k){i[j+k.b_id]=k.b_behaviors
})
});
Object.keys(g).forEach(function(j){g[j].forEach(function(k){if(i[j+k.b_id]){k.b_behaviors=i[j+k.b_id]
}})
});
return g
}function a(g){var i=g.data.b_id,h=this.get("markersList");
Object.keys(h).forEach(function(j){h[j].forEach(function(k){k.b_behaviors=k.b_behaviors||{};
k.b_behaviors.active=k.b_id==i?true:false
})
});
this.set("markersList",h)
}c={applyBehaviorsToMarkers:b};
return{init:e}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("pin-favicon",[],function(){var h=c($('link[rel="shortcut icon"]').first().attr("href")),e=c("//q-ec.bstatic.com/static/img/map-pin-favicon/d353279b07dee28127c729d14f57821299ee68b0.png"),a=0;
function f(j){var i=(j?e:h).replace("{counter}",a++);
$('link[rel="shortcut icon"]').first().attr("href",i)
}function g(i){B.env.b_is_map_favicon_enabled=i
}function d(){f(true);
g(true)
}function b(){f(false);
g(false)
}function c(j){var i=j+"#f={counter}";
return i
}return{addPin:d,removePin:b}
})
});
$(function(){if(!B.atlas){return
}B.atlas.define("cheapest-price",[],function(){var d,e,b=0;
function c(g){var f=false,h=a(g);
if(!isNaN(h)&&(e==null||h<=e)){f=true;
e=h
}b++;
if(b<3){f=false
}return f
}function a(f){if(!f.b_blocks){return
}if(f.b_blocks[0]){return f.b_blocks[0].price_rounded
}else{return f.b_blocks.price_rounded
}}return{isCheaper:c}
})
});
B.when({condition:B.env.b_action==="hotel",experiment:"ebcBUedJORe"}).run(function(d){var k=$(".js-map-static-ufi__marker"),i=$(".js-map-static-ufi");
if(k.length<1){return
}var l=d("Atlas/geo.view"),h=d("Atlas/geo.latLng"),c=a(k.data("cityLatlng").split(",")),e,g={width:i.width(),height:i.height(),center:a(k.data("staticMapCenter").split(",")),zoom:k.data("staticMapZoom")},b=new l(g.width,g.height);
b.extrapolate(g.center,g.zoom);
e=m(b.latLngToPixel(new h(c[0],c[1])));
if(j(e,g)){B.et.stage(this.hash,1);
if(this.variant()==2){f(e)
}}function f(n){k.css({top:n.y,left:n.x}).addClass("map-static-ufi--show")
}function m(n){Object.keys(n).forEach(function(o){n[o]=window.parseInt(n[o],10)
});
return n
}function a(n){return n.map(function(o){return window.parseFloat(o)
})
}function j(o,n){if(o.x<0||o.y<0){return false
}else{if(o.x>n.width||o.y>n.height){return false
}}return true
}});
$(function(){if(!B.atlas){return
}B.atlas.define("google-analytics",["util-env","util-object","pubsub"],function(g,a,l){var k;
var b={page:g.get("action"),isWithDates:!!g.get("checkinCheckoutInterval")};
var j=new l();
var e=[{event:"map-open",source:function(m){return m
},action:"show_map"},{event:"map-close",source:function(m){return m
},action:"close_map"}];
var i=[{event:"marker-click",source:function(m){return m.data.b_type
},action:"marker_click"},{event:"marker-hover",source:function(m){return m.data.b_type
},action:"marker_hover"},{event:"iw-click-title",source:"title",action:"iw_click"},{event:"iw-click-button",source:"reserve_button",action:"iw_click"},{event:"iw-close.button",source:"close_button",action:"iw_close"},{event:"zoomin.button",source:"zoom_control",action:"zoomin"},{event:"zoomout.button",source:"zoom_control",action:"zoomout"},{event:"zoom",source:"all",action:function(n){var m;
if(n>k){m="zoomin"
}else{m="zoomout"
}k=n;
return m
}},{event:"doubleclick",source:"doubleclick",action:"zoomin"},{event:"map-type-change",source:"maptype_control",action:"maptype_change",value:function(m){var n={hybrid:1,roadmap:2,satellite:3,terrain:4};
return n[m]
}},{event:"drag-start",source:"mouse",action:"drag_map"}];
function f(m){c(e,j);
m.addGAEvents(j)
}function d(m){m.on("load",function(){k=m.getZoom()
});
c(i,m)
}function c(n,m){n.forEach(function(o){m.on(o.event,function(q){var p=a.extend(b,o);
Object.keys(p).forEach(function(r){if(typeof p[r]==="function"){p[r]=p[r](q)
}});
h(p)
})
})
}function h(m){var n={hitType:"event",eventCategory:"Map",nonInteraction:1};
n.eventAction=m.action+":";
n.eventAction+=m.source||"";
n.eventLabel=m.page+":";
n.eventLabel+=m.isWithDates?"with_dates":"without_dates";
if(m.value){n.eventValue=m.value
}if(window.ga&&"call" in window.ga){window.ga("send",n)
}}return{trackMap:d,trackPage:f,gaPubSub:j}
})
});
booking.jstmpl("atlas_iw_control_view",(function(){var b=['\n    \u003cdiv class="iw-control js-iw-control"\u003e\n        ',"","\n\n        ","\n            ","\n","\n    ","\n        ","iw-structured iw-big-image","iw-structured","\n\n\n","iw-unified-container","iw-container",'\n        data-hotel-load-id="','"\n    ','\n\n\u003cdiv class="'," iw-loading ",'" ','\u003e\n\n        \u003cdiv id="map_hotel_overlay_picture_wrapper"\u003e\n            \u003cdiv id="map_hotel_overlay_picture" class="map_overlay_loading"\u003e\u003c/div\u003e\n        \u003c/div\u003e\n\n    ','\n\t\u003cdiv class="map_overlay_loading_animation"\u003e\n\t\t\u003cdiv class="map_overlay_loading_animation_mask"\u003e\u003c/div\u003e\n\t\t\u003cdiv class="map_overlay_loading_animation_mask"\u003e\u003c/div\u003e\n\t\t\u003cdiv class="map_overlay_loading_animation_mask mask_short"\u003e\u003c/div\u003e\n\t\u003c/div\u003e\n\t','\n    \u003ch3 id="map_overlay_loading_msg"\u003e\u003c/h3\u003e\n    ',"\n\u003c/div\u003e","\n                ","\n\n","\n  ",'class="map_city_overlay_title-link"','\n\n\u003cdiv class="iw-unified-container iw-hotel   iw-structured iw-location-bottom iw-flex-fix iw-overlay-hotel  maps-big-image-panel iw-','"\u003e\n','\n\t\u003cdiv class="maps-panel-image-container"\u003e\n\t\t\u003cimg src="','" width="270" heigh="180" class="maps-iw-ufi-photo" /\u003e\n\t\u003c/div\u003e\n','\n  \u003cdiv class="maps-iw-ufi-photo-container"\u003e\u003cspan class="maps-iw-ufi-no-photo"\u003e\u003ci class="bicon-landscape"\u003e\u003c/i\u003e\u003c/span\u003e\u003c/div\u003e\n','\n\n  \t\u003ch3 id="map_city_overlay_title" ',"\u003e \n       ",'\n           \u003ca class="jq-tooltip" href="','target="_blank"',' data-title="','"\u003e',"\u003c/a\u003e\n        ","\n          ","\n    \u003c/h3\u003e\n  \n  ",'   \n    \u003cp class="map_ufi_iw_endorsements"\u003e',"\u003c/p\u003e\n  ",'\n  \n   \u003cspan id="marker_close" class="iw-close maps-big-image-close" title="','" role="button" aria-hidden="true"\u003e&#45064;\u003c/span\u003e\n\u003c/div\u003e',"\u003cstrong\u003e","\u003c/strong\u003e","iw-with-urgency","iw_rack_rate","iw-structured iw-location-bottom","iw-flex-fix","maps-big-image-overlay","&amp;mapsu=1",'class="maps-big-image-title"',"maps-big-image-panel","maps-big-image-button","maps-big-image-close","\n\n            ",";atlas_src=sr_iw_title",";atlas_src=sr_iw_btn",";atlas_src=hp_iw_title",";atlas_src=hp_iw_btn",";atlas_src=lp_iw_title",";atlas_src=lp_iw_btn","#availability","iw-hotel-current-highlight","\n             ",'\u003ci class="bicon-leftchevron maps-button-arrow"\u003e\u003c/i\u003e','\u003ci class="bicon-rightchevron maps-button-arrow"\u003e\u003c/i\u003e',"b-button_secondary b-button_small","b-button_primary ","jq_tooltip",'\n            data-component="track"\n            data-track="mouseenter"\n        ','\n            data-hash="','"\n            data-width="400"\n        ','"\n        ','data-title="','"','\n            data-stage="1"\n    '," iw-hotel "," ",'"\u003e\n\n\n\n    ','\n    \u003cdiv class="map_hotel_overlay_quality_wrapper clearfix map_hotel_overlay_quality_wrapper_xpplooking"\u003e\n    ',"\n\n\n        ","\n\n                ","\n                    ",'\n                        data-hash="','"\n                    ','\n\n\n            \u003cdiv class="maps-panel-image-container maps-iw-image-gal-view"\u003e\n                \u003ca href="#0" class="maps-iw-image-gal-nav maps-iw-image-gal-nav-next" data-component="track" data-track="click" data-custom-goal="1" ','\u003e\u003c/a\u003e\n                \u003ca href="#0" class="maps-iw-image-gal-nav maps-iw-image-gal-nav-prev" data-component="track" data-track="click" data-custom-goal="2" ','\u003e\u003c/a\u003e\n                \u003cul class="maps-iw-image-gal-images"\u003e\n                    ',"\n                         \u003cli ",'class="current"','\u003e\u003cimg class="maps-panel-image-iw" src="','" /\u003e\u003c/li\u003e\n                    ','\n                \u003c/ul\u003e\n                \u003cul class="maps-iw-image-gal-nav-bullets"\u003e\n                    \u003cli class="active"\u003e1\u003c/li\u003e\n                    \u003cli\u003e2\u003c/li\u003e\n                    \u003cli\u003e3\u003c/li\u003e\n                \u003c/ul\u003e\n            \u003c/div\u003e\n        ','\n            \u003cdiv class="maps-panel-image-container ','"\u003e\u003cimg class="maps-panel-image-iw" src="','" /\u003e\n                ','\n                    \u003cdiv class="maps-panel-image-overlay"\u003e\n                        \u003cspan class="maps-panel-image-overlay-inner maps-free-wifi"\u003e\u003ci class="bicon-wifi"\u003e\u003c/i\u003e ',"\u003c/span\u003e\n                    \u003c/div\u003e\n                ","\n            \u003c/div\u003e\n        ",'\n        \u003cdiv id="map_hotel_overlay_picture_wrapper" class="',"no_margin",'"\u003e\n            ','\n            \u003cdiv class="map_hotel_overlay_picture_background"\u003e\u003c/div\u003e\n            ','\n            \u003cdiv id="map_hotel_overlay_picture" data-atlas-track-hover="iw-image-zoom" style="background: url(',') no-repeat scroll 0 0 transparent"\u003e\u003c/div\u003e\n        \u003c/div\u003e\n        ','\n                        \u003cdiv class="maps-deal-card-discount-ribbon"\u003e-\u003cspan class="maps-deal-card-discount-value"\u003e','\u003c/span\u003e\u003cspan class="maps-deal-card-discount"\u003e%\u003c/span\u003e\u003c/div\u003e\n                    ','\n                        \u003cdiv class="maps-deal-card-discount-ribbon"\u003e\u003cspan class="maps-deal-card-discount"\u003e%\u003c/span\u003e\u003cspan class="maps-deal-card-discount-value"\u003e','\u003c/span\u003e \u003cspan class="maps-deal-card-discount-copy"\u003e',"\u003c/span\u003e\u003c/div\u003e\n                    ",'\n                        \u003cdiv class="maps-deal-card-discount-ribbon"\u003e\u003cspan class="maps-deal-card-discount-value"\u003e','\u003c/span\u003e\u003cspan class="maps-deal-card-discount"\u003e%\u003c/span\u003e \u003cspan class="maps-deal-card-discount-copy"\u003e','\n\n\n    \u003cdiv id="map_hotel_overlay_content_wrapper" ','\u003e\n        \u003ch3 id="map_hotel_overlay_title"\u003e\n\n            \u003ca href="','"\n                class="js-map-hotel__link ','\n                style="font-size: 16px"\n                ',"\n                \u003e","\u003c/a\u003e\n\n            ",'\n            \u003cspan class="hotel_overlay_stars"\u003e\n                ','\n                \u003cimg class="map_overlay_unofficial_rating" src="',"/icons/circles/",'sterren4.png"/\u003e\n                ',"\n            \u003c/span\u003e\n            ",'\n            \u003cspan class="hotel_overlay_stars use_sprites stars4 stars4i','"\u003e\u003c/span\u003e\n            ','\n                \u003cdiv class="iw_hotel_preferred_tooltip" id="iw_hotel_preferred_tooltip"\u003e\n                    \u003cdiv\u003e\n\n                        ','\n\n                    \u003c/div\u003e\n                \u003c/div\u003e\n                \u003cspan class="use_sprites icon_thumbyellow jq_tooltip" rel="310" data-node_tt_id="iw_hotel_preferred_tooltip" data-atlas-track-hover="iw-preferred-tooltip"\u003e\u003c/span\u003e\n                ','\n                \u003cspan class="use_sprites icon_thumbyellow" data-atlas-track-hover="iw-preferred-tooltip"\u003e\u003c/span\u003e\n                ',"\n\n\n            ","\n                        ","\n                            ",'\n                \u003cspan\n                data-component="track"\n                data-track="mouseenter"\n                data-custom-goal="1"\n                ','\n                    data-hash="','"\n                ','\n                class="map_iw_hotel_wishlist_count jq_tooltip"\n                data-title="','"\u003e\n                        \u003ci class="bicon-heart iw-wishlist-icon"\u003e\u003c/i\u003e\n                        \u003cspan class="iw-wishlist-number"\u003e',"\u003c/span\u003e\n                \u003c/span\u003e\n             ","\n        \u003c/h3\u003e\n\n\n\n\n    ",'\n                \u003cdiv class="map_hotel_overlay_location_wrapper map_hotel_overlay_location_by_hotel_name"\u003e\n                    ','\n        \u003cp id="map_hotel_overlay_description"\n                data-component="track"\n                data-track="mouseenter"\n                data-stage="2"\n                ',"\n                \u003e\n\n             ",", ","\n                \n                ",'\n              \u003cspan\u003e&ndash;\u003c/span\u003e \u003ca\n                data-component="track"\n                data-track="click"\n                data-custom-goal="1"\n                data-hash="','"\n                class="map_hotel_overlay_google_link"\n                href="https://www.google.com/maps/dir/Current+Location/',",",'"\n                target="_blank"\u003e',"\u003c/a\u003e\n            ","\n\n             ",'\n                \u003cspan class="iw_inside_best_area jq_tooltip"\n                data-component="track"\n                data-track="mouseenter"\n                data-custom-goal="1"\n                ','\n                data-title="','"\n                \u003e\n                     ',"\n                          ",'\n\n                    \u003ci class="iw_inside_best_area_icon"\u003e&#45457;\u003c/i\u003e ',"\n                \u003c/span\u003e\n            ","\n        \u003c/p\u003e","\n                \u003c/div\u003e\n            ",'\n                \u003cdiv class="map_hotel_overlay_review_score_wrapper"\u003e\n                   ','\n                        \u003cdiv class="map_hotel_overlay_review_score"\u003e\n                        ',"\n                                ","\n                        \u003c/div\u003e\n                    ","\n\n                    ",'\n                        \u003cdiv class="map_hotel_overlay_review_score_x_reviews"\u003e',"\u003c/div\u003e\n                        ",'\n                            \u003cdiv class="maps-free-wifi"\u003e\u003ci class="bicon-wifi"\u003e\u003c/i\u003e ','\n                            \u003cdiv class="map_hotel_overlay_review_score_x_reviews"\u003e',"\n\n        \u003c/div\u003e\n\n\n            ","\n                 ",'\n                    \u003cdiv class="mng-iw-hotel-xpplooking"\u003e\u003cspan class="mng-iw-hotel-xpplooking-inner"\u003e',"\u003c/span\u003e\u003c/div\u003e\n                ","\n\n\n    \u003c/div\u003e\n    ","\n\n    ","\n\n\n                ","\n\n\n    ","\n\n\n\n\n        \n        ",'\n             \u003cdiv class="mng-iw-hotel-xpplooking"\u003e\u003cspan class="mng-iw-hotel-xpplooking-inner"\u003e',"\u003c/span\u003e\u003c/div\u003e\n        ",'\n\n        \u003cdiv class="map_hotel_overlay_details_wrapper ',"clearfix",'"\u003e\n        ',"\n\n            \n            ","map_price_wrapper_soldout","map_price_wrapper_no_dates","map_price_wrapper_multi_day","map_price_wrapper_one_day","map_price_wrapper_no_fit"," map_price_wrapper_rack_rate"," map_price_wrapper_urgency",'\n                \u003cdiv class="map_hotel_overlay_review_score_wrapper"\u003e\n\n                        ','\n                            \u003cdiv class="map_hotel_overlay_review_score"\u003e\n                            ',"\n                                    ","\n                            \u003c/div\u003e\n                        ","\n\n                       ",'\n                                \u003cdiv class="map_hotel_overlay_review_score_x_reviews"\u003e',"\u003c/div\u003e\n                            ","\n\n\n                \u003c/div\u003e\n            ",'\n                \u003cdiv class="map_hotel_overlay_location_wrapper map_hotel_overlay_location_above_price"\u003e\n                    ','\n\n\n            \u003cdiv class="map_hotel_overlay_price_wrapper ','"\u003e\n\n                \u003cdiv class="map_hotel_overlay_price"\u003e\n\n                \n                     ',"\n\n                \n\n\n                    ",'\n                        \u003cspan class="hotel_overlay_soldout"\u003e\n\n                            ',"\n\n\n                        ","\n\n\n\n                    ","\n\n\n\n                        \u003c/span\u003e\n                    ",'\n                        \u003cspan class="hotel_overlay_from_price"\u003e\n                            ','\n                                \u003cspan class="hotel_overlay_room_price hotel_overlay_occupancy_item"\u003e',"\u003c/span\u003e\n                            ",'\n                                \u003cdiv class="map_iw_price_estimate"\u003e\n                                    ',"\n                                        ","eur","gbp","yen","yuan","\n                                        \n                                        ","usd",'\n                                    \u003cp class="map_iw_price_estimate__values map_iw_price_estimate__'," map_iw_price_estimate__val",'"\u003e\n                                        ',"\n                                            \n                                            \u003ci\u003e&#8364;\u003c/i\u003e\u003ci\u003e&#8364;\u003c/i\u003e\u003ci\u003e&#8364;\u003c/i\u003e\u003ci\u003e&#8364;\u003c/i\u003e\u003ci\u003e&#8364;\u003c/i\u003e\n                                        ","\n                                            \n                                            \u003ci\u003e&#163;\u003c/i\u003e\u003ci\u003e&#163;\u003c/i\u003e\u003ci\u003e&#163;\u003c/i\u003e\u003ci\u003e&#163;\u003c/i\u003e\u003ci\u003e&#163;\u003c/i\u003e\n                                        ","\n                                            \n                                            \u003ci\u003e&#165;\u003c/i\u003e\u003ci\u003e&#165;\u003c/i\u003e\u003ci\u003e&#165;\u003c/i\u003e\u003ci\u003e&#165;\u003c/i\u003e\u003ci\u003e&#165;\u003c/i\u003e\n                                        ","\n                                            \n                                            \u003ci\u003e元\u003c/i\u003e\u003ci\u003e元\u003c/i\u003e\u003ci\u003e元\u003c/i\u003e\u003ci\u003e元\u003c/i\u003e\u003ci\u003e元\u003c/i\u003e\n                                        ","\n                                            \n                                            \n                                            \u003ci\u003e&#36;\u003c/i\u003e\u003ci\u003e&#36;\u003c/i\u003e\u003ci\u003e&#36;\u003c/i\u003e\u003ci\u003e&#36;\u003c/i\u003e\u003ci\u003e&#36;\u003c/i\u003e\n                                        ","\n                                    \u003c/p\u003e\n                                \u003c/div\u003e\n                            ","\n                        \u003c/span\u003e\n                    ","\n\n                        ",'\n                                    \u003cspan class="iw_rackrate_stroke ',"iw_rackrate_stroke_v2",'"\u003e\n                                        \u003cspan class="iw_rackrate_price jq_tooltip" rel="400" data-title="','"\u003e\n                                            ',"\n                                        \u003c/span\u003e\n                                    \u003c/span\u003e\n                                ",'\u003cspan class="price_x_nights_dates"\u003e',"\u003c/span\u003e",'\n                            \u003ci class="hotel_overlay_occupancy_persons b-sprite occupancy_max','" title="" data-component="track" data-track="mouseenter" data-custom-goal="1" data-hash="','"\u003e\u003c/i\u003e\n                            ','\n                            \u003cspan class="hotel_overlay_room_price"\u003e',"\u003c/span\u003e\n\n                            ",'\n                                \u003cdiv class="hotel_overlay_price_x_nights"\n                                    ','\n                                    style="display: block;line-height: 160%;"\n                                    ',"\n                                    \u003e\n                                        ","price_for_x_nights","\n\n                                \u003c/div\u003e\n\n                            ","\n\n                                \u003c/div\u003e\n                            ",'\n                            \u003cdiv class="hotel_overlay_price_inner"\u003e\n                                \u003cdiv class="hotel_overlay_price_detail"\u003e\n                                    ','\n                                \u003c/div\u003e\n                                \u003cp class="hotel_overlay_urgency minor-text"\u003e',"\u003c/p\u003e\n                            \u003c/div\u003e\n                        ",'\n                        \u003cp class="hotel_overlay_group_mismatch"\u003e',"\u003c/p\u003e\n                    ","\n                \u003c/div\u003e\n\n                ",'\n\n                \u003cdiv class="map_hotel_overlay_button ','"\u003e\n                    \u003ca href="','"\n                    class="b-button '," js-map-hotel__button ","js-map-hotel__link",'\n                    \u003e\n                        \u003cspan class="b-button__text"\u003e\n                            ',"\n                                 ","\n                        \u003c/span\u003e\n\n                    \u003c/a\u003e\n                \u003c/div\u003e\n                ","\n\n            \u003c/div\u003e\n\n        ","\n        \u003c/div\u003e\n        ",'\n            \u003cdiv class="map_hotel_overlay_location_wrapper"\u003e\n                ',"\n\n\n\n",'\n\u003cdiv class="maps-piw-cta-container"\u003e\n    \u003ca href="','" class="b-button ','\u003e\n        \u003cspan class="b-button__text"\u003e\n            ',"\n        \u003c/span\u003e\n\n    \u003c/a\u003e\n\u003c/div\u003e\n",'\n\n        \u003cspan id="marker_close" class="iw-close ','" title="','" role="button" aria-hidden="true"\u003e&#45064;\u003c/span\u003e\n\n    ',"\n    \u003c/div\u003e\n    ","\n    \u003c/div\u003e\n"],a=["map_iw_layout_class","iw_container_class","b_fixed_iw_loading_data","b_id","b_loading","b_marker_type","b_type","b_ufi_title_link_class","b_is_current","b_photo","b_url","b_text","b_name","b_endorsements","close","b_class_name","start_bold","end_bold","b_map_iw_urgency_class","b_blocks","map_iw_rack_rate","b_maps_iw_flex_fix","b_maps_big_image_container","b_has_free_wifi","b_map_survey_param","b_maps_big_image_title","b_maps_big_image_panel","b_maps_big_image_button","b_maps_big_image_close","b_big_image_url","b_atlas_src_title_param","b_atlas_src_btn_param","b_reserve_btn_target","b_sr_url","b_iw_fixed_current_highlight","b_maps_iw_fixed_classes","b_cta_arrow","b_button_hierarchy","b_maps_iw_panel_title_desc_class","b_description","b_maps_iw_panel_title","image_gallery_custom_goal","b_big_image_url_gallery","maps_hp_property_iw_free_wifi","b_map_nights","b_image_url","rack_rate_price","rack_rate_price_discount","new_savings_icon_02","single_price","soldout","b_hotel_title","b_class","b_class_half","b_class_is_estimated","b_enable_preferred_property_copy","help_preferred_property","help_preferred","b_preferred","b_smart_deal","b_hotel_deals","b_smart_deal_show","num_users","b_wishlist_count","maps_iw_wish_list_generic","b_ufi_name","b_hotel_city_name","b_city","b_district","b_map_hotel_location","b_hotel_address","b_district_name","b_latitude","b_longitude","maps_hp_iw_directions","maps_sr_iw_real_heart_tooltip","destination_name","maps_sr_iw_real_heart","b_is_in_best_location_score_district","b_review_score","b_review_word","num_reviews","b_review_nr","maps_hp_sr_reviews_after","b_score_from_text","b_nr_reviews_text","b_visitors_text","room_occupancy","price","occupancy","more_room_types","b_room_type_count","map_price_wrapper_class","can_accommodate_group","start_day_of_month","end_day_of_month","start_short_month_name","short_month_name","end_short_month_name","sold_out","Sold_out","maps_sold_out_copy_with_dates_correct","maps_sold_out_copy_with_dates_crossover_correct","b_price_estimate_currency","b_price_estimate_value","smart_price_refined_percent_saving","iw_rack_rate_display","hp_roomtable_rackrate_tooltip_06_dehotel","b_checkin_checkout_interval","b_nr_nights","occupancy_hover","start_style","end_style","b_iw_room_price_box","b_map_button_text","map_view_check_availability","b_map_is_tablet","hp_comp_set_view_property","map_popup_cta_get_deal","hp_book_button_reserve","b_has_dates","maps_sr_dates_cta_choose_stay","b_accommodationtype_id","maps_sr_dates_cta_choose_apartment","maps_sr_dates_cta_choose_room"],e,d,c;
return function(j){var o="",g=this.fn;
function k(p){return p
}function m(p){if((g.MJ(g.MC(a[66]))&&g.MJ(g.ATLAS_TRACK("eGYSaBaUJBZNSTHT")))){p+=b[3];
g.MN(a[65],g.MC(a[66]));
p+=b[6]
}p+=b[2];
if(g.MJ(g.ATLAS_STAGE("ebcEKOTBbLOdQOQbTFNeKe"))){}p+=b[6];
if(g.MJ(g.ATLAS_STAGE("ebcEKCcYSaBZGTGFedZUC"))){}p+=b[140];
if((g.MJ(g.ATLAS_ENV("action")+""==="hotel"))){p+=[b[133],"ebcEKOTBbLOdQOQbTFNeKe",b[134]].join("")
}else{if((g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))){p+=[b[133],"ebcEKCcYSaBZGTGFedZUC",b[134]].join("")
}}p+=b[141];
if((((g.MJ(g.MC(a[70]))&&(g.MJ(g.MC(a[67]))||g.MJ(g.MC(a[65]))))&&g.MJ(g.MC(a[68])))&&((g.MJ(g.ATLAS_STAGE("ebcOQPBRYdcSQTCRGZTFNeKe"))&&g.MJ(g.ATLAS_TRACK("ebcOQPBRYdcSQTCRGZTFNeKe")))||(g.MJ(g.ATLAS_STAGE("ebcBUYSaBMNbcSWHAdSZBeRe"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBMNbcSWHAdSZBeRe")))))){p+=b[21];
g.MN("b_map_hotel_location",(g.MC(a[65])||g.MC(a[67])));
p+=[b[21],g.MC(a[68]),b[142],g.MC(a[69]),b[3]].join("")
}else{if((g.MJ(g.MC(a[70]))&&(g.MJ(g.MC(a[67]))||g.MJ(g.MC(a[65]))))){p+=b[21];
g.MN("b_map_hotel_location",(g.MC(a[65])||g.MC(a[67])));
p+=[b[143],g.MC(a[70]),g.MC(a[71]),b[142],g.MC(a[69]),b[3]].join("")
}else{if(g.MD(a[70])){p+=[b[21],g.MC(a[70]),g.MC(a[71]),b[3]].join("")
}else{if(g.MD(a[65])){p+=[b[21],g.MC(a[65]),b[3]].join("")
}else{if(g.MD(a[67])){p+=[b[21],g.MC(a[67]),b[3]].join("")
}}}}}p+=b[55];
if((g.MJ(g.ATLAS_STAGE("ebcBUYSaBEEFXbaCdTUC"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBEEFXbaCdTUC")))){p+=[b[144],"ebcBUYSaBEEFXbaCdTUC",b[145],g.MC(a[72]),b[146],g.MC(a[73]),b[147],g.MB(a[74]),b[148]].join("")
}p+=b[149];
if((g.MJ(g.MC(a[78]))&&((g.MJ(g.ATLAS_STAGE("ebcOQPBRNQTDCPZC"))&&(g.MJ(g.ATLAS_TRACK("ebcOQPBRNQTDCPZC")==2)))||(g.MJ(g.ATLAS_STAGE("ebcBUYSaBcSPWYNWe"))&&(g.MJ(g.ATLAS_TRACK("ebcBUYSaBcSPWYNWe")==2)))))){p+=b[150];
if((g.MJ(g.ATLAS_ENV("action")+""==="hotel"))){p+=[b[133],"ebcBUYSaBcSPWYNWe",b[134]].join("")
}else{if((g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))){p+=[b[133],"ebcOQPBRNQTDCPZC",b[134]].join("")
}}p+=[b[151],g.MB(a[75]),b[152]].join("");
if(g.MD(a[65])){p+=b[153];
g.MN(a[76],g.MC(a[65]));
p+=b[83]
}else{if(g.MD(a[67])){p+=b[130];
g.MN(a[76],g.MC(a[67]));
p+=b[83]
}}p+=[b[154],g.MB(a[77]),b[155]].join("")
}p+=b[156];
return p
}function l(p){if((g.MJ(g.MC(a[66]))&&g.MJ(g.ATLAS_TRACK("eGYSaBaUJBZNSTHT")))){p+=b[3];
g.MN(a[65],g.MC(a[66]));
p+=b[6]
}p+=b[2];
if(g.MJ(g.ATLAS_STAGE("ebcEKOTBbLOdQOQbTFNeKe"))){}p+=b[6];
if(g.MJ(g.ATLAS_STAGE("ebcEKCcYSaBZGTGFedZUC"))){}p+=b[140];
if((g.MJ(g.ATLAS_ENV("action")+""==="hotel"))){p+=[b[133],"ebcEKOTBbLOdQOQbTFNeKe",b[134]].join("")
}else{if((g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))){p+=[b[133],"ebcEKCcYSaBZGTGFedZUC",b[134]].join("")
}}p+=b[141];
if((((g.MJ(g.MC(a[70]))&&(g.MJ(g.MC(a[67]))||g.MJ(g.MC(a[65]))))&&g.MJ(g.MC(a[68])))&&((g.MJ(g.ATLAS_STAGE("ebcOQPBRYdcSQTCRGZTFNeKe"))&&g.MJ(g.ATLAS_TRACK("ebcOQPBRYdcSQTCRGZTFNeKe")))||(g.MJ(g.ATLAS_STAGE("ebcBUYSaBMNbcSWHAdSZBeRe"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBMNbcSWHAdSZBeRe")))))){p+=b[21];
g.MN("b_map_hotel_location",(g.MC(a[65])||g.MC(a[67])));
p+=[b[21],g.MC(a[68]),b[142],g.MC(a[69]),b[3]].join("")
}else{if((g.MJ(g.MC(a[70]))&&(g.MJ(g.MC(a[67]))||g.MJ(g.MC(a[65]))))){p+=b[21];
g.MN("b_map_hotel_location",(g.MC(a[65])||g.MC(a[67])));
p+=[b[143],g.MC(a[70]),g.MC(a[71]),b[142],g.MC(a[69]),b[3]].join("")
}else{if(g.MD(a[70])){p+=[b[21],g.MC(a[70]),g.MC(a[71]),b[3]].join("")
}else{if(g.MD(a[65])){p+=[b[21],g.MC(a[65]),b[3]].join("")
}else{if(g.MD(a[67])){p+=[b[21],g.MC(a[67]),b[3]].join("")
}}}}}p+=b[55];
if((g.MJ(g.ATLAS_STAGE("ebcBUYSaBEEFXbaCdTUC"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBEEFXbaCdTUC")))){p+=[b[144],"ebcBUYSaBEEFXbaCdTUC",b[145],g.MC(a[72]),b[146],g.MC(a[73]),b[147],g.MB(a[74]),b[148]].join("")
}p+=b[149];
if((g.MJ(g.MC(a[78]))&&((g.MJ(g.ATLAS_STAGE("ebcOQPBRNQTDCPZC"))&&(g.MJ(g.ATLAS_TRACK("ebcOQPBRNQTDCPZC")==2)))||(g.MJ(g.ATLAS_STAGE("ebcBUYSaBcSPWYNWe"))&&(g.MJ(g.ATLAS_TRACK("ebcBUYSaBcSPWYNWe")==2)))))){p+=b[150];
if((g.MJ(g.ATLAS_ENV("action")+""==="hotel"))){p+=[b[133],"ebcBUYSaBcSPWYNWe",b[134]].join("")
}else{if((g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))){p+=[b[133],"ebcOQPBRNQTDCPZC",b[134]].join("")
}}p+=[b[151],g.MB(a[75]),b[152]].join("");
if(g.MD(a[65])){p+=b[153];
g.MN(a[76],g.MC(a[65]));
p+=b[83]
}else{if(g.MD(a[67])){p+=b[130];
g.MN(a[76],g.MC(a[67]));
p+=b[83]
}}p+=[b[154],g.MB(a[77]),b[155]].join("")
}p+=b[156];
return p
}function i(p){if(!(g.MD(a[5]))){g.MN(a[5],g.MC(a[6]))
}p+=b[22];
g.MN(a[7],undefined);
p+=b[4];
if(g.MK(g.MC(a[8]))){p+=b[23];
g.MN(a[7],b[24]);
p+=b[4]
}p+=[b[25],g.MC(a[5]),b[26]].join("");
if(g.MD(a[9])){p+=[b[27],g.MC(a[9]),b[28]].join("")
}else{p+=b[29]
}p+=[b[30],g.MC(a[7]),b[31]].join("");
if(g.MK(g.MC(a[8]))){p+=[b[32],g.MC(a[10]),b[16]].join("");
if(g.MK(g.ATLAS_ENV("isPartner413084"))){p+=b[33]
}p+=[b[34],g.MC(a[11]),b[35],g.MC(a[12]),b[36]].join("")
}else{p+=[b[37],g.MC(a[12]),b[6]].join("")
}p+=b[38];
if(g.MJ(g.MC(a[13]))){p+=[b[39],g.MC(a[13]),b[40]].join("")
}p+=[b[41],g.MB(a[14]),b[42]].join("");
return p
}function h(q){g.MN(a[16],b[43]);
q+=b[4];
g.MN(a[17],b[44]);
q+=b[22];
g.MN(a[18],undefined);
q+=b[4];
if((g.MJ(g.HELPER_IW_B_BLOCKS(g.MC(a[19]),0,"num_rooms_available_translated"))&&((g.MJ(g.ATLAS_TRACK("eGBUYSaBZLOAXe"))||g.MJ(g.ATLAS_TRACK("eGOQPBRNSaBGKe")))||g.MJ(g.ATLAS_TRACK("eGOLaBQPBRNSaBGKe"))))){q+=b[5];
g.MN(a[18],b[45]);
q+=b[4]
}q+=b[22];
if(g.MJ(g.ATLAS_GET_VARIANT("eGYSaBZEGJGEO"))){q+=b[5];
g.MN(a[20],b[46]);
q+=b[4]
}q+=b[22];
g.MN(a[0],undefined);
q+=b[4];
if((((g.MJ(g.ATLAS_STAGE("eGBUYSaBNHTXT"))&&g.MJ(g.ATLAS_TRACK("eGBUYSaBNHTXT")))||(g.MJ(g.ATLAS_STAGE("ebcfESAcCSBCHC"))&&g.MJ(g.ATLAS_TRACK("ebcfESAcCSBCHC"))))||(g.MJ(g.ATLAS_STAGE("eGOQPBRNZRUXe"))&&g.MJ(g.ATLAS_TRACK("eGOQPBRNZRUXe"))))){q+=b[5];
g.MN(a[0],b[47]);
q+=b[4]
}q+=b[22];
g.MN(a[21],undefined);
q+=b[4];
if((g.MJ(g.ATLAS_STAGE("ebcYSaBTZNZRO"))&&g.MJ(g.ATLAS_TRACK("ebcYSaBTZNZRO")))){q+=b[5];
g.MN(a[21],b[48]);
q+=b[4]
}q+=b[9];
if((((g.MJ(g.ATLAS_STAGE("eGBUYSaBESRbQYfeCIAFIRe"))&&g.MJ(g.ATLAS_TRACK("eGBUYSaBESRbQYfeCIAFIRe")))||(g.MJ(g.ATLAS_STAGE("eGOQPBRYPTXSbHDUMVbEAKe"))&&g.MJ(g.ATLAS_TRACK("eGOQPBRYPTXSbHDUMVbEAKe"))))||(g.MJ(g.ATLAS_STAGE("eGfESAcCDAYINTITHHWdRLO"))&&g.MJ(g.ATLAS_TRACK("eGfESAcCDAYINTITHHWdRLO"))))){q+=b[5];
g.MN(a[1],b[10]);
q+=b[4]
}else{q+=b[5];
g.MN(a[1],b[11]);
q+=b[4]
}q+=b[22];
g.MN(a[22],undefined);
q+=b[4];
if((g.MJ(g.MC(a[23]))&&(g.MJ(g.ATLAS_STAGE("ebcOQPBRNPIHAEAUeAC"))&&(g.MJ(g.ATLAS_TRACK("ebcOQPBRNPIHAEAUeAC")==2))))){q+=b[5];
g.MN(a[22],b[49]);
q+=b[4]
}q+=b[9];
g.MN(a[24],undefined);
q+=b[4];
if(g.MJ(g.ATLAS_ENV("isHPSu"))){q+=b[5];
g.MN(a[24],b[50]);
q+=b[4]
}q+=b[22];
if(((g.MJ(g.MC(a[29]))&&(g.MJ(g.ATLAS_STAGE("ebcOLaCbJFYSaBbJPBIO",1))&&g.MJ(g.ATLAS_TRACK("ebcOLaCbJFYSaBbJPBIO"))))||(g.MJ(g.ATLAS_STAGE("ebcBUVKQPbBbLOAPESKC",1))&&g.MJ(g.ATLAS_TRACK("ebcBUVKQPbBbLOAPESKC"))))){q+=b[5];
g.MN(a[25],b[51]);
q+=b[5];
g.MN(a[26],b[52]);
q+=b[5];
g.MN(a[27],b[53]);
q+=b[5];
g.MN(a[28],b[54]);
q+=b[4]
}q+=b[22];
if(((g.MJ(g.ATLAS_STAGE("ebcBUYSaBbRPUMVBFUWe"))&&(g.MJ(g.ATLAS_TRACK("ebcBUYSaBbRPUMVBFUWe")==2)))||(g.MJ(g.ATLAS_STAGE("ebcOQPBRYSKDYEaNdNC"))&&(g.MJ(g.ATLAS_TRACK("ebcOQPBRYSKDYEaNdNC")==2))))){q+=b[55];
g.MN(a[25],b[51]);
q+=b[3];
g.MN(a[26],b[52]);
q+=b[3];
g.MN(a[27],b[53]);
q+=b[3];
g.MN(a[28],b[54]);
q+=b[4]
}q+=b[9];
if((g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))){q+=b[5];
g.MN(a[30],b[56]);
q+=b[5];
g.MN(a[31],b[57]);
q+=b[4]
}else{if((g.MJ(g.ATLAS_ENV("action")+""==="hotel"))){q+=b[5];
g.MN(a[30],b[58]);
q+=b[5];
g.MN(a[31],b[59]);
q+=b[4]
}else{if(g.MJ(g.ATLAS_ENV("isLP"))){q+=b[5];
g.MN(a[30],b[60]);
q+=b[5];
g.MN(a[31],b[61]);
q+=b[4]
}}}q+=b[22];
if((g.MK(g.ATLAS_ENV("isPartner413084"))&&(g.MJ(g.ATLAS_TRACK("ebcOQPBRNZeECOZAEFZWWHT"))||g.MJ(g.ATLAS_TRACK("ebcBUYSaBNeFKDNJFbdHHYO"))))){q+=b[5];
g.MN(a[32],b[62]);
q+=b[4]
}q+=b[22];
if((g.MJ(g.ATLAS_ENV("lpFullWidthMap"))&&g.MJ(g.MC(a[33])))){q+=b[5];
g.MN("b_url",g.MC(a[33]));
q+=b[4]
}q+=b[9];
g.MN(a[34],undefined);
q+=b[4];
if(((g.MJ(/current/.test(g.MC(a[35]))))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBHRXOSPQfQVT")))){q+=b[5];
g.MN(a[34],b[63]);
q+=b[4]
}else{q+=b[5];
g.MN(a[34],undefined);
q+=b[4]
}q+=b[22];
g.MN(a[36],undefined);
q+=b[4];
if(((g.MJ((g.ATLAS_TRACK("ebcOLaCbJFYSaBdBaHIKKDfXYZBdRHe")||g.ATLAS_TRACK("ebcBUVKQPbBbLOMSVEKXRPLRBdSMHET"))==2))||g.MJ(g.ATLAS_TRACK("VOGBUYSaBdBbCANCdZBSeLT")))){q+=b[6];
if(g.MJ(g.ATLAS_ENV("isRTL"))){q+=b[64];
g.MN(a[36],b[65]);
q+=b[6]
}else{q+=b[3];
g.MN(a[36],b[66]);
q+=b[6]
}q+=b[4]
}q+=b[9];
g.MN(a[37],undefined);
q+=b[4];
if((((g.MJ(g.ATLAS_STAGE("ebcBUYSaBYdEaXRJbSYT"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBYdEaXRJbSYT")))||(g.MJ(g.ATLAS_STAGE("ebcOQPBRNHcHRKKVSTHe"))&&g.MJ(g.ATLAS_TRACK("ebcOQPBRNHcHRKKVSTHe"))))||(g.MJ(g.ATLAS_STAGE("ebcfESAcCSCbIXVVJNeC"))&&g.MJ(g.ATLAS_TRACK("ebcfESAcCSCbIXVVJNeC"))))){q+=b[5];
g.MN(a[37],b[67]);
q+=b[4]
}else{q+=b[5];
g.MN(a[37],b[68]);
q+=b[4]
}q+=b[22];
if((((g.MJ(g.MC(a[39]))&&(g.MJ(g.ATLAS_STAGE("ebcBUVKQPbBbLOdaHOBQHe"))&&g.MJ(g.ATLAS_TRACK("ebcBUVKQPbBbLOdaHOBQHe"))))||(g.MJ(g.ATLAS_STAGE("ebcOLaCbJFYSaBcWRBNbWe"))&&g.MJ(g.ATLAS_TRACK("ebcOLaCbJFYSaBcWRBNbWe"))))||(g.MJ(g.ATLAS_STAGE("ebcfEWXdBGZJNKZGMKZQBO"))&&g.MJ(g.ATLAS_TRACK("ebcfEWXdBGZJNKZGMKZQBO"))))){q+=b[5];
g.MN(a[38],b[69]);
q+=b[4]
}q+=b[4];
if(g.MK(g.ATLAS_ENV("tdot"))){q+=b[5];
var p="";
p+=b[70];
if((g.MJ(g.ATLAS_ENV("action")+""==="hotel"))){p+=[b[71],"ebcBUVKQPbBbLOdaHOBQHe",b[72]].join("")
}else{if((g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))){p+=[b[71],"ebcOLaCbJFYSaBcWRBNbWe",b[73]].join("")
}else{if(g.MJ(g.ATLAS_ENV("isLP"))){p+=[b[71],"ebcfEWXdBGZJNKZGMKZQBO",b[72]].join("")
}}}p+=b[3];
if(g.MD(a[38])){p+=[b[74],g.F.html(g.MC(a[39])),b[75]].join("")
}p+=b[76];
g.MN(a[40],p);
q+=b[4]
}q+=[b[14],g.MB(a[1]),b[77],g.MC(a[18]),b[78],g.MB(a[20]),b[78],g.MB(a[0]),b[78],g.MC(a[21]),b[78],g.MC(a[35]),b[78],g.MC(a[34]),b[78],g.MC(a[26]),b[79]].join("");
if(((g.MJ(g.ATLAS_TRACK("eGBUYSaBNHTXT"))||g.MJ(g.ATLAS_TRACK("ebcfESAcCSBCHC")))||g.MJ(g.ATLAS_TRACK("eGOQPBRNZRUXe")))){q+=b[80]
}q+=b[81];
if(((g.MJ(g.MC(a[42]))&&(g.MJ(g.ATLAS_TRACK("ebcBUYSaBbRPUMVBFUWe")==2)))||(g.MJ(g.ATLAS_TRACK("ebcOQPBRYSKDYEaNdNC")==2)))){q+=b[82];
if((g.MJ(g.ATLAS_ENV("action")+""==="hotel"))){q+=b[83];
g.MN(a[41],[b[84],"ebcBUYSaBbRPUMVBFUWe",b[85]].join(""));
q+=b[21]
}else{if((g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))){q+=b[83];
g.MN(a[41],[b[84],"ebcOQPBRYSKDYEaNdNC",b[85]].join(""));
q+=b[21]
}}q+=[b[86],g.MB(a[41]),b[87],g.MB(a[41]),b[88]].join("");
var w=(g.MC(a[42])||[]);
j.unshift({b_url:null});
for(var r=1,t=w.length,u;
r<=t;
r++){j[0]["b_url"]=u=w[r-1];
q+=b[89];
if((g.MJ(r==1))){q+=b[90]
}q+=[b[91],u,b[92]].join("")
}j.shift();
q+=b[93]
}else{if(((g.MJ(g.MC(a[29]))&&(g.MJ(g.ATLAS_STAGE("ebcOLaCbJFYSaBbJPBIO",1))&&g.MJ(g.ATLAS_TRACK("ebcOLaCbJFYSaBbJPBIO"))))||(g.MJ(g.ATLAS_STAGE("ebcBUVKQPbBbLOAPESKC",1))&&g.MJ(g.ATLAS_TRACK("ebcBUVKQPbBbLOAPESKC"))))){q+=[b[94],g.MC(a[22]),b[95],g.MC(a[29]),b[96]].join("");
if((g.MJ(g.MC(a[23]))&&(g.MJ(g.ATLAS_STAGE("ebcOQPBRNPIHAEAUeAC"))&&(g.MJ(g.ATLAS_TRACK("ebcOQPBRNPIHAEAUeAC")==2))))){q+=[b[97],g.MB(a[43]),b[98]].join("")
}q+=b[99]
}else{q+=b[6];
if(g.MD(a[45])){q+=b[100];
if((g.MJ(g.MC(a[44])>1))){q+=b[101]
}q+=b[102];
if((g.MK(g.ATLAS_ENV("tdot"))&&((g.MJ(g.ATLAS_ENV("action")+""==="hotel"))||(g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))))){q+=b[103]
}q+=[b[104],g.MC(a[45]),b[105]].join("")
}q+=b[6]
}}q+=b[6];
if((g.MK(g.MB(a[50]))&&g.MJ(g.MC(a[19])))){q+=b[3];
g.MN(a[46],g.MG(((g.MC(a[19])||[])[0]||{})["rackrate"]));
q+=b[3];
g.MN(a[47],g.MG(((g.MC(a[19])||[])[0]||{})["price_discount"]));
q+=b[3];
if(((g.MJ(g.MB(a[46]))&&g.MJ(g.MB(a[47])))&&(g.MJ(g.MB(a[46])+""!==""+g.MB(a[49]))))){q+=b[21];
if(((g.MJ(g.MB(a[47]))&&(g.MJ(g.ATLAS_STAGE("ebcYSaBBUZEGJGdIeZNALKe"))&&g.MJ(g.ATLAS_TRACK("ebcYSaBBUZEGJGdIeZNALKe"))))||(g.MJ(g.ATLAS_STAGE("ebcYSaBOQFHQVLcAeScbaC"))&&g.MJ(g.ATLAS_TRACK("ebcYSaBOQFHQVLcAeScbaC"))))){q+=b[83];
if((g.MJ(/ca|el|fi|fr|hr|pt|ro|uk|hu|id|lv|ms/.test(g.ATLAS_ENV("lang"))))){q+=[b[106],g.MB(a[47]),b[107]].join("")
}else{if((g.MJ(g.ATLAS_ENV("lang")+""==="tr"))){q+=[b[108],g.MB(a[47]),b[109],g.MB(a[48]),b[110]].join("")
}else{q+=[b[111],g.MB(a[47]),b[112],g.MB(a[48]),b[110]].join("")
}}q+=b[21]
}q+=b[3]
}q+=b[6]
}q+=[b[113],g.MC(a[25]),b[114],g.MC(a[10]),g.MC(a[30]),g.MC(a[24]),b[115],g.MC(a[38]),b[16],g.MC(a[40]),b[78]].join("");
if(g.MK(g.ATLAS_ENV("isPartner413084"))){q+=b[33]
}q+=b[21];
if(((g.MJ(g.ATLAS_STAGE("ebcOQPBRNQWOGKPRHe"))&&g.MJ(g.ATLAS_TRACK("ebcOQPBRNQWOGKPRHe")))||(g.MJ(g.ATLAS_STAGE("ebcBUYSaBcHDQXYHET"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBcHDQXYHET"))))){q+=b[116]
}q+=[b[117],g.MC(a[51]),b[118]].join("");
if(g.MD(a[54])){q+=b[119];
if(g.MD(a[52])){q+=[b[120],g.HELPER_ENV("b_icons_url"),b[121],g.MC(a[52]),g.MC(a[53]),b[122]].join("")
}q+=b[123]
}else{q+=[b[124],g.MC(a[52]),g.MC(a[53]),b[125]].join("")
}q+=b[3];
if(g.MD(a[58])){q+=b[21];
if(g.MJ(g.ATLAS_TRACK("eGBUOQPBRYCDUfcXIFNKNMC"))){}q+=b[21];
if(g.MJ(g.ATLAS_TRACK("eGfESAcCRBTPOaXGZLOLHT"))){}q+=b[82];
if((g.MJ(g.ATLAS_GET_VARIANT("eGBUOQPBRYCDUfcXIFNKNMC"))||g.MJ(g.ATLAS_GET_VARIANT("eGfESAcCRBTPOaXGZLOLHT")))){q+=[b[126],(g.MC(a[55])?g.MB(a[56]):g.MB(a[57])),b[127]].join("")
}else{q+=b[128]
}q+=b[3]
}q+=b[129];
g.MN(a[59],g.MG((g.MC(a[60])||{})["smart"]));
q+=b[55];
if(!((g.MJ(g.MC(a[59]))&&(g.MJ(g.ATLAS_STAGE("ebcOQPBRNRWSdPJNVBUKcKe"))&&g.MJ(g.ATLAS_TRACK("ebcOQPBRNRWSdPJNVBUKcKe")))))){q+=b[82];
if(((g.MJ(g.MC(a[59]))&&(g.MJ(g.ATLAS_STAGE("ebcOQPBRYYNPDcNVBUKcKe"))&&g.MJ(g.ATLAS_TRACK("ebcOQPBRYYNPDcNVBUKcKe"))))||(g.MJ(g.ATLAS_STAGE("ebcBUYSaBBBYPNBJOTXNXe"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBBBYPNBJOTXNXe"))))){q+=b[83];
if(g.MD(a[59])){q+=[b[130],g.strings("maps-iw-deals-badge"),b[83]].join("")
}q+=b[21]
}else{q+=b[83];
if(g.MD(a[59])){q+=b[130];
g.MN("b_smart_deal_show",(g.MJ(g.ATLAS_ENV("action")+""==="searchresults")));
q+=b[130];
if(g.MD(a[61])){q+=[b[131],g.strings("value-deal-label"),b[130]].join("")
}q+=b[83]
}q+=b[21]
}q+=b[3]
}q+=b[129];
if((g.MJ(g.MC(a[63]))&&(((g.MJ(g.ATLAS_STAGE("ebcBUYSaBIdOccPSTRe"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBIdOccPSTRe")))||(g.MJ(g.ATLAS_STAGE("ebcOQPBRYVcTQQDBeKe"))&&g.MJ(g.ATLAS_TRACK("ebcOQPBRYVcTQQDBeKe"))))||(g.MJ(g.ATLAS_STAGE("ebcfESAcCRDfUFFdZYO"))&&g.MJ(g.ATLAS_TRACK("ebcfESAcCRDfUFFdZYO")))))){q+=b[21];
g.MN(a[62],g.MC(a[63]));
q+=b[132];
if((g.MJ(g.ATLAS_ENV("action")+""==="hotel"))){q+=[b[133],"ebcBUYSaBIdOccPSTRe",b[134]].join("")
}else{if((g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))){q+=[b[133],"ebcOQPBRYVcTQQDBeKe",b[134]].join("")
}else{if(g.MJ(g.ATLAS_ENV("isLP"))){q+=[b[133],"ebcfESAcCRDfUFFdZYO",b[134]].join("")
}}}q+=[b[135],g.MB(a[64]),b[136],g.MC(a[63]),b[137]].join("")
}q+=b[138];
if(((g.MJ(g.ATLAS_TRACK("eGBUYSaBNHTXT"))||g.MJ(g.ATLAS_TRACK("ebcfESAcCSBCHC")))||g.MJ(g.ATLAS_TRACK("eGOQPBRNZRUXe")))){q+=b[55];
if((g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))){q+=b[139];
q=m(q);
q+=b[157]
}q+=b[129];
if(g.MJ(g.MC(a[79]))){q+=b[158];
if(g.MD(a[80])){q+=b[159];
if(((g.MJ(g.ATLAS_STAGE("ebcBUYSaBcMEbSHAJDFYSCC"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBcMEbSHAJDFYSCC")))||(g.MJ(g.ATLAS_STAGE("ebcOQPBRNLEHSTRbAOdPBMO"))&&g.MJ(g.ATLAS_TRACK("ebcOQPBRNLEHSTRbAOdPBMO"))))){q+=b[131];
if(g.MJ(g.ATLAS_TRACK("eGBfQHKbdCMAWe"))){q+=[b[160],g.format_number_decimal(g.MC(a[79])),b[131]].join("")
}else{q+=[b[160],g.MC(a[79]),b[131]].join("")
}q+=[b[131],g.MC(a[80]),b[130]].join("")
}else{q+=[b[131],g.MC(a[80]),b[131]].join("");
if(g.MJ(g.ATLAS_TRACK("eGBfQHKbdCMAWe"))){q+=[b[160],g.format_number_decimal(g.MC(a[79])),b[131]].join("")
}else{q+=[b[160],g.MC(a[79]),b[131]].join("")
}q+=b[130]
}q+=b[161]
}q+=b[162];
g.MN(a[81],g.MC(a[82]));
q+=b[162];
if((g.MJ(g.MC(a[82]))&&(g.MJ(g.ATLAS_STAGE("ebcYSaBcOcTYHWMHET"))&&g.MJ(g.ATLAS_TRACK("ebcYSaBcOcTYHWMHET"))))){q+=[b[163],g.MB(a[83]),b[164]].join("");
if((g.MJ(g.MC(a[23]))&&(g.MJ(g.ATLAS_STAGE("ebcBUYSaBYWEIFIeTJWe"))&&(g.MJ(g.ATLAS_TRACK("ebcBUYSaBYWEIFIeTJWe")==2))))){q+=[b[165],g.MB(a[43]),b[164]].join("")
}q+=b[83]
}else{q+=b[130];
if(g.MD(a[85])){q+=[b[166],g.MC(a[84]),b[164]].join("")
}q+=b[83]
}q+=b[157]
}q+=b[167];
if((g.MJ(g.MC(a[86]))&&(g.MJ(g.ATLAS_ENV("action")+""==="hotel")))){q+=b[168];
if(!((g.MJ(g.ATLAS_STAGE("ebcBUYSaBHaZFBKWXbbQMdOeZZSeae"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBHaZFBKWXbbQMdOeZZSeae"))))){q+=[b[169],g.MC(a[86]),b[170]].join("")
}q+=b[3]
}q+=b[171]
}q+=b[172];
if(!(((g.MJ(g.ATLAS_TRACK("eGBUYSaBNHTXT"))||g.MJ(g.ATLAS_TRACK("ebcfESAcCSBCHC")))||g.MJ(g.ATLAS_TRACK("eGOQPBRNZRUXe"))))){q+=b[6];
if((g.MJ(g.MC(a[66]))&&g.MJ(g.ATLAS_TRACK("eGYSaBaUJBZNSTHT")))){q+=b[3];
g.MN(a[65],g.MC(a[66]));
q+=b[6]
}q+=b[173];
q=l(q);
q+=b[174]
}q+=b[2];
if(!(((g.MJ(g.ATLAS_TRACK("eGBUYSaBNHTXT"))||g.MJ(g.ATLAS_TRACK("ebcfESAcCSBCHC")))||g.MJ(g.ATLAS_TRACK("eGOQPBRNZRUXe"))))){q+=b[175];
if((g.MJ(g.MC(a[86]))&&(g.MJ(g.ATLAS_ENV("action")+""==="hotel")))){q+=[b[176],g.MC(a[86]),b[177]].join("")
}q+=b[178];
if(!(g.MJ(g.ATLAS_TRACK("ebcfESAcCFGZJdQFePBYKe")))){q+=b[179]
}q+=b[180]
}q+=b[181];
if(g.MJ(g.MC(a[19])["b_room_group"])){q+=b[21];
g.MN(a[49],g.MC(a[19])["b_u_total_price"]);
q+=b[21];
g.MN(a[87],g.MC(a[19])["b_total_adults_and_children"]);
q+=b[3]
}else{q+=b[21];
var w=(g.MC(a[19])||[]);
j.unshift(null);
for(var r=1,t=w.length;
r<=t;
r++){j[0]=w[r-1];
q+=b[83];
g.MN(a[49],g.MB(a[88]));
q+=b[83];
g.MN(a[87],g.MB(a[89]));
q+=b[21]
}j.shift();
q+=b[3]
}q+=b[55];
g.MN(a[90],(g.MI(g.MC(a[91]))-g.MI(1)));
q+=b[181];
if(g.MD(a[50])){q+=b[21];
g.MN(a[92],b[182]);
q+=b[3]
}else{if(((g.MJ((g.MC(a[19])).length)&&g.MJ(g.MC(a[19])[0]["checkin"]))&&g.MJ(g.MC(a[19])[0]["checkout"]))){q+=b[21];
g.MN(a[92],b[183]);
q+=b[3]
}else{if(g.MD(a[19])){q+=b[21];
if((g.MJ(g.MC(a[44])>1))){q+=b[83];
g.MN(a[92],b[184]);
q+=b[21]
}else{q+=b[83];
g.MN(a[92],b[185]);
q+=b[21]
}q+=b[3]
}else{if((g.MJ(g.MB(a[93])+""==="false"))){q+=b[21];
g.MN(a[92],b[186]);
q+=b[3]
}}}}q+=b[3];
g.MN(a[46],g.MG(((g.MC(a[19])||[])[0]||{})["rackrate"]));
q+=b[3];
if(((g.MJ(g.MB(a[46]))&&(g.MJ(g.MB(a[46])+""!==""+g.MB(a[49]))))&&g.MJ(g.ATLAS_TRACK("eGYSaBZEGJGEO")))){q+=b[21];
g.MN(a[92],[g.MB(a[92]),b[187]].join(""));
q+=b[3]
}q+=b[3];
if(g.MD(a[18])){q+=b[21];
g.MN(a[92],[g.MB(a[92]),b[188]].join(""));
q+=b[3]
}q+=b[55];
if((g.MJ(g.MC(a[79]))&&g.MK(((g.ATLAS_TRACK("eGBUYSaBNHTXT")||g.ATLAS_TRACK("ebcfESAcCSBCHC"))||g.ATLAS_TRACK("eGOQPBRNZRUXe"))))){q+=b[189];
if(g.MD(a[80])){q+=b[190];
if(((g.MJ(g.ATLAS_STAGE("ebcBUYSaBcMEbSHAJDFYSCC"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBcMEbSHAJDFYSCC")))||(g.MJ(g.ATLAS_STAGE("ebcOQPBRNLEHSTRbAOdPBMO"))&&g.MJ(g.ATLAS_TRACK("ebcOQPBRNLEHSTRbAOdPBMO"))))){q+=b[160];
if(g.MJ(g.ATLAS_TRACK("eGBfQHKbdCMAWe"))){q+=[b[191],g.format_number_decimal(g.MC(a[79])),b[160]].join("")
}else{q+=[b[191],g.MC(a[79]),b[160]].join("")
}q+=[b[160],g.MC(a[80]),b[131]].join("")
}else{q+=[b[160],g.MC(a[80]),b[160]].join("");
if(g.MJ(g.ATLAS_TRACK("eGBfQHKbdCMAWe"))){q+=[b[191],g.format_number_decimal(g.MC(a[79])),b[160]].join("")
}else{q+=[b[191],g.MC(a[79]),b[160]].join("")
}q+=b[131]
}q+=b[192]
}q+=b[130];
g.MN(a[81],g.MC(a[82]));
q+=b[193];
if((g.MJ(g.MC(a[82]))&&(g.MJ(g.ATLAS_STAGE("ebcYSaBcOcTYHWMHET"))&&g.MJ(g.ATLAS_TRACK("ebcYSaBcOcTYHWMHET"))))){q+=[b[166],g.MB(a[83]),b[164]].join("")
}else{q+=b[131];
if(g.MD(a[85])){q+=[b[194],g.MC(a[84]),b[195]].join("")
}q+=b[130]
}q+=b[196]
}q+=b[55];
if((g.MJ(g.ATLAS_STAGE("ebcBUYSaBYdXfTYMNJFC"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBYdXfTYMNJFC")))){q+=b[197];
q=l(q);
q+=b[157]
}q+=[b[198],g.MB(a[92]),b[199]].join("");
g.MN(a[94],g.ATLAS_ENV("checkinDay"));
q+=b[83];
g.MN(a[95],g.ATLAS_ENV("checkoutDay"));
q+=b[162];
g.MN(a[96],g.ATLAS_ENV("checkinMonthShort"));
q+=b[162];
g.MN(a[97],g.ATLAS_ENV("checkoutMonthShort"));
q+=b[83];
g.MN(a[98],g.ATLAS_ENV("checkoutMonthShort"));
q+=b[200];
if(g.MD(a[50])){q+=b[201];
if((g.MJ(g.ATLAS_TRACK("ebcOQPBRNZRUAJJSVHDFNIVSHT"))||g.MJ(g.ATLAS_TRACK("ebcBUYSaBNHTIPfbJEfZBWIbYO")))){q+=b[130];
g.MN(a[99],[b[130],g.HELPER_ENV("ajax_hotel_details_soldout"),b[130]].join(""));
q+=b[130];
g.MN(a[100],[b[130],g.HELPER_ENV("ajax_hotel_details_soldout"),b[130]].join(""));
q+=b[202];
if(((((((((((g.MJ(g.MB(a[94])+""===""))||(g.MJ(g.MB(a[95])+""==="")))||(g.MJ(g.MB(a[96])+""==="")))||(g.MJ(g.MB(a[97])+""==="")))||(g.MJ(g.MB(a[98])+""==="")))||g.MK(g.MB(a[94])))||g.MK(g.MB(a[95])))||g.MK(g.MB(a[96])))||g.MK(g.MB(a[97])))||g.MK(g.MB(a[98])))){q+=[b[131],g.HELPER_ENV("ajax_hotel_details_soldout"),b[130]].join("")
}else{q+=b[131];
if((g.MJ(g.MB(a[96])+""===""+g.MB(a[98])))){q+=[b[160],g.MB(a[101]),b[131]].join("")
}else{q+=[b[160],g.MB(a[102]),b[131]].join("")
}q+=b[130]
}q+=b[203]
}else{q+=[b[130],g.HELPER_ENV("ajax_hotel_details_soldout"),b[83]].join("")
}q+=b[204]
}else{if(((g.MJ((g.MC(a[19])).length)&&g.MJ(g.MC(a[19])[0]["checkin"]))&&g.MJ(g.MC(a[19])[0]["checkout"]))){q+=b[205];
if((g.MJ(g.ATLAS_TRACK("eGBUHaZFTSDNYQLEHJeKe"))||g.MJ(g.ATLAS_TRACK("eGOQRWSEeTOZPbaPWAUC")))){q+=[b[206],g.MG(((g.MC(a[19])||[])[0]||{})["price"]),b[207]].join("")
}else{q+=b[131];
if(g.MJ(g.ATLAS_TRACK("eGBUYSaBGcPDeBEJYcMEfTRe"))){q+=b[208];
if((g.MJ(g.ATLAS_ENV("currency")+""==="EUR"))){q+=b[209];
g.MN(a[103],b[210]);
q+=b[191]
}else{if((g.MJ(g.ATLAS_ENV("currency")+""==="GBP"))){q+=b[209];
g.MN(a[103],b[211]);
q+=b[191]
}else{if((g.MJ(g.ATLAS_ENV("currency")+""==="JPY"))){q+=b[209];
g.MN(a[103],b[212]);
q+=b[191]
}else{if((g.MJ(g.ATLAS_ENV("currency")+""==="CNY"))){q+=b[209];
g.MN(a[103],b[213]);
q+=b[191]
}else{q+=b[214];
g.MN(a[103],b[215]);
q+=b[191]
}}}}q+=[b[216],g.MC(a[103]),b[217],g.MC(a[104]),b[218]].join("");
if((g.MJ(g.ATLAS_ENV("currency")+""==="EUR"))){q+=b[219]
}else{if((g.MJ(g.ATLAS_ENV("currency")+""==="GBP"))){q+=b[220]
}else{if((g.MJ(g.ATLAS_ENV("currency")+""==="JPY"))){q+=b[221]
}else{if((g.MJ(g.ATLAS_ENV("currency")+""==="CNY"))){q+=b[222]
}else{q+=b[223]
}}}}q+=b[224]
}else{q+=[b[191],g.HELPER_FROM_FRICE(g.MC(a[19])[0]["price"]),b[131]].join("")
}q+=b[131]
}q+=b[225]
}else{if(g.MD(a[19])){q+=b[226];
g.MN(a[46],g.MG(((g.MC(a[19])||[])[0]||{})["rackrate"]));
q+=b[130];
if(((g.MJ(g.MB(a[46]))&&(g.MJ(g.MB(a[46])+""!==""+g.MB(a[49]))))&&g.MJ(g.ATLAS_TRACK("eGYSaBZEGJGEO")))){q+=b[131];
g.MN(a[47],g.MG(((g.MC(a[19])||[])[0]||{})["price_discount"]));
q+=b[131];
g.MN(a[105],g.MB(a[47]));
q+=b[131];
var p="";
p+=b[160];
if(g.MJ(g.MB(a[46]))){p+=b[227];
if((g.MJ(g.ATLAS_GET_VARIANT("eGYSaBZEGJGEO")==2))){p+=b[228]
}p+=[b[229],g.MB(a[107]),b[230],g.MB(a[46]),b[231]].join("")
}p+=b[131];
g.MN(a[106],p);
q+=b[130]
}else{q+=b[131];
g.MN(a[106],undefined);
q+=b[130]
}q+=b[226];
g.MN(a[108],g.MC(a[109]));
q+=b[130];
if((g.MJ(g.ATLAS_STAGE("eGBUYSaBdbLMaCffHPSaTfRe"))&&g.MJ(g.ATLAS_TRACK("eGBUYSaBdbLMaCffHPSaTfRe")))){q+=b[131];
g.MN(a[110],undefined);
q+=b[130]
}else{q+=b[131];
g.MN(a[110],b[69]);
q+=b[130]
}q+=b[226];
g.MN(a[111],b[232]);
q+=b[130];
g.MN(a[112],b[233]);
q+=b[202];
var p="";
p+=[b[234],g.MB(a[87]),b[78],g.MB(a[110]),b[235],"eGBUYSaBdbLMaCffHPSaTfRe",b[236],g.MB(a[106]),b[237],g.MB(a[49]),b[238]].join("");
if(((((g.MJ(g.MC(a[108])>0))&&(g.MJ(g.MC(a[108])==1)))&&g.MJ(g.ATLAS_STAGE("ebcYSaBGceZdAVIXe")))&&g.MJ(g.ATLAS_TRACK("ebcYSaBGceZdAVIXe")))){p+=b[239];
if(g.MJ(g.ATLAS_TRACK("ebcYSaBGcBKJKINHC"))){p+=b[240]
}p+=[b[241],g.VP(b[242],"b_checkin_checkout_interval"),b[243]].join("")
}else{if((g.MJ(g.MC(a[108])>1))){p+=b[239];
if(g.MJ(g.ATLAS_TRACK("ebcYSaBGcBKJKINHC"))){p+=b[240]
}p+=[b[241],g.VP(b[242],"b_checkin_checkout_interval"),b[244]].join("")
}}p+=b[130];
g.MN(a[113],p);
q+=b[226];
if((g.MJ(g.HELPER_IW_B_BLOCKS(g.MC(a[19]),0,"num_rooms_available_translated"))&&((g.MJ(g.ATLAS_TRACK("eGBUYSaBZLOAXe"))||g.MJ(g.ATLAS_TRACK("eGOQPBRNSaBGKe")))||g.MJ(g.ATLAS_TRACK("eGOLaBQPBRNSaBGKe"))))){q+=[b[245],g.MC(a[113]),b[246],g.HELPER_IW_B_BLOCKS(g.MC(a[19]),0,"num_rooms_available_translated"),b[247]].join("")
}else{q+=[b[131],g.MC(a[113]),b[130]].join("")
}q+=b[162]
}else{if((g.MJ(g.MB(a[93])+""==="false"))){q+=[b[248],g.strings("map_occupancy_disclaimer_1"),b[249]].join("")
}}}}q+=b[250];
var p="";
p+=b[83];
if(g.MD(a[120])){p+=b[130];
if(g.MD(a[50])){p+=b[131];
if(g.MK(g.MC(a[116]))){p+=[b[160],g.MB(a[115]),b[131]].join("")
}else{p+=[b[160],g.MB(a[117]),b[131]].join("")
}p+=b[130]
}else{p+=b[131];
if((g.MJ(g.ATLAS_STAGE("eGBUYSaBEESMbSYT"))&&g.MJ(g.ATLAS_TRACK("eGBUYSaBEESMbSYT")))){p+=[b[160],g.MB(a[118]),b[131]].join("")
}else{p+=b[160];
if((((g.MJ(g.ATLAS_STAGE("ebcOQPBRYcYFMbcMZFNTeae"))&&g.MJ(g.ATLAS_TRACK("ebcOQPBRYcYFMbcMZFNTeae")))||(g.MJ(g.ATLAS_STAGE("ebcBUYSaBdBbCANCdZBSeLT"))&&g.MJ(g.ATLAS_TRACK("ebcBUYSaBdBbCANCdZBSeLT"))))||(g.MJ(g.ATLAS_STAGE("VOGBUYSaBdBbCANCdZBSeLT"))&&g.MJ(g.ATLAS_TRACK("VOGBUYSaBdBbCANCdZBSeLT"))))){p+=[b[191],g.MB(a[119]),b[160]].join("")
}else{p+=[b[191],g.MB(a[119]),b[160]].join("")
}p+=b[131]
}p+=b[130]
}p+=b[83]
}else{p+=b[130];
if(g.MK(g.MC(a[116]))){p+=[b[131],g.MB(a[115]),b[130]].join("")
}else{p+=[b[131],g.MB(a[117]),b[130]].join("")
}p+=b[83]
}p+=b[21];
g.MN(a[114],p);
q+=b[21];
if(g.MK(((g.ATLAS_STAGE("ebcOLaCbJFYSaBbJZSYT",1)&&g.ATLAS_TRACK("ebcOLaCbJFYSaBbJZSYT"))||(g.ATLAS_STAGE("ebcBUVKQPbBbLOAPdZUO",1)&&g.ATLAS_TRACK("ebcBUVKQPbBbLOAPdZUO"))))){q+=b[21];
if(g.MK((g.MB(a[50])&&(g.ATLAS_GET_VARIANT("eGYSaBAeCQJJYDBeWe")||g.ATLAS_GET_VARIANT("eGYSaBAeCQJJYDBePART"))))){q+=[b[251],g.MC(a[27]),b[252],g.MC(a[10]),g.MC(a[31]),g.MC(a[24]),g.MC(a[32]),b[253],g.MC(a[37]),b[254]].join("");
if(g.MJ(g.ATLAS_TRACK("ebcBUYSaBNHFVXKNUADDbddSdceUPTDPFHe"))){q+=b[255]
}q+=b[85];
if(g.MK(g.ATLAS_ENV("isPartner413084"))){q+=b[33]
}q+=b[256];
if(g.MJ(g.MB(a[50]))){q+=[b[160],g.MC(a[114]),b[131]].join("")
}else{if(((g.MJ(g.MC(a[120]))&&g.MK(g.MB(a[50])))&&((g.MJ(g.ATLAS_STAGE("ebcOLaCbJFYSaBdBaHIKKDfXYZBdRHe"))&&g.MJ(g.ATLAS_TRACK("ebcOLaCbJFYSaBdBaHIKKDfXYZBdRHe")))||(g.MJ(g.ATLAS_STAGE("ebcBUVKQPbBbLOMSVEKXRPLRBdSMHET"))&&g.MJ(g.ATLAS_TRACK("ebcBUVKQPbBbLOMSVEKXRPLRBdSMHET")))))){q+=b[257];
if((g.MJ(/213|220|228|230|232/.test(g.MC(a[122]))))){q+=[b[191],g.MB(a[121]),b[78],g.MC(a[36]),b[160]].join("")
}else{if((g.MJ(/201|219|230|229/.test(g.MC(a[122]))))){q+=[b[191],g.MB(a[123]),b[78],g.MC(a[36]),b[160]].join("")
}else{q+=[b[191],g.MB(a[124]),b[78],g.MC(a[36]),b[160]].join("")
}}q+=b[131]
}else{if(((g.MJ(g.MC(a[120]))&&g.MK(g.MB(a[50])))&&(g.MJ(g.ATLAS_STAGE("VOGBUYSaBdBbCANCdZBSeLT"))&&g.MJ(g.ATLAS_TRACK("VOGBUYSaBdBbCANCdZBSeLT"))))){q+=[b[160],g.MC(a[114]),b[78],g.MC(a[36]),b[131]].join("")
}else{q+=[b[160],g.MC(a[114]),b[131]].join("")
}}}q+=b[258]
}q+=b[21]
}q+=b[259];
if(!(((g.MJ(g.ATLAS_TRACK("eGBUYSaBNHTXT"))||g.MJ(g.ATLAS_TRACK("ebcfESAcCSBCHC")))||g.MJ(g.ATLAS_TRACK("eGOQPBRNZRUXe"))))){q+=b[260]
}q+=b[172];
if(((g.MJ(g.ATLAS_TRACK("eGBUYSaBNHTXT"))||g.MJ(g.ATLAS_TRACK("ebcfESAcCSBCHC")))||g.MJ(g.ATLAS_TRACK("eGOQPBRNZRUXe")))){q+=b[2];
if(!(((g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))||g.MJ(g.ATLAS_TRACK("ebcBUYSaBYdXfTYMNJFC"))))){q+=b[261];
q=m(q);
q+=b[99]
}q+=b[172]
}q+=b[22];
if(((g.MJ(g.ATLAS_TRACK("eGBUYSaBNHTXT"))||g.MJ(g.ATLAS_TRACK("ebcfESAcCSBCHC")))||g.MJ(g.ATLAS_TRACK("eGOQPBRNZRUXe")))){q+=b[262];
if(((g.MJ(g.ATLAS_STAGE("ebcOLaCbJFYSaBbJZSYT",1))&&g.MJ(g.ATLAS_TRACK("ebcOLaCbJFYSaBbJZSYT")))||(g.MJ(g.ATLAS_STAGE("ebcBUVKQPbBbLOAPdZUO",1))&&g.MJ(g.ATLAS_TRACK("ebcBUVKQPbBbLOAPdZUO"))))){q+=[b[263],g.MC(a[10]),g.MC(a[31]),g.MC(a[24]),g.MC(a[32]),b[264],g.MC(a[37]),b[16]].join("");
if(g.MK(g.ATLAS_ENV("isPartner413084"))){q+=b[33]
}q+=b[265];
if(g.MJ(g.MB(a[50]))){q+=[b[21],g.MC(a[114]),b[55]].join("")
}else{if(((g.MJ(g.MC(a[120]))&&g.MK(g.MB(a[50])))&&((g.MJ(g.ATLAS_STAGE("ebcOLaCbJFYSaBdBaHIKKDfXYZBdRHe"))&&g.MJ(g.ATLAS_TRACK("ebcOLaCbJFYSaBdBaHIKKDfXYZBdRHe")))||(g.MJ(g.ATLAS_STAGE("ebcBUVKQPbBbLOMSVEKXRPLRBdSMHET"))&&g.MJ(g.ATLAS_TRACK("ebcBUVKQPbBbLOMSVEKXRPLRBdSMHET")))))){q+=b[82];
if((g.MJ(/213|220|228|230|232/.test(g.MC(a[122]))))){q+=[b[83],g.MB(a[121]),b[78],g.MC(a[36]),b[21]].join("")
}else{if((g.MJ(/201|219|230|229/.test(g.MC(a[122]))))){q+=[b[83],g.MB(a[123]),b[78],g.MC(a[36]),b[21]].join("")
}else{q+=[b[83],g.MB(a[124]),b[78],g.MC(a[36]),b[21]].join("")
}}q+=b[3]
}else{q+=[b[21],g.MC(a[114]),b[3]].join("")
}}q+=b[266]
}q+=b[262]
}q+=[b[267],g.MC(a[28]),b[268],g.MB(a[14]),b[269]].join("");
if(!(((g.MJ(g.ATLAS_TRACK("eGBUYSaBNHTXT"))||g.MJ(g.ATLAS_TRACK("ebcfESAcCSBCHC")))||g.MJ(g.ATLAS_TRACK("eGOQPBRNZRUXe"))))){q+=b[270]
}q+=b[20];
return q
}function f(p){g.MN(a[0],undefined);
p+=b[4];
if(g.MJ(g.ATLAS_TRACK("ebcYSaBHCMYQGCIBTAcHe"))){p+=b[5];
if((g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))){p+=b[6];
g.MN(a[0],b[7]);
p+=b[5]
}else{p+=b[6];
g.MN(a[0],b[8]);
p+=b[5]
}p+=b[4]
}p+=b[9];
if((((g.MJ(g.ATLAS_STAGE("eGBUYSaBESRbQYfeCIAFIRe"))&&g.MJ(g.ATLAS_TRACK("eGBUYSaBESRbQYfeCIAFIRe")))||(g.MJ(g.ATLAS_STAGE("eGOQPBRYPTXSbHDUMVbEAKe"))&&g.MJ(g.ATLAS_TRACK("eGOQPBRYPTXSbHDUMVbEAKe"))))||(g.MJ(g.ATLAS_STAGE("eGfESAcCDAYINTITHHWdRLO"))&&g.MJ(g.ATLAS_TRACK("eGfESAcCDAYINTITHHWdRLO"))))){p+=b[5];
g.MN(a[1],b[10]);
p+=b[4]
}else{p+=b[5];
g.MN(a[1],b[11]);
p+=b[4]
}p+=b[9];
if(g.MJ(g.ATLAS_TRACK("ebcYSaBHCMYQGCIBTAcHe"))){p+=b[5];
g.MN(a[2],[b[12],g.MC(a[3]),b[13]].join(""));
p+=b[4]
}p+=[b[14],g.MB(a[1]),b[15],g.MB(a[0]),b[16],g.MC(a[2]),b[17]].join("");
if((g.MK(g.ATLAS_ENV("tdot"))&&((g.MJ(g.ATLAS_ENV("action")+""==="hotel"))||(g.MJ(g.ATLAS_ENV("action")+""==="searchresults"))))){p+=b[18]
}else{p+=b[19]
}p+=b[20];
return p
}function n(p){p+=b[1];
p+=b[1];
return p
}o+=b[0];
o=n(o);
o+=b[2];
if((g.MJ(g.ATLAS_TRACK("ebcYSaBHCMYQGCIBTAcHe"))&&g.MJ(g.MC(a[4])))){o+=b[3];
o=k(o);
o+=b[3];
o=f(o);
o+=b[6]
}else{o+=b[3];
if(((g.MJ(/^city/.test(g.MC(a[6]))))&&(g.MJ(g.ATLAS_TRACK("ebcYSaBaUSBCHC")==2)))){o+=b[21];
o=k(o);
o+=b[21];
j.unshift({b_maps_iw_fixed_classes:g.MC(a[15])});
o=i(o);
j.shift();
o+=b[3]
}else{o+=b[21];
j.unshift({b_maps_iw_fixed_classes:g.MC(a[15])});
o=h(o);
j.shift();
o+=b[3]
}o+=b[6]
}o+=b[271];
return o
}
})());
booking.jstmpl("atlas_iw_control_view_wrapper",(function(){var b=["\n\n    ",'\n    \u003cdiv class="b_maps_sr_fixed_iw_animation_wrapper"\u003e\n    ','\n\n        \u003cdiv class="iw-control__wrapper js-iw-control__wrapper"\u003e\n            \n        \u003c/div\u003e\n\n\n    ',"\n    \u003c/div\u003e\n    ","\n"],a=[],e,d,c;
return function(f){var g="",h=this.fn;
g+=b[0];
if(((h.MJ(h.ATLAS_GET_VARIANT("ebcOQZRUAPBRYaTWPKXe")+""==="2"))||(h.MJ(h.ATLAS_GET_VARIANT("ebcBUNHTIYSaBVOHYRRT")+""==="2")))){g+=b[1]
}g+=b[2];
if(((h.MJ(h.ATLAS_GET_VARIANT("ebcOQZRUAPBRYaTWPKXe")+""==="2"))||(h.MJ(h.ATLAS_GET_VARIANT("ebcBUNHTIYSaBVOHYRRT")+""==="2")))){g+=b[3]
}g+=b[4];
return g
}
})());
booking.jstmpl("atlas_poi_menu",(function(){var b=['\u003cdiv class="atlas_poi_menu"\u003e\n\t\t\u003clabel class="atlas_poi_menu--item atlas_poi_menu--item-id-todo" data-item="todo"\u003e\n\t\t\t\u003cdiv class="atlas_poi_menu--item-inner"\u003e\n\t\t\t\t\u003cinput type="checkbox" class="atlas_poi_menu--check"\u003e\n\t\t\t\t\u003cspan class="atlas_poi_menu--item-title"\u003e',"\u003c/span\u003e\n\t\t\t\u003c/div\u003e\n\t\t\u003c/label\u003e\n\t\u003c/div\u003e"],a=["hp_map_landmark_click_to_discover"],e,d,c;
return function(f){var g="",h=this.fn;
g+=[b[0],h.MB(a[0]),b[1]].join("");
return g
}
})());
booking.jstmpl("atlas_poi_type",(function(){var b=['\u003cdiv class="atlas_poi_iw--cat"\u003e\n\t\t',"/private/hp_map_landmark_amusement_park/name","/private/hp_map_landmark_aquarium/name","/private/hp_map_landmark_church/name","/private/hp_map_landmark_city_hall/name","/private/hp_map_landmark_park/name","/private/hp_map_landmark_zoo/name","/private/hp_map_landmark_place_of_interest/name","/private/hp_map_landmark_museum/name","\n\t\u003c/div\u003e"],a=["type"],e,d,c;
return function(f){var h="",i=this.fn;
h+=b[0];
var g=i.MB(a[0]);
if((i.MJ(g+""==="amusement_park"))){h+=i.ME(b[1],i.MB,i.MN,null)
}else{if((i.MJ(g+""==="aquarium"))){h+=i.ME(b[2],i.MB,i.MN,null)
}else{if((i.MJ(g+""==="church"))){h+=i.ME(b[3],i.MB,i.MN,null)
}else{if((i.MJ(g+""==="city_hall"))){h+=i.ME(b[4],i.MB,i.MN,null)
}else{if((i.MJ(g+""==="park"))){h+=i.ME(b[5],i.MB,i.MN,null)
}else{if((i.MJ(g+""==="zoo"))){h+=i.ME(b[6],i.MB,i.MN,null)
}else{if((i.MJ(g+""==="point_of_interest"))){h+=i.ME(b[7],i.MB,i.MN,null)
}else{if((i.MJ(g+""==="museum"))){h+=i.ME(b[8],i.MB,i.MN,null)
}else{}}}}}}}}h+=b[9];
return h
}
})());
booking.jstmpl("atlas_poi_iw_short",(function(){var b=['\u003cdiv class="atlas_poi_iw atlas_poi_iw--short\n\t'," atlas_poi_iw--type-",'\n\t"\u003e\n\t\u003cdiv class="atlas_poi_iw--name"\u003e',"\u003c/div\u003e\n\t","\n\u003c/div\u003e"],a=["collectionId","name","typeHtml"],e,d,c;
return function(f){var g="",h=this.fn;
g+=b[0];
if(h.MD(a[0])){g+=[b[1],h.MB(a[0])].join("")
}g+=[b[2],h.MB(a[1]),b[3],h.MB(a[2]),b[4]].join("");
return g
}
})());
booking.jstmpl("atlas_poi_iw_full",(function(){var b=['\u003cdiv class="atlas_poi_iw atlas_poi_iw--full\n\t'," atlas_poi_iw--with-img","\n\t"," atlas_poi_iw--type-",'\n\t"\u003e\n\t','\n\t\t\u003cspan class="atlas_poi_iw--img-wrap"\u003e\n\t\t\t\u003cimg src="','" class="atlas_poi_iw--img" alt=""/\u003e\n\t\t\u003c/span\u003e\n\t','\n\t\u003cdiv class="atlas_poi_iw--name"\u003e',"\u003c/div\u003e\n\t",'\n\t\t\u003cdiv class="atlas_poi_iw--direction"\u003e\n\t\t\t',"\n\t\t\t\t","/private/hp_map_landmark_on_foot/name","\n\t\t\t","/private/hp_map_landmark_by_public_transport/name","\n\t\t\u003c/div\u003e\n\t",'\n\t\u003cspan class="bicon bicon-close atlas_poi_iw--close"\u003e\u003c/span\u003e\n\u003c/div\u003e'],a=["img_url","collectionId","name","typeHtml","direction"],e,d,c;
return function(f){var g="",h=this.fn;
g+=b[0];
if(h.MD(a[0])){g+=b[1]
}g+=b[2];
if(h.MD(a[1])){g+=[b[3],h.MB(a[1])].join("")
}g+=b[4];
if(h.MD(a[0])){g+=[b[5],h.MB(a[0]),b[6]].join("")
}g+=[b[7],h.MB(a[2]),b[8],h.MB(a[3]),b[2]].join("");
if(h.MD(a[4])){g+=b[9];
if(h.MJ(h.MG((h.MC(a[4])||{})["is_walking_only"]))){g+=[b[10],(f.unshift({distance:h.MG(((h.MC(a[4])||{})["distance"]||{})["text"]),duration:h.MG(((h.MC(a[4])||{})["duration"]||{})["text"])}),(c=h.ME(b[11],h.MB,h.MN,null)),f.shift(),c),b[12]].join("")
}else{g+=[b[10],(f.unshift({distance:h.MG(((h.MC(a[4])||{})["distance"]||{})["text"]),duration:h.MG(((h.MC(a[4])||{})["duration"]||{})["text"])}),(c=h.ME(b[13],h.MB,h.MN,null)),f.shift(),c),b[12]].join("")
}g+=b[14]
}g+=b[15];
return g
}
})());
$(function(){if(!B.atlas){return
}B.atlas.require(["jQuery","atlas","atlas-common-overlay","atlas-common-markers","util-env"],function(c,h,j,l,g){var a,b=["markers","bounds","mixed-markers","markers-ajax","marker-data-format","iw","iw-ajax","atlas-common-icons","overlay-markers-content","mixed-markers-hover","center-on-resize","styles-cartography","atlas-style"],k={domNode:c("#b_map_tiles"),topOverlay:c("#b_map_container"),scrollwheel:true,panControl:false,mapTypePosition:B.atlas.getVariant("ebcNcDUKVZEQdMHeNcC")?"TOP_CENTER":"TOP_RIGHT",zoomStyle:"SMALL",zoomPosition:"RIGHT_BOTTOM"};
if(B.atlas.getVariant("ebcBUECAFSDPOHO")){b.push("icons-svg","atlas-svg-icons");
if(b.indexOf("atlas-common-icons")>=0){b.splice(b.indexOf("atlas-common-icons"),1)
}}function f(m){var n=false;
switch(m){case 14:case 15:case 16:case 17:case 18:if(!n){a.trigger("walking-cirlce-show");
n=true
}break
}}g.get("isSu")&&g.get("paramMapSurvey")=="1"&&B.track.stage("ebcBUaGbZdeUYCCEKeC",1);
if(B.atlas.getVariant("ebcBUaGbZdeUYCCEKeC")>0){B.atlas.require(["maps-qualaroo"],function(m){new m({})
})
}if(!g.get("tdot")){b.push("labels")
}if(g.get("isCustomZoom")){b.push("zoom")
}b.push("polygons");
if(B.atlas.getVariant("YdAULNYeNTAC")){b.push("places")
}if(B.atlas.getVariant("YdVNYEETUXSGUVTTQXadNbHbfC")){b.push("polygons")
}if(B.atlas.getVariant("eGBUYSaBNHTXT")){b.push("iw-control-ajax")
}if(B.atlas.getVariant("ebcNAHBfQUaSHbZFcDaSYeGXT")){b.push("add-airport-to-high-zoom")
}if(B.atlas.getVariant("ebcZNMAdLWe")){b.push("transit-layer")
}if(B.atlas.getVariant("ebceaIcTZXOYO")){k.mapTypeControl=false
}function e(){var m=["only screen and (-webkit-min-device-pixel-ratio: 1.3)","only screen and (min--moz-device-pixel-ratio: 1.3)","only screen and (-o-min-device-pixel-ratio: 1.3/1)","only screen and (min-resolution: 1.3dppx)","only screen and (min-resolution: 125dpi)"];
return(window.devicePixelRatio>1||window.matchMedia&&window.matchMedia(m.join(",")).matches)
}function i(m){if(g.get("isCustomZoom")){m.zoomControl=false
}if(B.atlas.getVariant("eGBfZTfcAKae")||B.atlas.getVariant("eGHMaXDUHKeKe")||B.atlas.getVariant("ebceaIcTZXOYO")){a=new h({modules:b,options:m,provider:"provider-leaflet"})
}else{a=new h({modules:b,options:m})
}if(a.get("offset").x==0&&a.get("offset").y==0&&B.atlas.getVariant("ebcBUNHTIYSaBOeBLAEBVC")){a.set("offset",{x:300,y:0})
}if(B.atlas.getVariant("ebcBUTGPbbKSHO")){B.atlas.require(["map-loader"],function(n){new n({map:a,topOverlay:m.topOverlay})
})
}if(B.atlas.getVariant("ebccZae")){B.atlas.require(["google-analytics"],function(n){n.trackMap(a)
})
}a.done(function(){function n(){k.topOverlay.find(".iw-control").loadComponents();
k.topOverlay.find(".iw-overlay").loadComponents()
}a.on("iw-open",n);
a.on("iw-load",n);
a.setLimit(50);
if(B.atlas.getVariant("ebcBUVAfSZIBLbYNaRe")){B.atlas.require(["map-center-button"],function(o){var p=B.atlas.getVariant("ebcBUVAfSZIBLbYNaRe")==2;
new o({map:a,$el:c(".js-map-focus-downtown"),forceZoom:p,clickHotel:true,hash:"ebcBUVAfSZIBLbYNaRe"})
})
}if(B.atlas.getVariant("ebcBUcSPWYNHICTEZWDTPcHe")){B.atlas.require(["best-areas-poly"],function(o){o.init({topOverlay:m.topOverlay,map:a})
})
}if(!g.get("tdot")){a.once("autoopen-fixed-iw",function(o){B.atlas.require(["label-current-hotel"],function(p){new p({map:a,label:B.jstmpl("atlas_current_property_label").render(o)})
})
})
}if(B.atlas.getVariant("ebcBUPfBfSPaGXMO")){B.atlas.require(["toggle-markers"],function(o){new o({map:a,topOverlay:m.topOverlay})
})
}if(B.atlas.getVariant("eGBUYSaBNHTXT")>0){B.atlas.require(["iw-control"],function(o){new o({map:a,topOverlay:m.topOverlay})
})
}if(B.atlas.getVariant("YdAULNYeNTAC")>0){B.atlas.require(["poi-search"],function(o){new o({map:a})
})
}if(!g.get("tdot")&&g.get("action")=="hotel"){B.atlas.require(["central-district-polygon"],function(o){new o({map:a})
})
}if(g.get("isCustomZoom")){B.atlas.require(["zoom-control"],function(o){new o({map:a})
})
}B.atlas.require(["styler","styler-theme"],function(o,q){if(typeof q!=="undefined"){var p=new o({map:a,theme:q});
p.init()
}});
f(a.getZoom());
a.on("zoom",f);
a.on("markers-show",function(){if(e()){a.trigger("markers-svg")
}});
B.atlas.require(["bounding-box-onclose"],function(o){new o(a)
});
l.init(a);
a.trigger("open");
a.on("idle",function(){if(a.getZoom()<15){return
}B.atlas.track("places-markers")
});
c(window).resize(function(){a.trigger("window-resize");
a.resizeCenter()
});
if(B.atlas.getVariant("eGBUYSaBNHTXT")){a.on("load",function(){a.trigger("show-cur-hotel-label")
})
}else{a.on("iw-close",function(){a.trigger("show-cur-hotel-label")
})
}if(B.atlas.getVariant("ebcZNMAdLWe")){a.addTransitLayer()
}});
if(!g.get("tdot")&&g.get("action")=="hotel"){k.topOverlay.delegate(".iw-overlay-hotel-current .js-map-hotel__link","click",function(n){n.preventDefault();
location.hash="map_closed"
});
if(B.atlas.getVariant("ebcBUHRXOSHFBddQSAcCSTNREeEQJZBMOKe")){k.topOverlay.delegate(".iw-overlay-hotel-current .b-button","click",function(n){n.preventDefault();
location.hash="availability"
})
}k.topOverlay.delegate(".iw-overlay-hotel-current .b-button","click",function(n){a.trigger("current-property-iw-button-click")
})
}if(!g.get("tdot")){k.topOverlay.delegate(".b-button","click",function(n){a.trigger("iw-button-click")
})
}if(B.atlas.getVariant("ebcEKOTTQZLO")){a.on("map-type-change",function(){var n=a.getMapType();
if(n==="satellite"){B.track.custom_goal("ebcEKOTTQZLO",1)
}else{if(n==="hybrid"){B.track.custom_goal("ebcEKOTTQZLO",2)
}else{if(n==="terrain"){B.track.custom_goal("ebcEKOTTQZLO",3)
}else{if(n==="roadmap"){B.track.custom_goal("ebcEKOTTQZLO",4)
}}}}})
}a.on("map-type-change",function(){B.track.custom_goal("ebcNcDUKVZEQdMHeNcC",1)
});
k.topOverlay.delegate("#close_map_lightbox","click",function(){B.track.custom_goal("ebcNcDUKVZEQdMHeNcC",2)
});
a.once("autoopen-fixed-iw",function(){if(g.get("isWithUpcomingBooking")){B.track.stage("ebcBUYSaBEEFXbaCdTUC",2)
}})
}function d(m){a.resize();
a.set("centralPolygonCoords",m.centralPolygonCoords||"");
if(m.boundingBox){a.setBoundingBox([m.boundingBox.sw,m.boundingBox.ne])
}else{a.setCenter(m.center);
a.setZoom(m.zoom)
}a.trigger("open")
}j.pubSub.on("open",function(m){if(B.atlas.getVariant("ebcBUcSPWYNHICTEZWDTPcHe")){B.atlas.require(["best-areas-poly"],function(n){n.updateState(m)
})
}if(!a){i(c.extend(k,m))
}else{a.done(function(){d(c.extend(k,m))
})
}});
j.pubSub.on("close",function(){if(a){a.trigger("close")
}});
j.addEvents();
if(B.atlas.getVariant("ebccZae")){B.atlas.require(["google-analytics"],function(m){m.trackPage(j)
})
}k.topOverlay.delegate("[data-atlas-track-event]","click",function(n){var m=c(this).attr("data-atlas-track-event");
if(a){a.trigger(m)
}});
k.topOverlay.delegate("[data-atlas-track-hover]","mouseover",function(n){var m=c(this).attr("data-atlas-track-hover");
if(a){a.trigger(m)
}});
k.topOverlay.delegate("[data-atlas-custom-goal]","click",function(o){var p=c(this),n=p.attr("data-atlas-custom-goal"),m=p.attr("data-custom-goal");
booking.track.custom_goal(n,m)
})
})
});
booking[sNSStartup].map_hp_select_address=(function(a){return{init:function(){$("#hp_address_subtitle").bind("click dblclick",function(){var b=$(this),d=$(this).text(),e=$("<input type=text readonly>").width(b.width()),c=$("<div></div>");
e.attr("value",d);
e.insertAfter(b);
e.focus().select();
b.hide();
e.bind("focusout",function(){b.show();
e.remove()
})
})
}}
})(booking);
(function(a){if(a&&a.env.b_hp_max_number_room_booked_error){booking.google.trackEvent("View","Hotel: Max number of rooms booked error","b_hp_max_number_room_booked_error")
}})(B);
(function(a){if(a&&a.env.b_hp_hotel_not_bookable){a.google.trackEvent("View","Hotel: Non-bookable | "+a.env.b_hotel_id+" | "+a.env.b_hotel_name,"b_hp_hotel_not_bookable")
}})(B);
(function(){var f=window.jQuery;
var b=window.booking;
var k="Price Alert: ";
var a=function(){};
try{if(typeof localStorage==="object"&&localStorage["debug:price_watch"]){a=function(){console.log.apply(console,arguments)
}
}}catch(i){}function h(){this.watching=booking.env.b_price_alert_exists;
booking.events.Emitter.extend(this)
}h.prototype.data=function(){return{checkin:booking.env.b_checkin_date,checkout:booking.env.b_checkout_date,currency:booking.env.b_selected_currency||booking.env.b_hotel_currencycode,hotel_id:booking.env.b_hotel_id,language:booking.env.b_lang,adults:booking.env.b_occupancy.adults,children:booking.env.b_occupancy.children,rooms:booking.env.priceWatch.b_price_alert_rooms,price:booking.env.priceWatch.b_price_alert_price}
};
h.prototype.params=function(e){return f.extend({aid:booking.env.b_aid,sid:booking.env.b_sid,stype:booking.env.b_site_type_id,lang:booking.env.b_lang_for_url},e)
};
h.prototype.watchNotify=function(){var l=window.location.search;
if(!this.watching||l.indexOf("auth_success=1")<0&&l.indexOf("account_created=1")<0){return
}try{a("Checking delayed price watch");
var n=localStorage.getItem("price_watch_after_login");
localStorage.removeItem("price_watch_after_login");
if(n){a("Triggering delayed price watch");
setTimeout(function(){booking.lightbox.show(f(".js-price-watch-unsubscribe--watch"),{customWrapperClassName:"price-watch-unsubscribe-wrapper"})
},0)
}}catch(m){}};
h.prototype.subscribe=function(e){var l=this;
var m=this.data();
a("Subscribing",m);
f.post("/pricealerts/subscribe",this.params(m),function(n){if(n.status=="success"||n.reason=="already_subscribed"){l.watching=true;
l.emit("change");
a("Subscribe successful",n)
}else{if(n.status=="failed"){l.emit("error",n);
if(n.reason){l.emit("error:"+n.reason)
}a("Subscribe failed",n)
}else{throw new Error("Price alert subscribe failed - "+[n.param,n.reason].join(" "))
}}if(typeof e==="function"){e(n)
}})
};
h.prototype.unsubscribe=function(e){var l=this;
var m={checkin:booking.env.b_checkin_date,checkout:booking.env.b_checkout_date,hotel_id:booking.env.b_hotel_id};
a("Unsubscribing",m);
f.post("/pricealerts/unsubscribe",this.params(m),function(n){if(n.status=="success"){l.watching=false;
l.emit("change");
a("Unsubscribe successful",n)
}else{if(n.status=="failed"){l.emit("error",n);
if(n.reason){l.emit("error:"+n.reason)
}a("Unsubscribe failed",n)
}else{throw new Error("Price alert unsubscribe failed - "+[n.param,n.reason])
}}if(typeof e==="function"){e(n)
}})
};
function g(){var l=f("#price-watch-dropdown-hotel-info").html();
var e=f.fly.dropdown.extend({defaults:{extraClass:"ge-price-watch",position:booking.env.rtl?"bottom left":"bottom right",content:function(){return this.template.render(this.data())
}},init:function(){var m=this;
this.template=booking.jstmpl("price_watch_dropdown")
},data:function(){booking.env.priceWatch.watching=booking.hotel.priceWatch.watching;
return booking.env.priceWatch
},onrootready:function(){var n=this;
var m=this.root();
this.bind(this.events.show,function(){booking.google.trackEvent(booking.google.clickTracker,k+"Show dropdown")
});
booking.hotel.priceWatch.on("change",this.update,this);
booking.hotel.priceWatch.on("error:not_logged_in",this.hide,this);
booking.hotel.priceWatch.on("error:too_many_alerts",function(){n.error("too-many-alerts")
});
booking.hotel.priceWatch.on("error",function(){n.loading(false)
});
m.delegate(".pw-start-button","click",function(o){if(/loading/.test(o.target.className)){return
}n.loading();
n.error(false);
booking.google.trackEvent(booking.google.clickTracker,k+"Subscribe","dropdown");
booking.hotel.priceWatch.subscribe();
o.preventDefault()
});
m.delegate(".pw-stop-button","click",function(o){if(/loading/.test(o.target.className)){return
}n.loading();
n.error(false);
booking.google.trackEvent(booking.google.clickTracker,k+"Unsubscribe","dropdown");
booking.hotel.priceWatch.unsubscribe();
o.preventDefault()
});
m.delegate(".pw-sample-link","click",function(p){p.preventDefault();
booking.google.trackEvent(booking.google.clickTracker,k+"Example");
var o=booking.jstmpl("price_watch_example_email").render();
booking.lightbox.show(o)
});
m.bind("click",function(o){o.stopPropagation()
})
},error:function(m){this.root().find(".js-alert").hide();
if(m){this.root().find(".js-alert--"+m).show()
}},update:function(){var o=this;
var n=booking.hotel.priceWatch.watching;
a("Updating dropdown",n);
this.redraw();
var m=this.handle().find(".js-price-watch-icon");
m.toggleClass("ge_price_watch_icon_small_selected",n);
m.toggleClass("ge_price_watch_icon_small",!n)
},loading:function(m){m=arguments.length?m:true;
this.root().find(".b-button_primary").toggleClass("loading",m)
}});
return e
}function d(){var e={root:f(".price-watch-banner-container"),template:booking.jstmpl("price_watch_banner"),init:function(){this.events();
return this
},update:function(){this.root.html(this.template.render({watching:booking.hotel.priceWatch.watching,b_pw_banner_hide_unsubscribe_cta:b.track.getVariant("AaSDAddKLSCKKbUZdcGPXPRQMSXe")}))
},loading:function(){this.root.find(".b-button_primary").addClass("loading")
},events:function(){var l=this;
this.root.delegate(".pw-start-button, .pw-link","click",function(m){if(/loading/.test(m.target.className)){return
}l.loading();
booking.google.trackEvent(booking.google.clickTracker,k+"Subscribe","banner");
booking.hotel.priceWatch.subscribe();
m.preventDefault()
});
this.root.delegate(".pw-stop-button","click",function(m){if(/loading/.test(m.target.className)){return
}l.loading();
booking.google.trackEvent(booking.google.clickTracker,k+"Unsubscribe","banner");
booking.hotel.priceWatch.unsubscribe();
m.preventDefault()
});
booking.hotel.priceWatch.on("change",this.update,this)
}};
return e
}function c(){booking.google.trackEvent(booking.google.clickTracker,k+"Signin form");
var l,n;
booking.track.exp("MRLLRcJDcOdDGTKWe");
booking.track.stage("TACaGGadffNCFPQORHe",1);
if(booking.track.getVariant("MRLLRcJDcOdDGTKWe")||booking.track.getVariant("TACaGGadffNCFPQORHe")){l=f(".js-user-access-menu-lightbox .user_access_form");
booking.command("show-auth-lightbox").run({titleSignin:booking.env.priceWatch.b_signin_header})
}else{l=f(".user_center_nav .uc_account .user_access_form");
n=f("#current_account");
n.addClass("user_center_option--price-watch");
booking.eventEmitter.bind("uc_popover_hidden",function(){n.removeClass("user_center_option--price-watch")
});
f(".user_center_nav .profile_menu_trigger").triggerHandler("click");
window.scrollTo(0,0)
}l.each(function(e,o){var q=f.extend({},booking.hotel.priceWatch.data(),{for_price_alert:1});
var p=[];
f.each(q,function(r,s){p.push('<input type="hidden" name="price_alert_'+r+'" value="'+s+'">')
});
f(o).append(p.join(""))
});
if(booking.hotel.priceWatch.watching===false){try{localStorage.setItem("price_watch_after_login",1);
a("Setting delayed price watch")
}catch(m){}}}function j(){booking.hotel.priceWatch=new h();
booking.hotel.priceWatch.watchNotify();
booking.hotel.priceWatch.on("error:not_logged_in",c);
var l=g();
var e=d();
l.create(".js-price-watch-dropdown-handle");
e.init();
if(booking.env.priceWatch.b_price_alert_canceled){booking.lightbox.show(f(".js-price-watch-unsubscribe--one"),{customWrapperClassName:"price-watch-unsubscribe-wrapper"})
}a(booking.hotel.priceWatch)
}b[sNSStartup]["price_watch"]={priority:9,init:j}
})();
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSExperiments].reboot_bookit_button={priority:9,init:function(){var a=booking[sNSExperiments].large_hotel_photo_slider;
if(typeof a==="object"){a.init()
}},initElse:function(){}};
(function(e,d){function a(f){return d(f).find("[name=object_id]").first().attr("value")
}function c(i){var h=(window.b_cookie&&window.b_cookie.rF)||"";
var g=h.split(",");
var f=a(i);
return(g.indexOf(f)!==-1||d(i).attr("data-already-voted")==="1")
}function b(h){var g=d(h);
var f=g.prev("p");
g.closest("div").prepend('<p class="review_useful_thankyou">'+transl_content_feedback_thankyou_short+"</p>");
g.add(f).remove()
}e[sNSStartup].reviewList=(function(){var l=d(window);
var n=d("#review_list_score_container");
var u=d("#reviewer_type_filter");
var t=e.env.hotelAction.showReviews;
var j=e.env.hotelAction.minReviews;
var o="total";
var p=false;
var v=false;
var g="total";
var k=u.find("option:selected");
if(k.length){g=k.data("customer-type")
}else{if(u.length){g=u.find("option").first().data("customer-type")
}}if(window.location.hash.indexOf("tab-reviews-business_traveller")>-1){g="business_traveller"
}if(window.location.hash.indexOf("tab-reviews-family_traveller")>-1){g="family_with_children"
}var h=function(z,C){var y=d(".review_list_loader");
var x=d("#review_list_page_container");
x.hide();
y.removeClass("hideme");
var A=d("#review_sort").val();
if(A){z+=";sort="+A
}d.ajax({url:z,error:function(D,F,E){x.show();
y.addClass("hideme")
},success:function(E,F,D){x.html(E);
x.show();
y.addClass("hideme");
p=true;
e.events.trigger("REVIEWS:fetched");
if(C!==undefined){C()
}x.loadComponents()
}})
};
var w=function(z){var y=d(z);
var x=y.attr("href");
var A=d("html, body");
if(l.scrollTop()>d("#blockdisplay4").offset().top){A.animate({scrollTop:d("#blockdisplay4").offset().top})
}window.setTimeout(function(){h(x,s)
},500)
};
var s=function(){d(".review_feedback_form").each(function(x,y){if(c(y)){b(y)
}})
};
var m=function(z){z.preventDefault();
var x=d(this);
var A=x.attr("action");
var y=a(x);
d.post(A,x.serialize(),function(){if(b_cookie&&b_cookie.rF){var C=b_cookie.rF.split(",");
if(C.length>50){C.shift();
b_cookie.rF=C.toString()+","+y
}else{b_cookie.rF+=","+y
}}else{if(typeof(b_cookie)=="undefined"){b_cookie={}
}b_cookie.rF=y
}if(typeof(JSON)!="undefined"){d.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:".booking.com"})
}b(x);
e.events.trigger("REVIEW_FEEDBACK.SUBMITTED:"+y);
e.google.trackEvent(e.google.clickTracker,"Action: reviewlist","Review usefulness vote")
})
};
var i=function(F,A){if(v){return
}v=true;
if(A&&A.constructor===Array){A=A.join()
}else{if(A&&A.constructor===Object&&A.jquery){A=A.get().join()
}}var x=d("#reviewer_type_filter").find("option[data-customer-type="+F+"]");
if(!x.length){x=d("#review_display_settings")
}var C=parseInt(x.data("quantity"),10);
var D=x.data("pagename");
var z=x.data("cc");
var E=x.data("dist");
var G=x.data("add");
var y="/reviewlist";
y+=e.env.b_query_params_with_lang;
y+=";pagename="+D;
y+=";cc1="+z;
y+=";type="+F;
y+=";dist="+E;
y+=";offset=0;rows=10";
if(d(".language_filter").length){y+=";r_lang="+A
}y+=";rid="+G;
if(e.env.b_is_villa_site&&e.env.b_lang_for_url!="en-us"){y="/"+e.env.b_lang_for_url+y
}h(y,function(){s();
v=false
})
};
var f=function(A){A.preventDefault();
var z=d(this);
var y=z.closest(".review_item_response_container").data("full-response");
var x=z.prev("p");
x.html(y);
z.remove()
};
var r=function(){var x=false;
u.bind("change",function(z){if(!x){var A=u.val();
e.google.trackEvent(e.google.clickTracker,"Action: reviewlist","Reviewer type filter: "+A)
}x=false;
var C=d(this).find(":selected");
o=C.data("customer-type");
i(o,[e.env.defaultReviewsLanguage])
});
var y=d("#review_sort");
y.bind("change",function(z){x=true;
var A=y.val()||"default";
e.google.trackEvent(e.google.clickTracker,"Action: reviewlist","Review list sort: "+A);
u.trigger("change")
});
n.delegate(".page_link a","click",function(A){A.preventDefault();
var z=d(this);
if(!z.hasClass("ignore_pagination")){w(z)
}});
n.delegate(".review_item_response_more","click",f);
e.events.on("reviews-tab-opened",function(A,z){z=z||A.tab;
if(!p){e.track.stage("BUbHVAZKadNFWUWFPDYGWe",1);
if(e.track.getVariant("BUbHVAZKadNFWUWFPDYGWe")){i("family_with_children",[e.env.defaultReviewsLanguage])
}else{i(g,[e.env.defaultReviewsLanguage])
}}});
n.delegate(".review_feedback_form","submit",m)
};
var q=function(){if(t){r()
}if(e.hotel.hashedTabs.getVisibleTab().is("#blockdisplay4")){i(g,[e.env.defaultReviewsLanguage])
}};
return{priority:2,init:q,filterByTypeAndLanguages:i}
}())
}(window.booking,window.jQuery));
(function(g,c){var f=c("#review_list_score_container");
var b=f.find(".score_bar_value");
var a=function(){g.events.on("reviews-tab-opened",e)
};
var e=function(h){if(!h||!h.each){h=b
}h.each(function(i,k){var l=c(k);
var j=l.data("score")+"%";
if(g.env.b_browser==="msie"&&g.env.b_browser_version==="8"){l.width(j)
}else{l.animate({width:j})
}})
};
var d=function(h){a();
if(g.hotel.hashedTabs.getVisibleTab().is("#blockdisplay4")){window.setTimeout(e,400)
}};
g[sNSStartup].reviewScoreBreakdown={priority:9,init:d,animateBars:e}
}(window.booking,window.jQuery));
(function(){var a=window.jQuery;
var c=window.booking;
function b(){a("#uspbox_review_link").click(function(){var d=setTimeout(function(){a(window).scrollTop(0);
clearTimeout(d)
},10)
})
}c.ensureNamespaceExists(sNSStartup);
c[sNSStartup].review_usp_scroll_top={init:b}
})();
(function(a,c){var b=".revd_collapsible",d=c(b).not(".white_bg"),g=c(".handle",d),m=c(".content",d),i=a.browserStorageHandler.getPermanentValue("revd_gl");
var k=function(n){if(n){m.hide();
g.removeClass("hide").html("&#45440;")
}else{m.show();
g.addClass("hide").html("&#45433;")
}};
var f=function(){m.slideDown();
g.addClass("hide").html("&#45433;");
a.browserStorageHandler.deletePermanentValue("revd_gl")
};
var e=function(){m.slideUp();
g.removeClass("hide").html("&#45440;");
a.browserStorageHandler.addPermanentValue("revd_gl",1)
};
var l=function(n){var o=c(this);
if(o.hasClass("hide")){e()
}else{f()
}};
var j=function(){g.bind("click",l)
};
var h=function(){k(i);
j()
};
a[sNSStartup].reviewsGuidelines={priority:9,init:h}
}(window.booking,window.jQuery));
B.ensureNamespaceExists("hotel");
B.hotel.rtLightbox=(function(k,E,f,z,i){var v="hp_rt_lightbox_wrapper";
if(k.env.b_run_loc_hp_rt_wider_lightbox_clearer_facilities){v+=" hp_rt_lightbox_wrapper_wide"
}if(k.env.b_is_villa_site){v+=" villas_hp_rt_lightbox_wrapper"
}if(k.env.b_is_villa_site&&k.track.getVariant("TNVIdEfZZGbMLUCDPBFO")){v+=" villas_hp_rt_lightbox_wrapper_v2";
v+=" villas_hp_rt_lightbox_wrapper_v2 villas_hp_rt_lightbox_wrapper_var_"+k.track.getVariant("TNVIdEfZZGbMLUCDPBFO")
}var G=k.events,x=z(E),M=z(f),y=z("body"),N=z("<div></div>",{"class":"hp_rt_lightbox_overlay"}),t=z("<div></div>",{"class":v}),l=z("<div></div>",{"class":"hp_rt_lightbox_content"}).appendTo(t),d=z("<a></a>",{"class":"lightbox_close_button",href:"#close-lightbox",html:"&times;"}).appendTo(t),g=(k.env.lp_hp_meta_hightlighted_room)?z("#maxotel_rooms.rt_lightbox_enabled, .hp__pinned-room"):z("#maxotel_rooms.rt_lightbox_enabled"),n=N.add(d),o=k.env.run_hp_rt_lightbox||k.env.run_hp_rt_lightbox_no_dates,q=false,F=false,m="",e=1000,K=false,I=k.env.rtl,D,s=k.env.b_run_loc_hp_rt_wider_lightbox_clearer_facilities,c,u,p=g.find("a.togglelink"),j=100,h=function(){if((t.height()>(x.height()-j))||s){t.css({position:"absolute",top:x.scrollTop()+20})
}},H=function(){if(!F){var R=z(this),O=R.attr("href"),Q=O.replace("#","#blocktoggle"),P,S;
c=z(Q);
u=z(Q).parent();
l.append(c);
if(K){N.add(t).show(1,h).addClass("visible")
}else{N.add(t).css({display:"block"}).addClass("visible");
setTimeout(h,0)
}b();
m=location.hash.slice("1");
D=O.replace(/\#/,"");
S="rt-lightbox-open";
location.hash=S;
G.trigger(k.hotel.Events.RT.LIGHTBOX_OPEN,D,l);
F=true;
k.hotel.rtLightbox.isLightboxOpen=true;
L({type:"Click",action:"Hotel: Lightbox open",id:"rtLightbox"})
}return false
},A=function(P){if(z.type(P)==="string"&&P.substring(0,2)==="RD"){P=P.substring(2)
}else{return
}var O=z("#"+P).parents(".rt__room-detail").find(".togglelink.jqrt");
if(O.length>0){return O.text()
}},r=function(){var O=z(this),P=O.parents(".rt-room-info").attr("id"),Q=z('a[href="#RD'+P+'"]:not(.avoid-trigger-lightbox)');
k[sNSStartup].rewrite_tt.showHideTooltip(null,0,0);
if(Q.length){Q.trigger("click")
}},C=function(P,T){if(F){var O,Q,R={click:" - Click on close button",esc:" - Escape key",back:" - Browser back button"},P=(P&&typeof P=="object")?"click":P,S=R[P]?R[P]:" - other";
k[sNSStartup].rewrite_tt.showHideTooltip(null,0,0);
c.prependTo(u);
t.add(N).css({display:"none"}).removeClass("visible");
F=false;
k.hotel.rtLightbox.isLightboxOpen=false;
if(!s){t.css({position:"fixed",top:"10%"})
}if("pushState" in history){history.pushState("",document.title,location.pathname+location.search)
}else{O=y[0].scrollTop;
Q=y[0].scrollLeft;
if(m){location.hash=m
}else{if(k.et.track("BUcJPQORNFWeNTTUJYGTUbERVYfPQcUNC")){location.hash="_"
}else{location.hash=""
}}y[0].scrollTop=O;
y[0].scrollLeft=Q
}G.trigger(k.hotel.Events.RT.LIGHTBOX_CLOSE,D,l);
L({type:"Click",action:"Hotel: Lightbox closed"+S,id:"rtLightbox"});
T=(T&&typeof T=="function")?T:(P&&typeof P=="function"?P:null);
if(T){T()
}}return false
},b=function(){try{if(k.maps&&k.maps.map_opened){k.maps.close()
}}catch(O){}},a=function(){g.delegate(".togglelink","click",H).delegate("a.smll_roomphoto","click",function(O){O.preventDefault();
r.call(this);
return false
});
z("a.b-group-recommendation__togglelink").bind("click",H);
g.delegate(".togglelink","click",function(){k.track.exp("BUcJPQORYSKDYEaNdNC")
}).delegate("a.smll_roomphoto","click",function(){k.track.exp("BUcJPQORYSKDYEaNdNC")
});
n.bind("click",C);
M.bind("keyup",function(P){var O=P?P:window.event;
if(O.keyCode==27){C("esc")
}});
x.bind("hashchange",function(){var O;
O="rt-lightbox-open";
if(location.hash.slice(1).indexOf(O)===-1&&F){C("back")
}})
},L=function(O){k.google.trackEvent(O.type,O.action,O.id)
},w=function(S){var R=false,Q="Webkit Moz ms O".split(" "),T=document.createElement("div"),O=null;
S=S.toLowerCase();
if(T.style[S]){R=true
}if(R===false){O=S.charAt(0).toUpperCase()+S.substr(1);
for(var P=0;
P<Q.length;
P++){if(T.style[Q[P]+O]!==i){R=true;
break
}}}return R
},J=function(){if(o&&!q){q=true;
y.append(N,t);
z(window).resize(function(){if(F){t.css({position:"fixed",top:"10%"});
h()
}});
if(I){t.addClass("lightbox_rtl")
}K=w("transition");
a();
G.on(k.hotel.Events.RT.LIGHTBOX_OPEN,function(O){if(l.find(".tr_cPWbVdMFJQPYUbACWHAdJYTZcNVBUKcKe").length){k.track.stage("cPWbVdMFJQPYUbACWHAdJYTZcNVBUKcKe",1)
}k.track.stage("BUAcUXfFPFOEZNaPBYHQNcO",1);
k.track.stage("NAOTINTXVZEZCFdULESBEGUNC",1);
k.track.stage("YdVNNQADGTKZAdPVT",1);
k.track.stage("YdAFPbIUFZZZMSNNUNYO",1);
k.track.stage("YdVNNQADULNfQORYYFPDCUZRAOAcEUC",1);
k.track.stage("BUcJPQORNLEHFO",1);
k.track.stage("BUdfYOESBNKe",1);
k.track.stage("BUcJPQORYceWcbZNcbWWe",1);
k.track.stage("BUcJZXQVSGHbWBQRTCHT",1);
k.track.stage("BUcJPQORYSEQFZfDaXe",1);
k.track.stage("BUcJZXQVSGHbWBQcCcEO",1);
if(l.find(".lightbox-reserve-button.room_with_bed_options").length){k.track.stage("BUcJPZEUZFNTedJNZedUDbUeCRe",1)
}k.track.stage("BUcJPQORYWLSEQFZfC",1);
if(l.find("div.deals_room_info_lightbox_badge--tracking").length){k.track.stage("YPNESdBDGTKZLWZHOaO",1)
}if(l.find("div.vr_hp_rt_lightbox_no_studio_bedrooms--tracking").length){k.track.stage("TAFYNNQADGTKHPDBOCYVVMdTYSYO",1)
}if(l.find(".loc_hp_rt_lb_x_rooms_urgency_wrapper").length){k.track.stage("YdVNNQAFKGfHMPTcZLOAXe",1)
}if(l.find(".bed_sizes_intro_copy_track").length){k.track.stage("BUcJPQORYceSSZSLDbPGZOOJNET",1)
}if(l.find(".bed_sizes_intro_copy_multi_rooms_track").length){k.track.stage("BUcJPQORYceSSZSLDbPGZOBMBPTHT",1)
}if(l.find(".hp_rt_lb_gs_children_policies_track").length){k.et.stage("BUcJZXQVSRffECIAaKLHICNRGLT",1)
}if(l.find(".cheapest_room_badge_holder").length){k.et.stage("eDUfZHHAYfGYUNVBUKcfOMLUCC",1)
}if(l.find(".lightbox_pay_later_reinforcement.pay_later_all").length!==0){k.et.stage("eDUfZZGbMLUCJNbKBAcDIbYBUSTbeefWe",1)
}if(l.find(".lightbox_pay_later_reinforcement.pay_later_some").length!==0){k.et.stage("eDUfZZGbMLUCJNbKBAcRFFHATWZcNNTeNMO",1)
}if(l.find(".js-track-room-size-icon").length){k.et.stage("bHVNYcDHBPBUeBDaXe",1)
}});
G.trigger(k.hotel.Events.RT.LIGHTBOX_READY)
}};
return{isLightboxEnabled:o,isLightboxOpen:F,show:H,close:C,init:J}
})(window.booking,window,document,jQuery);
(function(a){var c=function(){var d=$("#bookNow1");
var b=$("select.b_room_selectbox");
b.bind("change",function(){var e=b.filter(function(){return $(this).val()!=0
}),f=$(this);
if(f.hasClass("b_available_multi_room_price_single")){if(this.value>0){$("#roomsForm").append('<input type="hidden" value="1" name="is_single_occ" id="is_single_occ">')
}else{$("#is_single_occ").remove()
}}if(e.length){if(e.hasClass("b_room_block_is_genius_rate")){B.track.stage("cQPZZGbMdbDcdGdfC",1)
}fminit(d)
}else{d.css("background-color","#fff")
}})
};
$(function(){if($("#maxotel_rooms.hp_rt_cleanup").length){c()
}})
})(booking);
(function(){if(booking.env.b_action!=="hotel"){return
}booking.run("rooms_table_ga_tracking").onLoad(function(){var a=$("#room_availability_container").data("ratr"),b;
if(!a){return
}b="("+a.hid+")["+a.nr+"]-"+a.nc;
booking.google.trackEvent(booking.google.viewTracker,"Rooms Table",b)
})
})();
(function(e,c){var a=c("#reviewer_type_filter");
var d=function(f){var g=a.find(":selected").data("customer-type");
e.google.trackEvent(e.google.clickTracker,"Action: reviewlist","Review list filter: "+g)
};
var b=function(){a.bind("change",d)
};
b()
}(window.booking,window.jQuery));
(function(h,f){var g=f("div.review_list_container"),c=f("#guidelines_content");
var a=function(){h.google.trackEvent(booking.google.clickTracker,"Action: reviewlist","Review guidelines open")
};
var e=function(i){i.preventDefault();
h[sNSStartup].lightbox.show(c);
a()
};
var b=function(){f(".js-guidelines_open_link").bind("click",e)
};
var d=function(){b();
h.events.on("REVIEWS:fetched",b)
};
h[sNSStartup].reviewGuidelineLightbox={prioriy:9,init:d}
}(window.booking,window.jQuery));
(function(){var a=window.jQuery;
var c=window.booking;
function b(){booking.events.on("REVIEWS:fetched",function(){a(".review_item_feedback").find(".bicon-flag").each(function(){var d=a(this);
d.dropdown({content:function(){return d.siblings(".review_report_form_pop").html()
},extraClass:"review_report_form_pop active",position:"left"})
});
a(".review_report_form_pop.active label").live("click",function(j){j.preventDefault();
var i=a(this),f=i.parents(".review_report_form_pop_list"),h=a(".review_report_form_pop.active"),m=i.find("input"),d=f.data("reviewid"),k=m.val(),l="review",g={id:d,content_type:l,type:k};
i.find("input").attr("checked","checked");
a.ajax({url:"/report_user_content",dataType:"json",type:"post",data:g,complete:function(e){var n=a(".review_report_form_pop_list[data-reviewid="+d+"]");
h.width(h.width());
h.height(h.height());
h.html('<p class="review_useful_thankyou">'+transl_content_feedback_thankyou_short+"</p>");
n.parent().siblings("i").addClass("active");
setTimeout(function(){n.trigger("click").unbind("click")
},1500);
if(e.response==='{"success":1}'){c.google.trackEvent(booking.google.clickTracker,"Action: reviewlist","Report inappropriate")
}}})
})
})
}c.ensureNamespaceExists(sNSStartupLoad);
c[sNSStartupLoad].rpp_report_inappropriate_review={priority:9,init:b}
})();
(function(c,b){var a=function(d){c.google.trackEvent(c.google.clickTracker,"Action: reviewlist","Review info tag")
};
b(".review_list_wrapper").delegate(".review_info_tag","click",a)
}(window.booking,window.jQuery));
(function(b,a){if(!b){return
}a(function(){var j=a(window),f=a("body"),i=false,c=false,e=false,g=false,d=a("#hotelpage_availform"),h=a("#hp_availability_style_changes").find("a.b_change_dates");
j.bind("beforeunload",function(){if(!i&&c&&e&&!g){b.google.trackEvent("Submit","Hotel: Aborted change dates form","hp_changedates_aborted");
i=true
}if(!i&&c&&e&&g){b.google.trackEvent("Submit","Hotel: Aborted change dates form - completed","hp_changedates_compeleted");
i=true
}});
d.delegate("select","change",function(){e=true
}).delegate("input.avail-date-submit","click",function(){g=true
});
h.bind("click",function(){c=true
})
})
})(booking,jQuery);
booking.run("track_deals").onReady(function(){var b=$(".deals_label_content_icon"),a;
if(b.length){a=$.trim(b.get(0).className.replace("deals_label_content_icon",""));
booking.google.trackEvent(booking.google.viewTracker,"Deals",a+" "+booking.env.b_hotel_id)
}});
function validate(d){try{checkFreeCancel()
}catch(g){}var a=document.roomsForm;
var f=document.getElementById("errorNoRoomSelected");
if(d==2){a=document.roomsForm2;
f=document.getElementById("errorNoRoomSelected2")
}var c=$("#maxotel_rooms");
if(!c.find(".b_room_selectbox").filter(function(){return $(this).val()!=0
}).length){if(B.track.getVariant("BUcJHPFbWfbHJKbIPFaXfQfQOUWe")){if(typeof validate.errorShown=="undefined"){alert($(".error").eq(0).text());
validate.errorShown=0
}}else{alert($(".error").eq(0).text())
}B.events.emit(B.hotel.Events.RT.NO_ROOM_SELECTED_POSTALERT);
if(c.hasClass("highlight_rooms")){fminit($(".roomMultiRoomPrice"),true,"#FFF",[255,255,255])
}var b=$("#availability_target").offset().top;
if(document.documentElement.scrollTop>b||self.pageYOffset>b){window.location.hash="#availability_target"
}c.find("select").change(function(){if(this.value!=0){f.style.display="none";
$("p.nopad").remove()
}});
booking.google.trackEvent(booking.google.errorTracker,"JavaScript","please_select_one_or_more_rooms");
return false
}else{return true
}}function checkFreeCancel(){var a=1;
$(".b_room_selectbox").each(function(){if($(this).val()!="0"&&!$(this).hasClass("b_free_cancel")){a=0
}})
}function revertNameAttributes(b){var a=$(b).find(":input[data-name]");
a.each(function(){var d=$(this),e=d.val(),c;
if(e!=0){c=d.attr("data-name");
d.attr("name",c)
}})
}booking[sNSStartup].vp_hp_move_compset={priority:9,init:function(){$(".js-toggle-fp").click(function(){var a=$(this).parents(".js-hpFpItem");
$(a).toggleClass("hpFpItem");
$(".hpFpShowmore",a).remove()
})
}};
(function(f,c){var j=f("#maxotel_rooms"),g=j.find(".b_room_selectbox"),b=j.find("#roomsinfo"),e=j.find("#booking-summary"),d=j.find(".rt_pricedetails_above_button"),a=false,h={active:false,str:""},i={calculate:function(){var p=0,t=0,m,o,r=function(v){return v.replace(".","\\.")
},u=new RegExp(r(currencyFormat.group_separator)||" ","g"),s=new RegExp(r(currencyFormat.decimal_separator)+"[0-9]{1,3}$"),n=new RegExp(r(".")+"[0-9]{1,3}$"),q=new RegExp(f("<div/>").html(currencyFormat.symbol).text(),"g");
var l,k=[];
g.each(function(){m=f(this).find("option:selected");
var z=(parseInt(m.val(),10));
if(a&&z){var x=m.parent().attr("data-rtid");
var v=(x)?parseInt(x,10):0;
var y=(v==29||v==31||v==1||v==17||v==19||v==26);
if(!y){v=0
}if((typeof l=="undefined")&&!k.length){k.push(v)
}else{f(k).each(function(A){if(k[A]!=v){k.push(v)
}})
}var w={29:"hh",31:"villa",1:"apt",17:"chalet",19:"bungalow",26:"bed"};
if(y){h.active=true;
h.str=w[v]
}else{h.active=false;
h.str=""
}}p+=parseInt(m.val(),10);
if(parseInt(m.val(),10)){if(B.track.getVariant("YdVQLcGPePEaXCfAOMHRNFHLAC")||B.track.getVariant("YdVQLcGPePBINFdWKZdWaGO")){o=m.data("price-raw").toString()
}else{o=m.text().trim().replace(q,"").match(/\([^0-9,. ]*([0-9,. ]+)[^0-9,. ]*\)/);
if(o){o=o[1];
o=o.replace(u,"");
if(s.test(o)){o=o.replace(",",".")
}}}if(o){if(n.test(o)){t+=parseFloat(o)
}else{t+=parseInt(o,10)
}}}});
if(a){if(k.length>1){h.active=false
}}booking.env.no_rooms_selected=p;
return{count:p,totalPrice:t}
},updateColumn:function(){var n=this.calculate(),q=(n.count>10)?j.data("translation-10"):j.data("translation-"+n.count),m;
var k=f("#availability_target").find(".ar_notice");
if(n.count){if(a&&(n.count<11)&&h.active&&(j.data("translation-"+h.str))){var p=(n.count>10)?j.data("translation-10"):j.data("translation-"+h.str);
var l=(p)?p.replace(/'/g,'"'):"";
var o=f.parseJSON(l);
q=o["count-"+n.count]
}q=q.replace(/\d+/,"<strong>"+n.count+"</strong>");
m=booking.utils.accounting.formatMoney(n.totalPrice);
B.events.emit(B.hotel.Events.RT.SUMMARY_BEFORE_CHANGE,e,{price:m,nr_rooms:n.count});
e.find(".total-price").html(m).end().find(".rooms-count").html(q).end().fadeIn(function(){setTimeout(function(){B.events.emit(B.hotel.Events.RT.SUMMARY_CHANGE,e,{price:m,nr_rooms:n.count})
},1);
booking.events.trigger("change:bookNowHeight")
});
booking.events.trigger("booking-summary-room-selected");
if(k.length){k.addClass("bold")
}}else{e.hide();
d.removeClass("show");
booking.events.trigger("change:bookNowHeight");
booking.events.trigger("booking-summary-room-not-selected");
setTimeout(function(){B.events.emit(B.hotel.Events.RT.SUMMARY_HIDE,e)
},1);
if(k.length){k.removeClass("bold")
}}}};
f(function(){var l="BUZQZAZbXdEKVC";
a=B.track.getVariant(l)===1;
var k=(+B.track.getVariant("BUYedEKQRVRT")===1),m=k?f.proxy(i.updateColumn,i):Function();
m();
j.filter(".booking_summary_track").delegate(".b_room_selectbox","change",function(){m();
if(B.track.getVariant(l)===false){return
}B.track.exp(l)
});
f("#roomsForm").bind("submit",function(){if(g.filter(function(){if(f(this).val()!=0){return true
}return false
}).length){var n=g.filter(function(){if(f(this).val()!=0){return true
}return false
}),o=g.filter(function(){return this.value==0
});
if(g.length>20){o.slice(20-n.length).remove()
}return true
}})
})
})(jQuery);
booking[sNSStartup].close_button_roomstable={priority:9,init:function(){$(".blocktoggle .close_button_roomstable").live("click",function(){var c=$(this).closest(".blocktoggle");
if(c.length>0){var a=c.attr("id").replace(/blocktoggleRD/i,"");
if(a.length>0){var b=$("#"+a);
if(b.length>0){b.find("a.togglelink").click();
c.hide();
b.find("a.togglelink").removeClass("toggla_hide")
}}}});
return true
}};
booking[sNSStartupLoad].hp_lock_in_a_price_urgency={init:function(){$(".lock_close_button, .lock_price--close-button").not(".gl_close_button").click(function(a){a.preventDefault();
$(this).parents(".lock_price").fadeOut("fast",function(){booking[sNSStartup].bookingSticker.update();
booking.events.trigger(B.hotel.Events.Other.LOCK_PRICE_DISMISSED)
})
})
}};
$(function(){var c=$(".no_availability_lightbox_close_button, .no_availability_lightbox_overlay"),b=$(".no_availability_lightbox_wrapper"),d=$(".no_availability_lightbox_overlay"),a=function(){b.remove();
d.remove();
return false
};
c.click(a);
$(document).bind("keyup",function(g){var f=g?g:window.event;
if(f.keyCode==27){a()
}})
});
booking[sNSStartup].highlight_conditions={priority:9,init:function(){$("#rm_cond_link").click(function(){$("#maxotel_table_header #conditions_info").show();
fminit($("#maxotel_rooms .ratepolicy"),true,"transparent")
})
}};
booking[sNSStartup].hp_rt_disable_room_type_selection_on_change={priority:2,elementSelector:"select.limited_rooms",maxRooms:{},init:function(){if(B.env.b_action!=="hotel"&&!B.env.b_has_maxotel_rooms){return
}this.$selects=$(this.elementSelector);
if(this.$selects.length){this.getOccupancy();
this.attachEvents()
}},attachEvents:function(){B.events.on(B.hotel.Events.RT.ROOM_SELECTED,this.occupancyHandler.bind(this))
},occupancyHandler:function(c){if(!c.$el.is(this.elementSelector)){return
}var b=c.$el;
var a=b.get(0);
var d=b.attr("id");
if(this.maxRooms[d]){this.changeOccupancy(b)
}else{this.getOccupancy(b)
}if(booking.env.b_is_ie6||booking.env.b_is_ie7){if(a.options[a.selectedIndex].style.color=="#cccccc"){b.val(b.attr("max"));
return false
}}},changeOccupancy:function(k){if(!k||!k.length){return
}var c=k.data("roomid");
var f=this.maxRooms[c].max;
var g=0;
for(roomRateId in this.maxRooms[c].items){var h=$("#"+roomRateId).val();
if(h!=="0"){g+=parseInt(h)
}}var b=f-g;
for(roomRateId in this.maxRooms[c].items){var d=$("#"+roomRateId);
var h=d.val();
var j=0;
if(booking.env.b_is_ie6||booking.env.b_is_ie7){d.attr("max",h)
}d.find("option").each(function(){if(j>b+parseInt(h)){this.disabled=true;
if(booking.env.b_is_ie6||booking.env.b_is_ie7){$(this).css("color","#cccccc");
$(this).attr("disabled","disabled")
}}else{this.disabled=false;
if(booking.env.b_is_ie6||booking.env.b_is_ie7){$(this).css("color","#000000");
$(this).removeAttr("disabled")
}}j++
})
}var e=$("#"+c+" .only_x_left");
if(e.length){var i="";
var a=e.attr("data-um-level");
if(!e.attr("data-meta")){e.attr("data-meta",e.text())
}if(b==f){i=e.attr("data-meta")
}else{if(booking.env.x_left_room[b-1]){i=booking.env.x_left_room[b-1]
}}if(b<6){e.hide().html(i).fadeIn("slow")
}}},getOccupancy:function(a){var b=this;
this.$selects.each(function(){var g=$(this);
var e=g.data("roomid");
var d=g.attr("id");
if(b.maxRooms[e]){b.maxRooms[e].items[d]=g.clone()
}else{var c=g.find("option").length-1;
var f=b.maxRooms[e]={};
f.max=c;
f.items={};
f.items[d]=g.clone()
}});
if(a){this.changeOccupancy(a)
}}};
booking[sNSStartup].expand_no_date_room_table={init:function(){var a=$(".roomstable-no-dates-expanded");
a.delegate(".show-details","click",function(b){b.preventDefault();
var c=$(this).closest("tr");
c.find(".rt_show_dates .js_price_button").click()
})
}};
booking[sNSStartupLoad].policy_suggestion_banner={init:function(){$(".policy_suggestion_close_button").click(function(a){a.preventDefault();
$(this).parents(".policy_suggestion_holder").fadeOut("fast",function(){booking[sNSStartup].bookingSticker.update()
})
})
}};
(function(){var f=window.jQuery;
var l=window.booking;
var e=10000;
var d=false;
var m;
var i;
var o;
var p;
var k;
var b;
var h=1;
function n(){k=!l.env.b_has_valid_dates;
b=l.env.b_has_valid_dates&&!l.env.b_hotel_blocks;
m=f("div.hp-gallery");
o=m.find(".hp-gallery-slides");
i=m.find(".hp-gallery-review");
p=o.find(".js-gallery__last-item");
a()
}function a(){if(p.length){o.bind("afterChange",q);
f(".js-gallery__last-item__cta").bind("click",g)
}}function r(s){return function(v,u,w){var t=f(this);
var x=w===s;
if(x){c(t)
}else{if(d){j(t)
}}}
}function q(v,u,w){var s=f(this);
var t=u&&u.slideCount===(w+1);
if(t){c(s)
}else{if(d){j(s)
}}}function c(s){l.events.emit(l.hotel.Events.Gallery.ON_CTA_SLIDE);
s.slick("slickPause");
i.addClass("g-hidden");
d=setTimeout(function(){j(s);
s.slick("slickNext")
},e)
}function j(s){l.events.emit(l.hotel.Events.Gallery.OFF_CTA_SLIDE);
if(d){clearTimeout(d);
d=false
}i.removeClass("g-hidden");
s.slick("slickPlay")
}function g(){var s=k?"a[name=availability]":"#available_rooms";
var t=500;
f(document).scrollTo(s,t);
l.track.custom_goal("BOefZPUMVBFUZfFYdXaO",1)
}l.ensureNamespaceExists(sNSStartup);
l[sNSStartup].hp_gallery_last_item_cta={init:n}
})();
(function(){var g=window.booking,f=window.jQuery,d="BUcJZXONYANcOUPJHFYcUHZTEHNNTDVGO",e=f("#roomsForm"),c=e.find("select.js-b_room_selectbox"),b=g.components&&f("html").component("keyboard"),a=function(){return c.filter(function(){return this.value!=0
})
};
emptySelects=function(){return c.filter(function(){return this.value==0
})
},enableSelects=function(){var h=emptySelects();
h&&h.prop("disabled",false)
},init=function(){var h;
e.on("submit",function(){h=a();
if(h&&h.length){emptySelects().prop("disabled",true);
b.on("keyup:Escape",enableSelects)
}});
f(window).on("pageshow",function(i){if(i.originalEvent.persisted){enableSelects()
}});
enableSelects()
};
g.ensureNamespaceExists(sNSExperiments);
g[sNSExperiments][d]={priority:9,init:init}
})();
booking[sNSExperiments]["BUcQSSFIfNJOUAaDeQcHe"]={init:function(){var d="BUcQSSFIfNJOUAaDeQcHe",i=+B.track.getVariant(d),a=$(window),h=$("#maxotel_rooms"),e=$("div.gently_check_conditions_container"),b=$.browser.msie&&$.browser.version<9,f=5*1000,g=i?function(){var k=a.scrollTop(),j=a.height(),l=h.offset().top;
if(k>(l-j+(j/3))){if(b){e.show()
}else{e.css("display","block").animate({opacity:1},600)
}c();
a.unbind("scroll.gcc resize.gcc")
}}:Function(),c=function(){var j=setTimeout(function(){e.animate({opacity:0},600,function(){e.remove()
})
},f)
};
if(h.length){a.bind("scroll.gcc resize.gcc",g)
}}};
(function(){var b=window.jQuery;
var e=window.booking;
var a;
e.ensureNamespaceExists("hotel");
e.hotel.roomTable=e.hotel.roomTable||{};
e.hotel.roomTable.highlightRoom=function(g){if(b.type(g)==="string"&&g.substring(0,2)==="RD"){g=g.substring(2)
}else{return
}var h=a.find("#"+g).parents(".rt__room-detail");
var f="rt__room-detail--highlighted";
h.addClass(f);
setTimeout(function(){h.removeClass(f)
},500)
};
function d(){e.events.on(e.hotel.Events.RT.LIGHTBOX_CLOSE,function(f){e.hotel.roomTable.highlightRoom(f);
e.track.stage("BUcJPQORYcLcDESIBdBSSEJUZET",1)
})
}function c(){if((!e.feature&&!e.feature.transition)||!e.env.b_has_maxotel_rooms){return
}a=b("#maxotel_rooms");
d()
}e.ensureNamespaceExists(sNSStartup);
e[sNSStartup].hp_rt_lightbox_highlight_room_on_close={priority:9,init:c}
})();
(function(f,h){var a=false;
function g(){var i=h.env.b_browser==="msie"&&/[6|7]/.test(h.env.b_browser_version);
var j=(h.env.b_action==="hotel"&&!i&&(h.env.b_bookings_owned||h.env.b_is_villa_site)&&h.env.b_has_maxotel_rooms);
if(j){b();
e()
}}function b(){var i;
if(a){return
}if(f("#maxotel_rooms tbody tr").length>4){var i=booking[sNSStartup].bookingSticker;
c(i);
d(i);
h.events.on(h.hotel.Events.RT.ROOM_SELECTED,function(){window.setTimeout(i.update,5);
window.setTimeout(i.update,10)
});
if(i.stickedElements.length===2){a=true
}}}function c(i){var j=new i();
j.init("#maxotel_rooms thead","#maxotel_rooms")
}function d(i){var j=new i();
j.init(".bookNowWrap","#bookNow1")
}function e(){h.events.on("main-tab-opened",function(){if(!a){b()
}})
}h.ensureNamespaceExists(sNSStartup);
h[sNSStartup].hp_sticky_sticker={init:g}
})(jQuery,booking);
(function(){var d=window.jQuery;
var f=window.booking;
var c="BUTWWCQSFcOcEfFbaBbeIJWe";
var a;
function e(){a=d(".reviews-carousel");
if(f.track.getVariant(c)){a.addClass("eus")
}b()
}function b(){a.one("mousedown",".review_content",function(){a.one("mouseup",".review_content",function(){f.track.stage(c,1)
})
})
}f.ensureNamespaceExists(sNSExperiments);
f[sNSExperiments][c]={priority:9,init:e,initElse:e}
})();
booking[sNSStartup]["pss_hp_gallery_room_urgency_msg"]=(function(){function a(g){var b=$(g.target),f=b.parents(".slick-slide").data("room-id");
if(!f){return
}var d=$('a[name="RD'+f+'"]');
if(!d.length){return
}var c=d.offset().top-30;
$("html, body").animate({scrollTop:c},1000)
}return{init:function(){$("#photo_wrapper").on("click",".gallery-info__rn,.gallery-info__um",a)
}}
})(booking);
(function(){var a=function(c){if($("#maxotel_rooms").find(".b_room_selectbox").filter(function(){return $(this).val()!=0
}).length){var b="hp_rt_btn_loader only_reserve";
$("body").addClass(b);
$("#tooltip_wrap").hide()
}};
$("#bookNow1").delegate("input","click",a);
$("#hp_book_now_button").bind("click",a);
$(window).bind("pageshow",function(b){if(b.originalEvent.persisted){if($("body.hp_rt_btn_loader").length){$("body").removeClass("hp_rt_btn_loader")
}}})
})();
booking[sNSExperiments]["VOGcMNfacWXT"]=function(a,c){function b(d){if(!c.env.hotelAction.has_business_reviews){return
}a("#reviewer_type_filter").click(function(){c.track.exp("VOGcMNfacWXT")
})
}return{init:b,initElse:b}
}(jQuery,booking);
B.when({events:"ready",experiment:"YPNEfAae"}).require(["event-emitter"],function(d){var c=this.hash;
var b=function(i,j){if(!i){throw new Error("You did not pass proper date for countdown")
}this.dimensionsToCheck=["seconds","minutes","hours","days"];
this.defaults={updateInterval:1000,callback:false,expiredCallback:false,callbacks:false,leadingZeroes:{seconds:true,minutes:true,hours:true,days:false}};
if(typeof i==="number"){this.endTime=new Date(i)
}else{this.endTime=Date.parse(i)
}this.options=$.extend(true,{},this.defaults,j);
this._processOptions();
this._init();
return this
};
$.extend(b.prototype,{_processOptions:function(){var j=this.options.leadingZeroes;
if(typeof j=="boolean"){for(var k=0;
k<this.dimensionsToCheck.length;
k++){this.options.leadingZeroes[this.dimensionsToCheck[k]]=j
}}},_init:function(){d.extend(this);
this.previousTime=false;
this._saveStartRemainingTime();
this._setCallbacks();
this._start()
},_saveStartRemainingTime:function(){this.startRemainingTime=this._getRemainingTime()
},_start:function(){this._processTime();
this.timer=setInterval(this._processTime.bind(this),this.options.updateInterval)
},_processTime:function(){var i=this._getRemainingTime();
if(i.total>=0){this._fireEvents(i);
this.previousTime=i
}else{this.stop();
this._fireEvents(false)
}},_getRemainingTime:function(){var j=this.endTime-Date.parse(new Date()),l=Math.floor((j/1000)%60),k=Math.floor((j/1000/60)%60),i=Math.floor((j/(1000*60*60))%24),m=Math.floor(j/(1000*60*60*24));
return{total:j,days:m,hours:i,minutes:k,seconds:l}
},_fireEvents:function(i){if(!this.previousTime){return
}if(i){this._fireProgressEvents(i);
this._fireEveryTickEvent(i)
}else{this._fireExpiredEvent()
}},_fireProgressEvents:function(k){var j=this;
for(var l=0;
l<this.dimensionsToCheck.length;
l++){if(this._dimensionIsChanged(k,this.dimensionsToCheck[l])){this.trigger("changed",{type:this.dimensionsToCheck[l],remainingTime:j._formatDate(k)})
}}},_fireEveryTickEvent:function(i){this.trigger("ticked",{remainingTime:this._formatDate(i)})
},_fireExpiredEvent:function(){this.trigger("expired",{timeExpired:this._formatDate(this.startRemainingTime)})
},_dimensionIsChanged:function(i,j){return !!(i[j]-this.previousTime[j])
},_setCallbacks:function(){var i=this;
if(this.options.callback&&typeof this.options.callback=="function"){this.on("ticked",function(j){i.options.callback(i._formatDate(j.remainingTime))
})
}if(this.options.expiredCallback&&typeof this.options.expiredCallback=="function"){this.on("expired",function(j){i.options.expiredCallback.call(i._formatDate(j.remainingTime))
})
}if(this.options.callbacks){this.on("changed",function(j){if(i.options.callbacks[j.type]&&typeof i.options.callbacks[j.type]=="function"){i.options.callbacks[j.type].call(i._formatDate(j.remainingTime))
}})
}},_formatDate:function(i){var k;
for(var j in i){if(this.options.leadingZeroes[j]&&i.hasOwnProperty(j)){k=""+i[j];
if(k.length<=1){i[j]="0"+k
}}}return i
},getStartRemainingTime:function(){return this._formatDate(this.startRemainingTime)
},stop:function(){clearInterval(this.timer)
},proceed:function(){this._start()
}});
var h=function(i){this.init(i)
};
$.extend(h.prototype,{init:function(i){this.$countdown=$(i);
this.finalDate=(+this.$countdown.attr("data-expires-at"))*1000;
this.$daysContainer=this.$countdown.find(".js--days-container");
this.$dayTimeContainter=this.$countdown.find(".js--day-time-container");
this.ticker=new b(this.finalDate);
this.setTime(this.ticker.getStartRemainingTime());
this.setCountdownListeners()
},setCountdownListeners:function(){var i=this;
this.ticker.on("ticked",function(j){i.setTime(j.remainingTime)
});
this.ticker.on("expired",function(){i.expire()
})
},setTime:function(i){if(i.days){this.setDaysCount(i.days)
}else{this.removeDays()
}this.setDayTime(i)
},setDaysCount:function(i){this.$daysContainer.text(B.jstmpl.translations("deals_deal_of_day_countdown_days",i,{num_days_left:i}))
},setDayTime:function(i){this.$dayTimeContainter.text(B.jstmpl.translations("deals_deal_of_day_countdown_timer",null,{hours_remain:i.hours,minutes_remain:i.minutes,seconds_remain:i.seconds}))
},removeDays:function(){},expire:function(){}});
function g(k,j){var i=function(l){this.expireIsTracked=false;
this.init(l)
};
$.extend(i.prototype,h.prototype,{setTime:function(l){if(l.total<=3000&&!this.expireIsTracked){B.et.customGoal(c,2);
this.expireIsTracked=true
}h.prototype.setTime.call(this,l)
},expire:function(){location.reload()
},removeDays:function(){this.$daysContainer.hide()
}});
new i(k,j)
}function e(j,i){var k=function(l){this.init(l)
};
$.extend(k.prototype,h.prototype,{expire:function(){this.$countdown.closest(".js--dod-banner").addClass("dod-banner--expired");
B.et.customGoal(c,1)
},removeDays:function(){this.$daysContainer.hide().next().addClass("dod-banner__countdown-block--first")
}});
new k(j,i)
}var a=$(".js--dod-countdown-tooltip"),f=$(".js--dod-countdown-banner");
if(a.length){a.each(function(){g($(this))
})
}if(f.length){e(f)
}});
B.run("bHVNNcLPLEZDYIZEBaRIScOTXdUFJO").onReady(function(){booking.track.onView(".tracking_for_bHVNNcLPLEZDYIZEBaRIScOTXdUFJO").exp("bHVNNcLPLEZDYIZEBaRIScOTXdUFJO")
});
booking[sNSExperiments]["bHAQARCbWLHLQYbAZXIZAMIKe"]=(function(){var b=$("#recommendationHP");
if(!b.length){return{init:$.noop,initElse:$.noop}
}var a=b.attr("data-room-ids");
var c=$(".rt-select-recommendation");
function d(){booking.events.on(booking.hotel.Events.RT.ROOM_SELECTED,function(e){if(a&&e.no_rooms>0&&a.indexOf(e.room_id)!=-1){booking.track.stage("bHAQARCbWLHLQYbAZXIZAMIKe",1);
if(booking.track.getVariant("bHAQARCbWLHLQYbAZXIZAMIKe")){c.show()
}}else{c.hide()
}})
}return{init:d,initElse:d}
})();
(function(){var d=window.jQuery;
var f=window.booking;
var b="BUMUJUKMZSPJPUSBRUDKe";
function a(){d(".js-ph__cta--groups").hover(function(){f.track.stage(b,1)
})
}function e(){a()
}function c(){a()
}f.ensureNamespaceExists(sNSExperiments);
f[sNSExperiments][b]={priority:9,init:e,initElse:c}
})();
(function(c,g,l,j,k,e){var a=c.track;
var f="dddYIQDSFGWBKICFHUeUdURe";
function d(m){a.custom_goal(f,m)
}function i(){var r=g("#Guides_Awareness_Map");
var p=250;
var o;
function n(){o=j.setTimeout(function(s){r.unbind("mouseenter",n);
r.unbind("mouseleave",q);
d(1)
},p)
}function q(){j.clearTimeout(o)
}function m(){r.unbind("click",m);
d(2)
}r.bind("mouseenter",n);
r.bind("mouseleave",q);
r.bind("click",m)
}function b(){i()
}function h(){i()
}c[l][f]={init:b,initElse:h}
})(window.booking,window.jQuery,window.sNSExperiments,window,document);
(function(c,g,l,j,k,e){var a=c.track;
var f="dddYIQDSFGWBKICFHUeUdQCXHe";
function d(m){a.custom_goal(f,m)
}function i(){var r=g("#Guide_Awareness_Title");
var p=250;
var o;
function n(){o=j.setTimeout(function(){r.unbind("mouseenter",n);
r.unbind("mouseleave",q);
d(1)
},p)
}function q(){j.clearTimeout(o)
}function m(){r.unbind("click",m);
d(2)
}r.bind("mouseenter",n);
r.bind("mouseleave",q);
r.bind("click",m)
}function b(){i()
}function h(){i()
}c[l][f]={init:b,initElse:h}
})(window.booking,window.jQuery,window.sNSExperiments,window,document);
(function(){var b=window.booking,i=window.jQuery,a=b.events,d=b.env.rtl,c="BUTWWCQSFePMZHGJIaLKKXe",h=i("body"),j=i(".hp-gallery"),e=function(){var m=true;
h.on("click.hp_corner_navigation","div.hp-gallery-container",function(n){if(m){b.track.stage(c,1);
m=false;
h.off("click.hp_corner_navigation")
}})
},l=function(){var o=i("div.hp-gallery-container");
var m=o.find('[data-nav="next"]');
var n=o.find('[data-nav="prev"]');
o.addClass("BUTWWCQSFePMZHGJIaLKKXe");
h.on("click","div.hp-gallery-review",function(q){q.stopPropagation()
});
h.on("mousemove","div.hp-gallery-review",function(q){q.stopPropagation()
});
var p=function(q){if(i(q.target).is(".hp-gallery-control")||i(q.target).is(".gallery__last-item__cta")){return false
}var s=o.width();
var t=q.pageX-j.offset().left;
var r=t/s*100;
if(!booking.env.rtl){if(r>=30){m.addClass("h");
n.removeClass("h")
}else{m.removeClass("h");
n.addClass("h")
}}else{if(r>=70){m.removeClass("h");
n.addClass("h")
}else{m.addClass("h");
n.removeClass("h")
}}};
h.on("mousemove","div.hp-gallery",p);
h.on("click","div.hp-gallery",function(q){var s=o.width();
var t=(q.offsetX||q.pageX-i(q.target).offset().left);
var r=t/s*100;
if(r>=30){m.click();
setTimeout(function(){p(q)
},50)
}else{n.click();
setTimeout(function(){p(q)
},50)
}});
h.on("mouseout","div.hp-gallery",function(q){m.removeClass("h");
n.removeClass("h")
})
},g=function(){e();
l()
},f=function(){slick=b.hotel.Gallery.slick;
if(slick&&slick.cssTransitions){if(window.location.hash&&/tab\-reviews|tab\-4/.test(window.location.hash)){a.on("main-tab-opened",g)
}else{g()
}}},k=function(){if(b.hotel.Gallery&&b.hotel.Gallery.slick){f()
}else{a.on(b.hotel.Events.Gallery.INIT,f)
}};
b.ensureNamespaceExists(sNSExperiments);
b[sNSExperiments][c]={priority:9,init:k}
})();
(function(){if(!B.env.run_BUNHTIcMHMMRfC||$("div.js_hp_frr__wrapper").length){return
}var a=$("#reviewFloater"),b=a.find(".althotelsReview2 span"),c=b.eq(0).parent(),d=a.data("trans-more")||"more",e=122,f=110;
b.each(function(){var h=$(this),i=h.data("url")||"",m=$.trim(h.text()),g=h.css("height","auto").height(),k,l,j;
if(g>f){j=g/f;
m=m.slice(0,Math.floor(m.length/j));
l=m.match(/(\w+)\s/g);
if(l){l=l.slice(-1)[0];
m=m.slice(0,m.lastIndexOf(l)+l.length)
}h.text(m+"...")
}h.css("height",e+"px");
h=k
});
a.removeClass("fixed_review_container_not_ready")
})();
(function(){var c=$(document.roomsForm),b=c.find(".b_room_selectbox");
function a(){return b.filter(function(){return $(this).val()!=0
}).length
}booking.runExp("hp_gently_select_rooms").onReady(function(){var g=$(".book_now_button_handler"),m=$(".gently_select_rooms_container"),j=$("#availability_target"),h=$("html,body"),d=$.browser.msie&&$.browser.version<9,i=-20,k=4000,e=d?function(){m.hide()
}:function(){m.css({opacity:0,display:"none"})
},l=d?function(){m.show()
}:function(){m.css("display","block").animate({opacity:1},600);
if($("#maxotel_rooms").hasClass("highlight_rooms")){fminit($(".roomMultiRoomPrice"),true,"#FFF",[255,255,255])
}window.setTimeout(function(){m.animate({opacity:0},600,function(){m.hide()
})
},k)
};
function f(n){h.animate({scrollTop:i+j.offset().top+"px"},n||1000,l)
}g.click(function(){if(a()){c.submit();
return
}booking.events.trigger("open-tab",{tab:"main"});
booking.events.trigger("open-tab-BUcQSSFIaLFPTcZQZEHe");
setTimeout(function(){e();
f()
},0)
});
b.change(e)
})
})();
booking[sNSExperiments]["BUcQSSFIaLFPTcZQZEHe"]={init:function(){var a="BUcQSSFIaLFPTcZQZEHe";
if(B.track.getVariant(a)===false){return
}B.events.on("open-tab-BUcQSSFIaLFPTcZQZEHe",function(){B.track.exp(a)
})
},initElse:function(){this.init()
}};
(function(){var d=window.jQuery;
var f=window.booking;
var b="BUbHVZObLOLHT";
function a(){d(".js-hp_gs_gr_tooltip").on("hover",function(){f.track.stage(b,1)
})
}function e(){a()
}function c(){a()
}f.ensureNamespaceExists(sNSExperiments);
f[sNSExperiments][b]={priority:9,init:e,initElse:c}
})();
(function(){var d=window.jQuery;
var f=window.booking;
var b="BUbHVZObLOLcZUXSC";
function a(){d(".js-hp_gs_gr_tooltip").on("hover",function(){f.track.stage(b,1)
})
}function e(){a()
}function c(){a()
}f.ensureNamespaceExists(sNSExperiments);
f[sNSExperiments][b]={priority:9,init:e,initElse:c}
})();
booking[sNSStartup].hp_gs_review_snippets_see_more=(function(c,f){function d(){c(".js-big_review_score_detailed").bind("click",a);
c(".js-score_from_family_travellers").bind("click",e);
b()
}function b(){if(window.location.hash.indexOf("tab-reviews-family_traveller")>-1){c(".js-score_from_family_travellers").trigger("click")
}}function a(g){if(c("#reviewer_type_filter option:selected").data("customer-type")!="total"){c('#reviewer_type_filter option[data-customer-type="total"]').attr("selected",1).trigger("change")
}}function e(g){if(c("#reviewer_type_filter option:selected").data("customer-type")!="family_with_children"){c('#reviewer_type_filter option[data-customer-type="family_with_children"]').attr("selected",1).trigger("change")
}}return{priority:1,init:d}
})(jQuery,booking);
(function(){var c=$("#seo_links_drawer"),b=$(".hp_useful_links_header",c),a=$(".hp_useful_links",c);
if(c.find(".hp_useful_links_no_hide").length>0){return
}if(c.length>0){a.hide();
b.toggle(function(){a.stop(true,true).slideDown()
},function(){a.stop(true,true).slideUp()
})
}})();
(function(){var d=0,f=booking.env,g=$(window),h=false,e=false,b=$("#rt_default_room_header"),a=b.length?function(i){b[i?"show":"hide"]()
}:Function();
(function c(){var j=[],k,l;
$("[data-occupancy-for-tracking]").each(function(){j[$(this).data("occupancy-for-tracking")]=true
});
for(k=0,l=j.length;
k<l;
k+=1){if(j[k]===true){d+=1
}}})();
if(d>1){booking.track.exp("ebcBUAeCQWABTXYZVCDXMDDBVfPYUNaT");
if(!booking.track.getVariant("ebcBUAeCQWABTXYZVCDXMDDBVfPYUNaT")){g.load(function(){g.resize()
})
}if(/[;?&]+map=1/gi.test(location.search)){booking.track.stage("ebcBUAeCQWABTXYZVCDXMDDBVfPYUNaT",1)
}}else{$(".occupancy_dropdown_header").removeClass("occupancy_dropdown_header").find(".occupancy_dropdown_arrow").remove();
return
}booking.runExp("hp_occupancy_dropdown").beforeReady(function(){var i=$("#available_rooms"),m=$(document.body),s=i.find("#occupancy_dropdown_current").data("original-text"),u=i.find("#occupancy_dropdown"),o,p=i.find("#room_availability_container tr"),q=p.filter("[data-occupancy]"),t=p.filter(".maintr"),k=[],l=$("#occupancy_list");
(function r(){if(!u.length){return
}var w,v="",z="",x,y;
q.each(function(){k[this.getAttribute("data-occupancy")]=true
});
for(x=0,y=k.length;
x<y;
x+=1){if(k[x]===true){v+='<li data-value="'+x+'"><i class="b-sprite occupancy_max'+x+'_light"></i></li>'
}}u.prepend(v);
booking.events.trigger("hp_occupancy_dropdown:COMPLETE")
})();
function j(){$(this).addClass("bright_max").find("ul").hide()
}function n(){$(this).removeClass("bright_max").find("ul").show();
booking.google.trackEvent("Hover","Action: hotel","hp_occupancy_dropdown")
}m.delegate("#occupancy_dropdown li","click",function(){booking.events.trigger("hp_occupancy_dropdown:selection");
booking.google.trackEvent("Click","Action: hotel","hp_occupancy_dropdown");
var w=$(this).closest("li"),x=w.closest("ul"),z=w.data("value"),C=o||$('[id="occupancy_dropdown"]').not(x).siblings("#occupancy_dropdown_current").add(x.siblings("#occupancy_dropdown_current")),y='[data-occupancy="'+z+'"]';
var D=i.find(".roomDefaultUse select").filter(function(){return $(this).val()!=0
}).closest("tr[data-occupancy]"),A=q.filter(y).add(D),v=q.not(y).not(D);
if(!+z){C.html(s);
q.show()
}else{C.html(w.children().clone());
(A.show()&&v.hide())
}t.each(function(){var H=$(this),F=(this.className.match(/(room_loop_counter\d+)/)||["","not-an-element-in-the-dom"])[1],E=$("."+F).filter(":visible").not(".extendedRow,.maintr"),G=E.length;
H.add(H.nextAll(".extendedRow"))[!G?"hide":"show"]();
if(H.hasClass("nha_rt_rooms_divider_with_image")||H.hasClass("nha_rt_rooms_divider")){H.children("td:first").attr("rowspan",1)
}else{H.children("td:first").attr("rowspan",G+1)
}if(H.prev().attr("id")==="rt_default_room_header"){a(G)
}});
($.proxy(j,x.closest(".occupancy_dropdown_header")))();
if(!w.data("preselected")){if(!m.hasClass("hp_dd_preselected")){g.scrollTo("#availability_target")
}}setTimeout(function(){g.resize()
},0);
h=true
}).delegate("#occupancy_list input","click",function(v){var w=$(this).data("value");
$("#occupancy_dropdown").find("li").filter('[data-value="'+w+'"]').trigger("click")
}).delegate(".occupancy_dropdown_header","mouseenter",n).delegate(".occupancy_dropdown_header","mouseleave",j);
g.resize().trigger("hp_occupancy_dropdown:ready");
$("#maxotel_rooms").delegate(".b_room_selectbox","change",function(){if(h){e=true
}});
$("#bookNow1").delegate("input","click",function(){if($("#maxotel_rooms").find(".b_room_selectbox").filter(function(){return $(this).val()!=0
}).length&&e){booking.google.trackEvent("Click","Action: Book Now button after using occupancy filter","hp_occupancy_dropdown_filter")
}})
})
})();
B.ensureNamespaceExists("hotel");
B.hotel.rtGallery=(function(m,e,v,f,i){var a=m.events,u=m.env,b=u.run_BUcJPQORYSKDYEaNdNC,g=f("div.hp_rt_lightbox_content"),h=null,j=null,k=null,d=null,q=0,c=null,p=3,t=function(){h=g.find("ul.rt-lightbox-photo-gallery");
j=h.find("li");
d=j.length;
k=g.find("span.rt-lightbox-gallery-controls");
if(d<=p){k.addClass("disabled")
}else{k.removeClass("disabled")
}if(!c){r()
}},o=function(){var w=q+1;
if(w>=(d-(p-1))){w=0
}l(w)
},n=function(){var w=q-1;
if(w<0){w=(d-(p-1))-1
}l(w)
},l=function(x){var w=x*c;
h.css({marginLeft:-w});
q=x
},r=function(){var x=d?j.first():null,w=1;
c=x&&x.length?(x.width()+w):0
},s=function(){if(b){g=f("div.hp_rt_lightbox_content");
a.on("rt-lightbox-open",t);
g.delegate("span.rt-lightbox-gallery-prev","click",n).delegate("span.rt-lightbox-gallery-next","click",o)
}};
a.on("rt-lightbox-ready",s)
})(B,window,document,jQuery);
(function(b){var a="BUcJPQORYSKDYEaNdNDPBFO";
b.ensureNamespaceExists("hotel");
b.hotel.rtLightbox.gallery={_currentId:false,_minId:false,_maxId:false,goTo:function(c){$(".js-rt_lightbox_gallery_v2__img").removeClass("js-rt_lightbox_gallery_v2__current").removeClass("rt_lightbox_gallery_v2__current").addClass("rt_lightbox_gallery_v2__hidden");
$(".js-rt_lightbox_gallery_v2__img[data-order="+c+"]").addClass("js-rt_lightbox_gallery_v2__current").addClass("rt_lightbox_gallery_v2__current").removeClass("rt_lightbox_gallery_v2__hidden");
$(".js-rt_lightbox_gallery_v2__thumb").removeClass("selected");
$(".js-rt_lightbox_gallery_v2__thumb[data-order="+c+"]").addClass("selected");
this._currentId=c
},prev:function(){var c;
if(this._currentId===1){c=this._maxId
}else{c=this._currentId-1
}this.goTo(c)
},next:function(){var c;
if(this._currentId===this._maxId){c=this._minId
}else{c=this._currentId+1
}this.goTo(c)
},addBinds:function(){var c=this;
b.events.on("rt-lightbox-open",function(){c.goTo(1);
c._currentId=parseFloat($(".hp_rt_lightbox_content .js-rt_lightbox_gallery_v2__current").data("order"));
c._minId=parseFloat($(".hp_rt_lightbox_content .js-rt_lightbox_gallery_v2__thumb:first").data("order"));
c._maxId=parseFloat($(".hp_rt_lightbox_content .js-rt_lightbox_gallery_v2__thumb:last").data("order"))
});
$(document).keyup(function(d){if(d.keyCode===37){c.prev()
}else{if(d.keyCode===39){c.next()
}}});
$(".js-rt_lightbox_gallery_v2__thumb").click(function(d){d.preventDefault();
b.events.trigger("hp:rt:room:lightbox:gallery:thumb:click");
b.track.custom_goal(a,1);
c.goTo(parseFloat($(this).data("order")))
});
$(".js-rt_lightbox_gallery_v2__gallery_arrows_left").click(function(d){d.preventDefault();
b.events.trigger("hp:rt:room:lightbox:gallery:left:click");
b.track.custom_goal(a,2);
c.prev()
});
$(".js-rt_lightbox_gallery_v2__gallery_arrows_right").click(function(d){d.preventDefault();
b.events.trigger("hp:rt:room:lightbox:gallery:right:click");
b.track.custom_goal(a,3);
c.next()
})
},addTracking:function(){var c=this;
b.events.on("rt-lightbox-open",function(){b.track.exp(a)
})
},init:function(){this.addBinds()
},initElse:function(){}};
if(b.env.b_run_hp_rt_lightbox_image_gallery_v2){b.hotel.rtLightbox.gallery.init()
}})(booking);
booking[sNSExperiments]["BUcJZUTPBaFKbdKXfBRUDfACLO"]=(function(d,b){var c="BUcJZUTPBaFKbdKXfBRUDfACLO";
function a(){b(".room_table_conditions_tooltip.pp_free_cancellation_tooltip").one("mouseenter",function(){d.track.stage(c,1)
})
}return{init:a,initElse:a}
}(booking,$));
(function(){var d=window.jQuery;
var h=window.booking;
var c="BUcJHPFbWfbHJKbIPFaXfQfQOUWe";
var b=0;
function g(){h.events.on(h.hotel.Events.RT.NO_ROOM_SELECTED_POSTALERT,function(){a(1);
b++;
if(b>1&&b<6){e(b)
}});
h.events.on(h.hotel.Events.RT.ROOM_SELECTED,function(){if(b){e(1)
}})
}function f(){if((!h.feature&&!h.feature.transition)||!h.env.b_has_maxotel_rooms){return
}a();
g()
}function a(i){if(i){h.track.stage(c,i)
}else{h.track.exp(c)
}}function e(i){if(i){h.track.custom_goal(c,i)
}}h.ensureNamespaceExists(sNSExperiments);
h[sNSExperiments][c]={priority:9,init:f,initElse:f}
})();
(function(){var d=window.jQuery;
var f=window.booking;
var c="BUELZSIYWEIFcIOEIaNfLae";
var a;
function e(){if(f.env.b_has_maxotel_rooms&&d("."+c).length){b()
}}function b(){f.events.on(f.hotel.Events.RT.LIGHTBOX_OPEN,function(h,g){if(g&&g.find("."+c).length){f.track.stage(c,1)
}})
}f.ensureNamespaceExists(sNSExperiments);
f[sNSExperiments][c]={priority:9,init:e,initElse:e}
})();
(function(){var e=window.booking,c=window.jQuery,a="BUcJPZEUZFNTedJNZedUDbUeCRe",b=c("body"),d=function(){b.on("change",".lightbox-reserve-button .bed_preference_select",function(f){c(this).parents(".lightbox-reserve-button").find(".b-button").attr("href",c(this).val())
})
};
e.ensureNamespaceExists(sNSExperiments);
e[sNSExperiments][a]={priority:9,init:d}
})();
(function(b){var a="BUEDYcTdC";
b[sNSExperiments][a]={init:function(){var c=this;
this.$favicon=$('link[rel="shortcut icon"]').first();
if(this.$favicon.length){this.originalFavicon=this.$favicon.attr("href");
if(b.env.b_notify_favicon){this.notifyFavicon=b.env.b_notify_favicon
}}$(window).bind("blur",function(){if(b.env.b_is_map_favicon_enabled){return
}if(c.$favicon&&c.originalFavicon&&c.notifyFavicon){c.$favicon.attr("href",c.notifyFavicon)
}b.track.stage(a,1)
}).bind("focus",function(){if(b.env.b_is_map_favicon_enabled){return
}if(c.$favicon&&c.originalFavicon&&c.notifyFavicon){c.$favicon.attr("href",c.originalFavicon)
}b.track.stage(a,2)
})
},initElse:function(){$(window).bind("blur",function(){if(b.env.b_is_map_favicon_enabled){return
}b.track.stage(a,1)
}).bind("focus",function(){if(b.env.b_is_map_favicon_enabled){return
}b.track.stage(a,2)
})
}}
}(booking));
(function(){var f=window.jQuery;
var b=window.booking;
var c="BUcJPQORYRKBRe";
var d;
var g;
function a(n){var k=n.find(".listticker");
var j=k.children();
var p=j.length;
var m=0;
var o=p*2;
var q=7000;
function l(){if(g){clearTimeout(g);
k.children().filter(":first").fadeOut("slow",function(){k.append(f(this));
k.children().filter(":first").fadeIn("slow")
})
}if(m<o){m++;
g=setTimeout(l,q)
}}l()
}function e(){if(g){clearTimeout(g)
}}function h(){b.events.on(b.hotel.Events.RT.LIGHTBOX_OPEN,function(k,j){if(j.find(".lightbox-book-this-room-container").length){b.et.stage(c,1);
if(d){a(j)
}}});
b.events.on(b.hotel.Events.RT.LIGHTBOX_CLOSE,function(k,j){if(d&&j.find(".lightbox-book-this-room-container").length){e(j)
}})
}function i(){d=b.et.track(c);
h()
}b.ensureNamespaceExists(sNSExperiments);
b[sNSExperiments][c]={priority:9,init:i,initElse:i}
})();
(function(b){var i;
var f,j;
var d={};
function h(k){f=k("jquery");
i=k("events");
j=f(".guests-and-nights","#bookNow1");
if(!j.length){return
}g()
}function g(){i.on(b.hotel.Events.RT.ROOM_SELECTED,c)
}function c(l){var n=0;
var k=b.env.b_dates_interval;
d[l.block_id]=l.no_rooms*l.max_adults;
for(var m in d){n+=d[m]
}if(n){a(n,k)
}else{e()
}}function a(l,k){var m=[];
m.push(b.jstmpl.translations("hp_for_x_guests_y_nights_1",l,{num_guests:l}));
m.push(b.jstmpl.translations("hp_for_x_guests_y_nights_2",k,{num_nights:k}));
j.html(m.join(" "))
}function e(){j.html("")
}b.when({condition:b.env.b_has_maxotel_rooms&&!b.env.b_group_children,experiment:"BUcJPQQDVCUOfVIOQQRMFXJKe"}).run(h);
b.when({condition:b.env.b_has_maxotel_rooms&&!b.env.b_group_children,events:b.hotel.Events.RT.ROOM_SELECTED,experiment:"BUcJPQQDVCUOfVIOQQRMFXJKe",stage:1})
}(booking));
(function(b){function a(d){var e=d("jquery");
var c=e(".hp-gallery-discount-tag");
c.on("click",function(){e(window).scrollTo("#available_rooms",500)
})
}b.when({action:"hotel",condition:b.env.b_has_maxotel_rooms,experiment:"BUTWWCQSFYPNAFfePdJXDSPFLLT"}).run(a);
b.when({action:"hotel",condition:b.env.b_has_maxotel_rooms,events:"click .hp-gallery-discount-tag",experiment:"BUTWWCQSFYPNAFfePdJXDSPFLLT",stage:1})
}(booking));
booking[sNSExperiments]["BUBeKHPdMXVaPEQSaTfLJWcC"]=(function(d,b){var c="BUBeKHPdMXVaPEQSaTfLJWcC";
function a(){b(".room_table_conditions_tooltip.hp_hpbp_non_refund_tooltip_header").one("mouseenter",function(){d.track.stage(c,1);
d.track.stage(c,2)
});
b(".room_policies_tooltip_icon.hp_hpbp_non_refund_tooltip_header").one("mouseenter",function(){d.track.stage(c,1);
d.track.stage(c,3)
})
}return{init:a,initElse:a}
}(booking,$));
(function(){var d=window.jQuery;
var a=window.booking;
var e=false;
var g;
var f="";
var b="BUPBAATIbYUHPTaWe";
function i(){if(!a.env.b_has_maxotel_rooms){return
}g=d(".js-rt__summary__reserve-button");
f=g.html();
c()
}function c(){a.events.on(a.hotel.Events.RT.ROOM_SELECTED,h)
}function h(k){a.et.stage(b,1);
if(a.et.track(b)){var j=parseInt(k.no_rooms,10);
if(j===0&&e){g.html(f);
e=false
}else{if(!e){if(!a.env.rtl){g.html(f+'<i class="bicon-rightchevron hp_button_arrow"></i>')
}else{g.html(f+'<i class="bicon-leftchevron hp_button_arrow"></i>')
}e=true
}}}}a.ensureNamespaceExists(sNSExperiments);
a[sNSExperiments][b]={priority:9,init:i,initElse:i}
})();
(function(c){var b="BUcJPQORNFHQIDKe";
function a(d,f){var e="."+b;
d.on(c.hotel.Events.RT.LIGHTBOX_OPEN,function(h,g){if(g.find(e).length){f.stage(b,1)
}})
}c.when({action:"hotel",condition:c.env.b_has_maxotel_rooms,experiment:b}).require(["events","et"],a)
}(booking));
(function(){var f=window.jQuery;
var b=window.booking;
var h;
var j;
var a;
var i;
var g;
var e;
var c="BUcJPVITeeLFXGDCNREAZfeeUJHKaT";
function k(){h=f(".lp_bold_date_picker_wrapper");
i=h.find(".hp-input-label");
j=h.find(".rt-av-input-label-checkin");
a=h.find(".rt-av-input-label-checkout");
d()
}function d(){i.one("mouseover",function(){b.track.stage(c,1)
});
if(b.track.getVariant(c)){g=h.find(".lp_bold_date_picker_checkin");
e=h.find(".lp_bold_date_picker_checkout");
j.on("click",function(l){l.stopPropagation();
g.trigger("click")
});
a.on("click",function(l){l.stopPropagation();
e.trigger("click")
})
}}b.ensureNamespaceExists(sNSExperiments);
b[sNSExperiments][c]={priority:9,init:k,initElse:k}
})();
(function(){var a="YdAZcBJMEfdJNDYBDERXC";
booking[sNSExperiments][a]=(function(c,b){return{init:function(){var d=c.events;
b(".roomstable-no-dates-expanded-more-base .show-details").bind("click",function(){c.track.stage(a,2)
});
if(b(".roomstable-no-dates-expanded-more").length){d.on("rt-lightbox-open",function(){c.track.stage(a,2)
})
}b(".hp_rt_lightbox_wrapper").delegate(".js-lightbox-close","click",function(){if(c.hotel&&c.hotel.rtLightbox&&c.hotel.rtLightbox.close){c.hotel.rtLightbox.close();
c.track.custom_goal(a,2);
b("#maxotel_rooms span.js_price_button").eq(0).trigger("click")
}})
},initElse:function(){}}
})(booking,jQuery)
})();
booking[sNSExperiments]["YdVNYRQKe"]={init:function(){var a=0,b=$("body");
$(".faq_link a").click(function(g){g.preventDefault();
var d=this;
if(booking.env.lazy_load_faq_detail&&!booking.env.b_faq_questions_standalone_loaded){var c="/general"+booking.env.b_query_params_with_lang+booking.env.b_query_params_delimiter+"tmpl=faq_questions_standalone";
$("#faq_detail").load(c+" #faq_questions_standalone",function(){$("#faq_questions_standalone").replaceWith($("#faq_questions_standalone").contents());
booking.env.b_faq_questions_standalone_loaded=1;
d.click()
});
return
}booking[sNSStartup].lightbox.show($(".faq_detail"));
$("#topten").addClass("hidden");
$(".faqA").removeClass("active");
var f=$(this).attr("href").match(/(#.*)$/)[1];
if(f){$(f).addClass("active")
}});
booking.eventEmitter.bind("modal:open",function(){var c=$("div.modal-wrapper");
a=parseInt(c.css("top"));
if(c.find("#faq_detail").length){b.addClass("faq-modal-open");
c.css({top:$(window).scrollTop()+a})
}}).bind("modal:close",function(){b.removeClass("faq-modal-open")
})
},initElse:function(){}};
(function(a,b){a.fn.popularHotelCarousel=function(){return this.each(function(){if(b.env.b_browser==="msie"&&b.env.b_browser_version<8){return
}var j=a(this);
var p=a(".carousel-control-prev",this);
var n=a(".carousel-control-next",this);
var i=a(".carousel-content",this);
var m=a(".hotel_item",this);
var d=a("#loc_popular_hotel_on_hp .carousel-control");
var c=a(".carousel-viewport",this);
var h=c.width();
var o;
var g;
var f=1;
var l=(b.env.rtl)?"right":"left";
function k(){if(f===g){return
}if(f===1){p.addClass("active")
}f=f+1;
q();
if(f===g){n.removeClass("active")
}}function e(){if(f===1){return
}f=f-1;
q();
if(f<g){n.addClass("active")
}if(f===1){p.removeClass("active")
}}function q(){var r=h*(f-1)*-1;
i.css(l,r)
}(function(){var s=h%5;
var r=0;
m.css("width",function(u){var t=u%5<s?Math.ceil:Math.floor;
var v=t(h/5);
r=r+v;
return v
});
i.css("width",r);
g=Math.ceil(r/h);
if(g<2){return
}n.addClass("active");
n.on("click",k);
p.on("click",e)
}())
})
};
if((b.env.b_action==="hotel")&&(a(".hotel_list").length>0)){booking[sNSExperiments]["YdVNNLZdIUVdFddAbDZEET"]={init:function(){a("#loc_popular_hotel_on_hp .carousel").popularHotelCarousel()
}}
}}(jQuery,B));
(function(){var c="YdVNYUZOZZaeKe",b=$(window);
function a(){var g,h=$(document.body),l,k,f,r=false,o="is-active",n=[],i,d=function(s){n.push(s);
e(s)
};
function e(t){var u=h.hasClass("tab-reviews-opened"),s;
if(u){if(!i){b.unbind("scroll.hpBackFromReviews").bind("scroll.hpBackFromReviews",function(){i=true;
b.unbind("scroll.hpBackFromReviews");
e()
})
}}else{i=false;
b.unbind("scroll.hpBackFromReviews")
}s=u&&i;
if(s){r=true
}if(typeof t==="function"){t(s)
}else{$.each(n,function(v,w){w(s)
})
}}function m(){if(!l){l=$("#cookie_warning")
}return l.is(":visible")?l.outerHeight():0
}function j(){var s=0;
h.unbind("click.hpBackFromReviews");
if(g){s=m();
g.css("margin-bottom",s||"");
if(s){k=true;
f=false;
h.bind("click.hpBackFromReviews",B.tools.functions.throttle(j,1100,{leading:false}))
}else{if(k){f=true;
b.unbind("resize.hpBackFromReviews")
}}}}function q(){d(function(s){b.unbind("resize.hpBackFromReviews");
if(s){if(!g){B.track.exp(c);
g=$(B.jstmpl("hp_back_from_reviews").render({isCompact:2===B.track.getVariant(c),backTitle:$("#show_reviews_tab").attr("data-return-html")})).appendTo(h);
g.find(">.hp-back-from-reviews__link").bind("click",function(){B.track.stage(c,1)
})
}if(!f){b.bind("resize.hpBackFromReviews",j);
j();
setTimeout(j,1100)
}}g&&g.toggleClass(o,s)
});
B.events.on("tab-opened",e)
}function p(){d(function(s){if(s){B.track.exp(c)
}});
B.events.on("tab-opened",e)
}return{init:q,initPassive:p}
}booking[sNSExperiments][c]=(function(e,d){return{init:function(){a().init()
},initElse:function(){a().initPassive()
}}
})(booking,jQuery)
})();
booking[sNSExperiments]["YdVNYSEPdFcEAWMCBWDKe"]={init:function(){$(".more").toggle(function(){$(this).text(booking.jstmpl.translations("loc_meal_plan_ja_show_less")).siblings(".complete").show();
$(this).text(booking.jstmpl.translations("loc_meal_plan_ja_show_less")).siblings(".shorten").hide()
},function(){$(this).text(booking.jstmpl.translations("loc_meal_plan_ja_show_more")).siblings(".complete").hide();
$(this).text(booking.jstmpl.translations("loc_meal_plan_ja_show_more")).siblings(".shorten").show()
});
$("li.navigate").bind("click",function(){var b=$(this),e=b.data("direction"),a=$("ul.photo_box_inner"),d=a.children(".active"),c=e==="next"?a.children(":first"):a.children(":last"),f=e==="next"?d.next():d.prev();
f=f.index()==-1?c:f;
d.removeClass("active");
f.addClass("active")
})
}};
B.run("YdVNNQAJNDMRTKe").onReady(function(){var a="YdVNNQAJNDMRTKe",b;
B.track.onView(".policy_mealplan_element-text").exp(a);
$(".mp-icon").mouseenter(function(c){b=setTimeout(function(){B.track.custom_goal(a,1);
$(this).unbind(c)
},250)
}).mouseleave(function(){clearTimeout(b)
})
});
$(function(){B.events.on("HP:RT:RoomSelectChanged",function(a){$(".roomstable .urgency_message_x_people").toggleClass("g-hidden",a.totalSelectedRooms>0)
})
});
(function(){var d=window.jQuery;
var g=window.booking;
var c="YdVNNQADULNfQORYYFPDCUZRAOAcEUC";
var b;
function a(){var h=d(this);
h.siblings(".rt-lightbox-facilities").find(".g-hidden").removeClass("g-hidden");
h.remove();
g.track.custom_goal(c,1)
}function f(){b.on("click",a)
}function e(){b=d(".js-rt-lightbox-facilities-see-all");
if(!b.length){return
}f()
}g.ensureNamespaceExists(sNSExperiments);
g[sNSExperiments][c]={priority:9,init:e,initElse:d.noop}
})();
(function(){$(".shorten_desc .more_less_link").bind("click",function(a){a.preventDefault();
$(this).closest(".wrapper").addClass("opened")
});
$(".full_desc .more_less_link").bind("click",function(a){a.preventDefault();
$(this).closest(".wrapper").removeClass("opened")
})
})();
(function(b){var a=function(){B.eventEmitter.bind("tooltip.show",function(d,c){if($(c).is("."+b)){B.track.stage(b,1)
}})
};
B[sNSExperiments][b]={init:a,initElse:a}
})("YdAQbHGAXFPHSYeGIHIXT");
(function(){$(".pousada-faq-toggle").bind("click",".block_toggler",function(a){a.preventDefault();
$(a.target).next().toggle();
B.lightbox.rePosition()
})
})();
(function(a,d){var b="fEDSSJXOTdSYYaO";
var c=function(f){var g=a("#lp_hp_sticky_compset"),j,i,e,k,h=0;
if(!d.env.lp_hp_sticky_compset_track||(a("#cookie_warning").length&&a("#cookie_warning").is(":visible"))){return
}if(d.track.getVariant(b)!=2){f=true
}e=a(".room_loop_counter2:first");
if(!e.length){e=a(".room_loop_counter1:first");
k=true
}if(!e.length){e=a(".roomstable")
}if(!e.length){return
}else{i=e.offset().top;
if(k){i+=250
}i-=a(window).height()
}a(window).bind("scroll.lp_hp_sticky_compset",function(m){if(a(window).scrollTop()>i){l()
}});
a(document).bind("mousemove.sticky_compset",function(m){h=m.pageY
}).bind("mouseleave.sticky_compset",function(m){if(m.pageY<h&&typeof j=="undefined"){l()
}});
if(!f){g.find("[data-tab-link]").removeAttr("data-tab-link");
g.find(".close-button").bind("click",function(){j=false;
g.animate({bottom:-g.outerHeight()-15});
d.track.stage(b,3)
});
g.find("td").bind("click",function(n){n.preventDefault();
var m=a(this).data("sr-url")||a(this).find("a:first").attr("href");
window.open(m);
d.track.stage(b,2)
})
}function l(){if(!f&&typeof j=="undefined"){g.animate({bottom:0},600)
}d.track.stage(b,1);
a(window).unbind("scroll.lp_hp_sticky_compset");
a(document).unbind("mousemove.sticky_compset").unbind("mouseleave.sticky_compset");
j=true
}};
booking[sNSExperiments][b]={init:c,initElse:function(){c(true)
}}
})(jQuery,booking);
(function(a,d){var b="fEDeJZVKOESNOZZWeBbRAbERe";
var c=function(){var e=a(".roomstable"),f;
if(booking.env.lp_scroll_rooms_from_trivago&&e.length){f=e.offset().top;
a("html, body").animate({scrollTop:f},1500)
}};
booking[sNSExperiments][b]={init:c}
})(jQuery,booking);
(function(d,b){var a="fEFNeSafSbfZALOIBeYeLT";
function c(f){var e=d.env.b_action=="hotel"?965:995;
if(window.opener!=null&&d.env.b_partner_channel_id==14&&d.env.is_landing&&window.innerWidth<e&&screen.width>e){d.track.exp(a);
if(!f){window.resizeBy((e-window.innerWidth),0)
}}}d[sNSExperiments][a]={init:c,initElse:b.proxy(c,this,true)}
}(window.booking,window.jQuery));
(function(a,b){b.when({events:"ready",action:"hotel",condition:(b.env.b_back_button_url&&typeof window.history==="object"&&window.history.pushState&&window.history.length<2),experiment:"fEDSJTGRYbOFZSUGKTJVJePYbCMGKTJVRT",stage:1}).run(function(){var d=this.variant(),g=this.hash,f=window.location.href,c=d==1?f:b.env.b_back_button_url,e="lp_inbbh=1";
if(c.substr(-1)!=="&"){c+=c.indexOf("?")==-1?"?":"&"
}c+=e;
window.history.replaceState({},"",c);
window.history.pushState({},"",f);
window.onpopstate=function(h){if(window.location.href.indexOf(e)!=-1){b.track.stage(g,2);
setTimeout(function(){if(d==2){window.location=c
}else{if(d==1){window.history.go(-1)
}}},500)
}}
})
})(jQuery,booking);
(function(a,d){var b="fEDeJZVKOESEeCQRELT";
var c=function(){var e=a(".roomstable"),f;
if(booking.env.lp_scroll_room_table_hc&&e.length){f=e.offset().top;
a("html, body").animate({scrollTop:f},1500)
}};
booking[sNSExperiments][b]={init:c}
})(jQuery,booking);
booking[sNSStartup].lp_sh_hide_specific_search=(function(c,a){function b(){var d=this.name;
a(".lp-sh-hide-search").click(function(j){j.preventDefault();
j.stopPropagation();
var n=a(this).closest("li"),f=n.hasClass("lp-dest-search-history"),k=n.data("sh_id");
var l=a(".lp_sh_show_expand_extra_sh");
if(l.length){var m=a("#search_history_items_list");
var o=m.height();
var g=false;
var i=false;
if(l.length&&n.parent("#search_history_items_list").length&&l.find(".lp-search-history-list-item").length){if(!l.is(":visible")){c.track.custom_goal("fEWUPCbSLNXe",2);
m.height(o);
i=true
}g=true
}else{m.height("auto")
}}function h(){n.remove();
if(!a(".lp-search-history-list-item").length){a(".lp-sh-block").fadeOut()
}else{if(l.length){if(g){var e=l.find(".lp-search-history-list-item").first();
e.appendTo(m);
if(i){e.hide().fadeIn(1200)
}}if(!l.find(".lp-search-history-list-item").length){l.next(".lp_sh_show_expand_wrapper").fadeOut()
}}}}if(f){n.css({overflow:"hidden",border:"none"});
n.animate({opacity:0,height:"0px",padding:0,margin:0},100,h)
}else{n.fadeOut(300,h)
}a.ajax({url:"/hide_search_hist",data:{id:k}})
})
}return{init:function(){b();
if(c.env.b_run_sr_ajax){var d=c.require("searchresults/events");
d.on(d.UI_BLOCK_UPDATED,function(f){if(f.id==="search_history"){b()
}})
}}}
}(booking,jQuery));
(function(){B.when({events:"user_center_bar:init",condition:(B.env.b_has_hotel_history===1&&B.env.b_action==="hotel"),experiment:"fEDSFAHNXKeZKVUNHFAPTPWOGATNSeKdRe"}).run(a);
B.when({events:"user_center_bar:init",condition:(B.env.b_has_hotel_history===1&&B.env.b_action==="searchresults"),experiment:"fEWNEbWcXCeFIfNZWEbJeDIBLGeZTUIZKe"}).run(a);
function a(){var b=this.hash;
B.et.stage(b,1);
if(B.et.track(b)===2){$(".uc_viewed_hotels .popover_trigger").trigger("click")
}booking.eventEmitter.bind("uc_recently_viewed_opened",function(){B.et.customGoal(b,1)
});
booking.eventEmitter.bind("uc_recently_viewed_loaded",function(){B.et.customGoal(b,2)
})
}})();
booking[sNSExperiments]["eGBUEKdDWURLRXEYT"]=(function(b,a){return{init:function(){a(document).bind("keydown",function(c){if((c.ctrlKey||c.metaKey)&&c.keyCode===67){b.track.custom_goal("eGBUEKdDWURLRXEYT",1)
}})
},initElse:function(){}}
})(booking,jQuery);
booking[sNSExperiments]["eGBUaceGNKNMC"]=(function(c,b){function a(){b(".address .show_map").one("mouseenter",function(){c.track.exp("eGBUaceGNKNMC")
})
}return{init:a,initElse:a}
})(booking,jQuery);
(function(){var a=window.jQuery;
var d=window.booking;
function c(){if(d.hotel.Gallery&&d.hotel.Gallery.slick){b()
}else{emitter.on(d.hotel.Events.Gallery.INIT,b)
}}function b(){var h=d.hotel.Gallery.slick;
var f=a(".hp-gallery-slides");
var i=f.find(".hp-gallery__slide__map");
var g=i.find(".hp-gallery__map-item__label-container");
var e=a("body");
f.bind("beforeChange",function(k,j,m,l){if(i.data("slick-index")===l){g.css("visibility","visible");
e.addClass("gallery__map-item--active");
d.track.custom_goal("ebcBUTWWCQSFedScC",1);
j.slickPause()
}else{if(i.data("slick-index")===m){e.removeClass("gallery__map-item--active");
j.slickPlay()
}}})
}d.ensureNamespaceExists(sNSExperimentsLoad);
d[sNSExperimentsLoad]["ebcBUTWWCQSFedScC"]={init:c}
})();
booking[sNSStartupLoad].maps_hp_location_you_chose_wisely={init:function(){$(".suggestion_banner_close_location").click(function(a){a.preventDefault();
$(this).parents(".suggestion_banner_location").fadeOut("fast",function(){booking[sNSStartup].bookingSticker.update()
})
})
}};
booking[sNSExperiments]["TAFYNYeUKaPBJEUZSUTIPOOFUIEFGWe"]=((function(b,a){init=function(){var c=booking[sNSExperiments].large_hotel_photo_slider;
if(supportsVisibility){b.track.exp("TAFYNYeUKaPBJEUZSUTIPOOFUIEFGWe");
if(!isVisible()){c.stopSlider();
b.events.on("gallerySliderStarted",function(){if(!isVisible()){c.stopSlider()
}})
}onVisible(function(){c.startSlider()
});
onHidden(function(){c.stopSlider()
})
}},initElse=function(){if(supportsVisibility){b.track.exp("TAFYNYeUKaPBJEUZSUTIPOOFUIEFGWe")
}},visibilityEvent="",visibilityProp="",supportsVisibility=(function(){var f=["","webkit","moz","ms"];
var d=false;
for(var e=0,c=f.length;
e<c;
e++){var g=f[e],h=(g?(g+"H"):"h")+"idden";
if(document[h]!==void 0){d=true;
visibilityProp=h;
visibilityEvent=g+"visibilitychange";
break
}}return d
}()),isVisible=function(){if(visibilityProp===""){return true
}return !document[visibilityProp]
},onVisible=function(c){var d=function(){if(isVisible()){c()
}};
a(document).bind(visibilityEvent,d)
},onHidden=function(c){var d=function(){if(!isVisible()){c()
}};
a(document).bind(visibilityEvent,d)
};
return{init:init,initElse:initElse}
})(booking,jQuery));
(function(){var g=window.jQuery;
var c=window.booking;
var d="BUBOXBESFDESEeCRe";
var e,l,a;
function m(){l=g("#maxotel_rooms");
if(!c.env.b_availability_checked||!c.env.b_has_valid_dates||!l.hasClass("single_unit_room_table")){return
}e=c.track.getVariant(d);
f()
}function f(){if(e===1){l.find(".b_room_radiobutton, .b_room_checkbox").closest("td").bind("click",h)
}else{if(e===2){l.find("tbody tr").mouseenter(k);
l.find("tbody tr").mouseleave(j);
l.find("tbody td").not("#bookNow1").bind("click",h)
}}}function k(){g(this).addClass("single-unit-property-occupancy-over")
}function j(){g(this).removeClass("single-unit-property-occupancy-over")
}function h(q){var r,p,n,o;
o=g(this).parent();
r=o.find(".b_room_radiobutton, .b_room_checkbox");
if(!r.length){return
}p=b(r,g(q.target));
n=r.next("select");
if(p){i();
n.val(1);
o.addClass("single-unit-property-occupancy-selected")
}else{o.removeClass("single-unit-property-occupancy-selected");
n.val(0)
}n.trigger("change");
a=n
}function i(){if(a){a.val(0);
a.closest("tr").removeClass("single-unit-property-occupancy-selected")
}else{l.find(".b_room_selectbox").val(0)
}}function b(o,n){if(o.is(":checkbox")){if(!n.is(":checkbox")){o.prop("checked",!o.prop("checked"))
}}else{o.prop("checked",true)
}return o.prop("checked")
}c.ensureNamespaceExists(sNSExperiments);
c[sNSExperiments][d]={priority:9,init:m}
})();
booking[sNSExperiments]["BUcSPbfWHT"]={init:function(){var a={currency:B.env.b_selected_currency,lang:B.env.b_lang_for_url,label:B.env.b_label,hotel_id:B.env.b_hotel_id,nr_adults:B.env.b_occupancy.adults,visitor_country:B.env.b_ip_country,stype:B.env.b_site_type_id};
if(!$("#hp_minrates").length){return
}$.ajax({data:a,dataType:"JSON",type:"GET",url:"/monthly_minrates"}).done(function(b){if(b.length===0){return
}var c=$("#hp_minrates_content");
$("#hp_minrates").show();
c.html(B.jstmpl("cheapest_date_ranges").render({monthly_minrates:b,isPerNightPrice:true}))
})
}};
booking[sNSExperiments]["eDUfZZGbOCbIXXcffPYJOKe"]={init:function(){var b,k,i,l,h=false,c=false,j="eDUfZZGbOCbIXXcffPYJOKe",e=$(".pp_rt_currency_switcher__select");
function d(){b=$.cookie(j);
try{b=b?JSON.parse(b):""
}catch(m){}if(b){k=Object.keys(b)[0]||"";
if(k!==booking.env.b_hotel_id||b.changed!==1){$.cookie(j,"",{expires:1});
return true
}$.each(b[k],function(p,r){var o=r.split(":"),q=o[0],s=parseInt(o[1],10),n=parseInt(o[2],10);
if(!c&&s&&s>0){c=true;
booking.track.custom_goal(j,3)
}if(!h&&n&&n>0){h=true;
booking.track.custom_goal(j,4)
}setTimeout(function(){if(s){$("select.b_room_selectbox[data-block-id="+q+"]").val(s).change()
}if(n){$("select.bed_preference_select[name=bedPreference_"+q+"]").val(n).change()
}},1000)
});
b.changed=0;
$.cookie(j,JSON.stringify(b),{expires:1})
}}function g(){var o={},n=$("select.b_room_selectbox"),m=$("select.bed_preference_select");
o[booking.env.b_hotel_id]=[];
n.each(function(s,q){var r=$(q),p=r.val(),t;
t=r.data("block-id")+":"+p+":0";
o[booking.env.b_hotel_id].push(t)
});
m.each(function(s,q){var r=$(q),t=r.attr("name").split("_")[1],p=r.val(),u;
u=t+":0:"+p;
o[booking.env.b_hotel_id].push(u)
});
if(o[booking.env.b_hotel_id].length>0){o.changed=1;
$.cookie(j,JSON.stringify(o),{expires:1})
}}function a(){var o=0,n=1,m=$(".usp_tick_loading");
m.hide();
m.first().show();
if(l){clearInterval(l)
}l=setInterval(function(){o++;
n=(o%m.length)+1;
m.hide();
var p=m.filter("#overlay_usp_"+n);
p.show()
},2000)
}function f(){var o=$(".pp-hp-loading-overlay");
o.removeClass("hidden");
var m=0;
var n=o.find(".loading_check_animation")[0];
if(i){clearInterval(i)
}a();
i=setInterval(function(){m++;
var p=m%18;
p=p===0?1:p;
n.style.marginLeft="-"+(p*69)+"px"
},75)
}d();
e.change(function(){var n=e.val(),q=e.find("option[value="+n+"]"),m=booking.env.b_this_url,o=(m.indexOf("?")>-1)?";":"?",p=m+o+"selected_currency="+n+o+"changed_currency=1#availability";
g();
booking.track.custom_goal(j,1);
if(q.hasClass("hotel_currency")){booking.track.custom_goal(j,2)
}f();
setTimeout(function(){window.location=p
},100)
})
}};
booking[sNSExperiments]["eDUfZZGbEXdTDdKAPIHAdLVKAcCcEO"]=(function(d,b){var c="eDUfZZGbEXdTDdKAPIHAdLVKAcCcEO";
function a(){b(".room_table_conditions_tooltip.how_to_cancel_tooltip").one("mouseenter",function(){d.track.stage(c,1)
})
}return{init:a,initElse:a}
}(booking,$));
booking[sNSExperiments]["eDUfZZGbIJSWAcFIYbQCMEZGZdVT"]=(function(b,e){var h="eDUfZZGbIJSWAcFIYbQCMEZGZdVT",d=e("select.b_room_selectbox.roomHasPayLater"),i=e("select.b_room_selectbox:not(.roomHasPayLater)"),f=e("ul.listticker");
function c(){if(!((b.env.b_action==="hotel")&&b.env.b_has_valid_dates&&b.env.b_has_maxotel_rooms&&(d.length>0))){return true
}i.on("change",function(){var j=e(this),k=parseInt(j.val(),10);
if(k==0){d.change()
}});
d.on("change",function(){var j=e(this);
if(i.val()!="0"){return true
}if(j.val()>0){b.et.stage(h,1)
}})
}function a(){var j,k=booking.env,l=e.browser.msie&&e.browser.version==="8.0";
j=e.map(f.find("li"),function(m){var n=e(m);
return(l)?n.wrapInner("<span/>").find("span").width():n.width()
});
f.closest("td").css({"min-width":Math.max.apply(Math,j)});
k.call2action_interval=setInterval(function(){f.find("li:first-child").fadeOut("slow",function(){var m=e(this);
m;
f.append(m.hide().clone());
m.remove();
f.find("li:first-child").fadeIn("slow")
});
if(k.call2action_ticker_run>6){clearTimeout(k.call2action_interval)
}else{k.call2action_ticker_run+=1
}},7000)
}function g(){if(!((b.env.b_action==="hotel")&&b.env.b_has_valid_dates&&b.env.b_has_maxotel_rooms&&(d.length>0))){return true
}i.on("change",function(){var j=e(this),k=parseInt(j.val(),10);
if(k>0){var l=f.find(".hp_rt_pay_later_cta");
l.remove();
f.find("li:first-child").fadeIn("slow")
}else{d.change()
}});
d.on("change",function(){var k=e(this),m=parseInt(k.val(),10),n=f.find(".hp_rt_pay_later_cta");
if(i.val()!="0"){n.remove();
f.find("li:first-child").fadeIn("slow");
return true
}if(m>0){b.et.stage(h,1)
}if(n.length>0&&m===0){n.remove();
f.find("li:first-child").fadeIn("slow")
}else{if(n.length===0&&m>0){var j=b.env.call2action_ticker_run,l=b.env.call2action_interval;
if(l){clearInterval(l)
}f.find("li:visible").fadeOut("slow",function(){var o=b.jstmpl("pay_later_no_deposit_call2action").render();
f.prepend(o).fadeIn("slow",function(){if(j<6){a()
}})
})
}}})
}return{priority:1,init:g,initElse:c}
}(booking,jQuery));
(function(c){var b="BOefZPUMVBFUPeKHBeNZfPESHbfALbLdLae";
function a(){var f=$(".js--hp-scorecard-scoreword"),j=$(".js--hp-scorecard-scoreval"),e={word:f.html(),val:j.html()},d={word:c.jstmpl.translations("reviews_tab_cleanliness"),val:$("#js--hp-gallery-scorecard").data("cln-score")},h,g=c.track.getVariant(b),i=false;
c.events.on(c.hotel.Events.Gallery.AFTER_SLIDE_CHANGE,function(k){if(k&&k[2]){h=$(k[2]).data("room-id");
if(h){c.track.stage(b,1);
if(g){f.html(d.word);
j.html(d.val);
i=true
}}else{if(g){f.html(e.word);
j.html(e.val);
i=false
}}}});
$(".big_review_score_detailed").on("click",function(){if(i){c.track.custom_goal(b,1)
}})
}c[sNSExperiments][b]={init:a,initElse:a}
}(booking));
booking[sNSExperiments]["BOefZPUMVBFUZdfKQZGeIJfWALTKe"]={init:function(){B.events.on(B.hotel.Events.Gallery.AFTER_SLIDE_CHANGE,function(a){if(a&&a[2]&&$(a[2]).data("hs-tag")){B.track.stage("BOefZPUMVBFUZdfKQZGeIJfWALTKe",1)
}})
}};
booking[sNSExperiments]["BOefZPUMVBFUZAZJARGPeWBKC"]=(function(c){var b="BOefZPUMVBFUZAZJARGPeWBKC";
function a(g){var d=$(g.target),f=d.parents(".slick-slide").data("room-id");
if(d.hasClass("gallery-info__rn")){c.track.custom_goal(b,1)
}else{c.track.custom_goal(b,2)
}if(!f){return
}$room=$('a[name="RD'+f+'"]');
if(!$room.length){return
}pos_y=$room.offset().top-30;
$("html, body").animate({scrollTop:pos_y},1000)
}return{init:function(){if(c.track.getVariant(b)==2){$("#photo_wrapper").on("click",".gallery-info__rn,.gallery-info__fc",a)
}}}
})(booking);
booking[sNSExperiments]["BOefZZGbOdRSAEO"]=(function(b){var a="BOefZZGbOdRSAEO";
return{init:function(){if(b.env.b_action!=="hotel"){return
}var d=$(".js-price-load-on").map(function(){return $(this)
});
var c="resize scroll load";
function f(h,g){window.setTimeout(function(){h.addClass("js-price-load-off")
},g)
}var e=b.tools.functions.throttle(function(){if(d.length>0){for(var g=0;
g<d.length;
g++){if(b.tools.dom.isBlockVisibleInViewport(d[g])){f(d[g],Math.floor(Math.random()*250)+250);
d.splice(g,1);
g=g-1;
if(d.length===0){$(window).off(c,e)
}}}}},200);
e();
$(window).on(c,e)
}}
})(booking);
booking[sNSExperiments]["BOefZPRVCEOIJSRO"]=(function(b){var a="BOefZPRVCEOIJSRO";
return{init:function(){var f=$("#wrap-hotelpage-top"),c=$("#hp_hotel_name").text().trim(),e=false;
function d(){var g="";
if(typeof window.getSelection!="undefined"){g=window.getSelection().toString()
}else{if(typeof document.selection!="undefined"&&document.selection.type=="Text"){g=document.selection.createRange().text
}}return g
}f.on("mouseup.cpevent",function(){var g=$.trim(d());
if(e){return
}if(g&&c.search&&c.search(g)>-1){b.track.stage(a,1);
e=true;
f.off("mouseup.cpevent")
}})
}}
})(booking);
(function(b){var a="BOefZPUMVBFUZfFYdXaO";
b[sNSExperiments][a]={addTracking:function(){b.events.on(b.hotel.Events.Gallery.ON_CTA_SLIDE,function(){b.track.stage(a,1);
if(b.env.b_has_valid_dates){b.track.stage(a,2)
}else{b.track.stage(a,3)
}if(b.env.auth_level==0){b.track.stage(a,4)
}else{b.track.stage(a,5)
}})
},init:function(){this.addTracking()
},initElse:function(){this.addTracking()
}}
})(booking);
(function(b){var a="BOefZHXTeAJSWEfTTVISHT";
b[sNSExperiments][a]={addTracking:function(){var c=$("#js--lastViewedList"),d=c.find(".js--lastViewedItem"),e=c.find(".js--scarcity-hp-recent").length;
if(d.length<5||e==0){return
}b.tools.dom.watchIfBlockVisibleInViewport(d.last(),function(){b.track.stage(a,e+1)
})
},init:function(){this.addTracking()
},initElse:function(){this.addTracking()
}}
})(booking);
booking[sNSExperiments]["BOefZZKPTeQHafJeXFGBZDaXe"]={track:function(){var a="BOefZZKPTeQHafJeXFGBZDaXe",c,b;
if(B.env.b_action=="book"){b=B.require("bp/env");
c=b.get("numPeopleBooking")?b.get("numPeopleBooking"):b.get("numPeopleLooking")
}booking.eventEmitter.bind("growl:show",function(g,d){var f=$(".users-track-js");
if(B.env.b_action=="book"&&c&&!f.hasClass("users-number-wrapper")&&B.track.getVariant(a)){f.prepend('<span class="users-number-wrapper">'+c+"</span>").addClass("users-with-number")
}if(d.type.indexOf("users-track-js")!=-1){booking.track.stage(a,1);
if(B.env.b_action=="hotel"){booking.track.stage(a,2)
}if(B.env.b_action=="book"){booking.track.stage(a,3)
}}}).bind("growl:close",function(f,d){if(d.isGrowlClickedManually&&d.type.indexOf("users-track-js")!=-1){B.track.custom_goal(a,1)
}})
},init:function(){this.track()
},initElse:function(){this.track()
}};
(function(c){var b="BOefZZGbICYBdQadeOaQYKe";
function a(){$(".hp-rt-just-booked").add(".hp-rt-recently-booked").each(function(e,f){var d=$(f);
c.tools.dom.watchIfBlockVisibleInViewport(d,function(){c.track.stage(b,1);
if(d.hasClass("hp-rt-just-booked")){c.track.stage(b,2)
}else{if(d.hasClass("hp-rt-recently-booked")){c.track.stage(b,3)
}}if(c.track.getVariant(b)){d.addClass("fadeIn")
}})
})
}c[sNSExperiments][b]={init:a,initElse:a}
}(booking));
B.when({action:"hotel",condition:function(){return($.canShowNotice()&&!$.isNoticesDisabled()&&B.env.fe_potential_notices_exist)
},experiment:"BOefZZNFYVVPYO",stage:1}).run(function(){var f=$(".static-growl-container"),a=$(".static-growl-close");
if(f.length&&a.length){f.addClass("static-growl-container--show");
a.click(function(){f.slideUp(function(){$(this).remove("fast")
});
$.setCookieOnClose();
B.et.customGoal("BOefZZNFYVVPYO",1)
});
var c=B.google.growlTracker||"Growl",d="",b="",e="unknown";
d+="hp_static_growls_:";
d+="[onload]";
d+="-1-";
d+="("+e+")";
d+="{static_growl}";
d+="<"+e+">";
d+="#0#";
d+="$No$";
b+=B.env.b_action+"_";
b+=(parseInt(B.env.b_has_valid_dates_not_in_past,10)?"withDate":e);
B.google.trackEvent(c,d,b)
}});
B.when({events:"growl:growlClosedManually"}).run(function(){B.et.customGoal("BOefZZNFYVVPYO",1)
});
(function(e,b){var c="cPWbXaIRdNDUQWae";
var a=function(){var f=".revd_policy";
e.track.onView(f).stage(c,1)
};
var d=function(){if(e.env.b_action==="hotel"){window.setTimeout(function(){e.events.on("REVIEWS:fetched",a);
if(e.hotel.hashedTabs.getVisibleTab().is("#hotelblock4")){a()
}},250)
}};
e[sNSExperiments][c]={priority:9,init:d,initElse:d}
}(window.booking,window.jQuery));
(function(o,g){var c="cPWbOTdIcPFHLdaRO";
var l=g(".review_list_nav .language_filter");
var n=g(".language_filter_value_row",l);
var p=g(".language_more_cell",n);
var e=g(".language_more",p);
var b=g(".language_filter_lightbox_done");
var q=g(".language_filter_lightbox_content");
var a=g(".language_filter_value_row_first",q);
var r=g(".language_filter_checkbox",q);
var h=g("#reviewer_type_filter");
var w=o[sNSStartup].reviewList.filterByTypeAndLanguages;
var m=[o.env.defaultReviewsLanguage];
var d;
var k=function(C,A){var z=C.slice().sort();
var x=A.slice().sort();
if(z.length!==x.length){return false
}for(var y=0;
y<z.length;
y++){if(z[y]!==x[y]){return false
}}return true
};
var i=function(x){x.preventDefault();
var y=a.find("input").map(function(z,A){return g(A).is(":checked")
}).toArray();
g.each(y,function(z,A){g(n.find("input").get(z)).attr("checked",A)
});
j();
o[sNSStartup].lightbox.hide()
};
var v=function(x){x.preventDefault();
u();
o[sNSStartup].lightbox.show(q,{customWrapperClassName:"language_filter_lightbox"})
};
var f=function(x){m=g(x).filter(":checked").map(function(y,z){return g(z).val()
}).toArray()
};
var u=function(){r.each(function(y,x){var z=g(x);
if(m.indexOf(z.val())>=0){z.attr("checked","checked")
}else{z.removeAttr("checked")
}})
};
var j=function(x){d=m.slice();
if(!x){f(r)
}else{if(x.data&&x.data.languages&&x.data.languages==="fromPage"){f(g("input",n))
}}if(!k(d,m)||m.length!==0){w(h.val(),m)
}};
var t=function(){h.unbind("change");
h.bind("change",j);
e.bind("click",v);
b.bind("click",i);
l.delegate(".language_filter_checkbox","change",{languages:"fromPage"},j)
};
var s=function(){t()
};
o[sNSExperiments][c]={priority:9,init:s}
}(window.booking,window.jQuery));
(function(c,f){var e="cPWbVdBceEUVTZHT";
var d=c[sNSStartup].lightbox;
var g=function(){window.setTimeout(function(){c.track.onView(".tr_"+e).stage(e,2);
if(c.env.b_photo_pid&&(c.env.b_photo_pid==="404815"||c.env.b_photo_pid==="407031")){c.track.onView(".tr_"+e).stage(e,3)
}},250)
};
var a=function(m){var k=f(this);
var j=k.find("img").data("image");
var l=document.createElement("img");
l.onload=function(n){d.show(l,{customWrapperClassName:"review_photo_lightbox",positionAfterCallBack:function(){var o=parseInt(l.width,10)+48;
var p=parseInt(l.height,10)+48;
f(".modal-wrapper").css({width:o,height:p,left:Math.max(0,f(window).width()/2-o/2)})
}});
c.track.custom_goal(e,1)
};
l.src=j
};
var h=function(){f(".review_item_photo").bind("click",a)
};
var i=function(){if(c.env.b_action==="reviews_hotel"||c.env.b_action==="reviews_review"){g();
h()
}if(c.env.b_action==="hotel"){c.events.on("REVIEWS:fetched",function(){g();
h()
});
c.events.on("SEO_REVIEWS:fetched",function(){g();
h()
});
if(c.hotel.hashedTabs.getVisibleTab().is("#blockdisplay4")){window.setTimeout(function(){g();
h()
},250)
}}};
var b=function(){if(c.env.b_action==="reviews_hotel"||c.env.b_action==="reviews_review"){g()
}if(c.env.b_action==="hotel"){c.events.on("REVIEWS:fetched",g);
c.events.on("SEO_REVIEWS:fetched",g);
if(c.hotel&&c.hotel.hashedTabs&&c.hotel.hashedTabs.getVisibleTab().is("#blockdisplay4")){window.setTimeout(g,250)
}}};
c[sNSExperiments][e]={priority:9,init:i,initElse:b}
}(window.booking,window.jQuery));
(function(e,c){var d="cPWbTFZaPWBOfBAFVNaRe",b=c("#reviewer_type_filter");
trackingSelector="#review_list_score";
var a=function(){b.bind("change",function(f){e.track.exp(d)
})
};
e[sNSExperiments][d]={priority:9,init:a,initElse:a}
}(window.booking,window.jQuery));
(function(d,b){var a="VXSUaXeNBLFfFcEJTUBPVRO";
var c=function(){d.events.on("REVIEWS:fetched",function(){window.setTimeout(function(){b(".review_tab_sprite.review_sprite_flag").tooltip()
},250)
})
};
d[sNSExperiments][a]={priority:9,init:c}
}(window.booking,window.jQuery));
(function(e,b){var c="cPWbVdAeRFCUBQERMPFIPbBeKe";
var a=function(){var f=".tr_"+c;
e.track.onView(f).stage(c,1)
};
var d=function(){window.setTimeout(function(){e.events.on("REVIEWS:fetched",a);
e.events.on("SEO_REVIEWS:fetched",a);
if(e.hotel.hashedTabs.getVisibleTab().is("#hotelblock4")){a()
}},250)
};
e[sNSExperiments][c]={priority:9,init:d,initElse:d}
}(window.booking,window.jQuery));
(function(b,a){b[sNSExperiments]["cPWbBAFQJdWTNRCbWLQIO"]={priority:9,init:function(){var e=a(".review-score__container");
var d=false;
var c=a(".review-score__outer").data("photo-ids").replace(/\,$/,"").split(",");
var f=function(){var h=a(".slick-slide.slick-active");
if(!h){return
}var g=h.data("photoid");
if(!g){return
}g=String(g);
if(c.length&&a.inArray(g,c)!==-1&&!d){b.track.stage("cPWbBAFQJdWTNRCbWLQIO",2);
if(b.env.b_browser==="msie"&&b.env.b_browser_version<="8"){e.show()
}else{e.fadeIn()
}d=true
}else{if(b.env.b_browser==="msie"&&b.env.b_browser_version<="8"){e.hide()
}else{e.fadeOut()
}d=false
}};
b.events.on("hp:gallery_init",f);
b.events.on("hp:gallery_after_slide_change",f)
}}
}(window.booking,window.jQuery));
(function(e,b){var c="cPWbIUFZZZCOODdOFZBJFBfKe";
var a=function(){var f=".tr_"+c;
e.track.onView(f).stage(c,1)
};
var d=function(){window.setTimeout(function(){e.events.on("REVIEWS:fetched",a);
e.events.on("SEO_REVIEWS:fetched",a);
if(e.hotel.hashedTabs.getVisibleTab().is("#hotelblock4")){a()
}},250)
};
e[sNSExperiments][c]={priority:9,init:d,initElse:d}
}(window.booking,window.jQuery));
if($(".show_all_reviews_btn").length>0){(function(){$(".hotel_quick_links_item").delegate(".show_all_reviews_btn","click",function(){B.track.custom_goal("IZVZBKZYZSAccTXYaFWUC",1)
})
})()
}(function(){var c=window.jQuery;
var e=window.booking;
var a="bHVNYZOfFNUdJYDFLLT";
function d(){if(c("#price_highlight").length){var f=c("#price_highlight").outerHeight();
c(".js-room_link_to_rt").attr("data-scroll-offset",(f+3))
}}function b(){}e.ensureNamespaceExists(sNSExperiments);
e[sNSExperiments][a]={priority:9,init:d,initElse:b}
})();
B.when({action:"hotel",events:"click .js-room_link_to_rt",experiment:"bHVNYZOfFNUdJYcLcJUXe",stage:1});
B.when({action:"hotel",condition:$(".js-room_link_to_rt").length,experiment:"bHVNYZOfFNUdJYcLcJUXe"}).run(function(){$(".js-room_link_to_rt").click(function(){var a=parseInt($(this).attr("data-room-id"));
setTimeout(function(){B.hotel.roomTable.highlightRoom("RD"+a)
},500)
})
});
(function(a,b){a(document).ready(function(){a(".ge-iconfont-extended").mouseenter(function(){setTimeout(function(){b.track.stage("cQZJARGUJbWTaSAeMVNaRe",1)
},100)
})
})
})(jQuery,booking);
B.define("component/genius/ge-genius-room-selected",["component"],function(a){var c={};
var d=false;
function b(g){g.is_genius=g.$el.hasClass("b_room_block_is_genius_rate");
if(g.no_rooms=="0"){delete c[g.block_id]
}else{c[g.block_id]=g
}var h=0;
var f=0;
for(var e in c){c[e].is_genius&&h++;
f++
}if(h==1){return h==f
}return false
}return a.extend({init:function(){var e=B.track.getVariant("cQPZHSUeaKQHcGWC");
if(e===false){return
}B.events.on(B.hotel.Events.RT.ROOM_SELECTED,function(g){var h=$(".genius-discount-reinforcement-tooltip");
var f=b(g);
if(d==f){return
}if(f){B.track.stage("cQPZHSUeaKQHcGWC",1)
}if(e==1){h.css({opacity:f?0:1,display:"block"}).animate({opacity:f?1:0},60,"",function(){!f&&h.css("display","none")
})
}d=f
},this)
}})
});
booking[sNSStartupLoad].ge_hp_aspiring_banner={init:function(){$(".js_genius_hp_suggession_aspiring_close_button").click(function(a){a.preventDefault();
$(this).parents(".genius_hp_suggession_aspiring_banner").fadeOut("fast",function(){booking[sNSStartup].bookingSticker.update()
})
})
}};
$(".suspected_signin_for_discounts_close_button").click(function(a){a.preventDefault();
$(this).parents(".suspected_signin_for_discounts_holder").fadeOut("fast",function(){booking[sNSStartup].bookingSticker.update()
})
});
(function(d,b,a,c){d.hotel.hashedTabs.init();
c(d.hotel.rtLightbox.init)
})(B,window,document,jQuery);
(function(d){if(!d){return
}var b=d.track,a=[],c=function(){$("[data-track-onview]").each(function(){var h=$(this).data("track-onview").split(/[\s,,]/);
for(var k=0,j=h.length;
k<j;
k++){if(h[k]!==""){a.push({elem:this,exp:h[k]})
}}});
for(var f=0,e=a.length;
f<e;
f++){var g=a[f].exp;
if(g){b.onView(a[f].elem).exp(g)
}}};
$(c)
})(window.booking);
if(booking.env.enable_scripts_tracking){booking.env.scripts_tracking.hotel.run=true
};