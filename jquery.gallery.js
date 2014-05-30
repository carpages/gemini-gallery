/**
 * @fileoverview

A jQuery plugin to quickly build galleries using a modal and carousel.

### Notes
- The gallery is built using a list of images. See example.

 *
 * @namespace jquery.gallery
 * @copyright Carpages.ca 2014
 * @author Matt Rose <matt@mattrose.ca>
 *
 * @requires underscore
 * @requires jquery
 * @requires jquery.boiler
 * @requires jquery.modal
 * @requires jquery.carousel
 * @requires jquery.lazyload
 * @requires jquery.respond
 *
 * @prop {object} templates {@link jquery.gallery#templates}
 *
 * @example
  <html>
    <ul id="js-gallery">
      <li>
        <a href="http://www.placetim.com/200/200/">
          <img src="http://www.placetim.com/200/200/">
        </a>
      </li>
      <li>
        <a href="http://www.placetim.com/250/250/">
          <img src="http://www.placetim.com/250/250/">
        </a>
      </li>
    </ul>
  </html>
 *
 * @example
  $('#js-gallery').gallery();
 */

define([
  'jquery-loader',
  'underscore',
  'jquery.gallery.templates',
  'jquery.boiler',
  'jquery.modal',
  'jquery.carousel',
  'jquery.lazyload',
  'jquery.respond'
], function($, _, T){

  $.boiler('gallery', {
    defaults: {
      /**
       * Precompiled Handlebar templates to replace default. Expecting 'gallery'
       * and 'modal'
       * @name jquery.gallery#templates
       * @type object
       * @default {}
       */
      templates: {}
    },

    data: ['title', 'description'],

    init: function(){
      var plugin = this;

      //Extend the templates
      plugin.T = $.extend(T, plugin.settings.templates);

      //Grab images
      plugin.imgs = _.map(plugin.$el.find('> li > a'), function(anchor, i){
        var $anchor = $(anchor);

        $anchor.click(function(e){
          e.preventDefault();
          plugin.open.call(plugin, i+1);
        });

        return {
          src: $anchor.attr('href')
        };
      });

      //Create the modal
      plugin.modal = new $.Modal({
        templates: plugin.T,
        fixed: true,
        stopPropagation: 'img, .js-gallery-nav',
        content: plugin.T.gallery({
          title: plugin.settings.title,
          description: plugin.settings.description,
          imgs: plugin.imgs
        })
      });

      //Activate Carousel
      plugin.$carousel = plugin.modal.$modal.find('.js-gallery-carousel');
      plugin.$carousel
        .carousel({scrollDelay:500, scrollEventDelay:500, loop:true})
        .lazyload({
          images:'img.lazy',
          effect:'fadeIn',
          threshold: window.$window.width() * 0.8
        });

      //Key press
      window.$window.on('keydown', function(e){

        if( !plugin.modal.$wrapper.hasClass('is-active') ) return;

        if(e.keyCode==37){//left

          plugin.$carousel.carousel('previous');

        } else if(e.keyCode==39){//right

          plugin.$carousel.carousel('next');

        } else if(e.keyCode==27){//esc

          plugin.modal.close();

        }
      });

      //Go to next when you click on one of the images
      plugin.$carousel.on('click', 'img', function(){
        plugin.$carousel.carousel('next');
      });

      //Fit images according to the size of the screen
      plugin.$carousel._fitImages();

      $.respond.bind('resize', function(e, scrn){
        plugin.$carousel._fitImages();
      });

    },

    /**
     * Open the gallery to a specific item
     *
     * @method
     * @name jquery.gallery#open
     * @param {integer} page The page to open up the gallery to
    **/
    open: function(page){
      var plugin = this;

      plugin.modal.open();
      plugin.$carousel
        .carousel('gotoPage', page, false)
        .lazyload('update');
    },

    /**
     * Close the gallery
     *
     * @method
     * @name jquery.gallery#close
    **/
    close: function(){
      this.modal.close();
    }
  });

  // Return the jquery object
  // This way you don't need to require both jquery and the plugin
  return $;

});
