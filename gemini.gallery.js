/**
 * @fileoverview

A Gemini plugin to quickly build galleries using a modal and carousel.

### Notes
- Default template requires the 'fit' module from gemini-css
- The gallery is built using a list of images. See example.

 *
 * @namespace gemini.gallery
 * @copyright Carpages.ca 2014
 * @author Matt Rose <matt@mattrose.ca>
 *
 * @requires gemini
 * @requires gemini.modal
 * @requires gemini.carousel
 * @requires gemini.lazyload
 * @requires gemini.respond
 *
 * @prop {integer} scrollSpeed {@link gemini.carousel#scrollSpeed}
 * @prop {array} screens {@link gemini.carousel#screens}
 * @prop {object} templates {@link gemini.gallery#templates}
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
  G('#js-gallery').gallery();
 */

( function( factory ) {
  if ( typeof define === 'function' && define.amd ) {
    // AMD. Register as an anonymous module.
    define([
      'gemini',
      'gemini.gallery.templates',
      'gemini.modal',
      'gemini.carousel',
      'gemini.lazyload',
      'gemini.respond'
    ], factory );
  } else if ( typeof exports === 'object' ) {
    // Node/CommonJS
    module.exports = factory(
      require( 'gemini' ),
      require( './templates.js' ),
      require( 'gemini.modal' ),
      require( 'gemini.carousel' ),
      require( 'gemini.lazyload' ),
      require( 'gemini.respond' )
    );
  } else {
    // Browser globals
    factory( G, Templates.Default.Gallery );
  }
}( function( $, T ) {
  var _ = $._;

  $.boiler( 'gallery', {
    defaults: {
      /**
       * The speed that the carousel scrolls at in milliseconds.
       * @name gemini.carousel#scrollSpeed
       * @type Integer
       * @default 500
       */
      scrollSpeed: 500,

      /**
       * An array of screens to look for in the anchors data attributes to use
       * when lazy loading the images
       * @name gemini.carousel#screens
       * @type Array
       * @default []
       */
      screens: [],

      /**
       * Precompiled Handlebar templates to replace default. Expecting 'gallery'
       * and 'modal'
       * @name gemini.gallery#templates
       * @type object
       * @default {}
       */
      templates: {}
    },

    data: [ 'title', 'description' ],

    init: function() {
      var plugin = this;

      // Extend the templates
      plugin.T = $.extend( T, plugin.settings.templates );

      // Grab images
      plugin.imgs = _.map( plugin.$el.find( '> li > a' ), function( anchor, i ) {
        var $anchor = $( anchor );

        $anchor.click( function( e ) {
          e.preventDefault();
          plugin.open.call( plugin, i + 1 );
        });

        var screens = [];
        _.each( plugin.settings.screens, function( scn ) {
          if ( !!$anchor.data( scn )) {
            screens.push({
              screen: scn,
              src:    $anchor.data( scn )
            });
          }
        });

        return {
          src:     $anchor.attr( 'href' ),
          screens: screens
        };
      });

      // Create the modal
      plugin.modal = new $.Modal({
        templates:       plugin.T,
        fixed:           true,
        stopPropagation: 'img, .js-gallery-nav',
        content:         plugin.T.gallery({
          title:       plugin.settings.title,
          description: plugin.settings.description,
          imgs:        plugin.imgs
        })
      });

      // Activate Carousel
      plugin.$carousel = plugin.modal.$content.find( '.js-gallery-carousel' );
      plugin.$carousel
        .carousel({ scrollSpeed: plugin.settings.scrollSpeed, loop: true })
        .lazyload({
          images:    'img.lazy',
          effect:    'fadeIn',
          threshold: window.$window.width() * 0.8
        });

      // Key press
      window.$window.on( 'keydown', function( e ) {
        if ( !plugin.modal.$modal.hasClass( 'is-active' )) {
          return;
        }

        if ( e.keyCode == 37 ) {
          // left
          plugin.$carousel.carousel( 'previous' );
        } else if ( e.keyCode == 39 ) {
          // right
          plugin.$carousel.carousel( 'next' );
        } else if ( e.keyCode == 27 ) {
          // esc
          plugin.modal.close();
        }
      });

      // Go to next when you click on one of the images
      plugin.$carousel.on( 'click', 'img', function() {
        plugin.$carousel.carousel( 'next' );
      });

      // Fit images according to the size of the screen
      plugin.$carousel.find( '.fit' )._fit();

      $.respond.bind( 'resize', function( e, scrn ) {
        plugin.$carousel.find( '.fit' )._fit();
      });
    },

    /**
     * Open the gallery to a specific item
     *
     * @method
     * @name gemini.gallery#open
     * @param {integer} page The page to open up the gallery to
    **/
    open: function( page ) {
      var plugin = this;

      plugin.modal.open();
      plugin.$carousel
        .carousel( 'gotoPage', page, false )
        .lazyload( 'update' );
    },

    /**
     * Close the gallery
     *
     * @method
     * @name gemini.gallery#close
    **/
    close: function() {
      this.modal.close();
    }
  });

  // Return the jquery object
  // This way you don't need to require both jquery and the plugin
  return $;
}));
