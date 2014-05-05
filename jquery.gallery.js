define([
	'underscore',
	'jquery.boiler',
	'modules/gallery/templates',
	'jquery.modal',
	'jquery.carousel'
], function(_, $, T){

	$.boiler('gallery', {
		defaults: {},

		events: {},

		data: ['title', 'description'],

		init: function(){
			var plugin = this;

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
				template: 'modalGallery',
				fixed: true,
				stopPropagation: 'img, .carousel__next, .carousel__previous',
				content: T.galleryDefault({
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

			var lazyResize = _.debounce(function(){
				plugin.$carousel._fitImages();
			}, 500);

			var windowWidth = window.$window.width();

			window.$window.resize(function(){
				if(Math.abs(windowWidth - $window.width()) > 20){
					lazyResize();
					windowWidth = window.$window.width();
				}
			});

		},

		open: function(page){
			var plugin = this;

			plugin.modal.open();
			plugin.$carousel
				.carousel('gotoPage', page, false)
				.lazyload('update');
		}
	});

	// Return the jquery object
	// This way you don't need to require both jquery and the plugin
	return $;

});
