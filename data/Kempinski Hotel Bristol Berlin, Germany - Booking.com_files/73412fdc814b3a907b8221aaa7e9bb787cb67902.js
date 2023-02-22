if("function"!=typeof booking.debug){booking.debug=function(){return new function(){this.log=this.debug=this.info=this.warn=this.error=this.assert=this.dir=this.table=this.profile=this.trace=this.time=this.timeEnd=function(){}
}
}
}booking.console=booking.debug("booking");
window.console=window.console||booking.console;
if(booking.env.enable_scripts_tracking){booking.env.scripts_tracking.jquery={loaded:!!window.jQuery,run:!!window.jQuery};
booking.env.scripts_tracking.main={loaded:true,run:false}
}B.tools={inherits:function(d,c,f){var e=function(){};
e.prototype=c.prototype;
d.superClass_=c.prototype;
d.prototype=new e();
d.prototype.constructor=d;
if(f){$.extend(d.prototype,f)
}},base:function(g,c,j){var e=arguments.callee.caller;
if(!e){throw Error("arguments.caller not defined.  tools.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C")
}if(e.superClass_){return e.superClass_.constructor.apply(g,Array.prototype.slice.call(arguments,1))
}var d=Array.prototype.slice.call(arguments,2);
var h=false;
for(var f=g.constructor;
f;
f=f.superClass_&&f.superClass_.constructor){if(f.prototype[c]===e){h=true
}else{if(h){return f.prototype[c].apply(g,d)
}}}if(g[c]===e){return g.constructor.prototype[c].apply(g,d)
}else{throw Error("tools.base called from a method of one name to a method of a different name")
}},addSingletonGetter:function(c){c.getInstance=function(){if(!c.__instance__){c.__instance__=new c()
}return c.__instance__
}
},abstractMethod:function(){throw Error("unimplemented abstract method")
},parseInt:function(c){return parseInt(c,10)
},string:{substitute:function(f,e){for(var c=1;
c<arguments.length;
c++){var d=String(arguments[c]).replace(/\$/g,"$$$$");
f=f.replace(/\%s/,d)
}return f
},htmlEncode:function(e){var d=$("<div />");
d.text(e);
var c=(d.html());
d=null;
return c
},htmlDecode:function(e){var c=$("<div />");
c.html(e);
var d=(c.text());
c=null;
return d
}},object:{clone:function(e){var d=$.type(e);
if(d==="object"||d==="array"){if(typeof e.clone==="function"){return e.clone()
}else{var f=(d==="array"?[]:{});
for(var c in e){if(e.hasOwnProperty(c)){f[c]=B.tools.object.clone(e[c])
}}return f
}}else{return e
}},keys:Object.keys,defaults:function(e,c){var d;
e=e||{};
c=c||{};
for(d in c){if(c.hasOwnProperty(d)){if(e[d]==null){e[d]=c[d]
}}}return e
},getByName:function(d,e){var f=d.split(".");
var g=e||window;
for(var c;
c=f.shift();
){if(g[c]!==null&&g[c]!==undefined){g=g[c]
}else{return null
}}return g
},pick:function(e,f){var d=[].slice.call(arguments,1),c={};
d.forEach(function(g){if(g in e){c[g]=e[g]
}});
return c
}},array:{toObject:function(d){var f={};
for(var e=0,c=d.length;
e<c;
e++){f[d[e]]=true
}return f
},indexOf:function(d,g,f){for(var e=f||0,c=d.length;
e<c;
e++){if(d[e]==g){return e
}}return -1
}},math:{getRandomInt:function(d,c){return(Math.round(Math.random()*(c-d))+d)
}},dom:{window:$(window),getBlockWidth:function(c){return(c.width())
},getBlockHeight:function(c){return(c.height())
},getBlockOffset:function(e,f){var d=(e.offset());
var c={left:0,top:0};
if(f){c=(f.offset())
}return{left:d.left-c.left,top:d.top-c.top}
},getBounds:function(g){var d=$(g);
var f=(d.offset());
var e=d.outerWidth();
var c=d.outerHeight();
return{left:f.left,right:f.left+e,top:f.top,bottom:f.top+c,width:e,height:c}
},boundsOverlap:function(d,c){return(d.left<c.right&&d.right>c.left&&d.top<c.bottom&&d.bottom>c.top)
},getWindowWidth:function(){return B.tools.dom.getBlockWidth(B.tools.dom.window)
},getWindowHeight:function(){return B.tools.dom.getBlockHeight(B.tools.dom.window)
},getWindowScrollLeft:function(){return(B.tools.dom.window.scrollLeft())
},getWindowScrollTop:function(){return(B.tools.dom.window.scrollTop())
},watchIfBlockVisibleInViewport:function(f,h,g,d){function c(){if(B.tools.dom.isBlockVisibleInViewport(f,g)){h();
if(!d){e()
}}}function e(){B.tools.dom.window.unbind("resize scroll",c)
}B.tools.dom.window.bind("resize scroll",c);
setTimeout(c,0);
return{forceCheck:c,stopWatch:e}
},isBlockVisibleInViewport:function(h,d){if(!h||h.length===0||!h.is(":visible")){return false
}var e=h.offset().top;
var c={top:e,bottom:e+h.innerHeight()};
var g=B.tools.dom.getWindowScrollTop();
var f={top:g,bottom:g+B.tools.dom.getWindowHeight()};
if(d){return(c.top>=f.top&&c.bottom<=f.bottom)
}else{return((c.top>=f.top&&c.top<=f.bottom)||(c.bottom>=f.top&&c.bottom<=f.bottom)||(c.top<f.top&&c.bottom>f.bottom))
}},popupCancel:function(c){window.open(c,"","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=400,height=350,left=200,top=200");
return false
}},css:{CSS_OPACITY_SUPPORT:("opacity" in document.body.style)},url:{parse:function(d){var c={};
if(typeof d!=="string"){return c
}d.split(/[;&]/g).forEach(function(f){var g=f.indexOf("="),e=f.substr(0,g);
if(c[e]===undefined){c[e]=f.substr(g+1)
}});
return c
},stringify:function(f,e,d){e=e||"&";
d=d||"=";
var c=[];
if(f){Object.keys(f).forEach(function(g){c.push(g+d+f[g])
})
}return c.join(e)
}},functions:{throttle:function(d,f,l){var c,h,m;
var j=null;
var g=0;
var k=l||{};
var e=function(){g=k.leading===false?0:+new Date();
j=null;
m=d.apply(c||{},h||[]);
c=h=null
};
return function(){var n=+new Date();
if(!g&&k.leading===false){g=n
}var o=f-(n-g);
c=this;
h=arguments;
if(o<=0){clearTimeout(j);
j=null;
g=n;
m=d.apply(c,h);
c=h=null
}else{if(!j&&k.trailing!==false){j=setTimeout(e,o)
}}return m
}
}},jsStaticUrl:function(c){return B.tools.getStaticHost(c)+c
},getStaticHost:function(d){if(!B.env.static_hostnames||!B.env.static_hostnames.length){return document.location.protocol+"//q.bstatic.com"
}else{if(B.env.static_hostnames.length===1||!d){return B.env.static_hostnames[0]
}else{var e=B.tools.getHashCode(d.toString());
var c=Math.abs(e)%B.env.static_hostnames.length;
return B.env.static_hostnames[c]
}}},getHashCode:function(g){var f=0,d,e,c;
if(g.length===0){return f
}for(d=0,c=g.length;
d<c;
d++){e=g.charCodeAt(d);
f=((f<<5)-f)+e;
f|=0
}return f
}};
B.tools.dom.Bounds;
if(typeof B.define!=="undefined"){B.define("tools",B.tools)
}
/*! https://mths.be/cssescape v0.2.1 by @mathias | MIT license */
;
(function(e){if(!e.CSS){e.CSS={}
}var d=e.CSS;
var c=function(f){this.message=f
};
c.prototype=new Error;
c.prototype.name="InvalidCharacterError";
if(!d.escape){d.escape=e.CSS_escape=function(m){var j=String(m);
var l=j.length;
var h=-1;
var k;
var f="";
var g=j.charCodeAt(0);
while(++h<l){k=j.charCodeAt(h);
if(k==0){throw new c("Invalid character: the input contains U+0000.")
}if((k>=1&&k<=31)||k==127||(h==0&&k>=48&&k<=57)||(h==1&&k>=48&&k<=57&&g==45)){f+="\\"+k.toString(16)+" ";
continue
}if(k>=128||k==45||k==95||k>=48&&k<=57||k>=65&&k<=90||k>=97&&k<=122){f+=j.charAt(h);
continue
}f+="\\"+j.charAt(h)
}return f
}
}else{e.CSS_escape=d.escape
}}(typeof global!="undefined"?global:this));
(function(f,d){function e(){var h="string";
var g=arguments;
if(typeof g[0]===h&&(!g[1]||typeof g[1]===h)){return e.get.apply(e,g)
}else{return e.define.apply(e,g)
}}d.extend(e,{define:function(){var j={},g;
var h=arguments;
j=typeof h[0]==="object"?h[0]:{name:h[0],handler:h[1]};
if(typeof j.name==="string"&&typeof j.handler==="function"){this._list[this._key(j)]=this.create(j)
}else{}return this
},get:function(g,h){h=h||"";
return this._list[this._key(g,h)]
},register:function(g,h){var j=this;
d(document.body).delegate("["+g+"]",h,k);
function k(l){var n=d(this).attr(g);
var m=j.get(n,h)||j.get(n);
if(m){m.run(j.params(this,g),l)
}}},create:function(g){var h=new this._onea();
d.extend(h,g);
return h
},params:function(k,l,j){if(typeof l==="string"){j=l;
l=undefined
}var h=(j||"data-command")+"-params";
if(typeof l==="object"){var g=[];
d.each(l,function(m,n){g.push(m+"="+encodeURIComponent(n))
});
d(k).attr(h,g.join(";"))
}else{return this._parse(d(k).attr(h))
}},_list:{},_onea:c,_key:function(g,h){var j=typeof g==="object"?g:{name:g,type:h};
return j.name+(j.type?" "+j.type:"")
},_parse:function(h){var g={};
if(h){d.each(h.split(";"),function(l,j){var k=j.split("=");
try{g[k.shift()]=decodeURIComponent(k.join("="))
}catch(m){}})
}return g
}});
d.each(["bind","unbind","one","trigger"],function(g,h){e[h]=function(){var j=d.makeArray(arguments);
j[0]="command:"+j[0];
return f.eventEmitter[h].apply(f.eventEmitter,j)
}
});
function c(){}c.prototype={name:"",type:"",run:function(){var g=d.makeArray(arguments);
g[0]=g[0]||{};
e.trigger.apply(e,[this.name].concat(g));
return this.handler.apply(this,g)
},handler:function(){}};
booking.command=e;
e.register("data-command","click")
})(window.booking,window.jQuery);
(function(e){var c="function",f="object",h="reject",d="fulfill",g=0,j=typeof module==f&&module.exports;
function k(){this._act=g;
this._cbs=[];
this._ebs=[]
}k.tick=function(l){j?process.nextTick(l):setTimeout(l,0)
};
k.prototype={_exec:function(m){var n=this._val,l=this._act;
k.tick(function(){var p,r,o;
while(p=m.shift()){r=p.pr;
o=p.cb;
if(typeof o==c){try{r.fulfill(o(n))
}catch(q){r.reject(q)
}}else{r[l](n)
}}})
},reject:function(m){var l=this;
if(l._act===g){l._val=m;
l._act=h;
l._exec(l._ebs)
}},fulfill:function(n){var q,m,l=this,p=1;
if(l._act===g){try{if(n===l){throw TypeError()
}m=n&&typeof n;
q=(m===c||m===f)&&n.then
}catch(o){l.reject(o);
return
}if(typeof q==c){try{q.call(n,function(r){p=p&&l.fulfill(r)
},function(t){p=p&&l.reject(t)
})
}catch(o){p=p&&l.reject(o)
}}else{l._val=n;
l._act=d;
l._exec(l._cbs)
}}},then:function(l,m){var n=this,o=new k();
if(n._act===g){n._cbs.push({cb:l,pr:o});
n._ebs.push({cb:m,pr:o})
}else{n._exec([{cb:n._act==h?m:l,pr:o}])
}return o
}};
if(j){module.exports=k
}else{e.p0=k
}})(booking);
booking.promise=function(){return new booking.p0()
};
booking.promise.when=function(f){var e,d,c;
e=f.length;
d=[];
c=booking.promise();
if(!e){c.fulfill([]);
return c
}f.forEach(function(j,g){var h=function(k){e--;
d[g]=k;
if(!e){c.fulfill(d)
}};
if(booking.promise.is(j)){j.then(h,function(k){c.reject(k)
})
}else{h(j)
}});
return c
};
booking.promise.is=function(c){return c&&typeof c.then=="function"
};
booking.p0.prototype.pipe=function(c){return !booking.promise.is(c)?this:this.then(function(d){c.fulfill(d)
},function(d){c.reject(d)
})
};
booking.p0.prototype.log=function(c){c=c||"";
var d=function(f,e){return function(g){if(window.console&&console.log){console.log([c,f].join(" "),g)
}if(e){var h=B.promise();
h.reject(g);
return h
}return g
}
};
return this.then(d("resolved - "),d("rejected - ",true))
};
booking.p0.prototype.finishChain=function(){this.then(null,function(c){if(c instanceof Error){setTimeout(function(){throw c
},0)
}})
};
var goog=goog||{};
goog.inherits=B.tools.inherits;
goog.base=B.tools.base;
goog.abstractMethod=B.tools.abstractMethod;
goog.addSingletonGetter=B.tools.addSingletonGetter;
goog.isBoolean=function(c){return(typeof c==="boolean")
};
goog.isNumber=function(c){return(typeof c==="number")
};
goog.isString=function(c){return(typeof c==="string")
};
goog.isObject=function(d){var c=typeof d;
return((c==="object"&&d!=null)||c==="function")
};
goog.isArray=function(c){return($.type(c)==="array")
};
goog.isFunction=function(c){return($.type(c)==="function")
};
function bookmark(d,g,c){if(window.sidebar&&window.sidebar.addPanel){window.sidebar.addPanel(g,d,"")
}else{if(window.external){try{window.external.AddToFavoritesBar(d,g)
}catch(f){window.external.AddFavorite(d,g)
}}else{if(window.opera&&window.print){c.title=g
}}}return false
}function addBookmark(d,c){if(window.sidebar){window.sidebar.addPanel(d,c,"")
}else{if(document.all){window.external.AddFavorite(c,d)
}else{alert("Sorry your browser doesn't support this function\nTo bookmark this page\nWindows users press ctrl + D\nMac users press cmd + D")
}}}function hideFrameContainer(d,h,e){if(document.getElementById){var j=document.getElementById(d);
var g=document.getElementById(h);
j.style.display="none";
document.getElementById("headline_newsletter").style.display="block";
document.getElementById("headline_createprofile").style.display="none"
}}function changeHeadline(){document.getElementById("headline_newsletter").style.display="none";
document.getElementById("headline_createprofile").style.display="block"
}function hideEl(c){if($.isArray(c)){$.each(c,function(){hideEl(this)
})
}$("#"+c).hide()
}function showEl(c){$("#"+c).show()
}function showFrameContainer(k,g,j,d,h,w,p,m,t){if(document.getElementById){var o=document.getElementById(k);
var q=document.getElementById(g);
var n=document.getElementById(j);
if(q.style.display=="block"){q.style.display="none";
return false
}if(n.src!=d){n.src=d
}q.style.visibility="hidden";
q.style.display="block";
var u=$(o).position()||{};
var l=u.left,r=u.top;
if(p){l+=p
}if(m){r+=m
}if(!h){h=q.offsetWidth
}var x=document.getElementById("bodyconstraint").offsetWidth;
if((l+h)>x){l=(x-h-40)
}q.style.left=l+"px";
q.style.top=r+"px";
q.style.visibility="visible";
return false
}else{window.open(d)
}}function sSc(d,c,e){if(document.getElementById){document.getElementById("rsc_"+d).innerHTML=e
}}function sSc3(c,d){$("li[id^="+c+"]").attr("style","display: none; ");
$("li[id^="+d+"]").removeAttr("style")
}function sSc2(f,e,g){if(document.getElementById){if(document.getElementById("rnr")){document.getElementById("rnr").innerHTML=f
}for(var d=-1;
d<10;
d++){var c=document.getElementById("rl"+d);
if(c){c.style.color="";
c.style.textDecoration="underline"
}}e.style.color="#003580";
e.style.textDecoration="none";
e.blur();
$("#gr_profile_chooser ul").removeClass().addClass(g);
$(".review_filter_sub").text($(e).find(".key").text());
if(g=="group"||g=="review_category_group_of_friends"){classname="group_big"
}else{if(g=="solo_traveller"){classname="solo_big"
}else{if(g=="family_with_young_children"||g=="review_category_family"){classname="youngchildren_big"
}else{if(g=="mature_couple"){classname="maturecouple_big"
}else{if(g=="family_with_older_children"){classname="oldchildren_big"
}else{if(g=="with_friends"){classname="withfriends_big"
}else{if(g=="young_couple"||g=="review_category_couple"){classname="youngcouple_big"
}else{classname="global_big"
}}}}}}}$(".review_user_type").attr("class","review_user_type type_"+classname)
}}if($.ajaxSetup){$.ajaxSetup({cache:false,beforeSend:function(k,f){k.setRequestHeader("X-Booking-Pageview-Id",booking.env.pageview_id);
k.setRequestHeader("X-Booking-AID",booking.env.aid);
k.setRequestHeader("X-Booking-Session-Id",booking.env.b_sid);
if(booking.env.b_site_type_id){k.setRequestHeader("X-Booking-SiteType-Id",booking.env.b_site_type_id)
}if(booking.env.b_partner_channel_id){k.setRequestHeader("X-Partner-Channel-Id",booking.env.b_partner_channel_id)
}if(booking.env.b_csrf_token){k.setRequestHeader("X-Booking-CSRF",booking.env.b_csrf_token)
}if(booking.env.b_lang_for_url){k.setRequestHeader("X-Booking-Language-Code",booking.env.b_lang_for_url)
}if(booking.env.b_extra_ajax_headers){for(var j in booking.env.b_extra_ajax_headers){k.setRequestHeader(j,booking.env.b_extra_ajax_headers[j])
}}if(f.url.substr(0,13)==="/autocomplete"){var g=[],e,c;
for(e in booking.env.amTracking){if(e.substr(0,1)==="e"&&booking.env.amTracking[e]===1){c=e.substr(1);
g.push(c,booking.track.getVariant(c))
}}if(g.length){k.setRequestHeader("X-Booking-Exp",g.join(","))
}}var d=$("#req_info");
if(d.size&&d.html()){k.setRequestHeader("X-Booking-Info",d.html())
}}})
}$("#signup_box").hide();
$(".userdataform").hide();
function ShowHideSignup(){$("#signup_box").animate({height:"toggle"},{duration:500});
return false
}$("#signup_box #signupForm").click(function(c){c.stopPropagation()
});
$("#signup_box .userdataform").click(function(c){c.stopPropagation()
});
$(function(){$(".newsletter_ajax_error").hide();
$('input#to[type="text"]').css({backgroundColor:"#FFFFFF"});
$('input#to[type="text"]').focus(function(){$(this).css({color:"#003580"});
if(this.value==this.defaultValue){this.value=""
}if(this.value!=this.defaultValue){this.select()
}});
$("input.text-input").blur(function(){$(this).css({backgroundColor:"#FFFFFF"})
});
$("div#newsletterform_form a.flashdeals_nosubscribe").click(function(){$("div#flashdealsbg_wrapper h2.flashdeals_header_one").hide();
$("div#flashdealsbg_wrapper h2.flashdeals_header_two").show();
$("div#flashdealsbg_wrapper h3.flashdeals_subheader_one").hide();
$("div#flashdealsbg_wrapper h3.flashdeals_subheader_two").show();
$("div#flashdealsbg_wrapper a.flashdeals_nosubscribe").hide();
$("div#flashdealsbg_wrapper a.flashdeals_gotobooking").show();
$("div#flashdealsbg_wrapper input.newsletter_button").hide();
$("div#flashdealsbg_wrapper input.newsletter_button_deals").show();
return false
})
});
(function(e,d){d=d||{};
var f=e.console||{};
f.warn=f.warn||function(){};
var c={_list:{},get:function(h){return c._list[h]
},set:function(h,j){var h=h||"";
var j=j||"";
if(typeof h==="string"){h=h.replace(/^\s+|\s+$/g,"")
}if(typeof j==="string"){j=j.replace(/^\s+|\s+$/g,"")
}if((h.length>0&&typeof h==="string")||typeof h!=="string"){if(typeof c._list[h]!=="undefined"){f.warn("Booking Strings: replacing string with id: "+h)
}c._list[h]=j
}else{f.warn("Booking Strings: trying to insert string with empty id")
}}};
var g=function(h,j){return c[typeof j!=="undefined"?"set":"get"](h,j)
};
d.strings=g;
d.strings.get=c.get;
d.strings.set=c.set;
d.tmpl=function(h,j){return h.replace(/{([^{}]*)}/g,function(l,k){var m=j[k];
return typeof m==="string"||typeof m==="number"?m:l
})
}
})(window,booking);
var getLocalStorage=(function(){var d=false;
try{if("localStorage" in window&&window.localStorage!==null){localStorage.setItem("booking_com",true);
if(localStorage.getItem("booking_com")){d=true
}}}catch(c){d=false
}if(booking.env){booking.env.b_has_local_storage=d
}}());
B.define("event-emitter",function(d,c,e){(function(){var n=Array.prototype.slice;
var g=(typeof setImmediate==="function");
var k=0;
function m(q,p,o){return function(){return q.apply(p,o)
}
}function l(o){o||(o={});
var p=this._events={events:{},listening:[],context:o.context,count:0,name:o.name||++k};
if(o.debug){p.debug=true;
p.last={time:0,eventCount:0}
}if(o.strict){p.strict=true;
p.strictKeys=o.events;
if(!o.events){throw new Error("No events defined for emitter "+p.name)
}}if(o.async){this.emitSync=this.emit;
this.emit=this.emitNext;
p.async=true
}}function h(r,t,p){var o=r._events;
if(o.strict&&o.strictKeys.hasOwnProperty(p)){return
}var q=new Error(t+"(): event '"+p+"' has not been registered for emitter "+o.name);
q.emitter=r;
throw q
}l.prototype.addListener=function(q,t,r){var o=this._events;
if(q==null){throw new Error("addListener(name, fn, context): name cant be "+q)
}if(o.strict){h(this,"addListener",q)
}var p=o.events[q]||(o.events[q]=[]);
p.push(r?{fn:t,context:r}:t);
return this
};
l.prototype.once=function(r,t){var p=this._events;
if(p.strict){h(this,"once",r)
}var q=this;
var u=false;
function o(){if(!u){u=true;
t.apply(this,arguments);
q.removeListener(r,o)
}}return this.addListener(r,o)
};
l.prototype.removeListener=function(u,x){var p=this._events;
if(p.strict){h(this,"removeListener",u)
}var r=this;
var q=this._events.events[u];
if(u==="*"){if(!x){p.events={}
}else{for(var o in p.events){if(p.events.hasOwnProperty(o)){r.removeListener(o,x)
}}}}else{if(x&&q){var t=n.call(q,0);
for(var w=0;
w<t.length;
w++){var p=p;
if(t[w]&&(t[w]===x||t[w].fn===x)){q.splice(w,1)
}}if(q.length===0){delete p.events[u]
}}else{delete p.events[u]
}}return this
};
l.prototype.emit=function(o){var u=this._events;
if(o==null){throw new Error("emit(name): name cant be "+o)
}if(u.strict){h(this,"emit",o)
}if(u.debug){this.tick()
}var r=u.events[o];
if(!r){return this
}r=n.call(r,0);
for(var t=0;
t<r.length;
t++){var y=r[t];
var p=y.context||u._context||this;
var x=y.fn||y;
var q=arguments.length;
switch(q){case 1:x.call(p);
break;
case 2:x.call(p,arguments[1]);
break;
case 3:x.call(p,arguments[1],arguments[2]);
break;
default:var w=new Array(q-1);
for(t=1;
t<q;
t++){w[t-1]=arguments[t]
}x.apply(p,w)
}}return this
};
l.prototype.emitNext=function(r){var o=this._events;
if(o.strict){h(this,"emitNext",r)
}var p=this,q=arguments;
var t=m(l.prototype.emit,p,q);
return g?setImmediate(t):setTimeout(t,0)
};
l.prototype.tick=function(){var o=this._events;
var p=+new Date;
var q=o.last;
o.count++;
if(p-q.time>5000){o.rate=Math.floor((o.count-q.count)/(p-q.time)/1000);
o.last={time:p,count:o.count}
}};
l.prototype.proxy=function(q,p){var o=this;
return function(){var r=n.call(arguments,0);
if(typeof p==="function"){r=p.apply(null,r)
}r.unshift(q);
o.emit.apply(o,r)
}
};
l.extend=function(r,o){l.call(r,o);
var q=l.prototype;
for(var p in q){if(!q.hasOwnProperty(p)){continue
}r[p]=q[p]
}return r
};
l.create=function(o){return new l(o)
};
var f={on:"addListener",off:"removeListener",trigger:"emit",one:"once"};
for(var j in f){if(!f.hasOwnProperty(j)){continue
}l.prototype[j]=l.prototype[f[j]]
}if(typeof e!=="undefined"&&e.exports){e.exports=l
}else{if(typeof define==="function"){define("Evy",function(){return l
})
}else{this.Evy=l
}}}).call(this)
});
B.define("events",function(d,c,f){var g=d("event-emitter");
var e=new g();
e.Emitter=g;
return e
});
B.define("jquery",function(){return jQuery
});
B.define("promise",function(d,c,e){if(typeof Promise=="undefined"){(function(n){var f=m.immediateFn||(typeof setImmediate==="function"&&setImmediate)||function(r){setTimeout(r,1)
};
function l(t,r){return function(){t.apply(r,arguments)
}
}var g=Array.isArray||function(r){return Object.prototype.toString.call(r)==="[object Array]"
};
function m(r){if(typeof this!=="object"){throw new TypeError("Promises must be constructed via new")
}if(typeof r!=="function"){throw new TypeError("not a function")
}this._state=null;
this._value=null;
this._deferreds=[];
p(r,l(o,this),l(q,this))
}function h(r){var t=this;
if(this._state===null){this._deferreds.push(r);
return
}f(function(){var u=t._state?r.onFulfilled:r.onRejected;
if(u===null){(t._state?r.resolve:r.reject)(t._value);
return
}var w;
try{w=u(t._value)
}catch(x){r.reject(x);
return
}r.resolve(w)
})
}function o(t){try{if(t===this){throw new TypeError("A promise cannot be resolved with itself.")
}if(t&&(typeof t==="object"||typeof t==="function")){var u=t.then;
if(typeof u==="function"){p(l(u,t),l(o,this),l(q,this));
return
}}this._state=true;
this._value=t;
j.call(this)
}catch(r){q.call(this,r)
}}function q(r){this._state=false;
this._value=r;
j.call(this)
}function j(){for(var t=0,r=this._deferreds.length;
t<r;
t++){h.call(this,this._deferreds[t])
}this._deferreds=null
}function k(w,r,u,t){this.onFulfilled=typeof w==="function"?w:null;
this.onRejected=typeof r==="function"?r:null;
this.resolve=u;
this.reject=t
}function p(w,x,t){var r=false;
try{w(function(y){if(r){return
}r=true;
x(y)
},function(y){if(r){return
}r=true;
t(y)
})
}catch(u){if(r){return
}r=true;
t(u)
}}m.prototype["catch"]=function(r){return this.then(null,r)
};
m.prototype.then=function(u,r){var t=this;
return new m(function(x,w){h.call(t,new k(u,r,x,w))
})
};
m.all=function(){var r=Array.prototype.slice.call(arguments.length===1&&g(arguments[0])?arguments[0]:arguments);
return new m(function(y,x){if(r.length===0){return y([])
}var w=r.length;
function u(A,D){try{if(D&&(typeof D==="object"||typeof D==="function")){var C=D.then;
if(typeof C==="function"){C.call(D,function(E){u(A,E)
},x);
return
}}r[A]=D;
if(--w===0){y(r)
}}catch(z){x(z)
}}for(var t=0;
t<r.length;
t++){u(t,r[t])
}})
};
m.resolve=function(r){if(r&&typeof r==="object"&&r.constructor===m){return r
}return new m(function(t){t(r)
})
};
m.reject=function(r){return new m(function(u,t){t(r)
})
};
m.race=function(r){return new m(function(x,w){for(var u=0,t=r.length;
u<t;
u++){r[u].then(x,w)
}})
};
if(typeof e!=="undefined"&&e.exports){e.exports=m
}else{if(!n.Promise){n.Promise=m
}}})(this)
}else{e.exports=Promise
}});
B.define("when/core",function(g,f,h){var j=g("promise");
var e={};
function d(n,m){var k=[];
var l=[];
Object.keys(n).map(function(o){var p=e[o];
if(!p||typeof p.handler!=="function"){throw new Error("B.when: "+o+" is not a valid condition")
}if(p.defer===true){l.push({key:o,value:n[o]})
}else{k.push(p.handler.call(null,n[o],m))
}m.conditions[o]=n[o]
});
return{resolved:k,deferred:l}
}function c(p){if(typeof p!=="object"){throw new Error("B.when: expecting an object as argument")
}var n={conditions:{}};
var m=d(p,n);
var o;
var k;
var l;
var q=j.all(m.resolved).then(function(t){if(!t.every(Boolean)){return l&&l.call(n)
}var r=m.deferred.map(function(u){var w=e[u.key];
return w.handler.call(null,u.value,n)
});
if(!r.every(Boolean)){return l&&l.call(n)
}if(typeof o==="function"){B.require(k||[],o.bind(n))
}});
q.run=function(t,r){o=t||function(){};
l=r
};
q.require=function(u,t,r){o=t;
k=u;
l=r
};
return q
}c.add=function(k,l){if(typeof k==="string"){e[k]={name:k,handler:l}
}else{var m=k;
e[m.name]=m
}};
h.exports=c
});
(function(){var c=false;
var f=false;
var d=B.require("events");
var e=B.require("jquery");
e(window).bind("load",function(){c=true;
d.trigger("load")
});
e(function(){f=true;
d.trigger("ready")
});
B.define("when/events",function(h,g,j){var l=h("promise");
var n=h("when/events-view");
function m(x){var o=typeof x==="string"?[x]:x;
var q=[];
var w;
var p;
var u;
var t;
var r;
for(t=0,u=o.length;
t<u;
++t){p=o[t];
w=false;
r=p.indexOf(" ");
if(r>-1){w=p.slice(r+1);
p=p.slice(0,r)
}q.push({evt:p,node:w})
}return q
}function k(p){var o=m(p);
var q;
return new l(function(r){function t(){r(true)
}while(o.length){q=o.pop();
switch(true){case q.evt==="view"&&!!q.node:n(q.node,t);
break;
case !!q.node:e(q.node).one(q.evt,t);
break;
case q.evt==="ready"&&f:t();
break;
case q.evt==="load"&&c:t();
break;
default:d.on(q.evt,t)
}}})
}j.exports={name:"events",handler:k}
})
}());
B.define("when/events-view",function(g,h,f){var j=g("jquery");
var k=100;
var m=20;
var n=[];
var e=j(window);
var d=false;
var p=false;
function c(t){var u=e.scrollTop();
var r=t[0];
var q=e.height();
var w=r.offset();
if(w&&(u+q>w.top+m)&&r.is(":visible")){t[1].call(t[2],r);
return false
}return true
}function o(){if(p){return
}p=true;
n=n.filter(c);
if(!n.length){e.unbind("scroll",o);
e.unbind("resize",o);
d=false
}setTimeout(function(){p=false
},k)
}function l(u,w,r){var q=j(u);
var t;
if(!q.length||typeof w!=="function"){return
}t=[j(u),w,r||this];
if(c(t)){n.push(t)
}if(!d&&n.length){e.bind("scroll",o);
e.bind("resize",o);
d=true
}}f.exports=l
});
B.define("when/click",function(d,c,e){var h=d("promise");
var g=d("jquery");
function f(j){return new h(function(k){g(function(){g(j).bind("click",k)
})
})
}e.exports={name:"click",handler:f}
});
B.define("when/hover",function(e,d,f){var j=e("promise");
var h=e("jquery");
function c(l){var k=l.match(/^(\d+)(\w+)?\s(.*)/);
return{delay:k?(k[2]==="s"?k[1]*1000:k[1]):0,selector:k?k[3]:l}
}function g(k){k=c(k);
return new j(function(l){h(k.selector).each(function(){var m=h(this);
var n=null;
m.bind("mouseenter.when-hover",function(){n=setTimeout(function(){m.unbind(".when-hover");
l(true)
},+k.delay)
});
m.bind("mouseleave.when-hover",function(){clearTimeout(n)
})
})
})
}f.exports={name:"hover",handler:g}
});
B.define("when/ready",function(d,c,f){var j=d("jquery");
var e=d("events");
var h=false;
j(function(){h=true;
e.trigger("when:ready")
});
function g(){return h||new Promise(function(k){e.on("when:ready",k)
})
}f.exports={name:"ready",handler:g}
});
B.define("when/load",function(e,d,g){var k=e("promise");
var f=e("events");
var j=e("jquery");
var c=document.readyState==="complete";
j(window).bind("load",function(){c=true;
f.trigger("when:load")
});
function h(){return c||new k(function(l){event.on("when:load",l)
})
}g.exports={name:"load",handler:h}
});
B.define("when/action",function(d,c,e){function f(g){return B.env.b_action===g
}e.exports={name:"action",handler:f}
});
B.define("when/condition",function(d,c,e){function f(g){if(typeof g==="function"){return g.call(null)
}else{return g
}}e.exports={name:"condition",handler:f}
});
B.define("when/experiment",function(d,c,e){var g=d("et");
function f(j,h){h.hash=j;
h.variant=function(){return g.track(j)
};
return g.track(j)>0
}e.exports={name:"experiment",handler:f,defer:true}
});
B.define("when/stage",function(d,c,e){var g=d("et");
function f(h,j){j.stage=h;
g.stage(j.hash,h);
return true
}e.exports={name:"stage",handler:f,defer:true}
});
B.define("when",function(e,d,f){var c=e("when/core");
["when/events","when/click","when/hover","when/ready","when/load","when/action","when/condition","when/experiment","when/stage"].forEach(function(g){c.add(e(g))
});
return c
});
B.when=B.require("when");
window.jQuery.cookie=function(d,l,o){if(typeof l!="undefined"){o=o||{};
if(l===null){l="";
o=$.extend({},o);
o.expires=-1
}var g="";
if(o.expires&&(typeof o.expires=="number"||o.expires.toUTCString)){var h;
if(typeof o.expires=="number"){h=new Date();
h.setTime(h.getTime()+(o.expires*24*60*60*1000))
}else{h=o.expires
}g="; expires="+h.toUTCString()
}var n=o.path?"; path="+(o.path):"";
var j=o.domain?"; domain="+(o.domain):"";
var c=o.secure?"; secure":"";
document.cookie=[d,"=",encodeURIComponent(l),g,n,j,c].join("")
}else{var f=null;
if(document.cookie&&document.cookie!=""){var m=document.cookie.split(";");
for(var k=0;
k<m.length;
k++){var e=jQuery.trim(m[k]);
if(e.substring(0,d.length+1)==(d+"=")){f=decodeURIComponent(e.substring(d.length+1));
break
}}}return f
}};
(function(d,c){d("request_info",[],function(){var f={},j,e="";
function h(){var m=e;
e=Object.keys(f).join(",");
if(j||(j=document.getElementById("req_info"))){if(j.innerHTML!==m){l(j.innerHTML);
e=Object.keys(f).join(",")
}j.innerHTML=e
}}function l(m){f=m.split(",").reduce(function(n,o){n[o]=true;
return n
},f)
}function k(m){f[m]=true
}function g(m){k(m);
if(typeof m==="string"){k(m);
h()
}else{if(m instanceof Array){m.forEach(k);
h()
}}}return{populate:g}
})
}(B.define,B.require));
booking.define("squeak",function squeak(){var f=10;
var g=false,c=[],e={};
function j(){if(c.length){setTimeout(d,1000)
}else{g=false
}}function h(k){if(!e.hasOwnProperty(k)){e[k]=0
}if(++e[k]>f){return
}c.push(k);
if(g){return
}g=true;
setTimeout(d,1000)
}function d(){$.ajax({url:"/squeak",type:"GET",success:j,error:j,data:{pid:booking.env.pageview_id,stid:booking.env.b_stid,sqk:"1:"+c.join(",")}});
c=[]
}return h
});
booking.squeak=booking.require("squeak");
(function(o,r,m){var e="experiments",j="startup",f="experiments_load",p="startup_load",n=r.env,t=n&&n.b_site_type_id||"",k=m(document),c="tnp_exp",q=n&&n.reportJSTracking||false,d=function(w){return typeof w==="function"
},u=function(x){var w="b_site_experiment_"+x;
var y=r.jst&&r.jst[x]>0;
return((w in n)&&+n[w]>0)||y
},h;
if(B.env.b_add_stages_to_request_info){var g=r.require("request_info")
}r.ensureNamespaceExists(e);
r.ensureNamespaceExists(j);
r.ensureNamespaceExists(f);
r.ensureNamespaceExists(p);
h=r[j];
h.init=function(F){var G=[],R=9,I,A,z,K,J,Q,P,D,H,y,O,N,E,w=F==="ready";
if(r.env.b_inc_filters){var C=r.env.b_inc_filters;
for(var S in C){var x=C[S];
for(var M in x){r.jst[M]=x[M]
}}}I=w?e:f;
z=r[I];
for(var L in z){if(r.b_disable_run){if(isNaN(n["b_site_experiment_"+L])&&(r.jst&&r.jst[L]===undefined)){continue
}}if(z[L]){G.push([z[L].priority||R,L,I,!u(L)])
}}A=w?j:p;
K=r[A];
for(J in K){y=K[J];
G.push([y.priority||R,J,A,false])
}if(G.length>0){G.sort();
for(N=0,E=G.length;
N<E;
N+=1){Q=G[N];
P=Q[1];
D=Q[2];
y=r[D][P];
m.extend(y,{strings:r.strings});
H=Q[3]?y.initElse:y.init;
y.ns="booking."+D;
y.name=P;
if(d(H)){setTimeout((function(T,V,U){return function(){O=T.execute(V,U);
if(O===true){U.init=U.initElse=null
}}
})(this,H,y),0)
}}}m(document).trigger(F+":finished")
};
h.execute=function(x,w){return x.call(w)
};
n.amTracking=[];
(function(){var A=20,C=Object.prototype.toString,J=Array.prototype.slice,G=m(o),P=m(document),y=function(U){var W=U.offset(),T=(typeof W.constructor==="function")?W.constructor:{name:"OtherConstructor"},V;
if(T.name==="ClientRect"){V=m(U.trackingSelector).eq(0).offset();
if(V){return V.top
}return false
}return W.top
},K=function(U){var T=y(U);
if(T===false){return false
}return((G.scrollTop()+G.height())>(T+A))&&U.is(":visible")
},H=function(T,V){try{G.trigger(T,V)
}catch(U){}},I={css:jQuery.fn.css,show:jQuery.fn.show,hide:jQuery.fn.hide,toggle:jQuery.fn.toggle},Q={show:/block|inline|list-item|inline-block/,hide:/none/};
jQuery.fn.css=function(V,U){var T=I.css.apply(this,J.apply(arguments));
if(this.selector){if(typeof U!=="undefined"&&V==="display"){H("ELEMENT_DISPLAY:"+this.selector,{elem:this,value:U})
}else{if(C.apply(V)==="[object Object]"&&"display" in V){H("ELEMENT_DISPLAY:"+this.selector,{elem:this,value:V.display})
}}}return T
};
m.each("show hide toggle".split(" "),function(T,U){jQuery.fn[U]=function(){var V=I[U].apply(this,J.apply(arguments));
if(this.selector){H("ELEMENT_DISPLAY:"+this.selector,{elem:this,value:this.css("display")})
}return V
}
});
var R=[],L=[],F=[],O=[],S,z,x,w,N,E={},D=(o.booking_extra&&booking_extra.b_inside_xy_searchresults&&"searchresultsxy")||n.b_action||"fixme";
w=function(){N=false
};
z=function(){var ad,W="",ae="",ab,V,T=[];
S=false;
if(N||r.sending_logo){S=setTimeout(z,50);
return
}if(R.length>0||L.length>0||F.length>0||O.length>0){N=true;
G.trigger("ClickTale:TrackDynamic",{experiments:R});
ad=L.length?";what="+L.join(","):"";
if(F.length){W=";custom=";
for(var Z=0,X=F.length;
Z<X;
Z++){W+=F[Z].join("|");
if(Z+1<X){W+=","
}}}if(O.length){ae=";stage=";
for(var Z=0,X=O.length;
Z<X;
Z++){ae+=O[Z].join("|");
if(Z+1<X){ae+=","
}}}if(B.env.b_add_stages_to_request_info){g.populate(R);
g.populate(O.map(function(af){return af.join("|")
}))
}else{V=m("#req_info").html()||"";
for(var aa=0,Y=R.length;
aa<Y;
aa++){if(V.indexOf(R[aa])===-1){T.push(R[aa])
}}T=T.join(",")
}var U="/js_tracking?ver=1"+ad+W+ae+";ref_action="+D+";sid="+n.b_sid+";aid="+n.b_aid+";lang="+n.b_lang_for_url+";new=1;pid="+n.pageview_id+";exps="+R.join(",")+";stype="+t;
if(n.b_js_track_over_ajax){try{m.ajax({url:U,async:true,type:"GET",complete:w})
}catch(ac){ab=new Image();
ab.onload=ab.onerror=w;
ab.src=U;
if(q){q=false;
o.onerror("3rd_js_tracking_report: "+U,U,1)
}}}else{ab=document.createElement("img");
ab.setAttribute("style","height:1px;width:1px;visibility:hidden;float:left;");
ab.onload=ab.onerror=w;
ab.src=U;
document.body.appendChild(ab)
}if(!B.env.b_add_stages_to_request_info){m("#req_info").html(V+","+T)
}if(B.devTools&&B.devTools.trackedExperimentsFilter){B.eventEmitter.trigger("TRACKING.js_exp_tracking_request",{exps:R,jsGoals:L,jsCustomGoals:F,jsStages:O})
}if(n.b_js_tracking_info_to_console&&o.console){if(R.length){o.console.info("JS exp tracking triggered: "+R.join(", "))
}if(L.length){o.console.info("JS goal tracking triggered: "+L.join(", "))
}if(F.length){o.console.info("JS custom goal tracking triggered: "+F.join(", "))
}if(O.length){o.console.info("JS stage tracking triggered: "+O.join(", "))
}}R=[];
L=[];
F=[];
O=[]
}};
x=function(V,U,Y){if(typeof V==="undefined"||V===null||n.b_browser==="bot"){return
}var ab=(m.isArray(V)?V:(V.split&&V.length?V.split(","):[])),aa,W,X,T=r.env.js_experiment_tracking||{},ac,ae,ad;
if(ab.length&&!isNaN(Y)){if(Y<1||Y>9){return
}ad=ab[0];
ae=r.jst&&typeof r.jst[ad]!=="undefined"&&r.jsdt&&!r.jsdt[ad];
var Z=ad+":stage"+Y;
if(ae&&typeof n.amTracking[Z]==="undefined"){V=true;
O.push([ad,Y]);
n.amTracking[Z]=1
}Y=undefined;
ab.length=0
}for(aa=0,W=ab.length;
aa<W;
aa+=1){ad=ab[aa];
if(r.checkExpTagHashed){r.checkExpTagHashed(ad)
}ae=r.jst&&typeof r.jst[ad]!=="undefined"&&r.jsdt&&!r.jsdt[ad];
ac=(isNaN(+ad)&&!!T?T[ad]:ad)||(ae?ad:false);
if((/^[0-9]+$/.test(ac)||ae)&&typeof n.amTracking["e"+ac]==="undefined"){R.push(ac);
n.amTracking["e"+ac]=1
}}if(U){if(!Y&&typeof n.amTracking["g"+U]==="undefined"){L.push(U);
n.amTracking["g"+U]=1
}if(Y&&(!E[U]||!E[U][Y])){F.push([U,Y]);
if(!E[U]){E[U]=[]
}E[U][Y]=1
}}if(V!==true&&!R.length){return false
}else{if(T&&T.njst&&/^[0-9]+$/.test(T.njst)&&typeof n.amTracking["e"+T.njst]==="undefined"){R.push(T.njst);
n.amTracking["e"+T.njst]=1
}}if(S){o.clearTimeout(S);
S=false
}S=o.setTimeout(z,50)
};
r.track={exp:x,stage:function(T,U){if(!T||+U<0||+U>9||isNaN(r.jst[T])||r.jsdt[T]){return true
}x(T,undefined,U);
return true
},goal:function(T){if(!T){return
}x(true,T)
},custom_goal:function(T,U){if(!T||+U<1||+U>5||isNaN(r.jst[T])||r.jsdt[T]){return
}x(true,T,U)
},getVariant:function(T){if(r.checkExpTagHashed){r.checkExpTagHashed(T)
}if(T&&r.jst&&!isNaN(r.jst[T])){return r.jst[T]
}return false
},nextPage:function(T){if(!T){return
}var U=m.cookie(c)||"";
if(U){U+=","
}m.cookie(c,U+T,{domain:r.env.b_domain_end,path:"/"})
},onView:function(T){var V=m(T).eq(0),W=this.exp,X=this.stage;
V.trackingSelector=T;
var U=function(){var Y=J.apply(arguments);
var aa=Y.shift();
var Z=m.proxy(function(){var ab;
if(K(V)){ab="ONVIEW:"+(C.apply(T)==="[object String]"?T:m(T).selector);
G.trigger(ab,{source:T});
aa.apply(r.track,this.args);
G.unbind("resize scroll",Z)
}},{args:Y});
if(V.length){if(V.css("display")==="none"){V.css({display:"block",visibility:"hidden"})
}G.bind("resize scroll",Z);
Z()
}};
return{exp:function(){var Y=J.apply(arguments);
Y.unshift(W);
U.apply(r.track,Y)
},stage:function(){var Y=J.apply(arguments);
Y.unshift(X);
U.apply(r.track,Y)
}}
},onNav:function(){return{exp:function(){},stage:function(){}}
}};
m(o).bind("load",function(){var T=m.cookie(c);
if(T){r.track.exp(T);
m.cookie(c,null,{domain:r.env.b_domain_end,path:"/"})
}});
m.each("blur change click dblclick mouseover mouseout".split(" "),function(U,T){var W=T.slice(0,1),V=T.replace(W,W.toUpperCase());
r.track[T]=r.track["on"+V]=function(X){var Y=m(X);
var Z=function(){var aa=J.apply(arguments);
var ac=aa.shift();
var ab=m.proxy(function(){ac.apply(r.track,this.args);
Y.unbind(T,ab)
},{args:aa});
Y.bind(T,ab)
};
return{exp:function(){var aa=J.apply(arguments);
aa.unshift(r.track.exp);
Z.apply(r.track,aa)
},stage:function(){var aa=J.apply(arguments);
aa.unshift(r.track.stage);
Z.apply(r.track,aa)
}}
};
r.track["live"+V]=function(X){var Y=function(){var Z=J.apply(arguments);
var ab=Z.shift();
var aa=m.proxy(function(){ab.apply(r.track,this.args);
P.undelegate(X,T,aa)
},{args:Z});
P.delegate(X,T,aa)
};
return{exp:function(){var Z=J.apply(arguments);
Z.unshift(r.track.exp);
Y.apply(r.track,Z)
},stage:function(){var Z=J.apply(arguments);
Z.unshift(r.track.stage);
Y.apply(r.track,Z)
}}
}
});
m.each("show hide".split(" "),function(U,T){r.track[T]=function(V){var X=m(V);
if(!X.selector){return{exp:function(){},stage:function(){}}
}var W=function(){var Y=J.apply(arguments);
var aa=Y.shift();
var Z=m.proxy(function(ab,ac){if(Q[T].test(ac.value)&&(ac.elem.selector===X.selector||(X.length===1&&ac.elem[0]===X[0]))){aa.apply(r.track,this.args);
G.unbind("ELEMENT_DISPLAY:"+X.selector,Z)
}},{args:Y});
G.bind("ELEMENT_DISPLAY:"+X.selector,Z)
};
return{exp:function(){var Y=J.apply(arguments);
Y.unshift(r.track.exp);
W.apply(r.track,Y)
},stage:function(){var Y=J.apply(arguments);
Y.unshift(r.track.stage);
W.apply(r.track,Y)
}}
}
});
m.each("blur change click dblclick mouseover mouseout".split(" "),function(V,U){var T="[data-track-on-"+U+"]",W=function(){r.track.exp.call(r.track,m(this).data("track-on-"+U)+"")
};
P.delegate(T,U,W)
});
var M={mouseenter:"hover",hover:"hover",click:"click"};
P.delegate("[data-google-track]","click hover mouseenter mouseleave",function(U){var T=(m(this).data("google-track")||"").split("/");
if(T[0].toLowerCase()===M[U.type]){r.google.trackEvent.apply(r.google,T)
}});
P.delegate("[data-ga-track]","click",function(U){var T=(m(this).data("ga-track")||"").split(":");
if(T[0].toLowerCase()===M[U.type]){r.google.trackPageview.apply(r.google,T)
}})
})();
n.trackExperiment=function(){r.track.exp.apply(this,Array.prototype.slice.apply(arguments))
};
m(function(){k.trigger("ready:before");
r[j].init("ready")
});
m(o).load(function(){r[j].init("load")
});
r.run=function(w){return{afterReady:function(x){this.onReady(function(){k.bind("ready:finished",x)
})
},onReady:function(x){r[j][w]={priority:9,init:x}
},onLoad:function(x){r[p][w]={priority:9,init:x}
}}
};
r.runExp=function(w){return{beforeReady:function(x){k.bind("ready:before",x)
},afterReady:function(x){this.onReady(function(){k.bind("ready:finished",x)
})
},onReady:function(x){r[e][w]={priority:9,init:x}
},afterLoad:function(x){this.onLoad(function(){k.bind("load:finished",x)
})
},onLoad:function(x){r[f][w]={priority:9,init:x}
}}
};
r.env.b_occupancy=(function l(){var D=r.env.b_group,x,A,z,C=0,y=0,w={adults:2,children:0,guests:2},E;
if(Object.prototype.toString.apply(D)!=="[object Array]"){return w
}A=D.length;
z=D[0];
E=A>1||(A===1&&(z.guests===1||z.guests>2||z.children>0));
if(!E){return w
}for(x=0;
x<A;
x+=1){z=D[x];
C+=z.guests;
y+=z.children
}return{adults:C,children:y,guests:C+y}
})();
r.eventEmitter=m(o);
o.sNSExperiments=e;
o.sNSStartup=j;
o.sNSExperimentsLoad=f;
o.sNSStartupLoad=p
})(this,this.booking,this.jQuery);
(function(k,n){var h=n.startup,m=Array.prototype.slice,d=Object.prototype.toString,e=function(){return +new Date+Math.random()+""
},j=function(p){var q,u,t,r=false,o;
if(p.length){for(q=0,u=p.length;
q<u;
q+=1){t=p[q];
if(t&&d.apply(t)==="[object Function]"){o=q;
r=t;
break
}}}return{handler:r,handlerIndex:o}
},f={},g=n.env;
function l(o){return(typeof o==="object"&&typeof o.nodeName==="string")
}var c=function(o){return function(){var u,r,w=Array.prototype.slice,t,p,q=w.apply(arguments);
if(this.length){u=j(q);
r=u.handler;
p=u.handlerIndex;
if(r){q[p]=function(x){if(typeof ClickTaleExec!=="function"||!l(this)){return r.apply(this,w.apply(arguments))
}if(!/submit/i.test(x.type)){if(this===k){ClickTaleExec('jQuery(window).trigger("'+x.type+'");');
return r.apply(this,w.apply(arguments))
}else{if(this===document){ClickTaleExec('jQuery(document).trigger("'+x.type+'");');
return r.apply(this,w.apply(arguments))
}else{if(this===document.documentElement){ClickTaleExec('jQuery(document.documentElement).trigger("'+x.type+'");');
return r.apply(this,w.apply(arguments))
}}}}var H=$(this),z=H.attr("id"),D=x.type,F,G,A=this.tagName.toLowerCase(),C,E,y;
if(z){E=$("#"+z).index(this);
y='jQuery("#'+z+'").eq('+E+")"
}else{F=H.closest('[id]:not([id=""])');
G=F.attr("id");
C=$("#"+G).index(F);
E=F.find(A).index(this);
y='jQuery("#'+G+'").eq('+C+').find("'+A+'").eq('+E+")"
}if(!/submit/i.test(x.type)){if(D==="change"){y+='.val("'+H.val()+'")'
}y+='.trigger("'+x.type+'")';
if(!H.hasClass("ClickTaleSensitive")){if(x.handleObj&&x.handleObj.guid&&H.data("events")&&H.data("events")[D]&&H.data("events")[D][0]&&H.data("events")[D][0]["guid"]){if(x.handleObj.guid===H.data("events")[D][0]["guid"]){ClickTaleExec(y)
}}}}return r.apply(this,w.apply(arguments))
};
t=r.bookingClicktaleEventHandlerID=e();
f[t]=q[p]
}}return o.apply(this,q)
}
};
if(!g.b_site_experiment_clicktale&&!/clicktale/.test(document.location.hostname)){return
}(function(){var o=$.fn.bind,p=$.fn.unbind,q=$.fn.live;
$.fn.bind=c(o);
$.fn.live=c(q);
$.fn.unbind=function(){var r=m.apply(arguments),u,t;
if(this.length){u=j(r);
t=u.handler.bookingClicktaleEventHandlerID;
if(t&&f[t]){r[u.handlerIndex]=f[t]
}}return p.apply(this,r)
}
})()
})(this,this.booking);
$(function(){if(!booking.env.b_site_experiment_clicktale&&!/clicktale/.test(document.location.hostname)){return
}ClickTaleEvent=(typeof ClickTaleEvent==="function")?ClickTaleEvent:function(){};
ClickTaleRegisterElementAction=(typeof ClickTaleRegisterElementAction==="function")?ClickTaleRegisterElementAction:function(){};
ClickTaleRegisterFormSubmitNotSent=(typeof ClickTaleRegisterFormSubmitNotSent==="function")?ClickTaleRegisterFormSubmitNotSent:function(){};
ClickTaleRegisterFormSubmitSent=(typeof ClickTaleRegisterFormSubmitSent==="function")?ClickTaleRegisterFormSubmitSent:function(){};
ClickTaleRegisterFormSubmitFailure=(typeof ClickTaleRegisterFormSubmitFailure==="function")?ClickTaleRegisterFormSubmitFailure:function(){};
ClickTaleRegisterFormSubmitSuccess=(typeof ClickTaleRegisterFormSubmitSuccess==="function")?ClickTaleRegisterFormSubmitSuccess:function(){};
var n=function(w){if("ClickTaleContext" in window&&l(ClickTaleContext)==="[object Object]"){try{ClickTaleContext.getAggregationContextAsync("1",w)
}catch(u){}}},h=$("[data-clicktale-signify]"),p=$(".clicktale-propagation, .bigbluebutton"),j=booking.env,c=j.b_occupancy||{},r={index:"#b_searchbox_errors",searchresults:".dateerrors",hotel:".dateerrors",city:".dateerrors",country:".dateerrors",book:".errorSimpleMsg",confirmation:""},e=$(".clicktalecatch"),t=r[j.b_action],o=$(t),q=j.b_action==="searchresults",d=$("#basiclayout").length,f=$(window),m={"0":"User not logged in","1":"User recognized","2":"User logged in"},l=function(u){return Object.prototype.toString.apply(u)
};
if(h.length){h.map(function(){var u=$(this),x=u.data("clicktale-signify").split("_"),w=x[0];
if(w==="hover"){w="mouseenter"
}u.bind(w,function(){ClickTaleEvent(x[1]+" "+w+"ed")
})
})
}p.click(function(u){ClickTaleRegisterElementAction("click",u)
});
if(j.rtl){ClickTaleEvent("Right To Left")
}if(j.b_action==="book"){ClickTaleEvent("Booking step "+j.b_stage);
if(j.b_run_t_clicktale){if(typeof j.bp_is_form_submit_error!="undefined"){ClickTaleEvent("Onload | Validation Error")
}if(typeof j.bs_room_num!="undefined"){ClickTaleEvent("Onload | Number of rooms "+j.bs_room_num)
}}if(typeof(j.bs_multi_room)!="undefined"){if(j.bs_multi_room){ClickTaleEvent("Booking multiple room booking")
}else{ClickTaleEvent("Booking single room booking")
}}$("#bp_travel_purpose_leasure,#bp_travel_purpose_business").bind("click",function(){if($(this).attr("id")==="bp_travel_purpose_leasure"){ClickTaleEvent("travel_purpose_bp_leisure")
}else{ClickTaleEvent("travel_purpose_bp_business")
}})
}if(/utm_medium/.test(document.location.search)){ClickTaleEvent("Source: email")
}if(j.b_locale){ClickTaleEvent("Language: "+j.b_locale)
}if(q){if(j.b_is_disambiguation){ClickTaleEvent("Disambiguation Page")
}else{if(d){ClickTaleEvent("Search results Page")
}else{ClickTaleEvent("Deal Finder Page")
}}}if(j.b_action==="myreservations"){ClickTaleEvent("My bookings Page")
}if(j.b_action==="company"){ClickTaleEvent("bbtool")
}ClickTaleEvent(m[j.auth_level]);
if(Array.isArray(B.env.bEHIcKZSSAKaebGcBHe)){B.env.bEHIcKZSSAKaebGcBHe.forEach(function(u){ClickTaleEvent(u)
})
}if(j.b_is_internal_ip){ClickTaleEvent("Internal IP")
}ClickTaleEvent(j.user_has_dates?"Dates chosen":"Dates not chosen");
ClickTaleEvent(c.adults+" adults");
ClickTaleEvent(c.children+" children");
ClickTaleEvent(((j.b_group&&$.isArray(j.b_group)&&j.b_group.length)?j.b_group.length:1)+" rooms selected");
if(j.b_action==="hotel"){ClickTaleEvent($(".maintr").length+" rooms in rooms table");
ClickTaleEvent(j.b_acc_type);
var k=j.b_availability_checked;
if(typeof k=="string"){var g={"0":"Hotel Without Availability","1":"Hotel With Availability"};
g[k]&&ClickTaleEvent(g[k])
}}if(booking.env&&booking.env.b_action!="book"){if(t&&o.length&&o.is(":visible")){ClickTaleRegisterFormSubmitFailure()
}else{ClickTaleRegisterFormSubmitSuccess()
}}f.bind("Form:NotValid",function(u,w){ClickTaleRegisterFormSubmitNotSent(w.form)
});
f.bind("Form:Valid",function(u,w){ClickTaleRegisterFormSubmitSent(w.form)
});
$(".ctaction").live("click",function(){var u=$(".ctaction").index(this);
ClickTaleExec('jQuery(".ctaction:eq('+u+')").click()')
});
$(".b-booker-type__input").bind("click",function(){if($(this).hasClass("b-booker-type__input_business-booker")){ClickTaleEvent("travel_purpose_business")
}else{ClickTaleEvent("travel_purpose_leisure")
}});
e.bind("input keydown blur",function(){(window.ClickTaleExec||function(){})('jQuery(".clicktalecatch:eq('+e.index(this)+')").val("'+$(this).val()+'");')
});
e.bind("auto_completed",function(){(window.ClickTaleExec||function(){})('jQuery(".clicktalecatch:eq('+e.index(this)+')").val("'+$(this).val()+'");')
});
n(function(u){$("#bOn").click()
});
f.bind("ClickTale:TrackDynamic",function(u,w){if(Array.isArray(w.experiments)){w.experiments.forEach(function(x){ClickTaleEvent("Experiment "+x+" variant "+B.track.getVariant(x))
})
}});
if(j.b_action){ClickTaleEvent("Action: "+j.b_action)
}});
if(booking.env.b_site_experiment_clicktale){function safeClickTaleRegisterFormSubmit(c){if(typeof ClickTaleRegisterFormSubmit==="function"){ClickTaleRegisterFormSubmit(c)
}}function safeClickTaleRegisterFormSubmitSent(c){if(typeof ClickTaleRegisterFormSubmitSent==="function"){ClickTaleRegisterFormSubmitSent(c)
}}function safeClickTaleRegisterFormSubmitNotSent(c){if(typeof ClickTaleRegisterFormSubmitNotSent==="function"){ClickTaleRegisterFormSubmitNotSent(c)
}}function safeClickTaleRegisterFormSubmitSuccess(c){if(typeof ClickTaleRegisterFormSubmitSuccess==="function"){ClickTaleRegisterFormSubmitSuccess(c)
}}function safeClickTaleRegisterFormSubmitFailure(c){if(typeof ClickTaleRegisterFormSubmitFailure==="function"){ClickTaleRegisterFormSubmitFailure(c)
}}if(booking.env.b_action==="book"){jQuery(document).ready(function(){jQuery("form").bind("submit.CT",function(){if(booking.env.b_run_t_clicktale){ClickTaleEvent("Action | Clicked submit")
}safeClickTaleRegisterFormSubmit(this);
safeClickTaleRegisterFormSubmitSent(this)
});
if($.trim($(".errorSimpleMsg").text())&&jQuery("#top_warning").length>0){safeClickTaleRegisterFormSubmitFailure()
}else{safeClickTaleRegisterFormSubmitSuccess()
}})
}}B.define("component",function(){function c(){}c.prototype.prepare=function(d){for(var e in d){if(d.hasOwnProperty(e)){this[e]=d[e]
}}};
c.prototype.init=function(){};
c.prototype.destroy=function(){};
c.prototype.render=function(){};
c.extend=function(e,h){var d=function(){};
var g=h?new h():new c();
for(var f in e){if(e.hasOwnProperty(f)){g[f]=e[f]
}}d.prototype=g;
d.extend=function(j){return c.extend.call(null,j,d)
};
return d
};
return c
});
B.define("component/legacy",function(h,g,j){var k={};
function f(m,l){l.legacy=true;
B.define("component/"+m,function(){return l
})
}function d(n,l,p){var o=B.require("component/"+n);
if(!o.legacy){throw new Error("Illegal legacy B.components.require of non-legacy component "+n+".")
}var m=l?l.data("component-instance-"+n):k[n];
if(p||m===undefined){m=typeof o=="function"?new o(B,$):library[n];
if(!p){if(l){l.data("component-instance-"+n,m)
}else{k[n]=m
}m.init&&m.init(l)
}}return m
}function e(l){var o;
for(var m=1,n=arguments.length;
m<n;
m++){o=d(arguments[m],undefined,true);
if(o.extend){o.extend(l)
}else{$.extend(l,o)
}}}function c(l,n){var m=d(n,undefined,true);
$.extend(l,m,{parent:m})
}g.register=function(l){l.components=l.components||{};
l.components.define=f;
l.components.extend=e;
l.components.inherit=c;
l.components.require=d
}
});
B.define("component/loader",function(h,j,f){var k=window.jQuery||h("jquery");
var n={};
var d={};
function m(q,p){var r=h("component/"+q),o=p.data("component-instance-"+q);
if(o===undefined){if(r.legacy){o=new r(B,k);
o.init&&o.init(p)
}else{o=new r;
o.prepare({el:p[0],$el:p});
o.init&&o.init()
}p.data("component-instance-"+q,o)
}return o
}function e(p,o){setTimeout(m.bind(null,p,o),4)
}function l(o,q,p){o=o||"default";
if(!n[o]){n[o]=[]
}n[o].push({name:q,$element:p})
}function g(o){if(this.length==0){throw new Error("No element found with selector, unable to look for component.")
}else{if(this.length!=1){throw new Error("Multiple elements found with selector, refusing to look for component.")
}}return m(o,this)
}function c(o){j.loadComponents(this,o);
return this
}j.loadComponents=function(x,z){var r,q,p,o,w,y,u,t;
x=x||k("html");
z=z||{};
var w=x.find("[data-component]");
if(x.is("[data-component]")){if(x.length>1){w=w.add(x)
}else{w=w.add(x.filter("[data-component]"))
}}for(r=0,p=w.length;
r<p;
r++){y=w.eq(r);
u=y.attr("data-component").split(/\s+/g);
t=z.defer||y.attr("data-component-defer");
if(t===""){t="default"
}for(q=0,o=u.length;
q<o;
q++){if(t&&!d[t]){l(t,u[q],y)
}else{e(u[q],y)
}}}};
j.loadDeferredComponents=function(o){var p;
o=o||"default";
if(!n[o]){return
}d[o]=true;
while(p=n[o].shift()){e(p.name,p.$element)
}};
j.registerJQuery=function(){k.fn.component=g;
k.fn.loadComponents=c
}
});
(function(f,e){var d=f.require("component/loader"),c=f.require("component/legacy");
d.registerJQuery();
c.register(f);
if(window.sNSStartup&&f[sNSStartup]){f[sNSStartup].bComponents={priority:100,init:d.loadComponents}
}else{e(d.loadComponents)
}})(booking,jQuery);
booking[sNSStartup].popups={priority:9,curPopup:null,tempTar:null,sizes:{s:{width:300,height:400},m:{width:400,height:400},l:{width:600,height:580},xl:{width:850,height:600}},init:function(){var c=this;
$(".popup_s, .popup_m, .popup_l, .popup_xl").click(function(){var f="l";
var d=$(this).attr("class").split(" ");
for(var e=0;
e<d.length;
e++){if(d[e].indexOf("popup_")>-1){f=d[e].split("_")[1]
}}c.tempTar=$(this).attr("href");
c.openPopup(f);
return false
})
},openPopup:function(d){var c=this;
if(this.curPopup){this.curPopup.close();
this.curPopup=null;
var d=d;
setTimeout(function(){c.openPopup(d)
},300)
}else{var e=this.sizes[d];
this.curPopup=window.open(this.tempTar,"","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width="+e.width+",height="+e.height+",left=200,top=200");
this.curPopup.focus();
this.tempTar=null
}}};
if(!B.env.b_track_component_new_et){B.define("component/track",function(e,c,f){var d=e("component");
f.exports=d.extend({init:function(){this.track=this.$el.attr("data-track")||"click";
this.customGoal=this.$el.attr("data-custom-goal");
this.stage=this.$el.attr("data-stage");
var g=this.$el.attr("data-hash");
if(g){this.addTracking(g)
}},addTracking:function(g){switch(this.track){case"click":case"mouseenter":case"mouseleave":case"focus":case"keyup":case"keydown":case"change":case"submit":this.$el.bind(this.track,function(){if(this.customGoal){B.track.custom_goal(g,this.customGoal)
}else{if(this.stage){B.track.stage&&B.track.stage(g,this.stage)
}else{B.track.exp(g)
}}}.bind(this));
break;
case"view":if(B.experiment&&B.experiment.trackOnView){if(this.customGoal){g=g+"__"+this.customGoal
}else{if(this.stage){g=g+":"+this.stage
}}B.experiment.trackOnView(g,this.$el)
}else{if(this.customGoal||this.stage){B.tools.dom.watchIfBlockVisibleInViewport(this.$el,function(){if(this.customGoal){B.track.custom_goal(g,this.customGoal)
}else{B.track.stage&&B.track.stage(g,this.stage)
}}.bind(this))
}else{B.track.onView(this.$el).exp(g)
}}break
}}})
})
}else{B.define("component/track",function(e,c,f){var d=e("component");
var g=e("et");
f.exports=d.extend({init:function(){var l=this.$el.attr("data-hash");
var k=this.$el.attr("data-track")||"click";
var j=this.$el.attr("data-custom-goal");
var h=this.$el.attr("data-stage");
if(!l){return
}if(j){g.on(k,this.$el).customGoal(l,j)
}else{if(h){g.on(k,this.$el).stage(l,h)
}else{g.on(k,this.$el).track(l)
}}}})
})
}booking.components.define("sh",function(h,e){var d="SH",g=e(window);
function f(j){j.map(function(k){h.eventEmitter.triggerHandler(d+":"+k)
})
}function c(j){return(g.scrollTop()+g.height())>j
}this.init=function(j){var l=j.offset().top;
var k=function(){if(c(l)){f(["seen"]);
g.unbind("scroll",k)
}};
g.bind("scroll",k);
j.delegate(".lp-search-history-list-item","click",function(m){var p=e(this),o=p.find(".lp-search-history-list-item-link");
if(!o.length){return
}var n=p.get(0).className.match(/sh-timestamp[^ \n]*/g)||[];
n.push("clicked");
f(n)
});
j.find(".lp-sh-hide-search").bind("click",function(m){f(["removed"])
});
k()
}
});
B.define("component/company/ga",function(f,d,g){var e=f("component");
var c=f("utils");
g.exports=e.extend({init:function(){this.options=c.nodeData(this.$el);
if(this.options.trackEvents){this.$el.delegate("[data-track-event]",this.options.trackEvents,this.handleDOMEvent.bind(this))
}if(this.options.trackOninit){this.track(this.split(this.options.trackOninit))
}if(this.options.trackOnviewEvents){this.addOnViewElements(this.$el)
}},addOnViewElements:function(j){var h=B.google[this.options.tracker];
j.find("[data-track-event-onview]").each(function(l,m){var k=$(m);
B.tools.dom.watchIfBlockVisibleInViewport(k,function(){var n=this.split(k.data("track-event-onview"));
this.track.call(this,[h].concat(n))
}.bind(this))
}.bind(this))
},handleDOMEvent:function(k){var j=B.google[this.options.tracker];
if(!j){throw new Error("Tracker is not defined: "+this.options.tracker)
}var h=($(k.currentTarget).data("track-event")||"").split(/\s*\/\s*/);
if(k.type.toLowerCase()===h[0].toLowerCase()){this.track.call(this,[j].concat(h.slice(1)))
}},split:function(h){return(h||"").split(/\s*\/\s*/)
},track:function(h){B.google.trackEvent.apply(B.google,h)
}})
});
B.components.define("display-settings",function(r,g){var z="dsp",q,o,u,e,k,f=0,n=0,x=false,p=g(window);
var t="ANdSSFBVPeNUC";
var y={defaults:{mode:{light:0}}};
function w(){var A=g(this);
c(data.settings,data.name,+A.is(":checked"));
g("html")[(A.is(":checked")?"addClass":"removeClass")]("ds--"+A.data("settings")+"-"+A.data("name"))
}function m(){var C=g(this),A=C.data();
if(C.is(":checked")){c(A.settings,A.name,+A.value);
g("html")[(A.value?"addClass":"removeClass")]("ds--"+A.settings+"-"+A.name)
}}function c(D,A,C){y[D][A]=C;
l()
}function d(){return g.cookie?JSON.parse(g.cookie(z)):{}
}function l(){g.cookie&&g.cookie(z,JSON.stringify(y),{expires:1,path:"/",domain:r.env.b_domain_end})
}function j(){var A=g("html");
if(y.mode.light===1){A.addClass("ds--mode-light");
q.find('[data-name="light"][data-value="1"]').attr("checked","checked");
r.track.stage(t,3)
}}function h(A){if(A.data("open")==1){A.hide().data("open",0)
}else{A.show().data("open",1)
}}this.init=function(A,C){var F;
q=A;
o=q.find(".display-settings--panel-head");
u=q.find(".ds-loader");
e=q.find(".ds-trigger--language");
k=q.find(".ds-trigger--currency");
n=q.outerHeight()-o.outerHeight();
g.extend(y,y.defaults,C||{},d());
j();
var D=function(){x=true;
q.unbind("mouseenter",D);
clearTimeout(F)
};
var E=function(){!x&&close();
clearTimeout(F)
};
q.bind("mouseenter",D);
F=setTimeout(E,2000);
k.bind("click",function(){var G=q.find("#current_currency_foldout");
h(G);
r.track.custom_goal(t,3)
});
e.bind("click",function(){var G=q.find("#current_language_foldout");
h(G)
});
u.bind("change",function(H){if(H.target.type==="radio"&&H.target.checked&&/^[a-z0-9_-]+$/i.test(H.target.name)&&/^[a-z0-9_-]+$/i.test(H.target.value)){if(H.target.name=="ds_site_mode"){var K=g(H.target).data();
console.log(K);
console.log("------");
c(K.settings,K.name,+K.value);
r.track.custom_goal(t,1);
r.track.stage(t,2)
}else{if(H.target.name=="sb_travel_purpose"){r.track.custom_goal(t,2)
}}var I=g(H.target).parents(".ds-loader");
var L=r.tools.jsStaticUrl("/static/img/map-loader.gif");
var G='<span class="ds-loading"><img src="'+L+'" /></span>';
I.append(G);
var J=new RegExp("\\b("+H.target.name+"=).*?(&|$)");
if(r.env.b_this_url.search(J)>=0){r.env.b_this_url=r.env.b_this_url.replace(J,"$1"+encodeURIComponent(H.target.value)+"$2");
window.location.href=r.env.b_url_start+r.env.b_this_url
}else{window.location.href=r.env.b_url_start+r.env.b_this_url+r.env.b_query_params_delimiter+encodeURIComponent(H.target.name)+"="+encodeURIComponent(H.target.value)
}}})
};
this.settings=y
});
B.define("user-left-client",function(e,d,f){var g=e("user-left-tab");
var c=e("user-left-store");
var j=e("utils/simple-unique-id");
var h="lastSeen";
f.exports={enabled:c.enabled,onHideTab:function(k){c.set(h,(new Date()).getTime())
},onShowTab:function(k){c.set(h,0)
},addEventListeners:function(){this._onShowTab=this.onShowTab.bind(this);
this._onHideTab=this.onHideTab.bind(this);
g.addListener("show",this._onShowTab);
g.addListener("hide",this._onHideTab)
},removeEventListeners:function(){this._onShowTab&&g.removeListener("show",this._onShowTab);
this._onHideTab&&g.removeListener("hide",this._onHideTab)
},register:function(k){this.tabId=k+"_"+j();
this.addEventListeners()
}}
});
B.define("user-left-master",function(e,h,c){var f=e("event-emitter");
var d=e("user-left-tab");
var m=e("user-left-store");
var j=e("utils/simple-unique-id");
var k="lastSeen";
var g=booking.env.bp_has_left_threshold?booking.env.bp_has_left_threshold:7;
var n=1000;
var l="(1) ";
c.exports=f.extend({enabled:m.enabled,didUserLeft:function(){if(this.halt){return
}if(!this.checkSessionMarker()){this.stopCounting();
this.removeEventListeners()
}var p=parseInt(m.get(k),10);
if(!p){return
}var q=new Date().getTime();
var o=(q-p)/1000;
if(o>=1){B.track.stage("BOebKPJTDfNFbYOdQZQcC",2)
}if(o>=g){this.stopCounting();
this.showNotification()
}},removeNotification:function(){this.originalFavicon&&this.changeFavicon(this.originalFavicon);
document.title=this.originalTitle
},changeFavicon:function(o){if(this.$favicon){this.$favicon.attr("href",o)
}},setNotifyFavicon:function(o){this.$favicon=$('link[rel="shortcut icon"]').first();
if(this.$favicon.length){this.originalFavicon=this.$favicon.attr("href");
this.notifyFavicon=o
}},setNotificationStatus:function(o){this.notificationStatus=(o===false)?false:true
},showNotification:function(){this.notified=true;
if(this.notificationStatus!==false){this.notifyFavicon&&this.changeFavicon(this.notifyFavicon);
document.title=l+document.title
}B.track.stage("BOeaUDVeMDZae",2)
},startCounting:function(){if(this.notified){return
}B.track.stage("BOebKPJTDfNFbYOdQZQcC",1);
B.track.stage("BOeaUDVeMDZae",1);
this.halt=false;
this.counterId=setInterval(this.didUserLeft.bind(this),n)
},stopCounting:function(){this.halt=true;
clearInterval(this.counterId)
},onShowTab:function(o){this.stopCounting();
m.set(k,0);
if(this.notified&&!this.cameBack){this.cameBack=true;
this.removeEventListeners();
this.removeNotification();
this.trigger("back")
}},onHideTab:function(o){m.set(k,(new Date()).getTime());
this.startCounting()
},addEventListeners:function(){this._onShowTab=this.onShowTab.bind(this);
this._onHideTab=this.onHideTab.bind(this);
d.addListener("show",this._onShowTab);
d.addListener("hide",this._onHideTab)
},removeEventListeners:function(){this._onShowTab&&d.removeListener("show",this._onShowTab);
this._onHideTab&&d.removeListener("hide",this._onHideTab)
},setSessionMarker:function(){if(!booking.browserStorageHandler){return
}booking.browserStorageHandler.addPermanentValue(this.sessionMarkerKey,this.tabId,false)
},checkSessionMarker:function(){if(this.tabId!=booking.browserStorageHandler.getPermanentValue(this.sessionMarkerKey,false)){return false
}return true
},register:function(p,o){this.originalTitle=document.title;
this.tabId=p+"_"+j();
this.sessionMarkerKey=o;
this.setSessionMarker();
m.set(k,0);
this.addEventListeners()
}})
});
B.define("user-left-store",function(d,c,e){e.exports={enabled:1,encode:function(f){return f
},decode:function(f){return f
},get:function(f){return this.decode($.cookie(f))
},set:function(f,g){return $.cookie(f,this.encode(g),{expires:null,path:"/",domain:"booking.com"})
}}
});
B.define("user-left-tab",function(e,d,g){var f=e("window-visibilitychange");
var h=e("event-emitter");
var c=h.extend({init:function(){if(!this.didInit){$(window).focus(this.show.bind(this));
$(window).blur(this.hide.bind(this));
$(window).bind("load",this.onLoad.bind(this));
f.on("visibilitychange",this.visibilityChange.bind(this));
this.didInit=true
}},visibilityChange:function(j){if(f.hidden){this.emit("hide",j)
}else{this.emit("show",j)
}},onLoad:function(j){if(!f.hidden){this.show(j)
}},show:function(j){this.emit("show",j)
},hide:function(j){this.emit("hide",j)
}});
c.addListener=c.on=function(){c.init();
h.prototype.addListener.apply(c,arguments)
};
g.exports=c
});
(function(c,d){if(!d.track.getVariant("cQZJARGUJbWTaSAeMVNaRe")&&!d.track.getVariant("YPNOOBPVOaDC")&&!d.track.getVariant("VOGPeYSEDKBRUDKe")){return
}d.define("core/fly-content-tooltip/fly-content-tooltip",function(f,e,g){g.exports=(function(){var k="data-content-tooltip",m=".js-fly-content-tooltip[data-content-tooltip]",h="fly-content-tooltip--wrap",j=c.fly.tooltip.extend({defaults:{baseClass:"fly-dropdown",extraClass:"fly-content-tooltip",hideClass:"fly-dropdown_hidden",showDelay:100,hideDelay:100,arrowSize:5,content:function(n){n(l(this.handle().attr(k)))
}},timeout:null});
function l(n){return'<div class="'+h+'">'+n+"</div>"
}return{flyContentTooltip:j,init:function(){j.delegate(m)
}}
})()
});
d.require(["require"],function(e){e("core/fly-content-tooltip/fly-content-tooltip").init()
})
})(jQuery,booking);
B.define("component/dropdown-onload-shower",function(e,c,f){var d=e("component");
f.exports=d.extend({init:function(){if(this.isDisabled()){return
}var g=$.fly.dropdown.create(this.$el,{content:this.getContent(),position:this.getPosition(),extraClass:"fly-dropdown--onload-shower"});
g.bind(g.events.rootready,function(){g.root().delegate("[data-command]","click",function(){setTimeout(g.hide.bind(g),0)
});
g.bind(g.events.hide,g._destroy.bind(g))
});
setTimeout(function(){g.show()
},+this.$el.attr("data-component-delay")||0)
},isDisabled:function(){var g=this.$el.attr("data-component-show-once-key");
if(g){if($.cookie(g)){return true
}else{$.cookie(g,1)
}}},getPosition:function(){return this.$el.attr("data-component-position")
},getContent:function(){var g=this.$el.attr("data-component-content");
if(/^[a-z0-9_]+$/.test(g)){return booking.jstmpl(g).render(booking.env["component/dropdown-onload-shower/"+g])
}else{return g
}}})
});
booking[sNSExperiments]["eDUbKSPEIEZPPLWIGJDSaTfRe"]=(function(e,d){function c(){d(".pp_bpg_tooltip_holder").bind("mouseenter",function(){e.track.stage("eDUbKSPEIEZPPLWIGJDSaTfRe",1)
})
}return{init:c,initElse:c}
}(booking,jQuery));
B.define("component/tt-fancy",function(e,c,g){var d=e("component");
var f={width:300,id:"tt-fancy",content:""};
g.exports=d.extend({init:function(){this.domHelper={};
this._getOptions();
this._createDomNodes();
this._attachEvents()
},_getOptions:function(){$.extend(this,f,{width:this.$el.data("width"),id:this.$el.data("id"),content:this.$el.data("content")})
},_createDomNodes:function(){var j=$("#"+this.id);
if(j.length>0){this.domHelper={$parent:j,$content:j.find(".tt-fancy-content"),$pointer:j.find(".tt-fancy-pointer")}
}else{var k=$('<div class="tt-fancy-pointer"></div>');
var h=$('<div class="tt-fancy-content"></div>');
this.domHelper={$parent:$('<div id="'+this.id+'" style="width: '+this.width+'px;" class="tt-fancy-holder tt-fancy-holder--hidden"></div>').prepend(k).append(h).appendTo(document.body),$pointer:k,$content:h}
}},_attachEvents:function(){var h=this;
this.$el.bind("mouseenter",function(){h.domHelper.$content.html(h.content);
h._position_tt();
h.domHelper.$parent.css({display:"block"});
setTimeout(function(){h.domHelper.$parent.removeClass("tt-fancy-holder--hidden")
},10)
}).bind("mouseleave",function(){h.domHelper.$parent.css({display:"none"}).addClass("tt-fancy-holder--hidden")
})
},_position_tt:function(){var l=$(window).width(),h=this.$el,k=this.width&&typeof this.width==="number",p=(k?this.width:this.domHelper.$parent.width())/2,j=h.offset().left+(h.outerWidth()/2),o=h.offset().top+h.outerHeight()+7,m=j-p,n=15,r="auto",q=false;
if((j+p)>l){m="auto";
r=n;
q=true;
this.domHelper.$pointer.css({right:l-j-n-6+"px",left:"auto"})
}else{if((j-p)<n){m=n;
r="auto";
q=true;
this.domHelper.$pointer.css({left:j-n+"px",right:"auto"})
}}this.domHelper.$parent.css({left:m,right:r,top:o});
if(!q){this.domHelper.$pointer.attr("style","")
}}})
});
B.define("hijri-calendar",function(){var h=10631/30,g=1948084,e=8.01/60,c=["ar_islamic_calendar_muharram","ar_islamic_calendar_safar","ar_islamic_calendar_rabiul_awwal","ar_islamic_calendar_rabiul_akhir","ar_islamic_calendar_jumadal_ula","ar_islamic_calendar_jumadal_ukhra","ar_islamic_calendar_rajab","ar_islamic_calendar_shaban","ar_islamic_calendar_ramadan","ar_islamic_calendar_shawwal","ar_islamic_calendar_dhul_qaadah","ar_islamic_calendar_dhul_hijjah"];
function j(F){var D=F.day,I=F.month,t=F.year,A=I+1,q=t;
if(A<3){q-=1;
A+=12
}var J=Math.floor(q/100),H=2-J+Math.floor(J/4);
if(q<1583){H=0
}if(q===1582){if(A>10){H=-10
}if(A==10){H=0;
if(D>4){H=-10
}}}var k=Math.floor(365.25*(q+4716))+Math.floor(30.6001*(A+1))+D+H-1524;
H=0;
if(k>2299160){J=Math.floor((k-1867216.25)/36524.25);
H=1+J-Math.floor(J/4)
}var o=k+H+1524,w=Math.floor((o-122.1)/365.25),G=Math.floor(365.25*w),n=Math.floor((o-G)/30.6001);
D=(o-G)-Math.floor(30.6001*n);
I=n-1;
if(n>13){w+=1;
I=n-13
}t=w-4716;
var p=k-g,E=Math.floor(p/10631);
p=p-10631*E;
var C=Math.floor((p-e)/h),u=30*E+C;
p=p-Math.floor(C*h+e);
var x=Math.floor((p+28.5001)/29.5);
if(x==13){x=12
}var l=p-Math.floor(29.5001*x-29);
var r={gregorian_day:D,gregorian_month:I-1,gregorian_year:t,julian_day:k-1,hijri_day:l,hijri_month:x-1,hijri_year:u,hijri_month_tag:c[x-1]};
return r
}var d=$.cookie("hijri_enabled")||false;
var f=B.env.b_hijri_calendar_available;
return{enable:function(){if(f&&!d){d=true;
$.cookie("hijri_enabled",1);
B.eventEmitter.trigger("CALENDAR:hijri_enabled")
}},disable:function(){if(f&&d){d=false;
$.cookie("hijri_enabled",0);
B.eventEmitter.trigger("CALENDAR:hijri_disabled")
}},enabled:function(){return d
},available:function(){return f
},convert:j}
});
B.define("utils",function(d,c,e){c.assertExists=function(g,f){if(typeof g!="object"||!(f in g)){throw new Error("Property "+f+" is not found")
}};
c.camelCaseKeys=function(h){var g={};
var j,f;
for(j in h){if(h.hasOwnProperty(j)){f=j.replace(/-([a-zA-Z])/g,function(l,k){return k.toUpperCase()
});
g[f]=h[j]
}}return g
};
c.nodeData=function(h){if(h.jquery){h=h[0]
}this.assertExists(h,"attributes");
var g,k,j,f={};
for(g=0,k=h.attributes.length;
g<k;
g++){j=h.attributes[g];
if(j&&j.name.indexOf("data-")==0){f[j.name.replace(/^data-/,"")]=j.value
}}return this.camelCaseKeys(f)
}
});
B.define("utils/simple-unique-id",function(e,c,f){function d(h,g){return Math.floor(Math.random()*(g-h))+h
}f.exports=function(){return(new Date().getTime())+"_"+d(100,999)
}
});
B.define("window-visibilitychange",function(d,c,e){var f=d("event-emitter"),g={focus:"visible",focusin:"visible",pageshow:"visible",blur:"hidden",focusout:"hidden",pagehide:"hidden"};
e.exports=f.extend({setup:function(){if(!this.didSetup){this.didSetup=true;
this.hidden=null;
this.visibilityState=null;
this.hiddenAttribute="hidden";
if(this.hiddenAttribute in document){document.addEventListener("visibilitychange",this.visibilityChange.bind(this))
}else{if((this.hiddenAttribute="mozHidden") in document){document.addEventListener("mozvisibilitychange",this.visibilityChange.bind(this))
}else{if((this.hiddenAttribute="webkitHidden") in document){document.addEventListener("webkitvisibilitychange",this.visibilityChange.bind(this))
}else{if((this.hiddenAttribute="msHidden") in document){document.addEventListener("msvisibilitychange",this.visibilityChange.bind(this))
}else{if("onfocusin" in document){document.onfocusin=document.onfocusout=this.visibilityChange.bind(this)
}else{window.onpageshow=window.onpagehide=window.onfocus=window.onblur=this.visibilityChange.bind(this)
}}}}}}},visibilityChange:function(h){h=h||window.event;
var j=this.visibilityState;
if(h.type in g){this.hidden=g[h.type]=="hidden";
this.visibilityState=g[h.type]
}else{this.hidden=document[this.hiddenAttribute];
this.visibilityState=document[this.hiddenAttribute]?"hidden":"visible"
}if(j!=this.visibilityState){this.emit("visibilitychange",this.visibilityState)
}}});
e.exports.addListener=e.exports.on=function(){e.exports.setup();
f.prototype.addListener.apply(e.exports,arguments)
}
});
B.Search=B.Search||{};
B.Search.Events={DESTINATION_CHANGED:"SEARCH:DESTINATION_CHANGED",DESTINATION_INVALID:"SEARCH:DESTINATION_INVALID",TRAVEL_PURPOSE_CHANGED:"SEARCH:travel_purpose_changed",DATE_CHANGED:"SEARCH:date_changed",DATE_MONTH_CHANGED:"SEARCH:month_changed",DATE_MODE_CHANGED:"SEARCH:mode_changed",DATE_INVALID:"SEARCH:dates_invalid",DATE_VALID:"SEARCH:dates_valid",FLEXIBLE_MONTHYEAR_CHANGED:"SEARCH:flexible_monthyear_changed",FLEXIBLE_INTERVAL_CHANGED:"SEARCH:flexible_interval_changed",FLEXIBLE_INVALID:"SEARCH:monthyear_invalid",FLEXIBLE_VALID:"SEARCH:monthyear_valid",GROUP_CHANGED:"SEARCH:group_changed",GROUP_MODE_CHANGED:"SEARCH:group_mode_changed",GROUP_VALID:"SEARCH:group_valid",GROUP_INVALID:"SEARCH:group_invalid",ADVANCED_SEARCH_ENABLED:"SEARCH:advanced_search_enabled",ADVANCED_SEARCH_DISABLED:"SEARCH:advanced_search_disabled",POPULAR_BUSINESS_FILTERS_OPENED:"SEARCH:pouplar_business_filters_opened",POPULAR_BUSINESS_FILTERS_DISABLED:"SEARCH:pouplar_business_filters_closed"};
B.Search.TrackingEvents={DESTINATION_CHANGED:"destination_changed",CHECKOUT_DATEPICKER:"checkout_changed_datepicker",CHECKOUT_MONTH_SELECTOR:"checkout_changed_month_selector",CHECKOUT_DAY_SELECTOR:"checkout_changed_day_selector",CHECKIN_DATEPICKER:"checkin_changed_datepicker",CHECKIN_MONTH_SELECTOR:"checkin_changed_month_selector",CHECKIN_DAY_SELECTOR:"checkin_changed_day_selector",NO_DATES_SELECTED:"no_dates_selected",FLEXIBLE_INTERVAL_SELECTED:"flexible_interval_selected",FLEXIBLE_MONTH_SELECTED:"flexible_month_selected",GROUP_ADVANCED_MODE_SELECTED:"group_advanced_mode_selected",GROUP_BASIC_MODE_SELECTED:"group_basic_mode_selected",GROUP_PREDEFINED_OPTION_SELECTED:"group_predefined_option_selected",GROUP_ROOMS_NUMBER_CHANGED:"rooms_number_changed",GROUP_ADULTS_NUMBER_CHANGED:"adults_number_changed",GROUP_CHILDREN_NUMBER_CHANGED:"children_number_changed",GROUP_CHILDREN_AGE_CHANGED:"children_age_changed",ADVANCED_SEARCH_CHANGED:"advanced_search_changed",ADVANCED_SEARCH_ENABLED:"advanced_search_enabled",ADVANCED_SEARCH_DISABLED:"advanced_search_disabled",FORM_SUBMITTED:"form_submitted"};
B.Search.TravelTypeModes={BUSINESS:"business",LEISURE:"leisure"};
B.Search.DateModes={REGULAR:"regular",NODATES:"no-dates",FLEXIBLE:"flexible"};
B.Search.GroupModes={REGULAR:"basic",CUSTOM:"custom"};
B.Search.rawGroupConfiguration;
B.Search.groupConfiguration;
B.Search.childrenConfiguration;
B.Search.createGroup=function(c){if(!c||typeof c!=="object"){return new B.Search.InvalidGroup()
}return new B.Search.Group(c)
};
B.Search.AbstractGroup=function(){};
B.Search.AbstractGroup.prototype.parseChildrenConfig=function(c){var d=[],e;
if(!c.childrenAges&&c.childrenages){c.childrenAges=c.childrenages
}if(c.childrenAges instanceof Array){d=c.childrenAges
}else{if(typeof c.childrenAges==="number"){d=[c.childrenAges]
}else{if(typeof c.childrenAges==="string"){d=c.childrenAges.split(",")
}else{if(c.children instanceof Array){d=c.children
}else{if(typeof c.children!=="undefined"){e=parseInt(c.children,10);
if(isNaN(e)){d=[]
}else{d=new Array(e)
}}else{d=[]
}}}}}return{childrenAges:d,children:d.length}
};
B.Search.AbstractGroup.prototype.parseConfig=function(c,e){var d={};
if(c.adults){d.adults=c.adults
}if(c.rooms){d.rooms=c.rooms
}if(d.rooms===0){d.rooms=1
}$.extend(d,this.parseChildrenConfig(c));
if(c.name){d.name=c.name
}if(c.type){d.type=c.type
}if(e&&e.useDefaults){d=$.extend({adults:2,rooms:1,children:0,childrenAges:[]},d)
}return d
};
B.Search.AbstractGroup.prototype.applyConfig=function(c){var d;
if(c.name!==d){this.name=c.name
}if(c.type!==d){this.type=c.type
}if(c.rooms!==d){this.rooms=c.rooms
}if(c.adults!==d){this.adults=c.adults
}if(c.children!==d){this.children=c.children
}if(c.childrenAges!==d){this.childrenAges=c.childrenAges
}};
B.Search.InvalidGroup=function(){};
B.Search.InvalidGroup.prototype=new B.Search.AbstractGroup();
B.Search.InvalidGroup.prototype.valueOf=function(){return null
};
B.Search.Group=function(c){var d=this.parseConfig(c,{useDefaults:true});
this.applyConfig(d)
};
B.Search.Group.prototype=new B.Search.AbstractGroup();
B.Search.Group.prototype.update=function(c){var d=this.parseConfig(c);
this.applyConfig(d);
return this
};
B.Search.Group.prototype.toString=function(){return this.valueOf()
};
B.Search.Group.prototype.valueOf=function(){var c=["Group:"];
if(this.name){c.push("Name: "+this.name)
}if(this.type){c.push("Type: "+this.type)
}c.push(this.rooms);
c.push(this.adults);
c.push(this.children);
c.push(this.childrenAges.join("|"));
return c.join(",")
};
B.Search.ONE_DAY=1000*60*60*24;
B.Search.createDate=function(m){var h,g,k,j,d,l,e,f,c;
switch(typeof m){case"string":c=m.split("-");
if(c.length>1){h=parseInt(c[0],10);
g=parseInt(c[1],10)-1
}if(c.length===3){k=parseInt(c[2],10)
}break;
case"object":h=parseInt(m.year,10);
g=parseInt(m.month,10);
k=parseInt(m.date,10);
break;
case"number":e=m*B.Search.ONE_DAY;
f=new Date(e);
h=f.getFullYear();
g=f.getMonth();
k=f.getDate();
break;
case"undefined":j="invalid";
break
}l=typeof h==="number"&&!isNaN(h)&&typeof g==="number"&&!isNaN(g);
d=l&&typeof k==="number"&&!isNaN(k)&&k!==0;
if(d){return new B.Search.Date({year:h,month:g,date:k})
}else{if(l){return new B.Search.MonthDate({year:h,month:g})
}else{return new B.Search.InvalidDate()
}}};
B.Search.AbstractDate=function(){};
B.Search.AbstractDate.prototype.initValue_=function(){this.dateObject_=new Date(Date.UTC(this.year,this.month,this.date||1));
this.value_=Math.floor(this.dateObject_.valueOf()/B.Search.ONE_DAY)
};
B.Search.AbstractDate.toString=function(){throw"Abstract method should be override in child classes"
};
B.Search.AbstractDate.prototype.valueOf=function(){if(!this.value_){this.initValue_()
}return this.value_
};
B.Search.Date=function(c){this.year=c.year;
this.month=c.month;
this.date=c.date;
this.type="valid"
};
B.Search.Date.prototype=new B.Search.AbstractDate;
B.Search.Date.prototype.toString=function(){var c=[],d=this.month+1;
c.push(this.year);
if(d<=9){c.push("0"+d)
}else{c.push(d)
}if(this.date<=9){c.push("0"+this.date)
}else{c.push(this.date)
}return c.join("-")
};
B.Search.Date.prototype.addDays=function(c){return B.Search.createDate(this+c)
};
B.Search.MonthDate=function(c){this.year=c.year;
this.month=c.month;
this.type="month"
};
B.Search.MonthDate.prototype=new B.Search.AbstractDate;
B.Search.MonthDate.prototype.toString=function(){var c=[],d=this.month+1;
c.push(this.year);
if(d<=9){c.push("0"+d)
}else{c.push(d)
}return c.join("-")
};
B.Search.InvalidDate=function(){this.type="invalid"
};
B.Search.toString=function(){return"Invalid Date"
};
B.Search.InvalidDate.prototype=new B.Search.AbstractDate;
B.Search.AbstractWidget=function(c,d){};
B.Search.AbstractWidget.prototype.initialize=function(c,d){this.$element=c;
this.setOptions(d)
};
B.Search.AbstractWidget.prototype.setOptions=function(c){if(!this.options){this.options={}
}this.options=$.extend(this.options,c)
};
B.Search.AbstractWidget.prototype.initEvents=function(){throw"Abstract intiEvents method should be implemented in widget instances"
};
B.Search.AbstractWidget.prototype.onExternalEventConfigChanged=function(){throw"Abstract onExternalEventConfigChanged method should be implemented in widget instances"
};
B.Search.AbstractWidget.prototype.getConfig=function(){throw"Abstract getConfig method should be implemented in widget instances"
};
B.Search.AbstractWidget.prototype.trigger=function(c,d){if(c==="groupChanged"&&typeof this.onExternalEventConfigChanged==="function"){this.onExternalEventConfigChanged.apply(this,[].slice.call(arguments,1))
}};
B.Search.AbstractWidget.prototype.onInit=function(){var c=this;
if(typeof this.options.onInit==="function"){window.setTimeout(function(){c.options.onInit.call(c,c.getConfig())
},10)
}};
B.Search.AbstractWidget.prototype.onChange=function(){if(typeof this.options.onChange==="function"){this.options.onChange.call(this,this.getConfig())
}};
B.Search.AbstractWidget.prototype.tryCallback=function(d,e,f){var c;
if(!d){return
}e=e||[];
if(typeof this.options[d]==="function"){c=this.options[d]
}else{if(typeof f==="function"){c=f
}}if(c){c.apply(this,e)
}};
B.Search.AbstractWidget.prototype.DISABLED_CLASS="disabled";
B.Search.AbstractWidget.prototype.hide=function(){this.$element.toggleClass(this.DISABLED_CLASS,true)
};
B.Search.AbstractWidget.prototype.show=function(){this.$element.toggleClass(this.DISABLED_CLASS,false)
};
B.Search.createWidgetPlugin=function(d,c){if($.fn[d]){throw"Jquery plugin "+d+" is already defined"
}$.fn[d]=(function(e,f){var g=[];
return function(l){if(l==="notify"){var h=arguments[1],j=arguments[2];
for(var k=0;
k<g.length;
k++){g[k].trigger(h,j)
}}return this.each(function(){var o=e,n=$(this),p=n.data(),m=p[o];
if(!m){m=new f(n,l);
n.data(o,m);
g.push(m)
}else{m.setOptions(l)
}})
}
}(d,c));
return $.fn[d]
};
B.Search.validators={storage_:[]};
B.Search.Validator=function(){};
B.Search.Validator.prototype.name="general";
B.Search.Validator.prototype.type="general";
B.Search.Validator.prototype.success=undefined;
B.Search.Validator.prototype.fail=undefined;
B.Search.Validator.prototype.test=function(){};
B.Search.Validator.prototype.validate=function(){var f=this.test(),c=f?"fail":"success",d={name:this.name,status:c},e=c+"Callback";
if(typeof this[c]==="function"){d.message=this[c]()
}else{if(typeof this[c]!=="undefined"){d.message=this[c]
}}if(typeof this[e]==="function"){d.callback=this[e]
}if(this.validationParameters){d.validationParameters=this.validationParameters
}return new B.Search.ValidationResult(d)
};
B.Search.ValidationResult=function(c){this.setOptions_(c)
};
B.Search.ValidationResult.prototype.status=undefined;
B.Search.ValidationResult.prototype.message=undefined;
B.Search.ValidationResult.prototype.callback=function(){};
B.Search.ValidationResult.prototype.valueOf=function(){return this.status!=="fail"
};
B.Search.ValidationResult.prototype.toString=function(){return this.message||""
};
B.Search.ValidationResult.prototype.setOptions_=function(c){if(!c){return this
}if(c.name){this.name=c.name
}if(c.status){this.status=c.status
}if(c.message){this.message=c.message
}if(typeof c.callback==="function"){this.callback=c.callback
}if(c.validationParameters){this.validationParameters=c.validationParameters
}return this
};
B.Search.validators.create=function(d){var c=new B.Search.Validator();
if(!d){return c
}if(d.name){c.name=d.name
}if(d.type){c.type=d.type
}if(d.success){c.success=d.success
}if(d.fail){c.fail=d.fail
}if(d.failCallback){c.failCallback=d.failCallback
}if(d.successCallback){c.successCallback=d.successCallback
}if(d.test){c.test=d.test
}B.Search.validators.storage_.push(c);
return c
};
B.Search.validators.all=function(){return this.storage_
};
B.Search.validators.allOfType=function(e){var c=[];
for(var d=0;
d<this.storage_.length;
d++){if(this.storage_[d].type===e){c.push(this.storage_[d])
}}return c
};
B.Search.DEFAULT_GROUP_COFIGURATION={adults:2,rooms:1,children:0};
B.Search.Interface=function(){var c=this;
this.datesStorage={checkin:B.Search.createDate(),checkout:B.Search.createDate(),mode:"regular"};
this.groupStorage={value:B.Search.createGroup()};
this.flexibleDatesStorage={interval:null,monthYear:B.Search.createDate()};
this.destinationStorage={value:null};
this.advancedSearchStorage={state:"disabled"};
this.dates=function(){var d;
switch(arguments.length){case 0:return{checkin:this.getDate_("checkin"),checkout:this.getDate_("checkout"),mode:this.getDatesMode_(),validate:function(){return c.validateDates_.apply(c,[].slice.call(arguments,0))
},setMode:function(){return c.setDatesMode_.apply(c,[].slice.call(arguments,0))
},validationResults:function(){return c.validationResults
}};
case 1:return this.getDate_(arguments[0]);
case 2:if(arguments[0]==="mode"){return c.setDatesMode_.apply(c,[].slice.call(arguments,1))
}else{d=B.Search.createDate(arguments[1]);
return this.setDate_(arguments[0],d)
}default:d=B.Search.createDate(arguments[1]);
return this.setDate_(arguments[0],d)
}};
this.flexibleDates=function(){return{interval:function(){if(arguments.length===1){return c.setInterval_.apply(c,[].slice.call(arguments,0))
}else{return c.getInterval_()
}},monthYear:function(){if(arguments.length===1){return c.setMonthYear_.apply(c,[].slice.call(arguments,0))
}else{return c.getMonthYear_()
}},validate:function(){return c.validateFlexibleDates_.apply(c,[].slice.call(arguments,0))
}}
};
this.destination=function(){switch(arguments.length){case 0:return this.getDestination_();
default:return this.setDestination_(arguments[0])
}};
this.group=function(){switch(arguments.length){case 0:return{value:this.getGroup_(),mode:function(d){if(d){return c.setGroupMode_.apply(c,[].slice.call(arguments,0))
}else{return c.getGroupMode_.apply(c,[].slice.call(arguments,0))
}},validate:function(){return c.validateGroup_.apply(c,[].slice.call(arguments,0))
},setMode:function(){return c.setGroupMode_.apply(c,[].slice.call(arguments,0))
}};
break;
case 1:if(arguments[0]==="reset"){return this.setGroup_("config",B.Search.DEFAULT_GROUP_COFIGURATION)
}else{if(arguments[0]==="value"){return this.getGroup_()
}else{if(typeof arguments[0]==="string"){return this.getGroup_(arguments[0])
}else{return this.setGroup_("config",arguments[0])
}}}break;
default:if(arguments[0]==="reset"){return this.setGroup_("config",arguments[1])
}return this.setGroup_(arguments[0],arguments[1])
}};
this.advanced=function(){return{mode:function(d){if(d){return c.setAdvancedSearchMode_.apply(c,[].slice.call(arguments,0))
}else{return c.getAdvancedSearchMode_.apply(c,[].slice.call(arguments,0))
}},enable:function(){return c.setAdvancedSearchMode_.apply(c,["enabled"])
},disable:function(){return c.setAdvancedSearchMode_.apply(c,["disabled"])
}}
}
};
B.Search.Interface.prototype={constructor:B.Search.Interface,sanitizeDateType_:function(c){if(c==="checkin"||c==="checkout"){return c
}else{return null
}},getDate_:function(d){var c=this.sanitizeDateType_(d);
return this.datesStorage[c]
},setDate_:function(g,h){var c=B.Search.createDate(h),e=c.type==="valid"?B.Search.Events.DATE_CHANGED:B.Search.Events.DATE_MONTH_CHANGED,d=this.sanitizeDateType_(g),f=this.datesStorage[d];
if(d){if(c.type!==f.type||c.valueOf()!==f.valueOf()){this.datesStorage[d]=c;
B.eventEmitter.trigger(e,{type:d,value:c,search:this})
}}else{window.onerror("attempt_to_set_date_with_wrong_type:_"+g,window.location)
}return c
},validateDates_:function(f,g){if(f==="reset"){B.eventEmitter.trigger(B.Search.Events.DATE_VALID);
return true
}var d=B.Search.validators.allOfType("dates"),e=d.map(function(h){return h.validate()
}),c=e.every(function(h){return h.status==="success"
});
if(c){this.validationResults=null
}else{this.validationResults=e
}if(!(g&&g.silent)){B.eventEmitter.trigger(c?B.Search.Events.DATE_VALID:B.Search.Events.DATE_INVALID,{validators:e})
}return c
},sanitizeDatesMode_:function(c){if(c==="regular"||c==="no-dates"||c==="flexible"){return c
}else{return null
}},getDatesMode_:function(){return this.datesStorage.mode
},setDatesMode_:function(d){var c=this.sanitizeDatesMode_(d);
if(c&&this.datesStorage.mode!==c){this.datesStorage.mode=c;
B.eventEmitter.trigger(B.Search.Events.DATE_MODE_CHANGED,{mode:c})
}return this
},getMonthYear_:function(){return this.flexibleDatesStorage.monthYear
},setMonthYear_:function(d){var c=B.Search.createDate(d),e=this.flexibleDatesStorage.monthYear;
if(c.valueOf()!==e.valueOf()){this.flexibleDatesStorage.monthYear=c;
B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_MONTHYEAR_CHANGED,{value:c})
}return c
},getInterval_:function(){return this.flexibleDatesStorage.interval
},setInterval_:function(c){if(!(c==="weekend"||c==="week")){c="any"
}if(this.flexibleDatesStorage.interval!==c){this.flexibleDatesStorage.interval=c;
B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_INTERVAL_CHANGED,{value:c})
}return this
},validateFlexibleDates_:function(){var c=B.Search.validators.allOfType("flexible"),d=c.map(function(f){return f.validate()
}),e=d.every(function(f){return f.status==="success"
});
B.eventEmitter.trigger(e?B.Search.Events.FLEXIBLE_VALID:B.Search.Events.FLEXIBLE_INVALID,{validators:d});
return e
},getDestination_:function(){return this.destinationStorage.value
},setDestination_:function(d){var c=d&&d.data,e=this.destinationStorage&&this.destinationStorage.value&&this.destinationStorage.value;
if(c){if(!e||e&&(e.dest_id!==c.dest_id)){this.destinationStorage.value=c;
B.eventEmitter.trigger(B.Search.Events.DESTINATION_CHANGED,this.destinationStorage.value)
}}},getGroup_:function(c){if(!c){return this.groupStorage.value
}else{return this.groupStorage.value[c]
}},setGroup_:function(g,h){var d,f;
if(g==="rooms"||g==="adults"||g==="children"||g==="childrenAges"||g==="type"||g==="name"){this.setGroupValue_(g,h)
}else{if(g==="config"){if(h instanceof B.Search.Group){d=h
}else{d=B.Search.createGroup(h)
}for(var e=0,j=d.childrenAges.length;
e<j;
e++){if(d.childrenAges[e]===f){if(B.track.getVariant("bLYSRbNJdQJJHMVGRCfDaWe")){d.childrenAges[e]=this.groupStorage.value.childrenAges[e]
}else{d.childrenAges[e]=this.groupStorage.value.childrenAges[e]||0
}}}if(d.valueOf()!==this.groupStorage.value.valueOf()){this.groupStorage.value=d;
this.triggerGroupEvent()
}}}},setGroupValue_:function(d,e){var c,f={};
f[d]=e;
c=B.Search.createGroup(this.groupStorage.value);
c.update(f);
if(c.valueOf()!==this.groupStorage.value.valueOf()){this.groupStorage.value=c;
this.triggerGroupEvent()
}},getGroupMode_:function(){return this.groupStorage.mode
},setGroupMode_:function(c){if(!(c==="basic"||c==="custom")){c="custom"
}if(c&&this.groupStorage.mode!==c){this.groupStorage.mode=c;
B.eventEmitter.trigger(B.Search.Events.GROUP_MODE_CHANGED,{mode:c})
}return this
},triggerGroupEvent:function(){B.eventEmitter.trigger(B.Search.Events.GROUP_CHANGED,this.groupStorage.value)
},validateGroup_:function(e){if(e==="reset"){B.eventEmitter.trigger(B.Search.Events.GROUP_VALID);
return true
}var c=B.Search.validators.allOfType("group"),d=c.map(function(h,g){return h.validate()
}),f=d.every(function(g){return g.status==="success"
});
B.eventEmitter.trigger(f?B.Search.Events.GROUP_VALID:B.Search.Events.GROUP_INVALID,{validators:d});
return f
},setAdvancedSearchMode_:function(c){if(c!==this.advancedSearchStorage.state&&(c==="enabled"||c==="disabled")){this.advancedSearchStorage.state=c;
B.eventEmitter.trigger((c==="enabled")?B.Search.Events.ADVANCED_SEARCH_ENABLED:B.Search.Events.ADVANCED_SEARCH_DISABLED)
}},getAdvancedSearchMode_:function(){return this.advancedSearchStorage.state
}};
B.search=new B.Search.Interface();
booking[sNSStartup].initSearchValues={init:function(){this.initDestination();
this.initDates();
this.initGroup()
},initDates:function(){var c,d;
function f(h,g){var k=g.split("-"),j=new Date(k[0],k[1]-1,h,0,0,0,0);
if(isNaN(j.getTime())){return false
}return new B.Search.Date({year:k[0],month:k[1]-1,date:h})
}function e(h){var j=h.split("-"),g=new Date(j[0],j[1]-1,j[2],0,0,0,0);
if(isNaN(g.getTime())){return false
}return new B.Search.Date({year:j[0],month:j[1]-1,date:j[2]})
}if(B.env.s_value_checkin_monthday&&B.env.s_value_checkin_year_month){c=f(B.env.s_value_checkin_monthday,B.env.s_value_checkin_year_month);
if(c){B.search.dates("checkin",c)
}}else{if(B.env.b_checkin_date){c=e(B.env.b_checkin_date);
if(c){B.search.dates("checkin",c)
}}else{if(B.env.b_session_checkin_date){c=e(B.env.b_session_checkin_date);
if(c){B.search.dates("checkin",c)
}}}}if(B.env.s_value_checkout_monthday&&B.env.s_value_checkout_year_month){d=f(B.env.s_value_checkout_monthday,B.env.s_value_checkout_year_month);
if(d){B.search.dates("checkout",d)
}}else{if(B.env.b_checkout_date){d=e(B.env.b_checkout_date);
if(d){B.search.dates("checkout",d)
}}else{if(B.env.b_session_checkout_date){d=e(B.env.b_session_checkout_date);
if(d){B.search.dates("checkout",d)
}}}}if(B.env.b_no_dates_mode){B.search.dates("mode",B.Search.DateModes.NODATES)
}},initGroup:function(){try{var f=B.env.b_group&&B.env.b_group[0],g=B.env.b_group_rooms_wanted,h=[];
if(f&&g){if(f.ages){for(var c=0;
c<f.ages.length;
c++){if(typeof f.ages[c].age!=="undefined"){h.push(f.ages[c].age)
}}}B.search.group({adults:f.guests,childrenAges:h,rooms:g})
}else{if(B.search.group("value") instanceof B.Search.InvalidGroup){B.search.group({adults:2,rooms:1,type:B.Search.GroupModes.REGULAR})
}}}catch(d){throw"Unable to set group"
}},initDestination:function(){var c={name:undefined,data:{}};
if(B&&B.env){if(B.env.sess_dest_id){c.data.dest_id=B.env.sess_dest_id
}if(B.env.sess_dest_type){c.data.dest_type=B.env.sess_dest_type
}if(B.env.sess_dest_fullname){c.data.name=B.env.sess_dest_fullname;
c.term=B.env.sess_dest_fullname
}}if(c.data.dest_id&&c.data.dest_type&&c.data.name){B.search.destination(c)
}},priority:5};
(function(g,f){function c(x,n){var r=this;
this.$element=x;
this.$inputs=x.find("select, input");
this.options=n||{};
if(this.$element.data("always-enabled")){this.options.alwaysEnabled=true
}var u=x.find(".b-date-selector__control-dayselector select"),A=x.find(".b-date-selector__control-monthselector select");
function z(E){if(typeof E!=="string"){return false
}var D=E.split("-");
if(D.length!==2){return false
}return{year:parseInt(D[0],10),month:parseInt(D[1],10)-1}
}this.lastMonth=z(A.find("option:last").val());
function o(E){var D=document.createElement("option");
D.innerHTML=E.text;
D.selected=E.selected;
D.value=E.value;
return D
}function p(E,D){var F=g.env.b_lang;
if(isNaN(D)){if((F=="ja"||F=="zh"||F=="ko")&&g.track.getVariant("YdVSfHJSedZFNfPOUNEQYLFQCSET")){return E+g.env.sbox_day
}else{return E
}}else{if(F=="ja"||F=="zh"||F=="ko"||F=="hu"){if((F=="ja"||F=="zh"||F=="ko")&&g.track.stage("YdVSfHJSedZFNfPOUNEQYLFQCSET",1)&&g.track.getVariant("YdVSfHJSedZFNfPOUNEQYLFQCSET")){return E+g.env.sbox_day+" "+n.dayNames[D]
}else{return E+" "+n.dayNames[D]
}}else{return n.dayNames[D]+" "+E
}}}function m(D,F){var E;
switch(D.month){case 1:E=(D.year%4===0)&&(D.year%100!==0)||(D.year%400===0)?29:28;
break;
case 0:case 2:case 4:case 6:case 7:case 9:case 11:E=31;
break;
case 3:case 5:case 8:case 10:E=30;
break
}if(F==="checkin"&&D.month===r.lastMonth.month&&D.year===r.lastMonth.year){E=E-1
}return E
}var t=!f.browser.msie&&booking.track.getVariant("YcWAZfAFGUAAKdQEC")?true:false;
function k(F,K){var E=u.get(0),G=u.val(),L,M,J,I,D;
if(F.year&&F.month%1===0){M=new Date(F.year,F.month,1).getDay();
D=m(F,K);
G=F.date
}else{if(!F){D=31
}else{return
}}if(t){L=E.parentNode;
L.removeChild(E)
}while(E.firstChild){E.removeChild(E.firstChild)
}J=document.createDocumentFragment();
I=document.createElement("option");
I.innerHTML=g.env.sbox_day;
I.value=0;
J.appendChild(I);
for(var H=1;
H<=D;
H++){J.appendChild(o({text:p(H,(M-1+H)%7),selected:G==H,value:H}))
}E.appendChild(J);
if(t){L.appendChild(E)
}}function h(D){var E=D.year+"-"+(D.month+1);
A.val(E)
}function j(D){k(w(),n.type);
C();
if(D&&D.originalEvent){if(n.type==="checkin"){g.Search.tracker.trackEvent(g.Search.TrackingEvents.CHECKIN_MONTH_SELECTOR)
}else{if(n.type==="checkout"){g.Search.tracker.trackEvent(g.Search.TrackingEvents.CHECKOUT_MONTH_SELECTOR)
}}}}function q(D){C();
if(D&&D.originalEvent){if(n.type==="checkin"){g.Search.tracker.trackEvent(g.Search.TrackingEvents.CHECKIN_DAY_SELECTOR)
}else{if(n.type==="checkout"){g.Search.tracker.trackEvent(g.Search.TrackingEvents.CHECKOUT_DAY_SELECTOR)
}}}}function C(){var D=w();
if(!D){return
}if(n.type==="checkin"){g.search.dates("checkin",D)
}else{if(n.type==="checkout"){g.search.dates("checkout",D)
}}}function l(D){k(D);
h(D)
}function w(){var D=z(A.val());
D.date=u.val();
if(!D||isNaN(D.date)){return false
}return D
}function y(E,D){if(!D){return
}if(D.type===n.type){l(D.value)
}}A.bind("change.dateSelector",j);
u.bind("change.dateSelector",q);
A.trigger("change.dateSelector");
x.bind("dateSelected",y)
}c.prototype.setOptions=function(h){if(!h){return this
}if(h.disabled){this.$inputs.attr("disabled",true)
}else{this.$inputs.removeAttr("disabled")
}return this
};
c.prototype.getOption=function(h){if(!h){return this.options
}if(this.options[h]){return this.options[h]
}else{return null
}};
c.prototype.trigger=function(j,h){if(!j){return this
}if(j==="disable"&&!this.options.alwaysEnabled){this.setOptions({disabled:true})
}else{if(j==="enable"){this.setOptions({disabled:false})
}}return this
};
function d(){this.instances_=[]
}d.prototype.create=function(j,k){var h=new c(j,k);
this.add(h);
return h
};
d.prototype.add=function(h){this.instances_.push(h);
return h
};
d.prototype.all=function(){return this.instances_
};
d.prototype.notifyAll=function(l,h){var k=this.all();
for(var j=0;
j<k.length;
j++){k[j].trigger.apply(k[j],[].slice.call(arguments,0))
}return this.instances_
};
var e=g.Search.datePickerController=new d();
f.fn.dateSelector=function(h){var j=g.env.b_simple_weekdays_for_js.slice(0);
j.unshift(j.pop());
return this.each(function(){var m=f(this),k=m.data(),l=k.calendar2;
if(!l){e.create(m,f.extend({dayNames:j},h,k))
}else{l.setOptions(h)
}})
}
}(B,$));
booking[sNSStartup].search_utilities={init:function(){B.Search=B.Search||{};
B.Search.getShiftedDate=function(e,d){if(!e){return
}var c=new Date(e.year,e.month,e.date+d);
return{year:c.getFullYear(),month:c.getMonth(),date:c.getDate()}
};
B.Search.openDatepicker=function(f){var d,h={selector:null,duration:null},e=$.extend({},h,f),c,g,j=function(){d.show()
};
c=e.selector;
g=e.duration;
$.fn.calendar2("each",function(k){if(c){if(k.$input.is(c)){d=k;
return false
}}else{d=k;
return false
}});
if(d){B.WindowScroller.scrollToBlock(d.$input,g,undefined,j)
}};
$(window).delegate(".js-open-datepicker","click",function(e){e.preventDefault();
var c=$(this),f=c.data(),d={};
if(typeof f.selector!=="undefined"){d.selector=f.selector
}if(typeof f.duration!=="undefined"){d.duration=f.duration
}B.Search.openDatepicker(d)
})
},priority:5};
booking.events=B.require("events");
/*!
 * @name fly
 * @version v0.0.17
 * @author Artur Burtsev <artjock@gmail.com>
 * @see https://github.com/artjock/fly
 * @tags core popover dropdown tooltip
 */
;
(function(){var c={_count:0,_mixin:{}};
c._base={events:{hide:"hide",show:"show",rootready:"rootready"},_cuid:c._count++,_ctor:function d(){},_$root:null,_$handle:null,_emitter:null,defaults:{content:"",redrawOnShow:true},ens:"",options:null,create:function(g,e){var f=this.extend({ens:".ns"+c._count++,_$handle:$(g),_emitter:$({})});
f.options=$.extend({},f.defaults,e);
return f._init()
},extend:function(e){this._ctor.prototype=this;
if(e&&"defaults" in e){e.defaults=$.extend({},this.defaults,e.defaults)
}var f=$.extend(new this._ctor(),e);
f._cuid=c._count++;
if(e.register$){c.register$(e.register$,f)
}return f
},delegate:function(e,f){var g=this;
var h="fly_delegated_"+g._cuid;
$.each(g.actions,function(j){$(document.body).delegate(e,j,function(){if($(this).data(h)){return
}var k=g.create(this,f);
k.handle().data(h,1);
k._actionHandler(k.actions[j]).apply(k,arguments)
})
})
},onrootready:function(){},root:function(){if(!this._$root){var e=this.options;
this._$root=$("<div/>").addClass(e.baseClass).addClass(e.extraClass).addClass(e.hideClass).appendTo("body");
this.trigger(this.events.rootready)
}return this._$root
},handle:function(){return this._$handle
},_init:function(){this._action(true);
this.bind(this.events.rootready,$.proxy(this.onrootready,this));
this.init();
return this
},_destroy:function(){this.destroy();
if(this._$root){this._$root.remove();
this._$root=null
}this._action(false)
},_action:function(h,g,f){f=f||this.handle();
g=g||this.actions;
for(var e in g){if(h){f.bind(e+this.ens,this._actionHandler(g[e]))
}else{f.unbind(e+this.ens)
}}},_actionHandler:function(e){return typeof e==="string"?$.proxy(this[e],this):$.proxy(e,this)
},_content:function(e){var f=this.options.content;
if(typeof f==="function"){if(f.length){f.call(this,e)
}else{e(f.call(this))
}}else{e(f)
}},_render:function(e){this.root().html(e||"");
this._rendered=true
},_modCss:function(){var e=this.options.position.split(" ");
var f=this.options.baseClass;
return[f+"_"+e[0],f+"_arrow-"+e[1]].join(" ")
},_position:function(){},init:function(){},destroy:function(){},show:function(e){var f=this.options.redrawOnShow||!this._rendered;
if(f&&!arguments.length){return this._content($.proxy(this.show,this))
}if(arguments.length){this._render(e)
}this.trigger(this.events.show);
this.root().css(this._position()).addClass(this._modCss()).removeClass(this.options.hideClass)
},hide:function(){if(this.hidden()){return
}this.trigger(this.events.hide);
this.root().addClass(this.options.hideClass)
},redraw:function(e){var f=this;
this._content(function(g){f._render(g);
if(typeof e==="function"){e(g)
}})
},toggle:function(e){e=arguments.length?e:this.hidden();
this[e?"show":"hide"]()
},hidden:function(){return !this._$root||this.root().hasClass(this.options.hideClass)
}};
$.each(["bind","unbind","one","trigger"],function(e,f){c._base[f]=function(){this._emitter[f].apply(this._emitter,arguments);
return this
}
});
c._mixin.rect=function(e){var f=e[0].getBoundingClientRect();
if(!("width" in f)){f=$.extend({},f);
f.width=e.outerWidth();
f.height=e.outerHeight()
}return f
};
c._mixin.position=function(){var k={};
var e=$(window);
var o=this.options.position.split(" ");
var j=this.options.arrowSize;
var m=o.shift();
var q=o.shift();
var p={};
var n=this._rect(this.root());
var g=this._rect(this.handle());
var l=this.root().css("position")==="fixed";
var r=l?{top:0,left:0}:{top:e.scrollTop(),left:e.scrollLeft()};
switch(q){case"top":p.top=g.height/2-j*1.5;
break;
case"left":p.left=g.width/2-j*1.5;
break;
case"right":p.left=g.width/2-n.width+j*1.5;
break;
case"bottom":p.top=g.height/2-n.height+j*1.5;
break;
default:p.top=(g.height-n.height)/2;
p.left=(g.width-n.width)/2;
break
}switch(m){case"left":k.top=r.top+g.top+p.top;
k.left=r.left+g.left-n.width-j;
break;
case"right":k.top=r.top+g.top+p.top;
k.left=r.left+g.left+g.width+j;
break;
case"top":k.top=r.top+g.top-n.height-j;
k.left=r.left+g.left+p.left;
break;
default:k.top=r.top+g.top+g.height+j;
k.left=r.left+g.left+p.left
}return k
};
c.tooltip=c._base.extend({actions:{mouseenter:"onmouseenter",mouseleave:"onmouseleave"},_showTimeout:null,_hideTimeout:null,onmouseenter:function(){var e=this;
if(this._hideTimeout){clearTimeout(this._hideTimeout);
this._hideTimeout=null
}if(this.hidden()){this._showTimeout=setTimeout(function(){e.show()
},this.options.showDelay)
}},onmouseleave:function(){var e=this;
if(this._showTimeout){clearTimeout(this._showTimeout);
this._showTimeout=null
}this._hideTimeout=setTimeout(function(){e.hide()
},this.options.hideDelay)
},_action:function(e){c._base._action.apply(this,arguments);
if(this.options.keepOnContent){this._keepOnContent(e)
}},_keepOnContent:function(g){var e=this;
var f=this.events.rootready+"._keepOnContent";
if(g){this.bind(f,function(){c._base._action.call(e,g,e.actions,e.root())
})
}else{this.unbind(f);
c._base._action.call(this,g,this.actions,this.root())
}},defaults:{baseClass:"fly-tooltip",hideClass:"fly-tooltip_hidden",extraClass:"",position:"bottom center",arrowSize:10,showDelay:300,hideDelay:300},_rect:c._mixin.rect,_position:c._mixin.position});
c.dropdown=c._base.extend({actions:{click:"onclick"},onclick:function(){this.toggle()
},onresize:function(){if(this.hidden()){return
}this.root().css(this._position())
},_action:function(e){c._base._action.apply(this,arguments);
c._base._action.call(this,e,{resize:"onresize"},$(window));
this._autohide(e)
},_autohide:function(h){var g=this;
var f="click"+g.ens+" keydown"+g.ens+" touchstart"+g.ens;
if(!h){return
}this.bind(this.events.show,function(){setTimeout(e,0)
}).bind(this.events.hide,function(){$(document).unbind(f)
});
function e(){$(document).bind(f,function(k){var l=k.target,j=g.root()[0],m=g.handle()[0];
if(k.type==="keydown"&&k.which===27||(k.type==="click"||k.type==="touchstart")&&l!==j&&!$.contains(j,l)&&l!==m&&!$.contains(m,l)){g.hide()
}})
}},defaults:{baseClass:"fly-dropdown",hideClass:"fly-dropdown_hidden",extraClass:"",position:"bottom center",arrowSize:10},_rect:c._mixin.rect,_position:c._mixin.position});
$.fly=c;
c.register$=function(f,e){if(e===c._base||!(e instanceof c._base._ctor)||$.fn[f]){return
}var g="fly_"+f+"_"+(+new Date());
$.fn[f]=function(h){var k;
this.each(function(n){if(k){return false
}var m=$(this);
var l=m.data(g);
switch(h){case"instance":k=l;
break;
case"destroy":j(l);
break;
default:j(l);
m.data(g,e.create(m,h))
}});
return k||this;
function j(l){if(l){l.handle().removeData(g);
l._destroy()
}}}
};
$.each(c,c.register$)
})();
B.define("lists/lists-api/lists-api",function(d,c,f){function g(h){return $.extend({},h||{},{aid:B.env.aid||B.env.b_aid,lang:B.env.b_lang_for_url,sid:B.env.b_sid,stype:B.env.b_site_type_id||"",currency:B.env.b_selected_currency,label:B.env.b_label,partner_channel_id:B.env.partner_id,stid:B.env.b_stid})
}function e(h){h.data=g(h.data);
return $.ajax($.extend(h,{type:"POST"}))
}f.exports={API:{_prepareParams:g,request:function(h,j,k){return e({url:h,data:$.extend({},j),success:function(l){return(k||$.noop)(l)
}})
},list:function(h,j){return e({url:"/wishlist/get",data:$.extend({with_hotels:1,include_availability:1},h),success:function(k){return(j||$.noop)(k)
}})
},listById:function(j,h){return e({url:"/wishlist/get",data:{with_hotels:1,include_availability:1,id:j},success:function(k){return(h||$.noop)(k)
}})
},updateHotels:function(h,j){return e({url:"/wishlist/save_hotels",data:{list:h.list_id,hotel_ids:h.hotel_ids.join(","),new_states:h.states.join(",")},success:function(k){(j||$.noop)(k)
}})
},updateList:function(h,j){return e({url:"/wishlist/update",data:h,success:function(k){if(k.success){B.eventEmitter.trigger("lists:api:update",h);
(j||$.noop)(k)
}}})
},createList:function(h,j){return e({url:"/wishlist/create",data:$.extend(h,{name:String(h.name),privacy:String(h.privacy)}),success:function(k){(j||$.noop)(k)
}})
},removeList:function(h,j){if(B.listmap){B.listmap.trigger("del_list")
}return e({url:"/wishlist/delete",data:{list_id:h.list_id},success:function(k){(j||$.noop)(k)
}})
},updateTag:function(h,j){if(B.listmap){B.listmap.trigger(h.is_deleted?"del_tag":"added_tag")
}return e({url:"/tag_item",data:{item_id:h.list_id,tags:h.tags,is_deleted:h.is_deleted||0,type:h.type},success:function(k){(j||$.noop)(k)
}})
},updateNote:function(h,j){if(B.listmap){B.listmap.trigger("save_note")
}return e({url:"/wishlist/add_note",data:{list_id:h.list_id,hotel_id:h.hotel_id,note:h.note},success:function(k){(j||$.noop)(k)
}})
},removeHotel:function(h,j){return e({url:"/wishlist/save_hotel",data:{hotel_id:h.hotel_id,lists:h.lists,new_state:0},success:function(k){(j||$.noop)(k)
}})
},getRecentlyViewed:function(h,j){return e({url:"/wishlist/recently_viewed_hotel",data:{limit:h.limit,list_id:h.list_id},success:function(k){(j||$.noop)({hotels:k})
}})
},getAvailability:function(h,j){return e({url:"/wishlist/get_or_update_wishlist_hotels_dates",data:$.extend({hotel_ids:h.hotel_ids.join(","),checkin:h.checkin,checkout:h.checkout,list_id:h.list_id||""},h.additional),success:function(k){(j||$.noop)(k)
}})
}},type:{RECENTLY_VIEWED:"3"},currentHotel:function(){var h={b_hotel_id:B.env.b_hotel_id,b_hotel_name:B.env.b_hotel_name,b_hotel_image_url_square60:B.env.b_hotel_image_url_square60,b_hotel_url:"",b_hotel_image_url_square150:""};
if(h.b_hotel_image_url_square60){h.b_hotel_image_url_square150=h.b_hotel_image_url_square60.replace("square60","square150")
}if(!h.b_hotel_image_url_square150&&B.env.b_hotel_image_url_square90){h.b_hotel_image_url_square150=B.env.b_hotel_image_url_square90.replace("square90","square150")
}if(B.env.b_action==="hotel"){h.b_hotel_url=location.href
}return h
},getIdFromUrl:function(j){var k=/wl_id=([a-zA-Z0-9-_]+)/;
var h=j.match(k);
return String(h&&h[1])
},getLastChangedListId:function(){var h=B.env.b_reg_user_last_used_wishlist;
if(h){return h&&h[0]&&h[0].b_reg_user_detail_list_id
}return"0"
},storedProperty:function(j,h){if(window.b&&window.b.storage){if(typeof h!=="undefined"){window.b.storage({key:j,value:String(h),location:"cookies"})
}return String(window.b.storage({key:j,location:"cookies"}))
}else{if(typeof h!=="undefined"){$.cookie(j,String(h),{domain:"booking.com",path:"/"})
}return $.cookie(j)
}}}
});
B.define("lists/lists-tools/lists-tools",function(d,c,e){e.exports={pick:function(g){var f={};
$.each(Array.prototype.slice.call(arguments,1),function(j,h){f[h]=g[h]
});
return f
},stringifyUrl:function(k,j,g){j=j||"&";
g=g||"=";
var f=[];
for(var h in k){if(k.hasOwnProperty(h)){f.push(h+g+k[h])
}}return f.join(j)
},keys:Object.keys,throttle:(function(){var g=function(){};
try{g=B.tools.functions.throttle
}catch(h){g=function(f){return f()
}
}return g
})(),ellipsis:function(g,f){if(g.length<f){return g
}return g.slice(0,f)+"&hellip;"
},htmlEncode:(function(){var g=function(){};
try{g=B.tools.string.htmlEncode
}catch(h){g=function(f){return f
}
}return g
})(),htmlDecode:(function(){var g=function(){};
try{g=B.tools.string.htmlDecode
}catch(h){g=function(f){return f
}
}return g
})()}
});
B.define("lists/lists-store/lists-store",function(h,j,f){var e=h("../lists-api/lists-api").API;
var m=booking.promise;
if(booking.promise){m=booking.promise
}else{m=function(){var n=$.Deferred();
n.fulfill=n.resolve;
return n
}
}function c(o){var n=booking[sNSStartup].wlData;
if(!n){return
}setTimeout(function(){n.clearCache();
B.eventEmitter.trigger(n.EVENTS.EDITHOTEL,o)
},0)
}function k(n){return String(n.b_id||n.b_hotel_id||n.hotel_id||n.id)
}function g(n,o){n.on=function(p,q){B.eventEmitter.bind(o+p,function(){var r=Array.prototype.slice.call(arguments,1);
q.apply(B.eventEmitter,r)
});
return this
};
n.emit=function(p){var q=Array.prototype.slice.call(arguments,1);
B.eventEmitter.trigger(o+p,q)
}
}function l(){var n=[];
this._lists=n;
this._requestsInProgress={};
this._fetchedHotelIds={};
this._backCompatibility=true;
g(this,"listStore_")
}l.prototype.getHotelId=k;
l.prototype.backCompatibility=function(n){this._backCompatibility=n
};
l.prototype._prepareHotelsData=function(n){var o=this;
n.forEach(function(r,q,p){r.index=q;
r.index_is_first=q===0;
r.index_is_last=q===p.length-1;
o.emit("hotel:init",r)
});
return n
};
l.prototype._prepareListsData=function(n,p){var o=this;
p=p||{};
n.forEach(function(q){q.hotels_count=q.hotels_count||0;
if(p.hotel_id){if(!q.hotels){q.hotels=[]
}if(q.selected){q.hotels.push({id:p.hotel_id})
}}o._prepareHotelsData(q.hotels||[])
});
return n
};
l.prototype.getListById=function(o){var n={};
this._lists.forEach(function(p){n[p.id]=p
});
return n[o]
};
l.prototype.getListByDefaultListId=function(o){var n=null;
this._lists.forEach(function(p){if(p.default_list&&parseFloat(p.default_list)===o){n=p
}});
return n
};
function d(n,o){return(new Array(n+1)).join(String(o)).split("")
}l.prototype.toggleHotel=function(p){var o=m(),n=this.getHotelById(p);
if(n){this.removeHotels({hotels:[n],list_id:p.list_id}).then(function(q){o.fulfill({res:q,state:false})
})
}else{this.addHotels({hotels:[{hotel_id:p.hotel_id}],list_id:p.list_id}).then(function(q){o.fulfill({res:q,state:true})
})
}return o
};
l.prototype.addHotels=function(q){var o=this,p=m();
var n=q.hotels.map(k);
this.emit("list:changed:loading",true,q);
e.updateHotels({list_id:q.list_id,hotel_ids:n,states:d(q.hotels.length,1)},function(r){var t=o.getListById(q.list_id);
t.hotels=t.hotels||[];
Array.prototype.push.apply(t.hotels,o._prepareHotelsData(r.hotels_data));
if(typeof t.hotels_count!=="undefined"){t.hotels_count+=1
}B.eventEmitter.trigger("lists:hotels:added",q);
o.emit("list:changed:loading",false,q);
o.emit("list:changed",t,{hotel_ids:n});
p.fulfill(r);
if(!o._backCompatibility){return
}c({params:{hotel_id:n[0],lists:q.list_id},result:r})
});
return p
};
l.prototype.getListByIndex=function(n){return this._lists[n]
};
l.prototype.removeHotels=function(r){var o=this,q=m();
var p=o.getListById(r.list_id);
r.hotels.forEach(function(u){var t=o.getHotelIndexById({hotel_id:k(u),list_id:p.id});
if(t!==-1){p.hotels.splice(t,1)
}});
B.eventEmitter.trigger("hotels:before:removed",r);
var n=r.hotels.map(k);
this.emit("list:changed:loading",true,r);
e.updateHotels({list_id:r.list_id,hotel_ids:n,states:d(r.hotels.length,0)},function(t){if(p.hotels_count){p.hotels_count-=r.hotels.length
}B.eventEmitter.trigger("hotels:removed",r);
o.emit("list:changed:loading",false,r);
o.emit("list:changed",p,{hotel_ids:n});
q.fulfill(t);
if(!o._backCompatibility){return
}c({params:{hotel_id:n[0],lists:r.list_id,new_state:0},result:t})
});
return q
};
l.prototype.createList=function(p){var n=this,o=m();
e.createList($.extend(p,{name:p.name}),function(q){if(!q.success||!q.id){return o.reject(q)
}n._lists.push(q);
q.hotels=[];
q.hotels_count=0;
if(p.hotel_id){q.hotels.push({hotel_id:p.hotel_id});
q.hotels_count++
}n.emit("list:created",q,{hotel_ids:[p.hotel_id]});
B.eventEmitter.trigger("lists:created",p);
o.fulfill(q)
});
return o
};
l.prototype.updateList=function(p){var o=m();
var n=this.getListById(p.list_id);
$.extend(n,p);
e.updateList(p,function(q){o.fulfill(q)
});
return o
};
l.prototype.getHotels=function(o){var n=this;
var p=m();
if(o.hotels&&o.hotels.length>0&&Number(o.hotels_count)===o.hotels.length&&o.hotels[0].name){p.fulfill(o);
return p
}n.emit("list:hotels:loading",true);
e.list({id:o.id,with_hotels:1,include_availability:1},function(q){if(!q.success){return p.reject(q)
}var r=q.lists[0];
o.hotels=n._prepareHotelsData(r.hotels);
if(r&&r.travel_group){o.travel_group=r.travel_group
}n.emit("list:hotels:loading",false);
p.fulfill(o)
});
return p
};
l.prototype.removeList=function(p){var o=this;
var n=-1;
this._lists.forEach(function(q,r){if(String(p.list_id)===String(q.id)){n=r
}});
if(n===-1){return
}this._lists.splice(n,1);
e.removeList({list_id:p.list_id},function(){o.emit("list:removed",p)
})
};
l.prototype._find=function(r){var p=this,o=null,n=-1;
var q=p.getListById(r.list_id);
if(r.list_id){q.hotels.forEach(function(t,u){if(k(t)===String(r.hotel_id)){o=t;
n=u
}})
}else{p._lists.forEach(function(t){t.hotels.forEach(function(u,w){if(k(u)===String(r.hotel_id)){o=u;
n=w
}})
})
}return{index:n,res:o}
};
l.prototype.getHotelById=function(n){return this._find(n).res
};
l.prototype.getHotelIndexById=function(n){return this._find(n).index
};
l.prototype.fetch=function(r){r=r||{};
var p=this;
var q=m();
if(this._requestsInProgress[JSON.stringify(r)]){return this._requestsInProgress[JSON.stringify(r)]
}if(p._lists.length>0){if(r.hotel_id){if(p._fetchedHotelIds[r.hotel_id]){q.fulfill({lists:p._lists});
return q
}}else{q.fulfill({lists:p._lists});
return q
}}this._requestsInProgress[JSON.stringify(r)]=q;
if(!r.hotel_id){p.emit("liststore:loading",true)
}function o(t){p._lists.length=0;
Array.prototype.push.apply(p._lists,p._prepareListsData(t.lists,r));
p.emit("liststore:loading",false);
p._requestsInProgress[JSON.stringify(r)]=null;
q.fulfill(t)
}function n(u){p._fetchedHotelIds[r.hotel_id]=true;
var t=p._prepareListsData(u.lists,r);
t.forEach(function(x){var w=p.getListById(x.id);
if(w){if(!w.hotels){w.hotels=[]
}x.hotels.forEach(function(z){var y=p.getHotelById({list_id:w.id,hotel_id:p.getHotelId(z)});
if(!y){w.hotels.push(z)
}})
}else{p._lists.push(x)
}});
p._requestsInProgress[JSON.stringify(r)]=null;
q.fulfill(u)
}if(r.hotel_id){e.list($.extend({},r),n)
}else{e.list($.extend({},r),o)
}return q
};
l.prototype.clearCache=function(){this._lists.length=0
};
f.exports=new l()
});
B.define("lists/listview-header/listview-header",function(f,e,g){var c=f("../listview-dropdown/listview-dropdown");
var d=f("../lists-store/lists-store");
function h(){var l=this;
var j={RENAME:".js-listview-header-list-rename",REMOVE:".js-listview-header-list-remove"};
function k(){var m=d._lists.length<=1;
l.el.find(j.REMOVE).toggleClass("g-hidden",m)
}d.on("list:removed",$.proxy(k,l));
d.on("list:created",$.proxy(k,l));
this.el.delegate(j.RENAME,"click",function(m){m.preventDefault();
c.renameList.call(l,l.getCurrentList())
});
this.el.delegate(j.REMOVE,"click",function(m){m.preventDefault();
c.removeList.call(l,l.getCurrentList())
})
}g.exports=h
});
B.define("lists/listview-touch/listview-touch",function(d,c,e){function f(){$(document.body).toggleClass("listview--is-tablet",B.env.b_is_tdot_traffic);
B.eventEmitter.bind("foldout:login:success",function(){if(!window.listView){return
}window.listView.clearCache()
})
}f.isEnabled=function(){return B.env.b_is_tdot_traffic
};
e.exports=f
});
B.define("lists/listview-dropdown/listview-dropdown",function(f,e,g){var j=f("../lists-tools/lists-tools");
var d=f("../lists-store/lists-store");
var h=f("../listview-touch/listview-touch");
function c(){var k=this;
var l="listview__dropdown";
if(h.isEnabled()){l+=" listview__dropdown--touch"
}$.fly.dropdown.extend({defaults:{position:"bottom center",extraClass:l,content:function(){return B.jstmpl("listview_dropdown").render({lists:$.map(d._lists,function(m){return $.extend({name_short:j.ellipsis(m.name,18)},m)
}),lists_count:d._lists.length,currentList:k.getCurrentList(),b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,b_lang:B.env.b_lang})
}},onrootready:function(){var m=10004;
var n=this;
n.bind("show",function(){B.eventEmitter.trigger("listview:open-dropdown")
});
n.root().css("z-index",m).delegate(".js-listview-change-list","click",function(o){o.preventDefault();
var p=$(o.currentTarget).data("id");
k.setCurrentList({id:p});
n.hide()
}).delegate(".js-listview-rename-list","click",function(o){o.preventDefault();
o.stopPropagation();
var q=$(o.currentTarget).closest(".listview__list").data("id"),p=k.getListById(q);
c.renameList.call(k,p);
n.hide()
}).delegate(".js-listview-remove-list","click",function(o){o.preventDefault();
o.stopPropagation();
var p=$(o.currentTarget).closest(".listview__list").data("id");
c.removeList.call(k,{id:p},function(){n.hide()
})
}).delegate(".js-listview-create-list","click",function(p){p.preventDefault();
p.stopPropagation();
var o=$.trim(window.prompt(B.jstmpl.translations("lists_map_list_name"),""));
if(!o){return
}d.createList({name:o}).then(function(q){k.setCurrentList({id:q.id});
n.hide()
})
})
}}).delegate(".js-listview-header-dropdown")
}c.renameList=function(l){var k=$.trim(window.prompt(B.jstmpl.translations("dsf_rename_list_dialogue"),l.name));
if(!k){return
}d.updateList({list_id:l.id,name:j.htmlEncode(k)});
this.renderHeader()
};
c.removeList=function(l,m){var k=$.trim(B.jstmpl.translations("wishlist_delete_prompt"));
if(window.confirm(k)){d.removeList({list_id:l.id});
B.eventEmitter.trigger("listview:remove-list");
if(m){m()
}}};
g.exports=c
});
B.define("lists/listview-travel-party/listview-travel-party",function(e,d,f){var g=e("../lists-tools/lists-tools");
function c(j){setTimeout(function(){j.resizeLightbox()
},300)
}function h(){var j=this;
if(!B.env.b_is_wishlist_singlepage){j.el.find(".b-selectbox__groupselection").bind("change",function(){c(j)
})
}B.eventEmitter.bind("change:list:hotels",function(k,l){var m=l.travel_group;
if(!m||$.isEmptyObject(m)){m={rooms:1,adults:2,children:0}
}if(Number(m.rooms)===1&&Number(m.children)===0){if(B.search.group("adults")===Number(m.adults)){return
}}B.search.group(m);
if(!B.env.b_is_wishlist_singlepage){c(j)
}})
}h.buildUrlPart=function(){var j=B.env.b_query_params_delimiter;
var l=$.map(B.search.group("childrenAges"),function(m){return"age="+m
}).join(j);
var k=j+g.stringifyUrl({group_rooms:B.search.group("rooms"),group_adults:B.search.group("adults"),group_children:B.search.group("children")},j)+j+l;
return k
};
h.buildAvailabilityParams=function(){var j=g.pick(B.search.group("value"),"rooms","adults","children","childrenAges");
if(j.childrenAges){j.childrenAges=j.childrenAges.join(" ")
}return{additional:j}
};
f.exports=h
});
B.define("lists/listview-calendar/listview-calendar",function(e,d,f){var h=e("../lists-tools/lists-tools");
var c=e("../listview-hotel/listview-hotel");
var g=e("../listview-availability/listview-availability");
function j(){if(B.calendar2){j._bindEvents.call(this)
}}j._bindEvents=function(){function n(q,o,p){q.availability[o]=p.toString();
q.availability[o+"_localized_date_short"]=B.formatter.date(p.toString(),"short_date_without_year")
}var m=0;
var l=this;
var k=null;
this.el.find(".b-form-checkin .b-datepicker").calendar2($.extend({},B.calendar2.checkinOptions,{lazy:false}));
this.el.find(".b-form-checkout .b-datepicker").calendar2($.extend({},B.calendar2.checkoutOptions,{lazy:false}));
B.eventEmitter.bind("SEARCH:date_changed",function(o,p){if(!k){return
}if(p.type==="checkin"){n(k,"checkin",p.value)
}if(p.type==="checkout"){n(k,"checkout",p.value)
}if(!k.availability.checkout){j.ensureDates();
n(k,"checkout",B.search.dates("checkout"))
}if(!k.availability.checkin){j.ensureDates();
n(k,"checkin",B.search.dates("checkin"))
}m=setTimeout(function(){if(m){window.clearTimeout(m)
}if(!k){return
}g.checkAvailability({list:l.getCurrentList(),hotels:[k],dates:h.pick(k.availability,"checkin","checkout")});
B.eventEmitter.trigger("listview:check-single-hotel-availability");
k=null
},100)
});
this.el.delegate(".js-listview-toggle-calendar","click",function(p){p.preventDefault();
k=l.getHotelFromEvent(p);
c.setHotelProperty(k,"edit",true);
var o=$(p.currentTarget).attr("data-type");
setTimeout(function(){l.el.find(".b-form-"+o+" .b-datepicker").trigger("showCalendar")
},0)
})
};
j.ensureDates=function(){if(!(B.search.dates("checkin") instanceof B.Search.Date)||!(B.search.dates("checkout") instanceof B.Search.Date)){var k=new Date();
B.search.dates("checkin",{date:k.getDate(),month:k.getMonth(),year:k.getFullYear()});
if(B.search.dates("checkout") instanceof B.Search.MonthDate){B.search.dates("checkout",{date:1,month:B.search.dates("checkout").month,year:B.search.dates("checkout").year})
}}};
f.exports=j
});
B.define("lists/listview-note/listview-note",function(f,e,g){var d=f("../lists-api/lists-api").API;
function h(j){$(j).find("textarea").each(function(){this.setAttribute("style","height:"+(this.scrollHeight-5)+"px; overflow-y:hidden;")
}).bind("input",function(){this.style.height="auto";
this.style.height=(this.scrollHeight-5)+"px"
})
}function c(){$.extend(this,{noteInput:function(l,m){var k=this.getHotelNodeById(l.id);
var j=k.find(".js-listview-note-text");
if(typeof m==="string"){j.val(m)
}return j.val()
},toggleNote:function(l,j){var k=this.getHotelNodeById(l.id);
k.find(".js-listview-note").toggleClass("g-hidden",!j);
if(j){k.find(".js-listview-note-text").focus()
}h(k)
},toggleWrapper:function(l,j){var k=this.getHotelNodeById(l.id);
var m=k.find(".js-listview-note-toggle-wrapper");
m.css("visibility",j?"visible":"hidden")
},toggleNoteControls:function(l,j,m){var k=this.getHotelNodeById(l.id);
k.find(".listview-note__controls").toggleClass("g-hidden",!j);
if(m&&m.blur){k.find(".js-listview-note-text").blur()
}},showSavedConfirmation:function(m){if(m.note===""){return
}var l=this.getHotelNodeById(m.id);
var j="listview-note__saved--showing";
var k=l.find(".js-listview-note-saved");
k.addClass(j);
setTimeout(function(){k.removeClass(j)
},2000)
},setHotelNote:function(l){var j=this;
var k=this.getHotelById(l);
k.note=l.note;
this.noteInput(k,l.note);
d.updateNote({list_id:l.list_id,hotel_id:l.hotel_id,note:l.note},function(){j.showSavedConfirmation(k)
})
},_bindNoteEvents:function(){var j=this;
this.delegateEvents({"click .js-listview-note-toggle":function(k){k.preventDefault();
var l=this.getHotelFromEvent(k);
this.toggleWrapper(l,false);
this.toggleNote(l,true)
},"mousedown .js-listview-note-save":function(k){k.preventDefault();
var l=this.getHotelFromEvent(k);
this.setHotelNote({hotel_id:l.id,list_id:this.currentList().id,note:this.noteInput(l)});
this.toggleNoteControls(l,false,{blur:true})
},"mousedown .js-listview-note-remove":function(k){k.preventDefault();
var l=this.getHotelFromEvent(k);
this.toggleWrapper(l,true);
this.toggleNote(l,false);
this.setHotelNote({hotel_id:l.id,list_id:this.currentList().id,note:""});
this.toggleNoteControls(l,false,{blur:true})
},"blur .js-listview-note-text":function(k){var l=this.getHotelFromEvent(k);
$(k.currentTarget).removeClass("listview-note__text--active");
this.toggleNoteControls(l,false);
if(!l.note&&!this.noteInput(l)){this.toggleNote(l,false);
this.toggleWrapper(l,true)
}},"focus .js-listview-note-text":function(k){var l=this.getHotelFromEvent(k);
$(k.currentTarget).addClass("listview-note__text--active");
this.toggleNoteControls(l,true)
}});
B.eventEmitter.bind("listview:rendered:hotels",function(){h(j.el)
});
B.eventEmitter.bind("listview:rendered:hotel",function(k,l){h(l)
})
}});
return this
}g.exports=c
});
B.define("lists/listview-tabs/listview-tabs",function(e,d,f){function c(g){this._el=g.el;
if(this._el.length===0){return
}this._currentTab=null;
this.currentTab(g.current);
this.onSwitch=g.onSwitch
}c.prototype.currentTab=function(h){if(typeof h==="undefined"){return this._currentTab
}var j=this._el.find('[data-tab="'+h+'"]');
if(j.length===0){throw new Error("[listview-tabs] No such tab")
}this._currentTab=h;
var g=j.data("tab-template");
if(g&&j.children().length===0){j.html(B.jstmpl(g).render())
}if(typeof this.onSwitch==="function"){this.onSwitch(h,j)
}this._el.find("[data-tab]").not(j).addClass("g-hidden");
j.removeClass("g-hidden")
};
f.exports=c
});
B.define("lists/listview-share/listview-share",function(e,d,f){function c(){var h=this;
if(B.env.auth_level==="0"){this.delegateEvents({"click .js-listview-share-link":function(k){k.preventDefault();
B.lightbox.hide();
g();
B.command("show-auth-lightbox").run()
}});
return
}var j=$.fly.dropdown.extend({defaults:{position:"bottom center",extraClass:"listview-share",content:function(){return B.jstmpl("listview_share").render(h.getCurrentList())
}},selectInput:function(){function k(){this.root().find(".js-listview-share-url").select()
}setTimeout(k.bind(this),100)
},handleClick:function(k){k.preventDefault();
this.selectInput()
},onrootready:function(){var k=10004;
this.bind("show",this.selectInput.bind(this));
this.root().css("z-index",k).delegate(".js-listview-share-url","click",this.handleClick.bind(this));
g()
}});
j.delegate(".js-listview-share-link")
}var g=function(){B.track.custom_goal("PcVBcOcHeCWOOMSXe",1)
};
f.exports=c
});
B.define("lists/listview-map/listview-map",function(d,c,e){var g=d("../listview-touch/listview-touch");
var f=d("../listview-template/listview-template");
var j={engine:"html",className:"js-listview-map-hotel-iw"};
function h(k){this.el=k.el;
this.onSwitch=k.onSwitch
}h.isSupported=function(){return !g.isEnabled()&&typeof B.atlas==="object"&&(B.env.b_action==="hotel"||B.env.b_action==="searchresults")
};
h.prototype.adjust=function(l){var k=this;
setTimeout(function(){k._map.resize();
var m=l.map(function(n){return[n.b_latitude,n.b_longitude]
});
setTimeout(function(){if(m.length>0){k._map.setBoundingBox(m)
}},0)
},0)
};
h.prototype._render=function(l){var k=this;
var m=l.hotels.map(function(n){return $.extend({},f.prepare(n),{b_id:n.id,b_type:"listview_hotel",b_latitude:n.latitude,b_longitude:n.longitude})
});
this._map.closeIW();
k._iwOpen=false;
this._map.clearMarkers();
this._map.addMarkers(m);
this.adjust(m)
};
h.prototype.getMap=function(){var k=this;
var l=new B.promise();
if(this._map){l.fulfill(this._map);
return l
}B.atlas.require(["jQuery","atlas"],function(n,m){var o=new m({modules:["bounds","hover","icons-default","iw","markers","styles-default","zoom"],options:{id:"listview-map",domNode:k.el,center:[4.275886905723929,9.839630126953125],zoom:2,zoomControl:true,mapTypeControl:false,panPosition:"TOP_RIGHT"}});
o.done(function(){window._listview_map=o;
k._map=o;
l.fulfill(o)
})
});
return l
};
h.prototype.bindEvents=function(){var k=this;
this.el.bind("click",function(){if(k._map&&k._iwOpen){k._map.closeIW();
k._iwOpen=false
}});
this.getMap().then(function(l){l.setIW(j);
l.on("marker-click",function(m){k._iwOpen=false;
B.track.custom_goal("PcVBcdEQJZNKe",3);
l.panTo([m.data.b_latitude,m.data.b_longitude]);
l.openIW(m.id,null,B.jstmpl("listview_map_hotel").render($.extend(m.data,{is_map:true})));
setTimeout(function(){k._iwOpen=true
},0)
})
})
};
e.exports=h
});
B.define("lists/lists-listview/lists-listview",function(l,z,f){var t=l("../lists-tools/lists-tools");
var u=l("../lists-api/lists-api");
var p=l("../lists-api/lists-api").API;
var j=l("../lists-store/lists-store");
var r=l("../listview-dropdown/listview-dropdown");
var e=l("../listview-travel-party/listview-travel-party");
var o=l("../listview-calendar/listview-calendar");
var q=l("../listview-header/listview-header");
var n=l("../listview-touch/listview-touch");
var g=l("../listview-tabs/listview-tabs");
var k=l("../listview-note/listview-note");
var d=l("../listview-share/listview-share");
var w=l("../listview-header/listview-create-list");
var x=l("../listview-map/listview-map");
var y=l("../listview-template/listview-template");
var c=l("../listview-hotel/listview-hotel");
var m=l("../listview-availability/listview-availability");
function h(C){var A=this;
this.el=C.el;
this._currentList={id:"",hotels:[],name:"",url:"",privacy:"",hotels_count:0};
this.store=j;
this._isShown=false;
j.on("hotel:init",function(D){m.setHotelAvailability(D,D.availability||{},{updateNights:true,silent:true})
});
if(n.isEnabled()){n.call(this)
}this.tabs=new g({el:this.el,current:"main",onSwitch:function(D){if(B.track.getVariant("PcVBcdEQJZNKe")){if(D==="main"||D==="map"){A.renderHeader()
}if(D==="map"){A.map._render(A.getCurrentList());
if(!B.env.b_is_wishlist_singlepage){A.resizeLightbox()
}}}}});
if(!n.isEnabled()&&B.track.getVariant("PcVBcdEQJHPTQYO")){k.call(this)
}if(B.track.getVariant("PcVBcdEQJZNKe")&&x.isSupported()){this.map=new x({el:this.el.find(".js-listview-map")})
}}h.prototype.renderHeader=function(){var A=B.jstmpl("listview_header").render($.extend({currentList:this.getCurrentList(),currentTabName:this.tabs.currentTab(),isMapSupported:x.isSupported()},y.getEnv()));
this.el.find(".js-listview-header-wrapper").html(A)
};
h.prototype.getHotelById=function(A){A.list_id=A.list_id||this.getCurrentList().id;
return j.getHotelById(A)
};
h.prototype.getHotelNodeById=function(A){return this.el.find('.listview-hotel[data-id="'+String(A)+'"]')
};
h.prototype.getHotelFromEvent=function(C){var A=$(C.currentTarget).closest(".listview-hotel");
var D=A.attr("data-id");
return A&&this.getHotelById({hotel_id:D})
};
h.prototype.delegateEvents=function(D){for(var A in D){var C=A.split(" ");
this.el.delegate(C[1],C[0],D[A].bind(this))
}return this
};
h.prototype._bindEvents=function(){var C=this;
j.on("list:hotels:loading",function(E){C.tabs.currentTab(E?"loader":"main")
});
j.on("list:removed",function(F){if(String(C.getCurrentList().id)!==String(F.list_id)){return
}var E=j.getListByIndex(0);
if(!E){return
}C.setCurrentList(E)
});
j.on("change:hotel_b_undo",function(E){C.renderHotel(E);
p.updateHotels({list_id:C.getCurrentList().id,hotel_ids:[E.hotel_id],states:[E.b_undo?0:1]})
});
j.on("change:hotel_loading",function(E){C.getHotelNodeById(E.id).toggleClass("listview-hotel--loading",E.loading)
});
j.on("change:hotel_hidden",function(E){setTimeout(function(){var F=C.getHotelNodeById(E.id);
if(E.hidden){F.hide()
}else{F.slideDown()
}},0)
});
B.eventEmitter.bind("change:list",function(E,F){if(F){j.getHotels(F).then(function(){C.renderHotels(F);
B.eventEmitter.trigger("change:list:hotels",F)
});
C.renderHeader()
}});
B.eventEmitter.bind("lists:hotels:added",function(){C.setCurrentList({id:C.getCurrentList().id})
});
B.eventEmitter.bind("hotels:before:removed",function(E,G){var F=G.hotels[0];
C.getHotelNodeById(F.id).slideUp(function(){C.updateRootClassNames();
C.renderHeader()
})
});
B.eventEmitter.bind("change:hotel",function(E,F){C.renderHotel(F)
});
var A=false;
this.delegateEvents({"click .js-go-to-list":function(){B.eventEmitter.trigger("listview:go-to-listmap-page")
},"click .js-listview-hotel-title":function(){B.eventEmitter.trigger("listview:click-on-hotel-link")
},"click .js-listview-hotel-image":function(){B.eventEmitter.trigger("listview:click-on-hotel-image")
},"click .js-listview-book":function(){B.eventEmitter.trigger("listview:book-now-clicked")
},"click .js-check-availability":function(E){E.preventDefault();
o.ensureDates();
if(!A){A=true
}B.eventEmitter.trigger("listview:check-all-hotels-availability");
m.checkAvailability({list:this.getCurrentList(),dates:{checkin:B.search.dates("checkin").toString(),checkout:B.search.dates("checkout").toString()}})
},"click .js-listview-add":function(E){E.preventDefault();
j.addHotels({hotels:[u.currentHotel()],list_id:this.getCurrentList().id})
},"click .js-listview-add-hotel":function(F){F.preventDefault();
B.track.stage("PcVBcdEQJZNJdQDbMXCeFIfEQYKe",1);
var E=$(F.currentTarget).attr("data-hotel-id");
j.addHotels({hotels:[{b_hotel_id:E}],list_id:this.getCurrentList().id})
},"click .js-remove-hotel":function(E){E.preventDefault();
var F=this.getHotelFromEvent(E);
c.setHotelProperty(F,"b_undo",true)
},"click .js-listview-undo":function(E){E.preventDefault();
var F=this.getHotelFromEvent(E);
c.setHotelProperty(F,"b_undo",false)
},"click .js-listview-footer-signin-link":function(E){E.preventDefault();
B.lightbox.hide();
B.command("show-auth-lightbox").run()
},"click .js-listview-footer-remove-msg":function(E){E.preventDefault();
C.toggleSigninBlock(false)
},"click .js-listview-tab-toggle-map":function(E){E.preventDefault();
if(this.tabs.currentTab()==="main"){B.track.custom_goal("PcVBcdEQJZNKe",2);
this.tabs.currentTab("map")
}else{B.track.custom_goal("PcVBcdEQJZNKe",1);
this.tabs.currentTab("main")
}},"click .js-listview-signin-banner-remove":function(E){E.preventDefault();
$.cookie("tfl_listview_show_signin_banner",1,{expires:999,path:"/"});
this.renderHotels(this.getCurrentList())
}});
if(!B.env.b_is_wishlist_singlepage){$(window).resize(t.throttle(function(){C.resizeLightbox()
},1000))
}o.call(this);
r.call(this);
if(!n.isEnabled()){e.call(this)
}q.call(this);
if(B.track.getVariant("PcVBcdEQJHebCHe")){d.call(this)
}if(B.track.getVariant("PcVBcdEQJPTJECJPLcPC")){w.call(this)
}this._bindGA();
if(!n.isEnabled()&&B.track.getVariant("PcVBcdEQJHPTQYO")){this._bindNoteEvents()
}if(B.track.getVariant("PcVBcdEQJZNKe")&&x.isSupported()){this.map.bindEvents()
}if(B.track.getVariant("PcVBcdEQJZXNbBMPCDXQDZET")){var D=l("../listview-custom-order/listview-custom-order");
this.delegateEvents(D.events)
}};
h.prototype.toggleSigninBlock=function(A){this.el.find(".js-listview-footer-signin").toggleClass("g-hidden",!A);
if(!A){$.cookie("tfl_listview_lightbox_show_signin_block",1,{expires:999,path:"/"})
}if(!B.env.b_is_wishlist_singlepage){this.resizeLightbox()
}};
h.prototype._bindGA=function(){var A=["listview:show","listview:hide","listview:open-dropdown","listview:go-to-listmap-page","listview:remove-hotel","listview:check-single-hotel-availability","listview:check-all-hotels-availability","listview:remove-list","listview:book-now-clicked","listview:click-on-hotel-link","listview:click-on-hotel-image"];
B.eventEmitter.bind(A.join(" "),function(C){var D={loggedIn:B.env.b_user_auth_level_is_low?"logged_in":"logged_out",pb:B.env.b_reg_user_detail_bookings_count,ac:B.env.b_action};
if(this.getCurrentList()&&this.getCurrentList().hotels){$.extend(D,{L:j._lists.length,H:this.getCurrentList().hotels.length,pr:this.getCurrentList().privacy})
}B.google.trackEvent("Listview",C.type.toString(),t.stringifyUrl(D," : "))
}.bind(this))
};
h.prototype.clearCache=function(){return j.clearCache()
};
h.prototype.getLists=function(){var C={};
$.extend(C,{with_hotels:0,include_availability:0});
var A=j.fetch(C);
return A
};
h.prototype.getListById=function(A){return j.getListById(A)
};
h.prototype.getCurrentList=function(){return this._currentList
};
h.prototype.setCurrentList=function(C){var A=this;
this._currentList=this.getListById(C.id);
if(!this._currentList){return null
}setTimeout(function(){B.eventEmitter.trigger("change:list",A._currentList);
A.lastSelectedListId=A._currentList.id
},0);
return this._currentList
};
h.prototype.renderHotel=function(C){var A=B.jstmpl("listview_hotel").render(y.prepare(C));
this.getHotelNodeById(C.id).replaceWith(A);
B.eventEmitter.trigger("listview:rendered:hotel",this.getHotelNodeById(C.id))
};
h.prototype.renderHotels=function(F){var D=this;
var E=$.extend({hotels_count:F.hotels_count,hotels:F.hotels.map(function(G){return y.prepare(G)
}),showListsSurvey:B.env.showListsSurvey},y.getEnv(),u.currentHotel());
var C=this.el.find(".js-listview-hotels"),A=B.jstmpl("listview_hotels").render(E);
C.html(A);
if(typeof C.loadComponents==="function"){C.loadComponents()
}this.updateRootClassNames();
if(!B.env.b_is_wishlist_singlepage){setTimeout(function(){D.resizeLightbox()
},0)
}B.eventEmitter.trigger("listview:rendered:hotels");
return this
};
h.prototype.updateRootClassNames=function(){var A=this.getCurrentList();
var C=B.jstmpl("listview_root_classnames").render({b_action:B.env.b_action,shown:this._isShown,isEmpty:A.hotels&&A.hotels.length===0,currentList:A,singlePage:B.env.b_is_wishlist_singlepage});
this.el.get(0).className=C
};
h.prototype.show=function(){var C=this;
if(!this._binded){this._bindEvents();
this._binded=true
}C._isShown=true;
B.eventEmitter.trigger("listview:show",this);
B.events.trigger("listview:show",this);
var A="listview_lightbox";
this.updateRootClassNames();
this.renderHeader();
B.track.exp("PcVBcdEQJHSYBDGTKHReCJIKe");
if(!B.env.b_is_wishlist_singlepage){B.lightbox.show(C.el,{bAnimation:!B.track.getVariant("PcVBcdEQJHSYBDGTKHReCJIKe"),customWrapperClassName:A,hideCallBack:function(){B.eventEmitter.trigger("listview:hide");
C._isShown=false;
C.updateRootClassNames()
}})
}$(".user_center_popover").hide();
if(B.env.b_action==="myreservations"){setTimeout(function(){$(".modal-mask").css("zIndex",10003)
},0)
}if(B.env.auth_level<1&&!$.cookie("tfl_listview_lightbox_show_signin_block")&&this.getCurrentList().hotels_count>2){this.toggleSigninBlock(true)
}if(B.env.auth_level>0){B.track.exp("PcVBcdEQJPACQMFEeRfMZAKe")
}B.track.exp("PcVBcdEQJHebCHe");
if(this.getCurrentList().hotels_count>0){B.track.exp("PcVBcdEefCfbTfQHO")
}if(x.isSupported()){B.track.exp("PcVBcdEQJZNKe")
}};
h.prototype.isShown=function(){return this._isShown
};
h.prototype.resizeLightbox=function(){var E=this.el.find(".listview-footer").outerHeight();
E=E>0?(E+15):E;
var D=$(".listview_lightbox").height();
var C=this.el.find(".listview__controls");
var A=C.is(":visible")?this.el.find(".listview__controls").outerHeight():0;
this.el.find(".js-listview-hotels").height(D-(75+A)-E);
if(B.track.getVariant("PcVBcdEQJZNKe")){this.el.find(".js-listview-map").height(D-this.el.find(".listview_lightbox__header").outerHeight())
}};
f.exports=h
});
B.define("component/lists/listview-empty-list",function(e,d,f){var c=e("../lists-api/lists-api").API;
var g={_hotels:[],get:function(j){var h=this;
c.getRecentlyViewed({limit:5},function(k){h._hotels=k.hotels;
j(null,h._hotels)
})
}};
f.exports=e("component").extend({tmpl:B.jstmpl("listview_empty_list_recently_viewed"),state:{recentlyViewedHotels:[]},setState:function(h){$.extend(this.state,h);
this.render()
},fetch:function(){var h=this;
g.get(function(k,j){h.setState({recentlyViewedHotels:j})
})
},render:function(){var h=this.tmpl.render(this.state);
this.$el.html(h);
this.$el.find(".js-listview-empty-list-recently-viewed").hide().slideDown()
},init:function(){this.render();
this.fetch()
}})
});
B.define("lists/listview-template/listview-template",function(e,d,f){var h=e("../lists-tools/lists-tools");
var j=e("../listview-travel-party/listview-travel-party");
var g=e("../listview-touch/listview-touch");
var c=e("../lists-store/lists-store");
f.exports={getEnv:function(){return{b_action:B.env.b_action,b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,has_cookie_tfl_listview_show_signin_banner:Boolean($.cookie("tfl_listview_show_signin_banner")),is_desktop:B.env.b_site_type_id==="1",is_logged_in:B.env.auth_level>0,b_lang_is_rtl:B.env.rtl,is_inside_listview:1,b_reg_user_wishlist_remaining:B.env.b_reg_user_wishlist_remaining}
},buildHotelLink:function(q,p){var o="maxotel_rooms";
var n="editDates";
var l=q.url.indexOf("http")===0?q.url:(B.env.b_nonsecure_hostname+q.url),k=B.env.b_query_params_delimiter;
var m=q.availability&&q.availability.checkin&&q.availability.checkout;
if(m){l=l+k+h.stringifyUrl(h.pick(q.availability,"checkin","checkout"),k)
}if(!g.isEnabled()){l+=j.buildUrlPart()
}if(p&&p.from_list){l=l+k+"from_list=1"
}if(B.env.b_label){l=l+k+"label="+B.env.b_label
}if(p&&p.goToRoomTable){l=l+"#"+(m?o:n)
}return l
},prepare:function(o,k){var m={from_list:1};
var l=35;
if(B.track.getVariant("PcVBcdEQJPIZAZOHYO")){$.extend(m,{goToRoomTable:true})
}var n=$.extend({},o,{id:c.getHotelId(o),b_guest_country:B.env.b_guest_country,b_countrycode:o.cc1,b_bookings_owned:B.env.b_bookings_owned,b_partner_channel_id:B.env.b_partner_channel_id,absolute_url:this.buildHotelLink(o),book_now_url:this.buildHotelLink(o,m),has_availability:(!$.isEmptyObject(o.availability)&&typeof o.availability.is_available!=="undefined"),available:Boolean(o.availability.is_available),edit:Boolean(o.edit),hotel_min_rate_num:parseFloat(o.hotel_min_rate_num),hotel_review_score_non_localized:parseFloat(o.hotel_review_score_non_localized?o.hotel_review_score_non_localized:o.hotel_review_score),name_ellipsis:(o.name&&o.name.length>l)?o.name.slice(0,l)+"&hellip;":o.name},this.getEnv(),k);
if(n.availability){if(n.availability.checkin&&n.availability.checkout){n.availability.nights=B.Search.createDate(n.availability.checkout).valueOf()-B.Search.createDate(n.availability.checkin).valueOf()
}n.min_rate_availability=n.availability.is_available?n.availability.price:undefined;
n.b_rooms_left=n.availability.rooms_available
}return n
}}
});
B.define("lists/listview-custom-order/listview-custom-order",function(g,f,h){var e=g("../lists-api/lists-api").API;
var d=g("../lists-store/lists-store");
function c(n){var l=d._find({list_id:n.list_id,hotel_id:n.hotel_id});
var j=d.getListById(n.list_id).hotels;
if(!j){return
}var k=j[l.index];
var m=l.index+n.direction;
if(!j[l.index]||!j[m]){return
}j[l.index]=j[m];
j[m]=k;
j[m].b_move=true;
setTimeout(function(){j[m].b_move=false
},100);
j.forEach(function(q,p,o){q.index=p;
q.index_is_first=p===0;
q.index_is_last=p===o.length-1
});
e.request("/wishlist/update_hotels_order",{hotel_ids:j.map(d.getHotelId).join(","),list_id:n.list_id})
}h.exports={events:{"click .js-listview-hotel-move":function(j){j.preventDefault();
var l=this.getHotelFromEvent(j);
var k=$(j.currentTarget).attr("data-direction")==="up"?-1:1;
c({hotel_id:l.id,list_id:this.getCurrentList().id,direction:k});
this.renderHotels(this.getCurrentList())
}}}
});
B.define("lists/listview-hotel/listview-hotel",function(e,d,f){var c=e("../lists-store/lists-store");
f.exports={setHotelProperty:function(j,h,g){j[h]=g;
c.emit("change:hotel_"+h,j,h);
return j
}}
});
B.define("lists/listview-availability/listview-availability",function(g,f,h){var e=g("../lists-api/lists-api").API;
var d=g("../lists-store/lists-store");
var c=g("../listview-hotel/listview-hotel");
var j=g("../listview-touch/listview-touch");
var k=g("../listview-travel-party/listview-travel-party");
h.exports={setHotelAvailability:function(n,m,l){n.availability=m;
if(!(l&&l.silent)){B.eventEmitter.trigger("change:hotel",n)
}},checkAvailability:function(p,r){var m=this;
var n=p.list;
var o=p.dates;
var l=p.hotels||n.hotels;
l.forEach(function(t){c.setHotelProperty(t,"loading",true)
});
var q=$.extend({hotel_ids:l.map(d.getHotelId),list_id:n.id},o);
if(!j.isEnabled()){$.extend(q,k.buildAvailabilityParams())
}e.getAvailability(q,function(t){l.forEach(function(w){c.setHotelProperty(w,"edit",false);
c.setHotelProperty(w,"loading",false);
var u=d.getHotelId(w);
if(t[u]){m.setHotelAvailability(w,t[u],{updateNights:true})
}});
if(r){r()
}})
}}
});
B.define("lists/listview-header/listview-create-list",function(f,e,g){var j=f("../lists-tools/lists-tools");
var d=f("../lists-store/lists-store");
var h=f("../listview-touch/listview-touch");
function c(){var l=this;
var k="PcVBcdEQJPTJECJPLcPC";
$(".js-listview-create-list").live("click",function(n){n.preventDefault();
n.stopPropagation();
var o=$(n.target);
B.track.custom_goal(k,1);
var m=$.trim(window.prompt(B.jstmpl.translations("lists_map_list_name"),""));
if(!m){return
}d.createList({name:m}).then(function(p){l.setCurrentList({id:p.id});
B.track.custom_goal(k,2);
if(p.remaining<1){B.env.b_reg_user_wishlist_remaining=0
}})
})
}g.exports=c
});
B[sNSExperiments]["PcVBcdEQJHReMfbHFZILJDKe"]={init:function(){B.eventEmitter.bind("listview:rendered:hotels listview:rendered:hotel",function(){setTimeout(function(){$(".listview-rack-rate-animated, .listview-price-animated").removeClass("listview-rack-rate-animated listview-price-animated")
},1500)
})
}};
B[sNSExperiments]["PcVBcdEefQORYQYT"]={saveSurveyStatus:function(e){var d=$("#lists_survey");
if(e=="yes"){var c=window.open(b_lists_survey_url,"booking_lists_survey_window")
}else{d.remove()
}$.get("/survey?decision="+e+"&survey_key="+booking.env.lists_survey_key,{},function(f){d.remove()
})
},init:function(){var c=this;
B.eventEmitter.bind("lists:survey",function(){$("#surv_buttons button").live("click",function(d){var f=$(d.target);
if(f.hasClass("survey_yes")){c.saveSurveyStatus("yes")
}else{c.saveSurveyStatus("no")
}})
})
}};
B.define("require_absolute",function(d,c,e){e.exports=function(f){return d(f.replace(/^.*components\//g,""))
}
});
function init(){B.require(["require_absolute"],function(e){var c="PNDLaNLcPbAC";
var h=B.env.b_is_tdot_traffic;
var o=e("../../components/lists/lists-api/lists-api");
var m=e("../../components/lists/lists-store/lists-store");
var j=e("../../components/lists/lists-listview/lists-listview");
function g(p){p.getLists().then(function(){var q=p.getListById(o.getLastChangedListId());
if(p.lastSelectedListId){p.setCurrentList({id:p.lastSelectedListId})
}else{if(q){p.setCurrentList({id:q.id})
}else{p.setCurrentList({id:m.getListByIndex(0).id})
}}p.show()
})
}if(h){if(!B.track.getVariant(c)){return
}}if(!B.env.is_listview_page){return
}var n=new j({el:$(".listview_lightbox__container")});
window.listView=n;
$(".js-uc-listview-lightbox").click(function(p){p.preventDefault();
if(h){$(".select_foldout").hide()
}g(n)
});
if(B.env.b_run_tfl_move_away_from_lightbox){$(".js-uc-wishlists-trigger").click(function(p){p.preventDefault();
window.location.href=B.env.b_wishlist_singlepage_url;
return
})
}var l=function(){if(n&&!n.isShown()){n.clearCache()
}};
B.eventEmitter.bind("wl:create",l);
B.eventEmitter.bind("wl:edithotel",l);
var k=$.grep([".js-wishlist-added-to-name-link",".js-open-list",'.js-uc-notification-link[href*="wl_id="]','a[href*="/mywishlist"][href*="wl_id="]'],Boolean);
$(document.body).undelegate(".wl-dropdown-link","click");
$(document.body).delegate(k.join(","),"click",function(p){if(!B.env.is_listview_page){return
}if(B.env.b_run_tfl_move_away_from_lightbox){window.location.href=p.target.href;
return
}var q=o.getIdFromUrl($(p.currentTarget).attr("href"));
if(q){p.preventDefault();
n.getLists().then(function(){n.setCurrentList({id:q});
n.show()
})
}});
if(B.env.b_is_wishlist_singlepage){var f=o.getIdFromUrl(window.location.href);
if(f!="null"&&B.env.auth_level>0){n.getLists().then(function(){n.setCurrentList({id:f});
n.show()
})
}else{g(n)
}$(".listview__controls").stick_in_parent({sticky_class:"listview__controls--sticky"})
}var d=$("#uc_wishlists_trigger.to_open");
if(d.length){B.track.exp("PcVBcZaFLUTFeFfYXFbQKae");
if(B.track.getVariant("PcVBcZaFLUTFeFfYXFbQKae")){d.removeClass(".to_open").click()
}}})
}B[sNSStartup].listView={init:init};
booking[sNSStartup].wlData=(function(k){var j={};
var c={EDIT:"wl:edit",FETCH:"wl:fetch",CREATE:"wl:create",REMOVE:"wl:remove",EDITHOTEL:"wl:edithotel",EDITHOTELSTART:"wl:edithotelstart",EDITHOTELS:"wl:edithotels",EDITHOTELSSTART:"wl:edithotelsstart",LOADINGSTART:"wl:loadingstart",LOADINGEND:"wl:loadingend"};
var h={RECENTLY_VIEWED:3};
function g(l){return $.extend(l||{},{aid:booking.env.b_aid,lang:booking.env.b_lang_for_url,sid:booking.env.b_sid,stype:booking.env.b_site_type_id,stid:booking.env.b_stid,label:booking.env.b_label})
}function f(l,o){o=g(o);
var m=l+$.param(o);
if(m in j){return j[m]
}var n=booking.promise();
d(c.LOADINGSTART,{params:o});
$.ajax({type:"POST",url:l,data:o,success:function(p){n.fulfill({params:o,result:p})
},error:function(p){n.reject(p)
},complete:function(){d(c.LOADINGEND,{params:o})
}});
j[m]=n;
return n
}function d(l,m){k.eventEmitter.trigger(l,m);
return m
}function e(n){var m="is_new";
var l="creation_timestamp";
var o=["is_collaborated","privacy","selected"];
$.each(n,function(p,q){$.each(o,function(r,t){if(t in q){q[t]=Boolean(Number(q[t]))
}});
if(l in q){q[m]=q[l]*1000>new Date()-24*60*60*1000
}})
}return{init:function(){},EVENTS:c,TYPE:h,edit:function(){},fetch:function(l){return f("/wishlist/get",l).then(function(m){e(m.result.lists);
return d(c.FETCH,m)
})
},create:function(l){this.clearCache();
return f("/wishlist/create",l).then(function(n){e([n.result]);
if(typeof l.hotel_ids==="string"){var m=l.hotel_ids.split(",");
$.each(m,function(o,p){d(c.EDITHOTEL,{params:$.extend({hotel_id:p,lists:n.result.id},n.params),result:n.result})
})
}return d(c.CREATE,n)
})
},remove:function(){},editHotels:function(n){this.clearCache();
d(c.EDITHOTELSSTART,n);
var m=n.hotel_ids;
var l=(new Array(m.length+1)).join("1").split("");
if($.isArray(m)){n.hotel_ids=m.join(",")
}return f("/wishlist/save_hotels",$.extend({new_states:l.join(",")},n)).then(function(o){$.each(m,function(p,q){d(c.EDITHOTELS,{params:$.extend({hotel_id:q},o.params),result:o.result})
});
return o
})
},editHotel:function(l){this.clearCache();
d(c.EDITHOTELSTART,l);
return f("/wishlist/save_hotel",l).then(function(m){return d(c.EDITHOTEL,m)
})
},clearCache:function(){j={}
},bind:function(m,n,l){k.eventEmitter.bind(m,function(){n.apply(l,arguments)
})
}}
})(booking);
B.define("lists/lists-recently-viewed/lists-recently-viewed",function(h,g,j){var d=h("../lists-api/lists-api");
var f=h("../lists-api/lists-api").API;
var e=h("../lists-store/lists-store");
var c=[];
j.exports={recentlyViewedHotels:c,addHotelsToList:function(l){var k=this;
e.addHotels({list_id:l.id,hotels:k.recentlyViewedHotels}).then(function(){k.onAddedtoList(l)
})
},onAddedtoList:function(l){this.renderAddRecentlyViewedToList({success:1,recently_viewed_list_name:l.name,recently_viewed_list_url:l.url});
if(window.listView){var k=window.listView;
k.setCurrentList({id:l.id});
k.show()
}},toggleLoader:function(k){$(".js-add-recently-viewed-to-list-loader").toggleClass("g-hidden",!k)
},addBinds:function(){var k=this;
function l(){var o=e.getListByDefaultListId(d.type.RECENTLY_VIEWED);
if(B.env.auth_level<1){o=e.getListById("0")
}var n=booking.promise();
if(!o){var m=$.trim($(".js-uc-viewed-hotels-trigger").text());
n.fulfill(e.createList({name:m,default_list:d.type.RECENTLY_VIEWED}))
}else{n.fulfill(o)
}n.then(function(p){k.addHotelsToList(p)
})
}$(".uc_viewedhotels").delegate(".js-save-recently-viewed","click",function(){var m={};
if(B.track.getVariant("fERXeNRJTBYbBeaPbPELXVC")!=2){m.limit=5
}k.toggleLoader(true);
f.getRecentlyViewed(m,function(n){k.recentlyViewedHotels=n.hotels;
e.fetch({}).then(l)
})
})
},renderAddRecentlyViewedToList:function(m){var l=$(".uc_viewedhotels .user_search_item:not(.no_listing)").length;
if(l===0){return
}var k=$.extend(m,{wl_recently_viewed_loader:B.tools.jsStaticUrl("/static/img/wl-recently-viewed-loader.gif"),properties_length:l});
$(".save-recently-viewed-container").remove();
$(".popover_footer_add_to_list").prepend(B.jstmpl("lists_recently_viewed").render(k))
},init:function(){booking.eventEmitter.bind("uc_recently_viewed_loaded",this.renderAddRecentlyViewedToList.bind(this));
this.addBinds()
}}
});
booking[sNSStartup].t_wishlist_on_navbar=(function(d,e){var l="dropdown_wishlist",g=null,f=null,m=null,j=false;
function o(){g=d[sNSExperiments].ng_last_viewed||null;
f=e("#top_wishlist_wrapper");
m=f.find(".js-uc-wishlists-content");
e("#top_wishlist").bind("click",k);
e("#top_wishlist_wrapper .js-uc-wishlists-form-title").live("blur",c);
e(document.body).delegate(".wishlists_popover_alert a","click",function(){e(".wishlists_popover_alert").hide()
})
}function k(p){p.preventDefault();
if(!g||!g.isVisibleOverlay){return
}if(g.isVisibleOverlay()&&g.click===l){g.distroyOverlay()
}else{g.createOverlay();
g.click=l;
e(".milk_menu, #top_lw_wrapper").hide();
f.show();
n()
}}function n(){if(j){return
}var p=d.require("lists/lists-store/lists-store");
p.fetch({without_hotels:1}).then(function(q){j=true;
m.html(h(q))
})
}function h(r){var q="/mywishlist"+booking.env.b_query_params_with_lang;
if(d.env.b_is_villa_site){q="/"+booking.env.b_lang_for_url+"/mywishlist"+(booking.env.b_query_params_without_lang||d.env.b_query_params_with_lang)
}var p=e.extend({},r,{wlUrlStart:booking.env.domain_for_book+q+booking.env.b_query_params_delimiter+"wl_id=",b_user_auth_level_is_low_or_high:Boolean(d.env.b_user_auth_level_is_low_or_high||Number(d.env.auth_level)>0)});
return booking.jstmpl("lists_header").render(p)
}function c(){e("body").animate({scrollTop:0})
}return{init:o}
})(booking,jQuery,jQuery(window));
B.define("lists/lists-header-button/lists-header-button",function(e,d,f){var c=e("../lists-store/lists-store");
var g=e("../listview-touch/listview-touch");
var h=B.track.getVariant("PcVBcdHKBdEKXO");
f.exports=B.require("component").extend({init:function(){var n=this;
var o=booking[sNSStartup].wlData;
var l=this.$el.find(".js-lists-header-button"),m="lists-header-button--flash",k=[o.EVENTS.EDITHOTEL];
function j(r){var q=n.$el.find(".lists-header-button__count"),p=Number($.trim(q.text()));
p=Math.max(p+r,0);
q.text(p);
q.toggleClass("g-hidden",p===0)
}B.eventEmitter.bind(k.join(" "),function(p,q){l.addClass(m);
setTimeout(function(){l.removeClass(m)
},600)
});
if(h){c.on("list:changed",function(p,q){if(p&&q&&q.hotel_ids){q.hotel_ids.forEach(function(r){var t=c.getHotelById({list_id:p.id,hotel_id:r});
j(t?1:-1)
})
}})
}c.on("liststore:loading",function(p){$(".lists-header-button").toggleClass("lists-header-button--loading",p);
if(g.isEnabled()){$(".js-uc-listview-lightbox").toggleClass("uc-listview-loading",p)
}})
}})
});
B.require(["require"],function(c){var d=c("lists/lists-recently-viewed/lists-recently-viewed");
d.init();
B.define("component/lists-header-button",function(){return c("lists/lists-header-button/lists-header-button")
})
});
/*!
 * accounting.js v0.3.2
 * Copyright 2011, Joss Crowcroft
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://josscrowcroft.github.com/accounting.js/
 */
(function(r,j){var q={};
q.version="0.3.2";
q.settings={currency:{symbol:"$",format:"%s%v",decimal:".",thousand:",",precision:2,grouping:3},number:{precision:0,grouping:3,thousand:",",decimal:"."}};
var t=Array.prototype.map,m=Array.isArray,h=Object.prototype.toString;
function e(w){return !!(w===""||(w&&w.charCodeAt&&w.substr))
}function n(w){return m?m(w):h.call(w)==="[object Array]"
}function u(w){return w&&h.call(w)==="[object Object]"
}function k(x,w){var y;
x=x||{};
w=w||{};
for(y in w){if(w.hasOwnProperty(y)){if(x[y]==null){x[y]=w[y]
}}}return x
}function c(C,A,z){var y=[],x,w;
if(!C){return y
}if(t&&C.map===t){return C.map(A,z)
}for(x=0,w=C.length;
x<w;
x++){y[x]=A.call(z,C[x],x,C)
}return y
}function o(x,w){x=Math.round(Math.abs(x));
return isNaN(x)?w:x
}function g(x){var w=q.settings.currency.format;
if(typeof x==="function"){x=x()
}if(e(x)&&x.match("%v")){return{pos:x,neg:x.replace("-","").replace("%v","-%v"),zero:x}
}else{if(!x||!x.pos||!x.pos.match("%v")){return(!e(w))?w:q.settings.currency.format={pos:w,neg:w.replace("%v","-%v"),zero:w}
}}return x
}var l=q.unformat=q.parse=function(z,w){if(n(z)){return c(z,function(A){return l(A,w)
})
}z=z||0;
if(typeof z==="number"){return z
}w=w||q.settings.number.decimal;
var y=new RegExp("[^0-9-"+w+"]",["g"]),x=parseFloat((""+z).replace(/\((.*)\)/,"-$1").replace(y,"").replace(w,"."));
return !isNaN(x)?x:0
};
var d=q.toFixed=function(y,w){w=o(w,q.settings.number.precision);
var x=Math.pow(10,w);
return(Math.round(q.unformat(y)*x)/x).toFixed(w)
};
var f=q.formatNumber=function(y,C,F,A){if(n(y)){return c(y,function(G){return f(G,C,F,A)
})
}y=l(y);
var w=k((u(C)?C:{precision:C,thousand:F,decimal:A}),q.settings.number),D=o(w.precision),z=y<0?"-":"",x=parseInt(d(Math.abs(y||0),D),10)+"",E=x.length>3?x.length%3:0;
return z+(E?x.substr(0,E)+w.thousand:"")+x.substr(E).replace(/(\d{3})(?=\d)/g,"$1"+w.thousand)+(D?w.decimal+d(Math.abs(y),D).split(".")[1]:"")
};
var p=q.formatMoney=function(y,x,A,F,z,E){if(n(y)){return c(y,function(G){return p(G,x,A,F,z,E)
})
}y=l(y);
var w=k((u(x)?x:{symbol:x,precision:A,thousand:F,decimal:z,format:E}),q.settings.currency),D=g(w.format),C=y>0?D.pos:y<0?D.neg:D.zero;
return C.replace("%s",w.symbol).replace("%v",f(Math.abs(y),o(w.precision),w.thousand,w.decimal))
};
q.formatColumn=function(E,y,C,H,A,G){if(!E){return[]
}var w=k((u(y)?y:{symbol:y,precision:C,thousand:H,decimal:A,format:G}),q.settings.currency),F=g(w.format),D=F.pos.indexOf("%s")<F.pos.indexOf("%v")?true:false,x=0,z=c(E,function(L,J){if(n(L)){return q.formatColumn(L,w)
}else{L=l(L);
var I=L>0?F.pos:L<0?F.neg:F.zero,K=I.replace("%s",w.symbol).replace("%v",f(Math.abs(L),o(w.precision),w.thousand,w.decimal));
if(K.length>x){x=K.length
}return K
}});
return c(z,function(J,I){if(e(J)&&J.length<x){return D?J.replace(w.symbol,w.symbol+(new Array(x-J.length+1).join(" "))):(new Array(x-J.length+1).join(" "))+J
}return J
})
};
if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=q
}exports.accounting=q
}else{if(typeof define==="function"&&define.amd){define([],function(){return q
})
}else{q.noConflict=(function(w){return function(){r.accounting=w;
q.noConflict=j;
return q
}
})(r.accounting);
r.accounting=q
}}}(this));
(function(){if(!(window.accounting&&booking.env.accounting_config)){return
}var e=window.accounting,f=booking.env.accounting_config;
var d={init:function(h){this._current=h
},formatMoney:function(m,j,l){if(B.track.getVariant("MWZNeEXTUSGbMbNNBATINcC")){var k=B.debug("formatMoney");
if(typeof m!=="number"){k.warn("formatMoney expected a number but got a string.",arguments);
if(typeof B.squeak==="function"){B.squeak("MMZXZAQUfUfWcZZYTRXO")
}}}if(typeof j!=="undefined"){if(typeof j==="object"){l=j;
j=this._current
}}else{j=this._current
}if(typeof j==="undefined"){throw"The module hasn't been initiated, so you have to provide currencyCode"
}if(m%1===0){l=l||{};
l.precision=typeof l.precision!=="undefined"?l.precision:"integer"
}var o=(l&&typeof l.is_arabic_number!=="undefined")?l.is_arabic_number:(typeof f.is_arabic_number!=="undefined"?f.is_arabic_number:false);
var n=g(j,l);
var h=e.formatMoney(m,n);
if(o){h=c(h)
}return h
},formatDistanceNumber:function(m,k){var j=this._current,o=g(j,k),n=o.symbol,h=e.formatMoney(m,o),l=new RegExp(n,"g");
h=h.replace(l,"");
h=h.replace(/[^0-9\.\,]/g,"");
return h
},formatDistance:function(l,j){var n,k=booking.env,h={number:l,unit:"m",isImperial:k.distance_config&&k.distance_config!="metric"},m=" ";
j=j||{};
j.unit=j.unit||h.unit;
if(!j.hasOwnProperty("precision")){j.precision=1
}this.changeDistanceToMetricUnit(h,j);
if(h.isImperial){this.convertDistanceToImperial(h,j)
}n=this.formatDistanceNumber(h.number,j);
return n+m+h.unit
},changeDistanceToMetricUnit:function(h,j){var k=h.number;
if(j.unit){switch(j.unit){case"m":h.unit="m";
h.number=h.number;
break;
case"km":h.number=k*0.001;
if(!h.isImperial&&j.autoUnit&&Math.floor(h.number)<1){h.number=k;
j.precision=0;
h.unit="m"
}else{h.unit="km"
}break
}}},convertDistanceToImperial:function(h,j){var k=h.number;
switch(j.unit){case"m":h.unit="yd";
h.number=k*1.0936133;
break;
case"km":h.number=k*0.621371192;
h.unit="mi";
break
}},getOptions:function(){return g(this._current)
}};
d.init(booking.env.b_selected_currency||booking.env.b_hotel_currencycode);
booking.utils=booking.utils||{};
booking.utils.accounting=d;
function g(h,j){j=$.extend(j,{symbolFormat:"%s",valueFormat:"%s"});
j.valueFormat=j.valueFormat.replace("%s","%v");
var p=j.symbolFormat,n=j.valueFormat;
var k=typeof f.html_symbol[h]!=="undefined"?f.html_symbol[h]:h,l=typeof f.decimal_separator[h]!=="undefined"?f.decimal_separator[h]:(typeof f.decimal_separator["default"]!=="undefined"?f.decimal_separator["default"]:"."),q=typeof f.group_separator[h]!=="undefined"?f.group_separator[h]:(typeof f.group_separator["default"]!=="undefined"?f.group_separator["default"]:","),o=(function(t,r){return r==="before"?p+t+n:n+t+p
})(typeof f.currency_separator[h]!=="undefined"?f.currency_separator[h]:(typeof f.currency_separator["default"]!=="undefined"&&h?f.currency_separator["default"]:" "),typeof f.symbol_position[h]!=="undefined"?f.symbol_position[h]:(typeof f.symbol_position["default"]!=="undefined"?f.symbol_position["default"]:"before")),m;
if(typeof f.num_decimals!=="undefined"){m=f.num_decimals["default"]
}if(typeof f.num_decimals!=="undefined"){m=typeof f.num_decimals[h]!=="undefined"?f.num_decimals[h]:m
}if(j.precision==="integer"){m=0
}if(!isNaN(parseInt(j.precision,10))){m=j.precision
}return{symbol:k,decimal:l,thousand:q,format:o,precision:m}
}function c(j){var k=["&#1632;","&#1633;","&#1634;","&#1635;","&#1636;","&#1637;","&#1638;","&#1639;","&#1640;","&#1641;"];
var h="";
h=j.replace(/(?!&#[\d|a-z|A-Z]*)\d(?![\d|a-z|A-Z]*;)/g,function(m,o,n,l){return k[parseInt(m,10)]
});
return h
}}());
$(function(){if(booking.jstmpl){booking.jstmpl.setup(function c(f){if(!f||!f.formatMoney){return{}
}function e(l,k){if(isNaN(l)||l%1!==0){return l
}k=k||{};
k.precision=0;
return f.formatMoney(l,"",k)
}function d(n,m){if(isNaN(n)){return n
}m=m||{};
if(m&&!m.precision){var l=(""+n).split("."),k=(l.length>1?l[1]:"").length;
m.precision=k
}return f.formatMoney(n,"",m)
}function j(o){var k=Math.abs,m;
if(k(o)<50){return o
}if(k(o)<100){m=5
}else{if(k(o)<500){m=10
}else{if(k(o)<1000){m=50
}else{if(k(o)<5000){m=100
}else{if(k(o)<10000){m=500
}else{if(k(o)<50000){m=1000
}else{if(k(o)<100000){m=5000
}else{m=10000
}}}}}}}if((o%m)===0){return o
}else{var l=1;
if(o<0){l=0
}o=Math.floor(o/m);
o=o*m;
if(l){o+=m
}return o
}return -1
}function h(l,k){if(isNaN(l)||l%1!==0){return l
}k=k||{};
k.precision=0;
l=j(l);
return f.formatMoney(l,"",k)
}function g(l,k){return f.formatMoney(l,k)
}return{fn:{format_number:e,format_number_decimal:d,format_number_rounded:h,format_price:g}}
}(booking&&booking.utils&&booking.utils.accounting))
}});
B.define("transitional-tooltips",function(d,c,e){var g=[],f;
return{setup:function(h){g.push("."+h);
B[sNSExperiments][h]={init:function(){f||B.eventEmitter.bind("tooltip.show",f=function(k,j){if($(j).is(g.join(","))){B.track.stage(h,1)
}})
},initElse:function(){var k,j;
$("."+h).bind("mouseenter",k=function(){$(this).bind("mousestay",function(){B.track.stage(h,1);
$(this).unbind("mouseenter",k).unbind("mouseleave",j).unbind("mousestay")
});
setTimeout(function(){$(this).trigger("mousestay")
}.bind(this),B[sNSStartup].rewrite_tt.ttTimeout)
}).bind("mouseleave",j=function(){$(this).unbind("mousestay")
})
}}
},init:function(h){h&&h.forEach(this.setup)
}}
});
B.require("transitional-tooltips").init(B.env.b_loc_tooltips_to_replace);
(function(c,d){if(!d){return
}d.easing.jswing=d.easing.swing;
d.extend(d.easing,{def:"easeOutQuad",swing:function(f,g,e,j,h){return d.easing[d.easing.def](f,g,e,j,h)
},easeInQuad:function(f,g,e,j,h){return j*(g/=h)*g+e
},easeOutQuad:function(f,g,e,j,h){return -j*(g/=h)*(g-2)+e
},easeInOutQuad:function(f,g,e,j,h){if((g/=h/2)<1){return j/2*g*g+e
}return -j/2*((--g)*(g-2)-1)+e
},easeInCubic:function(f,g,e,j,h){return j*(g/=h)*g*g+e
},easeOutCubic:function(f,g,e,j,h){return j*((g=g/h-1)*g*g+1)+e
},easeInOutCubic:function(f,g,e,j,h){if((g/=h/2)<1){return j/2*g*g*g+e
}return j/2*((g-=2)*g*g+2)+e
},easeInQuart:function(f,g,e,j,h){return j*(g/=h)*g*g*g+e
},easeOutQuart:function(f,g,e,j,h){return -j*((g=g/h-1)*g*g*g-1)+e
},easeInOutQuart:function(f,g,e,j,h){if((g/=h/2)<1){return j/2*g*g*g*g+e
}return -j/2*((g-=2)*g*g*g-2)+e
},easeInQuint:function(f,g,e,j,h){return j*(g/=h)*g*g*g*g+e
},easeOutQuint:function(f,g,e,j,h){return j*((g=g/h-1)*g*g*g*g+1)+e
},easeInOutQuint:function(f,g,e,j,h){if((g/=h/2)<1){return j/2*g*g*g*g*g+e
}return j/2*((g-=2)*g*g*g*g+2)+e
},easeInSine:function(f,g,e,j,h){return -j*Math.cos(g/h*(Math.PI/2))+j+e
},easeOutSine:function(f,g,e,j,h){return j*Math.sin(g/h*(Math.PI/2))+e
},easeInOutSine:function(f,g,e,j,h){return -j/2*(Math.cos(Math.PI*g/h)-1)+e
},easeInExpo:function(f,g,e,j,h){return(g==0)?e:j*Math.pow(2,10*(g/h-1))+e
},easeOutExpo:function(f,g,e,j,h){return(g==h)?e+j:j*(-Math.pow(2,-10*g/h)+1)+e
},easeInOutExpo:function(f,g,e,j,h){if(g==0){return e
}if(g==h){return e+j
}if((g/=h/2)<1){return j/2*Math.pow(2,10*(g-1))+e
}return j/2*(-Math.pow(2,-10*--g)+2)+e
},easeInCirc:function(f,g,e,j,h){return -j*(Math.sqrt(1-(g/=h)*g)-1)+e
},easeOutCirc:function(f,g,e,j,h){return j*Math.sqrt(1-(g=g/h-1)*g)+e
},easeInOutCirc:function(f,g,e,j,h){if((g/=h/2)<1){return -j/2*(Math.sqrt(1-g*g)-1)+e
}return j/2*(Math.sqrt(1-(g-=2)*g)+1)+e
},easeInElastic:function(f,h,e,m,l){var j=1.70158;
var k=0;
var g=m;
if(h==0){return e
}if((h/=l)==1){return e+m
}if(!k){k=l*0.3
}if(g<Math.abs(m)){g=m;
var j=k/4
}else{var j=k/(2*Math.PI)*Math.asin(m/g)
}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*l-j)*(2*Math.PI)/k))+e
},easeOutElastic:function(f,h,e,m,l){var j=1.70158;
var k=0;
var g=m;
if(h==0){return e
}if((h/=l)==1){return e+m
}if(!k){k=l*0.3
}if(g<Math.abs(m)){g=m;
var j=k/4
}else{var j=k/(2*Math.PI)*Math.asin(m/g)
}return g*Math.pow(2,-10*h)*Math.sin((h*l-j)*(2*Math.PI)/k)+m+e
},easeInOutElastic:function(f,h,e,m,l){var j=1.70158;
var k=0;
var g=m;
if(h==0){return e
}if((h/=l/2)==2){return e+m
}if(!k){k=l*(0.3*1.5)
}if(g<Math.abs(m)){g=m;
var j=k/4
}else{var j=k/(2*Math.PI)*Math.asin(m/g)
}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*l-j)*(2*Math.PI)/k))+e
}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*l-j)*(2*Math.PI)/k)*0.5+m+e
},easeInBack:function(f,g,e,k,j,h){if(h==undefined){h=1.70158
}return k*(g/=j)*g*((h+1)*g-h)+e
},easeOutBack:function(f,g,e,k,j,h){if(h==undefined){h=1.70158
}return k*((g=g/j-1)*g*((h+1)*g+h)+1)+e
},easeInOutBack:function(f,g,e,k,j,h){if(h==undefined){h=1.70158
}if((g/=j/2)<1){return k/2*(g*g*(((h*=(1.525))+1)*g-h))+e
}return k/2*((g-=2)*g*(((h*=(1.525))+1)*g+h)+2)+e
},easeInBounce:function(f,g,e,j,h){return j-d.easing.easeOutBounce(f,h-g,0,j,h)+e
},easeOutBounce:function(f,g,e,j,h){if((g/=h)<(1/2.75)){return j*(7.5625*g*g)+e
}else{if(g<(2/2.75)){return j*(7.5625*(g-=(1.5/2.75))*g+0.75)+e
}else{if(g<(2.5/2.75)){return j*(7.5625*(g-=(2.25/2.75))*g+0.9375)+e
}else{return j*(7.5625*(g-=(2.625/2.75))*g+0.984375)+e
}}}},easeInOutBounce:function(f,g,e,j,h){if(g<h/2){return d.easing.easeInBounce(f,g*2,0,j,h)*0.5+e
}return d.easing.easeOutBounce(f,g*2-h,0,j,h)*0.5+j*0.5+e
}})
}(window.booking,window.jQuery));
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($,g,d){var e="hashchange",k=document,h,j=$.event.special,l=k.documentMode,f="on"+e in g&&(l===d||l>7);
function c(m){m=m||location.href;
return"#"+m.replace(/^[^#]*#?(.*)$/,"$1")
}$.fn[e]=function(m){return m?this.bind(e,m):this.trigger(e)
};
$.fn[e].delay=50;
j[e]=$.extend(j[e],{setup:function(){if(f){return false
}$(h.start)
},teardown:function(){if(f){return false
}$(h.stop)
}});
h=(function(){var m={},t,p=c(),n=function(u){return u
},o=n,r=n;
m.start=function(){t||q()
};
m.stop=function(){t&&clearTimeout(t);
t=d
};
function q(){var w=c(),u=r(p);
if(w!==p){o(p=w,u);
$(g).trigger(e)
}else{if(u!==p){location.href=location.href.replace(/#.*/,"")+u
}}t=setTimeout(q,$.fn[e].delay)
}$.browser.msie&&!f&&(function(){var u,w;
m.start=function(){if(!u){w=$.fn[e].src;
w=w&&w+c();
u=$('<iframe tabindex="-1" title="empty"/>').hide().one("load",function(){w||o(c());
q()
}).attr("src",w||"javascript:0").insertAfter("body")[0].contentWindow;
k.onpropertychange=function(){try{if(event.propertyName==="title"){u.document.title=k.title
}}catch(x){}}
}};
m.stop=n;
r=function(){return c(u.location.href)
};
o=function(A,x){var z=u.document,y=$.fn[e].domain;
if(A!==x){z.title=k.title;
z.open();
y&&z.write('<script>document.domain="'+y+'"<\/script>');
z.close();
u.location.hash=A
}}
})();
return m
})()
})(jQuery,window);
(function(c){c.fn.hint=function(d){if(!d){d="blur"
}return this.each(function(){var j=c(this),g=j.attr("title"),f=c(this.form),h=c(window);
function e(){if(j.val()===g&&j.hasClass(d)){j.val("").removeClass(d)
}}if(g){j.blur(function(){if(this.value===""){j.val(g).addClass(d)
}}).focus(e).blur();
f.submit(e);
h.unload(e)
}})
}
})(jQuery);
if(!booking.env.no_search_placeholder_ie){$("input#keyword.faq_search_input").hint()
}(function(h,g,m){var l=g.event,k;
l.special.smartresize={setup:function(){g(this).bind("resize",l.special.smartresize.handler)
},teardown:function(){g(this).unbind("resize",l.special.smartresize.handler)
},handler:function(e,p){var o=this,n=arguments;
e.type="smartresize",k&&clearTimeout(k),k=setTimeout(function(){g.event.handle.apply(o,n)
},p==="execAsap"?0:100)
}},g.fn.smartresize=function(c){return c?this.bind("smartresize",c):this.trigger("smartresize",["execAsap"])
},g.Mason=function(d,e){this.element=g(e),this._create(d),this._init()
},g.Mason.settings={isResizable:!0,isAnimated:!1,animationOptions:{queue:!1,duration:500},gutterWidth:0,isRTL:!1,isFitWidth:!1,containerStyle:{position:"relative"}},g.Mason.prototype={_filterFindBricks:function(d){var c=this.options.itemSelector;
return c?d.filter(c).add(d.find(c)):d
},_getBricks:function(d){var c=this._filterFindBricks(d).css({position:"absolute"}).addClass("masonry-brick");
return c
},_create:function(r){this.options=g.extend(!0,{},g.Mason.settings,r),this.styleQueue=[];
var q=this.element[0].style;
this.originalStyle={height:q.height||""};
var p=this.options.containerStyle;
for(var o in p){this.originalStyle[o]=q[o]||""
}this.element.css(p),this.horizontalDirection=this.options.isRTL?"right":"left",this.offset={x:parseInt(this.element.css("padding-"+this.horizontalDirection),10),y:parseInt(this.element.css("padding-top"),10)},this.isFluid=this.options.columnWidth&&typeof this.options.columnWidth=="function";
var n=this;
setTimeout(function(){n.element.addClass("masonry")
},0),this.options.isResizable&&g(h).bind("smartresize.masonry",function(){n.resize()
}),this.reloadItems()
},_init:function(c){this._getColumns(),this._reLayout(c)
},option:function(d,e){g.isPlainObject(d)&&(this.options=g.extend(!0,this.options,d))
},layout:function(x,w){for(var u=0,t=x.length;
u<t;
u++){this._placeBrick(x[u])
}var r={};
r.height=Math.max.apply(Math,this.colYs);
if(this.options.isFitWidth){var q=0;
u=this.cols;
while(--u){if(this.colYs[u]!==0){break
}q++
}r.width=(this.cols-q)*this.columnWidth-this.options.gutterWidth
}this.styleQueue.push({$el:this.element,style:r});
var p=this.isLaidOut?this.options.isAnimated?"animate":"css":"css",o=this.options.animationOptions,n;
for(u=0,t=this.styleQueue.length;
u<t;
u++){n=this.styleQueue[u],n.$el[p](n.style,o)
}this.styleQueue=[],w&&w.call(x),this.isLaidOut=!0
},_getColumns:function(){var d=this.options.isFitWidth?this.element.parent():this.element,c=d.width();
this.columnWidth=this.isFluid?this.options.columnWidth(c):this.options.columnWidth||this.$bricks.outerWidth(!0)||c,this.columnWidth+=this.options.gutterWidth,this.cols=Math.floor((c+this.options.gutterWidth)/this.columnWidth),this.cols=Math.max(this.cols,1)
},_placeBrick:function(F){var E=g(F),D,C,A,z,y;
D=Math.ceil(E.outerWidth(!0)/this.columnWidth),D=Math.min(D,this.cols);
if(D===1){A=this.colYs
}else{C=this.cols+1-D,A=[];
for(y=0;
y<C;
y++){z=this.colYs.slice(y,y+D),A[y]=Math.max.apply(Math,z)
}}var x=Math.min.apply(Math,A),w=0;
for(var u=0,t=A.length;
u<t;
u++){if(A[u]===x){w=u;
break
}}var r={top:x+this.offset.y};
r[this.horizontalDirection]=this.columnWidth*w+this.offset.x,this.styleQueue.push({$el:E,style:r});
var q=x+E.outerHeight(!0),p=this.cols+1-t;
for(u=0;
u<p;
u++){this.colYs[w+u]=q
}},resize:function(){var c=this.cols;
this._getColumns(),(this.isFluid||this.cols!==c)&&this._reLayout()
},_reLayout:function(d){var c=this.cols;
this.colYs=[];
while(c--){this.colYs.push(0)
}this.layout(this.$bricks,d)
},reloadItems:function(){this.$bricks=this._getBricks(this.element.children())
},reload:function(c){this.reloadItems(),this._init(c)
},appended:function(f,e,o){if(e){this._filterFindBricks(f).css({top:this.element.height()});
var n=this;
setTimeout(function(){n._appended(f,o)
},1)
}else{this._appended(f,o)
}},_appended:function(e,d){var f=this._getBricks(e);
this.$bricks=this.$bricks.add(f),this.layout(f,d)
},remove:function(c){this.$bricks=this.$bricks.not(c),c.remove()
},destroy:function(){this.$bricks.removeClass("masonry-brick").each(function(){this.style.position="",this.style.top="",this.style.left=""
});
var f=this.element[0].style;
for(var e in this.originalStyle){f[e]=this.originalStyle[e]
}this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"),g(h).unbind(".masonry")
}},g.fn.imagesLoaded=function(n){function p(){n.call(w,u)
}function o(d){var e=d.target;
e.src!==r&&g.inArray(e,q)===-1&&(q.push(e),--t<=0&&(setTimeout(p),u.unbind(".imagesLoaded",o)))
}var w=this,u=w.find("img").add(w.filter("img")),t=u.length,r="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",q=[];
return t||p(),u.bind("load.imagesLoaded error.imagesLoaded",o).each(function(){var c=this.src;
this.src=r,this.src=c
}),w
};
var j=function(c){h.console&&h.console.error(c)
};
g.fn.masonry=function(d){if(typeof d=="string"){var e=Array.prototype.slice.call(arguments,1);
this.each(function(){var c=g.data(this,"masonry");
if(!c){j("cannot call methods on masonry prior to initialization; attempted to call method '"+d+"'");
return
}if(!g.isFunction(c[d])||d.charAt(0)==="_"){j("no such method '"+d+"' for masonry instance");
return
}c[d].apply(c,e)
})
}else{this.each(function(){var f=g.data(this,"masonry");
f?(f.option(d||{}),f._init()):g.data(this,"masonry",new g.Mason(d,this))
})
}return this
}
})(window,jQuery);
(function(j){var h=B.env.b_is_tdot_traffic?"click touchstart":"click";
var d=false;
var e=0;
var g;
var f;
function c(o){var l=booking.google.growlTracker||"Growl",m="",k="",n="unknown";
if(!f){f=$(window).width()
}m+=(o.textLabel?o.textLabel:n)+"_:";
m+="["+(o.isAutomatic?"onload":"programmatic")+"]";
m+="-"+(o.stay?"1":"0")+"-";
m+="("+(isNaN(o.stayTime)?n:(o.stayTime/1000))+")";
m+="{"+(o.type?o.type:n)+"}";
m+="<"+(o.close?o.close:n)+">";
m+="#"+e+"#";
m+="$"+((f>1620)?"No":"Yes")+"$";
k+=B.env.b_action+"_";
k+=(parseInt(B.env.b_has_valid_dates_not_in_past,10)?"withDate":n);
booking.google.trackEvent(l,m,k)
}j.extend({noticeAdd:function(D){if(!j.canShowNotice()||j.isNoticesDisabled()){return false
}e++;
var o={inEffect:{opacity:"show"},inEffectDuration:600,stayTime:3000,text:"",stay:false,type:"notice",destination:"",platform:"mac",addClassName:"",injectHTML:false,zindex:false,isAutomatic:false,textLabel:null,wrapperClass:""};
var D,x,y,C,z,k,w=false;
D=j.extend({},o,D);
var q=booking.track.getVariant("PYBRRCbbAPQHafJdHZcKWe"),m=booking.track.getVariant("PNRYTYeYCNOSZRRDVZWSLCC"),l=booking.track.getVariant("PNHafDcaRDPNZJQAZFO");
var t=l?"growl_font_stack":"";
var p=navigator&&navigator.platform&&(navigator.platform.indexOf("Mac")==-1&&navigator.platform.indexOf("iPad")==-1&&navigator.platform.indexOf("iPhone")==-1),u=navigator&&navigator.platform&&(navigator.platform.indexOf("Mac")>=0||navigator.platform.indexOf("iPad")>=0||navigator.platform.indexOf("iPhone")>=0);
if(p&&!q&&!m){D.platform="win"
}if(!j(".notice-wrap").length){x=j("<div></div>").addClass("notice-wrap").addClass(D.platform).addClass(D.wrapperClass).appendTo("body");
x[0].id="growl_squash"
}else{x=j(".notice-wrap")
}if(D.zindex!==false&&!isNaN(D.zindex)){x.css("z-index",D.zindex)
}if(D.platform==="win"){w="__placement1"
}var n,r,A;
if(B.env.b_action==="hotel"&&D.platform!=="win"){x.addClass("growls_no_scroll")
}if(B.env.rtl){if(n&&r){w="__placement_"+r
}}if(w){x.addClass(w)
}y=j("<div></div>").addClass("notice-item-wrapper").addClass(t);
k=(D.destination=="")?"<p>"+D.text+"</p>":'<p><a href="'+D.destination+'">'+D.text+"</a></p>";
if(D.close=="all"){C=j("<div></div>").hide().addClass("notice-item "+D.type+" "+D.addClassName).appendTo(x).html(k).animate(D.inEffect,D.inEffectDuration).wrap(y).bind(h,function(F){if(booking.env.b_action==="hotel"){var E=JSON.parse($.cookie("bs"))||{};
E.gc=1;
if(typeof(JSON)!="undefined"){$.cookie("bs",JSON.stringify(E),{path:"/",domain:booking.env.b_domain_end})
}}booking.google.trackEvent(booking.google.clickTracker,"growl_removed",F&&F.target&&$(F.target).closest(".notice-item-close-x").length?"x":"message");
j.noticeRemove(C,D.addClassName,false,true);
return !!D.destination
});
z=j("<div></div>").addClass("notice-item-close-x").prependTo(C)
}else{C=j("<div></div>").hide().addClass("notice-item "+D.type).appendTo(x).html(k).animate(D.inEffect,D.inEffectDuration).wrap(y);
z=j("<div></div>").addClass("notice-item-close-x").prependTo(C).bind(h,function(){j.noticeRemove(C,false,false,true);
if(D.type=="language"){if(typeof(b_cookie)=="undefined"){b_cookie={}
}b_cookie.langPrompt="dontshow";
if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:booking.env.b_domain_end})
}}return false
})
}if(D.injectHTML){C.prepend(D.injectHTML)
}if(D.type=="language"){$(".notice-item p").css("cursor","pointer");
$(".notice-item p").bind(h,function(){$("#langselectformlist").val(booking.env.browser_lang);
$("#languageselect")[0].submit();
j.noticeRemove(C);
return false
})
}if(navigator.userAgent.match(/MSIE 6/i)){x.css({top:document.documentElement.scrollTop})
}if(!D.stay){setTimeout(function(){j.noticeRemove(C,"",1)
},D.stayTime)
}booking.eventEmitter.triggerHandler("growl:show",D);
c(D);
return C
},noticeAddBig:function(l){if(!j.canShowNotice()){return false
}var o={inEffect:{opacity:"show"},inEffectDuration:600,stayTime:3000,text:"",stay:false,type:"notice"};
var l,p,n,m,k;
l=j.extend({},o,l);
p=(!j(".notice-wrap").length)?j("<div></div>").addClass("notice-wrap").appendTo("body"):j(".notice-wrap");
n=j("<div></div>").addClass("notice-item-wrapper");
m=j("<div></div>").hide().addClass("notice-item-big "+l.type).appendTo(p).html("<p>"+l.text+"</p>").animate(l.inEffect,l.inEffectDuration).wrap(n);
k=j("<div></div>").addClass("notice-item-close").prependTo(m).html("x").bind(h,function(){j.noticeRemove(m,false,false,true)
});
if(navigator.userAgent.match(/MSIE 6/i)){p.css({top:document.documentElement.scrollTop})
}if(!l.stay){setTimeout(function(){j.noticeRemove(m)
},l.stayTime)
}},noticeRemove:function(m,l,k,n){if(n){j.setCookieOnClose()
}if(n){B.track.stage("BOebRRDOLcNTBZGHO",1);
if(B.env.b_action){switch(B.env.b_action){case"hotel":B.track.stage("BOebRRDOLcNTBZGHO",2);
break;
case"searchresults":B.track.stage("BOebRRDOLcNTBZGHO",3);
break;
case"book":B.track.stage("BOebRRDOLcNTBZGHO",4);
break;
default:B.track.stage("BOebRRDOLcNTBZGHO",5)
}}}if(n){B.track.custom_goal("HBbOXYZKefOCYDeHdHC",1)
}if(B.env.b_is_tdot_traffic&&n){B.track.custom_goal("PNRYTYeYCNOSZRRDORe",1)
}if((n&&B.env.b_growls_close_fast)||B.track.getVariant("PNRYTYeYCNOSZRRDORe")){m.parent().remove()
}else{m.animate({opacity:"0"},600,function(){m.parent().animate({height:"0px"},300,function(){m.parent().remove()
})
})
}if(l&&l!=""){$("."+l).removeClass(l)
}booking.eventEmitter.triggerHandler("growl:close",{growlElem:m,type:m.attr("class"),isGrowlClickedManually:n});
if(n){booking.events.emit("growl:growlClosedManually",{growlElem:m,type:m.attr("class"),isGrowlClickedManually:n})
}},canShowNotice:function(){var m=true;
var k=parseInt($.cookie("gcmdt"))||false;
if(k!==false){var l=((new Date()).getTime()-k)/1000/60;
if(l<=20){m=false
}}return m
},isNoticesDisabled:function(){return !!(B&&B.env&&B.env.disableNotices)
},setCookieOnClose:function(){if(!booking.env.b_paid_traffic){$.cookie("gcmdt",(new Date()).getTime(),{expires:30,path:"/",domain:booking.env.b_domain_end})
}return
}})
})(jQuery);
(function(c){c.fn.placeholder=function(e){var d=c.extend({attr:"placeholder",emptyClass:"empty"},e);
if(d.attr==="placeholder"&&"placeholder" in document.createElement("input")){return this
}return this.each(function(){var h=c(this),k=h.attr(d.attr),g=h.attr("type")==="password",f="placeholder-polyfill",j;
if(!k||h.hasClass(f)){return
}h.addClass(f);
if(g){j=c('<input type="text" />').attr({value:k,className:h[0].className}).insertAfter(h.hide())
}h.closest("form").submit(function(){if(B.track.getVariant("HBbOcNDMcMddEPXeC")>0){if(h.val()===k){h.val("").removeClass(d.emptyClass)
}}else{h.trigger("focus")
}});
if(h.val()===""){h.val(k).addClass(d.emptyClass)
}h.focus(function(){if(h.val()==k){h.val("").removeClass(d.emptyClass)
}});
h.blur(function(){if(c.trim(this.value)!==""){return
}if(g){h.after(j).hide()
}else{h.val(k).addClass(d.emptyClass)
}});
if(g){j.addClass(d.emptyClass).focus(function(){j.detach();
h.show().focus()
})
}})
}
})(jQuery);
if(booking.env.upgradejq){(function(c){c(["jquery"],function(f){var d=f.scrollTo=function(h,g,j){return f(window).scrollTo(h,g,j)
};
d.defaults={axis:"xy",duration:0,limit:!0};
d.window=function(g){return f(window)._scrollable()
};
f.fn._scrollable=function(){return this.map(function(){var h=this,j=!h.nodeName||f.inArray(h.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;
if(!j){return h
}var g=(h.contentWindow||h).document||h.ownerDocument||h;
return/webkit/i.test(navigator.userAgent)||g.compatMode=="BackCompat"?g.body:g.documentElement
})
};
f.fn.scrollTo=function(l,k,j){if(typeof k=="object"){j=k;
k=0
}if(typeof j=="function"){j={onAfter:j}
}if(l=="max"){l=9000000000
}j=f.extend({},d.defaults,j);
k=k||j.duration;
j.queue=j.queue&&j.axis.length>1;
if(j.queue){k/=2
}j.offset=e(j.offset);
j.over=e(j.over);
return this._scrollable().each(function(){if(l==null){return
}var r=this,n=f(r),o=l,m,g={},q=n.is("html,body");
switch(typeof o){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(o)){o=e(o);
break
}o=q?f(o):f(o,this);
if(!o.length){return
}case"object":if(o.is||o.style){m=(o=f(o)).offset()
}}var p=f.isFunction(j.offset)&&j.offset(r,o)||j.offset;
f.each(j.axis.split(""),function(z,x){var u=x=="x"?"Left":"Top",C=u.toLowerCase(),y="scroll"+u,w=r[y],t=d.max(r,x);
if(m){g[y]=m[C]+(q?0:w-n.offset()[C]);
if(j.margin){g[y]-=parseInt(o.css("margin"+u))||0;
g[y]-=parseInt(o.css("border"+u+"Width"))||0
}g[y]+=p[C]||0;
if(j.over[C]){g[y]+=o[x=="x"?"width":"height"]()*j.over[C]
}}else{var A=o[C];
g[y]=A.slice&&A.slice(-1)=="%"?parseFloat(A)/100*t:A
}if(j.limit&&/^\d+$/.test(g[y])){g[y]=g[y]<=0?0:Math.min(g[y],t)
}if(!z&&j.queue){if(w!=g[y]){h(j.onAfterFirst)
}delete g[y]
}});
h(j.onAfter);
function h(t){n.animate(g,k,j.easing,t&&function(){t.call(this,o,j)
})
}}).end()
};
d.max=function(k,j){var n=j=="x"?"Width":"Height",h="scroll"+n;
if(!f(k).is("html,body")){return k[h]-f(k)[n.toLowerCase()]()
}var m="client"+n,l=k.ownerDocument.documentElement,g=k.ownerDocument.body;
return Math.max(l[h],g[h])-Math.min(l[m],g[m])
};
function e(g){return f.isFunction(g)||f.isPlainObject(g)?g:{top:g,left:g}
}return d
})
}(typeof define==="function"&&define.amd?define:function(d,c){if(typeof module!=="undefined"&&module.exports){module.exports=c(require("jquery"))
}else{c(jQuery)
}}))
}else{(function(f){var c=f.scrollTo=function(d,g,h){f(window).scrollTo(d,g,h)
};
c.defaults={axis:"xy",duration:parseFloat(f.fn.jquery)>=1.3?0:1};
c.window=function(d){return f(window)._scrollable()
};
f.fn._scrollable=function(){return this.map(function(){var d=this,g=!d.nodeName||f.inArray(d.nodeName.toLowerCase(),["iframe","#document","html","body"])!=-1;
if(!g){return d
}var h=(d.contentWindow||d).document||d.ownerDocument||d;
return f.browser.safari||h.compatMode=="BackCompat"?h.body:h.documentElement
})
};
f.fn.scrollTo=function(h,g,d){if(typeof g=="object"){d=g;
g=0
}if(typeof d=="function"){d={onAfter:d}
}if(h=="max"){h=9000000000
}d=f.extend({},c.defaults,d);
g=g||d.speed||d.duration;
d.queue=d.queue&&d.axis.length>1;
if(d.queue){g/=2
}d.offset=e(d.offset);
d.over=e(d.over);
return this._scrollable().each(function(){var p=this,n=f(p),o=h,l,m={},j=n.is("html,body");
switch(typeof o){case"number":case"string":if(/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(o)){o=e(o);
break
}o=f(o,this);
case"object":if(o.is||o.style){l=(o=f(o)).offset()
}}f.each(d.axis.split(""),function(t,u){var x=u=="x"?"Left":"Top",w=x.toLowerCase(),z="scroll"+x,r=p[z],q=c.max(p,u);
if(l){m[z]=l[w]+(j?0:r-n.offset()[w]);
if(d.margin){m[z]-=parseInt(o.css("margin"+x))||0;
m[z]-=parseInt(o.css("border"+x+"Width"))||0
}m[z]+=d.offset[w]||0;
if(d.over[w]){m[z]+=o[u=="x"?"width":"height"]()*d.over[w]
}}else{var y=o[w];
if(!y){return false
}m[z]=y.slice&&y.slice(-1)=="%"?parseFloat(y)/100*q:y
}if(/^\d+$/.test(m[z])){m[z]=m[z]<=0?0:Math.min(m[z],q)
}if(!t&&d.queue){if(r!=m[z]){k(d.onAfterFirst)
}delete m[z]
}});
k(d.onAfter);
function k(q){n.animate(m,g,d.easing,q&&function(){q.call(this,h,d)
})
}}).end()
};
c.max=function(j,k){var o=k=="x"?"Width":"Height",n="scroll"+o;
if(!f(j).is("html,body")){return j[n]-f(j)[o.toLowerCase()]()
}var p="client"+o,g=j.ownerDocument.documentElement,d=j.ownerDocument.body;
return Math.max(g[n],d[n])-Math.min(g[p],d[p])
};
function e(d){return typeof d=="object"?d:{top:d,left:d}
}})(jQuery)
}booking[sNSStartup].aff_new_header_menu={priority:9,opening_state:0,cur_open:"",max_select_height:240,is_ie:0,openSlow:false,init:function(){var e=this,d,d=$(".language_flags").length,c=$(".aff_select_box .aff_current_language_foldout");
if($(".b_msie_6").length){this.is_ie=6
}if($(".b_msie_7").length){this.is_ie=7
}$(".aff_select_box").mouseenter(function(){$(this).addClass("sel_hover")
});
$(".aff_select_box").mouseleave(function(){$(this).removeClass("sel_hover")
});
$("body").click(function(g){if(e.opening_state==2){var f=$(g.target);
if($(f).length){e.closeSelect()
}}});
if(d==3){c.css({width:"600px"})
}else{if(d==2){c.css({width:"400px"})
}else{c.css({width:"200px"})
}}$(".aff_select_box").click(function(f){if(e.opening_state==0){e.openSelect($(this).attr("data-target"),$(this).attr("data-parentclass"))
}else{if(e.cur_open!=$(this).attr("data-target")){e.closeSelect($(this).attr("data-target"),$(this).attr("data-parentclass"))
}else{e.closeSelect()
}}})
},openSelect:function(j,x){oThat=this;
this.cur_open=j;
var d=$("."+j),p=$("."+x),t,n,h;
var r=p.parent(),h=d,g=r.width()/2,l=$(".hybrid-header #personal_form"),f=h.width()/2;
$margin_adjust=f-g,$arrow_margin_adjust=f-8,n=$(".language_flags").length,$pLeft=$(l).css("left");
var k=r.offset().left-$(".hybrid-header").offset().left,y=$(".hybrid-header").width(),q=y-(f+g+k),c=k+g-f;
var u=y/2,w=y/2,m=l.position().left;
u-=100;
w+=100;
if($pLeft=="0px"&&m<u){d.css({left:"0",right:"auto"});
if(d.hasClass("aff_currency_popover")){var e=$($(".uc_top_arrow",d));
e.css({left:"26px"})
}else{var o=$($(".uc_top_arrow",d));
o.css({left:"56px"})
}}else{if(m>u&&m<w){if(d.hasClass("aff_currency_popover")){d.css({width:"802px"})
}else{if(d.hasClass("aff_languages_popover")){if(n==3){d.css({width:"600px"})
}else{if(n==2){d.css({width:"400px"})
}else{d.css({width:"200px"})
}}}}if(q<0&&c>0){$margin_adjust-=q;
$arrow_margin_adjust-=q
}else{if(q>0&&c<0){$margin_adjust+=c;
$arrow_margin_adjust+=c
}else{if(q<0&&c<0){}}}d.css("left",-Math.round($margin_adjust));
$(".aff_user_popover .uc_top_arrow",r).css("left",$arrow_margin_adjust)
}else{if(m>w){if(d.hasClass("aff_currency_popover")){var e=$($(".uc_top_arrow",d));
e.css({left:"630px"});
d.css({left:"auto",right:"-130px"})
}else{var o=$($(".uc_top_arrow",d));
o.css({left:"530px"});
d.css({left:"auto",right:"0px"})
}}}}$("."+x).addClass("sel_open");
this.opening_state=1;
d.css({display:"block",opacity:"1"});
if(this.openSlow){this.openSlow=false;
d.animate({height:iNewHeight+"px"},800)
}else{d.css({height:"auto"})
}setTimeout(function(){oThat.opening_state=2
},200)
},closeSelect:function(d,e){var c=this;
if(this.opening_state==2){$(".aff_user_popover").animate({height:"0px"},200,function(){$(".aff_user_popover").css({display:"none"});
$(".aff_select_box").removeClass("sel_open");
if(d&&d!=null){c.openSelect(d,e)
}});
this.opening_state=0
}}};
booking[sNSStartup].anchorJump={priority:9,init:function(){if($("#newsletterbox .error").length){location.href=location.href+"#errormsg"
}$(".forgotten a, a.forgotten").click(function(){window.open(this.href,"","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=500,height=500,left=200,top=200");
return false
})
}};
(function(d,c){d.appDownloadWidget=(function(){var j={formSelector:".app_widget",inputSelector_sms:".sms_input",inputSelector_email:".email_input",buttonSelector:"button, input[type=submit]",validationPattern_sms:/^[1-9][0-9]{7,24}$/,validationPattern_email:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,autoBind:true,url_sms:"/send_app_sms_v2",url_email:"/send_app_email_v2",type:"sms",msgtype_sms:"app_download_sms",msgtype_email:"app_download_email"};
function k(o){this.options=c.extend({},j,o);
this.$form=c(this.options.formSelector);
if(this.$form.length!==1){throw new Error("Invalid selector! More than one or no instance selected.")
}if(this.options.autoBind){this.bindEvents()
}}k.prototype.bindEvents=function h(){var o=this;
this.$form.bind("submit",function(w){w.preventDefault();
var x=o.options.type,z=o.options["validationPattern_"+x],t=o["send"+(x==="sms"?"Number":"Email")],A=c(this),y=A.find(o.options["inputSelector_"+x]),q=A.data("lang"),p=A.data("source"),u=y.val();
var r={site:A.data("site")||"",page:A.data("page")||d.env.b_action,placement:A.data("placement")||"",device:A.data("device")||d.env.b_browser,variant:A.data("variant")||"",exp:A.data("exp")||"",pincode:A.data("pincode")||"",booknumber:A.data("booknumber")||"",city:A.data("city")||""};
if(!u){return
}if(x==="sms"&&o.options.phone_prefix){u=o.options.phone_prefix+u
}if(!z.test(u)){o.showMessage("validation");
return
}o.hideMessages();
A.find(o.options.buttonSelector).attr("disabled",true);
y.attr("disabled",true);
t.call(o,u,q,p,null,r)
})
};
k.prototype.sendNumber=function e(p,u,r,t,o){var q=c.extend({telno:p,language:u,source:r},o);
g.call(this,"sms",q)
};
k.prototype.sendEmail=function l(p,u,r,t,o){var q=c.extend({email:p,language:u,source:r},o);
g.call(this,"email",q)
};
k.prototype.showMessage=function n(p){var o=this.$form.find("[data-message-type*="+p+"]"),q=this.$form.find("[data-message-type]:visible");
if(o.length>1){o=o.filter("[data-message-for="+this.options.type+"]")
}if(q.get(0)!==o.get(0)){this.hideMessages();
o.slideDown()
}d.eventEmitter.trigger("appWidget:message",p)
};
k.prototype.hideMessages=function m(){this.$form.find("[data-message-type]").hide()
};
k.prototype.setType=function f(o){if({sms:1,email:1}[o]){this.options.type=o
}};
k.prototype.setCountryCode=function(o){this.options.phone_prefix=o
};
function g(o,q){var p=this,r="";
o=o==="email"?"email":"sms";
q.aid=d.env.b_aid;
q.stype=d.env.b_site_type_id;
q.msgtype=p.options["msgtype_"+o];
if(o=="sms"){q.new_queue=1;
q.source+="|nq1";
q.source+="|nqv2_1"
}if(o=="email"){q.source+="|enq1"
}c.ajax({url:p.options["url_"+o],type:"post",data:q,success:function(u){p.showMessage(u.isOk==="true"?"success":"limit");
if(u&&u.isOk==="true"&&d.env.b_action==="apps"&&window.utag_data&&!c.isEmptyObject(window.utag_data)&&window.utag_data.channel_id&&window.utag_data.sid&&d.env.aid){var t='<iframe src="'+document.location.protocol+"//4228414.fls.doubleclick.net/activityi;src=4228414;type=apps;cat=now;u3=";
t+=window.utag_data.channel_id;
t+=";u4="+d.env.aid;
t+=";ord="+window.utag_data.sid+'?"';
t+='width="1" height="1" frameborder="0" style="display:none"></iframe>';
c("#bodyconstraint").prepend(t)
}},error:function(){p.showMessage("network")
}})
}return k
})()
})(booking,jQuery);
B.authLightbox={init:function(){var c=this;
if(c.ready){return
}B.et.stage("MRLLcDHBTeeLFXGSPDJCdfdaFHT",1);
B.eventEmitter.bind("user_access_menu_login_tab user_access_menu_register_tab",function(d,f){f=f||{};
var e=d.type==="user_access_menu_login_tab";
if(!e){B.et.stage("MRLQRWSEeUINIQAIXCWbYHUO",1)
}c.form(f.mode).toggleClass("user-access-menu-lightbox--signin",e).toggleClass("user-access-menu-lightbox--signup",!e);
if(!booking.env.b_is_tdot_traffic){c.form(f.mode).find(".user_access_email").select()
}});
c.ready=true
},show:function(e){var d=this.form(e.mode);
this.rewrite(e);
var c="user-access-menu-lightbox";
if(e.extraClass){c+=" "+e.extraClass
}$("#ng-overlay").hide();
$(".milk_menu").hide();
$(".user_center_popover").hide();
B.lightbox.hide();
B.lightbox.show(d,{bAnimation:!booking.env.b_is_tdot_traffic,customWrapperClassName:c,hideCallBack:function(){d.find(".form-loading").hide();
B.eventEmitter.trigger("auth-dialog:hide",e)
}});
d.find("[data-target=user_access_"+e.tab+"_menu]").trigger("click",e);
if(booking.track.getVariant("MRLQcLPLSdMWSOPOUEcDHET")){this.initManageBooking(d,e)
}B.eventEmitter.trigger("auth-dialog:show",e)
},hide:function(){B.lightbox.hide()
},form:function(c){c=c?"--"+c:"";
return $(".js-user-access-menu-lightbox"+c)
},rewrite:function(e){var d=this;
var c=d.form(e.mode);
$.each(d.rewrites,function(f,g){var h=d.defaults[f];
if(!h){d.defaults[f]=h=g.call(d,c)
}g.call(d,c,f in e?e[f]:h)
})
},defaults:{},rewrites:{titleSignin:function(c,e){var d=c.find(".js-user-access-menu-lightbox__title--signin");
return e!==undefined?d.text(e):d.text()
},titleSignup:function(c,e){var d=c.find(".js-user-access-menu-lightbox__title--signup");
return e!==undefined?d.text(e):d.text()
},targetSignin:function(d,e){var c=d.find(".user_access_signin_menu input[name=target_url]");
return e!==undefined?c.val(e):c.val()
},targetSignup:function(d,e){var c=d.find(".user_access_signup_menu input[name=target_url]");
return e!==undefined?c.val(e):c.val()
},_fbFinalUrl:function(c,e){var d=booking.command.params(c);
if(arguments.length===2){if(typeof e==="string"){d.finalUrl=e
}else{delete d.finalUrl
}booking.command.params(c,d)
}else{return d.finalUrl
}},fbFinalUrlSignin:function(d,e){var c=d.find(".user_access_signin_menu *[data-command=facebook-connect]");
return this.rewrites._fbFinalUrl(c,e)
},fbFinalUrlSignup:function(d,e){var c=d.find(".user_access_signup_menu *[data-command=facebook-connect]");
return this.rewrites._fbFinalUrl(c,e)
}},initManageBooking:function(d,e){var c=d.find(".user_access_menu");
c.unbind(".init-manage-booking");
c.delegate(".js-booking-nr-pin-link","click.init-manage-booking",function(){d.find(".form-section").addClass("form-hidden-section");
d.find(".user_access_resend_confirmation").removeClass("form-hidden-section");
d.find(".user_access_manage_booking_menu").removeClass("form-hidden-section");
d.find(".resend-conf").addClass("resend-conf--absolute")
});
c.delegate(".js-resend-conf__signin-link","click.init-manage-booking",function(){d.find("[data-target=user_access_"+e.tab+"_menu]").trigger("click",e)
})
}};
(function(d,c){c.ensureNamespaceExists(sNSStartup);
c[sNSStartup].bookingSticker=function(){var C,f,q,x,p,w,h,y,u,D,g,z,l,j,k=0;
c[sNSStartup].bookingSticker.stickToZIndex=typeof(c[sNSStartup].bookingSticker.stickToZIndex)==="undefined"?999:c[sNSStartup].bookingSticker.stickToZIndex;
c[sNSStartup].bookingSticker.stickedElements=typeof(c[sNSStartup].bookingSticker.stickedElements)==="undefined"?[]:c[sNSStartup].bookingSticker.stickedElements;
c[sNSStartup].bookingSticker.stickers=typeof(c[sNSStartup].bookingSticker.stickers)==="undefined"?[]:c[sNSStartup].bookingSticker.stickers;
var r=function(K){if((x.scrollTop()+k)>l-f.data("stick-to-offset")){A()
}if((x.scrollTop()+k)<=l-f.data("stick-to-offset")){G()
}};
var J=function(K){f.css("width","auto");
q.css("width","auto").html(f.html());
if(q.is(":visible")){f.css("width",q.width());
m(q)
}else{f.css("width",f.width());
m(f)
}e();
r()
};
var A=function(){if((-parseInt(f.css("top"),10)||0)<parseInt(f.height(),10)&&c[sNSStartup].bookingSticker.stickedElements.indexOf(f)===-1){n();
E()
}if(x.scrollTop()+parseInt(f.height(),10)+f.data("stick-to-offset")>e()){f.css({top:-((x.scrollTop()+parseInt(f.height(),10))-e())});
if(-parseInt(f.css("top"),10)>parseInt(f.height(),10)){o();
E()
}return
}if(j){f.css({top:f.data("stick-to-offset")});
return
}m(f);
f.addClass("sticked").css({top:f.data("stick-to-offset"),"z-index":c[sNSStartup].bookingSticker.stickToZIndex}).before(q);
c[sNSStartup].bookingSticker.stickToZIndex--;
j=true;
n();
E();
B.events.emit(B.hotel.Events.RT.STICKY_STUCK,f);
return
};
var G=function(){if(!j){return
}f.removeClass("sticked").css({top:g,"z-index":z});
q.remove();
c[sNSStartup].bookingSticker.stickToZIndex++;
j=false;
o();
E();
B.events.emit(B.hotel.Events.RT.STICKY_RELEASE,f);
return
};
var n=function(){if(c[sNSStartup].bookingSticker.stickedElements.indexOf(f)===-1){c[sNSStartup].bookingSticker.stickedElements.push(f);
t()
}};
var o=function(){var K=c[sNSStartup].bookingSticker.stickedElements.indexOf(f);
if(K!==-1){c[sNSStartup].bookingSticker.stickedElements.splice(K,1);
t()
}};
var t=function(){c[sNSStartup].bookingSticker.stickedElements.sort(function(L,K){if(L.data("elem-original-offset-top")>K.data("elem-original-offset-top")){return 1
}if(L.data("elem-original-offset-top")<K.data("elem-original-offset-top")){return -1
}return 0
})
};
var E=function(){if(c[sNSStartup].bookingSticker.stickedElements.length>0){for(var L=0;
L<c[sNSStartup].bookingSticker.stickedElements.length;
L++){c[sNSStartup].bookingSticker.stickedElements[L].data("stick-to-offset",0);
if(L>0){var K=L,M=L-1,N=0;
while(M>=0){N+=c[sNSStartup].bookingSticker.stickedElements[M].height();
M--
}c[sNSStartup].bookingSticker.stickedElements[K].data("stick-to-offset",N)
}}}};
var e=function(){var K=C&&C.offset&&C.offset();
u=K?(C.selector==="html"?0:parseInt(K.top,10)):0;
p=parseInt(C.css("border-bottom-width"),10);
h=parseInt(C.css("padding-bottom"),10);
w=u+parseInt(C.height(),10)+h+p;
return w
};
var m=function(L){var M=d(L),K=["inline","inline-block","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group"];
f.css({width:M.width()});
if(K.indexOf(M.css("display"))>1){f.find("td, th").each(function(O,N){var P=d(M.find("td, th").get(O));
d(N).css({width:P.width()})
})
}};
var H=function(){x.bind({scroll:r,resize:J,load:J})
};
var I=function(){if(q.is(":visible")){l=parseInt(q.offset().top,10)
}else{l=parseInt(f.offset().top,10)
}J();
E();
r()
};
var F=function(M,K){C=!!K?d(K):d("html");
y=parseInt(C.height(),10);
f=d(M);
D=parseInt(f.height(),10);
if(!f.length){return
}if(D>=y){return
}var L=c[sNSStartup].bookingSticker.stickers;
if(L.indexOf(this)===-1){L.push(this)
}x=d(window);
elemOriginalCSSDisplay=f.css("display");
emOriginalCSSTop=f.css("top");
z=f.css("z-index");
e();
l=parseInt(f.offset().top,10);
f.data("elem-original-offset-top",l);
f.data("stick-to-offset",0);
q=f.clone(false).css({visibility:"hidden"}).addClass("sticked-placeholder");
m(f);
H();
n();
E();
r()
};
return{priority:9,init:F,restartPosition:I}
};
c[sNSStartup].bookingSticker.update=function(){var e=c[sNSStartup].bookingSticker.stickers||[];
if(!e.length){return
}d.each(e,function(f,g){g.restartPosition()
});
c.events.emit("booking_sticker:update")
}
}(window.jQuery,window.booking));
function BCheckBounceInit(){var c=function(e,g){if(booking.env.disableLegacySubscribeBounceIntent===1){return
}var j={aggressive:false,sensitivity:20,timer:500,callback:function(){}};
var f=$("html");
g=$.extend({},j,g);
setTimeout(h,g.timer);
function h(){f.bind("mouseleave",l);
f.bind("keydown",n)
}function l(r){if(r.clientY>g.sensitivity||(m("viewedBCheckBounce","true")&&!g.aggressive)){return
}var p=window.pageYOffset||document.documentElement.scrollTop||window.document.body.scrollTop;
var q=50;
if(p>q){return
}d();
g.callback()
}var o=false;
function n(p){if(o||m("viewedBCheckBounce","true")&&!g.aggressive){return
}if(!p.metaKey||p.which!=76){return
}o=true;
d();
g.callback()
}function m(q,p){return $.cookie(q)===p
}function d(){if(e){e.style.display="block"
}k()
}function k(){$.cookie("viewedBCheckBounce","true",{expires:30,path:"/",domain:booking.env.b_domain_end});
f.unbind("mouseleave",l);
f.unbind("keydown",n)
}return{fireBCheckBounce:d,disableBCheckBounce:k}
};
booking.env.showCheckBounceLightBox=1;
if(booking.env.b_action!="hotel"){$(document).delegate("a","click contextmenu",function(){booking.env.showCheckBounceLightBox=0
})
}c(false,{callback:function(){if(booking.env.showCheckBounceLightBox==0||B.env.lp_sr_new_lightbox_open){return
}var f=$("#notification_lightbox");
var e=f.find(".linedinput");
var d=e.val();
$(".user_center_popover, #inspire_filter_block").hide();
booking[sNSStartup].lightbox.show(f,{customWrapperClassName:booking.env.notificationLightboxContainerClass||"notification-lightbox-container"});
f.trigger("show-up");
booking.env.b_exclude_lang_firstname=1;
e.click(function(){var g=$(this);
if(g.val()===d){g.val("")
}else{g.select()
}});
e.blur(function(){var g=$(this);
if(g.val()===""){g.val(d)
}})
}})
}booking[sNSStartup].bounce_intent={priority:9,init:function(){var c=$("#notification_lightbox").find("input[name=dest_id]");
if(c.length){BCheckBounceInit()
}}};
booking.browserStorageHandler=(function(g,c,d,h){var k=false;
try{k=(g.localStorage&&g.sessionStorage?true:false);
if(k){g.localStorage.setItem("btest","1")
}}catch(j){k=false
}var f={_readCookie:function(n){var l={};
try{if(typeof(JSON)!=="undefined"){l=JSON.parse(h.cookie(n))||{}
}}catch(m){}return l
},_modifySingleValue:function(q,o,m,x,n){if(!o||!m){return false
}if(k&&!n){var p=(q==="session"?g.sessionStorage:g.localStorage);
if(o==="delete"){p.removeItem(m)
}else{try{p.setItem(m,x)
}catch(t){}}}else{var u,l,w,r;
if(q==="session"){u="bs"
}else{u="b";
r=30
}l=this._readCookie(u);
if(o==="delete"){delete l[m]
}else{l[m]=x
}if(h.isEmptyObject(l)){w=null
}else{w=JSON.stringify(l)
}h.cookie(u,w,{expires:r,path:"/",domain:d.b_domain_end})
}},_getValue:function(o,l,m){if(!l){return undefined
}if(k&&!m){var n=(o==="session"?g.sessionStorage:g.localStorage);
return n.getItem(l)
}else{var p,e;
if(o==="session"){p="bs"
}else{p="b"
}e=this._readCookie(p);
return e[l]
}}};
return{addSessionValue:function(e,m,l){return f._modifySingleValue("session","add",e,m,l)
},deleteSessionValue:function(e,l){return f._modifySingleValue("session","delete",e,undefined,l)
},getSessionValue:function(e,l){return f._getValue("session",e,l)
},addPermanentValue:function(e,m,l){return f._modifySingleValue("permanent","add",e,m,l)
},deletePermanentValue:function(e,l){return f._modifySingleValue("permanent","delete",e,undefined,l)
},getPermanentValue:function(e,l){return f._getValue("permanent",e,l)
},isLocalStorageSupported:function(){return k
}}
})(window,document,booking.env,window.jQuery);
(function(){var g=booking.env,f="",d=g.b_timestamp*1000,c=Math.abs(+new Date()-new Date(d))>=24*3600*1000,h=c,e=booking[sNSStartup].calendar={priority:9,version:1.4,datefmt:"YYYY MM DD",minimalDays:1,maximalDays:30,oldDays:1,from:{date:null,day:null,month:null,year:null},till:{date:null,day:null,month:null,year:null},viewDateFrom:h?new Date(d):new Date(),viewDateTill:h?new Date(d):new Date(),oneDayInMS:86400000,calendars:[],calendarTypes:{checkin_day:{isTill:false,isDay:true},checkin_monthday:{isTill:false,isDay:true},checkin_year_month:{isTill:false,isDay:false},pre_checkin_year_month:{isTill:false,isDay:false},checkout_day:{isTill:true,isDay:true},checkout_monthday:{isTill:true,isDay:true},checkout_year_month:{isTill:true,isDay:false},pre_checkout_year_month:{isTill:true,isDay:false},start_monthday:{isTill:false,isDay:true},start_year_month:{isTill:false,isDay:false},end_monthday:{isTill:true,isDay:true},end_year_month:{isTill:true,isDay:false}},maxMonthsInFuture:12,maxDaysInFuture:365,maxDaysInThePast:1,syncDate:null,userServDate:false,hasDataRange:false,dateFormat:function(p,C,w){var q=/D{1,4}|M{1,4}|YY(?:YY)?/g,o=function(y,m){y=String(y);
m=m||2;
while(y.length<m){y="0"+y
}return y
};
var n=this;
if(arguments.length==1&&Object.prototype.toString.call(p)=="[object String]"&&!/\d/.test(p)){C=p;
p=undefined
}p=p?new Date(p):new Date;
if(isNaN(p)){throw SyntaxError("invalid date")
}C=String(C||n.datefmt);
if(C.slice(0,4)=="UTC:"){C=C.slice(4);
w=true
}var z=w?"getUTC":"get",t=p[z+"Date"](),j=p[z+"Day"](),l=p[z+"Month"](),u=p[z+"FullYear"](),x=p[z+"Hours"](),r=p[z+"Minutes"](),A=p[z+"Seconds"](),k={D:t,DD:o(t),DDD:g.b_simple_weekdays_for_js[(j+6)%7],DDDD:g.b_long_weekdays[(j+6)%7],M:l+1,MM:o(l+1),MMM:g.b_short_months_abbr[l],MMMM:g.b_short_months[l],YY:String(u).slice(2),YYYY:u};
return C.replace(q,function(m){return m in k?k[m]:m.slice(1,m.length-1)
})
},searchMinDays:function(j){this.minimalDays=j
},maxYearsInFuture:function(){this.today=(h)?this.noHourDate(new Date(d)):this.noHourDate(null);
this.maxMonthsInFuture=12;
this.maxDaysInFuture=parseInt(g.calendar_days_allowed_number);
if(g.b_site_experiment_rolling_calendar_year){if(this.maxMonthsInFuture<13){this.maxMonthsInFuture=13
}}this.tomorrow=this.dateAfterDays(this.today,1);
this.endOfYear1=this.dateAfterDays(this.today,this.maxDaysInFuture);
this.endOfYear2=this.dateAfterDays(this.today,this.maxDaysInFuture-1)
},setPast:function(j){this.maxDaysInThePast=j
},syncDates:function(j,k,p,m,o){$(".b_check_blocked").removeClass("b_check_blocked");
if(!o){$("#availcheck").attr("checked",false);
$("#define_group input, #define_group select").removeAttr("disabled");
$("#define_group").removeClass("disableme")
}if(j){this.till.day=(k==null)?this.till.day:k;
this.till.month=(p==null)?this.till.month:p;
this.till.year=(m==null)?this.till.year:m;
if(this.till.day!=null&&this.till.month!=null&&this.till.year!=null){this.till.date=new Date(this.till.year+"/"+this.till.month+"/"+this.till.day+" 00:00:00");
this.viewDateTill=new Date(this.till.year+"/"+this.till.month+"/"+this.till.day+" 00:00:00")
}}else{this.hasDataRange=true;
this.from.day=(k==null)?this.from.day:k;
this.from.month=(p==null)?this.from.month:p;
this.from.year=(m==null)?this.from.year:m;
if(this.from.day!=null&&this.from.month!=null&&this.from.year!=null){this.from.date=new Date(this.from.year+"/"+this.from.month+"/"+this.from.day+" 00:00:00");
this.viewDateFrom=new Date(this.from.year+"/"+this.from.month+"/"+this.from.day+" 00:00:00")
}}var n=false;
if(!j&&this.from.date!=null){if(this.till.date!=null){if(this.till.date<=this.from.date){if(booking.env.b_site_experiment_av_calendar&&booking.avCalendar.isCheckInAvailable(this.from)){this.till.date=new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from)+" 00:00:00")
}else{this.till.date=this.dateAfterDays(this.from.date,this.oldDays)
}n=true
}else{if(booking.env.b_site_experiment_av_calendar&&booking.avCalendar.isCheckOutAvailable(this.from,this.till)===false){this.till.date=new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from)+" 00:00:00");
n=true
}}}else{if(!o){if(booking.env.b_site_experiment_av_calendar&&booking.avCalendar.isCheckInAvailable(this.from)){this.till.date=new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from)+" 00:00:00")
}else{this.till.date=this.dateAfterDays(this.from.date,this.minimalDays)
}n=true
}}}else{if(j&&this.till.date!=null){if(this.from.date==null){if(!o){this.from.date=this.dateAfterDays(this.till.date,~(this.minimalDays-1));
n=true
}}}}if(n){if(!j){this.till.year=this.till.date.getFullYear();
this.till.month=this.till.date.getMonth()+1;
this.till.day=this.till.date.getDate();
this.viewDateTill=new Date(this.till.year+"/"+this.till.month+"/"+this.till.day+" 00:00:00")
}else{this.from.year=this.from.date.getFullYear();
this.from.month=this.from.date.getMonth()+1;
this.from.day=this.from.date.getDate();
this.viewDateFrom=new Date(this.from.year+"/"+this.from.month+"/"+this.from.day+" 00:00:00")
}}for(var l=0;
l<this.calendars.length;
l++){$(this.calendars[l]).trigger("changed_date",[j,n])
}booking.eventEmitter.trigger("CALENDAR:dates_changed",{type:(j)?"checkout":"checkin",otherChanged:n,oldApi:this})
},updateCalendarTables:function(j){if($(j).hasClass("calendarTill")){this.rebuildCalendarTable($("table",j).get(0),true,this.viewDateTill.getMonth()+1,this.viewDateTill.getFullYear())
}else{this.rebuildCalendarTable($("table",j).get(0),false,this.viewDateFrom.getMonth()+1,this.viewDateFrom.getFullYear())
}},init:function(){if(booking.env.b_action=="hotel"||(booking.env.b_action=="searchresults"&&booking.track.getVariant("YcWVTbKCBPdGGWcOCKe"))||(booking.env.b_action=="index"&&booking.track.getVariant("YcWVSTbKCBPdGGWcOCKe"))||(booking.env.b_action.match(/district|city|airport|region|country/)&&booking.track.getVariant("YcWVJPEVdZAQfGOaYEO"))){return
}if(this.calendarReady){return
}this.calendarReady=true;
this.maxYearsInFuture();
this.initAddHandlers()
},initAddHandlers:function(){var j=this;
$("select").each(function(){if(j.calendarTypes[$(this).attr("name")]){j.calendars.push(this);
var k=$(this).val();
if(k!="0"){var m=j.calendarTypes[$(this).attr("name")];
if(m.isDay){if(m.isTill){j.till.day=k
}else{j.from.day=k
}}else{var l=k?k.split("-"):"";
if(l.length&&l.length>0){if(m.isTill){j.till.year=l[0];
j.till.month=l[1]
}else{j.from.year=l[0];
j.from.month=l[1]
}}}}$(this).bind("changed_date",function(o,n,q){$("input",this.parentNode).each(function(){if(j.calendarTypes[$(this).attr("name")]){var r=j.calendarTypes[$(this).attr("name")];
if(r.isDay&&r.isTill&&j.till.day!=null){$(this).val(j.till.day)
}if(r.isDay&&!r.isTill&&j.from.day!=null){$(this).val(j.from.day)
}if(!r.isDay&&r.isTill&&j.till.month!=null&&j.till.year!=null){$(this).val(j.till.year+"-"+j.till.month)
}if(!r.isDay&&!r.isTill&&j.from.month!=null&&j.from.year!=null){$(this).val(j.from.year+"-"+j.from.month)
}}});
var p=j.calendarTypes[$(this).attr("name")];
if(((n||q)&&p.isTill)||((!n||q)&&!p.isTill)){if(p.isDay){if((p.isTill&&j.till.year!=null&&j.till.month!=null)||(!p.isTill&&j.from.year!=null&&j.from.month!=null)){j.rebuildDaySelect(this,p.isTill)
}}else{if(p.isTill&&j.till.year!=null&&j.till.month!=null){j.selectOption(this,j.till.year+"-"+j.till.month)
}else{if(!p.isTill&&j.from.year!=null&&j.from.month!=null){j.selectOption(this,j.from.year+"-"+j.from.month)
}}}}});
$(this).change(function(){var q=j.calendarTypes[$(this).attr("name")];
var p=$(this).val();
var o=p.split("-");
if(p!="0"){if($(this).parents(".newcalendar").length){var n=$(this).parents(".newcalendar");
if(o.length&&o.length>1){if($(this).parents(".calendarTill").length){j.viewDateTill=new Date(o[0]+"/"+o[1]+"/"+j.viewDateTill.getDate()+" 00:00:00");
j.rebuildCalendarTable($("table",n).get(0),true,j.viewDateTill.getMonth()+1,j.viewDateTill.getFullYear())
}else{j.viewDateFrom=new Date(o[0]+"/"+o[1]+"/"+j.viewDateFrom.getDate()+" 00:00:00");
j.rebuildCalendarTable($("table",n).get(0),false,j.viewDateFrom.getMonth()+1,j.viewDateFrom.getFullYear())
}}}else{j.syncDates(q.isTill,(q.isDay)?p:null,(q.isDay)?null:((o.length&&o.length>1)?o[1]:null),(q.isDay)?null:o[0])
}}})
}});
$(".newcalendar").each(function(){if($(this).hasClass("calendarTill")){j.rebuildCalendarTable($("table",this).get(0),true,j.viewDateTill.getMonth()+1,j.viewDateTill.getFullYear())
}else{j.rebuildCalendarTable($("table",this).get(0),false,j.viewDateFrom.getMonth()+1,j.viewDateFrom.getFullYear())
}j.calendars.push(this);
$(this).bind("changed_date",function(n,m,p){if($(this).hasClass("calendarTill")){if(j.till.month!=null&&j.till.year!=null){var o=(j.till.day)?j.till.day:1;
j.viewDateTill=new Date(j.till.year+"/"+j.till.month+"/"+o+" 00:00:00");
j.rebuildCalendarTable($("table",this).get(0),true,j.till.month,j.till.year)
}}else{if(j.from.month!=null&&j.from.year!=null){var o=(j.from.day)?j.from.day:1;
j.viewDateFrom=new Date(j.from.year+"/"+j.from.month+"/"+o+" 00:00:00");
j.rebuildCalendarTable($("table",this).get(0),false,j.from.month,j.from.year)
}}j.updateLabels()
});
var l=$(this);
l.undelegate("td","click").delegate("td","click",function(){var m=$(this).text();
if($("a",this).length){k(m)
}return false
});
function k(o,n){if(!parseInt(o)){return
}if(l.hasClass("calendarTill")){j.syncDates(true,o,j.viewDateTill.getMonth()+1,j.viewDateTill.getFullYear())
}else{j.syncDates(false,o,j.viewDateFrom.getMonth()+1,j.viewDateFrom.getFullYear())
}j.closePopupCalendar();
var p=booking.formatter.date(j.from.year+"-"+(j.from.month)+"-"+j.from.day,"short_date"),m=booking.formatter.date(j.till.year+"-"+(j.till.month)+"-"+j.till.day,"short_date");
$(".checkinDateSection .selected_date").text(p);
$(".checkoutDateSection .selected_date").text(m);
j.checkFormPost()
}$(".nextmonth",this).bind("click",function(){if(!$(this).hasClass("disabled")){var m=$(this).parents(".newcalendar").get(0);
if($(this).parents(".calendarTill").length){j.viewDateTill=j.dateAfterDays(j.viewDateTill,0,1);
j.rebuildCalendarTable($("table",m).get(0),true,j.viewDateTill.getMonth()+1,j.viewDateTill.getFullYear())
}else{j.viewDateFrom=j.dateAfterDays(j.viewDateFrom,0,1);
j.rebuildCalendarTable($("table",m).get(0),false,j.viewDateFrom.getMonth()+1,j.viewDateFrom.getFullYear())
}}this.blur();
return false
});
$(".prevmonth",this).bind("click",function(){if(!$(this).hasClass("disabled")){var m=$(this).parents(".newcalendar").get(0);
if($(this).parents(".calendarTill").length){j.viewDateTill=j.dateAfterDays(j.viewDateTill,0,-1);
j.rebuildCalendarTable($("table",m).get(0),true,j.viewDateTill.getMonth()+1,j.viewDateTill.getFullYear())
}else{j.viewDateFrom=j.dateAfterDays(j.viewDateFrom,0,-1);
j.rebuildCalendarTable($("table",m).get(0),false,j.viewDateFrom.getMonth()+1,j.viewDateFrom.getFullYear())
}}this.blur();
return false
});
$("select",this).each(function(){var m=$(this).attr("name");
var n=$(this).val();
if(j.calendarTypes[m]){if(!j.calendarTypes[m].isDay){$(this).attr("name","pre_"+m);
$(this.parentNode).append('<input type="hidden" name="'+m+'" value="'+n+'" />')
}}else{$(this).change(function(){var o=$(this).val();
if(o!="0"){var p=o.split("-");
if(p.length&&p.length>0){oCalendar=$(this).parents(".newcalendar");
if($(this).parents(".calendarTill").length){j.viewDateTill=new Date(p[0]+"/"+p[1]+"/1 00:00:00");
j.rebuildCalendarTable($("table",oCalendar).get(0),true,p[1],p[0])
}else{j.viewDateFrom=new Date(p[0]+"/"+p[1]+"/1 00:00:00");
j.rebuildCalendarTable($("table",oCalendar).get(0),false,p[1],p[0])
}}}})
}})
});
if(!(B.track.getVariant("GWcOCBFO")===1||B.track.getVariant("GWcOCBSXHe")===1)){$(".calendarLink").bind("click.calendar",function(){window.calendarRef=$(this).parent().attr("class");
j.openPopupCalendar(this);
return false
})
}$(".calendar_close").click(function(){j.closePopupCalendar();
return false
});
if(this.from.year!=null&&this.from.month!=null&&this.from.day!=null){j.syncDates(false,this.from.day,this.from.month,this.from.year,true)
}if(this.till.year!=null&&this.till.month!=null&&this.till.day!=null){j.syncDates(true,this.till.day,this.till.month,this.till.year,true)
}if(window.location.hash=="#auto_open_checkout"){$("#auto_open_checkout a").click()
}},checkFormPost:function(){if(f&&$("."+f+" .submit_on_change").length){if(booking.env.b_action=="hotel"){if(f=="dealCheckinDate"&&$("#hotelpage_availform").attr("action").indexOf("#")>-1){var j=$("#hotelpage_availform").attr("action").split("#")[0];
$("#hotelpage_availform").attr("action",j)
}$("#hotelpage_availform").submit()
}else{$("#frm").submit()
}}},updateLabels:function(){var k=Math.round((this.noHourDate(this.till.date)-this.noHourDate(this.from.date))/this.oneDayInMS);
if(k>0){if(g.night&&g.nights){var j=(k==1)?1+" "+g.night:g.nights.replace("{amount}",k);
if(j.indexOf(k)<0){j=k+" "+j
}if($(".dayamount").length){$(".dayamount").text(j)
}if($(".no_nights_helper").length){$(".no_nights_helper").text("("+j+")")
}}}if($(".calendarFrom").length){$(".calendarFrom .ct_month").text(g.b_short_months[parseInt(this.from.month)-1]);
$(".calendarFrom .ct_day").text(this.from.day);
if($(".calendarTill").length){$(".calendarTill .ct_month").text(g.b_short_months[parseInt(this.till.month)-1]);
$(".calendarTill .ct_day").text(this.till.day)
}}},updatePrevNextLinks:function(j,k){var o=this;
var n=this.dateAfterDays(this.tomorrow,(this.maxDaysInFuture-2));
var m=(this.maxDaysInThePast>1)?this.dateAfterDays(this.tomorrow,~this.maxDaysInThePast):this.tomorrow;
var l=($(k).parents(".calendarTill").length)?this.viewDateTill:this.viewDateFrom;
$(".nextmonth",k.parentNode).each(function(){if(o.dateAfterDays(l,0,1,true)>n){$(this).addClass("disabled")
}else{$(this).removeClass("disabled")
}});
$(".prevmonth",k.parentNode).each(function(){if(o.dateAfterDays(l,0,-1,true)<m){$(this).addClass("disabled")
}else{$(this).removeClass("disabled")
}});
this.selectOption($("select",k.parentNode),l.getFullYear()+"-"+(l.getMonth()+1))
},rebuildCalendarTable:function(m,n,z,A){var k=$(m).parents(".newcalendar");
var x=document.createElement("table");
$(x).html(m.innerHTML);
var y=booking.env.b_site_experiment_av_calendar&&k.hasClass("avCalendar");
if(n&&y&&this.from.date){$(".avCalendar_pick_checkin").hide();
$(".avCalendar.calendarTill").show()
}var C=parseInt(new Date(A+"/"+z+"/1").getDay())-2;
if(g.sunday_first){C+=1
}else{if(C<0){C=7+C
}}var u=x.getElementsByTagName("td");
for(var t=0;
t<42;
t++){var r=t-C;
var l=u[t];
if(r>0&&r<=this.getDaysInMonth(z,A)){var o=new Date(A+"/"+z+"/"+r+" 00:00:00");
if(!this.isValidDate(o,n)){if(o-this.today==0&&!y){l.innerHTML='<span class="today">'+r+"</span>"
}else{l.innerHTML="<span>"+r+"</span>"
}}else{var w="";
if(y){if((o-this.till.date==0&&n)||(o-this.from.date==0&&!n)){w+=" selected"
}if(!n&&booking.avCalendar.isDateInRange({year:A,month:z,day:r})){w+=booking.avCalendar.isCheckInAvailable({year:A,month:z,day:r})?" has_av":" no_av"
}if(n&&this.from.day&&booking.avCalendar.isDateInRange(this.from)){w+=booking.avCalendar.isCheckOutAvailable(this.from,{year:A,month:z,day:r})?" has_av":" no_av"
}}else{if(o-this.today==0){w+=" today"
}if(o-this.till.date==0){w+=n?" selected":" endsel"
}if(o-this.from.date==0){w+=n?" endsel":" selected"
}if(o<this.till.date&&o>this.from.date){w+=" inbetween"
}}if(booking.env.b_fd_hotel_dates){for(var q=0;
q<booking.env.b_fd_hotel_dates.length;
q++){if(booking.env.b_fd_hotel_dates[q]){$.lst=booking.env.b_fd_hotel_dates[q].split("-");
var p=new Date(Number($.lst[0]),Number($.lst[1])-1,Number($.lst[2]));
if(o-p==0){w+=" flashdeals"
}}}}l.innerHTML='<a href="#" class="'+w+'">'+r+"</a>"
}}else{l.innerHTML="&nbsp;"
}}$(m).html(x.innerHTML);
this.updatePrevNextLinks(true,m)
},isValidDate:function(k,j){var l=(this.maxDaysInThePast>1)?this.dateAfterDays(this.today,~this.maxDaysInThePast):this.today;
return !(k<l||(j&&k<this.tomorrow&&this.maxDaysInThePast<2)||k>this.endOfYear1||(!j&&k>this.endOfYear2))
},rebuildDaySelect:function(m,l){var q="&nbsp;";
if(l){var t=this.till.month;
var x=this.till.year;
var o=this.till.day;
var u=this.from.month;
var k=this.from.year;
var j=this.from.day;
if(o==null||booking.env.keep_day_month){if((!((t==booking.env.b_this_month)&&(x>booking.env.b_this_year4)&&(p>(booking.env.b_this_day-1))&&booking.env.b_site_experiment_rolling_calendar_year))&&(!(x==k&&t==u&&j<booking.env.b_this_day&&booking.env.b_site_experiment_clip_checkout_day_dropdown))){q='<option style="text-transform:capitalize;" value="0">'+g.sbox_day+"</option>"
}}}else{var t=this.from.month;
var x=this.from.year;
var o=this.from.day;
if(o==null||booking.env.keep_day_month){if(!((t==booking.env.b_this_month)&&(x>booking.env.b_this_year4)&&(p>(booking.env.b_this_day-5))&&booking.env.b_site_experiment_rolling_calendar_year)){q='<option style="text-transform:capitalize;" value="0">'+g.sbox_day+"</option>"
}}}$(m).html(q);
var y=this.getDaysInMonth(t,x);
function w(C,D,z){var A=new Date(Date.UTC(C,D-1,z));
var z=A.getUTCDay();
z=(z>0)?z-1:6;
return z
}for(var p=1;
p<=y;
p++){var n=w(x,t,p);
var r=g.b_simple_weekdays_for_js[n]+" "+p;
if((g.b_lang=="ja")||(g.b_lang=="zh")||(g.b_lang=="ko")||(g.b_lang=="hu")){if((g.b_lang=="ja"||g.b_lang=="zh"||g.b_lang=="ko")&&B.track.getVariant("YdVSfHJSedZFNfPOUNEQYLFQCSET")){r=p+B.env.sbox_day+" "+g.b_simple_weekdays_for_js[n]
}else{r=p+" "+g.b_simple_weekdays_for_js[n]
}}if(!((t==booking.env.b_this_month)&&(x>booking.env.b_this_year4)&&(((p>(booking.env.b_this_day-2))&&!l)||((p>(booking.env.b_this_day-1))&&l))&&booking.env.b_site_experiment_rolling_calendar_year)){if(l){if(!((x==k)&&(t==u)&&(p<=j)&&(booking.env.b_site_experiment_clip_checkout_day_dropdown))){$(m).append('<option value="'+p+'"'+((o==p)?' selected="selected"':"")+">"+r+"</option>")
}}else{$(m).append('<option value="'+p+'"'+((o==p)?' selected="selected"':"")+">"+r+"</option>")
}}}},noHourDate:function(k){var j=(typeof k==="undefined"||k===null)?(this.userServDate?new Date(this.syncDate):new Date()):k;
j.setHours(0);
j.setMilliseconds(0);
j.setMinutes(0);
j.setSeconds(0);
return j
},getDaysInMonth:function(l,j){var k=[31,(function(){return((((j%4)===0)&&((j%100)!==0)||((j%400)===0))?29:28)
})(),31,30,31,30,31,31,30,31,30,31];
return k[l-1]
},selectOption:function(n,r,o){var k=$(n).parents(".newcalendar");
var q=booking.env.b_site_experiment_av_calendar&&k.hasClass("avCalendar");
var l=false;
var u=$("option",n);
var m,j,t;
for(var p=0;
p<u.length;
p++){m=u[p];
j=$(m);
t=j.text();
if(r&&r!=""){if(j.val()==r){m.selected=true;
l=true;
if(q){k.find(".avCalendar_month").text(t)
}}else{u[p].selected=false
}}if(o&&o!=""){if(t==r){m.selected=true;
l=true;
if(q){k.find(".avCalendar_month").text(t)
}}else{m.selected=false
}}}return l
},dateAfterDays:function(t,n,p,r){var j=this.oneDayInMS*n;
var o=12;
if(r){t.setDate(1)
}if(p){var k=this.noHourDate(t);
if(p>o||p<-1*o){t.setFullYear(t.getFullYear()+parseInt(p/o));
p=p%o
}if(p!=0){var l=t.getMonth();
if(l+p>o){t.setFullYear(t.getFullYear()+1);
t.setMonth((l+p)-o)
}else{if(l+p<0){t.setFullYear(t.getFullYear()-1);
t.setMonth((l+p)+o)
}else{t.setMonth(l+p)
}}}}var m=new Date((this.noHourDate(t)*1)+j);
if(t.getTimezoneOffset()!=m.getTimezoneOffset()){var q=t.getTimezoneOffset()-m.getTimezoneOffset();
q=((q<0)?~q+1:q)*60*1000;
if(q>0){m=new Date((this.noHourDate(t)*1)+j+q)
}}return m
},setPosition:function(l){var k=$(l).offset(),m=10,j=k.top+m;
leftPos=k.left,$window=$(window),windowHeight=$window.height(),windowWidth=$window.width(),documentScrollTop=$(document).scrollTop();
if(g.rtl){leftPos=leftPos-211
}if(windowWidth<leftPos+230){if(windowWidth-230>0){leftPos=windowWidth-230
}}if(windowHeight+documentScrollTop<j+230){if(j-documentScrollTop-250>0){j=j-250
}else{j=windowHeight+documentScrollTop-250
}}$("#calendar_popup").css({top:j+"px",left:leftPos+"px"})
},scrollHandlers:[],openPopupCalendar:function(m){var k=$("#calendar_popup").get(0),o=$(window),n,j=this;
var l="";
switch(m.nodeName.toLowerCase()){case"a":l=m.href.split("#")[1];
break;
case"input":l=m.name;
break;
case"select":l=m.name;
break;
case"label":l=m.getAttribute("data-title");
break;
default:break
}n=function(){j.setPosition(m)
};
this.scrollHandlers.push(n);
this.setPosition(m);
o.bind("scroll resize",n);
$("#calendar_popup").show();
booking.track.exp("fEJLBWHcZKNFcWRET");
booking.track.exp("fEJLBWHcZKNFcWRBYNIUfUYCeHHQC");
if(this.calendarTypes[l]&&this.calendarTypes[l].isTill){$(k).addClass("calendarTill");
this.rebuildCalendarTable($("table",k).get(0),true,this.viewDateTill.getMonth()+1,this.viewDateTill.getFullYear())
}else{$(k).removeClass("calendarTill");
this.rebuildCalendarTable($("table",k).get(0),false,this.viewDateFrom.getMonth()+1,this.viewDateFrom.getFullYear())
}$("body").bind("close_calendar",this.closeHandler);
booking.eventEmitter.trigger("CALENDAR:datepicker_opened",this)
},closeHandler:function(){e.closePopupCalendar()
},closePopupCalendar:function(){var j,l,k;
$("#calendar_popup").removeClass("calendarTill").hide();
$("body").unbind("close_calendar",this.closeHandler);
for(j=0,l=this.scrollHandlers.length;
j<l;
j+=1){k=this.scrollHandlers[j];
if(typeof k==="function"){$window.unbind("scroll resize",k)
}}this.scrollHandlers=[]
}}
})();
booking[sNSStartupLoad].change_dates={priority:9,init:function(){if(typeof trigger_error_template_event_tracking!="undefined"&&trigger_error_template_event_tracking===true){booking.google.trackEvent(booking.google.pageviewTracker,"Error Template (Aggregate)",b_errors);
if(b_this_referer!=""){booking.google.trackEvent(booking.google.pageviewTracker,"Error Template (Referrer)",b_this_referer+" - "+b_errors)
}booking.google.trackEvent(booking.google.pageviewTracker,"Error Template (RequestURL)",b_this_url+" - "+b_errors)
}if(booking.env.b_page=="send_change_dates"){$("#message_changing-dates").fadeIn();
$("#change_dates").submit(function(){var e=$("input[name=do]");
var c=$("#change_dates input[name=checkin_date]").val();
var d=$("#change_dates input[name=checkout_date]").val();
if(c&&d&&(c.length>0||d.length>0)){cin_yymm=$("#checkin_year_month").val();
cin_dd=$("#checkin_day").val();
cin_yymmdd=cin_yymm+"-"+cin_dd;
cout_yymm=$("#checkout_year_month").val();
cout_dd=$("#checkout_monthday").val();
cout_yymmdd=cout_yymm+"-"+cout_dd;
a=c.replace(/-0/g,"-");
b=d.replace(/-0/g,"-");
if(a!=cin_yymmdd||b!=cout_yymmdd){e.val("dochangedates")
}}})
}if(booking.env.b_action=="mybooking"){$("#message_changing-dates").fadeIn()
}}};
booking.command.define({name:"facebook-connect",dialog:null,handler:function(c){this.params=this.updateParams(c);
if(booking.env.is_touch){window.location.href=this.params.action
}else{this.showDialog()
}},showDialog:function(){if(this.dialog){this.dialog.window.focus()
}else{this.dialog=this.createDialog("",this.params.name,this.dialogFeatures()).bind("show",$.proxy(this.onDialogShow,this)).bind("hide",$.proxy(this.onDialogHide,this));
this.dialog.show()
}},onDialogShow:function(){this.resizeDialog();
this.dialog.window.document.location.href=this.params.action
},onDialogHide:function(){this.dialog=null;
booking.command.trigger("facebook-connect:window-close")
},createDialog:function(e,d,g){var f=booking.eventEmitter.extend({show:function(){f.window=window.open(e,d,g);
if(f.window){f.window.focus();
f.trigger("show");
c()
}else{f.trigger("fail")
}}});
return f;
function c(){setTimeout(function(){if(!f.window||f.window.closed){f.window=null;
f.trigger("hide")
}else{c()
}},200)
}},resizeDialog:function(){try{this.dialog.window.resizeBy(-420,-420)
}catch(c){}},dialogFeatures:function(){var c=[];
var d={width:420,height:420,status:"yes",resizable:"yes",scrollbars:"yes"};
$.each(d,function(e,f){c.push(e+"="+f)
});
return c.join(",")
},showLoader:function(){var c=booking.tools.jsStaticUrl("/static/img/destfinder/loader-96.gif");
$(this.dialog.window.document).find("body").css({height:"100%",margin:0,padding:0,background:"url("+c+") center center no-repeat"})
},updateParams:function(c){c=$.extend({name:"fblogin",redirectUrl:booking.env.fb.redirectUrl,finalUrl:booking.env.fb.finalUrl},c);
c.action=c.redirectUrl;
if(c.finalUrl){c.action+=";final_url="+encodeURIComponent(c.finalUrl)
}if(c.source){c.action+=";source="+c.source
}return c
}});
booking[sNSStartup].initFacebookDisconnect={init:function(){if(booking.env.b_action==="mysettings"){booking.components.require("mysettings-model-password").bind("update",function(){booking.env.b_has_password=1
})
}booking.command.define({name:"facebook-disconnect",handler:function(){if(!booking.env.fb){return
}var c="ua-facebook-dialog";
var d=$(".js-"+c+"_disconnect");
if(booking.env.b_has_password){d.find("form").submit()
}else{booking.lightbox.show(d,{customWrapperClassName:c+" "+c+"_disconnect"})
}}})
}};
booking.command("lightbox-hide",function(){booking.lightbox.hide()
});
booking.command.define({name:"show-auth-lightbox",handler:function(c){B.authLightbox.init();
if(!c.tab){c.tab="signin"
}if(c.mode&&c.mode in this.modes){return this.modes[c.mode].apply(this,arguments)
}else{B.authLightbox.show(c)
}},modes:{"raise-auth":function(g){var f=B.promise();
B.eventEmitter.one("auth-dialog:hide",e).one("UA:got_auth_level_high",c);
B.authLightbox.show(g);
f.then(d,d);
return f;
function d(){B.eventEmitter.unbind("auth-dialog:hide",e).unbind("UA:got_auth_level_high",c)
}function e(){f.reject()
}function c(h,k){var j=$.grep(B.env.b_user_emails,function(l){return l.email===k.username
});
if(j.length){f.fulfill()
}else{f.reject({error:"different_email"})
}B.authLightbox.hide()
}}}});
booking.command("show-profile-menu",function(){});
booking.command("track-next-page",function(c){booking.track.nextPage(c.hash)
});
booking[sNSStartup].cookie_warning={priority:10,init:function(){var f=window.jQuery;
if(B.env.cookie_warning){var h=this,e=f("#cookie_warning"),c=function(){if(!B.env.cookie_warning_excluded_country){f(document).unbind("click.cookieMessage")
}f(document).unbind("keydown.cookieMessage");
f(window).unbind("scroll.cookieMessage")
},g=function(j){if(f(j).hasClass("close_warning")){e.fadeOut("1000",function(){f(j).remove();
f(document).unbind("click.cookieMessage")
});
booking.google.trackEvent(booking.google.clickTracker,"Cookie warning","Close");
return false
}else{booking.google.trackEvent(booking.google.clickTracker,"Cookie warning","Read")
}},d=function(){if(!B.env.cookie_warning_excluded_country){e.fadeOut(1000)
}c()
};
f(document).bind({"click.cookieMessage":function(j){var k=j.target?j.target:j.srcElement;
if(f(k).parents("#cookie_warning").length&&k.tagName.toLowerCase()==="a"){g(k);
c()
}else{if(!f(k).parents("#cookie_warning").length&&!B.env.cookie_warning_excluded_country){d()
}else{if(!f(k).parents("#cookie_warning").length&&B.env.cookie_warning_excluded_country){e.fadeOut(1000);
c()
}}}},"keydown.cookieMessage":function(){d()
}});
f(window).bind({"scroll.cookieMessage":function(){if(f(this).scrollTop()){if(!B.env.cookie_warning_excluded_country){f(window).unbind("scroll.cookieMessage")
}else{d()
}}}});
e.show()
}}};
B[sNSExperiments]["HSCQQOcZQPPeae"]=(function(){var c={DOM_CHANGED:"GENERAL:dom_changed",LAYOUT_CHANGED:"GENERAL:layout_changed",THROTTLED_SCROLL:"GENERAL:throttled_scroll",THROTTLED_RESIZE:"GENERAL:throttled_resize",HP_TAB_OPENED:"tab-opened",HEADER_LOGIN_TAB_SELECTED:"user_access_menu_register_tab",HEADER_REGISTER_TAB_SELECTED:"user_access_menu_login_tab",HEADER_POPOVER_SHOWN:"uc_popover_showed",HP_RT_LIGHTBOX_OPENED:"rt-lightbox-open",HP_RT_LIGHTBOX_CLOSED:"rt-lightbox-closed"};
d.prototype.windowOffsetTop=$(window).scrollTop();
d.prototype.track=function(){this.tracked=true;
return B.track.exp(this.hash)
};
d.prototype.storeOffset=function(){this.offsetTop=this.$element.offset().top;
return this.offsetTop
};
function d(f,e){this.hash=f;
this.node=e;
this.$element=$(e);
this.tracked=false;
this.storeOffset()
}return{$window:$(window),bindEvents:function(){var e=this.$window;
e.scroll(B.tools.functions.throttle(function(f){B.eventEmitter.trigger(c.THROTTLED_SCROLL,f)
},200,{leading:false,trailing:true}));
e.resize(B.tools.functions.throttle(function(f){B.eventEmitter.trigger(c.THROTTLED_RESIZE,f)
},500,{leading:false,trailing:true}));
B.eventEmitter.bind(c.THROTTLED_RESIZE,$.proxy(this.onScroll,this));
B.eventEmitter.bind(c.THROTTLED_SCROLL,$.proxy(this.onResize,this));
B.eventEmitter.bind([c.LAYOUT_CHANGED,c.HP_TAB_OPENED,c.HEADER_POPOVER_SHOWN,c.HEADER_LOGIN_TAB_SELECTED,c.HEADER_REGISTER_TAB_SELECTED,c.HEADER_REGISTER_TAB_SELECTED,c.HP_RT_LIGHTBOX_OPENED,c.HP_RT_LIGHTBOX_CLOSED].join(" "),$.proxy(this.onLayoutChanges,this));
B.eventEmitter.bind(c.DOM_CHANGED,$.proxy(this.onDOMChanges,this))
},createExperimentsList:function(){var e=$.makeArray(document.scripts);
this.experiments=e.reduce(function(f,g){if(g.type==="tracking"){f.push(new d(g.getAttribute("data-id"),g.parentNode))
}return f
},[])
},updateExperimentPositions:function(){this.experiments.forEach(function(e){if(!e.tracked){e.storeOffset()
}})
},checkAndTrack:function(){var e=this.$window.scrollTop()+this.$window.height();
this.experiments.forEach(function(f){if(!f.tracked&&f.offsetTop<e){f.storeOffset();
if(f.$element.is(":visible")&&f.offsetTop<e){f.track()
}}})
},onScroll:function(){this.checkAndTrack()
},onResize:function(){this.updateExperimentPositions();
this.checkAndTrack()
},onLayoutChanges:function(){this.updateExperimentPositions();
this.checkAndTrack()
},onDOMChanges:function(){this.createExperimentsList();
this.checkAndTrack()
},init:function(){this.createExperimentsList();
this.bindEvents();
this.checkAndTrack()
}}
}());
(function(d,c){d("et_copy_tracking",["et","jquery"],function(g,e){function f(){e.makeArray(document.scripts).filter(function(h){return h.type==="track_copy"
}).map(function(h){return{hash:h.getAttribute("data-hash"),node:h.parentNode}
}).forEach(function(h){g.on("view",h.node).stage(h.hash,1)
})
}e(function(){f()
});
return{checkMarkupForNewCopyExperiments:f}
});
if(B.env&&B.env.b_enable_copy_tracking){c("et_copy_tracking")
}}(B.define,B.require));
booking[sNSExperiments]["HOGeVdCScVUKeYEGecO"]={init:function(){this.$first=$("#wl252-modal-1");
if($.cookie("wl252-gotit")!=="true"){booking[sNSStartup].lightbox.show(this.$first,{customWrapperClassName:"wl252-modal"},this.autoFocus);
booking.eventEmitter.trigger("account-onboarding-modal-show")
}this.setSkip();
this.gotIt();
this.saveNames();
this.saveStars();
this.placeholderShim()
},autoFocus:function(){this.$first=$("#wl252-modal-1");
if(B.env.b_browser!=="msie"){this.$first.find("#wl252-firstname").focus()
}else{if(B.env.b_browser_version>9){this.$first.find("input:first").focus()
}}},placeholderShim:function(){$("#wl252-firstname").add("#wl252-lastname").placeholder()
},gotIt:function(){$(".wl252-gotit").click(function(c){c.preventDefault();
$.cookie("wl252-gotit","true");
booking[sNSStartup].lightbox.hide();
window.location.reload()
})
},saveNames:function(){var d=this,c=$("#wl252-onboard-name");
c.submit(function(){d.nextModal(1)
})
},saveStars:function(){var d=this,c=$("#wl252-onboard-stars");
c.submit(function(){d.nextModal(2)
})
},nextModal:function(d){var e=d+1,c=$("#wl252-modal-"+e);
if(c.length!==0){booking[sNSStartup].lightbox.hide();
booking[sNSStartup].lightbox.show(c,{customWrapperClassName:"wl252-modal"})
}else{booking[sNSStartup].lightbox.hide()
}},setSkip:function(){var c=this;
$(".wl252-modal__skip").click(function(d){d.preventDefault();
c.nextModal(parseInt($(this).data("modal"),10))
})
}};
booking[sNSStartup].notificationSignupPrompt={init:function(){var j=!/index|country|city|airport|region|district/.test(booking.env.b_action);
if((j&&!B.track.getVariant("PcVBcadffNINFZXZAQYT"))||!booking.env.b_user_auth_level_is_none){return
}var h=this;
var c=$("#current_account .popover_trigger");
var f=$(".js-uc-notification-footer-signup");
var e=$(".js-uc-notification-link");
var g=booking.track.getVariant("MRLLRcJDcOdDGTKWe")||booking.track.getVariant("TACaGGadffNCFPQORHe");
function d(){var k=c.attr("data-show");
c.attr("data-show","login").trigger("click").attr("data-show",k)
}e.click(function(k){k.preventDefault();
h.remove();
booking.track.exp("MRLLRcJDcOdDGTKWe");
booking.track.stage("TACaGGadffNCFPQORHe",1);
if(g){booking.command("show-auth-lightbox").run({extraClass:"user-access-menu-lightbox--user-center"})
}else{d()
}});
f.click(function(k){k.preventDefault();
h.remove();
d();
c.parent().find("[data-target=user_access_signup_menu]").trigger("click")
})
},remove:function(){if(this.alreadyRemoved===undefined){this.alreadyRemoved=true;
$(".js-uc-notification-close:visible").trigger("click")
}}};
function switchDateStack(c,e){var d=c;
if($(c).parents("div").length){d=$(c).parents("div").get(0)
}var f=0;
while(d){if(d.nodeName.toLowerCase()=="div"){f++;
if(f==e){d.style.display="block"
}}d=d.nextSibling
}}(function(){booking[sNSStartup]["AaSDdQeRYZDCATAJRXRT"]={init:function(){var c="/resend_confirm_primary_email";
var d=this,e=$(".user-notification-email-confirm-resend, .js-notification-confirm-email");
this.$targetParent=e.parent();
e.click(function(h){h.preventDefault();
var g=$(this),f=$(this).data("target-url")||c;
if(f){e.hide();
d.showLoadingMsg();
$.ajax({url:f,dataType:"json",data:{aid:B.env.b_aid,lang:B.env.b_lang},success:function(j){$(".user-notification-email-confirm-default").hide();
if(j&&j.status==="sent"){d.showSuccessMsg()
}else{d.showErrorMsg()
}},error:function(){$(".user-notification-email-confirm-default").hide();
d.showErrorMsg()
}})
}return false
})
},showLoadingMsg:function(){$(".user_resend_conf_email_status",this.$targetParent).hide();
$(".user_resend_conf_email_loading",this.$targetParent).show()
},showErrorMsg:function(){$(".user_resend_conf_email_status",this.$targetParent).hide();
$(".user_resend_conf_email_retry",this.$targetParent).show()
},showSuccessMsg:function(){$(".user_resend_conf_email_status",this.$targetParent).hide();
$(".user_resend_conf_email_success",this.$targetParent).show()
}}
})();
B[sNSStartup].destination_suggestion_on_right={init:function(){var d=$("#searchbox_suggestion_on_right");
var m="destination-section",f="tab-nav-item-active",k="tab-content",g="tab-panel",j="tab-panel-active",l=".tab-nav li";
var e;
var c=300;
d.delegate(l,"click",function(n){n.preventDefault();
clearTimeout(e);
h($(this))
});
d.delegate(l,"mouseover",function(){var n=$(this);
e=setTimeout(function(){h(n)
},c)
});
d.delegate(l,"mouseout",function(){clearTimeout(e)
});
function h(p){var o=p.closest("."+m),n=o.children("."+k);
p.siblings().removeClass(f);
p.addClass(f);
n.find("."+g).removeClass(j).eq(p.index()).addClass(j)
}}};
booking[sNSStartup].emk_header_bar=(function(){function c(){var e=$("#emk_header_bar");
if(!e.length){return
}var d=function(){e.hide();
$("body").removeClass("emk_header")
};
var f=function(){var g=booking.env.b_label||"";
$.ajax({url:"/newsletter/header_bar?label="+g,type:"GET",success:function(){d()
},error:function(){d()
}})
};
e.find(".js-close-emk-header-bar").click(function(g){g.preventDefault();
f()
})
}return{priority:9,init:c}
})();
(function(){if(!booking.env.fb){return
}var c={init:function(){var e=$(".js-ua-facebook-button");
var f="ua-facebook-button_loading";
booking.command.bind("facebook-connect",function(){e.addClass(f)
});
booking.command.bind("facebook-connect:window-close",function(){e.removeClass(f)
})
}};
var d={types:{merge:1,"import":1,disabled:1,"merge-diff":1,"email-required":1},states:{FACEBOOK_ACCOUNT_MUST_BE_MERGED:"merge",FACEBOOK_REGISTRATION_DISABLED:"disabled",FACEBOOK_ALREADY_CONNECTED_TO_DIFF_ACCOUNT:"merge-diff",FACEBOOK_USER_DIDNT_ALLOW_EMAIL:"email-required"},init:function(){var e=document.location.href;
var f=this.states[booking.env.fb.state]||e.indexOf("fb_import_message")>-1&&"import";
if(f in this.types){this.show(f)
}},show:function(g){var h=this;
var f="ua-facebook-dialog";
var e=$(".js-"+f+"_"+g);
if(!e.length){return
}if(g==="merge-diff"){$(".js-"+f+"__button_merge-diff").one("click",function(){h.mergeDiff($(this).attr("data-email"));
booking.lightbox.hide()
})
}booking.lightbox.show(e,{hideCallBack:function(){h.dismiss(g)
},customWrapperClassName:f+" "+f+"_"+g})
},dismiss:function(e){if(e==="merge"||e==="merge-diff"||e==="disabled"||e==="email-required"){$.get("/update_facebook_connect_state",{action:"clear_state"})
}},mergeDiff:function(e){if(!booking.components){return
}booking.components.require("mysettings-model-emails").save({b_is_new:true,b_email:e})
}};
booking[sNSStartup].facebook={init:function(){c.init();
d.init()
}}
})();
$(function(){var c=["item_searching","topten","item_volcano_eruption","item_roomtypes","item_pricing","item_creditcards","item_payments","item_reservation_process","item_hotelpolicies","item_confirmation","item_extrafacilities","item_cancellation","item_directions","item_reviews"];
var f=window.location.search.match(/.*?[\&\;\?]faq=([^\&\;]+)/);
if(f!==null&&f.length>1&&f[1].length){var e=f[1].split(",");
if(e.length){$(c).each(function(j,k){hideEl(k)
});
$.each(e,function(j,m){var k=$("span#"+m),l=k.prev();
if(k&&l&&m.match(/faqa\d+/)&&!l.parents("span.faqA").size()){l.clone().appendTo("#faq_deeplink");
k.clone().appendTo("#faq_deeplink")
}})
}}$(".staticmenustyle").children("li").children("a").each(function(j,k){$(k).click(function(){$("#faq_deeplink").children().remove()
})
});
if(location&&location.hash){var h=location.hash.slice(1);
if(h!=""){for(var d=0;
d<c.length;
d++){var g=c[d];
if(g=="item_"+h||g==h){showEl(g)
}else{hideEl(g)
}}}}});
booking.ensureNamespaceExists("feature");
booking.feature.transition=(function(){var c=document.body||document.documentElement;
var e=c.style;
var f="transition";
if(typeof e[f]=="string"){return true
}v=["Moz","webkit","Webkit","Khtml","O","ms"],f=f.charAt(0).toUpperCase()+f.substr(1);
for(var d=0;
d<v.length;
d++){if(typeof e[v[d]+f]=="string"){return true
}}return false
})();
booking[sNSStartup].fixMail={priority:9,init:function(){var c=this;
$(".encrypted").each(function(){$(this).html(c.deCode($(this).text()));
$(this).removeClass("encrypted")
})
},deCode:function(c){return c.replace(/[a-zA-Z]/g,function(d){return String.fromCharCode((d<="Z"?90:122)>=(d=d.charCodeAt(0)+13)?d:d-26)
})
}};
function calcage(c,e,d){s=((Math.floor(c/e))%d).toString();
if(LeadingZero&&s.length<2){s="0"+s
}return"<b>"+s+"</b>"
}function CountBack(c){if(c<0){if(document.getElementById("cntdwn")){document.getElementById("cntdwn").innerHTML=FinishMessage;
return
}}else{if(c>86400){DisplayStr_days=DisplayFormat_days.replace(/%%D%%/g,calcage(c,86400,100000));
document.getElementById("flash_days").innerHTML=DisplayStr_days
}else{document.getElementById("flash_days_wrapper").style.display="none"
}}DisplayStr_hours=DisplayFormat_hours.replace(/%%H%%/g,calcage(c,3600,24));
DisplayStr_minutes=DisplayFormat_minutes.replace(/%%M%%/g,calcage(c,60,60));
DisplayStr_seconds=DisplayFormat_seconds.replace(/%%S%%/g,calcage(c,1,60));
document.getElementById("flash_hours").innerHTML=DisplayStr_hours;
document.getElementById("flash_minutes").innerHTML=DisplayStr_minutes;
document.getElementById("flash_seconds").innerHTML=DisplayStr_seconds;
if(CountActive){setTimeout("CountBack("+(c+CountStepper)+")",SetTimeOutPeriod)
}}if(typeof(TargetDate)=="undefined"){TargetDate="12/31/2020 5:00 AM"
}if(typeof(DisplayFormat)=="undefined"){DisplayFormat="%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds."
}if(typeof(CountActive)=="undefined"){CountActive=true
}if(typeof(FinishMessage)=="undefined"){FinishMessage=""
}if(typeof(CountStepper)!="number"){CountStepper=-1
}if(typeof(LeadingZero)=="undefined"){LeadingZero=true
}CountStepper=Math.ceil(CountStepper);
if(CountStepper==0){CountActive=false
}var SetTimeOutPeriod=(Math.abs(CountStepper)-1)*1000+990;
var dthen=new Date(TargetDate);
var dnow=new Date();
if(CountStepper>0){ddiff=new Date(dnow-dthen)
}else{ddiff=new Date(dthen-dnow)
}gsecs=Math.floor(ddiff.valueOf()/1000);
if(document.getElementById("flash_seconds")){CountBack(gsecs)
}(function(e,c){function d(){if(e.env.b_run_ge_new_newsletter_login){booking.eventEmitter.bind("auth-dialog:show",function(){c(".user_signup_password").focus()
})
}}c(document).ready(d)
}(window.booking,window.jQuery));
booking.components.define("ge-lightbox",function(f,c){function e(k){var l=k.data;
var j=k.template;
var g=k.onOpen||function(){};
var h=k.wrapperClassName||"ge-about-lightbox-wrapper";
f.require("profile/profile-menu/profile-menu").hide();
setTimeout(function(){c("#tooltip_wrap").hide()
},300);
c(".user_center_popover").hide();
f.lightbox.show(f.jstmpl(j).render(l),{customWrapperClassName:h},function(m){c(".ge-mod-button").click(function(){f.lightbox.hide();
return false
});
if(g){g(m)
}})
}function d(h){var g=h.element;
c("body").delegate(g,"click",function(j){j.preventDefault();
e(h)
})
}return{setup:d,open:e}
});
booking.jstmpl("ge_about_lightbox",(function(){var d=['\n    \u003cdiv class="ge-about-lightbox-container"\u003e\n        \u003ch1 class="ge-mod-genius-logo-container"\u003e',"\n    ","\n\n    \n    ","\n        ","\n            ","\n\n        ","\n                ","\n            \n    ",'title="','" rel="','"'," jq_tooltip",' style="font-size: ','px"',"\n\n    \n    \n    \n\n    \n    \n    "," ",'\n                \u003cspan class="ge-iconfont-plate ','" ','\u003e\n                    \u003ci class="bicon-dotgeniusbg"\u003e\u003c/i\u003e\n                    \u003ci class="bicon-dotgeniusfold"\u003e\u003c/i\u003e\n                    \u003ci class="bicon-dotgenius"\u003e\u003c/i\u003e\n                \u003c/span\u003e\n            ','\n                \u003cspan class="ge-iconfont-discount ','" title="','\u003e\n                    \u003ci class="geicon-square-round-cut"\u003e\u003c/i\u003e\n                    \u003ci class="geicon-square-round-flap"\u003e\u003c/i\u003e\n                    \u003ci class="geicon-freebie-percentage"\u003e\u003c/i\u003e\n                \u003c/span\u003e\n            ','\n                \u003cspan class="ge-iconfont-booking ','\u003e\n                    \u003ci class="bicon-booking"\u003e\u003c/i\u003e\u003ci class="bicon-bookingdotgenius"\u003e\u003c/i\u003e\n                \u003c/span\u003e\n            ','\n                \u003cspan class="ge-iconfont-logo ','\u003e\n                    \u003ci class="bicon-bookingdotgenius"\u003e\u003c/i\u003e\n                \u003c/span\u003e\n            ','\n                \u003cspan class="genius-extended-module genius-extended-module-standalone ',"\u003e\n                    ",'\n                        \u003ci class="ge-discount-rate"\u003e',"\u003c/i\u003e\n                    ",'\n                        \u003ci class="bicon-','"\u003e\u003c/i\u003e\n                    ',"\n                \u003c/span\u003e\n            ","\n                    ","\n\n                ","\n\n                    ","1","\n                    \u003cspan\n                        ",'data-content-tooltip="','\u003cdiv class="ge-freebies-dropdown--header"\u003e','\u003c/div\u003e\n\u003cul class="ge-freebies-dropdown--list"\u003e\n    ',"\n        \u003cli\u003e\n            ",'\n            \u003cspan class="genius-extended-module-standalone-container"\u003e\n                ','\n    \u003cspan class="genius-extended-module genius-extended-module-standalone"\u003e\n        ','\n            \u003ci class="ge-discount-rate"\u003e',"\u003c/i\u003e\n        ","discount",'\n            \u003ci class="bicon-','"\u003e\u003c/i\u003e\n        ',"\n    \u003c/span\u003e\n",'\n            \u003c/span\u003e\n            \u003cspan class="ge-freebie-item-text"\u003e\n                ',"\n            \u003c/span\u003e\n        \u003c/li\u003e\n    ","\n\n","\n\t\u003cli ",'class="freebie-list-full-size"','\u003e\n\t\t\u003cspan class="genius-extended-module-standalone-container"\u003e\n\t\t\t',"earlycheckin",'\n\t\t\u003c/span\u003e\n\t\t\u003cspan class="ge-freebie-item-text"\u003e\n\t\t\t',"\n\t\t\u003c/span\u003e\n\t\u003c/li\u003e\n","\n","latecheckout","shuttlesmall","bike","bar","\n\t","\n\t\t","\n\t\t\t\u003cli ",'\u003e\n\t\t\t\t\u003cspan class="genius-extended-module-standalone-container"\u003e\n\t\t\t\t\t',"parking",'\n\t\t\t\t\u003c/span\u003e\n\t\t\t\t\u003cspan class="ge-freebie-item-text"\u003e\n\t\t\t\t\t',"/genius_perks/8/one_line","\n\t\t\t\t\u003c/span\u003e\n\t\t\t\u003c/li\u003e\n\t\t","wifi","/genius_perks/9/one_line","\n\u003c/ul\u003e\n",'\n                        class="ge-iconfont-extended '," js-fly-content-tooltip ge-iconfont-extended-dd"," jq_tooltip ge-iconfont-extended-dd",'"\n                    \u003e\n                        \u003ci class="bicon-bookingdotgenius ',"\u003e\u003c/i\u003e\n                        ",'\n                                 \u003cspan class="genius-extended-module genius-extended-module-discount ','\u003e\u003ci class="ge-discount-rate"\u003e',"\u003c/i\u003e\u003c/span\u003e\n                        ","\n                        ",'\n                            \u003cspan class="genius-extended-module genius-extended-module-freebies ','\u003e\u003ci class="bicon-gift"\u003e\u003c/i\u003e\u003c/span\u003e\n                        ',"\n                    \u003c/span\u003e\n\n                ","\n                \n        ","\n\n    \n    \n    ","\n            \n            ","@2x","/static/img/genius_icons/genius_module/img/freebies/genius-extended-discount-freebies",".png","/static/img/genius_icons/genius_module/img/freebies/genius-extended-discount","/static/img/genius_icons/genius_module/img/freebies/genius-extended-freebies","/static/img/genius_icons/genius_module/img/genius-plate-img-white-",'\n                \u003cimg src="','" height="','" alt="" class="ge-freebie-icon-img ','"\n                    ','\n                        style="height: ',"px;\n                        width: ",";\n                        display: ",";\n                        vertical-align: ",";\n                        "," \u003e\n            ","/static/img/genius_icons/genius_module/img/freebies/","/static/img/genius_icons/genius_module/img/genius-plate-img-","-",'" alt="Genius" class="ge-img-plate '," \u003e\n        ","gesprite ",'\n        \u003ci class="',"\u003e\u003c/i\u003e\n\n    ",'\n        \u003cspan class="genius-module-no-format"\u003e\u003c/span\u003e\n    '," \n\n    \n    \n    ","true","plate","ge-mod-genius-logo","white","40","false",'\u003c/h1\u003e\n        \u003cp class="ge-slogan"\u003e','\u003c/p\u003e\n        \u003cdiv class="ge-mod-section ge-mod-section-why'," ge-mod-aspiring-","-section-why",'"\u003e\n            \u003ch2 class="ge-mod-title"\u003e\n              ',"ge_lightbox_remaining_stays_header","\n              ",'\n            \u003c/h2\u003e\n            \u003cp class="ge-mod-description"\u003e\n              ',"ge_lightbox_remaining_stays_text",'\n            \u003c/p\u003e\n        \u003c/div\u003e\n        \u003cdiv class="ge-mod-section ge-mod-section-what"\u003e\n            \u003ch2 class="ge-mod-section-what-title ge-mod-title"\u003e','\u003c/h2\u003e\n            \u003cul class="ge-mod-genius-benefit-list clearfix"\u003e\n                \u003cli class="ge-mod-genius-benefit"\u003e\n                    \u003ci class="ge-mod-icon bicon-pricetag"\u003e\u003c/i\u003e\n                    \u003ch2 class="ge-mod-title"\u003e','\u003c/h2\u003e\n                    \u003cp class="ge-mod-description"\u003e','\u003c/p\u003e\n                \u003c/li\u003e\n                \u003cli class="ge-mod-genius-benefit"\u003e\n                    \u003ci class="ge-mod-icon bicon-gift"\u003e\u003c/i\u003e\n                    \u003ch2 class="ge-mod-title"\u003e','\u003c/p\u003e\n                \u003c/li\u003e\n                \u003cli class="ge-mod-genius-benefit"\u003e\n                    \u003ci class="ge-mod-icon bicon-olderphone"\u003e\u003c/i\u003e\n                    \u003ch2 class="ge-mod-title"\u003e','\u003c/p\u003e\n                \u003c/li\u003e\n                \u003cli class="ge-mod-genius-benefit"\u003e\n                    \u003ci class="ge-mod-icon bicon-checkmark"\u003e\u003c/i\u003e\n                    \u003ch2 class="ge-mod-title"\u003e',"\u003c/p\u003e\n                \u003c/li\u003e\n            \u003c/ul\u003e\n        \u003c/div\u003e\n        ",'\n        \u003cdiv class="ge-mod-section ge-mod-section-how"\u003e\n            ',"  \n  ","extended","\n\n    ","\n      ",'\n        \u003cspan class="ge-rtl-freebiefrube"\u003e\n            \u003ci class="geicon-rtl-freebiefrubetext"\u003e\u003c/i\u003e\n            \u003ci class="geicon-rtl-discountfrubebluebg"\u003e\u003c/i\u003e\n            \u003ci class="geicon-rtl-discountfrubebg"\u003e\u003c/i\u003e\n        \u003c/span\u003e\n      ','\n          \u003cspan class="ge-freebiefrube"\u003e\n            \u003ci class="geicon-giftfrube"\u003e\u003c/i\u003e\n            \u003ci class="geicon-frubebluebg"\u003e\u003c/i\u003e\n            \u003ci class="geicon-frubebg"\u003e\u003c/i\u003e\n          \u003c/span\u003e\n      ',"\n       ",'\n        \u003cspan class="ge-rtl-discountfrube"\u003e\n            \u003ci class="geicon-rtl-discountfrubetext"\u003e\u003c/i\u003e\n            \u003ci class="geicon-rtl-discountfrubebluebg"\u003e\u003c/i\u003e\n            \u003ci class="geicon-rtl-discountfrubebg"\u003e\u003c/i\u003e\n        \u003c/span\u003e\n      ','\n          \u003cspan class="ge-discountfrube"\u003e\n            \u003ci class="geicon-discountfrube"\u003e\u003c/i\u003e\n            \u003ci class="geicon-frubebluebg"\u003e\u003c/i\u003e\n            \u003ci class="geicon-frubebg"\u003e\u003c/i\u003e\n          \u003c/span\u003e\n      ','\n        \u003cspan class="ge-rtl-fullfrube"\u003e\n            \u003ci class="geicon-rtl-fullfrubetext"\u003e\u003c/i\u003e\n            \u003ci class="geicon-rtl-fullfrubebluebg"\u003e\u003c/i\u003e\n            \u003ci class="geicon-rtl-fullfrubebg"\u003e\u003c/i\u003e\n        \u003c/span\u003e\n      ','\n          \u003cspan class="ge-fullfrube"\u003e\n            \u003ci class="geicon-fullfrubetext"\u003e\u003c/i\u003e\n            \u003ci class="geicon-fullfrubebluebg"\u003e\u003c/i\u003e\n            \u003ci class="geicon-fulfrubebg"\u003e\u003c/i\u003e\n          \u003c/span\u003e\n      ',"ge-mod-frube",'\n            \u003cp class="ge-mod-look-for-badge"\u003e',"\u003c/p\u003e\n        \u003c/div\u003e\n        ",'\n        \u003cdiv class="ge-mod-button-container"\u003e\n            \u003ca href="#" class="ge-mod-button b-button b-button_primary"\u003e',"\u003c/a\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n"],c=["b_size","b_tooltip","b_type","genius_icon_tooltip","genius_icon_10_percent","b_genius_discount","b_genius_module_tooltip_text","b_is_tablet","b_genius_module_tooltip_attr","tooltip_width","b_genius_module_tooltip_class","b_has_tooltip","b_genius_module_b_size_iconfont_style","b_genius_module_b_size_iconfont","b_genius_iconfont","b_genius_module_insert_classes","b_color","b_classname","genius_frube_genius_ten_tooltip","b_freebie","genius_frube_genius_logo_tooltip","b_genius_module_tooltip_attr_discount","b_genius_module_tooltip_attr_freebies","genius_frube_genius_freebie_tooltip","b_ge_freebies_tooltip","b_reg_user_is_genius","b_site_type","b_action","genius_frube_tooltip_benefits","genius_box_hotel_page_ten_percent_icon","b_hotel_has_genius_rate_available","b_genius_perks_full_size","genius_widget_perks_early_check_in_tooltip","b_genius_freebies","genius_widget_perks_late","genius_widget_perks_airport_shuttle_tooltip","genius_widget_perks_bike_rental_tooltip","genius_widget_perks_welcome_drink_tooltip","b_ge_discount","b_ge_freebies","b_image_suffix","b_server_role","b_genius_img_url","b_inline_style_width","b_inline_style_display","b_inline_style_vertical_align","b_inline_style_extra","b_inline_style","b_genius_img","b_type_pretty","b_genius_sprite","genius_pp_travel_rewards_programme","b_genius_user","genius_pop_up_header_name","genius_pop_up_header_no_name","genius_pop_up_subheader_explanation_five_bookings","genius_pop_up_subheader_explanation_less_than_five_bookings","genius_pop_up_usp_header","rebrand_genius_bb_10_header","b_use_bbtool_copy","genius_new_product_page_10","rebrand_genius_10_discount_text","genius_new_product_page_10_explain","genius_new_product_page_perks","genius_new_product_page_perks_freebie","genius_new_product_page_service","genius_new_product_page_gs_service","genius_product_page_usp_no_cost","genius_product_page_usp_no_cost_byline","b_is_ie7","b_genius_frube_with_gift","b_lang_is_rtl","b_genius_frube_with_discount","b_genius_fullfrube","genius_pop_up_how_will_i_know","genisu_pop_up_got_it_button"],g,f,e;
return function(h){var U="",V=this.fn;
function Q(r){return r
}function X(r){r+=d[43];
if((V.MJ(d[68]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[68],d[48]].join("")
}r+=d[49];
return r
}function W(r){r+=d[43];
if((V.MJ(d[72]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[72],d[48]].join("")
}r+=d[49];
return r
}function q(r){r+=d[43];
if((V.MJ(d[68]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[68],d[48]].join("")
}r+=d[49];
return r
}function p(r){r+=d[43];
if((V.MJ(d[72]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[72],d[48]].join("")
}r+=d[49];
return r
}function o(r){r+=d[43];
if((V.MJ(d[46]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[46],d[48]].join("")
}r+=d[49];
return r
}function n(r){r+=d[43];
if((V.MJ(d[56]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[56],d[48]].join("")
}r+=d[49];
return r
}function m(r){r+=d[43];
if((V.MJ(d[60]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[60],d[48]].join("")
}r+=d[49];
return r
}function aa(r){r+=d[43];
if((V.MJ(d[61]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[61],d[48]].join("")
}r+=d[49];
return r
}function Z(r){r+=d[43];
if((V.MJ(d[62]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[62],d[48]].join("")
}r+=d[49];
return r
}function Y(r){r+=d[43];
if((V.MJ(d[63]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[63],d[48]].join("")
}r+=d[49];
return r
}function G(r){r+=d[43];
if((V.MJ(d[46]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[46],d[48]].join("")
}r+=d[49];
return r
}function y(r){r+=d[43];
if((V.MJ(d[56]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[56],d[48]].join("")
}r+=d[49];
return r
}function x(r){r+=d[43];
if((V.MJ(d[60]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[60],d[48]].join("")
}r+=d[49];
return r
}function w(r){r+=d[43];
if((V.MJ(d[61]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[61],d[48]].join("")
}r+=d[49];
return r
}function u(r){r+=d[43];
if((V.MJ(d[62]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[62],d[48]].join("")
}r+=d[49];
return r
}function t(r){r+=d[43];
if((V.MJ(d[63]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[63],d[48]].join("")
}r+=d[49];
return r
}function J(r){r+=d[43];
if((V.MJ(d[68]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[68],d[48]].join("")
}r+=d[49];
return r
}function I(r){r+=d[43];
if((V.MJ(d[72]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[72],d[48]].join("")
}r+=d[49];
return r
}function z(r){r+=[d[39],V.MB(c[28]),d[40]].join("");
if(V.MD(c[30])){r+=d[41];
r=Q(r);
r+=d[42];
h.unshift({b_freebie:d[46]});
r=o(r);
h.shift();
r+=[d[50],V.MB(c[29]),d[51]].join("")
}r+=d[1];
r=R(r);
r+=d[74];
return r
}function R(r){r=Q(r);
r+=d[52];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_early"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[56]});
r=n(r);
h.shift();
r+=[d[57],V.MB(c[32]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_ext_deals_genius_freebie_cta"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[60]});
r=m(r);
h.shift();
r+=[d[57],V.MB(c[34]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_shuttle"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[61]});
r=aa(r);
h.shift();
r+=[d[57],V.MB(c[35]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_bike"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[62]});
r=Z(r);
h.shift();
r+=[d[57],V.MB(c[36]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_drink"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[63]});
r=Y(r);
h.shift();
r+=[d[57],V.MB(c[37]),d[58]].join("")
}r+=d[59];
if((V.MJ(V.MC(c[33]))&&(V.MJ(V.MC(c[33])["b_genius_perks_widget_parking"])||V.MJ(V.MC(c[33])["b_genius_perks_widget_wifi"])))){r+=d[64];
if(V.MJ(V.track_experiment("ge_high_demand_freebies_wifi_parking"))){r+=d[65];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_parking"]))){r+=d[66];
if(V.MD(c[31])){r+=d[54]
}r+=d[67];
h.unshift({b_freebie:d[68]});
r=X(r);
h.shift();
r+=[d[69],V.ME(d[70],V.MB,V.MN,null),d[71]].join("")
}r+=d[65];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_wifi"]))){r+=d[66];
if(V.MD(c[31])){r+=d[54]
}r+=d[67];
h.unshift({b_freebie:d[72]});
r=W(r);
h.shift();
r+=[d[69],V.ME(d[73],V.MB,V.MN,null),d[71]].join("")
}r+=d[64]
}r+=d[59]
}return r
}function A(r){r+=[d[39],V.MB(c[28]),d[40]].join("");
if(V.MD(c[30])){r+=d[41];
r=Q(r);
r+=d[42];
h.unshift({b_freebie:d[46]});
r=G(r);
h.shift();
r+=[d[50],V.MB(c[29]),d[51]].join("")
}r+=d[1];
r=S(r);
r+=d[74];
return r
}function S(r){r=Q(r);
r+=d[52];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_early"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[56]});
r=y(r);
h.shift();
r+=[d[57],V.MB(c[32]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_ext_deals_genius_freebie_cta"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[60]});
r=x(r);
h.shift();
r+=[d[57],V.MB(c[34]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_shuttle"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[61]});
r=w(r);
h.shift();
r+=[d[57],V.MB(c[35]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_bike"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[62]});
r=u(r);
h.shift();
r+=[d[57],V.MB(c[36]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_drink"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[63]});
r=t(r);
h.shift();
r+=[d[57],V.MB(c[37]),d[58]].join("")
}r+=d[59];
if((V.MJ(V.MC(c[33]))&&(V.MJ(V.MC(c[33])["b_genius_perks_widget_parking"])||V.MJ(V.MC(c[33])["b_genius_perks_widget_wifi"])))){r+=d[64];
if(V.MJ(V.track_experiment("ge_high_demand_freebies_wifi_parking"))){r+=d[65];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_parking"]))){r+=d[66];
if(V.MD(c[31])){r+=d[54]
}r+=d[67];
h.unshift({b_freebie:d[68]});
r=q(r);
h.shift();
r+=[d[69],V.ME(d[70],V.MB,V.MN,null),d[71]].join("")
}r+=d[65];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_wifi"]))){r+=d[66];
if(V.MD(c[31])){r+=d[54]
}r+=d[67];
h.unshift({b_freebie:d[72]});
r=p(r);
h.shift();
r+=[d[69],V.ME(d[73],V.MB,V.MN,null),d[71]].join("")
}r+=d[64]
}r+=d[59]
}return r
}function P(r){r+=d[43];
if((V.MJ(d[46]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[46],d[48]].join("")
}r+=d[49];
return r
}function O(r){r+=d[43];
if((V.MJ(d[56]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[56],d[48]].join("")
}r+=d[49];
return r
}function N(r){r+=d[43];
if((V.MJ(d[60]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[60],d[48]].join("")
}r+=d[49];
return r
}function M(r){r+=d[43];
if((V.MJ(d[61]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[61],d[48]].join("")
}r+=d[49];
return r
}function L(r){r+=d[43];
if((V.MJ(d[62]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[62],d[48]].join("")
}r+=d[49];
return r
}function K(r){r+=d[43];
if((V.MJ(d[63]+""==="discount"))){r+=[d[44],V.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[63],d[48]].join("")
}r+=d[49];
return r
}function C(r){r+=[d[39],V.MB(c[28]),d[40]].join("");
if(V.MD(c[30])){r+=d[41];
r=Q(r);
r+=d[42];
h.unshift({b_freebie:d[46]});
r=P(r);
h.shift();
r+=[d[50],V.MB(c[29]),d[51]].join("")
}r+=d[1];
r=T(r);
r+=d[74];
return r
}function T(r){r=Q(r);
r+=d[52];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_early"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[56]});
r=O(r);
h.shift();
r+=[d[57],V.MB(c[32]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_ext_deals_genius_freebie_cta"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[60]});
r=N(r);
h.shift();
r+=[d[57],V.MB(c[34]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_shuttle"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[61]});
r=M(r);
h.shift();
r+=[d[57],V.MB(c[35]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_bike"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[62]});
r=L(r);
h.shift();
r+=[d[57],V.MB(c[36]),d[58]].join("")
}r+=d[59];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_drink"]))){r+=d[53];
if(V.MD(c[31])){r+=d[54]
}r+=d[55];
h.unshift({b_freebie:d[63]});
r=K(r);
h.shift();
r+=[d[57],V.MB(c[37]),d[58]].join("")
}r+=d[59];
if((V.MJ(V.MC(c[33]))&&(V.MJ(V.MC(c[33])["b_genius_perks_widget_parking"])||V.MJ(V.MC(c[33])["b_genius_perks_widget_wifi"])))){r+=d[64];
if(V.MJ(V.track_experiment("ge_high_demand_freebies_wifi_parking"))){r+=d[65];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_parking"]))){r+=d[66];
if(V.MD(c[31])){r+=d[54]
}r+=d[67];
h.unshift({b_freebie:d[68]});
r=J(r);
h.shift();
r+=[d[69],V.ME(d[70],V.MB,V.MN,null),d[71]].join("")
}r+=d[65];
if(V.MJ(V.MG((V.MC(c[33])||{})["b_genius_perks_widget_wifi"]))){r+=d[66];
if(V.MD(c[31])){r+=d[54]
}r+=d[67];
h.unshift({b_freebie:d[72]});
r=I(r);
h.shift();
r+=[d[69],V.ME(d[73],V.MB,V.MN,null),d[71]].join("")
}r+=d[64]
}r+=d[59]
}return r
}function j(ab){ab+=d[141];
var r="";
r+=d[142];
if(V.MD(c[71])){r+=d[143]
}else{r+=d[144]
}r+=d[1];
V.MN(c[70],r);
ab+=d[141];
var r="";
r+=d[145];
if(V.MD(c[71])){r+=d[146]
}else{r+=d[147]
}r+=d[1];
V.MN(c[72],r);
ab+=d[141];
var r="";
r+=d[3];
if(V.MD(c[71])){r+=d[148]
}else{r+=d[149]
}r+=d[1];
V.MN(c[73],r);
ab+=d[141];
if((V.MJ(V.MC(c[38]))&&V.MJ(V.MC(c[39])))){ab+=[d[3],V.MC(c[73]),d[1]].join("")
}else{if(V.MJ(V.MC(c[38]))){ab+=[d[3],V.MC(c[72]),d[1]].join("")
}else{if(V.MJ(V.MC(c[39]))){ab+=[d[3],V.MC(c[70]),d[1]].join("")
}}}ab+=d[59];
return ab
}function D(ac){ac+=d[2];
V.MN("b_genius_module_b_size_iconfont",((V.MJ(V.MC(c[0])>0))?V.MC(c[0]):""));
ac+=d[1];
V.MN("b_size",((V.MJ(V.MC(c[0])>0))?V.MC(c[0]):24));
ac+=d[1];
V.MN("b_has_tooltip",V.MK((V.MJ(/^false|no|0$/.test(V.MC(c[1]))))));
ac+=d[1];
if(((V.MJ(V.MC(c[2])+""==="freebie_icon"))&&((V.MJ(V.MC(c[1])+""===""))||(V.MJ(V.MC(c[1])==0))))){ac+=d[3];
V.MN("b_has_tooltip",0);
ac+=d[1]
}ac+=d[2];
var ab=V.MC(c[2]);
if((V.MJ(ab+""==="plate"))){ac+=d[4];
V.MN("b_genius_module_tooltip_text",V.MB(c[3]));
ac+=d[4];
V.MN("b_type_pretty","ge-bg");
ac+=d[5]
}else{if((V.MJ(ab+""==="booking"))){ac+=d[4];
V.MN("b_type_pretty","i-booking-genius");
ac+=d[5]
}else{if((V.MJ(ab+""==="logo"))){ac+=d[4];
V.MN("b_type_pretty","ge");
ac+=d[4];
V.MN("b_genius_module_tooltip_text",V.MB(c[3]));
ac+=d[5]
}else{if((V.MJ("freebie")||V.MJ("freebie_icon"))){ac+=d[4];
if(V.MK(V.MC(c[5]))){ac+=d[6];
V.MN("b_genius_discount",V.MB(c[4]));
ac+=d[4]
}ac+=d[5]
}else{if((V.MJ(ab+""==="extended"))){ac+=d[4];
if(V.MK(V.MC(c[5]))){ac+=d[6];
V.MN("b_genius_discount",V.MB(c[4]));
ac+=d[4]
}ac+=d[5]
}else{ac+=d[7]
}}}}}ac+=d[2];
V.MN("b_genius_module_tooltip_text",(V.MC(c[1])||V.MC(c[6])));
ac+=d[1];
V.MN("b_genius_module_tooltip_width",(V.MC(c[7])?200:""));
ac+=d[1];
if(V.MD(c[11])){ac+=d[3];
V.MN(c[8],[d[8],V.MC(c[6]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[3];
V.MN(c[10],d[11]);
ac+=d[1]
}ac+=d[2];
if((V.MJ(V.MC(c[14]))&&V.MJ(V.MC(c[13])))){ac+=d[3];
V.MN(c[12],[d[12],V.MC(c[13]),d[13]].join(""));
ac+=d[1]
}ac+=d[14];
if(V.MD(c[14])){ac+=d[3];
var r="";
r+=[d[15],V.MC(c[16]),d[15],V.MC(c[17]),d[15]].join("");
if(V.MD(c[11])){r+=V.MC(c[10])
}r+=d[15];
V.MN(c[15],r);
ac+=d[3];
var ab=V.MC(c[2]);
if((V.MJ(ab+""==="plate"))){ac+=[d[16],V.MC(c[15]),d[17],V.MC(c[8]),d[15],V.MC(c[12]),d[18]].join("")
}else{if((V.MJ(ab+""==="discount"))){ac+=[d[19],V.MC(c[15]),d[20],V.MB(c[18]),d[9],V.MC(c[9]),d[17],V.MC(c[12]),d[21]].join("")
}else{if((V.MJ(ab+""==="booking"))){ac+=[d[22],V.MC(c[15]),d[17],V.MC(c[8]),d[15],V.MC(c[12]),d[23]].join("")
}else{if((V.MJ(ab+""==="logo"))){ac+=[d[24],V.MC(c[15]),d[17],V.MC(c[8]),d[15],V.MC(c[12]),d[25]].join("")
}else{if((V.MJ(ab+""==="freebie_icon"))){ac+=[d[26],V.MC(c[15]),d[17],V.MC(c[8]),d[27]].join("");
if((V.MJ(V.MC(c[19])+""==="discount"))){ac+=[d[28],V.MC(c[5]),d[29]].join("")
}else{ac+=[d[30],V.MC(c[19]),d[31]].join("")
}ac+=d[32]
}else{if((V.MJ(ab+""==="extended"))){ac+=d[6];
V.MN(c[15],[d[15],V.MC(c[16]),d[15],V.MC(c[17]),d[15]].join(""));
ac+=d[6];
if(V.MJ(V.MC(c[11]))){ac+=d[33];
V.MN(c[8],[d[8],V.MB(c[20]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[33];
V.MN(c[21],[d[8],V.MB(c[18]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[33];
V.MN(c[22],[d[8],V.MB(c[23]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[6]
}ac+=d[34];
if((V.MJ(V.MC(c[38]))||V.MJ(V.MC(c[39])))){ac+=d[35];
var r="";
if(((((V.MJ(V.MC(c[25]))&&(V.MJ(V.MC(c[26])+""==="www")))&&((V.MJ(V.MC(c[27])+""==="hotel"))||(V.MJ(V.MC(c[27])+""==="searchresults"))))&&V.MJ("cQZJARGUJbWTaSAeMVNaRe"))&&V.MJ(V.track_experiment("cQZJARGUJbWTaSAeMVNaRe")))){r+=d[36]
}V.MN(c[24],r);
ac+=d[37];
if(V.MD(c[24])){ac+=d[38];
var ad="";
ad=z(ad);
ac+=V.F.html(ad);
ac+=d[10]
}ac+=[d[75],V.MC(c[15])].join("");
if(V.MD(c[24])){ac+=d[76]
}else{if(V.MD(c[24])){ac+=d[77]
}}ac+=d[78];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[10])
}ac+=d[17];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[8])
}ac+=d[79];
if(V.MD(c[38])){ac+=d[80];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[10])
}ac+=d[17];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[21])
}ac+=[d[81],V.MC(c[5]),d[82]].join("")
}ac+=d[83];
if(V.MD(c[39])){ac+=d[84];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[10])
}ac+=d[17];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[22])
}ac+=d[85]
}ac+=d[86]
}ac+=d[4]
}else{ac+=d[87]
}}}}}}ac+=d[88]
}else{if(V.MD(c[48])){ac+=d[3];
if(((V.MJ(V.MC(c[26])+""==="mg_family"))||(V.MJ(V.MC(c[41])+""==="emk")))){ac+=d[89];
V.MN(c[40],undefined);
ac+=d[3]
}else{ac+=d[89];
V.MN(c[40],d[90]);
ac+=d[3]
}ac+=d[3];
var ab=V.MC(c[2]);
if((V.MJ(ab+""==="extended"))){ac+=d[6];
if((V.MJ(V.MC(c[38]))&&V.MJ(V.MC(c[39])))){ac+=d[33];
V.MN(c[42],[d[91],V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}else{if(V.MD(c[38])){ac+=d[33];
V.MN(c[42],[d[93],V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}else{if(V.MD(c[39])){ac+=d[33];
V.MN(c[42],[d[94],V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}else{ac+=d[33];
V.MN(c[42],[d[95],V.MC(c[0]),V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}}}ac+=[d[96],V.STATIC_HOSTNAME(V.MC(c[42]),0,0,0),d[97],V.MC(c[0]),d[98],V.MC(c[17]),d[99]].join("");
if(V.MD(c[47])){ac+=[d[100],V.MC(c[0]),d[101],(V.MC(c[43])||"auto"),d[102],(V.MC(c[44])||"inline-block"),d[103],(V.MC(c[45])||"baseline"),d[104],V.MC(c[46]),d[99]].join("")
}ac+=d[105]
}else{if((V.MJ(ab+""==="freebie_icon"))){ac+=d[6];
V.MN(c[42],[d[106],V.MC(c[19]),V.MC(c[40]),d[92]].join(""));
ac+=[d[96],V.STATIC_HOSTNAME(V.MC(c[42]),0,0,0),d[97],V.MC(c[0]),d[98],V.MC(c[17]),d[99]].join("");
if(V.MD(c[47])){ac+=[d[100],V.MC(c[0]),d[101],(V.MC(c[43])||"auto"),d[102],(V.MC(c[44])||"inline-block"),d[103],(V.MC(c[45])||"baseline"),d[104],V.MC(c[46]),d[99]].join("")
}ac+=d[105]
}else{ac+=d[6];
V.MN(c[42],[d[107],V.MC(c[16]),d[108],V.MC(c[0]),V.MC(c[40]),d[92]].join(""));
ac+=[d[96],V.STATIC_HOSTNAME(V.MC(c[42]),0,0,0),d[97],V.MC(c[0]),d[109],V.MC(c[17]),d[99]].join("");
if(V.MD(c[47])){ac+=[d[100],V.MC(c[0]),d[101],(V.MC(c[43])||"auto"),d[102],(V.MC(c[44])||"inline-block"),d[103],(V.MC(c[45])||"baseline"),d[104],V.MC(c[46]),d[99]].join("")
}ac+=d[110]
}}ac+=d[88]
}else{if(V.MD(c[50])){ac+=d[3];
var r="";
r+=[d[111],V.MC(c[49]),d[108],V.MC(c[16]),d[108],V.MC(c[0]),d[15],V.MC(c[17]),d[15]].join("");
if(V.MD(c[11])){r+=V.MC(c[10])
}r+=d[15];
V.MN(c[15],r);
ac+=[d[112],V.MC(c[15]),d[17],V.MC(c[8]),d[113]].join("")
}else{ac+=d[114]
}}}ac+=d[115];
V.MN("b_type","");
ac+=d[1];
V.MN("b_classname","");
ac+=d[1];
V.MN("b_type_pretty","");
ac+=d[1];
V.MN("b_size","");
ac+=d[1];
V.MN("b_has_tooltip","");
ac+=d[1];
V.MN("b_tooltip","");
ac+=d[1];
V.MN("b_genius_module_tooltip_text","");
ac+=d[1];
V.MN("b_genius_module_tooltip_width","");
ac+=d[1];
V.MN("b_genius_module_insert_classes","");
ac+=d[1];
V.MN("b_genius_module_tooltip_attr","");
ac+=d[1];
V.MN("b_genius_module_tooltip_class","");
ac+=d[1];
V.MN("b_genius_iconfont","");
ac+=d[1];
V.MN("b_genius_img","");
ac+=d[1];
V.MN("b_genius_sprite","");
ac+=d[1];
V.MN("b_inline_style","");
ac+=d[1];
V.MN("b_genius_img_url","");
ac+=d[1];
V.MN("b_inline_style_extra","");
ac+=d[1];
V.MN("b_inline_style_width","");
ac+=d[1];
V.MN("b_inline_style_display","");
ac+=d[1];
V.MN("b_inline_style_vertical_align","");
ac+=d[1];
V.MN("b_genius_module_b_size_iconfont","");
ac+=d[1];
V.MN("b_genius_module_b_size_iconfont_style","");
ac+=d[1];
V.MN("b_genius_discount","");
ac+=d[1];
V.MN("b_ge_discount","");
ac+=d[1];
V.MN("b_ge_freebies","");
ac+=d[1];
V.MN("b_ge_freebies_data","");
ac+=d[1];
V.MN("b_genius_module_tooltip_attr_discount","");
ac+=d[1];
V.MN("b_genius_module_tooltip_attr_freebies","");
ac+=d[1];
V.MN("b_image_suffix","");
ac+=d[59];
return ac
}function k(r){r+=d[139];
h.unshift({b_genius_img:d[116],b_type:d[140]});
r=E(r);
h.shift();
r+=d[59];
return r
}function E(ac){ac+=d[2];
V.MN("b_genius_module_b_size_iconfont",((V.MJ(V.MC(c[0])>0))?V.MC(c[0]):""));
ac+=d[1];
V.MN("b_size",((V.MJ(V.MC(c[0])>0))?V.MC(c[0]):24));
ac+=d[1];
V.MN("b_has_tooltip",V.MK((V.MJ(/^false|no|0$/.test(V.MC(c[1]))))));
ac+=d[1];
if(((V.MJ(V.MC(c[2])+""==="freebie_icon"))&&((V.MJ(V.MC(c[1])+""===""))||(V.MJ(V.MC(c[1])==0))))){ac+=d[3];
V.MN("b_has_tooltip",0);
ac+=d[1]
}ac+=d[2];
var ab=V.MC(c[2]);
if((V.MJ(ab+""==="plate"))){ac+=d[4];
V.MN("b_genius_module_tooltip_text",V.MB(c[3]));
ac+=d[4];
V.MN("b_type_pretty","ge-bg");
ac+=d[5]
}else{if((V.MJ(ab+""==="booking"))){ac+=d[4];
V.MN("b_type_pretty","i-booking-genius");
ac+=d[5]
}else{if((V.MJ(ab+""==="logo"))){ac+=d[4];
V.MN("b_type_pretty","ge");
ac+=d[4];
V.MN("b_genius_module_tooltip_text",V.MB(c[3]));
ac+=d[5]
}else{if((V.MJ("freebie")||V.MJ("freebie_icon"))){ac+=d[4];
if(V.MK(V.MC(c[5]))){ac+=d[6];
V.MN("b_genius_discount",V.MB(c[4]));
ac+=d[4]
}ac+=d[5]
}else{if((V.MJ(ab+""==="extended"))){ac+=d[4];
if(V.MK(V.MC(c[5]))){ac+=d[6];
V.MN("b_genius_discount",V.MB(c[4]));
ac+=d[4]
}ac+=d[5]
}else{ac+=d[7]
}}}}}ac+=d[2];
V.MN("b_genius_module_tooltip_text",(V.MC(c[1])||V.MC(c[6])));
ac+=d[1];
V.MN("b_genius_module_tooltip_width",(V.MC(c[7])?200:""));
ac+=d[1];
if(V.MD(c[11])){ac+=d[3];
V.MN(c[8],[d[8],V.MC(c[6]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[3];
V.MN(c[10],d[11]);
ac+=d[1]
}ac+=d[2];
if((V.MJ(V.MC(c[14]))&&V.MJ(V.MC(c[13])))){ac+=d[3];
V.MN(c[12],[d[12],V.MC(c[13]),d[13]].join(""));
ac+=d[1]
}ac+=d[14];
if(V.MD(c[14])){ac+=d[3];
var r="";
r+=[d[15],V.MC(c[16]),d[15],V.MC(c[17]),d[15]].join("");
if(V.MD(c[11])){r+=V.MC(c[10])
}r+=d[15];
V.MN(c[15],r);
ac+=d[3];
var ab=V.MC(c[2]);
if((V.MJ(ab+""==="plate"))){ac+=[d[16],V.MC(c[15]),d[17],V.MC(c[8]),d[15],V.MC(c[12]),d[18]].join("")
}else{if((V.MJ(ab+""==="discount"))){ac+=[d[19],V.MC(c[15]),d[20],V.MB(c[18]),d[9],V.MC(c[9]),d[17],V.MC(c[12]),d[21]].join("")
}else{if((V.MJ(ab+""==="booking"))){ac+=[d[22],V.MC(c[15]),d[17],V.MC(c[8]),d[15],V.MC(c[12]),d[23]].join("")
}else{if((V.MJ(ab+""==="logo"))){ac+=[d[24],V.MC(c[15]),d[17],V.MC(c[8]),d[15],V.MC(c[12]),d[25]].join("")
}else{if((V.MJ(ab+""==="freebie_icon"))){ac+=[d[26],V.MC(c[15]),d[17],V.MC(c[8]),d[27]].join("");
if((V.MJ(V.MC(c[19])+""==="discount"))){ac+=[d[28],V.MC(c[5]),d[29]].join("")
}else{ac+=[d[30],V.MC(c[19]),d[31]].join("")
}ac+=d[32]
}else{if((V.MJ(ab+""==="extended"))){ac+=d[6];
V.MN(c[15],[d[15],V.MC(c[16]),d[15],V.MC(c[17]),d[15]].join(""));
ac+=d[6];
if(V.MJ(V.MC(c[11]))){ac+=d[33];
V.MN(c[8],[d[8],V.MB(c[20]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[33];
V.MN(c[21],[d[8],V.MB(c[18]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[33];
V.MN(c[22],[d[8],V.MB(c[23]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[6]
}ac+=d[34];
if((V.MJ(V.MC(c[38]))||V.MJ(V.MC(c[39])))){ac+=d[35];
var r="";
if(((((V.MJ(V.MC(c[25]))&&(V.MJ(V.MC(c[26])+""==="www")))&&((V.MJ(V.MC(c[27])+""==="hotel"))||(V.MJ(V.MC(c[27])+""==="searchresults"))))&&V.MJ("cQZJARGUJbWTaSAeMVNaRe"))&&V.MJ(V.track_experiment("cQZJARGUJbWTaSAeMVNaRe")))){r+=d[36]
}V.MN(c[24],r);
ac+=d[37];
if(V.MD(c[24])){ac+=d[38];
var ad="";
ad=A(ad);
ac+=V.F.html(ad);
ac+=d[10]
}ac+=[d[75],V.MC(c[15])].join("");
if(V.MD(c[24])){ac+=d[76]
}else{if(V.MD(c[24])){ac+=d[77]
}}ac+=d[78];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[10])
}ac+=d[17];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[8])
}ac+=d[79];
if(V.MD(c[38])){ac+=d[80];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[10])
}ac+=d[17];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[21])
}ac+=[d[81],V.MC(c[5]),d[82]].join("")
}ac+=d[83];
if(V.MD(c[39])){ac+=d[84];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[10])
}ac+=d[17];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[22])
}ac+=d[85]
}ac+=d[86]
}ac+=d[4]
}else{ac+=d[87]
}}}}}}ac+=d[88]
}else{if(V.MD(c[48])){ac+=d[3];
if(((V.MJ(V.MC(c[26])+""==="mg_family"))||(V.MJ(V.MC(c[41])+""==="emk")))){ac+=d[89];
V.MN(c[40],undefined);
ac+=d[3]
}else{ac+=d[89];
V.MN(c[40],d[90]);
ac+=d[3]
}ac+=d[3];
var ab=V.MC(c[2]);
if((V.MJ(ab+""==="extended"))){ac+=d[6];
if((V.MJ(V.MC(c[38]))&&V.MJ(V.MC(c[39])))){ac+=d[33];
V.MN(c[42],[d[91],V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}else{if(V.MD(c[38])){ac+=d[33];
V.MN(c[42],[d[93],V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}else{if(V.MD(c[39])){ac+=d[33];
V.MN(c[42],[d[94],V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}else{ac+=d[33];
V.MN(c[42],[d[95],V.MC(c[0]),V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}}}ac+=[d[96],V.STATIC_HOSTNAME(V.MC(c[42]),0,0,0),d[97],V.MC(c[0]),d[98],V.MC(c[17]),d[99]].join("");
if(V.MD(c[47])){ac+=[d[100],V.MC(c[0]),d[101],(V.MC(c[43])||"auto"),d[102],(V.MC(c[44])||"inline-block"),d[103],(V.MC(c[45])||"baseline"),d[104],V.MC(c[46]),d[99]].join("")
}ac+=d[105]
}else{if((V.MJ(ab+""==="freebie_icon"))){ac+=d[6];
V.MN(c[42],[d[106],V.MC(c[19]),V.MC(c[40]),d[92]].join(""));
ac+=[d[96],V.STATIC_HOSTNAME(V.MC(c[42]),0,0,0),d[97],V.MC(c[0]),d[98],V.MC(c[17]),d[99]].join("");
if(V.MD(c[47])){ac+=[d[100],V.MC(c[0]),d[101],(V.MC(c[43])||"auto"),d[102],(V.MC(c[44])||"inline-block"),d[103],(V.MC(c[45])||"baseline"),d[104],V.MC(c[46]),d[99]].join("")
}ac+=d[105]
}else{ac+=d[6];
V.MN(c[42],[d[107],V.MC(c[16]),d[108],V.MC(c[0]),V.MC(c[40]),d[92]].join(""));
ac+=[d[96],V.STATIC_HOSTNAME(V.MC(c[42]),0,0,0),d[97],V.MC(c[0]),d[109],V.MC(c[17]),d[99]].join("");
if(V.MD(c[47])){ac+=[d[100],V.MC(c[0]),d[101],(V.MC(c[43])||"auto"),d[102],(V.MC(c[44])||"inline-block"),d[103],(V.MC(c[45])||"baseline"),d[104],V.MC(c[46]),d[99]].join("")
}ac+=d[110]
}}ac+=d[88]
}else{if(V.MD(c[50])){ac+=d[3];
var r="";
r+=[d[111],V.MC(c[49]),d[108],V.MC(c[16]),d[108],V.MC(c[0]),d[15],V.MC(c[17]),d[15]].join("");
if(V.MD(c[11])){r+=V.MC(c[10])
}r+=d[15];
V.MN(c[15],r);
ac+=[d[112],V.MC(c[15]),d[17],V.MC(c[8]),d[113]].join("")
}else{ac+=d[114]
}}}ac+=d[115];
V.MN("b_type","");
ac+=d[1];
V.MN("b_classname","");
ac+=d[1];
V.MN("b_type_pretty","");
ac+=d[1];
V.MN("b_size","");
ac+=d[1];
V.MN("b_has_tooltip","");
ac+=d[1];
V.MN("b_tooltip","");
ac+=d[1];
V.MN("b_genius_module_tooltip_text","");
ac+=d[1];
V.MN("b_genius_module_tooltip_width","");
ac+=d[1];
V.MN("b_genius_module_insert_classes","");
ac+=d[1];
V.MN("b_genius_module_tooltip_attr","");
ac+=d[1];
V.MN("b_genius_module_tooltip_class","");
ac+=d[1];
V.MN("b_genius_iconfont","");
ac+=d[1];
V.MN("b_genius_img","");
ac+=d[1];
V.MN("b_genius_sprite","");
ac+=d[1];
V.MN("b_inline_style","");
ac+=d[1];
V.MN("b_genius_img_url","");
ac+=d[1];
V.MN("b_inline_style_extra","");
ac+=d[1];
V.MN("b_inline_style_width","");
ac+=d[1];
V.MN("b_inline_style_display","");
ac+=d[1];
V.MN("b_inline_style_vertical_align","");
ac+=d[1];
V.MN("b_genius_module_b_size_iconfont","");
ac+=d[1];
V.MN("b_genius_module_b_size_iconfont_style","");
ac+=d[1];
V.MN("b_genius_discount","");
ac+=d[1];
V.MN("b_ge_discount","");
ac+=d[1];
V.MN("b_ge_freebies","");
ac+=d[1];
V.MN("b_ge_freebies_data","");
ac+=d[1];
V.MN("b_genius_module_tooltip_attr_discount","");
ac+=d[1];
V.MN("b_genius_module_tooltip_attr_freebies","");
ac+=d[1];
V.MN("b_image_suffix","");
ac+=d[59];
return ac
}function H(r){r+=d[1];
if(V.MD(c[69])){r+=d[3];
r=k(r);
r+=d[1]
}else{r+=d[3];
if((V.MJ(V.MC(c[26])+""==="mdot"))){r+=d[4];
r=j(r);
r+=d[3]
}else{r+=d[4];
h.unshift({b_genius_iconfont:d[116],b_type:d[140]});
r=D(r);
h.shift();
r+=d[3]
}r+=d[1]
}r+=d[59];
return r
}function l(r){r+=d[1];
h.unshift({b_genius_iconfont:d[116],b_type:d[117]});
r=F(r);
h.shift();
r+=d[59];
return r
}function F(ac){ac+=d[2];
V.MN("b_genius_module_b_size_iconfont",((V.MJ(V.MC(c[0])>0))?V.MC(c[0]):""));
ac+=d[1];
V.MN("b_size",((V.MJ(V.MC(c[0])>0))?V.MC(c[0]):24));
ac+=d[1];
V.MN("b_has_tooltip",V.MK((V.MJ(/^false|no|0$/.test(V.MC(c[1]))))));
ac+=d[1];
if(((V.MJ(V.MC(c[2])+""==="freebie_icon"))&&((V.MJ(V.MC(c[1])+""===""))||(V.MJ(V.MC(c[1])==0))))){ac+=d[3];
V.MN("b_has_tooltip",0);
ac+=d[1]
}ac+=d[2];
var ab=V.MC(c[2]);
if((V.MJ(ab+""==="plate"))){ac+=d[4];
V.MN("b_genius_module_tooltip_text",V.MB(c[3]));
ac+=d[4];
V.MN("b_type_pretty","ge-bg");
ac+=d[5]
}else{if((V.MJ(ab+""==="booking"))){ac+=d[4];
V.MN("b_type_pretty","i-booking-genius");
ac+=d[5]
}else{if((V.MJ(ab+""==="logo"))){ac+=d[4];
V.MN("b_type_pretty","ge");
ac+=d[4];
V.MN("b_genius_module_tooltip_text",V.MB(c[3]));
ac+=d[5]
}else{if((V.MJ("freebie")||V.MJ("freebie_icon"))){ac+=d[4];
if(V.MK(V.MC(c[5]))){ac+=d[6];
V.MN("b_genius_discount",V.MB(c[4]));
ac+=d[4]
}ac+=d[5]
}else{if((V.MJ(ab+""==="extended"))){ac+=d[4];
if(V.MK(V.MC(c[5]))){ac+=d[6];
V.MN("b_genius_discount",V.MB(c[4]));
ac+=d[4]
}ac+=d[5]
}else{ac+=d[7]
}}}}}ac+=d[2];
V.MN("b_genius_module_tooltip_text",(V.MC(c[1])||V.MC(c[6])));
ac+=d[1];
V.MN("b_genius_module_tooltip_width",(V.MC(c[7])?200:""));
ac+=d[1];
if(V.MD(c[11])){ac+=d[3];
V.MN(c[8],[d[8],V.MC(c[6]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[3];
V.MN(c[10],d[11]);
ac+=d[1]
}ac+=d[2];
if((V.MJ(V.MC(c[14]))&&V.MJ(V.MC(c[13])))){ac+=d[3];
V.MN(c[12],[d[12],V.MC(c[13]),d[13]].join(""));
ac+=d[1]
}ac+=d[14];
if(V.MD(c[14])){ac+=d[3];
var r="";
r+=[d[15],V.MC(c[16]),d[15],V.MC(c[17]),d[15]].join("");
if(V.MD(c[11])){r+=V.MC(c[10])
}r+=d[15];
V.MN(c[15],r);
ac+=d[3];
var ab=V.MC(c[2]);
if((V.MJ(ab+""==="plate"))){ac+=[d[16],V.MC(c[15]),d[17],V.MC(c[8]),d[15],V.MC(c[12]),d[18]].join("")
}else{if((V.MJ(ab+""==="discount"))){ac+=[d[19],V.MC(c[15]),d[20],V.MB(c[18]),d[9],V.MC(c[9]),d[17],V.MC(c[12]),d[21]].join("")
}else{if((V.MJ(ab+""==="booking"))){ac+=[d[22],V.MC(c[15]),d[17],V.MC(c[8]),d[15],V.MC(c[12]),d[23]].join("")
}else{if((V.MJ(ab+""==="logo"))){ac+=[d[24],V.MC(c[15]),d[17],V.MC(c[8]),d[15],V.MC(c[12]),d[25]].join("")
}else{if((V.MJ(ab+""==="freebie_icon"))){ac+=[d[26],V.MC(c[15]),d[17],V.MC(c[8]),d[27]].join("");
if((V.MJ(V.MC(c[19])+""==="discount"))){ac+=[d[28],V.MC(c[5]),d[29]].join("")
}else{ac+=[d[30],V.MC(c[19]),d[31]].join("")
}ac+=d[32]
}else{if((V.MJ(ab+""==="extended"))){ac+=d[6];
V.MN(c[15],[d[15],V.MC(c[16]),d[15],V.MC(c[17]),d[15]].join(""));
ac+=d[6];
if(V.MJ(V.MC(c[11]))){ac+=d[33];
V.MN(c[8],[d[8],V.MB(c[20]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[33];
V.MN(c[21],[d[8],V.MB(c[18]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[33];
V.MN(c[22],[d[8],V.MB(c[23]),d[9],V.MC(c[9]),d[10]].join(""));
ac+=d[6]
}ac+=d[34];
if((V.MJ(V.MC(c[38]))||V.MJ(V.MC(c[39])))){ac+=d[35];
var r="";
if(((((V.MJ(V.MC(c[25]))&&(V.MJ(V.MC(c[26])+""==="www")))&&((V.MJ(V.MC(c[27])+""==="hotel"))||(V.MJ(V.MC(c[27])+""==="searchresults"))))&&V.MJ("cQZJARGUJbWTaSAeMVNaRe"))&&V.MJ(V.track_experiment("cQZJARGUJbWTaSAeMVNaRe")))){r+=d[36]
}V.MN(c[24],r);
ac+=d[37];
if(V.MD(c[24])){ac+=d[38];
var ad="";
ad=C(ad);
ac+=V.F.html(ad);
ac+=d[10]
}ac+=[d[75],V.MC(c[15])].join("");
if(V.MD(c[24])){ac+=d[76]
}else{if(V.MD(c[24])){ac+=d[77]
}}ac+=d[78];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[10])
}ac+=d[17];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[8])
}ac+=d[79];
if(V.MD(c[38])){ac+=d[80];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[10])
}ac+=d[17];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[21])
}ac+=[d[81],V.MC(c[5]),d[82]].join("")
}ac+=d[83];
if(V.MD(c[39])){ac+=d[84];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[10])
}ac+=d[17];
if(V.MK(V.MC(c[24]))){ac+=V.MC(c[22])
}ac+=d[85]
}ac+=d[86]
}ac+=d[4]
}else{ac+=d[87]
}}}}}}ac+=d[88]
}else{if(V.MD(c[48])){ac+=d[3];
if(((V.MJ(V.MC(c[26])+""==="mg_family"))||(V.MJ(V.MC(c[41])+""==="emk")))){ac+=d[89];
V.MN(c[40],undefined);
ac+=d[3]
}else{ac+=d[89];
V.MN(c[40],d[90]);
ac+=d[3]
}ac+=d[3];
var ab=V.MC(c[2]);
if((V.MJ(ab+""==="extended"))){ac+=d[6];
if((V.MJ(V.MC(c[38]))&&V.MJ(V.MC(c[39])))){ac+=d[33];
V.MN(c[42],[d[91],V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}else{if(V.MD(c[38])){ac+=d[33];
V.MN(c[42],[d[93],V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}else{if(V.MD(c[39])){ac+=d[33];
V.MN(c[42],[d[94],V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}else{ac+=d[33];
V.MN(c[42],[d[95],V.MC(c[0]),V.MC(c[40]),d[92]].join(""));
ac+=d[6]
}}}ac+=[d[96],V.STATIC_HOSTNAME(V.MC(c[42]),0,0,0),d[97],V.MC(c[0]),d[98],V.MC(c[17]),d[99]].join("");
if(V.MD(c[47])){ac+=[d[100],V.MC(c[0]),d[101],(V.MC(c[43])||"auto"),d[102],(V.MC(c[44])||"inline-block"),d[103],(V.MC(c[45])||"baseline"),d[104],V.MC(c[46]),d[99]].join("")
}ac+=d[105]
}else{if((V.MJ(ab+""==="freebie_icon"))){ac+=d[6];
V.MN(c[42],[d[106],V.MC(c[19]),V.MC(c[40]),d[92]].join(""));
ac+=[d[96],V.STATIC_HOSTNAME(V.MC(c[42]),0,0,0),d[97],V.MC(c[0]),d[98],V.MC(c[17]),d[99]].join("");
if(V.MD(c[47])){ac+=[d[100],V.MC(c[0]),d[101],(V.MC(c[43])||"auto"),d[102],(V.MC(c[44])||"inline-block"),d[103],(V.MC(c[45])||"baseline"),d[104],V.MC(c[46]),d[99]].join("")
}ac+=d[105]
}else{ac+=d[6];
V.MN(c[42],[d[107],V.MC(c[16]),d[108],V.MC(c[0]),V.MC(c[40]),d[92]].join(""));
ac+=[d[96],V.STATIC_HOSTNAME(V.MC(c[42]),0,0,0),d[97],V.MC(c[0]),d[109],V.MC(c[17]),d[99]].join("");
if(V.MD(c[47])){ac+=[d[100],V.MC(c[0]),d[101],(V.MC(c[43])||"auto"),d[102],(V.MC(c[44])||"inline-block"),d[103],(V.MC(c[45])||"baseline"),d[104],V.MC(c[46]),d[99]].join("")
}ac+=d[110]
}}ac+=d[88]
}else{if(V.MD(c[50])){ac+=d[3];
var r="";
r+=[d[111],V.MC(c[49]),d[108],V.MC(c[16]),d[108],V.MC(c[0]),d[15],V.MC(c[17]),d[15]].join("");
if(V.MD(c[11])){r+=V.MC(c[10])
}r+=d[15];
V.MN(c[15],r);
ac+=[d[112],V.MC(c[15]),d[17],V.MC(c[8]),d[113]].join("")
}else{ac+=d[114]
}}}ac+=d[115];
V.MN("b_type","");
ac+=d[1];
V.MN("b_classname","");
ac+=d[1];
V.MN("b_type_pretty","");
ac+=d[1];
V.MN("b_size","");
ac+=d[1];
V.MN("b_has_tooltip","");
ac+=d[1];
V.MN("b_tooltip","");
ac+=d[1];
V.MN("b_genius_module_tooltip_text","");
ac+=d[1];
V.MN("b_genius_module_tooltip_width","");
ac+=d[1];
V.MN("b_genius_module_insert_classes","");
ac+=d[1];
V.MN("b_genius_module_tooltip_attr","");
ac+=d[1];
V.MN("b_genius_module_tooltip_class","");
ac+=d[1];
V.MN("b_genius_iconfont","");
ac+=d[1];
V.MN("b_genius_img","");
ac+=d[1];
V.MN("b_genius_sprite","");
ac+=d[1];
V.MN("b_inline_style","");
ac+=d[1];
V.MN("b_genius_img_url","");
ac+=d[1];
V.MN("b_inline_style_extra","");
ac+=d[1];
V.MN("b_inline_style_width","");
ac+=d[1];
V.MN("b_inline_style_display","");
ac+=d[1];
V.MN("b_inline_style_vertical_align","");
ac+=d[1];
V.MN("b_genius_module_b_size_iconfont","");
ac+=d[1];
V.MN("b_genius_module_b_size_iconfont_style","");
ac+=d[1];
V.MN("b_genius_discount","");
ac+=d[1];
V.MN("b_ge_discount","");
ac+=d[1];
V.MN("b_ge_freebies","");
ac+=d[1];
V.MN("b_ge_freebies_data","");
ac+=d[1];
V.MN("b_genius_module_tooltip_attr_discount","");
ac+=d[1];
V.MN("b_genius_module_tooltip_attr_freebies","");
ac+=d[1];
V.MN("b_image_suffix","");
ac+=d[59];
return ac
}U+=d[0];
h.unshift({b_classname:d[118],b_color:d[119],b_size:d[120],b_tooltip:d[121]});
U=l(U);
h.shift();
U+=[d[122],V.MB(c[51]),d[123]].join("");
if(V.MJ(V.MG((V.MC(c[52])||{})["is_aspiring"]))){U+=[d[124],V.MG((V.MC(c[52])||{})["num_stays"]),d[125]].join("")
}U+=d[126];
if(V.MJ(V.MG((V.MC(c[52])||{})["is_aspiring"]))){U+=[d[6],(h.unshift({num_stays_needed:V.MG((V.MC(c[52])||{})["num_stays_left"])}),(e=V.VP(d[127],(V.MI((V.MC(c[52])["num_stays_left"]||0))+V.MI(0)))),h.shift(),e),d[128]].join("")
}else{U+=d[6];
if(V.MJ(V.MG((V.MC(c[52])||{})["first_name"]))){U+=[d[33],(h.unshift({first_name:V.MG((V.MC(c[52])||{})["first_name"])}),(e=V.MB(c[53])),h.shift(),e),d[6]].join("")
}else{U+=[d[33],V.MB(c[54]),d[6]].join("")
}U+=d[128]
}U+=d[129];
if(V.MJ(V.MG((V.MC(c[52])||{})["is_aspiring"]))){U+=[d[6],(h.unshift({num_stays_needed:V.MG((V.MC(c[52])||{})["num_stays_left"])}),(e=V.VP(d[130],(V.MI((V.MC(c[52])["num_stays_left"]||0))+V.MI(0)))),h.shift(),e),d[128]].join("")
}else{U+=d[6];
if(V.MJ(V.MG((V.MC(c[52])||{})["num_stays"]))){U+=[d[33],V.MB(c[55]),d[6]].join("")
}else{U+=[d[33],V.MB(c[56]),d[6]].join("")
}U+=d[128]
}U+=[d[131],V.MB(c[57]),d[132]].join("");
if(V.MD(c[59])){U+=V.MB(c[58])
}else{U+=V.MB(c[60])
}U+=d[133];
if(V.MD(c[59])){U+=V.MB(c[61])
}else{U+=V.MB(c[62])
}U+=[d[134],V.MB(c[63]),d[133],V.MB(c[64]),d[135],V.MB(c[65]),d[133],V.MB(c[66]),d[136],V.MB(c[67]),d[133],V.MB(c[68]),d[137]].join("");
if(!(V.MJ(V.MG((V.MC(c[52])||{})["is_aspiring"])))){U+=d[138];
h.unshift({b_classname:d[150],b_ge_discount:d[36],b_ge_freebies:d[36],b_tooltip:d[121]});
U=H(U);
h.shift();
U+=[d[151],V.MB(c[74]),d[152]].join("")
}U+=[d[153],V.MB(c[75]),d[154]].join("");
return U
}
})());
booking.jstmpl("ge_renew_lightbox",(function(){var d=['\n    \u003cdiv class="ge-renew-lightbox-container"\u003e\n        \u003ch1 class="ge-mod-genius-logo-container"\u003e\n        ',"\n    ","\n\n    \n    ","\n        ","\n            ","\n\n        ","\n                ","\n            \n    ",'title="','" rel="','"'," jq_tooltip",' style="font-size: ','px"',"\n\n    \n    \n    \n\n    \n    \n    "," ",'\n                \u003cspan class="ge-iconfont-plate ','" ','\u003e\n                    \u003ci class="bicon-dotgeniusbg"\u003e\u003c/i\u003e\n                    \u003ci class="bicon-dotgeniusfold"\u003e\u003c/i\u003e\n                    \u003ci class="bicon-dotgenius"\u003e\u003c/i\u003e\n                \u003c/span\u003e\n            ','\n                \u003cspan class="ge-iconfont-discount ','" title="','\u003e\n                    \u003ci class="geicon-square-round-cut"\u003e\u003c/i\u003e\n                    \u003ci class="geicon-square-round-flap"\u003e\u003c/i\u003e\n                    \u003ci class="geicon-freebie-percentage"\u003e\u003c/i\u003e\n                \u003c/span\u003e\n            ','\n                \u003cspan class="ge-iconfont-booking ','\u003e\n                    \u003ci class="bicon-booking"\u003e\u003c/i\u003e\u003ci class="bicon-bookingdotgenius"\u003e\u003c/i\u003e\n                \u003c/span\u003e\n            ','\n                \u003cspan class="ge-iconfont-logo ','\u003e\n                    \u003ci class="bicon-bookingdotgenius"\u003e\u003c/i\u003e\n                \u003c/span\u003e\n            ','\n                \u003cspan class="genius-extended-module genius-extended-module-standalone ',"\u003e\n                    ",'\n                        \u003ci class="ge-discount-rate"\u003e',"\u003c/i\u003e\n                    ",'\n                        \u003ci class="bicon-','"\u003e\u003c/i\u003e\n                    ',"\n                \u003c/span\u003e\n            ","\n                    ","\n\n                ","\n\n                    ","1","\n                    \u003cspan\n                        ",'data-content-tooltip="','\u003cdiv class="ge-freebies-dropdown--header"\u003e','\u003c/div\u003e\n\u003cul class="ge-freebies-dropdown--list"\u003e\n    ',"\n        \u003cli\u003e\n            ",'\n            \u003cspan class="genius-extended-module-standalone-container"\u003e\n                ','\n    \u003cspan class="genius-extended-module genius-extended-module-standalone"\u003e\n        ','\n            \u003ci class="ge-discount-rate"\u003e',"\u003c/i\u003e\n        ","discount",'\n            \u003ci class="bicon-','"\u003e\u003c/i\u003e\n        ',"\n    \u003c/span\u003e\n",'\n            \u003c/span\u003e\n            \u003cspan class="ge-freebie-item-text"\u003e\n                ',"\n            \u003c/span\u003e\n        \u003c/li\u003e\n    ","\n\n","\n\t\u003cli ",'class="freebie-list-full-size"','\u003e\n\t\t\u003cspan class="genius-extended-module-standalone-container"\u003e\n\t\t\t',"earlycheckin",'\n\t\t\u003c/span\u003e\n\t\t\u003cspan class="ge-freebie-item-text"\u003e\n\t\t\t',"\n\t\t\u003c/span\u003e\n\t\u003c/li\u003e\n","\n","latecheckout","shuttlesmall","bike","bar","\n\t","\n\t\t","\n\t\t\t\u003cli ",'\u003e\n\t\t\t\t\u003cspan class="genius-extended-module-standalone-container"\u003e\n\t\t\t\t\t',"parking",'\n\t\t\t\t\u003c/span\u003e\n\t\t\t\t\u003cspan class="ge-freebie-item-text"\u003e\n\t\t\t\t\t',"/genius_perks/8/one_line","\n\t\t\t\t\u003c/span\u003e\n\t\t\t\u003c/li\u003e\n\t\t","wifi","/genius_perks/9/one_line","\n\u003c/ul\u003e\n",'\n                        class="ge-iconfont-extended '," js-fly-content-tooltip ge-iconfont-extended-dd"," jq_tooltip ge-iconfont-extended-dd",'"\n                    \u003e\n                        \u003ci class="bicon-bookingdotgenius ',"\u003e\u003c/i\u003e\n                        ",'\n                                 \u003cspan class="genius-extended-module genius-extended-module-discount ','\u003e\u003ci class="ge-discount-rate"\u003e',"\u003c/i\u003e\u003c/span\u003e\n                        ","\n                        ",'\n                            \u003cspan class="genius-extended-module genius-extended-module-freebies ','\u003e\u003ci class="bicon-gift"\u003e\u003c/i\u003e\u003c/span\u003e\n                        ',"\n                    \u003c/span\u003e\n\n                ","\n                \n        ","\n\n    \n    \n    ","\n            \n            ","@2x","/static/img/genius_icons/genius_module/img/freebies/genius-extended-discount-freebies",".png","/static/img/genius_icons/genius_module/img/freebies/genius-extended-discount","/static/img/genius_icons/genius_module/img/freebies/genius-extended-freebies","/static/img/genius_icons/genius_module/img/genius-plate-img-white-",'\n                \u003cimg src="','" height="','" alt="" class="ge-freebie-icon-img ','"\n                    ','\n                        style="height: ',"px;\n                        width: ",";\n                        display: ",";\n                        vertical-align: ",";\n                        "," \u003e\n            ","/static/img/genius_icons/genius_module/img/freebies/","/static/img/genius_icons/genius_module/img/genius-plate-img-","-",'" alt="Genius" class="ge-img-plate '," \u003e\n        ","gesprite ",'\n        \u003ci class="',"\u003e\u003c/i\u003e\n\n    ",'\n        \u003cspan class="genius-module-no-format"\u003e\u003c/span\u003e\n    '," \n\n    \n    \n    ","true","plate","ge-mod-genius-logo","white","40","false",'\n        \u003c/h1\u003e\n        \u003cp class="ge-slogan"\u003e',"\u003c/p\u003e\n\n        ",'\n\n        \u003ch2 class="ge-mod-title-renewal"\u003e\n          ',"ge_lbox_renewal_header",'\n        \u003c/h2\u003e\n        \u003cdiv class="ge-renewal-suitcases ge-renewal-','-suitcases"\u003e\u003c/div\u003e\n        \n        \u003cp class="ge-mod-description-renewal"\u003e\n          '," \u003cbr/\u003e\n          ","ge_lbox_renewal_p2",' \u003cbr/\u003e\n        \u003c/p\u003e\n        \u003cdiv class="ge-mod-button-container"\u003e\n            \u003ca href="#" class="ge-mod-button b-button b-button_primary"\u003e',"\u003c/a\u003e\n        \u003c/div\u003e\n    \u003c/div\u003e\n"],c=["b_size","b_tooltip","b_type","genius_icon_tooltip","genius_icon_10_percent","b_genius_discount","b_genius_module_tooltip_text","b_is_tablet","b_genius_module_tooltip_attr","tooltip_width","b_genius_module_tooltip_class","b_has_tooltip","b_genius_module_b_size_iconfont_style","b_genius_module_b_size_iconfont","b_genius_iconfont","b_genius_module_insert_classes","b_color","b_classname","genius_frube_genius_ten_tooltip","b_freebie","genius_frube_genius_logo_tooltip","b_genius_module_tooltip_attr_discount","b_genius_module_tooltip_attr_freebies","genius_frube_genius_freebie_tooltip","b_ge_freebies_tooltip","b_reg_user_is_genius","b_site_type","b_action","genius_frube_tooltip_benefits","genius_box_hotel_page_ten_percent_icon","b_hotel_has_genius_rate_available","b_genius_perks_full_size","genius_widget_perks_early_check_in_tooltip","b_genius_freebies","genius_widget_perks_late","genius_widget_perks_airport_shuttle_tooltip","genius_widget_perks_bike_rental_tooltip","genius_widget_perks_welcome_drink_tooltip","b_ge_discount","b_ge_freebies","b_image_suffix","b_server_role","b_genius_img_url","b_inline_style_width","b_inline_style_display","b_inline_style_vertical_align","b_inline_style_extra","b_inline_style","b_genius_img","b_type_pretty","b_genius_sprite","genius_pp_travel_rewards_programme","b_genius_user","ge_lbox_renewal_p1","ge_lbox_renewal_button"],g,f,e;
return function(o){var A="",j=this.fn;
function n(r){return r
}function w(r){r+=d[43];
if((j.MJ(d[68]+""==="discount"))){r+=[d[44],j.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[68],d[48]].join("")
}r+=d[49];
return r
}function t(r){r+=d[43];
if((j.MJ(d[72]+""==="discount"))){r+=[d[44],j.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[72],d[48]].join("")
}r+=d[49];
return r
}function m(r){r+=d[43];
if((j.MJ(d[46]+""==="discount"))){r+=[d[44],j.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[46],d[48]].join("")
}r+=d[49];
return r
}function k(r){r+=d[43];
if((j.MJ(d[56]+""==="discount"))){r+=[d[44],j.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[56],d[48]].join("")
}r+=d[49];
return r
}function h(r){r+=d[43];
if((j.MJ(d[60]+""==="discount"))){r+=[d[44],j.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[60],d[48]].join("")
}r+=d[49];
return r
}function z(r){r+=d[43];
if((j.MJ(d[61]+""==="discount"))){r+=[d[44],j.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[61],d[48]].join("")
}r+=d[49];
return r
}function y(r){r+=d[43];
if((j.MJ(d[62]+""==="discount"))){r+=[d[44],j.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[62],d[48]].join("")
}r+=d[49];
return r
}function x(r){r+=d[43];
if((j.MJ(d[63]+""==="discount"))){r+=[d[44],j.MC(c[5]),d[45]].join("")
}else{r+=[d[47],d[63],d[48]].join("")
}r+=d[49];
return r
}function u(r){r+=[d[39],j.MB(c[28]),d[40]].join("");
if(j.MD(c[30])){r+=d[41];
r=n(r);
r+=d[42];
o.unshift({b_freebie:d[46]});
r=m(r);
o.shift();
r+=[d[50],j.MB(c[29]),d[51]].join("")
}r+=d[1];
r=p(r);
r+=d[74];
return r
}function p(r){r=n(r);
r+=d[52];
if(j.MJ(j.MG((j.MC(c[33])||{})["b_genius_perks_widget_early"]))){r+=d[53];
if(j.MD(c[31])){r+=d[54]
}r+=d[55];
o.unshift({b_freebie:d[56]});
r=k(r);
o.shift();
r+=[d[57],j.MB(c[32]),d[58]].join("")
}r+=d[59];
if(j.MJ(j.MG((j.MC(c[33])||{})["b_ext_deals_genius_freebie_cta"]))){r+=d[53];
if(j.MD(c[31])){r+=d[54]
}r+=d[55];
o.unshift({b_freebie:d[60]});
r=h(r);
o.shift();
r+=[d[57],j.MB(c[34]),d[58]].join("")
}r+=d[59];
if(j.MJ(j.MG((j.MC(c[33])||{})["b_genius_perks_widget_shuttle"]))){r+=d[53];
if(j.MD(c[31])){r+=d[54]
}r+=d[55];
o.unshift({b_freebie:d[61]});
r=z(r);
o.shift();
r+=[d[57],j.MB(c[35]),d[58]].join("")
}r+=d[59];
if(j.MJ(j.MG((j.MC(c[33])||{})["b_genius_perks_widget_bike"]))){r+=d[53];
if(j.MD(c[31])){r+=d[54]
}r+=d[55];
o.unshift({b_freebie:d[62]});
r=y(r);
o.shift();
r+=[d[57],j.MB(c[36]),d[58]].join("")
}r+=d[59];
if(j.MJ(j.MG((j.MC(c[33])||{})["b_genius_perks_widget_drink"]))){r+=d[53];
if(j.MD(c[31])){r+=d[54]
}r+=d[55];
o.unshift({b_freebie:d[63]});
r=x(r);
o.shift();
r+=[d[57],j.MB(c[37]),d[58]].join("")
}r+=d[59];
if((j.MJ(j.MC(c[33]))&&(j.MJ(j.MC(c[33])["b_genius_perks_widget_parking"])||j.MJ(j.MC(c[33])["b_genius_perks_widget_wifi"])))){r+=d[64];
if(j.MJ(j.track_experiment("ge_high_demand_freebies_wifi_parking"))){r+=d[65];
if(j.MJ(j.MG((j.MC(c[33])||{})["b_genius_perks_widget_parking"]))){r+=d[66];
if(j.MD(c[31])){r+=d[54]
}r+=d[67];
o.unshift({b_freebie:d[68]});
r=w(r);
o.shift();
r+=[d[69],j.ME(d[70],j.MB,j.MN,null),d[71]].join("")
}r+=d[65];
if(j.MJ(j.MG((j.MC(c[33])||{})["b_genius_perks_widget_wifi"]))){r+=d[66];
if(j.MD(c[31])){r+=d[54]
}r+=d[67];
o.unshift({b_freebie:d[72]});
r=t(r);
o.shift();
r+=[d[69],j.ME(d[73],j.MB,j.MN,null),d[71]].join("")
}r+=d[64]
}r+=d[59]
}return r
}function l(r){r+=d[1];
o.unshift({b_genius_iconfont:d[116],b_type:d[117]});
r=q(r);
o.shift();
r+=d[59];
return r
}function q(D){D+=d[2];
j.MN("b_genius_module_b_size_iconfont",((j.MJ(j.MC(c[0])>0))?j.MC(c[0]):""));
D+=d[1];
j.MN("b_size",((j.MJ(j.MC(c[0])>0))?j.MC(c[0]):24));
D+=d[1];
j.MN("b_has_tooltip",j.MK((j.MJ(/^false|no|0$/.test(j.MC(c[1]))))));
D+=d[1];
if(((j.MJ(j.MC(c[2])+""==="freebie_icon"))&&((j.MJ(j.MC(c[1])+""===""))||(j.MJ(j.MC(c[1])==0))))){D+=d[3];
j.MN("b_has_tooltip",0);
D+=d[1]
}D+=d[2];
var C=j.MC(c[2]);
if((j.MJ(C+""==="plate"))){D+=d[4];
j.MN("b_genius_module_tooltip_text",j.MB(c[3]));
D+=d[4];
j.MN("b_type_pretty","ge-bg");
D+=d[5]
}else{if((j.MJ(C+""==="booking"))){D+=d[4];
j.MN("b_type_pretty","i-booking-genius");
D+=d[5]
}else{if((j.MJ(C+""==="logo"))){D+=d[4];
j.MN("b_type_pretty","ge");
D+=d[4];
j.MN("b_genius_module_tooltip_text",j.MB(c[3]));
D+=d[5]
}else{if((j.MJ("freebie")||j.MJ("freebie_icon"))){D+=d[4];
if(j.MK(j.MC(c[5]))){D+=d[6];
j.MN("b_genius_discount",j.MB(c[4]));
D+=d[4]
}D+=d[5]
}else{if((j.MJ(C+""==="extended"))){D+=d[4];
if(j.MK(j.MC(c[5]))){D+=d[6];
j.MN("b_genius_discount",j.MB(c[4]));
D+=d[4]
}D+=d[5]
}else{D+=d[7]
}}}}}D+=d[2];
j.MN("b_genius_module_tooltip_text",(j.MC(c[1])||j.MC(c[6])));
D+=d[1];
j.MN("b_genius_module_tooltip_width",(j.MC(c[7])?200:""));
D+=d[1];
if(j.MD(c[11])){D+=d[3];
j.MN(c[8],[d[8],j.MC(c[6]),d[9],j.MC(c[9]),d[10]].join(""));
D+=d[3];
j.MN(c[10],d[11]);
D+=d[1]
}D+=d[2];
if((j.MJ(j.MC(c[14]))&&j.MJ(j.MC(c[13])))){D+=d[3];
j.MN(c[12],[d[12],j.MC(c[13]),d[13]].join(""));
D+=d[1]
}D+=d[14];
if(j.MD(c[14])){D+=d[3];
var r="";
r+=[d[15],j.MC(c[16]),d[15],j.MC(c[17]),d[15]].join("");
if(j.MD(c[11])){r+=j.MC(c[10])
}r+=d[15];
j.MN(c[15],r);
D+=d[3];
var C=j.MC(c[2]);
if((j.MJ(C+""==="plate"))){D+=[d[16],j.MC(c[15]),d[17],j.MC(c[8]),d[15],j.MC(c[12]),d[18]].join("")
}else{if((j.MJ(C+""==="discount"))){D+=[d[19],j.MC(c[15]),d[20],j.MB(c[18]),d[9],j.MC(c[9]),d[17],j.MC(c[12]),d[21]].join("")
}else{if((j.MJ(C+""==="booking"))){D+=[d[22],j.MC(c[15]),d[17],j.MC(c[8]),d[15],j.MC(c[12]),d[23]].join("")
}else{if((j.MJ(C+""==="logo"))){D+=[d[24],j.MC(c[15]),d[17],j.MC(c[8]),d[15],j.MC(c[12]),d[25]].join("")
}else{if((j.MJ(C+""==="freebie_icon"))){D+=[d[26],j.MC(c[15]),d[17],j.MC(c[8]),d[27]].join("");
if((j.MJ(j.MC(c[19])+""==="discount"))){D+=[d[28],j.MC(c[5]),d[29]].join("")
}else{D+=[d[30],j.MC(c[19]),d[31]].join("")
}D+=d[32]
}else{if((j.MJ(C+""==="extended"))){D+=d[6];
j.MN(c[15],[d[15],j.MC(c[16]),d[15],j.MC(c[17]),d[15]].join(""));
D+=d[6];
if(j.MJ(j.MC(c[11]))){D+=d[33];
j.MN(c[8],[d[8],j.MB(c[20]),d[9],j.MC(c[9]),d[10]].join(""));
D+=d[33];
j.MN(c[21],[d[8],j.MB(c[18]),d[9],j.MC(c[9]),d[10]].join(""));
D+=d[33];
j.MN(c[22],[d[8],j.MB(c[23]),d[9],j.MC(c[9]),d[10]].join(""));
D+=d[6]
}D+=d[34];
if((j.MJ(j.MC(c[38]))||j.MJ(j.MC(c[39])))){D+=d[35];
var r="";
if(((((j.MJ(j.MC(c[25]))&&(j.MJ(j.MC(c[26])+""==="www")))&&((j.MJ(j.MC(c[27])+""==="hotel"))||(j.MJ(j.MC(c[27])+""==="searchresults"))))&&j.MJ("cQZJARGUJbWTaSAeMVNaRe"))&&j.MJ(j.track_experiment("cQZJARGUJbWTaSAeMVNaRe")))){r+=d[36]
}j.MN(c[24],r);
D+=d[37];
if(j.MD(c[24])){D+=d[38];
var E="";
E=u(E);
D+=j.F.html(E);
D+=d[10]
}D+=[d[75],j.MC(c[15])].join("");
if(j.MD(c[24])){D+=d[76]
}else{if(j.MD(c[24])){D+=d[77]
}}D+=d[78];
if(j.MK(j.MC(c[24]))){D+=j.MC(c[10])
}D+=d[17];
if(j.MK(j.MC(c[24]))){D+=j.MC(c[8])
}D+=d[79];
if(j.MD(c[38])){D+=d[80];
if(j.MK(j.MC(c[24]))){D+=j.MC(c[10])
}D+=d[17];
if(j.MK(j.MC(c[24]))){D+=j.MC(c[21])
}D+=[d[81],j.MC(c[5]),d[82]].join("")
}D+=d[83];
if(j.MD(c[39])){D+=d[84];
if(j.MK(j.MC(c[24]))){D+=j.MC(c[10])
}D+=d[17];
if(j.MK(j.MC(c[24]))){D+=j.MC(c[22])
}D+=d[85]
}D+=d[86]
}D+=d[4]
}else{D+=d[87]
}}}}}}D+=d[88]
}else{if(j.MD(c[48])){D+=d[3];
if(((j.MJ(j.MC(c[26])+""==="mg_family"))||(j.MJ(j.MC(c[41])+""==="emk")))){D+=d[89];
j.MN(c[40],undefined);
D+=d[3]
}else{D+=d[89];
j.MN(c[40],d[90]);
D+=d[3]
}D+=d[3];
var C=j.MC(c[2]);
if((j.MJ(C+""==="extended"))){D+=d[6];
if((j.MJ(j.MC(c[38]))&&j.MJ(j.MC(c[39])))){D+=d[33];
j.MN(c[42],[d[91],j.MC(c[40]),d[92]].join(""));
D+=d[6]
}else{if(j.MD(c[38])){D+=d[33];
j.MN(c[42],[d[93],j.MC(c[40]),d[92]].join(""));
D+=d[6]
}else{if(j.MD(c[39])){D+=d[33];
j.MN(c[42],[d[94],j.MC(c[40]),d[92]].join(""));
D+=d[6]
}else{D+=d[33];
j.MN(c[42],[d[95],j.MC(c[0]),j.MC(c[40]),d[92]].join(""));
D+=d[6]
}}}D+=[d[96],j.STATIC_HOSTNAME(j.MC(c[42]),0,0,0),d[97],j.MC(c[0]),d[98],j.MC(c[17]),d[99]].join("");
if(j.MD(c[47])){D+=[d[100],j.MC(c[0]),d[101],(j.MC(c[43])||"auto"),d[102],(j.MC(c[44])||"inline-block"),d[103],(j.MC(c[45])||"baseline"),d[104],j.MC(c[46]),d[99]].join("")
}D+=d[105]
}else{if((j.MJ(C+""==="freebie_icon"))){D+=d[6];
j.MN(c[42],[d[106],j.MC(c[19]),j.MC(c[40]),d[92]].join(""));
D+=[d[96],j.STATIC_HOSTNAME(j.MC(c[42]),0,0,0),d[97],j.MC(c[0]),d[98],j.MC(c[17]),d[99]].join("");
if(j.MD(c[47])){D+=[d[100],j.MC(c[0]),d[101],(j.MC(c[43])||"auto"),d[102],(j.MC(c[44])||"inline-block"),d[103],(j.MC(c[45])||"baseline"),d[104],j.MC(c[46]),d[99]].join("")
}D+=d[105]
}else{D+=d[6];
j.MN(c[42],[d[107],j.MC(c[16]),d[108],j.MC(c[0]),j.MC(c[40]),d[92]].join(""));
D+=[d[96],j.STATIC_HOSTNAME(j.MC(c[42]),0,0,0),d[97],j.MC(c[0]),d[109],j.MC(c[17]),d[99]].join("");
if(j.MD(c[47])){D+=[d[100],j.MC(c[0]),d[101],(j.MC(c[43])||"auto"),d[102],(j.MC(c[44])||"inline-block"),d[103],(j.MC(c[45])||"baseline"),d[104],j.MC(c[46]),d[99]].join("")
}D+=d[110]
}}D+=d[88]
}else{if(j.MD(c[50])){D+=d[3];
var r="";
r+=[d[111],j.MC(c[49]),d[108],j.MC(c[16]),d[108],j.MC(c[0]),d[15],j.MC(c[17]),d[15]].join("");
if(j.MD(c[11])){r+=j.MC(c[10])
}r+=d[15];
j.MN(c[15],r);
D+=[d[112],j.MC(c[15]),d[17],j.MC(c[8]),d[113]].join("")
}else{D+=d[114]
}}}D+=d[115];
j.MN("b_type","");
D+=d[1];
j.MN("b_classname","");
D+=d[1];
j.MN("b_type_pretty","");
D+=d[1];
j.MN("b_size","");
D+=d[1];
j.MN("b_has_tooltip","");
D+=d[1];
j.MN("b_tooltip","");
D+=d[1];
j.MN("b_genius_module_tooltip_text","");
D+=d[1];
j.MN("b_genius_module_tooltip_width","");
D+=d[1];
j.MN("b_genius_module_insert_classes","");
D+=d[1];
j.MN("b_genius_module_tooltip_attr","");
D+=d[1];
j.MN("b_genius_module_tooltip_class","");
D+=d[1];
j.MN("b_genius_iconfont","");
D+=d[1];
j.MN("b_genius_img","");
D+=d[1];
j.MN("b_genius_sprite","");
D+=d[1];
j.MN("b_inline_style","");
D+=d[1];
j.MN("b_genius_img_url","");
D+=d[1];
j.MN("b_inline_style_extra","");
D+=d[1];
j.MN("b_inline_style_width","");
D+=d[1];
j.MN("b_inline_style_display","");
D+=d[1];
j.MN("b_inline_style_vertical_align","");
D+=d[1];
j.MN("b_genius_module_b_size_iconfont","");
D+=d[1];
j.MN("b_genius_module_b_size_iconfont_style","");
D+=d[1];
j.MN("b_genius_discount","");
D+=d[1];
j.MN("b_ge_discount","");
D+=d[1];
j.MN("b_ge_freebies","");
D+=d[1];
j.MN("b_ge_freebies_data","");
D+=d[1];
j.MN("b_genius_module_tooltip_attr_discount","");
D+=d[1];
j.MN("b_genius_module_tooltip_attr_freebies","");
D+=d[1];
j.MN("b_image_suffix","");
D+=d[59];
return D
}A+=d[0];
o.unshift({b_classname:d[118],b_color:d[119],b_size:d[120],b_tooltip:d[121]});
A=l(A);
o.shift();
A+=[d[122],j.MB(c[51]),d[123]].join("");
j.MN("num_stays_needed",(j.MI(5)-j.MI(j.MC(c[52])["renewal_info"]["stays_count_since_genius"])));
A+=[d[124],j.VP(d[125],"num_stays_needed"),d[126],j.MG(((j.MC(c[52])||{})["renewal_info"]||{})["stays_count_since_genius"]),d[127],j.MB(c[53]),d[128],(o.unshift({renewal_date:j.MG(((j.MC(c[52])||{})["renewal_info"]||{})["genius_renewal_date"])}),(e=j.VP(d[129],"num_stays_needed")),o.shift(),e),d[130],j.MB(c[54]),d[131]].join("");
return A
}
})());
booking[sNSStartup].ge_show_onb_msg={init:function(){var d=function(){$.ajax({type:"post",url:"/genius_onb_message_seen",data:{}})
};
var c=null;
if(B.env.b_ge_should_show_onboarding_on_login!==""){c=parseInt(B.env.b_ge_should_show_onboarding_on_login,10)
}if(c===1){var e=B.components.require("ge-lightbox");
e.open({data:{b_genius_user:B.env.b_genius_user||{}},template:"ge_about_lightbox",onOpen:function(){B.eventEmitter.bind("modal:close",d)
}})
}}};
(function(e){var d={"SH:seen":"sh_seen","SH:clicked":"sh_clicked","SH:removed":"sh_removed","SH:sh-timestamp-today":"sh_resume_last_24","SH:sh-timestamp-24-48-hrs":"sh_resume_last_24_48","SH:sh-timestamp-48-72-hrs":"sh_resume_last_48_72","SH:sh-timestamp-72-96-hrs":"sh_resume_last_72_96"};
var c;
for(c in d){if(d.hasOwnProperty(c)){e.eventEmitter.one(c,(function(f){return function(){e.track.goal(f)
}
})(d[c]))
}}})(booking);
(function(){booking[sNSStartupLoad].google_thumbnail_map={priority:9,init:function(){var d=$("#b_google_map_thumbnail"),c=d.attr("data-map");
if(c&&d.length){d.attr("style","background-image: url("+c+");")
}return true
}}
}());
if(!Array.prototype.walk){Array.prototype.walk=function(e){var c=[],d=this.length;
while(d--){c.push(e(this[d]))
}return c.reverse()
}
}if(!Array.prototype.flatten){Array.prototype.flatten=function(){var d=[],e=-1,c=this.length;
while(++e<c){d=d.concat(this[e].constructor==Array?this[e].flatten():this[e])
}return d
}
}booking.ensureNamespaceExists("google");
booking.google.returnAnalyticsTrackingString=function(){var g=booking.env;
var j=[];
j[j.length]=g.b_this_urchin.replace(/&amp;$/,"");
if(g.b_action==="hotel"){if(g.b_hotel_blocks===0&&g.b_checkin_date){j[j.length]="ur_honovail=1"
}if(typeof g.b_label!="undefined"&&g.b_label.substr(0,11)=="postbooking"){j[j.length]="ur_postbknglabel="+g.b_label
}}if(window.location.href.indexOf("redirected=")!=-1){if(window.location.href.indexOf("source=")!=-1){j[j.length]="redirected="+window.location.href.match(/source=(\w+)/)[1]
}else{j[j.length]="redirected=1"
}}if(g.b_autoextension_radius_km){j[j.length]="sr_ae="+g.b_autoextension_radius_km
}if(g.b_autoextended_hotels){j[j.length]="sr_ae_n="+g.b_autoextended_hotels
}if(+g.b_availability_checked||g.b_checkin_date){j[j.length]="ur_dat=1"
}else{j[j.length]="ur_nodat=1"
}if(g.b_action==="searchresults"){if(g.b_multiple_destinations_found){j[j.length]="ur_srdis=1"
}if(typeof g.b_available_hotels!="undefined"){if(g.b_available_hotels==0){j[j.length]="ur_hc=0"
}else{if(g.b_available_hotels<=15){j[j.length]="ur_hc=1"
}else{j[j.length]="ur_hc=2"
}}}}if(g.b_acc_type_ga){j[j.length]="ur_acctype="+g.b_acc_type_ga
}if(g.b_book_stage){j[j.length]="stage="+g.b_book_stage
}if(g.b_action==="review"){if(g.b_review_submitted){j[j.length]="review_form_submitted=1"
}else{j[j.length]="review_form=1"
}}if(g.b_action==="myreservations"){if(/bn=\d+/.test(window.location.search)&&/pincode=\d+/.test(window.location.search)){j[j.length]="myres_single_booking"
}}if(g.b_action==="myreservations"||g.b_action==="index"||g.b_action==="confirmation"||g.b_action==="general"){if(/pbsource=\w+/.test(window.location.search)){var e={};
var h=window.location.search.substring(1).split(";");
for(var f=0;
f<h.length;
f++){var d=h[f].split("=");
if(!d[0]){continue
}e[d[0]]=d[1]||true
}var c="pbsource="+e.pbsource;
j[j.length]=c
}}return j.flatten().join("&amp;")
};
booking.ensureNamespaceExists("google");
booking.google.trackPageview=function(d,c){if(typeof c!="undefined"){if(typeof _gaq!="undefined"){_gaq.push(["_trackPageview",c])
}if(window.ga){ga("send","pageview",c)
}}};
booking.google.trackEvent=function(e,g,h,d,c){var f=d||1;
if(typeof e!="undefined"){if(typeof _gaq!="undefined"){_gaq.push(["_trackEvent",e,g,h,d,true])
}if(window.ga){ga("send",{hitType:"event",eventCategory:e,eventAction:g,eventLabel:h,eventValue:d,nonInteraction:1})
}}};
booking[sNSStartup].event_tracking={priority:9,init:function(){if(typeof _gaq!="undefined"){booking.google.errorTracker="Error";
booking.google.clickTracker="Click";
booking.google.hoverTracker="Hover";
booking.google.mapTracker="Map";
booking.google.pageviewTracker="Pageview";
booking.google.viewTracker="View";
booking.google.cityTracker="City";
booking.google.groupTracker="Group";
booking.google.cardTracker="Credit Card";
booking.google.comparisonTracker="Hotel Comparison";
booking.google.userProfileTracker="User profile";
booking.google.bookProcessTracker="Book process";
booking.google.reviewSearchTracker="Review search";
booking.google.BBToolTracker="Business Bookers";
booking.google.TripPlannerTracker="Trip Planner";
booking.google.growlTracker="Growl";
$(window).load(function(){if(booking.env.b_changed_currency){var h=(booking.env.b_selected_currency&&booking.env.b_selected_currency!="")?booking.env.b_selected_currency:"hotel_currency";
booking.google.trackEvent(booking.google.clickTracker,"change_currency",booking.env.b_lang_for_url+"_"+h)
}if(typeof booking.env.b_changed_language!=="undefined"){var k=booking.env.b_lang_for_url,j=booking.env.b_changed_language;
booking.google.trackEvent(booking.google.clickTracker,"Header Menu: Language","change language: "+j+" to "+k)
}});
var c=function(h){if(h.id.match(/\d{5}/)){return h.className?"."+h.className:h.tagName.toLowerCase()
}else{return h.id?"#"+h.id:h.className?"."+h.className:h.tagName.toLowerCase()
}};
$("body").delegate(".tracked a, .tracked .trackit","click",function(j){var h=[];
$(this).parents(".tracked").each(function(){h.unshift(c(this))
});
h.push(c(this));
booking.google.trackEvent(booking.google.clickTracker,"Action: "+booking.env.b_action,h.join(" > "))
});
function f(j,h){if(h){booking.google.trackEvent(booking.google.groupTracker,h.rooms+" rooms | "+h.adults+" adults | "+h.children+" kids"+(h.children?" ("+h.childrenAges.join(" | ")+")":""),booking.env.b_action)
}}$("#frm").submit(function(h){if(!h.isDefaultPrevented()){f($.Event(),B.search.groupStorage.value)
}});
var g=$(".error, .errorSimpleMsg");
for(var e=0;
e<g.length;
e++){if($(g[e]).hasClass("disabled")==false){var d=g[e].getAttribute("rel");
if(d!=null){booking.google.trackEvent(booking.google.errorTracker,"Display",d)
}}}this.bindCustomTrackClick();
$("#login-form").submit(function(){if(booking.google.userProfileTracker){booking.google.trackEvent(booking.google.userProfileTracker,"Login attempt : Other",booking.env.b_action)
}});
if(typeof trigger_error404_event_tracking!="undefined"&&trigger_error404_event_tracking==true){booking.google.trackEvent(booking.google.pageviewTracker,"404 Error",document.location.pathname+document.location.search+"&from="+document.referrer)
}$("#filterbox_wrap").delegate(".filterbox a","click",function(){booking.google.trackEvent(booking.google.clickTracker,"Filter",this.getAttribute("data-id"));
if(!$(this).hasClass("active")){booking.google.trackEvent(booking.google.clickTracker,"Filter Counts",$(".active").length)
}});
if(booking.env.b_action==="hotel"){$("#hcta").click(function(){var h="Hotel cta";
if(booking.env.track_htca){h+=("v"+booking.env.track_htca)
}booking.google.trackEvent(booking.google.clickTracker,h,this.getAttribute("data-id"))
})
}$("[data-block-id=sort_bar]").delegate("a","click",function(){booking.google.trackEvent(booking.google.clickTracker,"Sort",this.href.substr(this.href.indexOf("order=")+6))
});
$("#ccfaq").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Credit Card FAQ Popup","View")
});
$(".track_register").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Login","Register")
});
$(".track_login").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Login","Login")
});
if(booking.env.b_action=="hotelcomparison"){$(".back").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Previous Page","Clicked")
});
$(".bigbluebutton").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Book Now Button",$(this).parent().attr("class"))
});
$(".bigbluebutton.topbutton").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Top Book Now Button on comparison_colors_buttons",$(this).parent().attr("class"))
});
$(".bigbluebutton.bottombutton2").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Bottom Book Now Button on comparison_colors_buttons",$(this).parent().attr("class"))
});
$(".bigbluebutton.bottombutton").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Bottom Book Now Button on comparison_colors",$(this).parent().attr("class"))
});
$(".remove_hotel").click(function(){booking.google.trackEvent(booking.google.comparisonTracker,"Remove and Replace",$(this).parent().attr("class"))
})
}$("#bookconditions").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Booking Conditions","Link clicked")
});
$("#localcurr_dis a").mouseenter(function(){booking.google.trackEvent(booking.google.clickTracker,"Action: "+booking.env.b_action,"hover_tooltip_local_currency")
});
if(booking.env.smart_deals_count&&booking.env.smart_deals_count>0){booking.google.trackEvent(booking.google.viewTracker,"Smart deal filter",booking.env.smart_deals_count+" deals displayed")
}if(booking.env.b_track_search_from_tool){B.google.trackEvent(B.google.BBToolTracker,"Search - search from tool","Search Page")
}$(".footer_acc_type_links a").click(function(){booking.google.trackEvent(booking.google.clickTracker,"Footer acc type links",$(this).data("ga"))
});
$(".adv_search_btn.adv_trk_1").click(function(){booking.google.trackEvent(booking.google.clickTracker,"adv_search_1","Link clicked")
});
$(".adv_search_btn.adv_trk_2").click(function(){booking.google.trackEvent(booking.google.clickTracker,"adv_search_2","Link clicked")
});
$(".adv_search_btn.adv_trk_3").click(function(){booking.google.trackEvent(booking.google.clickTracker,"adv_search_3","Link clicked")
});
$(".adv_search_btn.adv_trk_4").click(function(){booking.google.trackEvent(booking.google.clickTracker,"adv_search_4","Link clicked")
});
$(".adv_search_btn.adv_trk_5").click(function(){booking.google.trackEvent(booking.google.clickTracker,"adv_search_5","Link clicked")
})
}return true
},bindCustomTrackClick:function(c){if(!c||c.length){c=$(".custom_track")
}else{if(!c.hasClass(".custom_track")){c=c.find(".custom_track")
}}c.click(function(){var f=$(this).attr("data-trackname");
var e=$(this).attr("data-track-prefix")||booking.env.b_action;
var d=$(this).attr("data-tracker")||"userProfileTracker";
if(f&&booking.google[d]){booking.google.trackEvent(booking.google[d],e+" : "+f,booking.env.b_action)
}})
}};
(function(h,k,l,g,j){var d=false,e=false,f=[],c=0;
var m=function(o){if(c){console.log("googleInit")
}var p;
if(!d){d=true;
p=k.createElement("script");
p.type="text/javascript";
p.src=g.google_map_current_url;
var n=function(){e=true;
var u;
for(var t=0,r=f.length;
t<r;
t++){u=f[t];
if(u.cb){u.cb.apply(u.ctx||null,u.args||[])
}}};
h.rerunCreateMap=n;
$("head").append(p)
}if(!e){f.push(o)
}};
l.google_geo_api={loaded:function(){return e&&h.google&&google.maps
},load:m}
})(window,document,booking,booking.env,sNSStartupLoad);
booking[sNSStartup].google_pageview_tracker={priority:9,init:function(){var d=booking.env,e=d.b_action,c,f=window._gaq;
if(typeof d.google_analytics_tracking_enabled!="undefined"&&d.google_analytics_tracking_enabled){$('div#survey[surveykey="'+d.survey_key+'"] button[value="accept"]').click(function(){booking.google.trackPageview("click",d.surveytracklink)
});
if(e==="general"){$("a#jobsite").click(function(){booking.google.trackPageview("click","/outgoinglink/jobsite")
})
}$(".priceline_ext_link").click(function(){booking.google.trackPageview("click","/outgoinglink/priceline_name_your_price")
});
$("#share_hotel_history_email_v1").click(function(){booking.google.trackPageview("click","/outgoinglink/socnet_share/hotel_history/Email");
f.push(["_trackSocial","Email"," Share My Viewed Hotels V1",""])
});
$("#pb_confirmation_travellist").click(function(){f.push(["_trackSocial","FB TravelList","Booking Confirmation Click"])
});
if(e==="confirmation"){$("#social_share_links a").click(function(){var g="base";
if(this.id=="social_share_conf_facebook"){g+="/facebook";
sn="facebook"
}else{g+="/twitter";
sn="twitter"
}booking.google.trackPageview("click","/outgoinglink/socnet_share/confirmation/"+g);
f.push(["_trackSocial",sn,"Share Confirmation"])
});
$("#external_review_invite_link").click(function(){booking.google.trackPageview("click","/outgoinglink/confirmation/external_review_invite/")
})
}if(/error/.test(e)){c=(d.b_referrer||"").split("?")[0].replace(window.location.origin,"")||"dont-know";
booking.google.trackPageview("click","/error-action/"+e+"/caused-by"+c)
}}}};
B.define("gta/impression-tracking",function(){function e(g,f,j){var h=g.getAttribute("id");
if(!h){h=("gta-"+j+"-"+f).toLowerCase();
g.setAttribute("id",h)
}B.when({events:"view #"+h}).run(function(){d({placement:f,method:j})
})
}function c(f,g){d({placement:f,method:g})
}function d(f){$.ajax({url:"/gta_impression",type:"POST",data:f})
}return{bindOnView:e,track:c}
});
B.define("gta/country-flags-dropdown",function(){return{init:function(e,n){var c=n||$(".gta-country-flag-dropdown").get(0);
var p=$(".gta-cfd-list",c);
var j=$(".gta-cfd-value",c);
var m=j.children(".cprefix");
var g=j.children('[class^="cflag"]').get(0);
var d=p.children();
var h=false;
var o=$(document);
e.setCountryCode(m.data("prefix"));
function f(){p.hide();
h=false;
o.unbind("click",l);
o.unbind("keypress",q)
}function k(){p.show();
h=true;
o.bind("click",l);
o.bind("keypress",q)
}function l(r){if(!$.contains(c,r.target)){f()
}}function q(w){var t=String.fromCharCode(w.which).toLowerCase().replace(/[\n\s]/g,"");
if(!t.length){return
}var u=d.filter('[data-s^="'+t+'"]').get(0);
if(u){var r=o.scrollTop();
u.scrollIntoView(true);
o.scrollTop(r)
}}p.delegate("li","click",function(){var r=$(this).data();
m.text(r.cc+" +"+r.prefix);
g.className=g.className.replace(/cflag-\w+/,"cflag-"+r.cc.toLowerCase());
e.setCountryCode(r.prefix);
f()
});
j.bind("click",function(){h?f():k()
})
}}
});
B.define("gta/base-widget",["gta/impression-tracking","et"],function(e,d){var c=["placement","exp","variant","source","city","firstname","lastname","booknumber","pincode"];
var f=function(g){this.dom={root:g,wrapper:g.parent(),label:g.find(".gta-widget-label"),input:g.find(".gta-widget-input"),button:g.find(".gta-widget-submit"),message:g.find(".gta-widget-message")};
this.sharedParams=this.dom.wrapper.data();
this.payload=this.getPayload();
this.isModalWidget=!!this.dom.wrapper.data("modal");
this.addEvents()
};
f.prototype.addEvents=function(){this.dom.button.bind("click",this.onSubmit.bind(this));
this.dom.label.bind("click",function(){this.dom.input.focus()
}.bind(this));
this.dom.input.bind("keyup",function(g){if(g.keyCode==13){this.onSubmit(g)
}}.bind(this));
if(d.track("TDXbEeQMMaGeSdJOBBTcO")){if(this.isModalWidget){this.dom.wrapper.bind("gta:modal-init",function(){e.track(this.sharedParams.placement,this.method)
}.bind(this))
}else{e.bindOnView(this.dom.root.get(0),this.sharedParams.placement,this.method)
}}};
f.prototype.getPayload=function(){var g={stype:B.env.b_site_type_id,page:B.env.b_action};
for(var h in this.sharedParams){if(this.sharedParams.hasOwnProperty(h)&&c.indexOf(h)>-1){g[h]=this.sharedParams[h]
}}return g
};
f.prototype.onSubmit=function(g){g.preventDefault();
this.hideMessage();
if(!this.validate()){return
}this.disableInputs();
this.sendRequest()
};
f.prototype.sendRequest=function(){$.ajax({url:this.action,type:"POST",data:this.payload,success:this.onSucessCallback.bind(this),error:this.onErrorCallback.bind(this)})
};
f.prototype.onSucessCallback=function(g){if(g.isOk==="true"){this.showMessage("success");
this.enableInputs()
}else{switch(g.err){case"limited":this.showMessage("limit");
break;
case"invalid":this.showMessage("validation");
this.enableInputs();
this.dom.input.focus();
break;
default:this.showMessage("error");
this.enableInputs()
}}};
f.prototype.onErrorCallback=function(){this.showMessage("error");
this.enableInputs()
};
f.prototype.validate=function(){return false
};
f.prototype.showMessage=function(g){this.dom.message.addClass(g.indexOf("success")>-1?"success":"invalid").text(this.dom.message.data(g));
this.dom.message.slideDown()
};
f.prototype.hideMessage=function(){this.dom.message.hide().removeClass("success").removeClass("invalid")
};
f.prototype.disableInputs=function(){this.dom.button.attr("disabled",true);
this.dom.input.attr("disabled",true)
};
f.prototype.enableInputs=function(){this.dom.button.removeAttr("disabled");
this.dom.input.removeAttr("disabled")
};
f.extend=function(){if(Object.create!=undefined){return Object.create(f.prototype)
}function g(){}g.prototype=f.prototype;
return new g()
};
return f
});
B.define("gta/sms-widget",["gta/base-widget","gta/country-flags-dropdown"],function(e,d){var c=function(f){this.method="sms";
this.action="/send_app_sms_v2";
e.apply(this,arguments);
this.dom.countryFlagsDropdown=this.dom.root.find(".gta-country-flag-dropdown");
this.countryCode="";
if(this.dom.countryFlagsDropdown.length){d.init(this,this.dom.countryFlagsDropdown.get(0))
}};
c.prototype=e.extend();
c.prototype.getPayload=function(){var f=e.prototype.getPayload.apply(this);
f.msgtype="app_download_sms";
return f
};
c.prototype.validate=function(){var f=this.countryCode+this.dom.input.val().replace(/\D/g,"");
if(f.length<6){this.showMessage("validation");
return false
}this.payload.telno=f;
this.payload.cc_prefix=this.countryCode;
return true
};
c.prototype.setCountryCode=function(f){this.countryCode=f
};
return c
});
B.define("gta/email-widget",["gta/base-widget"],function(d){var c=function(e){this.method="email";
this.action="/send_app_email_v2";
d.apply(this,arguments)
};
c.prototype=d.extend();
c.prototype.getPayload=function(){var e=d.prototype.getPayload.apply(this);
e.msgtype="app_download_email";
return e
};
c.prototype.validate=function(){var e=this.dom.input.val();
if(!e){return false
}if(!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)){this.showMessage("validation");
return false
}this.payload.email=e;
return true
};
return c
});
B.require(["gta/sms-widget","gta/email-widget"],function(c,e){var d=[];
$(".gta-sms-widget").each(function(f,g){d.push(new c($(g)))
});
$(".gta-email-widget").each(function(f,g){d.push(new e($(g)))
})
});
B.require(["gta/impression-tracking","et"],function(f,c){if(!$(".gta-qr-code-placeholder").length){return
}if(c.track("TDXbEeNMZSUaPPUcVYFGO")){var e=function(g){this.placeholder=$(g);
this.placement=this.placeholder.data("placement");
this.isModal=!!this.placeholder.data("modal");
this.image=null;
this.init()
};
e.prototype.loadImage=function(){this.image=new Image();
this.image.onload=function(){this.placeholder.append(this.image);
if(c.track("TDXbEeQMMaGeSdJOBBTcO")){f.track(this.placement,"qr")
}}.bind(this);
this.image.onerror=function(){c.customGoal("TDXbEeNMZSUaPPUcVYFGO",1)
};
this.image.src=this.placeholder.data("url")
};
e.prototype.init=function(){if(this.isModal){this.placeholder.bind("gta:modal-init",this.loadImage.bind(this))
}else{B.when({events:"view #"+this.placeholder.attr("id")}).run(this.loadImage.bind(this))
}};
$(".gta-qr-code-placeholder").each(function(g,h){new e(h)
})
}else{var d=$(".gta-qr-code-placeholder");
d.each(function(j,k){var g=$(k);
var h=new Image();
h.onload=function(){g.html(h)
};
h.onerror=function(){c.customGoal("TDXbEeNMZSUaPPUcVYFGO",1)
};
h.src=g.data("url")
})
}});
B.define("header/notifications/notifications",function(f,e,g){var d=false;
var h=B.env.b_site_type_id==="1";
var c=B.env.b_site_type_id==="2";
g.exports={isLoggedIn:function(){return Number(B.env.auth_level)>0
},init:function(){this.$root=$(".js-uc-notifications");
this._notifications=this.$root.find(".js-uc-notification").map(function(j,k){k=$(k);
return{type:k.attr("data-type"),fingerprint:k.attr("data-fingerprint"),id:k.data("id"),seen:String(k.attr("data-seen"))!=="0"}
}).toArray();
this._hasMultipleTravelGuides=this.getNotificationsByType("explorer_available").length>1||this.getNotificationsByType("multiple_travel_guides").length;
if(this.isLoggedIn()||B.track.getVariant("PcVBcTBYbWcTaSdFHMPdTC")===1){this.updateState()
}this.bindEvents();
if(this.getNotifications("unseen").length>0||this._hasMultipleTravelGuides){this.lazySeen()
}},lazySeen:function(){var j=(/notif_id=([\w\d]+)/).exec(window.location.href);
if(j==null){return
}var l=j[1];
var k=this._notifications.filter(function(m){return m.id===l
})[0];
if(k===undefined){return
}if(h){if(this._hasMultipleTravelGuides&&(k.type==="multiple_travel_guides"||k.type==="explorer_available")){B.track.stage("PcVBcYAZbHDUFYQDbbTXQae",3)
}}},seen:function(k,j){k.seen=j;
this.getNotificationNode(k).toggleClass("uc-notification-seen",j).toggleClass("uc-notification-unseen",!j)
},markAsSeen:function(k){var m=this;
if(k.length===0){return
}var l=JSON.stringify(k);
var j="/seen_notifications";
k.forEach(function(n){m.seen(n,true)
});
this.updateState();
if(d){return
}if(!m.isLoggedIn()&&B.track.getVariant("PcVBcTBYbWcTaSdFHMPdTC")){j="/seen_notifications_logged_out"
}$.ajax({type:"POST",url:j,data:{notifications:l}})
},_setCount:function(k){var j=(c)?$(".js-uc-notifications-bell-count"):this.$root.find(".js-uc-notifications-bell-count");
if(j.length===0){return
}j.text(k);
j.toggleClass("g-hidden",k===0);
if(c){this.$root.toggleClass("g-hidden",this._notifications.length===0)
}},updateState:function(){this.updateCounter();
this.$root.toggleClass("uc-notifactions-has-unseen",this.getNotifications("unseen").length>0)
},updateCounter:function(){this._setCount(this.getNotifications("unseen").length);
this.$root.toggleClass("uc-notifications_new",this.getNotifications().length!==0)
},bindEvents:function(){var j=this;
B.eventEmitter.bind("header:notifications:item_removed",function(){j.updateState()
});
if(h){B.eventEmitter.bind("uc_popover_showed",function(k,l){if(l.id==="notifications"){if(j.getNotifications().length>0){if(j.isLoggedIn()){B.track.stage("PcVBcEFbPXQUHNCATAJRXDHT",1)
}if(j._hasMultipleTravelGuides){B.track.stage("PcVBcYAZbHDUFYQDbbTXQae",2)
}if(j.getNotificationsByType("unbooked_searches").length){B.track.stage("PcVBcEFWbHWJSJPaXfOKPGbbRe",2)
}if(j.getNotificationsByType("sign_up_promotion").length){B.track.stage("PcVBcTBYbWcTaSdFHMPdTC",1);
B.track.stage("PcVBcadffNIfZDOQFET",1)
}if(j.getNotificationsByType("pending_review").length){B.track.stage("cPJJSYNCedLEEQYSIbYO",1)
}B.track.stage("cPJJSBALEDHIWDaPbPELXVC",3);
if(j.getNotificationsByType("review_replied").length){B.track.stage("cPWbVMeIJWJSJPaXfAZfLGWFNSebRaTMWOdIO",2)
}if(j.getNotificationsByType("review_votes_received").length){B.track.stage("cPWbVMeIJWJSJPaXfKEOYNGPYWXBGFVNLae",2)
}}B.eventEmitter.trigger("header:notifications:shown")
}});
this.$root.delegate(".js-uc-notification a","click",function(k){var l=j.getNotificationFromEvent(k);
if(l==null){return
}if(j._hasMultipleTravelGuides&&(l.type==="multiple_travel_guides"||l.type==="explorer_available")){B.track.stage("PcVBcYAZbHDUFYQDbbTXQae",3)
}if(l.type==="review_replied"){B.track.stage("cPWbVMeIJWJSJPaXfAZfLGWFNSebRaTMWOdIO",3)
}if(l.type==="review_votes_received"){B.track.stage("cPWbVMeIJWJSJPaXfKEOYNGPYWXBGFVNLae",3)
}})
}B.eventEmitter.bind("header:notifications:hidden",function(){j.updateState()
});
this.$root.delegate(".js-uc-notification-close","click",function(k){var l=j.getNotificationFromEvent(k);
j.hideNotification(l)
});
this.$root.delegate(".js-uc-notification-seen","click",function(k){var l=j.getNotificationFromEvent(k);
j.markAsSeen([l])
})
},getNotificationNode:function(j){return this.$root.find('[data-fingerprint="'+j.fingerprint+'"][data-type="'+j.type+'"]')
},getNotificationData:function(k){var j=null;
this.getNotifications().forEach(function(l){if($(k).attr("data-type")===l.type&&$(k).attr("data-fingerprint")===l.fingerprint){j=l
}});
return j
},getNotificationFromEvent:function(k){var j=$(k.currentTarget).closest(".js-uc-notification");
return j&&this.getNotificationData(j)
},hideNotification:function(k){var j=this.getNotifications().indexOf(k);
if(!d){$.post("/dismiss_user_notification",k)
}this.getNotificationNode(k).addClass("uc-notification_hidden");
if(j!==-1){this.getNotifications().splice(j,1)
}B.eventEmitter.trigger("header:notifications:item_removed")
},_filters:{seen:function(j){return j.seen
},unseen:function(j){return !j.seen
}},getNotifications:function(j){if(this._filters[j]){return this._notifications.filter(this._filters[j])
}return this._notifications
},getNotificationsByType:function(j){return this._notifications.filter(function(k){return k.type===j
})
}}
});
B.require(["require"],function(c){c("header/notifications/notifications").init()
});
booking[sNSStartup].header_cleaned_links={priority:9,init:function(){$(".js-user-access-form--back-to-signin").click(function(){var c=$(".user_access_signin_menu, .user_access_signup_menu");
c.find(".js-user-access-form--signin").removeClass("g-hidden");
c.find(".js-user-access-form--signup").removeClass("g-hidden");
c.find(".js-user-access-form--reminder").addClass("g-hidden");
c.find(".js-user-access-form--reminder-sent").addClass("g-hidden")
});
$("body").delegate(".forgot_link_look, .forgot_pass_trigger","click",function(d){d.preventDefault();
B.track.exp("MRLLDDJITeKBWGJFNQKRe");
if(booking.env.b_bookings_owned!="0"&&$(this).closest(".user_access_signin_menu, .user_access_signup_menu").length){var f=$(this).closest(".user_access_signin_menu, .user_access_signup_menu");
f.find(".js-user-access-form--signin").addClass("g-hidden");
f.find(".js-user-access-form--signup").addClass("g-hidden");
f.find(".js-user-access-form--reminder").removeClass("g-hidden");
f.find(".js-user-access-form--reminder .user_access_email").val(f.find(".js-user-access-form--signin .user_access_email, .js-user-access-form--signup .user_access_email").val()).focus().select();
booking.eventEmitter.one("UA:password-reminder-sent",function(){f.find(".form-loading").hide();
f.find(".alert-error").removeClass("alert-displayed");
f.find(".js-user-access-form--reminder").addClass("g-hidden");
f.find(".js-user-access-form--reminder-sent").removeClass("g-hidden")
})
}else{var c=$(this).attr("data-href")||$(this).attr("href");
window.open(c,"_blank","left=42,top=42,height=502px,width=440px,resizable=false")
}});
$("body").delegate(".hide_reminder_iframe","click",function(){$(this).parent(".reminder_iframe_wrapper").remove();
$(".better_login").show();
booking[sNSStartup].new_personal_menu.recheckHeight();
oThat.openSelect("current_account")
});
$("#foldout_loggedin").delegate("li","click",function(){var c=$(this);
if(c.hasClass("seo_link_look")&&c.attr("data-href")){if(!c.hasClass("my_logout")){window.location=c.attr("data-href")
}}})
}};
booking[sNSStartup].hotel_share_center={priority:9,share_center:null,share_center_popup:null,prev_share_center_link:null,init:function(){var c=this;
$(".share_center .share_center_button strong, .general_share_center_button, div.hp_improve_share_center_button .share_center_button_icon").click(function(){booking.track.custom_goal("BUISNFZFOcHeCeSGNeC",1);
booking.track.exp("BUOcHeCeSGHXVIBdPC");
if($("#general_share_center").length){c.share_center=$("#general_share_center").get(0);
$(c.share_center).removeClass("has_short_url");
var e=$(this).attr("data-hotelname");
var d=$(this).attr("data-hotelimage");
var h=$(this).attr("data-sharelinks").split(",");
var f=$(c.share_center).attr("data-checkinvars");
var g=[$(this).offset().left-$("#bodyconstraint-inner").offset().left,$(this).offset().top];
$(".details",c.share_center).html('<img src="'+d+'" width="50" height="50" alt="" /><h3>'+e+"<small>"+h[0]+"</small></h3><hr />");
$("#share_center_url").val(h[0]);
$(".sc_facebook a",c.share_center).attr("href",h[1]+f);
$(".sc_google a",c.share_center).attr("href",h[2]+f);
$(".sc_twitter a",c.share_center).attr("href",h[3]+f);
$(".sc_email a",c.share_center).attr("href",h[4]+f);
$(c.share_center).css({left:g[0]+"px",top:g[1]+"px"})
}else{c.share_center=$(this).closest(".share_center")
}c.share_center_popup=$(".share_center_popup",c.share_center);
if($(c.share_center).hasClass("open")){if(c.prev_share_center_link==null||c.prev_share_center_link==this){c.close()
}else{c.addShortUrl()
}}else{c.prev_share_center_link=this;
c.open()
}return false
});
$(".share_center .close").click(function(){c.close(" - Corner");
return false
});
$(".share_center .out_link a").click(function(){var e=$(this).attr("rel");
var d=$(this).attr("href");
_gaq.push(["_trackSocial","Share Center","Link Share on"+e]);
window.open(d,"sc_share","menubar=0,resizable=1,width=600,height=400");
return false
});
$(".share_center .sc_email a").click(function(){_gaq.push(["_trackSocial","Share Center","Link Share onEmail"])
});
$(".share_center_url").click(function(){this.select();
$(".copy_hint",$(this).closest(".share_center")).fadeIn("fast");
_gaq.push(["_trackSocial","Share Center","Copy URL"])
});
$(".share_center_url").blur(function(){$(".share_center .copy_hint",this).fadeOut("fast")
})
},open:function(){$(this.share_center_popup).fadeIn("fast");
$(this.share_center).addClass("open");
_gaq.push(["_trackSocial","Share Center","Open Share Center"]);
this.addShortUrl()
},addShortUrl:function(){if(!$(this.share_center).hasClass("has_short_url")){var c=$(".share_center_url",this.share_center).val()+"?label=social_sharecenter_copy_url";
if($(this.share_center).data("checkin")&&$(this.share_center).data("checkout")){c=c+"&checkin="+$(this.share_center).data("checkin")+"&checkout="+$(this.share_center).data("checkout")
}$.get("/short_uri?url="+escape(c)+"&aid="+booking.env.aid,function(e){var d="http://booking.com/"+e.short_url;
$("h3 small",this.share_center).text(d);
$(".share_center_url",this.share_center).val(d);
$(this.share_center).addClass("has_short_url")
})
}},close:function(c){this.prev_share_center_link=null;
$(this.share_center_popup).fadeOut("fast");
$(this.share_center).removeClass("open");
_gaq.push(["_trackSocial","Share Center","Close Share Center"+c])
}};
booking[sNSStartup].in_and_around_updates={priority:9,loadpos:0,savecheck:0,init:function(){var c=(booking.env.b_action=="hotel")?1:12;
$(".landing .widesep ul, .hotel .in_and_around ul").each(function(){if((booking.env.b_action=="country")&&($(this).siblings("h4")[0].className=="iaa_city")){return
}var d=$(this).find("li");
if(d.length>c+2&&!(booking.track.getVariant("BUYdXfMOKe"))){d.eq(c).after('<li class="iaa_more iaa_more_blue"><a href="#">'+booking.env.inandaround_more+"</a></li>");
d.filter(":gt("+c+")").hide()
}});
$("li.iaa_more a").click(function(){$(this).hide().parents("ul").find("li").show();
if(booking.env.b_action!="hotel"){$("#in_and_around .masonry").masonry()
}return false
});
if(document.getElementById("in_and_around")&&booking.env.b_action!="hotel"){$(window).resize(function(){var d=$("#in_and_around .masonry");
d.masonry({itemSelector:".in_and_around",isResizable:false,columnWidth:d.width()*0.499})
}).resize()
}}};
if(typeof JSON!=="object"){JSON={}
}(function(){function f(n){return n<10?"0"+n:n
}if(typeof Date.prototype.toJSON!=="function"){Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null
};
String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(){return this.valueOf()
}
}var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},rep;
function quote(string){escapable.lastIndex=0;
return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];
return typeof c==="string"?c:"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})+'"':'"'+string+'"'
}function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];
if(value&&typeof value==="object"&&typeof value.toJSON==="function"){value=value.toJSON(key)
}if(typeof rep==="function"){value=rep.call(holder,key,value)
}switch(typeof value){case"string":return quote(value);
case"number":return isFinite(value)?String(value):"null";
case"boolean":case"null":return String(value);
case"object":if(!value){return"null"
}gap+=indent;
partial=[];
if(Object.prototype.toString.apply(value)==="[object Array]"){length=value.length;
for(i=0;
i<length;
i+=1){partial[i]=str(i,value)||"null"
}v=partial.length===0?"[]":gap?"[\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"]":"["+partial.join(",")+"]";
gap=mind;
return v
}if(rep&&typeof rep==="object"){length=rep.length;
for(i=0;
i<length;
i+=1){if(typeof rep[i]==="string"){k=rep[i];
v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);
if(v){partial.push(quote(k)+(gap?": ":":")+v)
}}}}v=partial.length===0?"{}":gap?"{\n"+gap+partial.join(",\n"+gap)+"\n"+mind+"}":"{"+partial.join(",")+"}";
gap=mind;
return v
}}if(typeof JSON.stringify!=="function"){JSON.stringify=function(value,replacer,space){var i;
gap="";
indent="";
if(typeof space==="number"){for(i=0;
i<space;
i+=1){indent+=" "
}}else{if(typeof space==="string"){indent=space
}}rep=replacer;
if(replacer&&typeof replacer!=="function"&&(typeof replacer!=="object"||typeof replacer.length!=="number")){throw new Error("JSON.stringify")
}return str("",{"":value})
}
}if(typeof JSON.parse!=="function"){JSON.parse=function(text,reviver){var j;
function walk(holder,key){var k,v,value=holder[key];
if(value&&typeof value==="object"){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);
if(v!==undefined){value[k]=v
}else{delete value[k]
}}}}return reviver.call(holder,key,value)
}text=String(text);
cx.lastIndex=0;
if(cx.test(text)){text=text.replace(cx,function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)
})
}if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,"@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,"]").replace(/(?:^|:|,)(?:\s*\[)+/g,""))){j=eval("("+text+")");
return typeof reviver==="function"?walk({"":j},""):j
}throw new SyntaxError("JSON.parse")
}
}}());
if($.cookie("b")){var b_cookie=JSON.parse($.cookie("b"))||{}
}else{var b_cookie={}
}var dont_execute_in_tdot=function(){var c=booking.env,d=booking[sNSStartupLoad].show_language={priority:9,init:function(){var f=function(){b_cookie.langPrompt="dontshow";
if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:c.b_domain_end})
}};
if(typeof(b_cookie)=="undefined"){b_cookie={}
}$("#langselectbutton, #languageselect input").hide();
$("#langselectformlist, #currList").change(function(){$("#languageselect")[0].submit();
f()
});
$(".current_language, .prompt_close").click(function(g){g.preventDefault();
$(".language_prompt").hide();
$.get("/general."+booking.env.b_lang+".html?tmpl=blank")
});
$(".language_flags").click(function(){f()
});
if(c.show_language_suggestion){if(b_cookie.countLang){if(!isNaN(b_cookie.countLang)){var e=parseInt(parseInt(b_cookie.countLang)+1);
if(e<=4){c.language_dialog_count2=e;
b_cookie.countLang=c.language_dialog_count2
}}else{c.language_dialog_count2=1;
b_cookie.countLang=1
}}else{c.language_dialog_count2=1;
b_cookie.countLang=1
}if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:c.b_domain_end})
}if(b_cookie.langPrompt!="dontshow"&&c.language_dialog_count2<4&&!booking.affiliate.platform.isHybrid){setTimeout(d.createAlert,2000)
}}},createAlert:function(j){var k=c.show_language_suggestion,n=c.browser_lang,f=c.icons,l,o=false,g="",e="",m="";
if(k){var h=230;
current_currency_width=$("#current_currency").width();
current_language_width=$("#current_language").width();
personal_form_space=Math.round(current_currency_width+(current_language_width/2)-(h/2));
lang_prompt_html="";
if($("#languageselect .language-wrapper").length){l=$("#languageselect .language-wrapper");
g="margin-top:10px;";
e="top: -2px;";
if(c.b_is_ie7){m="margin-top:25px;left:100px;"
}o=true
}else{l=$("#personal_form");
e="top: -11px;";
m="top:40px;"
}lang_prompt_html+='<div id="lang-prompt" style="display:none;height:1px;position:absolute;z-index:50;width:'+h+"px;left:"+personal_form_space+"px;"+m+'"><div style="position:absolute;zoom:1;'+e+";left:120px;width:17px;height:13px;background:url('//q-ec.bstatic.com/static/img/experiments/top-info-arrrow2/932e26ee2c70a335e5031bf87df7595bf93ca5b9.png');\"></div><div style=\"border:2px solid #a2bbda;padding:10px;background:#e6edf6;width:230px;-moz-box-shadow:0 1px 2px rgba(0,0,0,.7);-webkit-box-shadow:0 1px 2px rgba(0,0,0,.7);"+g+'"><a href="#" class="close" style="float:right;font-weight:normal;font-size:12px;line-height:1.3;opacity:.35;filter:alpha(opacity=35);">'+c.transl_close_x+"</a>";
lang_prompt_html+='<a href="#scs" id="lang_change_link" class="lang_change_link" style="display:block;font-weight:normal;margin-right:50px;padding-left:40px;white-space:normal;background:url('+B.tools.jsStaticUrl("/static/img/flags/24/"+c.b_flag_to_suggest+".png")+') no-repeat;" data-lang-code="'+k.suggested_lang_select+'">'+k.transl_change_page_lang_to_x+"</a>";
lang_prompt_html+="</div></div>";
l.append(lang_prompt_html);
$("#lang-prompt").fadeIn("slow");
booking.google.trackEvent(booking.google.clickTracker,"Lang prompt","Show");
$("#lang-prompt .close").click(function(){b_cookie.langPrompt="dontshow";
if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:c.b_domain_end})
}$("#lang-prompt").hide();
booking.google.trackEvent(booking.google.clickTracker,"Lang prompt","Close");
return false
});
$("#lang-prompt .lang_change_link").click(function(){var q;
b_cookie.langPrompt="dontshow";
if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:c.b_domain_end})
}var p=$(this).attr("data-lang-code");
if(o){$("#langselectformlist").val(p);
$("#languageselect")[0].submit()
}else{q=$(".lang_"+p).find("a").attr("href");
if(q){window.location=q
}}})
}}}
};
if(!booking.env.b_is_tablet){dont_execute_in_tdot()
}booking[sNSExperiments].ng_last_viewed={priority:9,resultsPerPage:booking.env.b_is_android_tablet?4:5,totalPages:0,currentPage:0,click:null,googleTracked:false,lastViewedHotels:null,overlay:null,ajaxPath:"/userhistory."+booking.env.b_lang_for_url+".html",ajaxStatus:0,staticPath:[],init:function(){this.staticPath=booking.env.b_static_images_hostnames;
$("body").append('<div id="ng-overlay" hidden></div>');
this.$overlay=$("#ng-overlay");
this.addEvents()
},addEvents:function(){var c=this,d=$("#top_lw_wrapper"),e=$("a#top_last_viewed");
e.bind("click",{exp:c},function(j){var h=$(this),g=$("#history_count").attr("data-count"),f=$("#top_language_prompt");
if(f.length){f.remove()
}if(!c.googleTracked){booking.google.trackEvent(booking.google.clickTracker,"Last Viewed In Header","Opened Last Viewed Hotels from the header button");
c.googleTracked=true
}if(c.isVisibleOverlay()&&(c.click=="lw")){c.distroyOverlay();
d.hide()
}else{c.createOverlay();
$(".milk_menu").hide();
d.show();
c.click="lw"
}if(!c.ajaxStatus&&g&&(g-0)>0){c.getLastViewedHotels()
}if(typeof booking.maps!=="undefined"&&booking.maps.map_opened){booking.maps.close()
}j.preventDefault()
});
$("#ng-overlay, #current_account, #header_currency, #header_language").bind(B.env.pointer_events.pointerclick,function(h){var g=$(this),f=$(h.target);
if(f.get(0).id=="ng-overlay"){h.preventDefault()
}c.distroyOverlay()
});
$("#lw_next, #lw_prev").bind(B.env.pointer_events.pointerclick,function(h){var g=$(this),f;
h.preventDefault();
f=setTimeout(function(){c.renderItems(g.data("page"))
},300)
});
$("#sidebar_last_viewed").bind("click",function(f){f.preventDefault();
$(document.body).animate({scrollTop:0},400,function(){e.trigger("click");
booking.google.trackEvent(booking.google.clickTracker,"Last Viewed In Header","Opened Last Viewed Hotels from the sidebar button")
})
})
},handleCookieWarning:function(e){var d=false;
if(typeof booking[sNSStartup].t_cookie_warning!=="undefined"&&!booking[sNSStartup].t_cookie_warning.getCookie()&&/be|el|lt|pt|bg|es|lu|ro|cz|hu|si|dk|hr|mt|sk|de|it|fi|ee|cy|se|ie|lv|pl|uk|gb|fr|at/.test(booking.env.b_guest_country)){d=true;
booking.track.exp("PNPIFdVIHQcePYbIYSYeDUZIBLaT")
}if(d&&booking.track.getVariant("PNPIFdVIHQcePYbIYSYeDUZIBLaT")){}else{if("nl"!=booking.env.b_guest_country||(typeof booking[sNSExperiments].t_cookie_warning!=="undefined"&&booking[sNSExperiments].t_cookie_warning.getCookie())){return
}}var c=$("#cookie_warning");
if(c.length){if("show"==e){c.show()
}else{c.hide()
}}},createOverlay:function(){var c=this;
c.handleCookieWarning();
$("#ng-overlay").height($("html").outerHeight(true)).show()
},distroyOverlay:function(){var c=this;
$("#ng-overlay").hide();
$("#top_lw_wrapper").hide();
c.handleCookieWarning("show");
if(booking.track.getVariant("PYeUZFNZeFZIWcbIXXcffWe")){$(".milk_menu").hide()
}return false
},isVisibleOverlay:function(){var c=this;
return c.$overlay.is(":visible")
},getLastViewedHotels:function(){var c=this,d=$("#lw_list #spinner");
c.ajaxStatus=1;
if($.ajax){$.ajax({type:"GET",cache:false,url:c.ajaxPath,dataType:"JSON",data:{last_viewed_json:1,tmpl:"profile/json",stid:350339},success:function(e){c.ajaxStatus=2;
if(typeof e!=="object"){e=$.parseJSON(e)
}if(!e||$.isEmptyObject(e)||(e instanceof Array&&!e.length)){return
}c.lastViewedHotels=e;
c.totalPages=Math.ceil(e.length/c.resultsPerPage);
c.renderItems(1);
d.remove()
}})
}return true
},renderItems:function(l){var e=this,c=$("#lw_next"),d=$("#lw_prev"),g=$("#lw_list"),k=e.lastViewedHotels,h=(l-1)*e.resultsPerPage,f=h+e.resultsPerPage;
f=f>k.length?k.length:f;
g.empty();
e.currentPage=l;
for(h;
h<f;
h++){g.append(this.renderItem(k[h]))
}if(e.currentPage<e.totalPages){c.data("page",e.currentPage+1).show()
}else{c.hide()
}if(e.currentPage!=1){d.data("page",e.currentPage-1).show()
}else{d.hide()
}},renderItem:function(f){var d=this,e="";
e+="<li>";
e+='<a class="ui-helper-clearfix" href="';
e+=booking.env.b_nonsecure_hostname_signup+f.url+booking.env.b_query_params_with_lang;
e+=booking.env.b_url_params+booking.env.b_query_params_delimiter;
if(booking.env.b_param_do_availability_check!="undefined"){e+="do_availability_check=on"+booking.env.b_query_params_delimiter;
if(booking.env.b_checkin_date&&booking.env.b_checkout_date){e+="checkin="+booking.env.b_checkin_date;
e+=booking.env.b_query_params_delimiter;
e+="checkout="+booking.env.b_checkout_date
}}e+='">';
if(f.photo_id){var c=Math.round(Math.random());
e+='<img width="60px" height="60px" src="'+d.staticPath[c]+"/images/hotel/square60/"+f.photo_id.substring(0,3)+"/"+f.photo_id+'.jpg " />'
}e+='<span class="lw_hotel_name">'+f.title+"</span>";
if(f.rating){if(f.class_is_estimated&&f.hotel_cc1=="de"&&booking.env.b_site_experiment_t_de_rating_bugfix>0){e+=booking.env.b_site_experiment_t_retina_rating>0?'<span class="retina_estimated_small '+d.loadRetinaRatingClass(f.rating,f.rating_half)+'"></span>':'<span class="circles '+d.loadRatingClass(f.rating,f.rating_half)+'"></span>'
}else{if(f.class_is_estimated&&f.hotel_cc1=="au"&&booking.env.b_site_experiment_t_au_rating_bugfix>0){e+=booking.env.b_site_experiment_t_retina_rating>0?'<span class="retina_estimated_small '+d.loadRetinaRatingClass(f.rating,f.rating_half)+'"></span>':'<span class="circles '+d.loadRatingClass(f.rating,f.rating_half)+'"></span>'
}else{e+=booking.env.b_site_experiment_t_retina_rating>0?'<span class="retina_stars_small '+d.loadRetinaRatingClass(f.rating,f.rating_half)+'"></span>':'<span class="use_sprites stars4 stars4i'+f.rating+'"></span>'
}}if(f.class_is_estimated&&f.hotel_cc1=="au"&&!d.isAUTracked){booking.track.exp(booking.env.js_experiment_tracking.t_au_rating_bugfix);
d.isAUTracked=true
}}if(f.address){e+='<span class="lw_address">'+f.address+"</span>"
}e+="</a>";
e+="</li>";
return e
},loadRatingClass:function(c,d){return(d?"circle"+c+"i4half":"circle"+c+"i4")
},loadRetinaRatingClass:function(c,d){return"retina_stars_small_"+c+(d?"half":"")
}};
booking[sNSExperimentsLoad].lazy_load_print_css={priority:9,init:function(){var c=document.createElement("link");
c.rel="stylesheet";
c.type="text/css";
c.href=booking.env.print_css_href;
c.media="print";
document.getElementsByTagName("head")[0].appendChild(c)
}};
booking.ensureNamespaceExists(sNSStartup);
booking.lightbox=booking[sNSStartup].lightbox=(function(){var m;
var d;
var n;
var g;
var x;
var e;
var l={bAnimation:true,bCloseButton:true,bMaskClick:true,customWrapperClassName:"",customMaskClassName:"",bFullscreen:false,hideCallBack:null,hideBeforeCallBack:null,positionBeforeCallBack:null,positionAfterCallBack:null,cloneElement:false,bCanScroll:false,bOverflowVisible:false,opacity:0.5,autoWidth:false};
var f={};
var c=[];
var w=(function(){var C=["","moz","webkit"],z=false;
for(var A=0;
A<3;
A++){if(C[A]+(C[A]===""?"b":"B")+"oxSizing" in document.body.style){return true
}}return z
})();
var h=function(){if(!d){return
}if(f.hideBeforeCallBack){f.hideBeforeCallBack()
}if(!f.cloneElement){x.prepend(g);
g.css("display",e)
}m.remove();
d.remove();
$("body").removeClass("modal-visible");
$(window).unbind("resize",o);
$(document).unbind("keyup",r);
$("#calendar_popup").css("display","none");
if(f.hideCallBack){f.hideCallBack()
}booking.eventEmitter.trigger("modal:close")
};
var y=function(){if(f.positionBeforeCallBack){f.positionBeforeCallBack()
}m.css({width:$(document).width(),height:$(document).height()});
var C=$(window).width(),z=$(window).height();
if(!w){C=C-parseInt(d.css("paddingLeft"))-parseInt(d.css("paddingRight"));
z=z-parseInt(d.css("paddingTop"))-parseInt(d.css("paddingBottom"))
}if(d.outerHeight()>$(window).height()){d.css("height",z)
}else{d.css("height","");
if(d.outerHeight()>=$(window).height()){d.css("height",z)
}}if(d.outerWidth()>$(window).width()){d.css("width",C)
}else{d.css("width","");
if(d.outerWidth()>=$(window).width()){d.css("width",C)
}else{if(f.autoWidth){var A=d.children().first().outerWidth();
if(w){A+=parseInt(d.css("padding-left"),10)+parseInt(d.css("padding-right"),10);
A+=parseInt(d.css("border-left-width"),10)+parseInt(d.css("border-right-width"),10)
}d.css({width:A})
}}}var E=0,D=0;
if(!f.bFullscreen){E=Math.max(0,$(window).height()/2-d.outerHeight()/2);
D=Math.max(0,$(window).width()/2-d.outerWidth()/2)
}else{d.css({width:C,height:z})
}var F="hidden";
if(f.bCanScroll){F="auto"
}else{if(f.bOverflowVisible){F="visible"
}}d.css({top:E,left:D,overflow:F});
if(f.positionAfterCallBack){f.positionAfterCallBack()
}};
var o=function(){if(d&&d.is(":visible")){y()
}};
var r=function(z){if(z.keyCode===27&&!c.length){h()
}};
var j=function(){var z=Math.max(0,$(window).height()/2-d.outerHeight()/2);
z+=$(document).scrollTop();
d.css("top",z)
};
var q=function(){$(".modal-wrapper .modal-mask-closeBtn").add('.modal-wrapper [data-lightbox-close=""]').one("click",function(){h()
});
if(f.bMaskClick){$(".modal-mask").one("click",function(){h()
})
}$(document).bind("keyup",r);
$(window).bind("resize",o)
};
var p=function(){$('<div class="modal-mask"/>').appendTo(document.body);
m=$(".modal-mask");
if(f.customMaskClassName.length>0){m.addClass(f.customMaskClassName)
}$('<div class="modal-wrapper"/>').appendTo(document.body);
d=$(".modal-wrapper");
if(f.customWrapperClassName.length>0){d.addClass(f.customWrapperClassName)
}if(f.cloneElement){g.clone().appendTo(d)
}else{d.append(g)
}if(f.bCloseButton){d.append($('<div class="modal-mask-closeBtn" title="'+booking.env.experiment_popups_close+'"/>'))
}if(f.bFullscreen){d.addClass("modal-wrapper--fullscreen")
}$("body").addClass("modal-visible");
g.show();
y();
q()
};
var u=function(C,A,D){if(d&&d.is(":visible")){return
}f={};
$.extend(f,l,A);
if(f.iframe){var z=$('<iframe id="lightbox_iframe" src="'+C+'" width="100%" height="'+f.iframeHeight+'"></iframe> ');
if(typeof f.loadCallBack=="function"){z.load(f.loadCallBack)
}g=z;
x=g.parent();
e=g.css("display");
t()
}else{if(f.ajax){jQuery.ajax({url:C,cache:true,success:function(E){g=f.ajaxRawContent?$(E):$($.trim(E)).eq(0);
x=g.parent();
e=g.css("display");
t()
}})
}else{g=$(C);
if(g.length&&g[0].tagName==="SCRIPT"){g=$($.trim(g.html()))
}x=g.parent();
e=g.css("display");
t()
}}if(typeof D!=="undefined"){D()
}return d
};
var t=function(){p();
d.css("visibility","visible");
if(f.bAnimation){var z=f.bAnimation;
if("number"!==typeof z){z=parseInt(z,10)||1000
}m.fadeTo(Math.max(0,Math.min(600,z-400)),f.opacity);
d.css("opacity","0").animate({opacity:1},z,function(){$(this).css("opacity","")
})
}else{m.css("opacity",f.opacity).show()
}if(f.ajax&&typeof f.loadCallBack=="function"){f.loadCallBack.call()
}booking.eventEmitter.trigger("modal:open")
};
var k=function(C,A,z,D){booking[sNSStartup].lightbox.show($("#"+D))
};
return{priority:5,init:function(){},show:u,hide:h,rePosition:o,open:k,pushEscStack:function(z){c.push(z)
},popEscStack:function(){c.pop()
},hideWithFade:function(z,A){d.fadeOut(z);
m.fadeOut(z,function(){h();
A&&A()
})
}}
}());
B.define("lightbox",booking.lightbox);
booking[sNSStartup].loc_index_japanese_map={init:function(){$(".map_links").hover(function(){var f=this.id;
$("#"+f+"_in").show()
},function(){var f=this.id;
$("#"+f+"_in").hide()
});
$(".tab01").click(function(){$(".map_overseas").hide();
$(".map_ja").show();
$(".tab02").removeClass("active");
$(".tab01").addClass("active")
});
$(".tab02, #ja11").click(function(){$(".map_ja").hide();
$(".map_overseas").show();
$(".tab01").removeClass("active");
$(".tab02").addClass("active")
});
var d=$(".map_overseas");
var e=$(".overseas_cities");
d.delegate(".country_list","click",function(h){h.preventDefault();
var j=$(this);
var f=j.data("id");
var g=e.find(".country_"+f).clone();
c.open({title:j.clone(),content:g})
});
var c=(function(){var g=$(".map_box_overlay");
var h=g.find(".map_box_overlay_header_title");
var j=g.find(".map_box_overlay_content");
var f;
g.delegate(".map_box_overlay_mask","click",function(k){f.close()
}).delegate(".map_box_overlay_close_button","click",function(k){f.close()
});
f={open:function(k){var l=k.content||"";
var m=k.title||"";
h.empty().append(m);
j.empty().append(l);
g.show()
},close:function(){g.hide()
}};
return f
})()
},initElse:function(){}};
booking[sNSStartup].login_foldout={priority:9,fontchange:false,init:function(){var c=this;
if(location.protocol=="https:"&&booking.env.b_is_app){$(".stay_login, #login-form").each(function(){var d=$(this).attr("action");
if(d.indexOf("protocol=https")==-1){var e=d;
if(d.indexOf("protocol=http")>-1){e=d.replace("protocol=http","protocol=https_www")
}else{e=sCurlink+"&protocol=https_www"
}$(this).attr("action",e)
}})
}if(!booking.env.b_can_acc_bp_auth_lightbox&&!booking.env.b_run_t_acc_bp_auth_lightbox){$("#login_redesign").click(function(){if(!$(this).hasClass("no_arrow")){if($(this).hasClass("login_opened")){$(this).removeClass("login_opened")
}else{$(this).addClass("login_opened")
}$("#login-form_wrapper fieldset").toggle()
}return false
})
}$(".stay_login").submit(function(){if(booking.google.userProfileTracker){booking.google.trackEvent(booking.google.userProfileTracker,"Login attempt : Header",booking.env.b_action)
}$("#foldout_error").hide();
$("#login_loading").show();
var g=document.getElementById("username_input_top").value;
if(g==""){c.hideLoader();
$('label[for="username_input_top"]').css({color:"#B30000","font-weight":"bold"});
$("#username_input_top").focus();
return false
}else{var e=/^[0-9[\.]+$/.exec(g);
if(e){var d=$("#bm_log").val();
d+=(d.indexOf("?">0))?"&":"?";
var f=$("#password_input_top",this).val();
d+="pincode="+f+"&bn="+g;
$("#tar_tmpl").attr("value","");
$(this).attr("action",d);
$(this).attr("target","_top")
}}setTimeout(function(){c.hideLoader()
},10000)
});
$('input[name="username"]').each(function(){if(!isNaN($(this).val())){$(this).val("");
var d=$(this).parents("form").get(0);
$('input[name="password"]',d).val("")
}});
$("#signup_form_regular,#sign_up_form").submit(function(){if(!c.validateLoginSubmitData({formId:this.id})){return false
}});
$("#user_mybooking_login_form").submit(function(){if(!c.validateLoginSubmitData({formId:this.id,passwordIsNumeric:1,loginIsBookingNr:1})){return false
}});
$(".in-pagelogin-form").submit(function(){if(booking.env.auth_level<1){var d=$(".in-pagelogin-form").height()-11
}else{var d=$(".in-pagelogin-form").height()+19
}$("#page_login_loading").css("height",d+"px").show()
});
$(".user_login_show_signin, .user_login_show_signup").live("click",function(){if($(this).hasClass("user_login_show_signup")){booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(true,this)
}else{booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(false,this)
}$(".user_login_error_msg").hide();
return false
});
$(window).bind("beforeunload",function(){if(!B.track.getVariant("HBbOcNLOWDfeFYeVPaae")){$("iframe[name=log_tar]").remove()
}else{$("iframe[name=log_tar]").each(function(){var d=$(this).parent();
$(this).remove().attr("src","about:blank").appendTo(d)
})
}})
},validateLoginSubmitData:function(l){var k=$("#"+l.formId),h,d,e,j,f,g,c;
f=k.parents(".user_login_form");
g=$(".user_login_error_msg",f);
if(l.loginIsBookingNr){c=$(".user_bn_login_input",k).val();
c=c.replace(/\./g,"");
$(".user_bn_login_input",k).val(c);
if(!c.length||!/^\d+$/g.test(c)){this.displayLoginErrorMsg({errorTarget:g,errorMsg:(c.length===0?booking.env.b_blank_bkng_nr:booking.env.b_bkng_nr_must_be_numeric)});
return false
}}$passwordInput=$(".password_input",k);
if($passwordInput.length){h=$passwordInput.val()
}else{return 1
}if(l.passwordIsNumeric||(g.length&&f.hasClass("user_login_single_signup"))||($(".userlogin_signup_tab",f).hasClass("active"))){if(h&&h.length){e=h.length
}else{e=0
}if(l.passwordIsNumeric){if(!e||!(/^\d+$/g.test(h))){this.displayLoginErrorMsg({errorTarget:g,errorMsg:(e===0?booking.env.b_blank_numeric_pin:booking.env.b_password_must_be_numeric)});
return false
}}else{if(e<8){this.displayLoginErrorMsg({errorTarget:g,errorMsg:booking.env[!e?"account_error_add_password":"password_needs_8"]});
return false
}else{j=$(".username_input",k);
if(j.length){if(j.val()&&j.val()===h){this.displayLoginErrorMsg({errorTarget:g,errorMsg:booking.env.password_cant_be_username});
return false
}}}}return true
}},displayLoginErrorMsg:function(c){if(!c||!c.errorTarget||!c.errorMsg){return
}c.errorTarget.show().text(c.errorMsg);
booking[sNSStartup].new_personal_menu.recheckHeight();
var d=$("#foldout_error").height()+32;
$("#old_pin_login").css("top",d+"px")
},thirdParty:function(f,c,e,d){if(c&&!d){$("#log_tar").attr("src",e)
}if(d){$("#email_send").show("slow")
}},thirdPartyCancel:function(e,d,c){this.hideLoader();
if(typeof $.noticeAdd!="undefined"){$.noticeAdd({text:"\n \n \n "+d+" \n \n \n ",stay:false,textLabel:"login_foldout",stayTime:3000,type:"users",close:"all",destination:""})
}if(c){$("#email_send").show("slow")
}},reCall:function(l){var f=this;
if(l.reload){booking.env.b_req_login="1"
}if(l.loginstatus=="OK"){if(l.userlanguage||l.currency){var c=booking.env.b_this_url;
var j=(c.indexOf("?")>0)?"&":"?";
if(l.userlanguage){c+=j+"lang="+l.userlanguage;
j="&"
}if(l.currency){c+=j+"selected_currency="+l.currency
}c.replace("logout=1","");
document.location.href=c
}else{if(booking.env.b_redirect){document.location.href=booking.env.b_redirect
}else{if(booking.env.b_req_login=="1"){var g=booking.env.b_this_url;
g.replace("logout=1","");
document.location.href=g
}else{var k=booking.env.b_this_url;
k.replace("logout=1","");
k=(k.indexOf("?")>0)?k+";logout=1":k+"?logout=1";
sLoginLinks=l.loginlink.replace("sign_out_url",k);
$("#login-form_wrapper fieldset").hide();
$(".welcome_login_link").hide();
$("#current_account_foldout").removeClass("non_logged_in_user").addClass("logged_in_user");
if(booking.env.is_user_wishlists){$("#search_tab_favourite").hide();
$("#search_tab_wishlists").show();
if(booking.env.is_user_wishlists_for_all){$("#wishlist_modal_user_access").hide();
$("#wishlist_modal_content").show();
booking.lightbox.rePosition();
if(booking.env.b_user_has_imported_faves){$("#search_tab_wishlists").find(".user_imported_faves_new").show()
}}long_list=false;
hotel_id=booking.env.b_hotel_id;
$.get("/wishlist/get",{hotel_id:hotel_id,aid:booking.env.b_aid,lang:booking.env.b_lang_for_url,sid:booking.env.b_sid,stype:booking.env.b_site_type_id},function(x){if(x&&x.success&&x.lists&&x.lists.length){var w=x.lists,t="",u="",r;
for(var q=0,p=x.lists.length;
q<p;
q++){if(x.lists.length>3){long_list=true
}r=x.lists[q];
t+='<li><label><input type="checkbox" id="wl_'+r.id+'" value="wl_'+r.id+'"'+(r.selected==1?'checked="checked"':"")+" />"+r.name+"</label></li>";
u+='<li><a href="'+booking.env.new_wishlist_url+r.id+'"><span>'+r.name+"</span></a></li>"
}$("#wl_list").html(t);
$("#search_tab_wishlists_content .menu_wishlists").html(u);
if(long_list=true){$(".wl_list_box").addClass("scrolling_list")
}}})
}else{$("#search_tab_favourite").show();
$("#search_tab_wishlists").hide();
booking.lightbox.hide()
}if($("#login_redesign").length){var e=$("#login_redesign").get(0);
$(e).addClass("no_arrow");
$(e).mouseover(function(){return false
});
$(e.parentNode).mouseover(function(){return false
})
}$("#current_account_foldout").css("width","auto");
var n=window.setTimeout(function(){$("#password_input_top").val("");
if(l.avatarurl&&l.avatarurl!="0"){if($(".my_image img").length){$(".my_image img").each(function(){$(this).attr("src",l.avatarurl);
if($(".head_firstname").length){$(this).css({"margin-top":"-5px",width:"26px",height:"26px"})
}})
}}else{if(l.defaultavatar!=0){if($(".my_image img").length){$(".my_image img").addClass("def_avtr");
$(".my_image img").addClass("t_s_avtr_"+l.defaultavatar);
$(".my_image img").css({"margin-top":"-4px","margin-left":"-1px",width:"24px",height:"24px"})
}}}setTimeout(function(){f.preShowMenu()
},100);
if(!$("#b_header").length){if(typeof $.noticeAdd!="undefined"&&l.growl1&&l.growl2){$.noticeAdd({text:"\n \n \n "+unescape(l.growl1)+"<br>"+unescape(l.growl2)+" \n \n \n ",textLabel:"user_login_notice",stay:false,stayTime:3000,type:"users",close:"all",destination:"",addClassName:"notice_login"})
}}},500);
if(l.email!=""){if($("#email_confirm").length&&$("#email_confirm").val()==""){$("#email_confirm").val(l.email);
$("#error_email_confirm").hide();
$("#label_email_confirm").removeClass("val-no").addClass("val-yes")
}if($("#email").length&&$("#email").val()==""){$("#email").val(l.email);
$("#error_email").hide();
$("#label_email").removeClass("val-no").addClass("val-yes")
}}if(l.fdata1){if($("#address1").length&&$("#address1").val()==""){$("#address1").val(l.fdata1)
}}if(l.fdata2){if($("#city").length&&$("#city").val()==""){$("#city").val(l.fdata2)
}}if(l.fdata3){if($("#zip").length&&$("#zip").val()==""){$("#zip").val(l.fdata3)
}}if(l.fdata4){if($("#cc1").length&&$("#cc1").val()==""){$("#cc1").val(l.fdata4)
}}if(l.fdata5){if($("#phone").length&&$("#phone").val()==""){$("#phone").val(l.fdata5)
}}var h=" ";
if(l.fdata6){if($("#lastname").length&&$("#lastname").val()==""){$("#lastname").val(l.fdata6);
$("#error_lastname").hide();
$("#label_lastname").removeClass("val-no").addClass("val-yes")
}$(".head_lastname").text(l.fdata6);
h=l.fdata6
}if(l.fdata7){if($("#firstname").length&&$("#firstname").val()==""){$("#firstname").val(l.fdata7);
$("#error_firstname").hide();
$("#label_firstname").removeClass("val-no").addClass("val-yes")
}$(".head_firstname").text(l.fdata7);
h=l.fdata7+" "+h
}else{if(l.fdata6){$(".head_firstname").text("")
}}if($(".login_for_name").length){if(h!=" "){$(".login_for_name").val(h);
$(".login_for_name").css({color:"#003580"})
}}$("input[name='username']").val(l.email);
if(booking.lightbox&&booking.lightbox.isopen){booking.lightbox.close()
}booking[sNSStartup].new_personal_menu.closeSelect(null,true,l.hasbookings);
if(booking[sNSStartup].hide_email_confirm){booking[sNSStartup].hide_email_confirm.hideConfMailInit()
}if(l.has_stored_cc>0){current_book_url=booking.env.b_this_url;
current_book_url=current_book_url.replace(";logout=1","");
current_book_url=current_book_url+";tmpl=profile/creditcards_ajax;";
$("#bs3_cc_form #book_credit_card").load(current_book_url+" #book_credit_card");
$("#cc_img").remove()
}$("#multiple_login").hide();
f.hideLoader()
}}}}else{if(l.error){var o=unescape(l.error)
}else{var o=""
}var m=(l.nofoldout)?false:true;
var d=window.setTimeout(function(){if(m){if(B.env.b_is_tdot_traffic){B.track.exp("PNZWTNHMBefLPeYAcAGaT")
}if(B.env.b_is_tdot_traffic&&B.track.getVariant("PNZWTNHMBefLPeYAcAGaT")){$("#foldout_error").html(o);
var q=$(".forgot_link_look").text(),p=$(".forgot_link_look").attr("data-href");
$(".forgot_pass_trigger").attr("href",p).attr("data-href",p).text(q);
$("#foldout_error").show()
}else{$("#foldout_error").html(o).show()
}var r=$("#foldout_error").height()+32;
$("#old_pin_login").css("top",r+"px");
booking[sNSStartup].new_personal_menu.openSelect("current_account");
$(".user_login_show_signup").click(function(){$("#username").val($("#username_input_top").val());
$("#new_user").click();
return false
})
}else{if($("#bs2_page_login_error").length){$("#bs2_page_login_error").html(o).show()
}}},500);
f.hideLoader()
}},toggle:function(c,f){var e=c.getAttribute("shown");
if(e=="false"){$("#foldout_error").hide();
$(c).css("display","block");
if(f==1000){var d=$("#loginPopup form").get(0);
f=$(d).height()
}$(c).animate({height:f+"px"},500,function(){document.getElementById("username_input_top").focus()
});
c.setAttribute("shown","true")
}else{$(c).animate({height:"0px"},500,function(){$(this).css("display","none")
});
c.setAttribute("shown","false")
}},hideLoader:function(){$("#login_loading").hide();
$("#page_login_loading").hide()
},preShowMenu:function(){if((booking.env.b_action!="book")||(booking.env.is_exp_user_center_bar=="1")){booking[sNSStartup].new_personal_menu.openSelect("current_account");
oThat.moused_menu=false;
$("#current_account").mouseenter(function(){oThat.moused_menu=true
});
setTimeout(function(){if(!oThat.moused_menu){booking[sNSStartup].new_personal_menu.closeSelect()
}},4000)
}}};
booking[sNSStartup].new_personal_menu={priority:9,opening_state:0,cur_open:"",max_select_height:240,is_ie:0,openSlow:false,init:function(){var c=this;
if(!booking.env.new_personal_menu_ie_performance){if($.browser.msie){$(".select_foldout ul li a").mouseenter(function(){$(this).addClass("hover_class")
});
$(".select_foldout ul li a").mouseleave(function(){$(this).removeClass("hover_class")
})
}}if($(".b_msie_6").length){this.is_ie=6
}if($(".b_msie_7").length){this.is_ie=7
}if(booking.env.is_user_center_bar=="1"){}else{$(".select_box").mouseenter(function(){$(this).addClass("sel_hover")
});
$(".select_box").mouseleave(function(){$(this).removeClass("sel_hover")
})
}$("body").click(function(f){if(c.opening_state==2){var e=$(f.target);
if($(e).length){if(!$(e).parents("#current_account_foldout").length){c.closeSelect()
}}}if(booking.maps&&booking.maps.map_opened&&!(booking.maps.is_sr&&booking.map.mapHasBeenDragged)){var d=$(f.target);
if((booking.maps.is_hp||booking.maps.is_sr)&&(d.length&&(!d.is("#b_map_container")&&!d.parents("#b_map_container,#sr_map").length&&d.attr("id")!=="close_map"))&&!(/gstatic/.test(d.attr("src")))){if($("#close_map").length>0){$("#close_map").click()
}else{if($("#close_map_lightbox").length>0){$("#close_map_lightbox").click()
}}}}});
$(".select_box").click(function(d){if(c.opening_state==0){c.openSelect($(this).attr("id"))
}else{if(c.cur_open!=$(this).attr("id")){c.closeSelect($(this).attr("id"))
}else{if(!$(d.target).parents("#current_account_foldout").length){c.closeSelect()
}}}})
},recheckHeight:function(){var c=$("#current_account_foldout .select_foldout_wrap").height()+15;
$("#current_account_foldout").animate({height:c+"px"},400)
},openSelect:function(j){if(booking.env.b_is_tdot_traffic){var o=$("#"+j);
if(booking.env.auth_level=="0"){booking.track.stage("PYdKffKQAOLBZMLUCC",1)
}if(booking.track.getVariant("PYdKffKQAOLBZMLUCC")&&o.attr("data-command")==="show-auth-lightbox"){return
}}if(booking.env.is_user_center_bar=="1"&&!booking.env.b_is_tdot_traffic){}else{oThat=this;
if(j==="login_redesign"&&booking.env.b_run_t_acc_bp_auth_lightbox){return
}this.cur_open=j;
var h=$("#"+j+"_foldout"),k,n=$("#foldout_loggedin").css("display")=="block",m="";
$("#"+j).addClass("sel_open");
this.opening_state=1;
h.css({display:"block",opacity:"0",overflow:"hidden",height:"400px",width:"200px"});
k=$($(".select_foldout_wrap",h).get(0));
k.css({"overflow-y":"hidden",height:"auto"});
var c=k.height();
var g=k.width();
var f=this.max_select_height;
if(n){if(booking.env.b_run_dddYIQJMJBPYSUGXKe){booking.track.exp("dddYIQJMJBPYSUGXKe")
}}if(h.hasClass("flex_foldout")){var l=g+10
}else{if(!$("#"+j).hasClass("sel_done")){var l=g+20;
$("#"+j).addClass("sel_done")
}else{var l=g
}}if(c>=this.max_select_height-10&&h.attr("id")!="current_account_foldout"){if(h.hasClass("flex_foldout")){f=c+10;
if(f<300){f=300
}}else{k.css({"overflow-y":"scroll",height:"230px",width:l+"px"});
if(!this.is_ie==6&&!this.is_ie==7){l+=10
}}}else{f=c+10;
k.css({"overflow-y":"hidden",height:"auto"})
}if(this.is_ie==6||this.is_ie==7&&!n){h.css({opacity:"1",height:"0px",width:"0px"});
h.css({width:"auto"});
if(h.hasClass("smaller_booking_nr_login")){k.css({width:"600px"})
}else{k.css({width:"482px"})
}g=k.width();
l=g+10
}else{h.css({opacity:"1",height:"0px",width:"auto"})
}if(h.hasClass("left_foldout")&&!booking.env.rtl){h.css({width:l+"px","padding-right":"0px"})
}else{h.css({width:l+"px","padding-right":"10px",left:"0"})
}if(this.is_ie==6||(this.is_ie==7&&!n)){var d=h.parents(0).width();
if(h.hasClass("left_foldout")&&!booking.env.rtl){iFixedPointEx=d-h.width()-2;
if(iFixedPointEx<0){d=d-iFixedPointEx
}}if(this.is_ie==6||this.is_ie==7){var e=210;
if($("#multiple_login",h).length){if($(".smaller_booking_nr_login").length&&!n){e=550
}else{if($("#foldout_loggedin").css("display")!="block"){e=482
}else{e=182
}}}if(this.is_ie==7){d+=100
}h.css({width:e+"px","padding-right":"18px"})
}else{h.css({width:l+"px"});
$(".select_foldout_wrap",h).css({"overflow-x":"hidden"})
}}if(this.openSlow){this.openSlow=false;
h.animate({height:f+"px"},800)
}else{h.css({height:f+"px"})
}setTimeout(function(){oThat.opening_state=2
},200);
if(booking.env.b_is_ipad){$("body").bind("touchstart",function(q){if(oThat.opening_state==2){var p=$(q.target);
if($(p).length&&!$(p).is("#current_account")){if(!$(p).parents("#current_account_foldout").length&&!$(p).parents("#login_redesign")){oThat.closeSelect();
$(this).unbind(q)
}}}})
}}},closeSelect:function(e,f,c){var d=this;
if(f){$("#foldout_login").css({display:"none"});
$("#multiple_login").css({display:"none"});
$("#foldout_loggedin").css({display:"block"});
if(c){$("#stats_menu_link").css({display:"block"})
}}if(this.opening_state==2){$(".select_foldout").animate({height:"0px"},200,function(){$(".select_foldout").css({display:"none"});
$(".select_box").removeClass("sel_open");
if(e&&e!=null){d.openSelect(e)
}});
this.opening_state=0
}if($("#user_searches_menu").length){booking[sNSStartup].top_saved_searches.closeTabs()
}},scrollToLogin:function(){if(booking.env.rtl){$("body").scrollTo({top:0,left:0},500)
}else{$("body").scrollTo({top:0,left:1000},500)
}this.openSlow=true;
if(this.opening_state==0){this.openSelect("current_account")
}else{this.closeSelect("current_account")
}},hideLoader:function(){$("#login_loading").hide();
$("#page_login_loading").hide()
}};
booking[sNSStartup].my_social_networks={priority:9,tp_window:null,tp_cur:"",cur_state:"CLOSED",window_sizes:{yahoo:[510,500],facebook:[500,450],google:[850,510]},init:function(){var c=this;
$(".signup_tp a, #re_log_in a, a.connect_with").click(function(){booking[sNSStartup].new_personal_menu.opening_state=2;
var k=this;
var e=$(k).attr("href");
var g=$(k).attr("id");
var f=e;
$("#login_loading").show();
if(c.cur_state!="OPENING"){if(c.tp_window){if(c.tp_cur!=g.toLowerCase()){window.clearInterval(c.checking_in);
c.tp_window=null;
c.cur_state="CLOSED"
}else{c.tp_window.focus()
}}else{c.cur_state="OPENING";
c.tp_cur=g.toLowerCase();
var j=500;
var h=500;
if(c.window_sizes[c.tp_cur]){var j=c.window_sizes[c.tp_cur][0];
var h=c.window_sizes[c.tp_cur][0]
}var l="width="+j+",height="+h+",toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1";
c.tp_window=window.open(f,"",l);
var d="rem_provider="+c.tp_cur;
if(booking.env.b_this_url.indexOf(d)>-1){booking.env.b_this_url=booking.env.b_this_url.replace(";"+d,"");
booking.env.b_this_url=booking.env.b_this_url.replace(d,"")
}c.checking_in=window.setInterval(function(){if((c.tp_window&&c.tp_window.closed)||!c.tp_window){$("#login_loading").hide();
$("#page_login_loading").hide();
window.clearInterval(c.checking_in);
c.tp_window=null;
c.cur_state="CLOSED"
}},1000);
c.cur_state="OPENED";
if(c.tp_window){c.tp_window.focus()
}}}return false
})
}};
booking[sNSStartup].merge_mybooking_myaccount={priority:9,old_pin_shown:false,init:function(){var c=this;
$("#user_pin_link").click(function(){$("#foldout_error").hide();
$("#old_pin_login").css({display:"block",top:"0px"});
$("#existing_user_login .login_right").hide();
if($(".b_msie_8").length){$("#old_pin_login").css({left:"240px"})
}else{$("#old_pin_login").animate({left:"240px"})
}c.old_pin_show=true;
return false
});
$("#new_user").click(function(){c.newUserOpen(true,this)
});
$("#existing_user").click(function(){c.newUserOpen(false,this)
});
$("#old_pin_login a").click(function(){$("#foldout_error").hide();
$("#old_pin_login").css({top:"0px"});
$("#old_pin_login").animate({left:"500px"},function(){$("#old_pin_login").css("display","none")
});
c.old_pin_show=false;
return false
});
if(booking.env.b_is_on_signup_page){booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(true,document.getElementById("account_new_user"))
}},newUserOpen:function(c,e){var d=$(e).parents(".user_login_form");
if(this.old_pin_show){$("#old_pin_login",d).hide();
$("#existing_user_login .login_right",d).show()
}if(c){$("#existing_user_login, #existing_user_signin",d).hide();
$("#foldout_signup, #new_user_signup",d).show();
$("#existing_user, #account_existing_user",d).removeClass("active");
$("#new_user, #account_new_user",d).addClass("active");
booking[sNSStartup].new_personal_menu.recheckHeight()
}else{$("#existing_user_login, #existing_user_signin",d).show();
$("#foldout_signup, #new_user_signup",d).hide();
$("#existing_user, #account_existing_user",d).addClass("active");
$("#new_user, #account_new_user",d).removeClass("active");
booking[sNSStartup].new_personal_menu.recheckHeight()
}$(".better_error").hide();
$("#old_pin_login").css("top","0px")
}};
booking[sNSStartup].welcome_user={priority:9,old_pin_shown:false,init:function(){$("#welcome_login").click(function(){booking[sNSStartup].new_personal_menu.openSelect("current_account");
booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(false,this.id);
return false
});
$("#welcome_signup").click(function(){booking[sNSStartup].new_personal_menu.openSelect("current_account");
booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(true,this.id);
return false
})
}};
booking[sNSStartup].faq_login_foldout={priority:9,init:function(){if(booking.env.b_action=="general"&&booking.env.auth_level=="0"){$(".open_top_login").click(function(){booking[sNSStartup].new_personal_menu.openSelect("current_account");
booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(false,this.id);
$("body").scrollTo({top:0,left:0},500);
return false
})
}}};
booking[sNSExperiments]["ZSUNCTYAbEOFefYSbC"]=(function(e,h){var f=$(e);
function g(){if(e.opener==null){return
}if(screen.width<=f.width()){return
}var l=booking.env.b_partner_id=="404815";
var k=l;
var j=f.width()<screen.width*0.9;
if(k){if(j){c("show");
$("body").one("click",function(){e.resizeTo(screen.width*0.95,screen.height*0.95);
d()
})
}}else{c("show");
$("body").one("click",function(){e.resizeTo(screen.width,screen.height);
d()
})
}}function c(j){h.track.stage("fEFNeSfLIMeHGUC",1);
if(h.track.getVariant("fEFNeSfLIMeHGUC")){if(j=="show"){$(".lp_resize_icon_partners_wrapper").css("bottom","10px").one("click",function(){h.track.custom_goal("fEFNeSfLIMeHGUC",1)
})
}else{$(".lp_resize_icon_partners_wrapper").fadeOut(500,function(){$(this).remove()
})
}}}function d(){e.moveTo(0,0);
$(e).trigger("resize");
c("hide")
}return{init:g,priority:1}
})(window,booking);
booking[sNSStartupLoad].message_box={priority:9,init:function(){$("#self_change1 .messageBox").click(function(e){var c=$(this).children("a").attr("href");
var d=/(?:\b)tmpl[\=]docs[\\\/]customer_service(?:\b)/i;
if(c&&(c!="#")&&(!d.test(c))){location.href=$(this).children("a").attr("href")
}return false
});
$("#isDifferent").fadeIn()
}};
booking.newsLanding=(function(){var c=function(){$(".location_dropdowns select").live("focus",function(){var d=$(this).find(":selected").text();
$(this).attr("oldValue",d)
});
$(".location_dropdowns select").change(function(){myid=$(this).attr("id");
myvalue=$(this).find(":selected").val();
mytext=$(this).find(":selected").text();
selected=$(this).attr("oldValue");
if(myvalue.length>0){if(myid=="fd_title_countryname"){track_string=booking.env.b_lang+" | Countries | "+mytext
}else{if(myid=="fd_title_regionname"){track_string=booking.env.b_lang+" | Regions | "+mytext
}else{if(myid=="fd_title_cityname"){track_string=booking.env.b_lang+" | Cities | "+mytext
}}}}else{if(myid=="fd_title_countryname"){track_string=booking.env.b_lang+" | Countries Remove | "+selected
}else{if(myid=="fd_title_regionname"){track_string=booking.env.b_lang+" | Regions Remove | "+selected
}else{if(myid=="fd_title_cityname"){track_string=booking.env.b_lang+" | Cities Remove | "+selected
}}}}booking.google.trackEvent(booking.google.clickTracker,"Dealfinder",track_string);
this.form.submit()
});
$("#b_sortbox select").change(function(){booking.google.trackEvent(booking.google.clickTracker,"Dealfinder","df_dropdown_sorting");
this.form.submit()
});
$("#checkin-flexible-form").submit(function(){var d=$("#b_fd_checkin_date").val();
var e=$("#fd_flex").attr("checked");
if(d!="undefined"){if(e){track_string=booking.env.b_lang+" | Date Select | Flexible"
}else{track_string=booking.env.b_lang+" | Date Select"
}}else{track_string=booking.env.b_lang+" | Date Remove | "
}booking.google.trackEvent(booking.google.clickTracker,"Dealfinder",track_string)
})
};
return{init:c}
}());
booking[sNSStartup].newsletterSignup={priority:8,init:function(){$(".subscriptionbox").click(function(){if(B.env.b_user_auth_level_is_none){B.track.exp("AaSDVFfMPSXPeHHSdFaLbFWLBefNINLT")
}booking[sNSStartup].lightbox.show($("#subsciber_firstname_lightbox"),{customWrapperClassName:"subscribername-lightbox"});
return false
});
if(booking.env.b_show_newsletter_popup){booking[sNSStartup].lightbox.show($("#subsciber_firstname_lightbox"),{customWrapperClassName:"subscribername-lightbox"})
}if(booking.env.b_show_solicitation_popup){if(booking.env.b_show_success_popup_content){booking[sNSStartup].lightbox.show($("#solicitation_feedback_success"),{customWrapperClassName:"solicitation-lightbox"});
return false
}else{if(booking.env.b_show_error_popup_content){booking[sNSStartup].lightbox.show($("#solicitation_feedback_error"),{customWrapperClassName:"solicitation-lightbox"});
return false
}}}}};
booking[sNSStartup].newsletterTutorials={priority:8,init:function(){var e=1;
var f=this;
if(booking.env.tutorialpopup){if(b_cookie&&(b_cookie.showthistutorial!=booking.env.tutorialpopup)){var c=booking.env.tutorialpopup;
var d=$(".tutorialwrapper_"+c).attr("id");
f.loadPopups("#tutorial_dyk_"+c+"_s"+e,c,e)
}}$("#tutorial_dyk_02_s1 a.fd_next").click(function(){$("#show_reviews_tab").click()
});
$("a.fd_close").click(function(){f.closeTutorial(this)
});
$("a.fd_next").click(function(){f.nextPopup(this,d,c)
})
},loadPopups:function(g,j,h){var c=this;
var k=$("#tutorial_dyk_"+j+"_s"+h).attr("rel");
if(k){var f=new c.relativePosition(k,true,false);
var d=$(g).attr("rev");
var e=$(g).width();
var m=new c.getRelInlineCss(g);
if(m.rgValues){$(this).css({top:"",right:"",bottom:"",left:""})
}if(d!="undefined"){if(d=="right"){var l={top:(f.relDivTop+m.rgTop)+"px",left:(f.relDivSide+m.rgLeft)+"px"}
}else{if(d=="left"){var l={top:(f.relDivTop+m.rgTop)+"px",left:(f.relDivSide-e+m.rgLeft)+"px"}
}}}if(f.scrollToDiv&&h==1){$("html, body").delay(500).animate({scrollTop:(f.relDivTop-50)},1000,function(){$(g).css(l).fadeIn(300)
})
}else{$(g).delay(300).css(l).fadeIn(500)
}}else{$(g).delay(300).fadeIn(500)
}},relativePosition:function(c){var d=$("#"+c).offset()||{};
this.relDivTop=d.top;
var f=d.left;
var e=$("#bodyconstraint-inner").offset().left;
this.relDivSide=(f-e);
if(this.relDivTop>200){this.scrollToDiv=true
}else{this.scrollToDiv=false
}},getRelInlineCss:function(c){this.rgTop=parseInt($(c).css("top").replace("px",""))||0;
this.rgLeft=parseInt($(c).css("left").replace("px",""))||0;
if(this.rgLeft==0&&this.rgTop){this.rgValues=false
}else{this.rgValues=true
}},nextPopup:function(c,g,d){var h=$(c).attr("id").split("nextstep_")[1];
var e=(parseInt(h)+1);
var f="#"+g+"_s"+h;
$(f).fadeOut(300);
this.loadPopups("#tutorial_dyk_"+d+"_s"+e,d,e)
},closeTutorial:function(c){$(c).closest(".tutorial_dyk").fadeOut(300);
b_cookie=b_cookie||{};
b_cookie.showthistutorial=booking.env.tutorialpopup;
if(typeof(JSON)!="undefined"){$.cookie("b",JSON.stringify(b_cookie),{expires:30,path:"/",domain:booking.env.b_domain_end})
}return false
}};
booking[sNSStartup].ow_page={init:function(){$(".country_flag a").click(function(c){el=$(this).parents("div.country_block");
if($("div.aaa:eq(0)",el).is(":visible")){$("div.aaa",el).hide()
}else{$("div.aaa",el).show()
}c.preventDefault()
});
$(".gcityname a").click(function(c){al=$(this).parents("div.office");
if($("div.bbb:eq(0)",al).is(":visible")){$("div.bbb",al).hide()
}else{$("div.bbb",al).show()
}c.preventDefault()
})
}};
booking[sNSStartup].accounts_for_everybody={priority:9,passwordFields:0,passwordChar:"",maskPass:"",isAdding:false,keyCounter:0,init:function(){var c=this;
$(".passwd_strength").each(function(){var e='<div class="pwd_strength"><div class="strength"></div></div><span class="jq_tooltip strength_text" title="'+booking.env.b_passwd_tooltip+'" rel="300">&nbsp;</span>';
$(this).after(e);
var f=parseInt($(this).css("margin-left").replace("px",""))+1;
$(".pwd_strength",this.parentNode).css("margin-left",f+"px");
var d=this;
$(".pwd_strength",this.parentNode).click(function(){$(d).focus()
});
$(".pwd_strength",this.parentNode).mouseenter(function(){$(d).addClass("hoverText")
});
$(".pwd_strength",this.parentNode).mouseleave(function(){$(d).removeClass("hoverText")
})
});
$(".passwd_strength").focus(function(){var e=parseInt($(this).css("margin-left").replace("px",""));
var d=(booking.env.b_browser=="safari")?2:e+2;
$(".pwd_strength",this.parentNode).css("margin-left",d+"px")
});
$(".passwd_strength").blur(function(){var d=parseInt($(this).css("margin-left").replace("px",""))+1;
$(".pwd_strength",this.parentNode).css("margin-left",d+"px")
});
$(".passwd_strength").keyup(function(){c.keyCounter++;
oThis=this;
var d=c.keyCounter;
setTimeout(function(){c.calculateStrength(oThis,d)
},400)
});
if($("td.pass_fix").length){$("#new_pass").blur(function(){var d=$(this).parents("tr").get(0);
if($(this).val()!=""){$("th span",d).removeClass("val-no");
$("th span",d).addClass("val-yes")
}else{$("th span",d).removeClass("val-yes");
$("th span",d).addClass("val-no")
}});
$("#confirm_new_pass").blur(function(){var d=$("#new_pass").val();
var e=$(this).parents("tr").get(0);
if($(this).val()!=""&&$(this).val()==d){$("th span",e).removeClass("val-no");
$("th span",e).addClass("val-yes")
}else{$("th span",e).removeClass("val-yes");
$("th span",e).addClass("val-no")
}})
}},calculateStrength:function(o,e){if(this.keyCounter==e){var g=$(o).val();
var f=$(".pwd_strength .strength",o.parentNode);
if(f.length){var q=0,n=0,j=0,h=0,c=0,d=g.length,r,m;
if(d>0){q=parseInt(d/2.5);
for(var l=0;
l<d;
l++){var p="!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_±¤";
var k="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
if(!isNaN(g.charAt(l))){n=n+1
}if(isNaN(g.charAt(l))){j=1
}if(p.indexOf(g.charAt(l))>-1){h=h+2
}if(k.indexOf(g.charAt(l))>-1){c=c+1
}}if(h>4){h=4
}if(n>2){n=2
}if(c>2){c=2
}if(j!=0){q+=n
}q+=h;
q+=c;
if(q>10){q=10
}}r=26;
if($(o).parents("#foldout_signup").length||$(o).parents("#registration_id").length){r=18
}m=r*q;
strengthMsgIndex=parseInt((q/2)+1);
if(d<8){f.addClass("strength_invalid");
if(m===0){m=r
}else{if(m>3){m=3*r
}}strengthMsgIndex=0
}else{f.removeClass("strength_invalid")
}f.animate({width:m+"px"});
if(g!=""){$(".strength_text",o.parentNode).text(booking.env.b_password_strength_msg[strengthMsgIndex])
}else{$(".strength_text",o.parentNode).text("")
}}}},togglePasswd:function(h){var f=$(h).parents("form").get(0);
$(".textual_passwd",f).toggle();
var g=$(".textual_passwd",f).get(0);
var d=$(g).css("display");
var c=$(g).attr("name");
c=c.split("textpwd_")[1];
var e=$("input[name='"+c+"']",f).get(0);
if(d!="none"){this.fixCursorPosition(null,g);
if(!$("td.pass_fix").length){$(e).addClass("focusText")
}}else{$(e).removeClass("focusText");
this.fixCursorPosition(null,e)
}this.syncPassFields($(g).get(0),true)
},fixCursorPosition:function(f,e){if(f!=null){var d=document.getElementById(f)
}else{var d=e
}d.focus();
var g=$(d).val().length;
if(g>0){if("selectionStart" in d){d.selectionStart=g;
d.focus()
}else{var c=document.selection.createRange();
c.moveStart("character",g);
c.moveEnd("character",0);
c.select()
}}},syncPassFieldsMask:function(h){var f=this;
var d="textpwd_"+$(h).attr("name");
var c=$("input."+d,h.parentNode).get(0);
var e=$(h).val();
var j="";
var k="";
f.maskPass="";
for(var g=0;
g<e.length;
g++){var l=e.length-1;
if(g>=e.length-1){j+=e[g];
f.maskPass+=this.passwordChar
}else{j+=this.passwordChar;
f.maskPass+=this.passwordChar
}}$(c).val(j);
setTimeout(function(){f.syncPassFieldsFullMask(c)
},1000)
},syncPassFieldsFullMask:function(c){$(c).val(this.maskPass)
},syncPassFields:function(l,g){var o=false;
var m=null;
var f=this;
if(g){var e=$(l).attr("name");
e=e.split("textpwd_")[1];
var c=$("input[name='"+e+"']",l.parentNode.parentNode).get(0);
var n=$(c).attr("id");
if(n.indexOf("confirm_")>-1){var k="#"+n.replace("confirm_","");
if(!$(k).length){k="#"+n.replace("_confirm","")
}o=true
}else{var k="#confirm_"+n
}if($(k).length){m=$(k).get(0);
$(m).val($(l).val());
var d=$(m).attr("name");
d="textpwd_"+d;
var j=$("input."+d,m.parentNode.parentNode).get(0);
$(j).val($(l).val())
}}else{var e="textpwd_"+$(l).attr("name");
var c=$("input."+e,l.parentNode).get(0)
}$(c).val($(l).val());
if(g){if(o){if($(m).hasClass("passwd_strength")){this.keyCounter++;
var h=this.keyCounter;
setTimeout(function(){f.calculateStrength(m,h)
},400)
}}else{if($(c).hasClass("passwd_strength")){this.keyCounter++;
var h=this.keyCounter;
setTimeout(function(){f.calculateStrength(m,h)
},400)
}}}else{if($(l).hasClass("passwd_strength")){this.keyCounter++;
var h=this.keyCounter;
setTimeout(function(){f.calculateStrength(m,h)
},400)
}}}};
booking[sNSStartup].pb_mybooking_bn_pin_login_resend_conf=(function(e,k,f){var j=false,t=240,g=0,r=28,d="g-hidden";
function c(){k("body").delegate(".js-btn--invite-to-resend, .js-btn--repeat","click",q);
k("body").delegate(".js-btn--close","click",n);
k("body").delegate(".resend-conf-form","submit",m);
k("body").delegate(".resend-conf-form__send","click",m)
}function l(){if(!j){j=true;
t=k(".popover_content--has-footer").outerHeight();
k(".popover_content--has-footer").css("min-height",t);
k(".resend-conf").addClass("resend-conf--absolute")
}}function q(u){var w=k(u.target).closest(".resend-conf");
if(w.closest(".popover_content--has-footer").length){l()
}g=g||w.find(".resend-conf__step--invite").outerHeight();
t=booking.env.b_is_tdot_traffic?t+100:t;
w.addClass("resend-conf--active");
w.animate({height:t-r},250);
w.find(".resend-conf__step").addClass(d);
w.find(".resend-conf__step--form").removeClass(d);
return false
}function n(u){var w=k(u.target).closest(".resend-conf");
w.removeClass("resend-conf--active");
w.find(".resend-conf__step").addClass(d);
w.find(".resend-conf__step--invite").removeClass(d);
w.animate({height:g},250);
return false
}function m(y){var x=k(y.target),z=x.closest(".resend-conf"),u=x.is("form")?x:x.closest(".resend-conf-form"),w=z.find(".resend-conf-form__send");
y.preventDefault();
if(w.is(".disabled")){return false
}if(u.find("input[name=email]").val()==""||!u.find("input[name=email]").val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){u.find("input[name=email]").addClass("invalid-input");
u.find(".resend-conf-form__error").removeClass(d);
return false
}u.find("input[name=email]").removeClass("invalid-input");
u.find(".resend-conf-form__error").addClass(d);
w.addClass("disabled");
k.ajax({url:u.attr("action")+"?"+u.serialize(),dataType:"jsonp",jsonpCallback:"booking_cb_"+Date.now(),success:function(){o(z);
p(z)
},error:function(){h(z)
}})
}function p(w){var u=w.find(".resend-conf-form");
if(u.length){u[0].reset()
}w.find(".resend-conf-form input[name=email]").removeClass("invalid-input");
w.find(".resend-conf-form .resend-conf-form__error").addClass(d);
w.find(".resend-conf-form__send").removeClass("disabled")
}function o(u){u.find(".resend-conf__step").addClass(d);
u.find(".resend-conf__step--success").removeClass(d);
u.find(".resend-conf__success__email").text(u.find(".resend-conf-form input[name=email]").val())
}function h(u){u.find(".resend-conf__step").addClass(d);
u.find(".resend-conf__step--error").removeClass(d);
u.find(".resend-conf-form__send").removeClass("disabled")
}return{init:c}
})(booking,jQuery,jQuery(window));
(function(d,c,e){if(!e){return
}var f=function(l){var h,k,g,j=e.browser.msie;
for(h=0,k=l.length;
h<k;
h+=1){if(j){new Image().src=l[h];
continue
}g=c.createElement("object");
g.data=l[h];
if(j){g.width=1;
g.height=1;
g.style.visibility="hidden";
g.type="text/plain"
}else{g.width=0;
g.height=0
}c.body.appendChild(g)
}};
e(d).load(function(){var g=e(c.body),j="mousemove keyup scroll mousedown",n=e("[data-preload-assets]"),l=e.cookie("has_preloaded"),o=0,k=function(){g.unbind(j,h);
clearTimeout(o);
f(n.data("preload-assets"));
e.cookie&&e.cookie("has_preloaded",1,{expires:1,path:"/"})
},m=function(){o=setTimeout(k,10000)
},h=function(){clearTimeout(o);
m()
};
if(l){return
}if(n.length){setTimeout(function(){m();
g.bind(j,h)
},10000)
}})
}(window,window.document,window.jQuery));
booking[sNSStartup].rate_guarantee={priority:9,init:function(){var e=["#rate_guarantee a",".rate_guaranteed a","#rate_guaranteed","#wrap-hotelpage-top .best_rate_guarantee a","table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a","a.usps_rate_guarantee_link","#rate_guaranteev2 a","#ratelogo a","#terms_rateguarantee","a#guarantee_terms","#rates_feedback_invite a.jq_tooltip",".rate_guarantee_window_opener","#sidebar_usp_box a.best_price_popup","#sidebar_usp_box a.jq_tooltip "].join(",");
var d=["status=1","toolbar=0","menubar=0","width=450","height=550","scrollbars=1"].join(",");
var c=function(){window.open(this.href,"RateGuarantee",d);
return false
};
if($.fn.live!==void 0){$(e).live("click",c)
}else{$(e).on("click",c)
}return true
}};
booking.ensureNamespaceExists(sNSStartup);
booking[sNSStartup].search_engine_partitioned_disambiguation_page={priority:9,init:function(){$(".disambBlockHeader").click(function(){var d=$(this),c=$("#"+d.attr("data-results"));
if(c.hasClass("disambBlockShown")){c.slideUp().removeClass("disambBlockShown")
}else{c.slideDown().addClass("disambBlockShown")
}return false
})
}};
B[sNSStartup]["searchbox_dates_widget"]=(function(k,g){function d(l){k.Search.validators.create({type:"dates",name:"dates_are_not_empty",test:function(){var n=k.search.dates("checkin"),m=k.search.dates("checkout");
if(k.search.dates().mode!=="regular"){return false
}return n.type!=="valid"&&m.type!=="valid"
},fail:function(){return booking.env.to_check_availability_please_enter_your_dates_of_stay
}});
k.Search.validators.create({type:"dates",name:"checkin_date_is_selected",test:function(){if(k.search.dates().mode!=="regular"){return false
}var n=k.search.dates("checkin"),m=k.search.dates("checkout");
if(n.type!=="valid"&&m.type!=="valid"){return false
}return n.type!=="valid"
},fail:function(){return booking.env.please_enter_your_check_in_date
}});
k.Search.validators.create({type:"dates",name:"checkout_date_is_selected",test:function(){if(k.search.dates().mode!=="regular"){return false
}var n=k.search.dates("checkin"),m=k.search.dates("checkout");
if(n.type!=="valid"&&m.type!=="valid"){return false
}return m.type!=="valid"
},fail:function(){return booking.env.please_enter_your_check_out_date
}});
k.Search.validators.create({type:"dates",name:"duration_is_less_than_30_days",test:function(){if(k.search.dates().mode!=="regular"){return false
}var n=k.search.dates("checkin"),m=k.search.dates("checkout");
if(n.type!=="valid"||m.type!=="valid"){return false
}return Math.abs(m-n)>30
},fail:function(){return booking.env.error.checkout_date_more_than_30_days_after_checkin.name
}});
k.Search.validators.create({type:"dates",name:"checkin_is_earlier_than_checkout",test:function(){if(k.search.dates().mode!=="regular"){return false
}var n=k.search.dates("checkin"),m=k.search.dates("checkout");
if(n.type!=="valid"||m.type!=="valid"){return false
}return n>m
},fail:function(){return booking.env.error.checkout_date_not_after_checkin_date.name
}});
k.Search.validators.create({type:"dates",name:"dates_are_not_in_past",test:function(){if(k.search.dates().mode!=="regular"){return false
}var o=k.search.dates("checkin"),n=k.search.dates("checkout");
if(o.type!=="valid"||n.type!=="valid"){return false
}if(k.et.track("bLNZWIbNVYeUCBVQOSRKXe")){var m=k.calendar2.minToday();
var p=(m>o.dateObject_||m>n.dateObject_);
if(p){k.et.customGoal("bLNZWIbNVYeUCBVQOSRKXe",1)
}return p
}else{return(k.calendar2.today()>o.dateObject_&&k.calendar2.today()>n.dateObject_)
}},fail:function(){return booking.env.error.hp_dates_in_the_past.name
}});
k.Search.validators.create({type:"dates",name:"checkin_checkout_not_on_same_day",test:function(){if(k.search.dates().mode!=="regular"){return false
}var n=k.search.dates("checkin"),m=k.search.dates("checkout");
if(n.type!=="valid"||m.type!=="valid"){return false
}return n.valueOf()==m.valueOf()
},fail:function(){return booking.env.error.hp_same_day_checkin_checkout.name
}});
k.eventEmitter.bind(k.Search.Events.DATE_INVALID,function(q,n){var p=l.find(".b-form-group__error-messages"),m=n.validators,o;
if(!m){return
}o=m.reduce(function(r,t){if(t.status==="fail"&&t.message){r.push(t.message)
}return r
},[]);
if(o.length>0){l.addClass("b-form-group_error");
p.html('<ul class="b-form-group__error-messages_list"><li class="b-form-group__error-messages_list-item">'+o.join('</li><li class="b-form-group__error-messages_list-item">')+"</li></ul>")
}});
k.eventEmitter.bind(k.Search.Events.DATE_VALID,function(){l.removeClass("b-form-group_error")
});
k.eventEmitter.bind(k.Search.Events.DATE_MODE_CHANGED,function(n,m){k.search.dates().validate("reset");
k.Search.datePickerController.notifyAll(m.mode==="regular"?"enable":"disable")
});
g("#frm").bind("submit",function(m){var n=k.search.dates();
if(n.mode!==k.Search.DateModes.NODATES&&n.checkin.type!=="valid"&&n.checkout.type!=="valid"){n.setMode(k.Search.DateModes.NODATES)
}return n.validate()
});
g("#hotelpage_availform").bind("submit",function(o){try{var r=k.search.dates().validate();
var q=g(this);
var n="";
var m;
if(!r){q.addClass("has-date-validation-error-exp");
m=k.search.dates().validationResults();
if(m){n=m.reduce(function(t,u){if(u.status==="fail"&&u.message){t+='<span class="exclamation exclamation_daterrrors">&nbsp;!&nbsp;</span><p class="error errors_dateerros">'+u.message+"</p>"
}return t
},"")
}if(n){q.find(".dateerrors").html(n)
}}else{q.removeClass("has-date-validation-error-exp");
q.find(".errors_dateerros,.exclamation_daterrrors").hide()
}}catch(p){window.onerror("dates_validation_in_availability_form",window.location)
}if(!r){k.track.stage("BUacGWcOCaPWAUSGEbTC",1);
if(k.track.getVariant("BUacGWcOCaPWAUSGEbTC")){g(".js-hp-availability-section .lp_bold_date_picker_checkin").trigger("click")
}}return r
})
}function j(n,m){if(!n){return
}var l=new Date(n.year,n.month,n.date+m);
return{year:l.getFullYear(),month:l.getMonth(),date:l.getDate()}
}function e(q,l){var p=l.type,r=k.Search.datePickerController.all(),o=k.search.dates(l.type),n,m;
if(!(p==="checkin"||p==="checkout")){return
}if(!(o.type==="valid"||o.type==="month")){return
}n=k.search.dates("checkin");
m=k.search.dates("checkout");
if(p==="checkin"){if(m.type==="invalid"){m=k.search.dates("checkout",j(n,1))
}else{if(n>=m){m=k.search.dates("checkout",j(n,1))
}}}if(p==="checkout"){if(n.type!=="valid"){n=k.search.dates("checkin",j(k.search.dates("checkout"),-1))
}}f();
k.search.dates("mode",k.Search.DateModes.REGULAR);
if(booking.env.b_action=="hotel"||(booking.env.b_action=="searchresults"&&booking.track.getVariant("YcWVTbKCBPdGGWcOCKe"))||(booking.env.b_action=="index"&&booking.track.getVariant("YcWVSTbKCBPdGGWcOCKe"))||(booking.env.b_action.match(/district|city|airport|region|country/)&&booking.track.getVariant("YcWVJPEVdZAQfGOaYEO"))){return
}try{if(p==="checkin"&&n.type==="valid"){k[sNSStartup].calendar.syncDates(false,n.date,n.month+1,n.year,false)
}if(p==="checkout"&&m.type==="valid"){k[sNSStartup].calendar.syncDates(true,m.date,m.month+1,m.year,false)
}}catch(t){window.onerror("old_calendar_api_method_does_not_exist")
}}function f(){var o,n,m,l;
n=k.search.dates(),m=n&&n.checkin,l=n&&n.checkout;
if((l&&m)&&(l.valueOf()>m.valueOf())){o=l.valueOf()-m.valueOf();
g(".b-form-number-of-nights").html(k.jstmpl("searchbox_number_of_nights").render({b_interval:o,b_lang:k.env.b_lang})).removeClass("b-form-number-of-nights_hidden");
g(".b-form-flexible-dates").addClass("b-form-group_hidden")
}else{g(".b-form-number-of-nights").html("").addClass("b-form-number-of-nights_hidden");
g(".b-form-flexible-dates").removeClass("b-form-group_hidden")
}}function c(l){l.find(".b-date-selector").dateSelector();
k.eventEmitter.bind(k.Search.Events.DATE_CHANGED,e);
k.eventEmitter.bind(k.Search.Events.DATE_MONTH_CHANGED,e)
}function h(){if(k.env.b_is_villa_site){return
}var l=g(".b-form__dates");
c(l);
d(l);
if(booking.env.b_action=="company"&&l.find(".b-form-flexible-dates__toggler input:checked").length){booking.search.dates().setMode("no-dates")
}}return{init:h}
}(B,$));
B.Search.tracker={track:function(e,d,f){var c=["Searchbox",B.env.b_action,"["+e+"] "+d,f];
B.google.trackEvent.apply(B.google,c)
},trackError:function(c){},trackEvent:function(c){return this.track("interaction",c)
}};
B[sNSStartup]["sb_group_widget"]=(function(e,c){e.Search=e.Search||{};
e.Search.SPECIAL_DIGITS={"０":0,"１":1,"２":2,"３":3,"４":4,"５":5,"６":6,"７":7,"８":8,"９":9,"٠":0,"١":1,"٢":2,"٣":3,"٤":4,"٥":5,"٦":6,"٧":7,"٨":8,"٩":9,"۰":0,"۱":1,"۲":2,"۳":3,"۴":4,"۵":5,"۶":6,"۷":7,"۸":8,"۹":9};
e.Search.AbstractGroupConfigurationWidget=function(f,g){};
e.Search.AbstractGroupConfigurationWidget.prototype.initialize=function(f,g){this.$element=f;
this.setOptions(g)
};
e.Search.AbstractGroupConfigurationWidget.prototype.setOptions=function(f){if(!this.options){this.options={}
}this.options=c.extend(this.options,f)
};
e.Search.AbstractGroupConfigurationWidget.prototype.initEvents=function(){throw"Abstract intiEvents method should be implemented in widget instances"
};
e.Search.AbstractGroupConfigurationWidget.prototype.onExternalEventConfigChanged=function(){throw"Abstract onExternalEventConfigChanged method should be implemented in widget instances"
};
e.Search.AbstractGroupConfigurationWidget.prototype.showErrorMessages=function(j){this.$errorContainer=this.$errorContainer||this.$element.find(".b-form-group__error-messages");
var g=c("<ul></ul>",{"class":"b-form-group__error-messages_list"});
var f=c("<li></li>",{"class":"b-form-group__error-messages_list-item"});
for(var h=0;
h<j.length;
h++){g.append(f.clone().html(j[h]))
}this.$errorContainer.empty().append(g)
};
e.Search.AbstractGroupConfigurationWidget.prototype.hideErrorMessages=function(){this.$errorContainer=this.$errorContainer||this.$element.find(".b-form-group__error-messages");
this.$errorContainer.empty()
};
e.Search.AbstractGroupConfigurationWidget.prototype.getConfig=function(){throw"Abstract getConfig method should be implemented in widget instances";
return{}
};
e.Search.AbstractGroupConfigurationWidget.prototype.trigger=function(f,g){if(f==="groupChanged"&&typeof this.onExternalEventConfigChanged==="function"){this.onExternalEventConfigChanged.apply(this,[].slice.call(arguments,1))
}if(f==="groupModeChanged"&&typeof this.onExternalEventModeChanged==="function"){this.onExternalEventModeChanged.apply(this,[].slice.call(arguments,1))
}if(f==="groupInvalid"&&typeof this.onExternalEventGroupInvalid==="function"){this.onExternalEventGroupInvalid.apply(this,[].slice.call(arguments,1))
}if(f==="groupValid"&&typeof this.onExternalEventGroupValid==="function"){this.onExternalEventGroupValid.apply(this,[].slice.call(arguments,1))
}};
e.Search.AbstractGroupConfigurationWidget.prototype.onInit=function(){var f=this;
if(typeof this.options.onInit==="function"){window.setTimeout(function(){f.options.onInit.call(f,f.getConfig())
},10)
}};
e.Search.AbstractGroupConfigurationWidget.prototype.onChange=function(){if(typeof this.options.onChange==="function"){this.options.onChange.call(this,this.getConfig())
}};
e.Search.AbstractGroupConfigurationWidget.prototype.DISABLED_CLASS="disabled";
e.Search.AbstractGroupConfigurationWidget.prototype.hide=function(){this.$element.toggleClass(this.DISABLED_CLASS,true)
};
e.Search.AbstractGroupConfigurationWidget.prototype.show=function(){this.$element.toggleClass(this.DISABLED_CLASS,false)
};
e.Search.PredefinedGroupSelector=function(f,g){this.initialize.apply(this,[].slice.call(arguments,0));
this.initEvents();
this.onInit()
};
e.Search.PredefinedGroupSelector.prototype=new e.Search.AbstractGroupConfigurationWidget();
e.Search.PredefinedGroupSelector.prototype.initialize=function(g,h){var j={},f,k;
this.$element=g;
this.$selector=g.find("select");
this.setOptions(h);
this.$selector.find("option").each(function(l,m){var o=c(m),n=e.Search.createGroup(o.data());
j[n]=m;
if(n.type==="more_options"){f=m
}if(o.is(":selected")){k=n
}});
this.defaultConfigurationOption=f;
this.groupConfigurationOptions=j;
this.selectedConfiguration=k
};
e.Search.PredefinedGroupSelector.prototype.initEvents=function(){this.$selector.bind("change",c.proxy(this.onChange,this))
};
e.Search.PredefinedGroupSelector.prototype.onChange=function(g){var f=this.getConfig();
if(this.selectedConfiguration.valueOf()!==f.valueOf()){this.selectConfiguration(f);
if(typeof this.options.onChange==="function"){this.options.onChange.call(this,f)
}}};
e.Search.PredefinedGroupSelector.prototype.selectConfiguration=function(f){if(this.groupConfigurationOptions[f]){this.groupConfigurationOptions[f].setAttribute("selected","selected");
this.selectedConfiguration=f
}else{this.selectedConfiguration=false;
this.defaultConfigurationOption.setAttribute("selected","selected")
}};
e.Search.PredefinedGroupSelector.prototype.onExternalEventConfigChanged=function(f){if(this.selectedConfiguration.valueOf()===f.valueOf()){return
}this.selectConfiguration(f)
};
e.Search.PredefinedGroupSelector.prototype.getConfig=function(){var g=this.$selector.get(0),h=c(g.options[g.selectedIndex]),f=this.parseOption(h);
return f
};
e.Search.PredefinedGroupSelector.prototype.parseOption=function(h){var g=h.data(),f=e.Search.createGroup(g);
return f
};
e.Search.CustomGroupSelector=function(f,g){this.$element=f;
this.setOptions(g);
this.$adultsSelector=f.find("select[name=group_adults]");
this.$roomsSelector=f.find("select[name=no_rooms]");
this.$childrenSelector=f.find("select[name=group_children]");
this.$element.delegate("select[name=group_adults],select[name=no_rooms],select[name=group_children]","change",c.proxy(this.onChange,this));
this.onInit()
};
e.Search.CustomGroupSelector.prototype=new e.Search.AbstractGroupConfigurationWidget();
e.Search.CustomGroupSelector.prototype.DISABLED_CLASS="b-form-custom-group_disabled";
e.Search.CustomGroupSelector.prototype.getConfig=function(){var g=this.$adultsSelector.val(),j=this.$roomsSelector.val(),h=this.$childrenSelector.val(),f={};
if(g&&!isNaN(parseInt(g,10))){f.adults=parseInt(g,10)
}if(j&&!isNaN(parseInt(j,10))){f.rooms=parseInt(j,10)
}if(h&&!isNaN(parseInt(h,10))){f.children=parseInt(h,10)
}return f
};
e.Search.CustomGroupSelector.prototype.onChange=function(g){var f=this.getConfig();
if(typeof this.options.onChange==="function"){this.options.onChange.call(this,f)
}};
e.Search.CustomGroupSelector.prototype.onExternalEventModeChanged=function(f){if(f.mode==="basic"){this.hide()
}else{this.show()
}};
e.Search.CustomGroupSelector.prototype.onExternalEventConfigChanged=function(g){var f;
if(g.adults!==f){this.$adultsSelector.val(g.adults)
}if(g.rooms!==f){this.$roomsSelector.val(g.rooms)
}if(g.children!==f){this.$childrenSelector.val(g.children)
}if(g.type==="basic"){this.hide()
}else{this.show()
}};
e.Search.ChildrenAgesSelector=function(f,g){this.initialize.apply(this,[].slice.call(arguments,0));
this.initEvents();
this.onInit()
};
e.Search.ChildrenAgesSelector.prototype=new e.Search.AbstractGroupConfigurationWidget();
e.Search.ChildrenAgesSelector.prototype.show=function(){e.Search.AbstractGroupConfigurationWidget.prototype.show.apply(this)
};
e.Search.ChildrenAgesSelector.prototype.initialize=function(f,g){this.$element=f;
this.$inputsContainer=this.$element.find(".b-custom-element__container");
this.ages=this.getAges();
this.setOptions(g)
};
e.Search.ChildrenAgesSelector.prototype.initEvents=function(){this.$element.delegate("select[name=age]","change",c.proxy(this.onChange,this));
this.$inputsContainer.find(".b-custom-element__label").bind("click",c.proxy(this.onLabelClick,this))
};
e.Search.ChildrenAgesSelector.prototype.sanitizeInput=function(){this.getInputs().each(function(f,g){var h=g.value;
h=h.replace(/\D/g,function(j){return e.Search.SPECIAL_DIGITS.hasOwnProperty(j)?e.Search.SPECIAL_DIGITS[j]:j
});
g.value=h
})
};
e.Search.ChildrenAgesSelector.prototype.onChange=function(){this.sanitizeInput();
var f=this.getConfig();
if(typeof this.options.onChange==="function"){this.options.onChange.call(this,f)
}};
e.Search.ChildrenAgesSelector.prototype.onLabelClick=function(h){h.preventDefault();
var f=this.getInputs(),g=f.filter(function(){return this.value==""
}).first();
if(g.length){g.focus()
}else{f.first().focus()
}};
e.Search.ChildrenAgesSelector.prototype.DISABLED_CLASS="b-form-children-ages_disabled";
e.Search.ChildrenAgesSelector.prototype.onExternalEventGroupInvalid=function(f){this.showErrorMessages(f.messages);
this.$element.addClass("b-form-group_error")
};
e.Search.ChildrenAgesSelector.prototype.onExternalEventGroupValid=function(f){this.$element.removeClass("b-form-group_error");
this.hideErrorMessages(f.messages)
};
e.Search.ChildrenAgesSelector.prototype.onExternalEventConfigChanged=function(h){var j=this.getAges(),k=h.childrenAges,g;
for(var f=0;
f<k.length;
f++){if(k[f]===g){if(e.track.getVariant("bLYSRbNJdQJJHMVGRCfDaWe")){k[f]=j[f]
}else{k[f]=j[f]||0
}}}if(k.length===0){this.hide()
}else{if(k.length!==j.length||k.join(",")!==this.serialize()){this.render(k)
}this.show()
}};
e.Search.ChildrenAgesSelector.prototype.getInputs=function(){return this.$inputsContainer.find(".b-children-ages-configurator__element")
};
e.Search.ChildrenAgesSelector.prototype.getConfig=function(){return{childrenAges:this.getAges()}
};
e.Search.ChildrenAgesSelector.prototype.getAges=function(){var f=this.getInputs(),g=[];
f.each(function(j,h){if(e.track.getVariant("bLYSRbNJdQJJHMVGRCfDaWe")&&c(h).find(":selected").hasClass("sb_child_ages_empty_zero")){g.push(undefined)
}else{g.push(h.value)
}});
this.ages=g;
return g
};
e.Search.ChildrenAgesSelector.prototype.serialize=function(){return this.ages.join(",")
};
e.Search.ChildrenAgesSelector.prototype.render=function(m){var h,l=m.length,f,k="";
var j=this.$element.find(".b-custom-element__label");
this.$inputsContainer.find(".b-children-ages-configurator__element").remove();
if(l>1){j.text(e.jstmpl.translations("loc_sbox_children_age_plural"))
}else{j.text(e.jstmpl.translations("loc_sbox_children_age_singular"))
}for(var g=0;
g<l;
g++){f=(m[g]>=0)?m[g]:"";
k+=this.renderSelector(f)
}this.$inputsContainer.append(k)
};
e.Search.ChildrenAgesSelector.prototype.renderSelector=function(f){var j='<select name="age" class="b-children-ages-configurator__element b-children-ages-configurator__element_selector">';
e.track.stage("bLYSRbNJdQJJHMVGRCfDaWe",1);
if(e.track.getVariant("bLYSRbNJdQJJHMVGRCfDaWe")){if(!f){j+='<option class="sb_child_ages_empty_zero" value="0 " selected="selected"></option>'
}else{var f=parseInt(f,10)||0
}}else{var f=parseInt(f,10)||0
}if(e.env.b_is_villa_site&&e.track.getVariant("TNVIdEbTLLFKWILXcEcOHT")){j+='<option  value="2" '+(f>=0&&f<=2?"selected":"")+">0 &ndash; 2</option>";
j+='<option  value="6" '+(f>=3&&f<=6?"selected":"")+">3 &ndash; 6</option>";
j+='<option  value="12" '+(f>=7&&f<=12?"selected":"")+">7 &ndash; 12</option>";
j+='<option  value="16" '+(f>=13&&f<=16?"selected":"")+">13 &ndash; 16</option>";
j+='<option  value="17" '+(f===17?"selected":"")+">17</option>"
}else{for(var h=0;
h<=17;
h++){var g=h;
if(e.track.getVariant("bLYSRfLdLUNbCcGZfKe")&&h===0){g="<1"
}j+="<option "+(h===0?'class="sb_child_ages_not_empty_zero"':"")+' value="'+h+'" '+(h===f?"selected":"")+">"+g+"</option>"
}}j+="</select>";
return j
};
e.Search.createWidgetPlugin("predefinedGroupSelector",e.Search.PredefinedGroupSelector);
e.Search.createWidgetPlugin("customGroupSelector",e.Search.CustomGroupSelector);
e.Search.createWidgetPlugin("childrenAgesSelector",e.Search.ChildrenAgesSelector);
function d(){c(".b-form-predefined-group").predefinedGroupSelector({onChange:function(f){if(f.type==="basic"){e.search.group().mode("basic")
}else{e.search.group().mode("custom")
}if(f.type!=="more_options"){e.search.group(f)
}if(f.type==="more_options"){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_ADVANCED_MODE_SELECTED)
}else{if(f.type==="basic"&&f.adults===2&&f.rooms===1&&f.children===0){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_BASIC_MODE_SELECTED)
}else{if(f.type==="basic"){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_PREDEFINED_OPTION_SELECTED)
}}}},onInit:function(f){if(f.type==="basic"){e.search.group().mode("basic")
}else{e.search.group().mode("custom")
}}});
c(".b-form-custom-group").customGroupSelector({onChange:function(g){var f=e.search.group().value;
if(f.adults!==g.adults){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_ADULTS_NUMBER_CHANGED)
}if(f.rooms!==g.rooms){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_ROOMS_NUMBER_CHANGED)
}if(f.children!==g.children){e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_CHILDREN_NUMBER_CHANGED)
}e.search.group(g)
},onInit:function(f){if(e.search.group().mode()!=="basic"){this.show()
}}});
c(".b-form-children-ages").childrenAgesSelector({onChange:function(f){e.search.group("childrenAges",f.childrenAges);
e.Search.tracker.trackEvent(e.Search.TrackingEvents.GROUP_CHILDREN_AGE_CHANGED)
},onInit:function(f){if(f.childrenAges.length>0){this.show()
}else{this.hide()
}}});
e.eventEmitter.bind(e.Search.Events.GROUP_MODE_CHANGED,function(g,f){c.fn.predefinedGroupSelector("notify","groupModeChanged",f);
c.fn.customGroupSelector("notify","groupModeChanged",f);
c.fn.childrenAgesSelector("notify","groupModeChanged",f);
e.search.group().validate("reset")
});
e.eventEmitter.bind(e.Search.Events.GROUP_CHANGED,function(g,f){c.fn.predefinedGroupSelector("notify","groupChanged",f);
c.fn.customGroupSelector("notify","groupChanged",f);
c.fn.childrenAgesSelector("notify","groupChanged",f)
});
e.eventEmitter.bind(e.Search.Events.GROUP_INVALID,function(k,g){var f=g.validators;
var l=[],j=[];
for(var h=0;
h<f.length;
h++){if(f[h].validationParameters.invalidAges){l.push(f[h].validationParameters.invalidAges)
}if(f[h].message){j.push(f[h].message)
}}c.fn.childrenAgesSelector("notify","groupInvalid",{messages:j,agesStatus:l})
});
e.eventEmitter.bind(e.Search.Events.GROUP_VALID,function(g,f){c.fn.childrenAgesSelector("notify","groupValid",{message:"message",agesStatus:[]})
});
c("#frm").bind("submit",function(f){return e.search.group().validate()
})
}return{init:d}
}(B,$));
if($(".city_reviews-wrp").length>0){booking[sNSExperiments]["IZVEdLTLXaWMUXe"]={init:function(){$(".city_reviews-wrp").delegate(".city_reviews-content","mouseenter",function(){var c=$(this);
c.removeClass("hei-60 col-grey73").addClass("baccol-grey32a08 col-white pad-15")
});
$(".city_reviews-wrp").delegate(".city_reviews-content","mouseleave",function(){var c=$(this);
c.removeClass("baccol-grey32a08 col-white pad-15").addClass("hei-60 col-grey73")
})
}}
}booking.ensureNamespaceExists(sNSExperiments);
booking[sNSStartup].b_site_experiment_expand_signup={priority:9,init:function(){var d=$("#newsletter_to",".footerForm"),c=d.attr("value");
d.click(function(){var e=$(this);
$("dl #newsletter_to").removeClass("error");
if(e.val()===c){e.val("")
}else{e.select()
}});
d.blur(function(){var e=$(this);
if(e.val()===""){e.val(c)
}});
$("#newsletter_button_footer").click(function(){$(this).parents("form:first").submit()
});
$(".signupForm").submit(function(f){f.preventDefault();
$(".newsletter_ajax_error").hide();
var o=booking.env,l=$(this),r=/^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/,g=$("input[name=url]",l).val(),t=$("input[name=hostname]",l).val(),j=$("input[name=aid]",l).val(),p=$("input[name=companyname]",l).val(),e=$("input[name=subscribe_source]",l).val(),m=$("input[name=subscribe_notification]",l).val(),q=$("input[name=dest_id]",l).val(),k=$("input[name=dest_type]",l).val(),u=$("input[name=to]",l).val(),h=$("input[name=get_the_app]",l).is(":checked"),n;
if(u===""||!(r.test(u))){$(this).find(".nl_inputfield_track").addClass("error");
$(".newsletter_subscribe_error_invalid",l).show();
return false
}u=encodeURIComponent(u);
n="to="+u+"&url="+g+"&hostname="+t+"&aid="+j+"&companyname="+p+"&subscribe_source="+e;
if(m!==""){n=n+"&subscribe_notification="+m
}if(q!=""){n=n+"&dest_id="+q
}if(k!=""){n=n+"&dest_type="+k
}if(h===true){n=n+"&get_the_app=1"
}$(".newsletter_sub_preloader",l).show();
$.ajax({type:"POST",url:"/newslettersubscribe.json",data:n,dataType:"json",success:function(x){$(".newsletter_sub_preloader",l).hide();
if(x.success===0){if(x.error==="denied"){if($("form").hasClass("unsubHero-action")){$("form.unsubHero-action").addClass("error");
$(".unsubHero-form .blurb .error").show()
}else{$(this).find(".nl_inputfield_track").addClass("error");
$(".newsletter_subscribe_error_denied",l).show();
$(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success",l).hide();
$(".userdataform").hide()
}}else{if(x.error==="bad_params"){if($("form").hasClass("unsubHero-action")){$("form.unsubHero-action").addClass("error");
$(".unsubHero-form .blurb .error").show()
}else{$(".nl_inputfield_track").addClass("error");
$(".newsletter_subscribe_error_bad_unknown",l).show();
$(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success",l).hide();
$(".userdataform").hide()
}}}return
}else{if(x.success===1){if($("div#flashdealsbg_wrapper").length){window.location.href=o.b_nonsecure_hostname_signup+o.b_fd_searchresults_url_signup
}else{if($("form").hasClass("unsubHero-action")){$("form.unsubHero-action, .unsubHero-form .blurb, .unsubHero-benefits, .unsubHero-tagline").hide();
$(".unsubHero-form .success-blurb, .b_unsubscribe_user .b_unsubscribe_user").show();
$(".unsubDesc strong").replaceWith("<strong>"+u+"</strong>");
$(".unsubHero-form").addClass("success");
if(!$("body").hasClass("unsub_hero_thanks")){$("html, body").animate({scrollTop:$(".unsubHero-form").offset().top},750)
}if(!$("body").hasClass("unsub_hero_thanks")){B.track.custom_goal("aDEDFcTNFYabEDXKe",3)
}$("input[value='subscribe_flash_deals'], input[value='subscribe_cityspecial']").attr("checked","checked");
$(".feedback.error",".unsub_messages").hide();
$("input[value='subscribe_genius'], input[value='subscribe_weekly'], input[value='subscribe_sunday_newsletter'], input[value='subscribe_popular']").removeAttr("checked")
}else{$(".newsletter_sub_info",l).hide();
$(".newsletter_sub_success",l).show();
$(".userdataform").show();
$("#add_location_to").val(u);
$(".newsletter_form_fields, .newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid",l).hide();
if(x.has_account){var w=$("#userdataform form").eq(0);
if(w){w.attr("action",w.attr("data-url-login"))
}}}}}}}})
});
if(B.env.b_action=="subscribe"){B.track.exp("aDEDFcTNFYabEDXKe");
if($("body").hasClass("unsub_hero_thanks")){$(document).ready(function(){$("#newsletter_button_footer").parents("form:first").submit();
B.track.custom_goal("aDEDFcTNFYabEDXKe",1)
})
}else{B.track.custom_goal("aDEDFcTNFYabEDXKe",2)
}}$(".signupWithnameForm").submit(function(e){e.preventDefault();
$(".feedback_msg").each(function(){$(this).hide()
});
var l=booking.env,h=$(this),o=/^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/,m=$("input[name=companyname]",h).val(),g=$("input[name=aid]",h).val(),f=$("input[name=subscribe_source]",h).val(),n=$("input[name=email]",h).val(),k=$("input[name=firstname]",h).val(),j;
if(n===""||!(o.test(n))){$(".newsletter_subscribe_error_invalid",h).show();
return false
}$('<div class="loader_placer"></div>').appendTo("#sfl_stepOne");
j="to="+n+"&email="+n+"&aid="+g+"&companyname="+m+"&subscribe_source="+f;
$.ajax({type:"POST",url:"/newslettersubscribe.json",data:j,dataType:"json",success:function(q){if(q.success==0){$(".loader_placer").hide();
if(q.error=="denied"){$(".newsletter_subscribe_error_denied",h).show();
$(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success",h).hide()
}else{if(q.error=="bad_params"||q.error=="unknown"){$(".newsletter_subscribe_error_bad_unknown",h).show();
$(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success",h).hide()
}}return
}else{if(q.success==1){$(".loader_placer").hide();
$(".uspfield").hide();
$("#sfl_stepOne").hide();
if(k==""||booking.env.b_exclude_lang_firstname){$("#sfl_stepThree").show();
$(".userWithoutFirstname").show()
}else{k=escape(k);
if(q.has_account==1){$(".firstnameplacer").html(k);
$("#sfl_stepThree").show();
$(".userWithAccount").show()
}else{var p=booking.env.b_signup_iframe_url+"&firstname="+k+"&email="+escape(n);
$('<iframe border="0" id="sfl_stepTwo" src="'+p+'" width="656" height="320" frameborder="no" scrolling="no"></iframe>').appendTo(".signupWithnameForm")
}}}}}})
});
$("#subscriber_account_active").submit(function(e){if($('input[name="mypassword"]').val().length<1){$(".newsletter_register_error_nopassword").show();
return false
}else{$('<input type="hidden" name="password" value="'+$('input[name="myssword"]').val()+'" />').appendTo("#subscriber_account_active")
}});
$(".modal-mask-closeBtn").click(function(){return false
});
$(".modal-mask").click(function(){return false
});
if(!$("#newsletter_form_footer_container").length){return false
}else{$(".nl_inputfield_track, .newsletter_button").click(function(){return false
})
}}};
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSStartup].simple_av_calendar=(function(){var l=false;
var j,e=new Date(),f=new Date(),c=false;
f.setMonth(f.getMonth()+9);
var h=function(u,p){var t=booking.env.simple_av_calendar_i18n;
if(!u||!u.length){if(p&&p!=""&&p!="#"){j.append('<span class="simple_av_calendar_no_av">'+t.msg_no_availability+"</span>").show()
}return
}var o,m=u.length,q;
var r="";
if(p&&p!=""&&p!="#"){var n=p+";"
}else{var n=booking.env.simple_av_calendar_url+";"
}n=n.replace(/;+/g,";");
if(l){r+='<h4 class="simple_av_calendar_title">'+t.title_no_dates+"</h4>";
l=false
}else{r+='<h4 class="simple_av_calendar_title">'+t.title_many+"</h4>"
}for(o=0;
o<m;
o++){q=u[o];
if(parseInt(q.b_stay_price_numeric,10)>0){r+='<a class="simple_av_calendar_item" href="'+n+q.b_date_params+'"';
if(B.env.b_action==="searchresults"&&B.et.track("OQSGWSGNfDfVIGWcOCfFeLDDDSGaT")){r+=' target="_blank"'
}r+=">";
r+='<span class="simple_av_calendar_dates" style="border-bottom: 1px solid #e2e8ed;">'+q.b_checkin+" &ndash; "+q.b_checkout+"</span>";
r+='<span class="simple_av_calendar_los">'+q.b_num_nights_text+", "+q.b_checkin_weekday+"&ndash;"+q.b_checkout_weekday+"</span>";
r+='<span class="simple_av_calendar_price">'+q.b_from_price_text+"</span>";
r+="</a> "
}}j.append(r).show()
};
var d=function(I){if(!I||!I.length){if(c){booking.env.simple_av_calendar_data.checkin="";
g()
}return
}var m=function(L){var K=((L.getDate()).toString().length==1)?"0"+(L.getDate()):L.getDate();
var N=((L.getMonth()+1).toString().length==1)?"0"+(L.getMonth()+1):L.getMonth()+1;
var M=L.getFullYear();
var J=M+"-"+N+"-"+K;
return J
};
var p=function(M){var K=M.b_date_params;
var J=K.split("=")[1].split(";")[0];
var N=J.replace(/([0-9]+)-([0-9]+)-([0-9]+)/,"$2/$3/$1");
var L=new Date(N);
return L
};
var o=function(M,J){var L=p(M[0]);
if(J=="next"){L.setMonth(L.getMonth()+1)
}else{L.setMonth(L.getMonth()-1)
}var K=m(L);
if(L<e){booking.env.simple_av_calendar_data.checkin=""
}else{booking.env.simple_av_calendar_data.checkin=K
}};
var x=function(K){var J=p(K[0]);
if(J<e){$("#prev_7_day").hide()
}else{if(J>f){$("#next_7_day").hide()
}else{$("#prev_7_day").show();
$("#next_7_day").show()
}}};
var t=booking.env.simple_av_calendar_url+";";
t=t.replace(/;+/g,";");
var y=booking.env.simple_av_calendar_i18n;
var u=$('<div class="seven_night_av_cal_wrap clearfix"></div>'),A="",z="",H="",C="",q,G,D,E,F,r=[];
var w=function(J){E=J.length;
z+='<table class="seven_night_av_cal'+H+'"><tr><th colspan="3"><h4>'+J[0].b_month_year+"</h4></th></tr>";
for(D=0;
D<E;
D++){G=J[D];
F=false;
C="";
if(G.b_stay_price_numeric==-1){q='<span class="seven_cal_sold_out">'+y.soldout_text+"</span>";
F=true
}else{if(G.b_stay_price_numeric==-2){q='<span class="seven_cal_unavailable"></span>';
C=' class="seven_cal_unavail_tr"';
F=true
}else{q='<a class="price" href="'+t+G.b_date_params+'">'+G.b_stay_price+"</a>"
}}if(F){z+="<tr"+C+"><td>"+G.b_checkin+" - "+G.b_checkout+" ("+G.b_checkin_weekday+"-"+G.b_checkout_weekday+')</td><td class="stay_length">'+G.b_num_nights_text+'</td><td class="seven_cal_cell_fill">'+q+"</td></tr>"
}else{z+="<tr"+C+'><td><a class="date_range" href="'+t+G.b_date_params+'">'+G.b_checkin+" - "+G.b_checkout+" ("+G.b_checkin_weekday+"-"+G.b_checkout_weekday+')</a></td><td class="stay_length"><a href="'+t+G.b_date_params+'">'+G.b_num_nights_text+'</a></td><td class="seven_cal_cell_fill">'+q+"</td></tr>"
}}z+="</table>";
u.html(z)
};
$(I).each(function(J){if(J!==0&&(A!=I[J].b_month_year.split(" ")[0])){w(r);
r=[];
H=" not_first_av_table"
}r.push(I[J]);
A=I[J].b_month_year.split(" ")[0]||"";
if(J==(I.length-1)){w(r)
}});
var n=$('<a href="#" class="prev" id="prev_7_day">&larr; '+booking.env.simple_av_calendar_i18n.previous_month+'</a><a href="#" class="next" id="next_7_day">'+booking.env.simple_av_calendar_i18n.next_month+" &rarr;</a>");
n.bind("click",function(K){K.preventDefault();
booking.env.simple_av_calendar_data.force_month=1;
u.addClass("calendar_overlay");
var J=$(this).attr("class");
o(I,J);
g()
});
u.append(n);
j.find(".seven_night_av_cal_wrap").remove();
j.append(u).show();
j.find(".hp_av_cal_description").show();
x(I);
c=true
};
var g=function(n,m){l=(m)?m:false;
if(n&&typeof n.id!=="undefined"){booking.env.simple_av_calendar_data=n
}if(!booking.env.simple_av_calendar_data){return
}booking.env.simple_av_calendar_data.stype=booking.env.b_site_type_id;
var o=$("#hp_av_calendar").length>0;
if(o){booking.env.simple_av_calendar_data.force_7_nights=1;
j=$("#hp_av_calendar")
}else{j=$(".simple_av_calendar")
}$.ajax({timeout:10000,dataType:"json",data:booking.env.simple_av_calendar_data,url:"/alt_avail",success:function(q){$(".simple_av_calendar_loader").hide();
if(o){d(q)
}else{if(n){var p=$('.sr_item[data-hotelid="'+n.id+'"]').get(0);
j=$(".simple_av_calendar",p);
h(q,$($("a",p).get(0)).attr("href"))
}else{h(q)
}}},error:function(){$(".simple_av_calendar_loader").hide();
if(o){booking.env.simple_av_calendar_data.checkin="";
$(".seven_night_av_cal_wrap").removeClass("calendar_overlay")
}}})
};
var k=function(){if(B.env.b_run_sr_ajax&&B.env.b_action==="searchresults"){var m=B.require("searchresults/events");
m.on(m.UI_RESULTS_UPDATED,function(){j=$(".simple_av_calendar");
g()
})
}g()
};
return{init:k}
}());
booking.social_plugins_footer=(function(){var c=function(){var f=$("#footer_weibo"),e=$("#footer_wechat"),d=$("#footer_naver");
d.hover(function(){d.find(".footer_tooltip").stop(true,true).fadeIn()
},function(){d.find(".footer_tooltip").stop(true,true).fadeOut()
});
f.hover(function(){f.find(".footer_tooltip").stop(true,true).fadeIn()
},function(){f.find(".footer_tooltip").stop(true,true).fadeOut()
});
e.hover(function(){e.find(".footer_tooltip").stop(true,true).fadeIn()
},function(){e.find(".footer_tooltip").stop(true,true).fadeOut()
})
};
return{init:c}
}());
booking[sNSStartup].social_plugins_footer={priority:9,init:function(){if(booking.env.social_plugins_footer){booking.social_plugins_footer.init()
}}};
booking[sNSStartup].sr_comp_set_destinations={priority:9,init:function(){var c=this;
if(booking.env.b_sr_compset_url){c.loadCompset(booking.env.b_sr_compset_url)
}},loadCompset:function(c){$.ajax({type:"GET",url:c,contentType:"text/html; charset=utf-8",success:function(d){if(d.length){$("#x_sr_compset").html(d).show().css("visibility","visible")
}}})
}};
booking[sNSStartup].store_cc_details={priority:9,init:function(){if(B.env.b_action==="book"){return
}$("#saved_credit_cards .cc_save").attr("disabled","disabled");
$("#saved_credit_cards .cc_save").addClass("cc_save_disabled");
$("#saved_credit_cards select").change(function(){var c=$(this).closest("form");
$(this).css({"font-weight":"bold"});
$(".cc_save",c).removeAttr("disabled");
$(".cc_save",c).removeClass("cc_save_disabled")
});
if($("#card_status").length){setTimeout(function(){$("#card_status").hide("slow")
},5000)
}if(B.env.b_action==="login"){$(".cc_delete").mousedown(function(){var e=$(this).closest("tr").get(0);
var c=$(this).val()||$(this).attr("value");
var d="/delete_cc_card?cc_id="+c;
$.ajax({url:d,type:"POST",success:function(f){$(e).hide()
},error:function(f){return false
}});
return false
})
}}};
booking.env.Tabs=function(c){var d={baseEl:"#newsletter_deals_city",menuEl:".deals_menu",contentEl:".deals_wrapper",dealsEl:".deals",navEl:".nav_menu",defaultEl:1};
var c=$.extend(d,c);
$(c.menuEl+" li:nth-child("+c.defaultEl+")").addClass("active").show();
$(c.contentEl+" ul.deals:nth-child("+c.defaultEl+")").show();
$("li",c.menuEl).click(function(){$("li",c.menuEl).removeClass("active");
$(this).addClass("active");
$(c.dealsEl,c.contentEl).hide();
var e=$(this).find("a").attr("href");
$(e).show();
return false
});
$(c.contentEl,c.baseEl).show()
};
booking[sNSExperiments]["PYeUZFNZeFZIWcbIXXcffWe"]={priority:10,lw:null,flags_loaded:false,init:function(){var c=this;
c.lw=booking[sNSExperiments].ng_last_viewed||"";
c.$lang_button=$("#b_nav_language");
c.$curr_button=$("#b_nav_currency");
c.$lang=$("#top_language");
c.$curr=$("#top_currency");
c.addEvents()
},addEvents:function(){var c=this;
c.$lang_button.bind("click",function(){$.proxy(c.toggleMenu("lang"),c)
});
c.$curr_button.bind("click",function(){$.proxy(c.toggleMenu("curr"),c)
});
var d=function(){var e=$(this);
$li=e.parent();
if($li.hasClass("selected")){c.lw.distroyOverlay();
return false
}else{$li.parent().parent().find("li.selected").removeClass("selected");
$(".mm_loading").removeClass("mm_loading");
$li.addClass("mm_loading")
}};
c.$lang.delegate("li a","click",d);
c.$curr.delegate("li a","click",d)
},toggleMenu:function(f){var c=this,d=$("#top_language_prompt");
if(d.length){d.remove()
}if(c.lw.isVisibleOverlay()&&c.lw.click==f){c.lw.distroyOverlay()
}else{var e=c.$lang.data("spinner-loaded");
if(e==false){c.$lang.append('<div class="mm_loading mm_preload"><a href="#"></a></div>');
c.$curr.append('<div class="mm_loading mm_preload"><a href="#"></a></div>');
c.$lang.data("spinner-loaded",true)
}c.lw.createOverlay();
c.lw.click=f;
$(".milk_menu").hide();
$("#top_lw_wrapper").hide();
if(f=="lang"&&!c.flags_loaded){c.flags_loaded=true;
var g=c.$lang.clone();
g.find(".t_flag").each(function(){var j=$(this),k=j.data("img"),h=j.data("size");
img="";
img='<img src="'+k+'" width="'+h+'" height="'+h+'" />';
j.append(img)
});
c.$lang.html(g.html())
}c["$"+f].show()
}}};
booking[sNSStartup].track_fe_lang_change={init:function(){var c=booking.track.getVariant("PYeUZFNZeFZIWcbIXXcffWe");
if(c==false){return
}var d="Changed language or currency";
if(booking.env.b_track_fe_language_change){booking.google.trackEvent(d,"Changed language","Variant "+c)
}if(booking.env.b_track_fe_currency_change){booking.google.trackEvent(d,"Changed currency","Variant "+c)
}}};
booking[sNSExperiments]["PNFVRZaZEXSIO"]={priority:8,cache:function(){var c=this;
c.$prompt=$("#top_language_prompt")
},init:function(){var c=this;
c.cache();
$(window).load(function(){var d=setTimeout($.proxy(c.bindCloseEvt,c),4000)
});
$(".t_prompt_link.first").bind("click",function(){c.distroy();
return false
});
c.$prompt.animate({opacity:1},1000);
booking.google.trackEvent(booking.google.clickTracker,"New Language Prompt","show")
},bindCloseEvt:function(){var c=this;
$(document.body).one("touchstart",function(){c.distroy()
});
c.$prompt.bind("touchstart",function(d){d.stopPropagation()
})
},distroy:function(){var c=this;
c.$prompt.remove()
}};
booking[sNSStartup].rewrite_tt={priority:7,version:"1.2.5",tt:null,ttWinHeight:0,ttWinWidth:0,ttScrollTop:0,ttScrollLeft:0,ttShowLeft:false,ttShowTop:false,ttCounter:0,ttShow:null,ttContent:"",ttCurElem:null,ttCurText:"",ttTimedOut:null,ttTimeout:300,ttClass:"basic_tooltip_class",ttHidennodeAttr:"node_tt_id",ttNodes:[".jq_tooltip","*[data-title]",".policy_name_tt"],toolTips:{},preLoadedImages:{},init:function(){if(booking.env.b_is_tdot_traffic&&booking.env.b_action==="book"){return true
}var c=this;
if(booking.env.b_is_ie7){this.ttTimeout=0
}this.tt=document.getElementById("tooltip_wrap")||function(){var d=document.createElement("div");
d.id="tooltip_wrap";
var e='<div class="tt_shadow"><div class="tt_content"></div></div>';
document.body.appendChild(d);
d.innerHTML=e;
return d
}();
window.onresize=function(){c.setWindowSize()
};
window.onscroll=function(){c.setScrollPosition()
};
setTimeout(function(){var d=c.ttNodes.join(", ");
c.ttContent=($(".tt_content",c.tt).length)?$(".tt_content",c.tt).get(0):c.tt;
c.setWindowSize();
c.setScrollPosition();
$("body").delegate(d,"mouseover mouseout mousemove",function(j){var h=j||window.event;
var g=h.pageX||(h.clientX+this.ttScrollLeft)||0;
var f=h.pageY||(h.clientY+this.ttScrollTop)||0;
if(h.type==="mouseout"){c.showHideTooltip(null,g,f)
}else{c.showHideTooltip(this,g,f)
}});
if(booking.env.b_is_ie8||booking.env.b_is_ie9){var e=c.ttNodes.join("[title], ");
$(e).each(function(){var f=this.getAttribute("title");
this.setAttribute("data-title",f);
this.removeAttribute("title")
})
}},500)
},showHideTooltip:function(f,e,d){if(this.ttShow!=null||f==null){if(f!=this.ttCurElem&&this.ttCurElem!=null){this.ttShow=null;
this.tt.style.display="none";
this.ttContent.innerHTML="";
this.tt.className="";
this.tt.style.width="auto";
this.ttCurText="";
this.ttCurElem=null;
this.ttShowLeft=false;
this.ttShowTop=false
}else{var c=this.getPosition(e,d,this.tt);
if(c&&c.length>1){this.tt.style.left=c[0]+"px";
this.tt.style.top=c[1]+"px"
}}}else{var j=this.getTTNode(f);
if(j!=null){this.ttShow=f.id;
var h=j;
this.ttCurElem=f;
this.ttCurText=h[0];
var g=(h[1]!="")?h[1]:this.ttClass;
if(h[2]){this.ttShowLeft=true
}if(h[5]){this.ttShowTop=h[5]==="flexible"?"flexible":!!h[5]
}if(h[4]){g+=" tt_loading";
this.preloadImg(f.id)
}this.ttContent.innerHTML=this.ttCurText;
this.tt.className=g;
if(h[3]!=null){this.tt.style.width=(typeof h[3]==="function"?h[3].call(this.tt):h[3])+"px"
}else{this.tt.style.width="auto"
}if(!h[4]){this.showToolTip(0)
}var c=this.getPosition(e,d,this.tt);
this.tt.style.left=c[0]+"px";
this.tt.style.top=c[1]+"px"
}}},showToolTip:function(e){var d=this;
if(this.ttTimeout!=0){var c=(e<this.ttTimeout)?this.ttTimeout-e:10;
if(d.showingTooltip){clearTimeout(d.showingTooltip)
}d.showingTooltip=setTimeout(function(){if(d.ttCurText!=""){booking.eventEmitter.trigger("tooltip.show",[d.ttCurElem,d]);
d.tt.style.display="block"
}else{d.showHideTooltip(null,0,0)
}},c)
}else{this.tt.style.display="block"
}},setScrollPosition:function(){if(typeof window.pageYOffset=="number"){this.ttScrollLeft=window.pageXOffset;
this.ttScrollTop=window.pageYOffset
}else{if(document.documentElement&&document.documentElement.scrollTop){this.ttScrollLeft=document.documentElement.scrollLeft;
this.ttScrollTop=document.documentElement.scrollTop
}else{this.ttScrollLeft=document.body.scrollLeft;
this.ttScrollTop=document.body.scrollTop
}}},setWindowSize:function(){if(!window.innerWidth){if(!(document.documentElement.clientWidth==0)){this.ttWinWidth=document.documentElement.clientWidth;
this.ttWinHeight=document.documentElement.clientHeight
}else{this.ttWinWidth=document.body.clientWidth;
this.ttWinHeight=document.body.clientHeight
}}else{this.ttWinWidth=window.innerWidth;
this.ttWinHeight=window.innerHeight
}},getTTNode:function(g){if(!$(g).attr("data-resized")){if(g.id){var h=g.id
}else{this.ttCounter++;
var h="b_tt_holder_"+this.ttCounter;
g.id=h
}if(this.toolTips[h]){return this.toolTips[h]
}else{if($(g).attr("data-"+this.ttHidennodeAttr)&&$("#"+$(g).attr("data-"+this.ttHidennodeAttr)).length){var p=$("#"+$(g).attr("data-"+this.ttHidennodeAttr)).html()
}else{if($(g).hasClass("policy_name_tt")){var p=$(g).siblings(".differing_policies").html()
}else{if($(g).hasClass("non-refundable-savings")){var p=$(g).siblings(".differing_policies").html()
}else{var p=g.getAttribute("data-title")||g.getAttribute("title");
if(g.getAttribute("title")&&!g.getAttribute("data-title")){g.setAttribute("data-title",g.getAttribute("title"));
g.removeAttribute("title")
}}}}var e=g.nodeName.toLowerCase();
if(e=="option"||e=="link"||e=="select"){p=""
}if(p&&p!=""){var l=this.ttClass;
var f=$(g).hasClass("left_tt");
var n=false;
if(B.track.getVariant("HSCQQOcZQcCcdNBBTcO")){var c=new RegExp('(<script type="tracking" data-id="(\\w+)"><\/script>)'),k=c.exec(p),m=k&&k[2];
if(m){p=p.replace(c,"");
B.track.exp(m)
}}if(!n){var q=null;
var r=g.getAttribute("data-width");
if(r&&!isNaN(r)&&r>150&&r<1001){q=r
}else{var t=g.getAttribute("rel");
if(t&&!isNaN(t)&&t>150&&t<1001){q=t
}}var j=(p.indexOf("<img")>-1&&q==null)?true:false;
if(g.className.indexOf("large_tooltip")>-1){l+=" tt_large"
}if(j){l+=" blackBorderTooltip"
}if($(g).attr("data-tooltip-class")){l+=" "+$(g).attr("data-tooltip-class")
}var d=$(g).attr("data-toponly");
var o=d==="flexible"?"flexible":!!d;
this.toolTips[h]=[p,l,f,q,j,o];
if(g.getAttribute("title")!=null){if(g.getAttribute("data-title")==null){g.setAttribute("data-title",g.title)
}g.title="";
g.removeAttribute("title")
}if(booking.env.b_is_ie){g.removeAttribute("alt")
}return this.toolTips[h]
}else{return null
}}else{return null
}}}},getPosition:function(j,g,f){var k=j+15;
var h=g+10;
var c=$(f).width();
var d=$(f).height();
var e=20;
if((j+c+this.ttScrollLeft>this.ttWinWidth-e)||(this.ttShowLeft&&j>c+e)){k=j-c-e
}if((this.ttShowTop&&B.et.track("NHSaTfQLcAbZcO"))||this.ttShowTop==="flexible"){if(g-d-10>this.ttScrollTop){h=g-d-10
}}else{if(this.ttShowTop||g+d-this.ttScrollTop>this.ttWinHeight-e){h=g-d-10
}}return[k,h]
},preloadImg:function(d){var g=this;
var e=new Date();
var c=this.toolTips[d][0].match(/src=['"]([^'"]+)['"]/);
if(!c[1]){this.toolTips[d][4]=false;
return
}if(this.preLoadedImages[c[1]]){return
}this.preLoadedImages[c[1]]={ttid:d,loaded:false};
var f=document.createElement("img");
f.onload=function(){g.preLoadedImages[this.src].loaded=true;
var j=g.preLoadedImages[this.src].ttid;
var l=g.toolTips[j];
if(l[3]!=null){var m=this.width+20;
if(m>150){l[3]=m
}}l[4]=false;
if(g.ttShow!==j){return
}else{if(l[3]!=null){g.tt.style.width=l[3]+"px"
}var k=new Date();
var h=k.getTime()-e.getTime();
g.showToolTip(h)
}};
f.src=c[1]
},addTooltip:function(d,c,g,e,f,h){if(typeof c==="function"){c=c()
}var j=this;
if(typeof d==="string"&&$("#"+d).length){$("#"+d).addClass("jq_tooltip");
this.toolTips[d]=[c,g,e,f,h]
}else{if(typeof d==="object"){$(d).each(function(){$(this).addClass("jq_tooltip");
if(this.id){var k=this.id
}else{j.ttCounter++;
var k="b_tt_holder_"+j.ttCounter;
this.id=k
}j.toolTips[k]=[c,g,e,f,h]
})
}}},updateTooltip:function(d,c){if($(d).attr("id")){var e=$(d).attr("id")
}else{this.ttCounter++;
var e="b_tt_holder_"+this.ttCounter;
$(d).attr("id",e)
}if(this.toolTips[e]){this.toolTips[e][0]=c
}else{this.addTooltip(e,c,"",false,null,false)
}}};
booking.ensureNamespaceExists(sNSStartup);
booking[sNSStartup].touch_device_check={priority:5,init:function(){booking.env.touch_os=("ontouchstart" in document.documentElement)?true:false;
if(/(chrome)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase())){booking.env.touch_os=false
}return true
}};
booking[sNSStartup].userAccessFormValidation={init:function(){booking.userAccessFormHandler.init()
}};
booking.userAccessFormHandler=(function(d){var c={$userAccessMenu:{},$parentForm:{},$parentFormWrapper:{},submitHooks:{},globalSubmitHooks:{},_init:function(e){var f=this;
this.$userAccessMenu=$(".user_access_menu");
if(e){this.$userAccessMenu=$(targetForm)
}this.$userAccessMenu.delegate(".user_access_section_trigger","click",function(){var j=$(this),h=j.parents(".user_access_menu"),g=this.getAttribute("data-target");
$(".form-section",h).addClass("form-hidden-section").removeClass("form-shown-section");
f.$parentForm=$("."+g,h);
f.$parentForm.removeClass("form-hidden-section").addClass("form-shown-section");
$(".form-tabs",h).removeClass("user_menu_active_tab");
$("."+g+"_tab",h).addClass("user_menu_active_tab");
if(booking.eventEmitter){if(j.data("target")=="user_access_signup_menu"){booking.eventEmitter.trigger("user_access_menu_register_tab")
}if(j.data("target")=="user_access_signin_menu"){booking.eventEmitter.trigger("user_access_menu_login_tab")
}}return false
});
$(".user_access_menu_auth_low_not_me").click(function(j){var k=$(j.target).attr("href"),h,g;
if(k){h='<form method="POST" action="'+k+'" ><input type="hidden" name="logout" value="1" /></form>';
g=$(h);
g.prepend('<input type="hidden" name="bhc_csrf_token" value="'+booking.env.b_csrf_token+'">');
j.preventDefault();
$("body").append(g);
g.submit()
}});
$("body").delegate(".user_access_form","submit",function(){f.$parentForm=$(this);
f.$parentFormWrapper=$(this).parents(".form-section");
if(f._validateForm()){$(".form-loading",f.$parentFormWrapper).show();
if(booking.track.getVariant("IZdPZPUTYBTVaDAae")){$(this).trigger("submit_pb_mybooking_cant_find")
}if($(this).hasClass("form-secondary-login")&&$.browser.msie&&parseInt($.browser.version)<9){var j="&"+$(this).serialize(),h=$(this).attr("action"),g=h+j;
location.href=g
}else{booking.eventEmitter.trigger("user-acess-menu:valid-submit-start",f)
}}else{return false
}});
$("#login_redesign").click(function(){$(".bs2_inline_signin_box").toggle();
B.eventEmitter.trigger("user-access-menu:toggle")
});
this._initPassStrength();
if(location.protocol=="https:"&&booking.env.b_is_app){$(".user_access_form").each(function(){var h=$(this),g=h.attr("action");
if(g.indexOf("protocol=http")!==-1&&g.indexOf("protocol=https")===-1){g=g.replace("protocol=http","protocol=https_www");
h.attr("action",g)
}else{if(g.indexOf("protocol=https")!==-1){g=g.replace("protocol=https","protocol=https_www");
h.attr("action",g)
}}})
}},_initPassStrength:function(g){var h,f=this,e;
if(!g){g=".password_strength"
}e=$($(g).attr("data-wrapper"));
e=(e.length?e:this.$userAccessMenu);
e.delegate(g,"keyup",function(){var j=$(this),k=j.val();
if(h){clearTimeout(h)
}h=setTimeout(function(){f._calculatePasswordStrength(j,k);
if(booking.eventEmitter){B.eventEmitter.trigger("passStrength")
}},400)
})
},_validateForm:function(){if(!this.$parentForm.length){return 1
}var f=true,e=d.error_sign_up_password_email_combo_01;
$("input",this.$parentForm).each(function(){var k=$(this),j=k.attr("data-validation"),p,m,n=k.val(),g,l;
if(j){j=j.split("|");
for(var h=0,o=j.length;
(h<o)&&f;
h++){p=j[h].split(/\{/);
m=p[0];
if(m==="required"&&!n){f=false
}else{if(m==="numeric_with_dots"||m==="numeric"){if(m==="numeric_with_dots"){n=n.replace(/\./g,"");
k.val(n)
}if(!/^\d+$/g.test(n)){f=false
}}else{if(/min_length\([0-9]+\)/.test(m)){g=(m.split("("))[1];
g=g.slice(0,-1);
if(n.length<g){f=false
}}else{if(/required_match\([a-zA-Z_]+\)/.test(m)){l=(m.split("("))[1];
l=l.slice(0,-1);
if($(this).val()!==$("#"+l).val()){f=false
}}}}}if(p[1]){e=(p[1]).slice(0,-1)
}}if(!f){return false
}}});
if(!f){$(".alert-error",this.$parentFormWrapper).html(e).show();
booking.eventEmitter.trigger("form-error",this.$parentFormWrapper);
return false
}else{return true
}},_calculatePasswordStrength:function(f,r){if(typeof(r)==="undefined"||typeof(r.length)==="undefined"){return
}var e=r.length,t=parseInt(e/2.5),g="!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_",w="ABCDEFGHIJKLMNOPQRSTUVWXYZ",m=0,p=false,o=0,n=0,l=(f.attr("data-wrapper")?f.parents(f.attr("data-wrapper")):f.parents(".user_access_form")),j=$(".user_access_password_strength",l).find(".pass_strength_step").width(),h,q,u=$(".user_access_password_strength",l).find(".pass_strength_progress");
for(var k=0;
k<e;
k++){if(!isNaN(r.charAt(k))){m+=1
}else{p=true
}if(g.indexOf(r.charAt(k))>-1){o+=2
}if(w.indexOf(r.charAt(k))>-1){n+=1
}}if(o>4){o=4
}if(m>2){m=2
}if(n>2){n=2
}if(p){t+=m
}t+=o;
t+=n;
if(t>10){t=10
}else{if(t===0){t=1
}}if(e<8){u.addClass("pass_strength_invalid");
if(t>3){t=3
}q=0
}else{u.removeClass("pass_strength_invalid");
q=parseInt(t/2)+1
}q=(q>5?5:q);
h=j*t;
u.animate({width:h+"px"});
$(".pass_strength_text",l).text(d.b_password_strength_msg[q])
},_displayErrorMsg:function(e){if(!e||!e.msg){return
}var f,g;
if(e.parent){g=$(e.parent)
}if(e.target){f=$(e.target,g)
}else{f=$(".alert-error",g)
}f.html(e.msg).addClass("alert-displayed");
$(".form-loading, #page_login_loading").hide();
if(booking.env.is_genius_onboarding){slidesHeight=$("#slide1").height();
$("#slides").animate({height:slidesHeight})
}},_addSubmitHook:function(f,g,h){var e=(h?this.globalSubmitHooks:this.submitHooks);
if(!g||!f){return
}e[f]=g
},_removeSubmitHook:function(f,g){var e=(g?this.globalSubmitHooks:this.submitHooks);
if(!c){return
}delete e[f]
}};
return{init:function(){c._init()
},initPassStrength:function(e){c._initPassStrength(e)
},displayErrorMsg:c._displayErrorMsg}
})(booking.env);
booking[sNSStartup].user_menu_dropdowns=(function(){var k=false;
var c=false;
var l=function(){var n=$("#current_language_foldout");
d(n);
$(".uc_currency a.popover_trigger").click(function(){m()
});
$(".zh .uc_language a.popover_trigger").click(function(){h()
});
$(".uc_language.flags-aunzca a.popover_trigger").click(function(){B.track.stage("YdVZHLbYFHQeFaMPLWEcIURe",1)
})
};
function j(n,q){var r=Math.ceil(n.length/q);
var o=[];
for(var p=0;
p<q;
p++){o.push(n.slice(r*p,r*(p+1)))
}return o
}var g=$("#current_language_foldout");
var m=function(){if(!k){var n=document.location.href;
$.get(booking.env.b_currency_url,function(o){$("#current_currency").html(o);
d($("#current_currency_foldout"));
e($("#current_currency a"));
k=true;
B.eventEmitter.trigger("b_currency_dropdown_ready")
})
}};
var h=function(){if(!c){var n=document.location.href;
$.get(booking.env.b_languages_url,function(o){if(g.size()){g.replaceWith(o)
}else{$("#current_language").html(o)
}d(g);
f($("#current_language li"));
c=true
})
}};
var f=function(n){B.track.stage("IZVXaRIYAJZZTdFVRZaPFeRe",1);
if(B.track.getVariant("IZVXaRIYAJZZTdFVRZaPFeRe")){$(n).each(function(){var p=$(this).attr("data-lang");
var o=booking.env.b_switch_language_url[p];
$(this).find("a").attr("href",o)
})
}else{$(n).each(function(){var q=booking.env.b_this_url_without_lang;
var p=$(this).attr("data-lang");
var o;
var r=q.indexOf(".html");
if(r<0){o=q;
if(o.indexOf("?")>-1){o+=";"
}else{o+="?"
}o+="lang="+p
}else{o=[q.slice(0,r),"."+p,q.slice(r)].join("")
}$(this).find("a").attr("href",o)
})
}};
var e=function(n){$(n).each(function(){var o=booking.env.b_this_url;
if(booking.env.b_action=="genius"||booking.env.b_action=="guest"){o=booking.env.b_this_url_without_lang
}var q=$(this).attr("data-currency");
var p=(o.indexOf("?")>-1)?";":"?";
q+=";changed_currency=1";
$(this).attr("href",o+p+"selected_currency="+q)
})
};
var d=function(o){var n="loading_option";
o.delegate("a","click",function(r){var q=$(this).parent();
if(q.hasClass("selected_language")||q.hasClass("selected_currency")){r.preventDefault();
return
}if(q.hasClass(n)){r.preventDefault()
}else{o.find("."+n).removeClass(n)
}q.addClass(n);
if(B.env.b_run_sr_ajax){var p=B.require("searchresults/events");
p.trigger(p.UI_NAVIGATE_TO,{url:$(this).attr("href"),fixUrl:true,reload:true});
r.preventDefault()
}})
};
return{init:l}
}());
booking.jstmpl("language_menu_item",(function(){var d=[' \u003cli class="lang_'," selected_country",'" data-lang="','"\u003e \u003ca href="','" class="no_target_blank"\u003e \u003cspan class="selsymbol"\u003e\u003cspan class="flag_16 sflag slang-','"\u003e \u003c/span\u003e\u003c/span\u003e \u003cspan class="seldescription"\u003e','\u003c/span\u003e \u003ci class="loading_indicator"\u003e\u003c/i\u003e \u003c/a\u003e \u003c/li\u003e '],c=["lang"],g,f,e;
return function(h){var j="",k=this.fn;
j+=[d[0],(k.MC(c[0])||{})["code"]].join("");
if(k.MJ(k.MG((k.MC(c[0])||{})["current"]))){j+=d[1]
}j+=[d[2],(k.MC(c[0])||{})["code"],d[3],(k.MC(c[0])||{})["url"],d[4],(k.MC(c[0])||{})["flag"],d[5],(k.MC(c[0])||{})["name"],d[6]].join("");
return j
}
})());
booking.jstmpl("language_menu_list",(function(){var d=['\n    \u003cdiv class="select_foldout_wrap"\u003e\n        \u003cp\u003e',"\u003c/p\u003e\n        ",'\n            \u003cul class="language_flags"\u003e\n                ',' \u003cli class="lang_'," selected_country",'" data-lang="','"\u003e \u003ca href="','" class="no_target_blank"\u003e \u003cspan class="selsymbol"\u003e\u003cspan class="flag_16 sflag slang-','"\u003e \u003c/span\u003e\u003c/span\u003e \u003cspan class="seldescription"\u003e','\u003c/span\u003e \u003ci class="loading_indicator"\u003e\u003c/i\u003e \u003c/a\u003e \u003c/li\u003e ',"\n            \u003c/ul\u003e\n        ","\n    \u003c/div\u003e\n"],c=["title","columns","lang"],g,f,e;
return function(o){var x="",h=this.fn;
function u(r){r+=[d[3],(h.MC(c[2])||{})["code"]].join("");
if(h.MJ(h.MG((h.MC(c[2])||{})["current"]))){r+=d[4]
}r+=[d[5],(h.MC(c[2])||{})["code"],d[6],(h.MC(c[2])||{})["url"],d[7],(h.MC(c[2])||{})["flag"],d[8],(h.MC(c[2])||{})["name"],d[9]].join("");
return r
}x+=[d[0],h.MB(c[0]),d[1]].join("");
var t=(h.MC(c[1])||[]);
o.unshift({column:null});
for(var p=1,k=t.length,l;
p<=k;
p++){o[0]["column"]=l=t[p-1];
x+=d[2];
var n=p;
var j=t;
var w=k;
var q=m;
var t=(l||[]);
o.unshift({lang:null});
for(var p=1,k=t.length,m;
p<=k;
p++){o[0]["lang"]=m=t[p-1];
o.unshift({lang:m});
x=u(x);
o.shift()
}o.shift();
p=n;
t=j;
k=w;
m=q;
x+=d[10]
}o.shift();
x+=d[11];
return x
}
})());
booking.jstmpl("language_menu",(function(){var d=["\n    ","\n        ",'\n    \u003cdiv class="select_foldout_wrap"\u003e\n        \u003cp\u003e',"\u003c/p\u003e\n        ",'\n            \u003cul class="language_flags"\u003e\n                ',' \u003cli class="lang_'," selected_country",'" data-lang="','"\u003e \u003ca href="','" class="no_target_blank"\u003e \u003cspan class="selsymbol"\u003e\u003cspan class="flag_16 sflag slang-','"\u003e \u003c/span\u003e\u003c/span\u003e \u003cspan class="seldescription"\u003e','\u003c/span\u003e \u003ci class="loading_indicator"\u003e\u003c/i\u003e \u003c/a\u003e \u003c/li\u003e ',"\n            \u003c/ul\u003e\n        ","\n    \u003c/div\u003e\n","\n"],c=["title","columns","lang","popular_languages","lang_dropdown_top_langs","languages","lang_dropdown_all_langs"],g,f,e;
return function(h){var l="",n=this.fn;
function k(p){p+=[d[5],(n.MC(c[2])||{})["code"]].join("");
if(n.MJ(n.MG((n.MC(c[2])||{})["current"]))){p+=d[6]
}p+=[d[7],(n.MC(c[2])||{})["code"],d[8],(n.MC(c[2])||{})["url"],d[9],(n.MC(c[2])||{})["flag"],d[10],(n.MC(c[2])||{})["name"],d[11]].join("");
return p
}function j(p){p+=[d[5],(n.MC(c[2])||{})["code"]].join("");
if(n.MJ(n.MG((n.MC(c[2])||{})["current"]))){p+=d[6]
}p+=[d[7],(n.MC(c[2])||{})["code"],d[8],(n.MC(c[2])||{})["url"],d[9],(n.MC(c[2])||{})["flag"],d[10],(n.MC(c[2])||{})["name"],d[11]].join("");
return p
}function o(z){z+=[d[2],n.MB(c[0]),d[3]].join("");
var y=(n.MC(c[1])||[]);
h.unshift({column:null});
for(var w=1,q=y.length,r;
w<=q;
w++){h[0]["column"]=r=y[w-1];
z+=d[4];
var u=w;
var p=y;
var A=q;
var x=t;
var y=(r||[]);
h.unshift({lang:null});
for(var w=1,q=y.length,t;
w<=q;
w++){h[0]["lang"]=t=y[w-1];
h.unshift({lang:t});
z=k(z);
h.shift()
}h.shift();
w=u;
y=p;
q=A;
t=x;
z+=d[12]
}h.shift();
z+=d[13];
return z
}function m(z){z+=[d[2],n.MB(c[0]),d[3]].join("");
var y=(n.MC(c[1])||[]);
h.unshift({column:null});
for(var w=1,q=y.length,r;
w<=q;
w++){h[0]["column"]=r=y[w-1];
z+=d[4];
var u=w;
var p=y;
var A=q;
var x=t;
var y=(r||[]);
h.unshift({lang:null});
for(var w=1,q=y.length,t;
w<=q;
w++){h[0]["lang"]=t=y[w-1];
h.unshift({lang:t});
z=j(z);
h.shift()
}h.shift();
w=u;
y=p;
q=A;
t=x;
z+=d[12]
}h.shift();
z+=d[13];
return z
}l+=d[0];
if(n.MD(c[3])){l+=d[1];
h.unshift({columns:n.MB(c[3]),title:n.MB(c[4])});
l=o(l);
h.shift();
l+=d[0]
}l+=d[0];
h.unshift({columns:n.MB(c[5]),title:n.MB(c[6])});
l=m(l);
h.shift();
l+=d[14];
return l
}
})());
booking[sNSStartupLoad].user_wishlists={init:function(){$(".wl_dates_trigger").click(function(){booking[sNSStartup].lightbox.show($("#wl_dates_modal"),{customWrapperClassName:"wl_dates_modal_wrapper",bOverflowVisible:true,hideCallBack:function(){$(".alert-error").hide()
}})
})
}};
B.VerticalScroller_=function(){this.window_=$(window);
this.animator_=jQuery({progress:0})
};
B.VerticalScroller_.TOP_MARGIN=10;
B.VerticalScroller_.DEFAULT_SCROLL_DURATION=700;
B.VerticalScroller_.MIN_SCROLLING_DISTANCE=5;
B.VerticalScroller_.prototype.scrollToBlock=function(h,g,f,e){var c;
if(f){c=this.getBlockBounds_(h).top-B.VerticalScroller_.TOP_MARGIN
}else{var d=this.getScrollTopToMoveTo_(h);
if(d===null){d=B.tools.dom.getWindowScrollTop()
}c=d
}this.scrollToOffset(c,g,e)
};
B.VerticalScroller_.prototype.scrollToOffset=function(g,f,e){this.animator_.stop(true);
var d=B.tools.dom.getWindowScrollTop();
var c=g;
if(Math.abs(d-c)<B.VerticalScroller_.MIN_SCROLLING_DISTANCE){if(e){e()
}}else{this.animateScroll_(d,c,f,e)
}};
B.VerticalScroller_.prototype.animateScroll_=function(g,f,e,d){var c=this;
this.animator_[0]["progress"]=0;
this.animator_.animate({progress:1},{step:function(h){c.window_.scrollTop(g+h*(f-g))
},duration:(e||B.VerticalScroller_.DEFAULT_SCROLL_DURATION),easing:(typeof jQuery.easing["easeInOutExpo"]==="function"?"easeInOutExpo":"swing"),complete:d})
};
B.VerticalScroller_.prototype.getScrollTopToMoveTo_=function(f){if(f.height()===0){return null
}var c=this.getBlockBounds_(f);
var e=this.getViewportBounds_();
var h=(c.top<e.top);
var d=(c.bottom>e.bottom);
var g=((f.outerHeight()+B.VerticalScroller_.TOP_MARGIN)>this.getViewportHeight_());
if(h||d){if(g||h){return c.top-B.VerticalScroller_.TOP_MARGIN
}else{return(c.bottom+B.VerticalScroller_.TOP_MARGIN-this.getViewportHeight_())
}}else{return null
}};
B.VerticalScroller_.prototype.getBlockBounds_=function(d){var c=d.offset().top;
return{top:c,bottom:c+d.outerHeight()}
};
B.VerticalScroller_.prototype.getViewportBounds_=function(){var c=B.tools.dom.getWindowScrollTop();
return{top:c,bottom:c+this.getViewportHeight_()}
};
B.VerticalScroller_.prototype.getViewportHeight_=function(){return(window.innerHeight||document.documentElement.clientHeight)
};
B.WindowScroller=new B.VerticalScroller_();
booking[sNSStartup].viewed_hotels={priority:9,fullListShowed:false,minListSize:5,lastviewTimer:null,loadStart:null,init:function(){this.loadStart=new Date();
var f=this,d="",c=false;
if(document.getElementById("LastViewedHotels")){try{this.minListSize=parseInt($("#LastViewedHotels").attr("min"))
}catch(g){}$("a.remove_hotel").click(function(){var e=$(this).attr("href").substring(1);
$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:e}});
booking[sNSStartup].viewed_hotels.cleanupHistoryList(this);
this.blur();
c=true;
return false
});
if($("#showAllHistory").length){$("#showAllHistory").click(function(e){booking[sNSStartup].viewed_hotels.showAll(e.target);
this.blur();
return false
})
}if($("#removeAllHistory").length){$("#removeAllHistory").click(function(){booking[sNSStartup].viewed_hotels.removeAll(true);
this.blur();
return false
})
}}if($(".lastVisitdate").length){$(".lastVisitdate").parents("li").mouseenter(function(){var e=$(".lastVisitdate",this);
$(e).slideDown("fast");
$(this).addClass("selectedVisit");
f.updateTime(e);
f.lastviewTimer=window.setInterval(function(){f.updateTime(e)
},1000)
});
$(".lastVisitdate").parents("li").mouseleave(function(){window.clearInterval(f.lastviewTimer);
$(".lastVisitdate",this).slideUp("fast");
$(this).removeClass("selectedVisit")
})
}return true
},updateTime:function(p){var q=this.loadStart;
var o=new Date();
if($(p).attr("sh")==undefined){$(p).attr("sd",$(".viewed_d",p).text());
$(p).attr("sh",$(".viewed_h",p).text());
$(p).attr("sm",$(".viewed_m",p).text());
$(p).attr("ss",$(".viewed_s",p).text());
if($(p).attr("sd")==""){$(p).attr("sd","0")
}if($(p).attr("sh")==""){$(p).attr("sh","0")
}if($(p).attr("sm")==""){$(p).attr("sm","0")
}if($(p).attr("ss")==""){$(p).attr("ss","0")
}}var c=0;
var g=0;
var l=0;
var n=0;
var t=o.getSeconds()-q.getSeconds();
if(t<0){t=60-q.getSeconds()+o.getSeconds();
c=1
}var f=o.getMinutes()-q.getMinutes()-c;
if(f<0){f=60-q.getMinutes()+o.getMinutes()-c;
g=1
}var k=o.getHours()-q.getHours()-g;
if(k<0){k=24-q.getHours()+o.getHours()-g;
l=1
}if(k>24){k=k-24;
n=1-l
}var j=parseInt($(p).attr("sh"))+k;
var e=parseInt($(p).attr("sm"))+f;
var r=parseInt($(p).attr("ss"))+t;
if(r>59){r=r-60;
e=e+1
}if(e>59){e=e-60;
j=j+1
}if(j>23){j=j-24;
n=n+1
}if(r==0){$(".viewed_s",p).text("");
$(".viewed_seconds",p).removeClass("show");
$(".viewed_second",p).removeClass("show")
}else{$(".viewed_s",p).text(r);
if(r==1){$(".viewed_seconds",p).removeClass("show");
$(".viewed_second",p).addClass("show")
}else{$(".viewed_seconds",p).addClass("show");
$(".viewed_second",p).removeClass("show")
}}if(e==0){$(".viewed_m",p).text("");
$(".viewed_minutes",p).removeClass("show");
$(".viewed_minute",p).removeClass("show")
}else{$(".viewed_m",p).text(e);
if(e==1){$(".viewed_minutes",p).removeClass("show");
$(".viewed_minute",p).addClass("show")
}else{$(".viewed_minutes",p).addClass("show");
$(".viewed_minute",p).removeClass("show")
}}if(j==0){$(".viewed_h",p).text("");
$(".viewed_hours",p).removeClass("show");
$(".viewed_hour",p).removeClass("show")
}else{$(".viewed_h",p).text(j);
if(j==1){$(".viewed_hours",p).removeClass("show");
$(".viewed_hour",p).addClass("show")
}else{$(".viewed_hours",p).addClass("show");
$(".viewed_hour",p).removeClass("show")
}}if(n==0){$(".viewed_d",p).text("");
$(".viewed_days",p).removeClass("show");
$(".viewed_day",p).removeClass("show")
}else{$(".viewed_d",p).text(n);
if(n==1){$(".viewed_days",p).removeClass("show");
$(".viewed_day",p).addClass("show")
}else{$(".viewed_days",p).addClass("show");
$(".viewed_day",p).removeClass("show")
}}},cleanupHistoryList:function(d){var e=this;
var c=this.minListSize;
$(d).parent().fadeOut(500,function(){$(d).parents("li").remove();
var g=$("#LastViewedHotels"),h=g.find("ul.lastViewedList li"),j=g.find("#viewed_hotels_header");
if(!h.length){booking[sNSStartup].viewed_hotels.removeAll(false)
}if(h.length<2){$("#share_hotel_history").css("borderTop","none")
}if(h.length>=c){var f=h.get(c-1);
$(f).fadeIn(1000)
}if(document.getElementById("showAllHistory")){if(h.length<=c){$("#moreHistoryLinkWrapper").hide()
}}if(g.hasClass("viewed_hotels_copy")){if(h.length<5){g.removeClass("viewed_hotels_copy");
j.find(".base_header").show();
j.find(".variant_header").remove()
}else{if(h.length==5){j.find(".base_header").hide();
j.find(".variant_header").show()
}}}booking.eventEmitter.trigger("viewed_hotels:update",{items:h});
e.callBack()
})
},showAll:function(f){var g=this;
var d=$("#LastViewedHotels ul.lastViewedList li"),c=this.minListSize,e=$("#viewed_hotels_header");
if(!booking[sNSStartup].viewed_hotels.fullListShowed){for(i=c-1;
i<d.length;
i++){$(d[i]).fadeIn(500);
g.callBack()
}booking[sNSStartup].viewed_hotels.fullListShowed=true;
if(f.className.indexOf("viewed_hotels_copy")>-1){e.find(".base_header").show();
e.find(".variant_header").hide()
}}else{for(i=c;
i<d.length;
i++){$(d[i]).fadeOut(500,function(){g.callBack()
})
}booking[sNSStartup].viewed_hotels.fullListShowed=false;
if(f.className.indexOf("viewed_hotels_copy")>-1){e.find(".base_header").hide();
e.find(".variant_header").show()
}}booking[sNSStartup].viewed_hotels.switchCaption()
},removeAll:function(c){if(c){$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:-1}})
}$("#LastViewedHotels").fadeOut(500,function(){$(this).remove()
})
},switchCaption:function(){if(booking[sNSStartup].viewed_hotels.fullListShowed){$("#showAllHistory .showLink").hide();
$("#showAllHistory .hideLink").show()
}else{$("#showAllHistory .showLink").show();
$("#showAllHistory .hideLink").hide()
}},callBack:function(){}};
B.define("profile/profile-menu/profile-menu",function(e,d,f){var c="[data-command=show-profile-menu]";
f.exports={_dropdown:null,init:function(){var g=this;
$.fly.dropdown.extend({init:function(){g._dropdown=this;
this.bind(this.events.show,g.onshow.bind(g));
this.options.extraClass+=" "+booking.jstmpl("profile_menu_extra_class").render(booking.env.profile_menu)
}}).delegate(c,{extraClass:"fly-dropdown--profile-menu",position:booking.env.rtl?"bottom left":"bottom right",content:function(){var h=booking.jstmpl("profile_menu").render(booking.env.profile_menu);
return $(h).loadComponents()
}})
},onshow:function(){if(booking.env.b_browser==="android"){this.forceReflow()
}$(".milk_menu").hide();
$(".uc_genius_tooltip").remove();
booking.et.stage("cQHcIJJRIXOOHVWOTTAZTUWe",1);
booking.et.stage("cQHcIJROWDfDERXFQTXWDTJLOdUfLdTC",1);
if(booking.env.b_ge_is_aspiring_genius){booking.track.stage("cQHFOPSTcbXRAdSeae",1)
}},hide:function(){if(this._dropdown){this._dropdown.hide()
}},forceReflow:function(){setTimeout(function(){var g=this._dropdown&&this._dropdown.root();
if(g){g.hide().show(0)
}}.bind(this),0)
}}
});
(function(){B[sNSStartup]["profile-menu"]={init:function(){B.require("profile/profile-menu/profile-menu").init()
}}
})();
(function(){var d="VMKIfFYDJbYROfACLO";
var c="dsf";
function f(){$(document).delegate(".js-dsf-tablet-header-icon","click",function(g){e($(g.currentTarget).find(".js-dsf-tablet-header-icon-dd"));
B.track.custom_goal(d,1);
if(!$(g.target).is(".js-dsf-tablet-header-icon-cta")){g.preventDefault()
}})
}function e(h){var g=B[sNSExperiments].ng_last_viewed;
if(g){if(g.isVisibleOverlay()&&g.click===c){$("#ng-overlay, .milk_menu, #top_lw_wrapper").hide()
}else{g.createOverlay();
g.click=c;
$(".milk_menu, #top_lw_wrapper").hide();
h.show()
}}}B[sNSExperiments][d]={init:f}
})();
booking.ensureNamespaceExists(sNSExperiments);
booking[sNSExperiments]["fESffFDDBEHAMZJRdcC"]={priority:9,init:function(){var c=$("#iphone_landing_form_footer"),f=$("#main_cta_lk",c),d=$("#tb_email",c);
f.removeAttr("disabled");
d.removeAttr("disabled");
c.bind("submit",function(k){k.preventDefault();
var n=$("#tb_email",c).attr("value");
var m=$(".b_app_signup_message_container",c);
var l=f.data("lang");
var j=f.data("source");
var h=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
var g=h.test(n);
if(!g){e(m);
return
}$.post("/send_app_email_v2",{email:n,language:l,aid:B.env.b_aid,stype:B.env.b_site_type_id,source:j,msgtype:"app_download_email"},function(o){m.show();
if(o.isOk=="true"){m.show();
$("#confirmation_email_span",m).fadeIn(function(){d.attr("disabled",true).val("");
f.attr("disabled",true)
}).css("display","table-cell")
}else{e(m)
}})
});
function e(h){var g=$("#confirmation_email_error",h);
h.show();
g.fadeIn().css("display","table-cell");
d.val("");
g.click(function(){g.fadeOut(function(){h.hide()
}).unbind("click")
})
}}};
(function(){var f=window.jQuery;
var h=window.booking;
var d="EKAYIAPTPAAREaQXMJO";
function c(){h.eventEmitter.bind(h.Search.Events.GROUP_CHANGED,function(k,j){if(j&&j.children===0){h.track.stage(d,1)
}})
}function g(){c()
}function e(){c()
}h.ensureNamespaceExists(sNSExperiments);
h[sNSExperiments][d]={priority:9,init:g,initElse:e}
})();
booking[sNSExperiments]["MRLLURDSGGeZIHHZdQAQIZKe"]=(function(){function c(){if(booking.env.b_user_has_ever_logged_in){booking.eventEmitter.one("user_access_menu_open",function(){booking.track.exp("MRLLURDSGGeZIHHZdQAQIZKe")
})
}}return{init:c,initElse:c}
})();
booking[sNSExperiments]["MRLLRcJDcOdDGTKWe"]=(function(){function c(){if(!booking.env.b_user_auth_level_is_none){return
}$(".js-uc-option--account").click(function(){booking.track.exp("MRLLRcJDcOdDGTKWe")
});
booking.command.bind("show-auth-lightbox",function(){booking.track.exp("MRLLRcJDcOdDGTKWe")
});
booking.eventEmitter.bind("user_access_menu_open",function(){booking.track.exp("MRLLRcJDcOdDGTKWe")
});
$("#login_redesign").click(function(){booking.track.exp("MRLLRcJDcOdDGTKWe")
})
}return{init:c,initElse:c}
})();
B[sNSExperiments]["GWcOCBFO"]=(function(n,x,u,F,k){var f=u.require("hijri-calendar");
function t(){if(!u.search.dates("checkin")){k("#homein").find(".calendarLink").trigger("show")
}}function y(Q,L){var N=L.search||u.search;
var K=N.dates("checkin"),P=N.dates("checkout"),M=N.dates(L.type),O=K&&P&&K.type==="valid"&&P.type==="valid";
k.fn.calendar2("each",function(R){if(L.search){if(L.search!==R.search){return
}}if(R.type()===L.type){if(M.type==="month"){R.trigger("monthSelected",{type:L.type,value:M})
}else{if(M.type==="valid"){R.trigger("dateSelected",{type:L.type,value:M})
}}}if(O&&(R.type()==="checkin"||R.type()==="checkout")){R.trigger("rangeSelected",{type:L.type,startValue:K,endValue:P});
j(R,K,P,P.valueOf()-K.valueOf())
}})
}function A(L,K){k.fn.calendar2("each",function(M){if(K.id!==M.id()){M.trigger("hide")
}})
}function H(){k.fn.calendar2("hide")
}function c(){var K=new Date();
return K
}function m(){var K=G();
K.setDate(K.getDate()-1);
return K
}function w(){var K=u.calendar2.today();
K.setDate(K.getDate()+1);
return K
}function G(){var K=u.calendar2.today();
K=new Date(K.getFullYear()+1,K.getMonth()+1,0);
return K
}function z(Q,K,L){var O=this.search||u.search;
if(!(Q||K)){return
}var P=Q.type(),N,M;
O.dates(P,{year:K.getYear(),month:K.getMonth(),date:K.getDate()});
N=O.dates("checkin");
M=O.dates("checkout");
if(N.type==="valid"){if(M.type==="invalid"){O.dates("checkout",O.dates("checkin").addDays(1))
}else{if(N>M){O.dates("checkout",O.dates("checkin").addDays(1))
}}}if(M.type==="valid"){if(N.type==="invalid"){O.dates("checkin",O.dates("checkout").addDays(-1))
}}if(Q&&Q.$element&&(Q.$element.parents(".b-searchbox").length>0)){if(P==="checkin"){u.Search.tracker.trackEvent(u.Search.TrackingEvents.CHECKIN_DATEPICKER)
}else{if(P==="checkout"){u.Search.tracker.trackEvent(u.Search.TrackingEvents.CHECKOUT_DATEPICKER)
}}}Q.$input.focus()
}function C(K,L){if(L.which===13&&!K.shown()){k("#frm").submit();
L.preventDefault()
}}function o(P){var O=P.search||u.search;
var N=O.dates("checkout"),M=O.dates("checkin"),Q=M&&N&&M.type==="valid"&&N.type==="valid";
var L,K=P.type(),R;
if(K==="checkin"){if(M.type==="valid"){L="dateSelected";
R=M
}else{if(M.type==="month"){L="monthSelected";
R=M
}}}else{if(K==="checkout"){if(N.type==="valid"){L="dateSelected";
R=N
}else{if(N.type==="month"){L="monthSelected";
R=N
}}}}if(L&&R){P.trigger(L,{type:K,value:R})
}if(Q){P.trigger("rangeSelected",{startValue:M,endValue:N});
j(P,M,N,N.valueOf()-M.valueOf())
}if(f.available()){if(f.enabled()){P.addState("hijri-enabled")
}P.$calendarElement.delegate(".c2-calendar-header_hijri-toggle","click",function(S){S.preventDefault();
if(f.enabled()){f.disable();
u.track.custom_goal("YdVJbGWZMGWcOCKe",2)
}else{f.enable();
u.track.custom_goal("YdVJbGWZMGWcOCKe",1)
}P.adjustHeight(true)
})
}}function h(L,O){var K="";
if(u.env.b_year_months[L+"-"+(O+1)]){K=u.env.b_year_months[L+"-"+(O+1)].name
}if(f.available()){var N=f.convert({year:L,month:O,day:1}),M=f.convert({year:L,month:O,day:u.calendar2.DAYS_IN_MONTH[O]});
K=K+u.jstmpl("hijri_month").render({monthTitleAddition:J(N,M)})
}return K
}function J(L,K){if(L.year&&K.year&&L.year!==K.year){return u.jstmpl.translations("ar_islamic_calendar_two_years",null,{first_hijri_month:u.jstmpl.translations(L.hijri_month_tag),second_hijri_month:u.jstmpl.translations(K.hijri_month_tag),first_year:L.hijri_year,second_year:K.hijri_year})
}else{if(L.hijri_month_tag&&K.hijri_month_tag&&L.hijri_month_tag!==K.hijri_month_tag){return u.jstmpl.translations("ar_islamic_calendar_two_months",null,{first_hijri_month:u.jstmpl.translations(L.hijri_month_tag),second_hijri_month:u.jstmpl.translations(K.hijri_month_tag),year:L.hijri_year})
}else{return u.jstmpl.translations("ar_islamic_calendar_no_month_change",null,{hijri_month:u.jstmpl.translations(L.hijri_month_tag),year:L.hijri_year})
}}}var e="hover";
function I(Q,R){var S,O,K,P,M;
var T=this.search||u.search;
if(R&&R.hasState("disabled")){return
}n.clearTimeout(Q.rangeHighlightTimeout);
if(Q.type()==="checkin"){S=R.id();
K=u.Search.createDate({year:R.year_,month:R.month_,date:R.date_});
P=T.dates("checkout");
O=u.calendar2.dayId(P.year,P.month,P.date)
}else{if(Q.type()==="checkout"){K=T.dates("checkin");
S=u.calendar2.dayId(K.year,K.month,K.date);
P=u.Search.createDate({year:R.year_,month:R.month_,date:R.date_});
O=R.id()
}}if(K&&K.type==="valid"){if(P&&P.type==="valid"){M=P.valueOf()-K.valueOf();
if(M>0){Q.unHighlightRange(e);
if(Q.selectedRange_){for(var N=0,L=Q.selectedRange_.length;
N<L;
N++){Q.days[Q.selectedRange_[N]].removeState("first-in-range").removeState("in-range").removeState("last-in-range")
}}Q.highlightRange(S,O,{name:e});
j(Q,K,P,M)
}}}}function j(P,K,O,M){var S=r(K,O,M);
if(f.available()){S+=u.jstmpl("hijri_footer_warning").render()
}var L=new Date(),Q=Number(L)/1000/60/60/24,R=Math.ceil(Q),N=(K.valueOf()-R>=14);
if(u.et.variant("PAHBYROdVaC")===1&&N){u.track.stage("eDUfGOaYdOEfSPVbKMNdOEFRNPIHAdLVFHMPdTC",1);
if(u.et.variant("eDUfGOaYdOEfSPVbKMNdOEFRNPIHAdLVFHMPdTC")){S+=u.jstmpl("pp_calendar_long_bw_copy").render()
}}P.$element.find(".c2-calendar-footer").html(S)
}function r(K,M,L){if(L>0&&K&&K.type==="valid"&&M&&M.type==="valid"){return u.jstmpl("length_of_stay_detailed").render({b_interval:L,b_checkin_date_formatted:u.formatter.date(K.toString(),"short_date_with_weekday_without_year"),b_checkout_date_formatted:u.formatter.date(M.toString(),"short_date_with_weekday")})
}return""
}function d(L,K){var M;
if(K===e){M=L.getSelectedDay();
if(M){M.removeState("selected")
}}}function q(M,K){var L=this.search||u.search;
M.rangeHighlightTimeout=n.setTimeout(function(){if(M.rangeHighlightTimeout){M.unHighlightRange(e);
if(M.selectedRange_&&M.selectedRange_.length){M.createRange_(M.selectedRange_,"selected")
}j(M,L.dates("checkin"),L.dates("checkout"),L.dates("checkout").valueOf()-L.dates("checkin").valueOf())
}},100)
}function p(){var K="";
if(f.available()){K+=u.jstmpl("hijri_toggle").render({type:this.type(),hijri_visible:false})
}return K
}function g(K){k.fn.calendar2("each",function(L){L.addState("hijri-enabled")
})
}function l(K){k.fn.calendar2("each",function(L){L.removeState("hijri-enabled")
})
}function E(){if(!u.calendar2||(u.env.b_is_tdot_traffic&&u.env.b_action==="book"&&u.env.b_book_stage===2)){return
}var Q=k(".calendarLink, .b-datepicker");
if(!u.track.getVariant("bLNJSJNWWUAPTPWOGANMfefVZHC")&&Q.length===0){return
}var M=F.sunday_first,P=F.b_simple_weekdays.slice(0),K=F.b_short_months;
if(M){P.unshift(P.pop())
}var N=u.calendar2.generalOptions={dayNames:P,sundayFirst:M,monthNames:K,direction:F.rtl?"rtl":"ltr",lazy:true,closeButton:true,onDateSelected:z,onLazyInitiated:o,monthTitle:h,onKeyDown:C,onRangeHighlighted:d,onDayMouseEnter:I,onDayMouseLeave:q,arrow:true,search:u.search};
var O=u.calendar2.checkinOptions=k.extend({},N,{type:"checkin",defaultDate:u.search.dates("checkin"),startDate:c(),endDate:m(),title:f.available()?p:F.transl_checkin_title});
var L=u.calendar2.checkoutOptions=k.extend({},N,{type:"checkout",defaultDate:u.search.dates("checkout"),startDate:w(),endDate:G(),title:f.available()?p:F.transl_checkout_title});
Q.each(function(S,T){var R=k(T),U=R.attr("rel")||R.data("type")||R.data("calendar2-type");
R.unbind("click.calendar");
R.unbind("click.calendar2");
if(U==="checkin_year_month"||U==="checkin"){R.calendar2(O)
}else{if(U==="checkout_year_month"||U==="checkout"){R.calendar2(L)
}}});
u.eventEmitter.bind("SEARCH:destination_selected",t);
u.eventEmitter.bind("SEARCH:date_changed",y);
u.eventEmitter.bind("SEARCH:month_changed",y);
u.eventEmitter.bind("CALENDAR:opened",A);
u.eventEmitter.bind("AUTOCOMPLETE:opened",H);
u.eventEmitter.bind("CALENDAR:hijri_enabled",g);
u.eventEmitter.bind("CALENDAR:hijri_disabled",l);
if(u.maps&&typeof u.maps.on==="function"){u.maps.on("click-open",H)
}}function D(){}return{init:E,initElse:D,priority:8}
}(window,document,booking,booking.env,$));
function popup_cancel_big_index(c){window.open(c,"","toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=950,height=500,left=200,top=200");
return false
}(function(d){if(d.getElementById("reactive_text_items")){var c=function(){var f=$("#reactive_text_items span").map(function(){return"("+decodeURIComponent($(this).text())+")"
}).get();
return new RegExp(f.join("|"),"i")
};
var e=function(){return $("#reactive_text_items").children().length>0
};
$(function(){var g,h;
var f=c();
h=function(){var j=$(this).val();
if(f.test(j)){}else{if($("#reactive_text_box").is(":visible")){$("#reactive_text_box").fadeOut()
}}};
$("#reactive_text_box").hide();
if(e()){$("#messagebox").keyup(h)
}})
}}(document));
(function(){var c="HOGeVdCScESFbLRFQNRSITXeUMATNC";
booking[sNSExperiments][c]={init:d,initElse:d};
function d(){booking.eventEmitter.bind("account-onboarding-modal-show",function(){booking.track.exp(c);
if(booking.track.getVariant(c)){$.cookie("wl252-gotit","true",{expires:365,path:"/",domain:booking.env.b_domain_end})
}})
}})();
(function(){var g=window.jQuery;
var k=window.booking;
var f="AaSDOOBEUSfCSRBJAKC";
var j={selector_badge:".d-deal",className_tt_left:"d-deal__tooltip-left",className_tt_right:"d-deal__tooltip-right",className_tt_preinit:"d-deal__pre-init"};
var h=g(window);
var c;
function e(){clearTimeout(c);
c=setTimeout(function(){var n;
var m=h.width()||1000;
var l;
clearTimeout(c);
g(j.selector_badge).each(function(p,o){n=g(o);
n.removeClass(j.className_tt_preinit);
n.removeClass(j.className_tt_left);
n.removeClass(j.className_tt_right);
l=n.offset()["left"];
if(l>(m-270)){n.addClass(j.className_tt_right)
}else{if(l<200){n.addClass(j.className_tt_left)
}}})
},300)
}function d(){e();
g(window).on("resize",e)
}k.ensureNamespaceExists(sNSExperiments);
k[sNSExperiments][f]={priority:9,init:d}
})();
(function(){var c="AaSDBcfERVXEUYPBRUDKe";
function d(){B.eventEmitter.bind("tooltip.show",function(g,f){var f=$(f);
if(f.is(".deals-module-secret-deal, .deal-type-sd")||f.data("type")=="secret-deal"){booking.track.exp(c)
}})
}B[sNSExperiments][c]={init:d,initElse:d}
})();
(function et_js_aa_testing(){$(function(){var c=B&&B.env&&B.env.etjs_aa;
var d;
if(c===1){d="GCfRVLMcDWe";
B.et.track(d);
B.et.on("view","#frm").stage(d,1);
$(window).load(function(){B.et.stage(d,2)
})
}else{if(c===2){d="GCfRVLMcDPdaT";
B.track.exp(d);
B.track.onView("#frm").stage(d,1);
$(window).load(function(){B.track.stage(d,2)
})
}}})
}());
booking[sNSStartupLoad].flash_deals_for_city={priority:9,init:function(){$("#flash_deal_city_sr #city_deal").change(function(){$("#flash_deal_city_sr")[0].submit()
})
}};
booking.components.define("ge-lightbox",function(f,c){function e(k){var l=k.data;
var j=k.template;
var g=k.onOpen||function(){};
var h=k.wrapperClassName||"ge-about-lightbox-wrapper";
f.require("profile/profile-menu/profile-menu").hide();
setTimeout(function(){c("#tooltip_wrap").hide()
},300);
c(".user_center_popover").hide();
f.lightbox.show(f.jstmpl(j).render(l),{customWrapperClassName:h},function(m){c(".ge-mod-button").click(function(){f.lightbox.hide();
return false
});
if(g){g(m)
}})
}function d(h){var g=h.element;
c("body").delegate(g,"click",function(j){j.preventDefault();
e(h)
})
}return{setup:d,open:e}
});
booking[sNSExperiments]["cQZeCJEcDHET"]=(function(d,f){var c=f.components.require("ge-lightbox");
function e(){c.setup({element:".genius-user-account-sign .clickable-area",template:"ge_about_lightbox",data:{b_genius_user:f.env.b_genius_user||{}}})
}return{init:e}
})(jQuery,booking);
booking.components.define("ge-lightbox",function(f,c){function e(k){var l=k.data;
var j=k.template;
var g=k.onOpen||function(){};
var h=k.wrapperClassName||"ge-about-lightbox-wrapper";
f.require("profile/profile-menu/profile-menu").hide();
setTimeout(function(){c("#tooltip_wrap").hide()
},300);
c(".user_center_popover").hide();
f.lightbox.show(f.jstmpl(j).render(l),{customWrapperClassName:h},function(m){c(".ge-mod-button").click(function(){f.lightbox.hide();
return false
});
if(g){g(m)
}})
}function d(h){var g=h.element;
c("body").delegate(g,"click",function(j){j.preventDefault();
e(h)
})
}return{setup:d,open:e}
});
booking[sNSExperiments]["cQPEIXQFeNSUOVPQORHe"]=(function(d,f){var c=f.components.require("ge-lightbox");
function e(){if(f.env.b_ge_is_aspiring_genius){c.setup({element:".ge-aspiring-about-lightbox",template:"ge_about_lightbox",data:{b_genius_user:f.env.b_genius_user||{}}})
}}return{init:e}
})(jQuery,booking);
booking.components.define("ge-lightbox",function(f,c){function e(k){var l=k.data;
var j=k.template;
var g=k.onOpen||function(){};
var h=k.wrapperClassName||"ge-about-lightbox-wrapper";
f.require("profile/profile-menu/profile-menu").hide();
setTimeout(function(){c("#tooltip_wrap").hide()
},300);
c(".user_center_popover").hide();
f.lightbox.show(f.jstmpl(j).render(l),{customWrapperClassName:h},function(m){c(".ge-mod-button").click(function(){f.lightbox.hide();
return false
});
if(g){g(m)
}})
}function d(h){var g=h.element;
c("body").delegate(g,"click",function(j){j.preventDefault();
e(h)
})
}return{setup:d,open:e}
});
booking[sNSExperiments]["cQHFOPSTcbXRAdSeae"]=(function(d,f){var c=f.components.require("ge-lightbox");
function e(){if(f.env.b_ge_is_aspiring_genius){c.setup({element:".ge-progress-aspiring",template:"ge_about_lightbox",data:{b_genius_user:f.env.b_genius_user||{}}})
}}return{init:e}
})(jQuery,booking);
booking.components.define("ge-lightbox",function(f,c){function e(k){var l=k.data;
var j=k.template;
var g=k.onOpen||function(){};
var h=k.wrapperClassName||"ge-about-lightbox-wrapper";
f.require("profile/profile-menu/profile-menu").hide();
setTimeout(function(){c("#tooltip_wrap").hide()
},300);
c(".user_center_popover").hide();
f.lightbox.show(f.jstmpl(j).render(l),{customWrapperClassName:h},function(m){c(".ge-mod-button").click(function(){f.lightbox.hide();
return false
});
if(g){g(m)
}})
}function d(h){var g=h.element;
c("body").delegate(g,"click",function(j){j.preventDefault();
e(h)
})
}return{setup:d,open:e}
});
booking[sNSExperiments]["cQHXYYbCYZSYO"]=(function(d,f){var c=f.components.require("ge-lightbox");
function e(){if(f.env.b_ge_genius_user_should_renew){console.log("Setting up lightbox");
c.setup({element:".js-ge-renew-progress",template:"ge_renew_lightbox",wrapperClassName:"ge-renew-lightbox-wrapper",data:{b_genius_user:f.env.b_genius_user||{}}})
}}return{init:e}
})(jQuery,booking);
(function(d,h){var g;
var f;
var l;
var c=0;
function e(){var m=d(document).scrollTop();
var n=h.tools.dom.getBounds(g);
n.top=f+m;
n.bottom=f+n.height+m;
return n
}function k(o){if(!g){g=d(".notice-wrap")
}if(!g.length){return
}if(!f){f=parseInt(g.css("top"),10)
}g.css({transition:"0.3s top","-webkit-transition":"0.3s top"});
var n=+(new Date())+o.stayTime;
if(n>c){c=n
}var m=f;
(function p(r){var q=d(".displace_growl:visible");
var t=e();
m=f;
q.each(function(){var x=h.tools.dom.getBounds(this);
var w=x.bottom;
if(h.tools.dom.boundsOverlap(x,t)&&w>=m){m=f+Math.max(0,w)
}});
var u=Math.max(f,m-d(document).scrollTop());
if(r!=u){g.css({top:u+"px"})
}if(new Date()<c){clearTimeout(l);
l=setTimeout(p,500,u)
}}).call()
}function j(){if(!window.navigator||!navigator.platform||navigator.platform.indexOf("Mac")==-1){return
}d(".uc_genius_tooltip").addClass("displace_growl");
h.eventEmitter.bind("growl:show",function(n,m){k(m)
})
}h.ensureNamespaceExists(sNSStartup);
B[sNSStartup].ge_adjust_growls_to_user_notice_popups={priority:9,init:j}
})(window.jQuery,window.booking);
booking[sNSExperiments]["cQPHBAEWPAfJPESaO"]={init:function(){var f=this,e=booking.track.getVariant("cQPHBAEWPAfJPESaO"),c,d;
if(e===2||e===3){$('li.uc-notification[data-type="extension_announce"] a').click(function(g){g.preventDefault();
c=$("#promo-chrome-ext-container");
d=$("#promo-chrome-ext");
$(".user_center_popover").hide();
f.initLightbox(c,d);
booking[sNSStartup].lightbox.show($("#promo-chrome-ext-container"),{customWrapperClassName:"chrome-ext-container",bAnimation:true,bCloseButton:true,hideCallBack:function(){if(e===2&&booking.env.b_lang==="en"){f.stopAnimation(d);
f.resetAnimation(d)
}},positionAfterCallBack:function(){if(e===2&&booking.env.b_lang==="en"){f.resetAnimation(d);
f.startAnimation(d)
}}});
d.find(".cta-install-now a").click(function(){g.preventDefault();
chrome.webstore.install(booking.env.b_chrome_extension_install_url,function(){booking[sNSStartup].lightbox.hide()
})
});
d.find(".cta-play-again a").click(function(){g.preventDefault();
f.resetAnimation(d);
f.startAnimation(d)
})
})
}},initElse:function(){},initLightbox:function(c,d){d.hide().removeClass("hidden").show()
},resetAnimation:function(c){c.find(".cel-header").hide().css({width:"362px",height:"72px",left:"189px",top:"242px"});
c.find(".cel-badge").hide();
c.find(".step-info").hide();
c.find(".popup").hide();
c.find(".cel-input").hide();
c.find(".extension-usps li").hide();
c.find(".cta-install-now,.cta-play-again").hide()
},startAnimation:function(c){c.queue("promoAnim",function(){$(this).find(".cel-header").delay(100).fadeIn(1000).delay(1000).fadeOut(1000);
$(this).dequeue("promoAnim")
}).delay(4500,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".step-1").fadeIn(500).delay(2000).fadeOut(500);
$(this).dequeue("promoAnim")
}).delay(3500,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".popup-step-1").css("opacity",0).css("top",55).slideDown(250).animate({opacity:1,top:"+=11"},{queue:false,duration:250}).delay(2000).queue(function(){$(this).removeClass("part-1").addClass("part-2").delay(500).find(".cel-input__username").css({width:0,display:"block"}).animate({width:260},1500);
$(this).dequeue()
}).delay(2000).queue(function(){$(this).removeClass("part-2").addClass("part-3").delay(500).find(".cel-input__password").css({width:0,display:"block"}).animate({width:260},1500);
$(this).dequeue()
}).delay(2000).queue(function(){$(this).fadeOut(500).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(7000,"promoAnim");
c.queue("promoAnim",function(){c.find(".cel-badge").fadeIn(250);
c.find(".popup-step-2").css("opacity",0).css("top",55).slideDown(250).animate({opacity:1,top:"+=11"},{queue:false,duration:250}).delay(2000).queue(function(){c.find(".cel-badge").fadeOut(250);
$(this).fadeOut(500).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(2500,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".step-2").fadeIn(500).delay(2000).fadeOut(500);
$(this).dequeue("promoAnim")
}).delay(3500,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".popup-step-3").css("opacity",0).css("top",55).slideDown(250).animate({opacity:1,top:"+=11"},{queue:false,duration:250}).delay(2000).queue(function(){$(this).removeClass("part-1").addClass("part-2").dequeue()
}).delay(2000).queue(function(){$(this).removeClass("part-2").addClass("part-3").dequeue()
}).delay(2000).queue(function(){$(this).fadeOut(500).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(7000,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".popup-step-4").css("opacity",0).css("top",55).slideDown(250).animate({opacity:1,top:"+=11"},{queue:false,duration:250}).delay(2000).queue(function(){$(this).removeClass("part-1").addClass("part-2").dequeue()
}).delay(2000).queue(function(){$(this).removeClass("part-2").addClass("part-3").dequeue()
}).delay(2000).queue(function(){$(this).fadeOut(500).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(7000,"promoAnim");
c.queue("promoAnim",function(){$(this).find(".step-3").fadeIn(500).delay(2000).fadeOut(500);
$(this).dequeue("promoAnim")
}).delay(3500,"promoAnim");
c.queue("promoAnim",function(){c.find(".cel-badge").fadeIn(250);
c.find(".popup-step-5").css("opacity",0).css("top",55).slideDown(250).animate({opacity:1,top:"+=11"},{queue:false,duration:250}).delay(3000).queue(function(){c.find(".cel-badge").fadeOut(250);
$(this).fadeOut(500).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(4000,"promoAnim");
c.queue("promoAnim",function(){c.find(".cel-header").delay(1000).css({opacity:1}).fadeIn(1000).delay(1000).animate({width:181,height:36,top:130},750);
$(this).dequeue("promoAnim")
}).delay(4000,"promoAnim");
c.queue("promoAnim",function(){c.queue(function(){(function d(){c.find("li:hidden:first").delay(1000).fadeIn(500,d)
})();
$(this).dequeue()
}).delay(7000).queue(function(){c.find(".cta-install-now,.cta-play-again").fadeIn();
$(this).dequeue()
});
$(this).dequeue("promoAnim")
}).delay(3500,"promoAnim");
c.dequeue("promoAnim")
},stopAnimation:function(c){c.clearQueue("promoAnim");
c.stop("promoAnim",true,true)
}};
(function(e,c){function d(){if(e.user&&e.user.showGeniusForGoogle){booking.eventEmitter.bind("auth-dialog:show",function(){c(".user_center_popover").css("z-index","999");
e[sNSStartup].lightbox.rePosition();
c(".user_access_email").focus()
})
}}c(document).ready(d)
}(window.booking,window.jQuery));
booking.components.define("ge-lightbox",function(f,c){function e(k){var l=k.data;
var j=k.template;
var g=k.onOpen||function(){};
var h=k.wrapperClassName||"ge-about-lightbox-wrapper";
f.require("profile/profile-menu/profile-menu").hide();
setTimeout(function(){c("#tooltip_wrap").hide()
},300);
c(".user_center_popover").hide();
f.lightbox.show(f.jstmpl(j).render(l),{customWrapperClassName:h},function(m){c(".ge-mod-button").click(function(){f.lightbox.hide();
return false
});
if(g){g(m)
}})
}function d(h){var g=h.element;
c("body").delegate(g,"click",function(j){j.preventDefault();
e(h)
})
}return{setup:d,open:e}
});
(function(d,f){var c="cQZGSRaPSZQOWVRdMJO";
function e(){if(f.user.fromGeniusDomain){f.track.exp(c);
if(f.track.getVariant(c)){var g=f.components.require("ge-lightbox");
g.open({data:{b_genius_user:f.env.b_genius_user||{}},template:"ge_about_lightbox"})
}}}f.ensureNamespaceExists(sNSExperiments);
f[sNSExperiments][c]={init:e,initElse:e}
}(window.jQuery,window.booking));
booking.components.define("ge-lightbox",function(f,c){function e(k){var l=k.data;
var j=k.template;
var g=k.onOpen||function(){};
var h=k.wrapperClassName||"ge-about-lightbox-wrapper";
f.require("profile/profile-menu/profile-menu").hide();
setTimeout(function(){c("#tooltip_wrap").hide()
},300);
c(".user_center_popover").hide();
f.lightbox.show(f.jstmpl(j).render(l),{customWrapperClassName:h},function(m){c(".ge-mod-button").click(function(){f.lightbox.hide();
return false
});
if(g){g(m)
}})
}function d(h){var g=h.element;
c("body").delegate(g,"click",function(j){j.preventDefault();
e(h)
})
}return{setup:d,open:e}
});
(function(e,g){var d="cQHXYYcDHET";
function c(){e.ajax({type:"post",url:"/genius_renewal_message_seen",data:{}})
}function f(){if(g.env.b_action=="book"){return
}if(typeof g.env.b_ge_should_show_renewal_message!=="undefined"){g.track.stage(d,1)
}var h=null;
if(g.env.b_ge_should_show_renewal_message!==""){h=parseInt(g.env.b_ge_should_show_renewal_message,10)
}if(h===0){var j=g.components.require("ge-lightbox");
j.open({data:{b_genius_user:g.env.b_genius_user||{}},template:"ge_renew_lightbox",wrapperClassName:"ge-renew-lightbox-wrapper",onOpen:function(){g.eventEmitter.bind("modal:close",c)
}})
}}g.ensureNamespaceExists(sNSExperiments);
g[sNSExperiments][d]={init:f,initElse:f}
}(window.jQuery,window.booking));
booking[sNSExperiments]["cQPbbadAHHKe"]={init:function(){if(booking.env.priceWatch.b_price_alert_all_canceled){booking[sNSStartup].lightbox.show($(".js-price-watch-unsubscribe--all"),{customWrapperClassName:"price-watch-unsubscribe-wrapper"})
}}};
(function(d,f){var c="cQHFAUADHYfFNFET";
function e(){if(f.env.b_reg_user_is_genius){f.eventEmitter.bind("user_access_menu_open",function(){if(d(".genius-user-account-sign").length){f.track.exp(c)
}})
}}f.ensureNamespaceExists(sNSExperiments);
f[sNSExperiments][c]={init:e,initElse:e}
}(window.jQuery,window.booking));
(function(){var e=window.jQuery;
var g=window.booking;
var c="bHOffPZAZYdUJBbLHe";
function f(){g.eventEmitter.bind(g.Search.Events.GROUP_CHANGED,function(m,l){if(l){var k=parseInt(l.adults),h=l.childrenAges,j="";
e.each(new Array(k),function(o){j+="A";
if(o!==k-1){j+=","
}});
if(h){e.each(h,function(o){j+=","+h[o]
})
}}e(".js-first-room-param-setup").val(j)
})
}function d(){}g.ensureNamespaceExists(sNSExperiments);
g[sNSExperiments][c]={priority:9,init:f,initElse:d}
})();
B.when({events:"ready",condition:$("#frm").length}).run(function(){if(B.et.track("bLYSRffECIAaKLPLTLSddbabSLT")){$("#frm").submit(function(c){if(parseInt($(".b-children-selectbox select").val())>0&&$(".sb_child_ages_empty_zero:selected").length){c.preventDefault();
$(".b-children-ages-configurator").addClass("b-children-ages-configurator--error")
}});
$(".b-selectbox__element[name=group_children]").change(function(){$(".b-children-ages-configurator").removeClass("b-children-ages-configurator--error")
});
$(".b-children-ages-configurator__element").change(function(){$(".b-children-ages-configurator").removeClass("b-children-ages-configurator--error")
})
}$(".b-selectbox__element[name=group_children]").change(function(){B.et.stage("bLYSRffECIAaKLPLTLSddbabSLT",1)
})
});
(function(){var f=window.jQuery;
var h=window.booking;
var d="bLYSRbNJdQJJHMVGRCfDaWe";
function c(){f("#frm").submit(function(){if(f(".b-children-ages-configurator__element").length){var k=true,j=false;
f(".b-children-ages-configurator__element").each(function(){if(!(f(this).find(":selected").hasClass("sb_child_ages_empty_zero")||f(this).find(":selected").hasClass("sb_child_ages_not_empty_zero"))){k=false
}if(h.track.getVariant(d)===1&&f(this).find(":selected").hasClass("sb_child_ages_not_empty_zero")){j=true
}})
}if(k){h.track.stage(d,2)
}if(j){h.track.stage(d,3)
}})
}function g(){c()
}function e(){c()
}h.ensureNamespaceExists(sNSExperiments);
h[sNSExperiments][d]={priority:9,init:g,initElse:e}
})();
(function(){var f=window.jQuery;
var h=window.booking;
var d="bLYSRfLdLUNbCcGZfKe";
function c(){f("select[name=age]").focus(function(){h.track.stage(d,1)
})
}function g(){c()
}function e(){c()
}h.ensureNamespaceExists(sNSExperiments);
h[sNSExperiments][d]={priority:9,init:g,initElse:e}
})();
booking[sNSExperiments].header_2012=(function(){var c=function(){$("#b_nav_profile").bind("click",function(){$(this).toggleClass("selected");
if($("#b_header").hasClass("profile_slide_down")){$("#b_header").removeClass("profile_slide_down").addClass("profile_slide_up")
}else{$("#b_header").removeClass("profile_slide_up").addClass("profile_slide_down")
}});
$(".profile_login_switcher").bind("click",function(){$("#profile_forms").toggleClass("profile_sign-in").toggleClass("profile_sign-up")
});
$("select","#header_currency").bind("change",function(){$(this).parent("form").submit()
});
$("select","#header_language").bind("change",function(){$(this).parent("form").submit()
})
};
var d=function(){c()
};
return{init:d}
}());
(function(){var e=window.jQuery;
var g=window.booking;
var d="faNfCfHbcGRcdFO";
function f(){e(".user_center_option").one("click",c)
}function c(){g.track.stage(d,1)
}g.ensureNamespaceExists(sNSExperiments);
g[sNSExperiments][d]={init:f,initElse:f}
})();
booking[sNSStartup].improve_calendar_closing={priority:9,init:function(){$(document.body).click(function(e){var d=$(e.target).parents("#calendar_popup").length;
var c=$(e.target).parents(".calendarLink").length;
if(!d&&!c){$(this).trigger("close_calendar",e.target)
}});
return true
}};
booking[sNSExperiments]["cDPdWSXAPLHRT"]=(function(e,c){function d(){if(e.clickStore){booking.events.on("user_center_bar:init",function(){var f=e.clickStore.get$("uc-trigger");
if(f){e.track.stage("cDPdWSXAPLHRT",1);
e.track.stage("cDPdWSXAPLHRT",2);
if(e.track.getVariant("cDPdWSXAPLHRT")==2){setTimeout(function(){c(f.originalEvent.target).closest(".popover_trigger").triggerHandler(f)
},0)
}}})
}}return{init:d}
})(booking,jQuery);
B.run("YdVSPMEZaZGNVaKbNXTbdBcNKNMSUZJANaKe").onReady(function(){var c="YdVSPMEZaZGNVaKbNXTbdBcNKNMSUZJANaKe";
var d=function(){B.track.stage(c,1);
$(this).off("hover",d)
};
if(["hotel"].indexOf(B.env.b_action)>=0&&B.env.b_guest_country==="fr"){$(".no_booking_fees_fr_tooltip").on("hover",d)
}});
B.run("YdVDbYWTRSSEaMHe").onReady(function(){$(".search_summary_block .dates .search_summary_toggle_button").bind("click",function(d){var c="#frm .b-form-checkout *";
d.preventDefault();
if(B.track.getVariant("YdVDbYWTRSSEaMHe")){B.track.exp("YdVDbYWTRSSEaMYFHbdOJHZWSPHe");
if($(d.target).hasClass("search_summary_block-checkin")){c="#frm .b-form-checkin *"
}window.setTimeout(function(){B.Search.openDatepicker({duration:0,selector:c})
},10)
}else{B.track.exp("YdVDbYWTRSSEaMYFHbdBJbCMC")
}})
});
(function(){var c="YdVDEZRETWRGPVLFQCSET";
booking[sNSExperiments][c]=(function(e,h){var k="loc-theme-search_active-num-",m="loc-theme-search-showcase_num-",d="loc-theme-search_demo",g={switchedToAnyTheme:2,switchedToTheme2:3,switchedToTheme3:4,switchedToTheme1:5};
function j(n,o){this.$container=h(n);
if(!this.$container.length){return
}this.options=h.extend({showDemo:false},o||{});
this.$showcases=this.$container.find(".loc-theme-search-showcase");
this.$bars=this.$showcases.find(".loc-theme-search-showcase__bar");
this.demoTimers=[];
this.activeTimer=null;
this.isDemoRunning=false;
this.run();
if(this.options.showDemo){this.showDemo()
}}h.extend(j.prototype,{run:function(){var n=this;
this.$bars.bind("mouseover",function(){var p=h(this).closest(".loc-theme-search-showcase"),o=f(p,m);
n.setActive(o,function(){l(g.switchedToAnyTheme);
if(o==2){l(g.switchedToTheme2)
}else{if(o==3){l(g.switchedToTheme3)
}else{if(o==1){l(g.switchedToTheme1)
}}}})
});
this.$container.bind("mouseover",function(){if(n.isDemoRunning){n.stopDemo()
}})
},setActive:function(n,o){f(this.$container,k,n);
if(this.activeTimer){clearTimeout(this.activeTimer)
}if(o){this.activeTimer=setTimeout(o,500)
}},showDemo:function(){var o=this,n=[2,1];
this.$container.addClass(d);
h.each(n,function(q,p){var r=setTimeout(function(){o.setActive(p);
if(q===n.length-1){o.stopDemo()
}},400*(q+1));
o.demoTimers.push(r)
})
},stopDemo:function(){while(this.demoTimers.length){clearTimeout(this.demoTimers.shift())
}this.$container.removeClass(d)
}});
function l(n){e.track.custom_goal(c,n)
}function f(o,t,r){var u=r===null,p=!u&&arguments.length>2,q=new RegExp("^"+t+"(.*)$"),n;
h(o).each(function(x,y){var w=h(y);
h.each((y.className||"").split(/ +/),function(C,A){var z=String(A).match(q);
if(!z){return
}if(u){w.removeClass(A)
}else{if(p){w.removeClass(A);
w.addClass(t+r)
}else{n=z[1];
return false
}}})
});
return n
}return{init:function(){new j(".loc-theme-search")
},initElse:function(){}}
})(booking,jQuery)
})();
(function(c){B[sNSExperiments][c]={init:function(){$(document.body).bind("submit",function(d){if($(d.target).attr("role")=="search"&&!d.isDefaultPrevented()){$(this).addClass(c)
}})
}}
})("YdVSfPTDPUPcC");
B.run("YdAcCcdNANKBYbaTaTaET").onReady(function(){if(B.track.getVariant("YdAcCcdNANKBYbaTaTaET")){booking[sNSStartup].rewrite_tt.ttClass+=" rtl_tooltip_class"
}B.eventEmitter.one("tooltip.show",function(){B.track.exp("YdAcCcdNANKBYbaTaTaET")
})
});
B.run("YdVecTYWRbQFdBJOTXNXe").onReady(function(){B.track.onView(".deal-badge-wrapper_vip-choice").exp("YdVecTYWRbQFdBJOTXNXe")
});
(function(c){$(".profile-area__nav").delegate(".js-insiderguides-track","click",function(f){var d=$(this).data("trackname");
c.google.trackEvent("Insider Guides","Profile Nav Click",[c.env.b_action,":",d].join(" "))
})
})(booking);
booking[sNSExperiments]["fEDRMYBXRXZXe"]=(function(){var c=function(){if($("#error404page").length){booking.track.exp("fEDRMYBXRXZXe")
}$("#errorReport").click(function(f){f.preventDefault();
var d=$(this).data("lightboxurl");
booking[sNSStartup].lightbox.show(d,{iframe:true,iframeWidth:450,iframeHeight:550})
})
};
return{init:c,initElse:c}
}());
booking[sNSExperiments]["fEDDSMbRebC"]=(function(){$.fn.lp_placeholder=function(){var f=$(this),e=document.createElement("input");
if("placeholder" in e){return
}d();
f.bind("focus",function(){d();
f.parent().addClass("focus")
});
f.bind("blur",function(){d();
f.parent().removeClass("focus")
});
f.bind("keydown",function(h){var g=h.which;
if(g>41){f.removeClass("placeholder")
}else{if(g==8&&f.val().length==1){f.addClass("placeholder")
}}});
function d(){var g=!f.val()?"addClass":"removeClass";
f[g]("placeholder")
}};
function c(){var d=$(".experiment_lp_new_deal_box_wrapper");
if(!d.length||$.cookie("viewedBCheckBounce")){return
}d.find(".experiment_lp_new_deal_box_email_input").lp_placeholder();
d.find(".experiment_lp_new_deal_box_exit_btn").click(function(){B.lightbox.hide()
});
d.find("input[type=submit]").click(function(){B.track.custom_goal("fEDDSMbRebC",2)
});
if(B.track.getVariant("fEDDSMbRebC")==1){d.bind("show-up",function(){B.track.custom_goal("fEDDSMbRebC",1)
})
}else{setTimeout(function(){booking[sNSStartup].lightbox.show(d,{customWrapperClassName:booking.env.notificationLightboxContainerClass||"notification-lightbox-container"});
B.track.custom_goal("fEDDSMbRebC",1);
$.cookie("viewedBCheckBounce","true",{expires:30,path:"/",domain:booking.env.b_domain_end})
},5000)
}}return{init:c}
})();
booking[sNSExperiments]["fEWUZbdJKbIYUYYeLT"]=(function(){function c(){$(".ga-sh-tracker").click(function(){var d=$(this).data("google-track-event-category")||"Click",f=d.toLowerCase(),h=$(this).data("google-track-event-label")||"",g=$(this).data("google-track-event-action")||"",g=g.replace(/\n/g,""),j=[];
if(g.substr(0,1)=="["&&g.substr(-1)=="]"){j=g.substr(1,g.length-2).split(";")
}else{if(g){j.push(g)
}}for(var e=0;
e<j.length;
e++){if(j[e]){B.google.trackEvent(d,j[e],h)
}}})
}return{init:c}
})();
booking[sNSStartup]["IZdPZPUNVcEaIDfRJLYDJRdcC"]=(function(c){var e="IZdPZPUNVcEaIDfRJLYDJRdcC",j=null,d=null,h=20;
function l(){j=$("#b_"+e);
d=$(window);
d.bind("scroll",g);
$(".mybooking-bn-pin-login--footer input").bind("keydown click",f)
}var k=null;
function g(m){clearTimeout(k);
k=setTimeout(function(){if(j&&j.length){var n=j.offset();
if(n&&n.top&&d.scrollTop()+d.height()>=n.top+h){c.track.custom_goal(e,1);
d.unbind("scroll",g)
}}},100)
}function f(m){if(m.which==13||($(this).attr("type")=="submit"&&m.type=="click")){c.track.custom_goal(e,2);
$(".mybooking-bn-pin-login--footer input").unbind("keydown click",f)
}}return{init:l}
})(booking);
booking[sNSExperiments]["IZdPZPUcHCbXfVXMHO"]=(function(k,g){var d;
var f="IZdPZPUcHCbXfVXMHO";
function j(){e();
d=g(".mb-masthead__map");
if(d.length){h(d.data("latitude"),d.data("longitude"),d.data("hotel-name"))
}if(booking.env.confirmationPrint){window.setTimeout(function(){g(".js-print-confirmation-start").click()
},1000)
}}function h(p,o,m){if(window.google&&google.maps){c(p,o,m)()
}else{var n="mapCallback_IZdPZPUcHCbXfVXMHO",l=document.createElement("script");
window[n]=c(p,o,m);
l.type="text/javascript";
l.src=k.env.google_maps_url+"&callback="+n;
l.async=true;
document.getElementsByTagName("head")[0].appendChild(l)
}}function c(n,m,l){return function(){var o=new google.maps.LatLng(n,m);
var q={zoom:12,center:o,mapTypeId:google.maps.MapTypeId.ROADMAP,panControl:false,mapTypeControl:false,zoomControlOptions:{style:google.maps.ZoomControlStyle.SMALL,position:(k.env.rtl?google.maps.ControlPosition.TOP_LEFT:google.maps.ControlPosition.TOP_RIGHT)},scrollwheel:false};
var r=new google.maps.Map(d.get(0),q);
var p=new google.maps.Marker({position:o,map:r,title:l,icon:k.env.hotel_google_map_icon})
}
}function e(){if(k.env.b_action==="confirmation"&&window.location.hash.indexOf("from_mybooking")!=-1){k.track.custom_goal(f,1);
window.location.hash=""
}if(k.env.b_action==="hotel"&&window.location.hash.indexOf("from_mybooking")!=-1){k.track.custom_goal(f,2);
window.location.hash=""
}var l=g(".js-custom-goal--print-conf");
l.bind("click.summary_redesign",function(m){l.unbind("click.summary_redesign");
m.preventDefault();
k.track.custom_goal(f,3)
});
g(".js-custom-goal--view-policies").click(function(m){m.preventDefault();
k.track.custom_goal(f,4)
});
g(".js-custom-goal--show-map").click(function(m){if(!booking.track.getVariant("IZEZKZNaYKe")){m.preventDefault()
}k.track.custom_goal(f,5)
})
}return{priority:9,init:j,initElse:e}
})(booking,jQuery);
B[sNSExperiments]["IZdRWSdZbVeUZDeLcPC"]=(function(d){function c(){d.track.onClick(".header-user-menu-link-s-logged-in").exp("IZdRWSdZbVeUZDeLcPC")
}return{init:c,initElse:c}
})(window.booking);
B.runExp("eRQJFFKMEcbeOQIXWOJNET").onReady(function(){var e="eRQJFFKMEcbeOQIXWOJNET",k=$("#price_display_wrapper_sidebar"),d=$(".price_display_control",k),g=$(".price_display_control input:checkbox",k),j=$(".price_display_submit button",k),h=$(".price_display_submit",k),c=$(".price_display_control_reset",k);
d.click(function(m){B.track.custom_goal(e,1);
if(!(m.target.type=="checkbox"||$(m.target).hasClass("jq_tooltip"))){var l=$(":checkbox",this);
l.attr("checked",!l.attr("checked"));
m.stopPropagation()
}h.addClass("active")
});
j.click(function(l){l.preventDefault();
B.track.custom_goal(e,2);
$(this).addClass("b-price-display-button--loader");
$.get("/preferences/price_mode?"+k.serialize(),function(m){if(m.success){location.reload()
}else{f()
}});
g.each(function(){$(this).attr("disabled",true)
});
j.attr("disabled",true)
});
c.click(function(l){l.preventDefault();
B.track.custom_goal(e,3);
$.get("/preferences/price_mode?reset_price_preferences=on",function(m){if(m.success){location.reload()
}else{f()
}});
g.each(function(){$(this).attr("disabled",true)
});
j.attr("disabled",true)
});
function f(){$(":input",k).removeAttr("disabled");
j.removeClass("b-price-display-button--loader")
}});
booking[sNSExperiments]["eDUbKSPOUJKMFAcCcEO"]={_run:function(){$(".bpg_tooltip__v-style").one("mouseenter",function(){B.track.stage("eDUbKSPOUJKMFAcCcEO",1)
})
},init:function(){this._run()
},initElse:function(){this._run()
}};
booking[sNSExperiments]["BOebKPJTDfNLT"]={init:function(){var c=B.require("user-left-client");
if(!(c.enabled&&B.browserStorageHandler&&B.browserStorageHandler.isLocalStorageSupported())){B.track.custom_goal("BOebKPJTDfNLT",1);
return
}c.register(B.env.b_action||"_client_")
}};
$(".usabilla_pre_lightbox").click(function(){booking[sNSStartup].lightbox.show($("#usabilla_lightbox"),{customWrapperClassName:"usabilla_lightbox",bCloseButton:true});
return false
});
B[sNSStartup]["ZFeNBKKYAPACLO"]=(function(g,k){var f=150+7+10;
if(k.env.b_lang==="ar"){f=235+43+7+10
}if(k.env.b_is_villa_site){f=135+7+10+50
}if(k.track.getVariant("YdVKAIOJcKdAeFEaO")&&g(".loc_logo_tagline").length){var c=g(".loc_logo_tagline").width()+10+7;
f=Math.max(c,f)
}function e(l){this.$element=g(l);
this.priority_=this.$element.data("priority")||5
}e.prototype.width=function(){if(!this.width_){this.width_=this.$element.outerWidth()
}return this.width_
};
e.prototype.priority=function(){return this.priority_
};
e.prototype.hide=function(){this.$element.hide();
return this
};
e.prototype.show=function(){this.$element.show();
return this
};
function d(l){this.$element=g(l);
this.items=g.map(this.$element.find(".user_center_option"),function(m){return new e(m)
});
this.sortedItems=this.items.sort(function(n,m){return n.priority()-m.priority()
})
}d.prototype.fitWidth=function(l){g.each(this.sortedItems,function(m,n){if(l-n.width()>0){l-=n.width();
n.show()
}else{n.hide()
}});
return this
};
function j(){var l=g("#top .user_center_nav .user_center_option");
g(window).bind("resize",k.tools.functions.throttle(function(){var m=l.toArray().reduce(function(o,p){return o+g(p).width()
},0),n=g("#top").width()-f;
if(m>n){k.track.exp("ZFeNBKKYAPACLO")
}},1000))
}function h(){j();
var l=g("#top"),m=new d(l.find(".user_center_nav"));
function n(){m.fitWidth(l.width()-f)
}g(window).bind("resize",k.tools.functions.throttle(n,300));
n()
}return{init:h,priority:9}
}($,booking));
$(function(){$("a.room_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date").hide()
});
$(".confirm_change_date").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date").length>0){$("body").click(function(){$(".confirm_change_date").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
$(function(){$("a.hotel_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date_hotel").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date_hotel a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date_hotel").hide()
});
$(".confirm_change_date_hotel").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date_hotel").length>0){$("body").click(function(){$(".confirm_change_date_hotel").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
$(function(){$("a.photo_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date_photo").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date_photo a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date_photo").hide()
});
$(".confirm_change_date_photo").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date_photo").length>0){$("body").click(function(){$(".confirm_change_date_photo").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
$(function(){$("a.review_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date_review").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date_review a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date_review").hide()
});
$(".confirm_change_date_review").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date_review").length>0){$("body").click(function(){$(".confirm_change_date_review").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
$(function(){$("a.more_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date_more").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date_more a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date_more").hide()
});
$(".confirm_change_date_more").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date_more").length>0){$("body").click(function(){$(".confirm_change_date_more").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
$(function(){$("a.scarcity_link_changes_date").click(function(c){c.stopPropagation();
c.preventDefault();
$(this).siblings(".confirm_change_date_scarcity").css({top:c.pageY+"px"}).show().find("a[href=#continue]").attr("href",$(this).attr("href"))
});
$(".confirm_change_date_scarcity a[href=#cancel]").click(function(c){c.stopPropagation();
c.preventDefault();
$(".confirm_change_date_scarcity").hide()
});
$(".confirm_change_date_scarcity").click(function(c){c.stopPropagation()
});
if($(".confirm_change_date_scarcity").length>0){$("body").click(function(){$(".confirm_change_date_scarcity").hide()
})
}if($("#maxotel_rooms tr.highlight").length>0){$("body, html").scrollTop($("#availability_target").offset().top)
}});
booking[sNSExperiments].notifications={priority:9,init:function(){this.initializeNotifications()
},initElse:function(){this.initializeNotifications()
},initializeNotifications:function(){var f=$("#notificationMenu .alert");
f.css({display:"block",visibility:"hidden"});
var c=$("#formwrap");
var e=c.height();
var d=$(".sidebar_menu_placeholder").height();
if(e<d){c.animate({"min-height":d},{duration:400})
}f.css({display:"none",visibility:"visible"}).css("opacity",0).slideDown(500).animate({opacity:1},{queue:false,duration:750})
}};
booking[sNSExperiments]["UYOOKNIUVAOKdAICFO"]=(function(){var j=$("#destination");
var c=$("select[name=checkin_year_month]").add("select[name=checkout_year_month]");
var g=13;
B.env.track_uefa=false;
var f=["-1456928","-1413751","-1447079","-1449947","-1465172","-1464547","-1442302","-1448468","-1454990","-1473166","-666610"];
function d(l){return function(r,m){var q=new Date();
var w=$(m);
var x=w.find("option");
var p=x.first();
var u=x.filter(":selected").val();
var n="";
if(p.val()=="0"){n=p.get(0).outerHTML
}for(var o=1;
o<=l;
o++){var t=q.getFullYear()+"-"+(q.getMonth()+1);
n+='<option class="b_months" value="'+t+'"'+(u==t?' selected="selected"':"")+">";
n+=booking.formatter.date(q,"month_with_year");
n+="</option>";
q.setMonth(q.getMonth()+1)
}w.html(n)
}
}function h(l){if(l==g){return
}g=l;
var m=new Date();
m.setMonth(m.getMonth()+l-1);
B.calendar2.controller.instances_.forEach(function(n){n.setOptions({endDate:m})
});
c.each(d(l))
}function e(o){var m=o.city_ufi||o.dest_id;
var n=f.indexOf(m)!=-1;
var l=13;
if(n){B.env.track_uefa=true;
l=16
}else{B.env.track_uefa=false
}if(B.track.getVariant("UYOOKNIUVAOKdAICFO")==1){h(l)
}}function k(){var l={dest_id:B.env.b_city_id||B.env.dest_id||""};
e(l);
j.bind("autocompleteselect",function(m,n){if(n&&n.item){e(n.item)
}});
c.click(function(m){if(B.env.track_uefa){B.track.exp("UYOOKNIUVAOKdAICFO")
}})
}return{init:k,initElse:k}
})();
booking[sNSExperiments]["PVJWcRARe"]={init:function(){var e=$(".search_header_bar"),d=$("#searchBarAdvancedOptions"),c=$(".search_header_bar #b_searchbox_errors");
if(!e.length){return
}$(".search_icon").click(function(f){f.stopPropagation();
d.toggle()
});
$(document).click(function(f){if(!d.is(f.target)&&d.has(f.target).length===0){d.hide();
c.hide()
}});
B.eventEmitter.bind(B.Search.Events.DATE_INVALID,function(f,g){d.show()
});
$("#b2indexPage #destination").focus(function(){B.track.custom_goal("PVJWcRARe",1)
});
$("body.has_search_bar .search_icon").click(function(){B.track.custom_goal("PVJWcRARe",2)
})
}};
B[sNSStartup]["search_summary_block"]={init:function(){function c(d){var e=$("#searchboxInc");
e.find(".search_summary_block").hide();
e.find(".original_search_form").removeClass("original_search_form_hidden");
d.preventDefault()
}$(".search_summary_toggle_button").click(c);
$(".sb-summary-block-item, .sb-summary-block__submit").click(function(d){d.preventDefault();
$(".b-searchbox").removeClass("b-searchbox_summary")
})
}};
booking[sNSStartup].SecretDeals={priority:8,init:function(){var d=this;
if(!$("#secretdeals-bg1").length){return false
}$(window).bind("scroll",function(f){d.parallaxScroll()
});
$("a.section1").click(function(){$("html, body").animate({scrollTop:0},1000,function(){d.parallaxScroll()
});
return false
});
$("a.section2").click(function(){$("html, body").animate({scrollTop:$("#section2").offset().top},1000,function(){d.parallaxScroll()
});
return false
});
$("a.section3").click(function(){$("html, body").animate({scrollTop:$("#section3").offset().top},1000,function(){d.parallaxScroll()
});
return false
});
$("a.section4").click(function(){$("html, body").animate({scrollTop:$("#section4").offset().top},1000,function(){d.parallaxScroll()
});
return false
});
$("nav#primary a").hover(function(){$(this).prev("h1").show()
},function(){$(this).prev("h1").hide()
});
var c=$(".sc_navigator");
$(window).scroll(function(){var e=$(window).scrollTop();
if(e<=900){d.removeActiveClass();
$("a#sd_nr1").addClass("active")
}else{if(e>900&&e<1750){d.removeActiveClass();
$("a#sd_nr2").addClass("active")
}else{if(e>1751&&e<2500){d.removeActiveClass();
$("a#sd_nr3").addClass("active")
}else{d.removeActiveClass();
$("a#sd_nr4").addClass("active")
}}}})
},removeActiveClass:function(){$(".sc_navigator a").each(function(){$(this).removeClass("active")
})
},parallaxScroll:function(){var c=$(window).scrollTop();
$("#secretdeals-bg1").css("top",(0-(c*0.25))+"px");
$("#secretdeals-bg2").css("top",(0-(c*0.5))+"px");
$("#secretdeals-bg3").css("top",(0-(c*0.75))+"px");
$("#secretdeals-bg4").css("top",(0-(c*0.3))+"px")
}};
if(B.env.b_action==="index"){if($("#ed-wrapper").length>0){booking[sNSExperiments]["IZVJPVZMYCOKNIUAFCSDWLYScEUC"]={init:function(){var d=$("#ed-pagination");
var k=$("#ed-prevpage");
var e=$("#ed-nextpage");
var g=$("#ed-cpagenum");
var l=$("#ed-tpagenum");
var f=$(".ed-list-wrapper.ed-cgrp");
var c=$(".ed-list-wrapper");
var j=c.length;
if(j>1){c.each(function(m){if($(this).hasClass("ed-cgrp")){g.text(m+1)
}});
c.eq(j-1).addClass("ed-lgrp");
d.show();
l.text(j);
function h(){$this=$(this);
if($this.attr("id")==="ed-prevpage"&&!f.hasClass("ed-fgrp")){f.removeClass("ed-cgrp").hide().prev().addClass("ed-cgrp").show();
g.text(parseInt(g.text())-1)
}else{if($this.attr("id")==="ed-nextpage"&&!f.hasClass("ed-lgrp")){f.removeClass("ed-cgrp").hide().next().addClass("ed-cgrp").show();
g.text(parseInt(g.text())+1)
}}f=$(".ed-list-wrapper.ed-cgrp");
k.removeClass("ed-disclick");
e.removeClass("ed-disclick");
if(f.hasClass("ed-fgrp")){k.addClass("ed-disclick")
}else{if(f.hasClass("ed-lgrp")){e.addClass("ed-disclick")
}}}k.click(h);
e.click(h)
}}}
}}if($(".popular_hotels-wrp").length>0){booking[sNSExperiments]["IZAFCSDWLCUC"]={init:function(){$(".popular_hotels-wrp").delegate(".popular_hotels-content","mouseenter",function(){var c=$(this);
c.parent(".popular_hotels-content-wrp").removeClass("zind-1").addClass("zind-10");
c.removeClass("hei-40 col-grey73").addClass("baccol-grey32a08 col-white pad-15")
});
$(".popular_hotels-wrp").delegate(".popular_hotels-content","mouseleave",function(){var c=$(this);
c.parent(".popular_hotels-content-wrp").removeClass("zind-10").addClass("zind-1");
c.removeClass("baccol-grey32a08 col-white pad-15").addClass("hei-40 col-grey73")
})
}}
}B[sNSExperiments]["aKFEIcYNJPbHDbMHaZLT"]=(function(d){function c(){d.track.onMouseover("#removeAllHistory").exp("aKFEIcYNJPbHDbMHaZLT")
}return{init:c,initElse:c}
})(window.booking);
booking[sNSStartup].survey={priority:9,run:function(){var d=$("#survey").attr("surveyurl");
if(d){b_survey_url=d;
booking.env.survey_key=$("#survey").attr("surveykey");
booking.env.surveytracklink="/outgoinglink/survey/"+booking.env.survey_key
}if(typeof b_survey_url!="undefined"&&b_survey_url){var c=$("#conf_survey,#survey,#conf_survey_bottom"),e=c.find("button"),h="/survey?";
var g=function(){if(booking.env.b_action==="hotel"){booking[sNSStartup].bookingSticker.update()
}};
var f=function(k){if(booking.env.showRevdSurvey2015Q4){var l=$(k.target).val()
}else{var l=$(this).val()
}if(l){if(booking[sNSStartup].fix_move_book_header_and_button){booking[sNSStartup].fix_move_book_header_and_button.surveyFixed=false
}if(l=="accept"||l=="Yes"||l=="yes"||l=="Ja, ik doe mee"||l=="Okay"){var j=window.open(b_survey_url,"booking_survey_window")
}else{c.hide("normal",g)
}$.get(h+"decision="+l+"&survey_key="+booking.env.survey_key,{},function(m){c.hide("normal",function(){c.remove();
g()
})
})
}return false
};
if(booking.env.showRevdSurvey2015Q4){booking.events.on("REVIEWS:fetched",function(){c.addClass("show")
});
c.find("button").live("click",f)
}else{c.fadeIn("normal",g);
c.find("button").click(f)
}}},init:function(){this.run();
if(B.env.b_run_sr_ajax){var c=B.require("searchresults/events");
c.on(c.UI_RESULTS_UPDATED,function(){this.run()
}.bind(this))
}}};
(function(d,c){if(booking.env.b_is_tdot_traffic&&booking.env.b_ncexp){}else{return
}var g=$(c),f=$(d),e=booking.env.b_ncexp===1?"cta-loading_progress":"cta-loading_spinner";
g.delegate(".cta-touch","touchstart touchend touchmove",function(j){var h=j.type;
$(this)[(h=="touchstart"?"addClass":"removeClass")]("cta-touch_touched")
});
g.delegate("a.cta[data-component-rel]","click",function(h){$(this).addClass("cta-loading")
});
g.delegate(".cta-loading","click",function(){var h=$(this);
h.removeClass(e);
setTimeout(function(){h.addClass(e)
},60)
});
g.delegate("form","submit",function(j){var h=booking.env.b_action==="book"?$('.cta-touch[data-component-rel="book"]'):$(this).find(".cta-touch");
if(h.length){h.addClass("cta-loading")
}});
f.bind("load pageshow reset popstate",function(){$(".cta-touch").removeClass("cta-loading")
})
})(window,document);
B.run("PcVBcTaNFMGUbAXKAFXbWC").onLoad(function(){if($.cookie("tfl_signup_notification_prompt")){return
}$.cookie("tfl_signup_notification_prompt",1);
if(B.track.getVariant("PcVBcTaNFMGUbAXKAFXbWC")){setTimeout(function(){var c=$(".js-uc-notifications .user_center_popover");
B[sNSExperiments].user_center_bar.positionPopover(c,{});
c.css({opacity:0}).animate({opacity:1},1000)
},2000);
$(".js-uc-notification a, .uc-notifications__footer a").click(function(){B.track.stage("PcVBcTaNFMGUbAXKAFXbWC",1)
})
}});
booking[sNSExperiments]["ZeZbObSAeOESJVWKMKe"]={init:function(){$(".wl_create_form").delegate(".wl-dropdown-toggle","click",function(){$(this).toggleClass("collapsed");
$(this).parents(".wl-btn-group-wrap").next(".wl-dropdown-menu").slideToggle("fast")
});
$(".wl_create_form").delegate(".wl-dropdown-menu-a","click",function(c){c.preventDefault();
var d=$(this);
$(".wl-privacy").val(this.rel);
d.parents("form:first").submit();
if($(".wl_nameList_input").val()!=""){$("#wl_create_shared_or_personal_list_modal").parent().css("opacity",0.5)
}})
},initElse:function(){}};
(function(){var d="adfaPbPELXVFfIbYO";
function c(){booking.eventEmitter.bind("uc_popover_showed",function(){booking.track.exp(d)
})
}booking[sNSExperiments][d]={init:c,initElse:c}
})();
booking[sNSExperiments]["beODVAfSPSMTafUcO"]={e_hash:"beODVAfSPSMTafUcO",$ul:false,setFocusAndOrTrack:function(){var c=this;
booking.track.exp(this.e_hash);
if(booking.track.getVariant(c.e_hash)){setTimeout(function(){c.$ul.find(".user_access_email:visible:first").select()
},50)
}},setFocusSignIn:function(){var c=this;
c.$ul.find(".signin_cta").add(".user_access_section_trigger").click(function(){c.setFocusAndOrTrack()
})
},setFocusSignUp:function(){var c=this;
c.$ul.find(".user_center_nav").find(".user_access_signup_menu_tab").click(function(){c.setFocusAndOrTrack()
})
},init:function(){this.$ul=$(".user_center_nav");
this.setFocusSignIn();
this.setFocusSignUp()
},initElse:function(){this.init()
}};
booking[sNSExperiments].user_center_bar={priority:9,init:function(){this.initializeUserCenterBar();
booking.events.emit("user_center_bar:init")
},initializeUserCenterBar:function(){var f=this,c,l,p,g;
var n=[];
n=n.concat([{className:"uc_language",offset:0}]);
booking.browserStorageHandler.deletePermanentValue("wl_fv",true);
if(booking.env.showFavesToWishlistNotice&&!booking.browserStorageHandler.getPermanentValue("wl_fv2",true)){var q=$("#top .uc_wishlists");
var o=q.width()/2;
var r=$("#faves_to_wishlist_notice");
var j=r.width()/2;
var k=j-o;
var t=j-8;
k=-Math.round(k)+"px";
t=t+"px";
if(booking.env.rtl&&booking.track.getVariant("bcIHKTdZXHbFC")){r.css("right",k);
$("#faves_to_wishlist_notice .uc_top_arrow",q).css("right",t)
}else{r.css("left",k);
$("#faves_to_wishlist_notice .uc_top_arrow",q).css("left",t)
}r.show();
$(".close_popover").live("click",function(){$(".popover_notice").remove()
});
$("#faves_to_wishlist_notice_link").live("click",function(){$(".popover_notice").remove();
$("#uc_wishlists_trigger").click()
});
booking.browserStorageHandler.addPermanentValue("wl_fv2",1,true)
}else{$(".user_imported_faves_new_badge").hide()
}var m=false;
$(".popover_trigger").click(function(A){var z=$(this),w=z.parent(),u=(z.parent().hasClass("logged_in_user"));
if(z.hasClass("js-disable-popover")){return
}if($(A.target).closest(".user_center_option").length){m=true
}if(A&&A.currentTarget&&$(A.currentTarget).hasClass("profile_menu_trigger")){B.track.exp("AaSDIIHGZeBKDPeYAcMeTC");
if(booking.eventEmitter){booking.eventEmitter.trigger("user_access_menu_open")
}}if(u){booking.track.exp("BBbeIHHZAXXe")
}B.track.stage("TAFYSSIBbYUBBNfKe",1);
A.preventDefault();
var y={};
for(var x=n.length-1;
x>=0;
x--){var C=z.parent().hasClass(n[x].className);
if(C){y.offset=n[x].offset;
break
}}f.positionPopover(z,y)
});
$(document).ready(function(){var u=$(".user_center_option");
u.mouseenter(function(){m=true
});
u.mouseleave(function(){m=false
});
$("body").mousedown(function(){if(!m){$(".user_center_popover").hide();
booking.eventEmitter.trigger("uc_popover_hidden");
if(booking.env.showFavesToWishlistNotice){$(".popover_notice").remove()
}$("li.user_center_option").removeClass("active_option")
}});
if(booking.user.showUserLoginOnLoad||booking.user.showUserLoginOnLoadDSF){$(".signin_cta").click()
}});
var h=false,e=false;
function d(){if(h||e){return
}booking.eventEmitter.trigger("uc_recently_viewed_opened");
e=true;
var u=$(this).attr("data-href");
var w=$(".uc_viewedhotels .hotels_container");
$.ajax({url:u,type:"GET",success:function(x){w.html(x);
h=true;
booking.eventEmitter.trigger("uc_recently_viewed_loaded")
},complete:function(){$(".uc_viewedhotels .ajax_loading").hide();
$(".user_search_header").hide();
if($(".no_listing:visible").length){$(".uc_viewed_hotels .popover_content").addClass("empty_list")
}else{$(".user_search_header").appendTo(".uc_viewedhotels .popover_footer");
$(".user_search_header").show()
}e=false
}})
}$(".uc_viewed_hotels .popover_trigger").click(d);
$(".socnet_mailafriend").live("click",function(){setTimeout(function(){$(".user_center_popover").hide();
if(booking.env.showFavesToWishlistNotice){$(".popover_notice").remove()
}$("li .popover_trigger").removeClass("active_option")
},200)
});
$("#user_form a.remove_hotel").live("click",function(){var w=$(this).attr("href").split("#")[1];
$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:w}});
this.blur();
var u=$(this).parents(".user_search_item").get(0);
var x=u.parentNode;
$(u).hide("slow",function(){if($(".hidden_item",x).length){var y=$(".hidden_item",x).get(0);
$(y).removeClass("hidden_item")
}});
f.removeOneHome(w);
if($("#user_form .user_search_item:visible").length){}else{$(".uc_viewedhotels .popover_footer").hide();
$(".uc_viewed_hotels .popover_content").addClass("empty_list");
$(".user_center_popover .no_listing").show()
}return false
});
$("#user_form a#removeAllHistoryHotel").live("click",function(){f.removeAll($(this).attr("id"));
$(".user_center_popover").hide();
$(".uc_viewed_hotels .popover_content").addClass("empty_list");
$(".user_searches_content").show();
$(".user_searches_content .user_search_item").hide();
$(".user_search_footer").hide();
$("#user_form .uc_viewed_hotels .popover_footer").remove();
$(".uc_viewed_hotels .no_listing").show();
$(".uc-notifications-recently-seen__count").fadeOut();
return false
})
},removeAll:function(d){var e=this;
var c=$("#"+d).parents(".user_searches_content");
if(d=="removeAllHistoryHotel"){$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:-1}});
e.removeAllHome()
}else{booking[sNSStartup].search_history.removeAll(true)
}$("#"+d).blur();
$(".user_search_item",c).each(function(){if($(this).hasClass("no_listing")){$(this).show("slow")
}else{$(this).hide("slow",function(){$(this).remove()
})
}});
$(".user_search_header",c).hide();
$(".user_search_footer",c).hide()
},removeAllHome:function(){$(".user_searches_content").hide()
},removeOneHome:function(c){$(".user_searches_content .remove_hotel").each(function(){var d;
if($(this).attr("href")=="#"+c){d=$(this).parents(".user_search_item");
d.remove()
}})
},positionPopover:function(p,e){$("#faves_to_wishlist_notice").remove();
var n=$(p).parent();
var m=n.width()/2;
var l;
if(typeof e.popover==="string"){l=$(e.popover,n)
}else{l=$(".user_center_popover",n)
}if(n.attr("id")=="current_account"){if(l.length>1||!l.hasClass("uc_genius_tooltip")){l=l.filter(":not(.uc_genius_tooltip)");
$(".uc_genius_tooltip").remove()
}}var j=l.width()/2;
var k=j-m;
var q=j-8;
var o=n.offset().left-$("#bodyconstraint").offset().left,h=$("#bodyconstraint").width(),g=h-(j+m+o),c=o+m-j;
if(g<0&&c>0){k-=g;
q-=g
}else{if(g>0&&c<0){k+=c;
q+=c
}else{if(g<0&&c<0){}}}var f=e&&e.offset;
if(f){k+=f;
q+=f
}l.css("left",-Math.round(k));
if(booking.env.rtl&&booking.track.getVariant("bcIHKTdZXHbFC")){$(".user_center_popover .uc_top_arrow",n).css("right",q)
}else{$(".user_center_popover .uc_top_arrow",n).css("left",q)
}if($(".user_center_popover:visible").length){booking.eventEmitter.trigger("uc_popover_hidden")
}if($(".user_center_popover:visible",n).length){$(".user_center_popover").hide()
}else{var d=n.attr("data-id")||n.attr("id");
$(".user_center_popover").hide();
l.show();
booking.eventEmitter.trigger("uc_popover_showed",{id:d});
if(d==="uc_feedbacklink_box"){B.track.stage("cPJJJGOGaGbZEcYC",2)
}}if($("body.user_center #formwrap #signup_password:visible").length){$("#formwrap #signup_password").css("z-index","99");
$("#formwrap .pwd_strength").css("z-index","99")
}$("#dashboard_search #inout").css("z-index","99")
}};
booking[sNSStartup].top_saved_searches={priority:9,opening_state:0,init:function(){var c=this;
$(".search_tab").click(function(){c.opening_state=1;
c.closeTabs(this);
if(!$(this).hasClass("loadedContent")){c.loadContent($(this))
}return false
})
},showAllNone:function(c){var d=$(".user_search_item",c.parentNode.parentNode);
var e=0;
if($(".hidden_item",c.parentNode.parentNode).length){$(".showLink",c.parentNode.parentNode).hide();
$(".hideLink",c.parentNode.parentNode).show()
}else{$(".showLink",c.parentNode.parentNode).show();
$(".hideLink",c.parentNode.parentNode).hide()
}$(d).each(function(){e++;
if(e>6){if($(this).hasClass("hidden_item")){$(this).removeClass("hidden_item")
}else{$(this).addClass("hidden_item")
}}})
},closeTabs:function(d){var e=this;
var c=d?$(d).attr("id"):"";
c=c.replace("tab","foldout");
$(".search_foldout").each(function(){if($(this).hasClass("closed_content")){if($(this).attr("id")==c){$(this).removeClass("closed_content")
}}else{$(this).addClass("closed_content")
}});
if(c===""){this.opening_state=0
}else{setTimeout(function(){e.opening_state=2
},100)
}},loadContent:function(h){var g=this;
var c=$(h).attr("data-href");
if(c.indexOf("http://booking.com")!=-1){c=c.replace("http://booking.com","http://www.booking.com")
}if($("#current_account").width()>$(h).width()){var f=$("#current_account").width()+458+15
}else{var f=$(h).width()+458+15
}if(booking.env.b_is_ie7){f=f+102
}var e=$("#current_account_foldout").offset().top;
var j=$(h).attr("id");
var d="#"+j+"_content";
$(h).addClass("loadedContent");
if(j=="search_tab_wishlists"){}else{$.ajax({url:c,type:"GET",success:function(k){$(d).html(k);
$(d).css({left:"-"+f+"px",top:e+"px"});
setTimeout(function(){g.addRemoveClicks(j)
},200)
}})
}},addRemoveClicks:function(d){var c=this;
$("#removeAllHistoryHotel, #removeAllHistorySearch").click(function(){c.removeAll($(this).attr("id"));
return false
});
if(d=="search_tab_viewed"){$("#search_tab_viewed_content a.remove_hotel").click(function(){var f=$(this).attr("href").split("#")[1];
$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:f}});
booking[sNSStartup].viewed_hotels.cleanupHistoryList(this);
this.blur();
var e=$(this).parents(".user_search_item").get(0);
var g=e.parentNode;
$(e).hide("slow",function(){$(this).remove();
if($(".hidden_item",g).length){var h=$(".hidden_item",g).get(0);
$(h).removeClass("hidden_item")
}c.reOddEven(g)
});
c.removeOneHome(f);
if($(".user_search_item",g).length==1){$(".user_search_item",g).show()
}return false
});
$("#search_tab_viewed_content .user_search_show").click(function(e){c.showAllNone(this);
return false
})
}if(d=="search_tab_searched"){$("#search_tab_searched_content a.remove_search").click(function(){var l=$(this).attr("href").split("#")[1];
var h=l.split(";");
var j=h[0];
var f=h[1];
var k=h[2];
$.ajax({url:"/search_history",type:"DELETE",data:{type:j,value:f,epoch:k}});
booking[sNSStartup].search_history.cleanupHistoryList(this);
this.blur();
var e=$(this).parents(".user_search_item").get(0);
var g=e.parentNode;
$(e).hide("slow",function(){$(this).remove();
if($(".hidden_item",g).length){var m=$(".hidden_item",g).get(0);
$(m).removeClass("hidden_item")
}c.reOddEven(g)
});
return false
});
$("#search_tab_searched_content .user_search_show").click(function(e){c.showAllNone(this);
return false
})
}if(d=="search_tab_booked"){}if(d=="search_tab_favourite"){$("#search_tab_favourite_content").find(".user_search_show").remove();
$("#search_tab_favourite_content a.remove_hotel").click(function(){var l=$(this).attr("href").split("#")[1];
var h=l.split(";");
var j=h[0];
var f=h[1];
var k=h[2];
$.ajax({url:"/favorites/delete",type:"DELETE",data:{hotel_id:j}});
this.blur();
var e=$(this).parents(".user_search_item").get(0);
var g=e.parentNode;
$(e).hide("slow",function(){$(this).remove();
if($(".hidden_item",g).length){var m=$(".hidden_item",g).get(0);
$(m).removeClass("hidden_item")
}c.reOddEven(g)
});
return false
});
$("#search_tab_searched_content .user_search_show").click(function(e){c.showAllNone(this);
return false
})
}},removeAll:function(d){var e=this;
var c=$("#"+d).parents(".user_searches_content");
if(d=="removeAllHistoryHotel"){$.ajax({url:"/hotel_history",type:"DELETE",data:{hotel_id:-1}});
e.removeAllHome();
booking[sNSStartup].viewed_hotels.cleanupHistoryList($("#"+d))
}else{booking[sNSStartup].search_history.removeAll(true)
}$("#"+d).blur();
$(".user_search_item",c).each(function(){if($(this).hasClass("no_listing")){$(this).show("slow")
}else{$(this).hide("slow",function(){$(this).remove()
})
}});
$(".user_search_header",c).hide();
$(".user_search_footer",c).hide()
},removeAllHome:function(){$("#LastViewedHotels").hide()
},removeOneHome:function(c){$("#LastViewedHotels .remove_hotel").each(function(){if($(this).attr("href")=="#"+c){$(this.parentNode).hide()
}})
},reOddEven:function(e){var d=0;
if($(".user_search_item",e).length>1){$(".user_search_item",e).each(function(){if(!$(this).hasClass("no_listing")){if(d==0){if($(this).hasClass("even")){$(this).removeClass("even")
}d=1
}else{if(!$(this).hasClass("even")){$(this).addClass("even")
}d=0
}}})
}else{if($(".no_listing",e).length){var c=$(".no_listing",e).get(0);
$(c).show();
$(".user_search_header",e).hide();
$(".user_search_footer",e).hide()
}}}};
booking[sNSExperiments]["TACaGGadffNCFPQORHe"]=(function(){function c(){if(!booking.env.b_user_auth_level_is_none){return
}$(".js-uc-option--account").click(function(){booking.track.stage("TACaGGadffNCFPQORHe",1)
});
booking.command.bind("show-auth-lightbox",function(){booking.track.stage("TACaGGadffNCFPQORHe",1)
});
booking.eventEmitter.bind("user_access_menu_open",function(){booking.track.stage("TACaGGadffNCFPQORHe",1)
});
$("#login_redesign").click(function(){booking.track.stage("TACaGGadffNCFPQORHe",1)
})
}return{init:c,initElse:c}
})();
booking[sNSExperiments]["beKMDNdEPORACMSCMSGEcYJNKe"]={priority:9,init:function(){var d=$(".mail_friend_box");
var c=$(".wl_field_wrapper:first",d);
var g=$("#wishlist_modal");
var e=$(".wl_field_and_remove_wrapper:first").clone();
var h=function(){return e.clone()
};
var f=$(".wl_share_list_toggle");
$(d).delegate(".wl_extra_email_field","click",function(){if($(".wl_field_wrapper",d).length==8){$(".wl_extra_email_field").addClass("disabled")
}else{var j=$(".wl_field_wrapper",d).length+1;
c.clone().insertAfter($(".wl_field_wrapper:last",d));
$(".wl_field_wrapper:last .maf_input",d).addClass("input-wlRemoveBtnSpace").attr("value","").attr("name","to"+j).attr("id","to"+j);
$(".wl_field_wrapper:last .wl_btn_remove_email_field",d).show()
}});
$(d).delegate(".wl_btn_remove_email_field","click",function(){$(this).parent().remove();
if($(".wl_field_wrapper",d).length<4){$(".wl_extra_email_field").removeClass("disabled")
}});
$(d).delegate(".wl_add_message_field","click",function(){$(".wl_add_message_input_field").toggle()
});
$(".wl_email_share_trigger").click(function(){booking[sNSStartup].lightbox.show($("#wl_email_invite_modal"),{customWrapperClassName:"wl_create_modal_wrapper"})
});
$(".wl_invite_share_trigger").click(function(){booking[sNSStartup].lightbox.show($("#wl_invite_modal"),{customWrapperClassName:"wl_create_modal_wrapper"})
});
if(booking.track.getVariant("beKMDNdEPORACMSCMSGEHT")){$(".wl_add_new_trigger").click(function(){booking[sNSStartup].lightbox.show($("#wl_create_shared_or_personal_list_modal"),{customWrapperClassName:"wl_create_modal_wrapper"})
})
}g.find(".toggler").click(function(){$(this).closest("div").find(".toggable").slideDown();
$(this).remove();
return false
});
$("#shareCheck").click(function(){if($(this).is(":checked")){$(".wl_share_list_with_others").show()
}else{$(".wl_share_list_with_others").hide()
}});
$(f).delegate(".wl_create_extra_email_field","click",function(){if($(".wl_field_and_remove_wrapper",f).length==4){$(".wl_create_extra_email_field").addClass("disabled")
}else{var j=$(".wl_field_and_remove_wrapper",f).length+1;
h().appendTo($(".js-wl-emails-wrapper",f));
$(".wl_field_and_remove_wrapper:last .maf_input",f).addClass("input-wlRemoveBtnSpace").attr("value","").attr("name","to"+j).attr("id","to"+j);
$(".wl_field_and_remove_wrapper:last .wl_btn_remove_email_field",f).show()
}});
$(f).delegate(".wl_btn_remove_email_field","click",function(){$(this).parent().remove();
if($(".wl_field_and_remove_wrapper",f).length<4){$(".wl_create_extra_email_field").removeClass("disabled")
}})
}};
(function(d,c){c("#searchboxInc .b-date-selector").hover(function(){d.track.stage("PVSfZIWIVScNKNMC",1)
})
}(window.booking,window.jQuery));
booking[sNSExperiments]["eDUbKSPdRUZEGeCaPRXe"]=(function(f,d){var e="eDUbKSPdRUZEGeCaPRXe";
function c(){var g=Number(d.cookie(e))||0;
var h=setInterval(function(){var j=d.cookie(e)||0;
if(g<j){g=j;
f.track.stage(e,j)
}if(j>=5){clearInterval(h);
d.cookie(e,"",{expires:7,path:"/",domain:".booking.com"})
}},10000)
}return{init:c}
}(booking,jQuery));
B.when({events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PVHDEFRYEQHVQAYO";
e.on("beforeajax",function(f,h){var j=d.track("PVdIYROdVaC");
if(j===0){var g=d.track(c);
d.stage(c,1);
if(g){h.e_n=1
}}})
});
B.when({events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PVdXJTXRTRe";
e.on("beforeajax",function(f,h){var j=d.track("PVdIYROdVaC");
if(j===0){var g=d.track(c);
if(g){h.e_acronyms=1
}}});
e.on("afterajax",function(f,h){var g=d.track("PVdIYROdVaC");
if(g===0&&h&&h.__deb__&&(h.__deb__.s&16)==16){d.stage(c,1);
d.stage(c,2)
}})
});
B.when({events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PARTQSIHWYHWKKe";
e.on("beforeajax",function(f,h){var g=d.track(c);
if(g){h.e_boost=1
}})
});
B.when({condition:B.env.b_site_type_id==1,events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PAWVYZEOTOCaHWe";
e.on("beforeajax",function(f,h){var g=d.track(c);
if(g){h.e_dpc=g
}});
e.on("afterajax",function(f,g){if(g&&(g.__first_result_is_country_dom_popular_city__||g.__first_result_is_region_dom_popular_city__)){d.stage(c,1)
}})
});
B.when({condition:B.env.b_site_type_id==1,events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PVEZIfPFHBUBMWWC";
e.on("beforeajax",function(f,h){var g=d.track(c);
if(g){h.e_ndpc=g
}});
e.on("afterajax",function(f,g){if(g&&(g.__first_result_is_country_no_dom_popular_city__||g.__first_result_is_region_no_dom_popular_city__)){d.stage(c,1)
}})
});
B.when({condition:B.env.b_site_type_id==1,events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PVdIZKZPHcNVBUKcaZdFOLRe";
e.on("beforeajax",function(f,h){var g=d.track(c);
h.e_pdbd=g
});
e.on("afterajax",function(f,h){var g=d.track(c);
if(g&&h&&h.__hit_new_model_badge__){d.stage(c,1)
}})
});
B.when({condition:B.env.b_site_type_id==1&&B.env.b_lang_for_url.match(/^en/),events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PAWdLYVJXIJdJQSVWe";
e.on("beforeajax",function(f,h){var g=d.track(c);
if(!h.hasOwnProperty("v_out")){h.v_out=g
}});
e.on("afterajax",function(f,h){var g=d.track(c);
if(g&&h&&h.__suggestions__){if(h.__suggestions__.has_results){d.stage(c,1)
}}})
});
B.when({condition:B.env.b_site_type_id==1,events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PVcLcDODAKWUMKKe";
e.on("beforeajax",function(f,h){var g=d.track(c);
if(g){h.e_hact=g
}});
e.on("afterajax",function(f,h){var g=d.track(c);
if(g&&h&&h.theme){d.stage(c,1)
}})
});
B.when({condition:B.env.b_site_type_id==3,events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PADPQfQMTMGCCYEIC";
e.on("beforeajax",function(f,h){var g=d.track(c);
if(g){h.e_hact=g
}});
e.on("afterajax",function(f,h){var g=d.track(c);
if(g&&h&&h.theme){d.stage(c,1)
}})
});
B.when({condition:B.env.b_site_type_id==2,events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PVBEcLcDODAKWUMKKe";
e.on("beforeajax",function(f,h){var g=d.track(c);
if(g){h.e_hact=g
}});
e.on("afterajax",function(f,h){var g=d.track(c);
if(g&&h&&h.theme){d.stage(c,1)
}})
});
B.when({events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PAWSUKaVeDdEAZLbMKXe";
e.on("beforeajax",function(f,h){var j=d.track("PVdIYROdVaC");
if(j===0){var g=d.track(c);
if(g){h.e_arabic=g
}}});
e.on("afterajax",function(f,j){var h=d.track("PVdIYROdVaC");
if(h===0){var g=d.track(c);
if(g&&j&&j.__deb__&&(j.__deb__.s&32)==32){d.stage(c,1)
}}})
});
B.when({condition:B.env.b_site_type_id==1&&B.env.b_action=="index",events:["ready"]}).require(["et","search/destination/service-booking"],function(d,e){var c="PAcbdQNZCYEIUC";
e.on("beforeajax",function(f,h){var g=d.track(c);
if(g){h.e_brick_themes=g
}});
e.on("afterajax",function(f,g){if(g&&g.theme){d.stage(c,1)
}})
});
booking[sNSExperiments]["PVAYZQVceWTNOaEVC"]={init:function(){var c=$(".da_tab_bar");
var g=c.find(".da_tab");
var d=c.find(".all_tab");
var f=0;
if(c.length<1){return
}var e=$(".disam-single-result").first().data("type");
g.each(function(){type=$(this).data("tab");
type_count=$(".filter_type_"+type).length;
f=f+type_count;
if(type!="all"){if($("body").hasClass("lang_is_rtl")){$(this).prepend("<span class='type_count'>("+type_count+")</span>")
}else{$(this).append("<span class='type_count'>("+type_count+")</span>")
}}if(type_count==0&&type!="all"){$(this).hide()
}});
d.append(" <span class='type_count'>("+f+")<span>");
g.click(function(){g.removeClass("active");
$(this).addClass("active");
type=$(this).data("tab");
if(type=="all"){$(".disam-single-result").show()
}else{$(".disam-single-result").hide();
$(".filter_type_"+type).show()
}B.track.custom_goal("PVAYZQVceWTNOaEVC",1)
});
g.each(function(){if($(this).data("tab")==e){$(this).click()
}});
c.css("visibility","visible")
}};
booking[sNSExperiments]["PVSfZTOWUHRQMUO"]={addTracking:function(){$("#frm *").one("focus",function(){B.track.stage("PVSfZTOWUHRQMUO",1)
})
},removeUltraFocus:function(){$("body").removeClass("has_ultra_focus")
},init:function(){this.addTracking();
var c=$("#frm *");
c.bind("focus",function(){if(!$("body").hasClass("has_ultra_focus")){$("body").addClass("has_ultra_focus")
}});
c.bind("blur",function(){if($("body").hasClass("has_ultra_focus")){$("body").removeClass("has_ultra_focus")
}})
},initElse:function(){this.addTracking()
}};
(function(h,d){var e=false;
var k=function(q,r,u){c();
if(!u){return
}d.track.stage(q,9);
var t={city:[{selector:".lp_bold_date_picker_wrapper",newPage:false,stage:1},{selector:".lp_bold_date_picker_wrapper .lp_bold_date_picker_select",newPage:false,stage:1},{selector:".lp_bold_date_picker_wrapper .lp_bold_date_picker_btn",newPage:true,stage:1},{selector:"#preferred-filters-tag-cloud a",newPage:true,stage:2},{selector:".lp-upcoming-date-list a",newPage:true,stage:3},{selector:".bbt-lp-banner",newPage:true,stage:4},{selector:".lp_city_follow_block",newPage:false,stage:4},{selector:".static_map",newPage:false,stage:5},{selector:".lp_promotion_cards_list_child, .lp_promotion_cards_list_child a",newPage:false,stage:6},{selector:".consolidated-tabs a",newPage:true,stage:6},{selector:".dsf-highlighted-question-answer a",newPage:true,stage:1,options:{customGoal:true}},{selector:"#activity_stream_box",newPage:true,stage:7},{selector:".rec a",newPage:true,stage:2,options:{customGoal:true}},{selector:".reviews-lp-subcountry  a",newPage:true,stage:8},{selector:".cr_hotels  a",newPage:false,stage:8},{selector:".in-and-around a",newPage:false,stage:8},{selector:".in-and-around .ia_tab_btn",newPage:false,stage:8}],index:[{selector:"#searchboxInc",newPage:false,stage:1},{selector:"#home_featured_destinations a",newPage:true,stage:2},{selector:"#activity_stream_box",newPage:true,stage:3},{selector:"#uspsbox a",newPage:false,stage:4},{selector:"#uspsbox #usp_app a",newPage:true,stage:4},{selector:"#uspsbox #usp_mypage a",newPage:true,stage:4},{selector:"#popularDestinations a",newPage:true,stage:5},{selector:".in-and-around a",newPage:true,stage:6},{selector:".in-and-around .ia_tab_btn",newPage:false,stage:6},{selector:".dcbi-countries a",newPage:false,stage:7}],"landmark|district":[{selector:"#searchboxInc",newPage:false,stage:1},{selector:"#searchboxInc button",newPage:true,stage:1},{selector:".lp_bold_date_picker_wrapper",newPage:false,stage:1},{selector:".lp_bold_date_picker_wrapper .lp_bold_date_picker_select",newPage:false,stage:1},{selector:".lp_bold_date_picker_wrapper .lp_bold_date_picker_btn",newPage:true,stage:1},{selector:".lp_big_hotel_name_highlighted_holder",newPage:false,stage:2},{selector:"#weeklyEmailLink",newPage:false,stage:3},{selector:".static_map",newPage:false,stage:4},{selector:".lp_promotion_cards_list_child, .lp_promotion_cards_list_child a",newPage:false,stage:5},{selector:".in-and-around a",newPage:false,stage:6},{selector:".in-and-around .ia_tab_btn",newPage:false,stage:6}]};
var p=t[r],m=p?p.length:0;
for(var n=0;
n<m;
n++){var o=p[n];
h(o.selector).bindLPTrackOnClick(q,o.newPage,o.stage,o.options||{})
}};
function c(){if(e){return
}var r=d.browserStorageHandler,q,m,n,o;
e=true;
try{q=JSON.parse(r.getPermanentValue("trackLaterEvents"))||null
}catch(p){}r.deletePermanentValue("trackLaterEvents");
if(q){m=q.length;
for(o=0;
o<m;
o++){n=q[o];
if(n.cg){d.track.custom_goal(n.hash,n.stage)
}else{d.track.stage(n.hash,n.stage)
}}}}h.fn.bindFirst=function(){var n=Array.prototype.slice.call(arguments);
if(n.length>1){h.fn.bind.apply(this,arguments);
m.call(this,n[0]);
return this
}function m(o){var r=o.split(".")[0],q=typeof h._data==="function"?h._data(this,"events"):h(this).data("events"),p;
if(q){p=q[r];
p&&p.length>1&&p.unshift(p.pop())
}}};
h.fn.bindLPTrackOnClick=function(){if(typeof JSON==="undefined"){return this
}var u=Array.prototype.slice.call(arguments),r=u.length,o=u[0],m=!!u[1],t=u[2],w=u[3]||{},p,n,q=d.browserStorageHandler;
if(r<2){return this
}h(this).each(function(){var x=h(this);
x.bindFirst("click.lpta",function(z){if(!w.exclude||(typeof w.exclude==="function"&&!w.exclude.call(this,z))){if(m){try{n=JSON.parse(q.getPermanentValue("trackLaterEvents"))||[]
}catch(z){n=[]
}var y={hash:o,stage:t};
if(w&&w.customGoal){y.cg=1
}n.push(y);
q.addPermanentValue("trackLaterEvents",JSON.stringify(n))
}else{if(w&&w.customGoal){d.track.custom_goal(o,t)
}else{d.track.stage(o,t)
}}}})
});
return this
};
var f=function(m,n,o){if(o){d.track.stage(m,9)
}c()
};
var l={city:"fESOVdCbeLEae","landmark|district":"fESOVdCbeQeHHMO",index:"fESOVdCbeLDEZRae"};
var j={city:d.env.b_action=="city"&&(!d.env.b_ppc_theme||d.env.b_ppc_theme==="0")&&(d.env.b_bookings_owned&&d.env.b_ppc_theme!=="0"),"landmark|district":(d.env.b_action=="district"||d.env.b_action=="landmark")&&(!d.env.b_ppc_theme||d.env.b_ppc_theme==="0")&&(d.env.b_bookings_owned&&d.env.b_ppc_theme!=="0"),index:d.env.b_action=="index"&&(d.env.b_bookings_owned&&d.env.b_ppc_theme!=="0")};
for(var g in l){booking[sNSExperiments][l[g]]={init:h.proxy(k,this,l[g],g,j[g]),initElse:h.proxy(f,this,l[g],g,j[g])}
}})(jQuery,booking);
if(booking.env.enable_scripts_tracking){booking.env.scripts_tracking.main.run=true
}B.when({events:"ready",experiment:"bLNRXaVYccPJKeIYSYHDQIDPBFO"}).run(function(){$(".js-guest-configuration-wrapper__trigger").click(function(c){c.preventDefault();
B.et.stage("bLNRXaVYccPJKeIYSYHDQIDPBFO",1);
$(".js-guest-configuration-wrapper__summary").addClass("g-hidden");
$(".guest-configuration-select").removeClass("g-hidden")
})
});
(function(e,d){function c(){var f="#b_nav_language,#b_nav_currency,#language_select,#header_currency select";
$(f).bind("touchend",function(){booking.track.custom_goal(d,1)
})
}e[d]={init:c,initElse:c}
}(booking[sNSExperiments],"PYBRRCfACQIYSYHDQIUSBXe"));
B.when({events:"load",experiment:"EKMTOBAWGRcUQAcSWXCeLFSKe"}).require(["et","jquery","squeak"],function(e,d,c){if(d('[id="req_info"]').length>1){c("GCaQadTGJNbHRKecbbRe")
}});
booking[sNSExperiments]["fERXeNRJTBYbBeaPbPELXVC"]=(function(){function e(){var k=$(".uc-notifications-recently-seen__count"),j=null;
if(k.length){$(document).delegate(".uc_viewedhotels .remove_hotel","click",h);
d();
$("#LastViewedHotels .remove_hotel").bindFirst("click",h);
$(".uc_viewed_hotels").click(g);
var f=c();
if(f){document.addEventListener(f.visibilityChange,function(){if(!document[f.hidden]){g()
}},false)
}else{if("onfocusin" in document){document.onfocusin=g
}else{window.onfocus=g
}}g()
}function g(m){if(m&&m.target&&$(m.target).closest(".remove_hotel").length){return
}var l=new Date().getTime();
if(j&&l-j<5000){return
}j=l;
$.getJSON("/hotel_history_counter",function(n){if(n&&typeof n.hotel_history_counter!==undefined){if(!n.hotel_history_counter){k.fadeOut()
}else{k.html(n.hotel_history_counter);
if(!k.is(":visible")){k.css({display:"inline-block",opacity:0}).animate({opacity:1})
}}}})
}function h(){var l=parseInt(k.text(),10);
B.et.customGoal("fERXeNRJTBYbBeaPbPELXVC",1);
if(!l||isNaN(l)||--l<1){k.fadeOut()
}else{k.html(l)
}}}function c(){var g,f;
if(typeof document.hidden!=="undefined"){g="hidden";
f="visibilitychange"
}else{if(typeof document.mozHidden!=="undefined"){g="mozHidden";
f="mozvisibilitychange"
}else{if(typeof document.msHidden!=="undefined"){g="msHidden";
f="msvisibilitychange"
}else{if(typeof document.webkitHidden!=="undefined"){g="webkitHidden";
f="webkitvisibilitychange"
}}}}return g&&f?{hidden:g,visibilityChange:f}:null
}function d(){if(!$.fn.bindFirst){$.fn.bindFirst=function(){var g=Array.prototype.slice.call(arguments);
if(g.length>1){$.fn.bind.apply(this,arguments);
f.call(this,g[0]);
return this
}function f(h){var l=h.split(".")[0],k=typeof $._data==="function"?$._data(this,"events"):$(this).data("events"),j;
if(k){j=k[l];
j&&j.length>1&&j.unshift(j.pop())
}}}
}}return{init:e}
})();
B.when({condition:B.env.b_site_type==="www",hover:".js-lists-header-button",experiment:"PcVBcNGEcOdXNDNYcDHET",stage:1}).run();
B.when({events:"listview:show"}).run(trackIt);
function trackIt(){B.track.stage("PcVBcNGEcOdXNDNYcDHET",2);
if(B.env.auth_level>0){B.track.stage("PcVBcNGEcOdXNDNYcDHET",3)
}else{B.track.stage("PcVBcNGEcOdXNDNYcDHET",4)
}};