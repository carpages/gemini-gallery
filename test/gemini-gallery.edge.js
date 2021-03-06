/* eslint key-spacing: ["error", { "align": "colon" }] */
requirejs.config({
  baseUrl: '../',
  paths  : {
    underscore                 : 'bower_components/underscore/underscore',
    jquery                     : 'bower_components/jquery/dist/jquery',
    handlebars                 : 'bower_components/handlebars/handlebars.runtime',
    'jquery.boiler'            : 'bower_components/jquery-boiler/jquery.boiler',
    'jquery.hammer'            : 'bower_components/jquery-hammerjs/jquery.hammer',
    fastclick                  : 'bower_components/fastclick/lib/fastclick',
    hammerjs                   : 'bower_components/hammerjs/hammer',
    'gemini.support'           : 'bower_components/gemini-support/gemini.support',
    gemini                     : 'bower_components/gemini-loader/gemini',
    'gemini.modal'             : 'bower_components/gemini-modal/gemini.modal',
    'gemini.modal.templates'   : 'bower_components/gemini-modal/templates',
    'gemini.carousel'          : 'bower_components/gemini-carousel/gemini.carousel',
    'gemini.carousel.templates': 'bower_components/gemini-carousel/templates',
    'gemini.lazyload'          : 'bower_components/gemini-lazyload/gemini.lazyload',
    'gemini.respond'           : 'bower_components/gemini-respond/gemini.respond',
    'gemini.fold'              : 'bower_components/gemini-fold/gemini.fold',
    'gemini.touch'             : 'bower_components/gemini-touch/gemini.touch',
    'gemini.gallery.templates' : 'templates'
  }
});

require([ 'gemini', 'gemini.gallery' ], function( G ) {
  G( '#js-gallery' ).gallery();
});
