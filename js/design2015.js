
/* Run functions on window.load */
$(window).load(function() {

});

/* Run functions on document.ready */
$(document).ready(function(){
  /* Admin bar */
  adminBar();

  /* Declare custom path */
  var cdnPath = '//cdn.adnetcms.com/lib';
  var themePath = '/_themes/design2015';

  /* uiKit Modal window, toggler and builder */
  function createUiModal(id,title,url){
    var modalBox = '<div id="modal-' + id + '" class="uk-modal">';
      modalBox  += '<div class="uk-modal-dialog">';
      modalBox  += '<div class="uk-modal-header"><h2>Asanko Gold Inc.</h2></div>';
      modalBox  += '<h3>' + title + '</h3>';
      modalBox  += '<p>Proceed?</p>';
      modalBox  += '<div class="uk-modal-footer">';
      modalBox  += '<p class="uk-text-right"><a href="' + url + '" target="_blank" class="uk-button uk-button-primary uk-button-large">Yes</a> ';
      modalBox  += '<a href="" class="uk-button uk-button-danger uk-button-large uk-modal-close">Cancel</a></p>';
      modalBox  += '</div>';
      modalBox  += '</div>';
      modalBox  += '</div>';
    $('body').append(modalBox);
  }

  /* Form validation */
  var $formID = $('#contact-compact, #contact');
  if ($formID.length){
    $.when(
      $.getScript( cdnPath + "/parsley/2.0.7/parsley.min.js" ),
      $.Deferred(function( deferred ){
        $( deferred.resolve );
      })
    ).done(function(){
      $formID.parsley();
    });
  }

  /* Main navigation */
  $('nav > #page-header > ul li').has('ul.sub').hover(function(){
    $(this).addClass('hover');
    $('ul:first', this).css('display', 'block');
  }, function(){
    $(this).removeClass('hover');
    $('ul:first', this).css('display', 'none');
  });

  /* Subscription form */
  $('.sendgrid-subscription-widget').on('sent', function () {
    $(this).addClass('loading')
           .append('<i class="uk-icon-spinner uk-icon-spin uk-icon-medium"></i>');
    $(this).find('input[type=submit]').attr('disabled', 'disabled');

    $('.sendgrid-subscription-widget').on('success error', function () {
        $(this).removeClass('loading')
        $(this).find('i').remove();
        $(this).find('input[type=email]').val('');
        $(this).find('input[type=submit]').removeAttr('disabled');
    });
  });

  /* responsive image map */
  if($('#projectMap').length) {
    $('img[usemap]').rwdImageMaps();
  }
  
  /* Format tables and lists */
  var mainDiv = $('div#page-content');
  if (mainDiv.length){
    // Convert tables to uikit style table
    mainDiv.find('table').not('.exception').each(function(){
      var table = $(this);
      table.wrap('<div class="uk-overflow-container" />');
      table.addClass('uk-table uk-table-striped');
    });
  }

  /* Form validation */
  var $formID = $('#contact-compact, #contact');
  if ($formID.length){
    $formID.parsley();
  }

  /* FancyBox set up */
  if ($('.fancybox, .fancybox-thumb, .fancybox-iframe, .gallery-page, .ext-video').length > 0){
    $.when(
      $.getScript( cdnPath + "/fancybox/2.1.5/jquery.fancybox.pack.js" ),
      //$.getScript( cdnPath + "/fancybox/2.1.5/helpers/jquery.fancybox-thumbs.js" ),
      $.getScript( cdnPath + "/flowplayer/5.4.6/flowplayer.min.js" ),
      $.Deferred(function( deferred ){
        $( deferred.resolve );
      })
    ).done(function(){
      var fbRegular = {openEffect: 'fade', closeEffect: 'fade', prevEffect: 'fade', nextEffect: 'fade', prevSpeed: 'slow', nextSpeed: 'slow', helpers: {title : {type : 'inside'}}};
      //var fbGallery = {openEffect: 'fade', closeEffect: 'fade', prevEffect: 'fade', nextEffect: 'fade', prevSpeed: 'slow', nextSpeed: 'slow', mouseWheel: true, helpers: {title : {type : 'inside'}, thumbs: {width: 100, height: 100}}};
      var fbFlickr = {openEffect: 'fade', closeEffect: 'fade', prevEffect: 'fade', nextEffect: 'fade', prevSpeed: 'slow', nextSpeed: 'slow', mouseWheel: true, helpers: {title : {type : 'inside'}, thumbs: {width: 100, height: 100}}, afterLoad: function(){this.title = this.element.data('caption')}};
      var fbIFrame = {type: 'iframe', openEffect: 'none', closeEffect: 'none', prevEffect: 'fade', maxWidth: 700, maxHeight: 595, fitToView: true, width: '100%', height: '100%', autoSize: false, closeClick: false};
      $('a.fancybox').fancybox(fbRegular);
      //$('a.fancybox-thumb').fancybox(fbGallery);
      $('a.fancybox-flickr').fancybox(fbFlickr);
      $('a.fancybox-iframe').fancybox(fbIFrame);

      /* Set up external video box */
      $('.ext-video').fancybox({openEffect: 'fade', closeEffect: 'fade', type: 'iframe', width: 800, height: 580, scrolling: 'no', autoDimensions: false, fitToView: false });

      /* Video player: Flowplayer */
      if ($('.video').length > 0){
        $('a.video').click(function(e) {
          e.preventDefault();
          var container = $('<div class="video-box"></div>');
          container.flowplayer( cdnPath + '/flowplayer/5.4.6/flowplayer.swf', $(this).attr('href'));
          $.fancybox({ openEffect: 'fade', closeEffect: 'fade', content: container, width: 800, height: 580, scrolling: 'no', autoDimensions: false });
        });
      }
    });
  }


 /* Tabs
  * Styling: uiKit tab component
  * Logic: easyTabs
  */

  /* Tabs settings */
  var tabs = $('.uk-tab');
  var itemDiv = $('#item-sort');
  var tabContainer = $('.tab-container');

  /* Hide tabs if empty */
  if (tabs.children().length == 0){
    tabs.hide();
  } else {
    $.when(
      $.getScript( "//cdnjs.cloudflare.com/ajax/libs/jquery.easytabs/3.2.0/jquery.easytabs.min.js" ),
      $.Deferred(function( deferred ){
        $( deferred.resolve );
      })
    ).done(function(){
      tabContainer.easytabs({
        animationSpeed: 'fast',
        tabActiveClass: 'uk-active',
        defaultTab: 'li#def'
      });
      tabs.fadeIn(500);
      $('.item-group').show(300);

      /* Stock chart only, select 1 yr chart by default */
      //tabContainer.easytabs('select', '#one_yr');
    });
  }


  
});