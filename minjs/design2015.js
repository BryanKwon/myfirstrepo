$(window).load(function(){}),$(document).ready(function(){adminBar();var e="//cdn.adnetcms.com/lib",t=$("#contact-compact, #contact");t.length&&$.when($.getScript(e+"/parsley/2.0.7/parsley.min.js"),$.Deferred(function(e){$(e.resolve)})).done(function(){t.parsley()}),$("nav > #page-header > ul li").has("ul.sub").hover(function(){$(this).addClass("hover"),$("ul:first",this).css("display","block")},function(){$(this).removeClass("hover"),$("ul:first",this).css("display","none")}),$(".sendgrid-subscription-widget").on("sent",function(){$(this).addClass("loading").append('<i class="uk-icon-spinner uk-icon-spin uk-icon-medium"></i>'),$(this).find("input[type=submit]").attr("disabled","disabled"),$(".sendgrid-subscription-widget").on("success error",function(){$(this).removeClass("loading"),$(this).find("i").remove(),$(this).find("input[type=email]").val(""),$(this).find("input[type=submit]").removeAttr("disabled")})}),$("#projectMap").length&&$("img[usemap]").rwdImageMaps();var i=$("div#page-content");i.length&&i.find("table").not(".exception").each(function(){var e=$(this);e.wrap('<div class="uk-overflow-container" />'),e.addClass("uk-table uk-table-striped")});var t=$("#contact-compact, #contact");t.length&&t.parsley(),$(".fancybox, .fancybox-thumb, .fancybox-iframe, .gallery-page, .ext-video").length>0&&$.when($.getScript(e+"/fancybox/2.1.5/jquery.fancybox.pack.js"),$.getScript(e+"/flowplayer/5.4.6/flowplayer.min.js"),$.Deferred(function(e){$(e.resolve)})).done(function(){var t={openEffect:"fade",closeEffect:"fade",prevEffect:"fade",nextEffect:"fade",prevSpeed:"slow",nextSpeed:"slow",helpers:{title:{type:"inside"}}},i={openEffect:"fade",closeEffect:"fade",prevEffect:"fade",nextEffect:"fade",prevSpeed:"slow",nextSpeed:"slow",mouseWheel:!0,helpers:{title:{type:"inside"},thumbs:{width:100,height:100}},afterLoad:function(){this.title=this.element.data("caption")}},n={type:"iframe",openEffect:"none",closeEffect:"none",prevEffect:"fade",maxWidth:700,maxHeight:595,fitToView:!0,width:"100%",height:"100%",autoSize:!1,closeClick:!1};$("a.fancybox").fancybox(t),$("a.fancybox-flickr").fancybox(i),$("a.fancybox-iframe").fancybox(n),$(".ext-video").fancybox({openEffect:"fade",closeEffect:"fade",type:"iframe",width:800,height:580,scrolling:"no",autoDimensions:!1,fitToView:!1}),$(".video").length>0&&$("a.video").click(function(t){t.preventDefault();var i=$('<div class="video-box"></div>');i.flowplayer(e+"/flowplayer/5.4.6/flowplayer.swf",$(this).attr("href")),$.fancybox({openEffect:"fade",closeEffect:"fade",content:i,width:800,height:580,scrolling:"no",autoDimensions:!1})})});var n=$(".uk-tab"),a=($("#item-sort"),$(".tab-container"));0==n.children().length?n.hide():$.when($.getScript("//cdnjs.cloudflare.com/ajax/libs/jquery.easytabs/3.2.0/jquery.easytabs.min.js"),$.Deferred(function(e){$(e.resolve)})).done(function(){a.easytabs({animationSpeed:"fast",tabActiveClass:"uk-active",defaultTab:"li#def"}),n.fadeIn(500),$(".item-group").show(300)})});